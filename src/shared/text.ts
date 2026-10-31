/** Text utilities shared by server, client and validation scripts. */

const PUNCT_EDGE = /^[\s.,!?;:"'“”„«»()\[\]…–—-]+|[\s.,!?;:"'“”„«»()\[\]…–—-]+$/g;

/** Split a sentence into word tokens (punctuation stripped, original case kept). */
export function tokenize(s: string): string[] {
  return s
    .split(/\s+/)
    .map((t) => t.replace(PUNCT_EDGE, ""))
    .filter((t) => t.length > 0);
}

/** Split a sentence into display parts: words with their attached punctuation. */
export interface Part {
  /** text as shown (with punctuation) */
  raw: string;
  /** bare word (no punctuation), "" for pure punctuation */
  word: string;
  /** punctuation before / after the word */
  pre: string;
  post: string;
}

export function splitParts(s: string): Part[] {
  return s
    .split(/\s+/)
    .filter(Boolean)
    .map((raw) => {
      const m = raw.match(/^([.,!?;:"'“”„«»()\[\]…–—-]*)(.*?)([.,!?;:"'“”„«»()\[\]…–—-]*)$/);
      if (!m) return { raw, word: raw, pre: "", post: "" };
      return { raw, pre: m[1] ?? "", word: m[2] ?? "", post: m[3] ?? "" };
    });
}

/** Normalize for answer comparison: lowercase, unify quotes/dashes, strip punctuation, collapse spaces. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFC")
    .replace(/[’`´]/g, "'")
    .replace(/[.,!?;:"“”„«»()\[\]…–—]/g, " ")
    .replace(/\s+-\s+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Same as normalize but also folds ä→a, ö→o, å→a (to detect "missing umlaut" mistakes). */
export function foldUmlauts(s: string): string {
  return normalize(s).replace(/ä/g, "a").replace(/ö/g, "o").replace(/å/g, "a");
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = new Array(b.length + 1);
  let cur = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    cur[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, cur] = [cur, prev];
  }
  return prev[b.length];
}

export type Verdict = "correct" | "typo" | "umlaut" | "wrong";

export interface CheckResult {
  verdict: Verdict;
  /** the accepted solution closest to the input */
  closest: string;
  distance: number;
}

const PRONOUNS = ["minä", "sinä", "me", "te"];

/** Finnish allows dropping 1st/2nd person subject pronouns: "Minä asun" == "Asun". */
function pronounVariants(solution: string): string[] {
  const n = normalize(solution);
  const out = [n];
  for (const p of PRONOUNS) {
    if (n.startsWith(p + " ")) out.push(n.slice(p.length + 1));
  }
  return out;
}

/**
 * Compare a typed answer against one or more accepted solutions.
 * - exact (after normalization) → correct
 * - only umlauts missing (a/ä, o/ö) → "umlaut" (counted as correct, but flagged)
 * - small edit distance (≤1 for short, ≤2 for long answers) → "typo" (counted as correct, flagged)
 */
export function checkAnswer(
  input: string,
  solutions: string[],
  opts: { strict?: boolean; wrongForms?: string[] } = {},
): CheckResult {
  const inp = normalize(input);
  const r = checkLoose(inp, solutions, opts.strict ?? false);
  if (r.verdict === "typo" && opts.wrongForms?.length) {
    // a "typo" that actually produces another real form (e.g. talosta instead of talossa) is a real mistake
    const wrong = new Set(opts.wrongForms.map((w) => normalize(w)));
    const solTokens = new Set(normalize(r.closest).split(" "));
    if (inp.split(" ").some((t) => wrong.has(t) && !solTokens.has(t))) return { ...r, verdict: "wrong" };
  }
  return r;
}

function checkLoose(inp: string, solutions: string[], strict: boolean): CheckResult {
  let best: CheckResult = { verdict: "wrong", closest: solutions[0] ?? "", distance: Infinity };
  for (const sol of solutions) {
    for (const variant of pronounVariants(sol)) {
      if (inp === variant) return { verdict: "correct", closest: sol, distance: 0 };
      if (foldUmlauts(inp) === foldUmlauts(variant)) {
        if (best.verdict !== "umlaut" || best.distance > 0) best = { verdict: "umlaut", closest: sol, distance: 0 };
        continue;
      }
      const d = levenshtein(inp, variant);
      const tolerance = strict || variant.length <= 5 ? 0 : variant.length <= 12 ? 1 : 2;
      if (d < best.distance && best.verdict !== "umlaut") {
        best = { verdict: d <= tolerance ? "typo" : "wrong", closest: sol, distance: d };
      }
    }
  }
  return best;
}

export function isAccepted(v: Verdict): boolean {
  return v !== "wrong";
}

/** Deterministic shuffle helper (Fisher–Yates) with optional RNG. */
export function shuffle<T>(arr: T[], rnd: () => number = Math.random): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}
