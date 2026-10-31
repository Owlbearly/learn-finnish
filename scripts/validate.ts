/**
 * Validates all content packs.  Run: bun run validate [packName]
 * Errors make the script exit with code 1; warnings (missing lexicon entries) are listed.
 */
import { loadContent, packs, parseLexicon } from "../src/data/index";
import { tokenize } from "../src/shared/text";

const only = process.argv[2];
const errors: string[] = [];
const warnings: string[] = [];
const c = loadContent();

const topicIds = new Set<string>();
for (const t of c.topics) {
  if (topicIds.has(t.id)) errors.push(`duplicate topic id ${t.id}`);
  topicIds.add(t.id);
  if (t.level < 1 || t.level > 10) errors.push(`topic ${t.id}: level out of range`);
  if (!t.explanation || t.explanation.length < 80) errors.push(`topic ${t.id}: explanation too short`);
}

const lex = new Set(c.lexicon.map((e) => e.form.toLowerCase()));
const missing = new Map<string, string[]>();
function checkWords(where: string, text: string) {
  for (const w of tokenize(text)) {
    if (/^\d+$/.test(w)) continue;
    if (!lex.has(w.toLowerCase())) {
      const l = missing.get(w.toLowerCase()) ?? [];
      l.push(where);
      missing.set(w.toLowerCase(), l);
    }
  }
}

const sentIds = new Set<string>();
const perTopic = new Map<string, number>();
for (const p of packs) {
  if (only && p.name !== only) continue;
  for (const e of parseLexicon(p.lexicon)) {
    if (!e.de && !e.analysis) warnings.push(`[${p.name}] lexicon entry without meaning: ${e.form}`);
  }
  for (const s of p.sentences) {
    const where = `[${p.name}] ${s.id}`;
    if (sentIds.has(s.id)) errors.push(`${where}: duplicate sentence id`);
    sentIds.add(s.id);
    if (!topicIds.has(s.topic)) errors.push(`${where}: unknown topic ${s.topic}`);
    perTopic.set(s.topic, (perTopic.get(s.topic) ?? 0) + 1);
    if (s.level < 1 || s.level > 10) errors.push(`${where}: level out of range`);
    if (!s.fi.trim() || !s.de.trim()) errors.push(`${where}: empty fi/de`);
    if (s.gap) {
      const toks = tokenize(s.fi);
      if (!toks.includes(s.gap.answer)) errors.push(`${where}: gap answer "${s.gap.answer}" not a token of "${s.fi}"`);
      if (s.gap.options.length < 2 || s.gap.options.length > 4) errors.push(`${where}: gap needs 2–4 wrong options`);
      if (s.gap.options.some((o) => o.toLowerCase() === s.gap!.answer.toLowerCase()))
        errors.push(`${where}: gap options contain the answer`);
      if (new Set(s.gap.options.map((o) => o.toLowerCase())).size !== s.gap.options.length)
        errors.push(`${where}: duplicate gap options`);
      if (!s.gap.why) errors.push(`${where}: gap.why missing`);
    }
    checkWords(where, s.fi);
    for (const a of s.alt ?? []) checkWords(where + " (alt)", a);
  }
  for (const t of p.texts ?? []) {
    const where = `[${p.name}] text ${t.id}`;
    if (t.topic && !topicIds.has(t.topic)) errors.push(`${where}: unknown topic ${t.topic}`);
    if (t.questions.length < 2) errors.push(`${where}: needs ≥2 questions`);
    t.questions.forEach((q, i) => {
      if (q.answer < 0 || q.answer >= q.options.length) errors.push(`${where} q${i}: answer index invalid`);
      if (q.options.length < 3) errors.push(`${where} q${i}: needs ≥3 options`);
    });
    checkWords(where, t.fi);
  }
  for (const f of p.families ?? []) {
    if (!topicIds.has(f.topic)) errors.push(`[${p.name}] family ${f.root}: unknown topic ${f.topic}`);
    if (f.members.length < 4) errors.push(`[${p.name}] family ${f.root}: needs ≥4 members`);
    for (const m of f.members) checkWords(`[${p.name}] family ${f.root}`, m.fi);
  }
}

for (const t of c.topics) {
  const n = perTopic.get(t.id) ?? 0;
  if ((!only || packs.find((p) => p.name === only)?.topics.includes(t)) && n < 12)
    warnings.push(`topic ${t.id}: only ${n} sentences (aim for ≥20)`);
}

if (missing.size) {
  warnings.push(`${missing.size} word forms without lexicon entry:`);
  for (const [w, wh] of [...missing.entries()].sort()) warnings.push(`  ${w}  ← ${wh.slice(0, 2).join(", ")}${wh.length > 2 ? " …" : ""}`);
}

console.log(`topics: ${c.topics.length}, sentences: ${c.sentences.length}, lexicon: ${c.lexicon.length}, texts: ${c.texts.length}, families: ${c.families.length}`);
if (warnings.length) console.log("\nWARNINGS:\n" + warnings.join("\n"));
if (errors.length) {
  console.log("\nERRORS:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("\nOK");
