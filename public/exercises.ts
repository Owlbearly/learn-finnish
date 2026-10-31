/** Renderers for every exercise type. Each returns an ExView the lesson runner drives. */
import type { Exercise, Gloss } from "../src/shared/api";
import { checkAnswer, isAccepted, shuffle, splitParts, tokenize } from "../src/shared/text";
import { burst, h, hasFinnishVoice, settings, sfx, showGloss, speak } from "./lib";

export interface CheckOutcome {
  correct: boolean;
  remark?: "typo" | "umlaut";
  score?: number;
  /** what the learner gave (for diff display) */
  given?: string;
  /** the solution to display */
  solution?: string;
}

export interface Hint {
  label: string;
  icon: string;
  /** costs XP (counts as a hint) */
  cost: boolean;
  apply: () => string | HTMLElement | void;
}

export interface ExView {
  el: HTMLElement;
  ready(): boolean;
  check(): CheckOutcome;
  hints: Hint[];
  /** focus the main input */
  focus?(): void;
  /** keyboard shortcut handling (digits for options) */
  key?(e: KeyboardEvent): boolean;
  /** this exercise reports its own result (choice click, pairs, reading) */
  auto?: boolean;
}

export interface Ctx {
  changed(): void;
  submit(o?: CheckOutcome): void;
}

// ---------------------------------------------------------------- shared pieces

/** Finnish sentence with tappable words. gapIndex replaces that token by `gapEl`. */
export function sentenceEl(fi: string, gloss: Record<string, Gloss>, opts: { gapIndex?: number; gapEl?: HTMLElement; cls?: string } = {}) {
  const wrap = h("div", { class: `sentence ${opts.cls ?? ""}` });
  let wi = 0;
  for (const part of splitParts(fi)) {
    const span = h("span", null);
    if (part.pre) span.append(part.pre);
    if (part.word) {
      if (wi === opts.gapIndex && opts.gapEl) span.append(opts.gapEl);
      else span.append(wordEl(part.word, gloss));
      wi++;
    }
    if (part.post) span.append(part.post);
    wrap.append(span, " ");
  }
  return wrap;
}

export function wordEl(word: string, gloss: Record<string, Gloss>) {
  const el = h("span", { class: "w" }, word);
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    showGloss(el, gloss[word.toLowerCase()], word);
    if (settings.audio) speak(word);
  });
  return el;
}

export function speakButtons(text: string, big = false) {
  const main = h("button", { class: big ? "speak-big" : "icon-btn", title: "Anhören", "aria-label": "Anhören" }, "🔊");
  const slow = h("button", { class: "icon-btn", title: "Langsam anhören", "aria-label": "Langsam anhören" }, "🐢");
  const play = (slowly: boolean) => {
    main.classList.add("playing");
    speak(text, { slow: slowly, onend: () => main.classList.remove("playing") });
  };
  main.onclick = () => play(false);
  slow.onclick = () => play(true);
  return { el: h("div", { class: "speak-row" }, main, slow), play };
}

function glossTable(gloss: Record<string, Gloss>, words: string[]) {
  const seen = new Set<string>();
  const rows = words
    .map((w) => w.toLowerCase())
    .filter((w) => (seen.has(w) ? false : (seen.add(w), true)))
    .map((w) => {
      const g = gloss[w];
      return h("tr", null, h("td", null, w), h("td", null, g ? g.de : "–", g && g.lemma.toLowerCase() !== w ? h("div", { class: "an" }, `Grundform: ${g.lemma}`) : null),
        h("td", { class: "an" }, g?.analysis ?? ""));
    });
  return h("table", { class: "gloss-table" }, h("tbody", null, rows));
}

function ruleText(ex: Exercise) {
  const parts = [ex.help.why, ex.help.note].filter(Boolean);
  return parts.length ? parts.join("\n\n") : `Schau dir die Erklärung zum Thema „${ex.topicTitle}“ an.`;
}

const glossHint = (ex: Exercise, text = ex.fi): Hint => ({
  label: "Wörter erklären", icon: "📖", cost: false, apply: () => glossTable(ex.help.gloss, tokenize(text)),
});
const ruleHint = (ex: Exercise): Hint => ({ label: "Regel / Tipp zeigen", icon: "💡", cost: true, apply: () => ruleText(ex) });

// ---------------------------------------------------------------- multiple choice (meaning, listen, gap_choice, build_choice)

function choiceView(ex: Exercise, ctx: Ctx, top: (Node | string)[], opts: { onPick?: (o: string) => void; grid?: boolean } = {}): ExView {
  const options = ex.options ?? [];
  let picked = -1;
  const btns = options.map((o, i) =>
    h("button", { class: "opt", onclick: () => choose(i) }, h("span", { class: "key" }, String(i + 1)), h("span", null, o)),
  );
  const choose = (i: number) => {
    if (picked >= 0 || btns[i]!.classList.contains("eliminated")) return;
    picked = i;
    const ok = i === ex.answerIndex;
    btns.forEach((b) => (b.disabled = true));
    btns[i]!.classList.add(ok ? "correct" : "wrong");
    if (!ok) btns[ex.answerIndex!]!.classList.add("correct");
    opts.onPick?.(options[i]!);
    ctx.submit({ correct: ok, given: options[i], solution: options[ex.answerIndex!] });
  };
  const eliminate: Hint = {
    label: "Eine falsche Antwort streichen", icon: "✂️", cost: true,
    apply: () => {
      const wrong = btns.filter((b, i) => i !== ex.answerIndex && !b.classList.contains("eliminated"));
      if (wrong.length > 1) wrong[Math.floor(Math.random() * wrong.length)]!.classList.add("eliminated");
      return "Eine falsche Antwort wurde durchgestrichen.";
    },
  };
  return {
    el: h("div", null, top, h("div", { class: `options ${opts.grid ? "grid2" : ""}` }, btns)),
    ready: () => false,
    check: () => ({ correct: picked === ex.answerIndex }),
    hints: [eliminate],
    auto: true,
    key: (e) => {
      const n = Number(e.key);
      if (n >= 1 && n <= btns.length) { choose(n - 1); return true; }
      return false;
    },
  };
}

function meaningView(ex: Exercise, ctx: Ctx): ExView {
  const sp = speakButtons(ex.fi);
  const v = choiceView(ex, ctx, [h("div", { class: "row" }, sp.el.firstChild as HTMLElement, sentenceEl(ex.fi, ex.help.gloss))]);
  if (settings.audio && settings.autoplay) setTimeout(() => sp.play(false), 250);
  v.hints = [glossHint(ex), ...v.hints, ruleHint(ex)];
  return v;
}

function listenView(ex: Exercise, ctx: Ctx): ExView {
  const sp = speakButtons(ex.fi, true);
  const hidden = h("div", { class: "hidden", style: { marginTop: "6px" } }, sentenceEl(ex.fi, ex.help.gloss, { cls: "small" }));
  const warn = hasFinnishVoice() ? null : h("p", { class: "muted small" }, "⚠️ Dein Browser hat keine finnische Stimme – die Aussprache kann ungenau sein. Tipp: Text über „Hilfe“ anzeigen oder Hörübungen in den Einstellungen deaktivieren.");
  const v = choiceView(ex, ctx, [h("div", { class: "row center", style: { justifyContent: "center" } }, sp.el), hidden, warn ?? ""]);
  setTimeout(() => sp.play(false), 300);
  v.hints = [
    { label: "Text anzeigen", icon: "👀", cost: true, apply: () => { hidden.classList.remove("hidden"); return "Der finnische Text wird jetzt angezeigt."; } },
    ...v.hints, glossHint(ex),
  ];
  return v;
}

function gapChoiceView(ex: Exercise, ctx: Ctx): ExView {
  const slot = h("span", { class: "gap-slot" }, "  ?  ");
  const v = choiceView(
    ex, ctx,
    [sentenceEl(ex.fi, ex.help.gloss, { gapIndex: ex.gapIndex, gapEl: slot }), h("div", { class: "translation" }, ex.de)],
    {
      grid: true,
      onPick: (o) => {
        const ok = o === ex.options![ex.answerIndex!];
        slot.textContent = ex.options![ex.answerIndex!]!;
        slot.classList.add(ok ? "ok" : "bad");
      },
    },
  );
  v.hints = [...v.hints, ruleHint(ex), glossHint(ex, ex.fi.replace(tokenize(ex.fi)[ex.gapIndex!]!, ""))];
  return v;
}

function buildChoiceView(ex: Exercise, ctx: Ctx): ExView {
  const v = choiceView(ex, ctx, [h("div", { class: "de-prompt" }, ex.de)]);
  v.hints = [glossHint(ex, ex.options!.join(" ")), ...v.hints, ruleHint(ex)];
  return v;
}

// ---------------------------------------------------------------- word order

function orderView(ex: Exercise, ctx: Ctx): ExView {
  const tiles = ex.tiles ?? [];
  const chosen: number[] = [];
  const zone = h("div", { class: "answer-zone" });
  const bank = h("div", { class: "tiles" });
  const bankBtns = tiles.map((t, i) => {
    const b = h("button", { class: "tile", onclick: () => { if (!b.classList.contains("used")) { chosen.push(i); sfx.click(); redraw(); } } }, t);
    return b;
  });
  bank.append(...bankBtns);
  const redraw = () => {
    zone.replaceChildren(...chosen.map((i, pos) =>
      h("button", { class: "tile", onclick: () => { chosen.splice(pos, 1); redraw(); } }, tiles[i]!)));
    bankBtns.forEach((b, i) => b.classList.toggle("used", chosen.includes(i)));
    ctx.changed();
  };
  const given = () => chosen.map((i) => tiles[i]!).join(" ").toLowerCase();
  const solutionTokens = tokenize(ex.fi);
  return {
    el: h("div", null, h("div", { class: "de-prompt" }, ex.de), zone, bank),
    ready: () => chosen.length > 0,
    check: () => {
      const g = given();
      const ok = (ex.accept ?? []).includes(g);
      return { correct: ok, given: chosen.map((i) => tiles[i]!).join(" "), solution: ex.fi };
    },
    hints: [
      {
        label: "Nächstes Wort einsetzen", icon: "🧩", cost: true,
        apply: () => {
          // keep the correct prefix, then add the next right tile
          let k = 0;
          while (k < chosen.length && tiles[chosen[k]!]!.toLowerCase() === solutionTokens[k]?.toLowerCase()) k++;
          chosen.splice(k);
          const want = solutionTokens[k]?.toLowerCase();
          const idx = tiles.findIndex((t, i) => t.toLowerCase() === want && !chosen.includes(i));
          if (idx >= 0) chosen.push(idx);
          redraw();
          return k < solutionTokens.length ? `„${solutionTokens[k]}“ wurde eingesetzt.` : "Alle Wörter stehen schon richtig.";
        },
      },
      { label: "Wörter erklären", icon: "📖", cost: false, apply: () => glossTable(ex.help.gloss, tiles) },
      ruleHint(ex),
    ],
    key: (e) => {
      if (e.key === "Backspace" && chosen.length) { chosen.pop(); redraw(); return true; }
      return false;
    },
  };
}

// ---------------------------------------------------------------- writing

function specialKeys(input: HTMLInputElement | HTMLTextAreaElement) {
  return h("div", { class: "special-keys" }, ["ä", "ö", "Ä", "Ö"].map((ch) =>
    h("button", {
      type: "button",
      onclick: () => {
        const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? s;
        input.value = input.value.slice(0, s) + ch + input.value.slice(e);
        input.focus(); input.setSelectionRange(s + 1, s + 1);
        input.dispatchEvent(new Event("input"));
      },
    }, ch)));
}

function writeCheck(input: string, ex: Exercise): CheckOutcome {
  // single-word gap answers must be exact (only missing umlauts are forgiven)
  const r = checkAnswer(input, ex.accept ?? [ex.fi], { strict: ex.type === "gap_write", wrongForms: ex.wrongForms });
  return {
    correct: isAccepted(r.verdict),
    remark: r.verdict === "typo" || r.verdict === "umlaut" ? r.verdict : undefined,
    given: input, solution: r.closest,
  };
}

function gapWriteView(ex: Exercise, ctx: Ctx): ExView {
  const answer = ex.accept![0]!;
  const input = h("input", { class: "gap-input", autocomplete: "off", autocapitalize: "off", spellcheck: false, "aria-label": "Lücke" }) as HTMLInputElement;
  input.style.width = `${Math.max(5, answer.length + 2)}ch`;
  input.addEventListener("input", () => ctx.changed());
  const lemma = ex.gapLemma ? h("div", { class: "lemma-hint" }, `Grundform: `, h("b", null, ex.gapLemma)) : null;
  const choices = h("div", { class: "wordbank hidden" });
  return {
    el: h("div", null, sentenceEl(ex.fi, ex.help.gloss, { gapIndex: ex.gapIndex, gapEl: input }), h("div", { class: "translation" }, ex.de), lemma, choices, specialKeys(input)),
    ready: () => input.value.trim().length > 0,
    check: () => { input.disabled = true; return writeCheck(input.value, ex); },
    focus: () => input.focus(),
    hints: [
      { label: "Anfangsbuchstaben zeigen", icon: "🔤", cost: true, apply: () => { const n = Math.max(2, Math.ceil(answer.length / 3)); input.value = answer.slice(0, n); input.focus(); ctx.changed(); return `Die Form beginnt mit „${answer.slice(0, n)}…“.`; } },
      ruleHint(ex),
      glossHint(ex),
    ],
  };
}

function dictationView(ex: Exercise, ctx: Ctx): ExView {
  const sp = speakButtons(ex.fi, true);
  const area = h("textarea", { class: "write-area", placeholder: "Schreib, was du hörst …", autocapitalize: "sentences", spellcheck: false }) as HTMLTextAreaElement;
  area.addEventListener("input", () => ctx.changed());
  setTimeout(() => sp.play(false), 300);
  const tokens = tokenize(ex.fi);
  return {
    el: h("div", null, h("div", { class: "row", style: { justifyContent: "center" } }, sp.el), area, specialKeys(area),
      hasFinnishVoice() ? null : h("p", { class: "muted small" }, "⚠️ Keine finnische Stimme gefunden – nutze die Hilfe, falls du nichts verstehst.")),
    ready: () => area.value.trim().length > 0,
    check: () => { area.disabled = true; return writeCheck(area.value, ex); },
    focus: () => area.focus(),
    hints: [
      { label: "Anzahl der Wörter", icon: "🔢", cost: false, apply: () => `Der Satz hat ${tokens.length} Wörter.` },
      { label: "Wortanfänge zeigen", icon: "🔤", cost: true, apply: () => tokens.map((t) => t.slice(0, Math.min(2, t.length)) + "…").join("  ") },
      { label: "Bedeutung zeigen", icon: "🇩🇪", cost: true, apply: () => ex.de },
    ],
  };
}

function translateView(ex: Exercise, ctx: Ctx): ExView {
  const area = h("textarea", { class: "write-area", placeholder: "Auf Finnisch …", autocapitalize: "sentences", spellcheck: false }) as HTMLTextAreaElement;
  area.addEventListener("input", () => ctx.changed());
  const tokens = tokenize(ex.fi);
  return {
    el: h("div", null, h("div", { class: "de-prompt" }, ex.de), h("div", { style: { height: "12px" } }), area, specialKeys(area)),
    ready: () => area.value.trim().length > 0,
    check: () => { area.disabled = true; return writeCheck(area.value, ex); },
    focus: () => area.focus(),
    hints: [
      {
        label: "Wortbank (Grundformen)", icon: "🧺", cost: true,
        apply: () => h("div", { class: "wordbank" }, shuffle(tokens.map((t) => ex.help.gloss[t.toLowerCase()]?.lemma ?? t)).map((l) => h("span", null, l))),
      },
      { label: "Satzanfang zeigen", icon: "▶️", cost: true, apply: () => `${tokens.slice(0, Math.max(1, Math.floor(tokens.length / 3))).join(" ")} …` },
      ruleHint(ex),
    ],
  };
}

// ---------------------------------------------------------------- pairs (word families)

function pairsView(ex: Exercise, ctx: Ctx): ExView {
  const pairs = ex.pairs ?? [];
  let selFi: number | null = null, selDe: number | null = null, mistakes = 0, matched = 0;
  const fiOrder = shuffle(pairs.map((_, i) => i)), deOrder = shuffle(pairs.map((_, i) => i));
  const fiBtns = new Map<number, HTMLButtonElement>(), deBtns = new Map<number, HTMLButtonElement>();
  const tryMatch = () => {
    if (selFi === null || selDe === null) return;
    const a = fiBtns.get(selFi)!, b = deBtns.get(selDe)!;
    if (selFi === selDe) {
      a.classList.add("done"); b.classList.add("done"); matched++;
      const r = b.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 14, 5); sfx.correct(matched);
      if (matched === pairs.length) setTimeout(() => ctx.submit({ correct: mistakes <= 1, score: 1 }), 400);
    } else {
      mistakes++; sfx.wrong();
      a.classList.add("bad"); b.classList.add("bad");
      setTimeout(() => { a.classList.remove("bad"); b.classList.remove("bad"); }, 450);
    }
    a.classList.remove("sel"); b.classList.remove("sel"); selFi = selDe = null;
  };
  for (const i of fiOrder) {
    const b = h("button", { class: "pair-btn", onclick: () => { fiBtns.forEach((x) => x.classList.remove("sel")); selFi = i; b.classList.add("sel"); if (settings.audio) speak(pairs[i]!.fi); tryMatch(); } }, pairs[i]!.fi);
    fiBtns.set(i, b);
  }
  for (const i of deOrder) {
    const b = h("button", { class: "pair-btn", onclick: () => { deBtns.forEach((x) => x.classList.remove("sel")); selDe = i; b.classList.add("sel"); tryMatch(); } }, pairs[i]!.de);
    deBtns.set(i, b);
  }
  return {
    el: h("div", null, h("div", { class: "family-root" }, `🌳 ${ex.fi}`), h("p", { class: "muted center" }, `„${ex.de}“ – höchstens ein Fehler erlaubt`),
      h("div", { class: "pairs" }, h("div", { class: "col" }, fiOrder.map((i) => fiBtns.get(i)!)), h("div", { class: "col" }, deOrder.map((i) => deBtns.get(i)!)))),
    ready: () => false,
    check: () => ({ correct: mistakes <= 1 }),
    auto: true,
    hints: [
      {
        label: "Ein Paar aufdecken", icon: "🔗", cost: true,
        apply: () => {
          const i = fiOrder.find((k) => !fiBtns.get(k)!.classList.contains("done"));
          if (i === undefined) return;
          selFi = i; selDe = i; tryMatch();
          return `${pairs[i]!.fi} = ${pairs[i]!.de}`;
        },
      },
      { label: "Ableitungen erklären", icon: "🌳", cost: false, apply: () => h("ul", null, pairs.map((p) => h("li", null, h("b", null, p.fi), ` – ${p.note ?? ""}`))) },
    ],
  };
}

// ---------------------------------------------------------------- reading

function readingView(ex: Exercise, ctx: Ctx): ExView {
  const r = ex.reading!;
  const paras = r.fi.split(/\n\s*\n/);
  const textEl = h("div", { class: "reading-text" }, paras.map((p) => h("p", null, Array.from(sentenceEl(p, ex.help.gloss, { cls: "small" }).childNodes))));
  const deEl = h("div", { class: "reading-de hidden" }, r.de.split(/\n\s*\n/).map((p) => h("p", null, p)));
  const sp = speakButtons(r.fi.replace(/\n+/g, " "));
  const qWrap = h("div");
  let qi = 0, correct = 0;
  const showQ = () => {
    const q = r.questions[qi]!;
    const btns = q.options.map((o, i) => h("button", { class: "opt", onclick: () => pick(i) }, h("span", { class: "key" }, String(i + 1)), h("span", null, o)));
    let done = false;
    const pick = (i: number) => {
      if (done) return; done = true;
      const ok = i === q.answer;
      if (ok) { correct++; sfx.correct(correct); } else sfx.wrong();
      btns.forEach((b) => (b.disabled = true));
      btns[i]!.classList.add(ok ? "correct" : "wrong"); btns[q.answer]!.classList.add("correct");
      const next = h("button", { class: "btn primary", style: { marginTop: "10px" } }, qi + 1 < r.questions.length ? "Nächste Frage →" : "Fertig ✓");
      next.onclick = () => {
        qi++;
        if (qi < r.questions.length) showQ();
        else { const score = correct / r.questions.length; ctx.submit({ correct: score >= 0.6, score }); }
      };
      box.append(h("div", { class: "q-why" }, ok ? "✅ " : "❌ ", q.why), next);
      next.focus();
    };
    const box = h("div", { class: "question card" }, h("div", { class: "muted small" }, `Frage ${qi + 1} von ${r.questions.length}`), h("h3", null, q.q), h("div", { class: "options" }, btns));
    qWrap.replaceChildren(box);
    curKey = (e) => { const n = Number(e.key); if (!done && n >= 1 && n <= btns.length) { pick(n - 1); return true; } return false; };
  };
  let curKey: (e: KeyboardEvent) => boolean = () => false;
  showQ();
  return {
    el: h("div", null, h("h2", null, `📰 ${r.title}`), sp.el, textEl, deEl, qWrap),
    ready: () => false,
    check: () => ({ correct: correct / r.questions.length >= 0.6, score: correct / r.questions.length }),
    auto: true,
    key: (e) => curKey(e),
    hints: [
      { label: "Übersetzung zeigen", icon: "🇩🇪", cost: true, apply: () => { deEl.classList.remove("hidden"); return "Die deutsche Übersetzung steht jetzt unter dem Text."; } },
      { label: "Wörter erklären", icon: "📖", cost: false, apply: () => "Tippe auf ein beliebiges Wort im Text – du siehst Grundform, Bedeutung und Grammatik." },
    ],
  };
}

// ---------------------------------------------------------------- dispatch

export function renderExercise(ex: Exercise, ctx: Ctx): ExView {
  switch (ex.type) {
    case "meaning": return meaningView(ex, ctx);
    case "listen": return listenView(ex, ctx);
    case "gap_choice": return gapChoiceView(ex, ctx);
    case "build_choice": return buildChoiceView(ex, ctx);
    case "order": return orderView(ex, ctx);
    case "gap_write": return gapWriteView(ex, ctx);
    case "dictation": return dictationView(ex, ctx);
    case "translate": return translateView(ex, ctx);
    case "pairs": return pairsView(ex, ctx);
    case "reading": return readingView(ex, ctx);
  }
}

/** Token-level diff of the learner's answer against the solution. */
export function diffEl(given: string, solution: string) {
  const a = tokenize(given), b = tokenize(solution);
  const la = a.map((x) => x.toLowerCase()), lb = b.map((x) => x.toLowerCase());
  // LCS table
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      dp[i]![j] = la[i] === lb[j] ? dp[i + 1]![j + 1]! + 1 : Math.max(dp[i + 1]![j]!, dp[i]![j + 1]!);
  const out: HTMLElement[] = [];
  let i = 0, j = 0;
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && la[i] === lb[j]) { out.push(h("span", { class: "diff-ok" }, b[j]!)); i++; j++; }
    else if (j < b.length && (i >= a.length || dp[i]![j + 1]! >= dp[i + 1]![j]!)) { out.push(h("span", { class: "diff-miss" }, b[j]!)); j++; }
    else { out.push(h("span", { class: "diff-del" }, a[i]!)); i++; }
    out.push(h("span", null, " "));
  }
  return h("div", null, out);
}
