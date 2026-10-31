import type { ContentPack, LexiconEntry, ReadingText, Sentence, Topic, WordFamily } from "./types";
import { pack as p1 } from "./content/p1-basics";
import { pack as p2 } from "./content/p2-everyday";
import { pack as p3 } from "./content/p3-cases";
import { pack as p4 } from "./content/p4-forms";
import { pack as p5 } from "./content/p5-tenses";
import { pack as p6 } from "./content/p6-families";

export const packs: ContentPack[] = [p1, p2, p3, p4, p5, p6];

export function parseLexicon(src: string): LexiconEntry[] {
  const out: LexiconEntry[] = [];
  for (const line of src.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const [form, lemma, de, analysis] = t.split("|").map((x) => x.trim());
    if (!form || !lemma) continue;
    out.push({ form, lemma, de: de ?? "", analysis: analysis ?? "" });
  }
  return out;
}

export interface Content {
  topics: Topic[];
  sentences: Sentence[];
  lexicon: LexiconEntry[];
  texts: ReadingText[];
  families: WordFamily[];
}

export function loadContent(): Content {
  const topics: Topic[] = [];
  const sentences: Sentence[] = [];
  const texts: ReadingText[] = [];
  const families: WordFamily[] = [];
  const lex = new Map<string, LexiconEntry>();
  for (const p of packs) {
    topics.push(...p.topics);
    sentences.push(...p.sentences);
    texts.push(...(p.texts ?? []));
    families.push(...(p.families ?? []));
    for (const e of parseLexicon(p.lexicon)) {
      const key = e.form.toLowerCase();
      if (!lex.has(key)) lex.set(key, e);
    }
  }
  topics.sort((a, b) => a.order - b.order);
  return { topics, sentences, lexicon: [...lex.values()], texts, families };
}
