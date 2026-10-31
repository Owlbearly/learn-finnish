/**
 * Content schema for the Finnish learning database.
 *
 * All learning content lives in TypeScript "content packs" (src/data/content/*.ts).
 * On server start they are validated and seeded into the SQLite database.
 *
 * Difficulty scale ("level") used everywhere: 1–10
 *   1–2  absolute beginner (A1.1)   – very short, high-frequency phrases
 *   3–4  A1                         – simple sentences, basic cases
 *   5–6  A2                         – several cases combined, past tense, longer sentences
 *   7–8  B1                         – subordinate clauses, conditional, passive, perfect
 *   9–10 B1+/B2                     – dense, idiomatic, complex sentences
 */

export type TopicKind = "phrases" | "grammar" | "family";

export interface Topic {
  /** stable id, kebab-case, e.g. "inessiv-elativ-illativ" */
  id: string;
  kind: TopicKind;
  /** German title */
  title: string;
  /** Finnish title / keyword */
  titleFi: string;
  /** recommended order on the learning path (lower = earlier) */
  order: number;
  /** base difficulty 1–10 */
  level: number;
  /** single emoji used as icon */
  icon: string;
  /** one-line German summary */
  summary: string;
  /**
   * German grammar explanation in "markdown-lite":
   *  - "### Heading", paragraphs separated by blank lines
   *  - **bold**, *italic*, `code`
   *  - "- " bullet lists
   *  - tables: lines starting with "|" (first row = header, no separator row needed)
   */
  explanation: string;
}

export interface Gap {
  /** the exact token from `fi` that is blanked out (without punctuation) */
  answer: string;
  /** 2–3 plausible WRONG alternatives, ideally other forms of the same word (other case / person / tense) */
  options: string[];
  /** short German explanation why `answer` is correct (and the others not) */
  why: string;
}

export interface Sentence {
  /** unique id, e.g. "ine-001" */
  id: string;
  /** topic id */
  topic: string;
  /** Finnish sentence with normal punctuation */
  fi: string;
  /** natural German translation */
  de: string;
  /** difficulty 1–10 */
  level: number;
  /** optional gap for fill-in / multiple-choice-form exercises */
  gap?: Gap;
  /** optional short German grammar note specific to this sentence */
  note?: string;
  /** other correct Finnish versions (accepted in writing tasks) */
  alt?: string[];
}

export interface ReadingQuestion {
  /** question in German (or simple Finnish for higher levels) */
  q: string;
  options: string[];
  /** index into options */
  answer: number;
  /** German explanation, ideally quoting the relevant Finnish passage */
  why: string;
}

export interface ReadingText {
  id: string;
  title: string;
  /** optional related topic id */
  topic?: string;
  level: number;
  /** Finnish text, sentences separated by spaces, paragraphs by "\n\n" */
  fi: string;
  /** German translation (same paragraph structure) */
  de: string;
  questions: ReadingQuestion[];
}

export interface FamilyMember {
  fi: string;
  de: string;
  /** how it is derived, e.g. "-ja = Person, die etwas tut" */
  note?: string;
}

export interface WordFamily {
  /** must equal the id of a Topic with kind "family" */
  topic: string;
  root: string;
  rootDe: string;
  members: FamilyMember[];
}

export interface ContentPack {
  name: string;
  topics: Topic[];
  sentences: Sentence[];
  /**
   * Lexicon of word FORMS as a multi-line string, one entry per line:
   *   form | lemma | German meaning | grammatical analysis (German)
   * Example:
   *   Helsingissä | Helsinki | Helsinki | Inessiv (-ssa = „in“); Stufenwechsel nk → ng
   *   asun | asua | wohnen | Verb Typ 1, Präsens 1. Person Sg. (minä)
   * Lookup is case-insensitive. Every word that appears in a sentence or text should have an entry.
   */
  lexicon: string;
  texts?: ReadingText[];
  families?: WordFamily[];
}

export interface LexiconEntry {
  form: string;
  lemma: string;
  de: string;
  analysis: string;
}
