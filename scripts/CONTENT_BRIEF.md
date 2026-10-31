# Content authoring brief (Finnish learning app)

The app teaches Finnish to **German speakers** through whole sentences and phrases (not isolated words),
grouped into grammar topics and word families. Exercises generated from the content: multiple choice
(meaning), gap-fill with case/verb-form options, word-order tiles, typing the missing word, typing the
full translation, listening (browser TTS reads the Finnish), dictation, reading texts with questions.
At every step the learner can open help: a per-word gloss (from the lexicon), the gap explanation (`why`),
the sentence `note`, and the topic `explanation`.

## Schema
Read `src/data/types.ts` – it is the authoritative schema with comments (level scale 1–10, markdown-lite
for explanations, lexicon line format `form | lemma | Deutsch | Analyse`).

## Quality rules (very important)
- **Correct standard written Finnish (kirjakieli).** Double-check consonant gradation (kk/k, pp/p, tt/t,
  k/–, p/v, t/d, nk/ng, mp/mm, lt/ll, nt/nn, rt/rr), vowel harmony (-ssa/-ssä, -ko/-kö), case government
  (pitää + elativ, tykätä + elativ, auttaa + illativ, partitive object with negation, etc.), and verb
  forms. If you are not sure a form is correct, use a different sentence.
- Natural, useful, everyday sentences – things people actually say. Vary vocabulary; reuse frequent words.
  Mix short and longer sentences. Higher levels should combine several grammar points ("dense" sentences).
- German translations natural and idiomatic (not word-by-word); add a `note` where Finnish and German differ
  in an interesting way (e.g. "Finnisch benutzt hier den Partitiv, weil …").
- Gaps: blank the word that illustrates the topic. `options` = 2–3 WRONG forms that a learner might
  plausibly choose — ideally the SAME lemma in a different case/person/tense (e.g. answer `Helsingissä`,
  options `Helsinkiin`, `Helsingistä`, `Helsinki`). Options must be real Finnish forms. `why` in German,
  1–2 sentences, explains the rule. Give a gap to ~80 % of the sentences.
- `alt`: add alternative correct Finnish phrasings where common (e.g. different word order, synonym).
  Dropping minä/sinä/me/te is accepted automatically – no need to add those variants.
- Topic `explanation`: a compact but substantial German mini-grammar (≈ 150–400 words) with a table of
  endings/forms and 3–6 examples. This is what the learner reads when they press "Erklärung".
- Lexicon: **every word form occurring in your sentences/texts/families needs a line**, including proper
  nouns, pronouns, particles, numbers written as words. Key is the exact form (lookup is case-insensitive,
  so `Minä` and `minä` share one line). The analysis column should teach: case + meaning of the case,
  person/tense, gradation if relevant, e.g.
  `kirjastoon | kirjasto | Bibliothek | Illativ (-on: „in … hinein“)`
  `en | ei (Verneinungsverb) | nicht | Verneinungsverb, 1. Sg. (minä en …)`
  Other packs have their own lexicons; duplicate entries across packs are fine.
- Sentence ids: use the given prefix + 3 digits, e.g. `ine-001`. Unique.
- Levels: respect the topic's base level; spread sentences across base level … base+3 or so.

## Workflow
1. Write ONLY your own pack file (given below). Do not edit any other file.
2. Run `bun scripts/validate.ts <packName>` (packName = the `name` field) and fix all ERRORS and all
   "word forms without lexicon entry" warnings that come from your pack. Repeat until clean.
3. Do NOT commit. Reply with a short summary (topics, sentence counts, anything uncertain).
