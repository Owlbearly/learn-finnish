import { describe, expect, test } from "bun:test";
import { loadContent } from "../src/data/index";
import { openDb, seedContent } from "../src/server/db";
import { adaptSkill, ContentStore, Engine, replaceToken } from "../src/server/engine";
import { levelFromXp } from "../src/server/gamification";
import { checkAnswer, tokenize } from "../src/shared/text";

describe("answer checking", () => {
  test("exact, case and punctuation insensitive", () => {
    expect(checkAnswer("asun helsingissä", ["Asun Helsingissä."]).verdict).toBe("correct");
  });
  test("subject pronoun may be dropped", () => {
    expect(checkAnswer("Asun Helsingissä", ["Minä asun Helsingissä."]).verdict).toBe("correct");
  });
  test("missing umlauts are flagged", () => {
    expect(checkAnswer("Asun Helsingissa", ["Asun Helsingissä."]).verdict).toBe("umlaut");
  });
  test("small typo tolerated in long answers", () => {
    expect(checkAnswer("Minä asun Helsingisä", ["Minä asun Helsingissä."]).verdict).toBe("typo");
  });
  test("wrong case is wrong", () => {
    expect(checkAnswer("Minä asun Helsinkiin", ["Minä asun Helsingissä."]).verdict).toBe("wrong");
  });
  test("near-miss that is another real form is wrong", () => {
    expect(checkAnswer("Asun talosta", ["Asun talossa."], { wrongForms: ["talosta", "taloon"] }).verdict).toBe("wrong");
    expect(checkAnswer("talosta", ["talossa"], { strict: true }).verdict).toBe("wrong");
  });
  test("short words need exact match", () => {
    expect(checkAnswer("olen", ["olet"]).verdict).toBe("wrong");
  });
});

describe("adaptive difficulty", () => {
  test("streak accelerates progress", () => {
    const a = adaptSkill(3, { correct: true, streak: 1, difficulty: 3, hints: 0, recent: [] });
    const b = adaptSkill(3, { correct: true, streak: 8, difficulty: 3, hints: 0, recent: [] });
    expect(b.delta).toBeGreaterThan(a.delta * 2);
  });
  test("two mistakes in a short window step back", () => {
    const r = adaptSkill(4, { correct: false, streak: 0, difficulty: 4, hints: 0, recent: [true, false, true] });
    expect(r.stepBack).toBe(true);
    expect(r.delta).toBeLessThan(-0.5);
  });
  test("single mistake only small decrease", () => {
    const r = adaptSkill(4, { correct: false, streak: 0, difficulty: 4, hints: 0, recent: [true, true, true] });
    expect(r.stepBack).toBe(false);
  });
  test("skill clamped to 1..10", () => {
    expect(adaptSkill(1, { correct: false, streak: 0, difficulty: 1, hints: 0, recent: [false] }).skill).toBe(1);
  });
});

test("levels from xp", () => {
  expect(levelFromXp(0).level).toBe(1);
  expect(levelFromXp(120).level).toBe(2);
});

test("replaceToken keeps capitalisation", () => {
  expect(replaceToken("Helsingissä on kylmä.", "Helsingissä", "Helsinkiin")).toBe("Helsinkiin on kylmä.");
  expect(replaceToken("Asun Helsingissä.", "Helsingissä", "Helsinkiin")).toBe("Asun Helsinkiin.");
});

describe("engine end-to-end", () => {
  const db = openDb(":memory:");
  seedContent(db, loadContent());
  const engine = new Engine(db, new ContentStore(db));

  test("content loaded", () => {
    expect(engine.content.topicList.length).toBeGreaterThan(20);
    expect(engine.content.sentences.size).toBeGreaterThan(400);
  });

  test("every sentence yields valid exercises of every type", () => {
    const uid = engine.createUser("Test");
    const s = engine.startSession(uid, "mixed", {})!;
    const types = ["meaning", "listen", "gap_choice", "build_choice", "order", "gap_write", "dictation", "translate"] as const;
    for (const sent of engine.content.sentences.values()) {
      for (const t of types) {
        if ((t === "gap_choice" || t === "gap_write") && !sent.gap) continue;
        const ex = engine.buildSentence(s as any, sent, t, 6);
        if (ex.options) {
          expect(ex.answerIndex).toBeGreaterThanOrEqual(0);
          expect(new Set(ex.options).size).toBe(ex.options.length);
          expect(ex.options.length).toBeGreaterThanOrEqual(2);
        }
        if (ex.gapIndex !== undefined) expect(ex.gapIndex).toBeGreaterThanOrEqual(0);
        if (t === "order") {
          const solution = tokenize(sent.fi).join(" ").toLowerCase();
          expect(ex.accept).toContain(solution);
          for (const tok of tokenize(sent.fi)) expect(ex.tiles!.map((x) => x.toLowerCase())).toContain(tok.toLowerCase());
        }
      }
    }
  });

  test("a learner who answers everything correctly speeds up; mistakes step back", () => {
    const uid = engine.createUser("Adaptive");
    const s = engine.startSession(uid, "mixed", {})!;
    let last = 1;
    for (let i = 0; i < 12; i++) {
      const n = engine.next(s.id)!;
      if (n.done) break;
      const r = engine.answer(s.id, { exerciseId: n.exercise!.id, correct: true, ms: 3000, hints: 0, score: 1 })!;
      expect(r.skill).toBeGreaterThanOrEqual(last);
      last = r.skill;
    }
    expect(last).toBeGreaterThan(2.5);
    const done = engine.next(s.id)!;
    expect(done.done).toBe(true);
    expect(done.summary!.perfect).toBe(true);
    expect(done.summary!.achievements.map((a) => a.key)).toContain("first-lesson");

    const s2 = engine.startSession(uid, "mixed", {})!;
    let stepped = false;
    for (let i = 0; i < 4; i++) {
      const n = engine.next(s2.id)!;
      const r = engine.answer(s2.id, { exerciseId: n.exercise!.id, correct: false, ms: 3000, hints: 0 })!;
      stepped ||= r.stepBack;
    }
    expect(stepped).toBe(true);
    expect(engine.userInfo(uid)!.skill).toBeLessThan(last);
  });

  test("wrong answers come back later in the session", () => {
    const uid = engine.createUser("Retry");
    const s = engine.startSession(uid, "topic", { topic: engine.content.topicList[0]!.id })!;
    const first = engine.next(s.id)!.exercise!;
    engine.answer(s.id, { exerciseId: first.id, correct: false, ms: 1000, hints: 0 });
    const seen: string[] = [];
    for (let i = 0; i < 5; i++) {
      const n = engine.next(s.id)!;
      if (n.done) break;
      seen.push(n.exercise!.itemId);
      engine.answer(s.id, { exerciseId: n.exercise!.id, correct: true, ms: 1000, hints: 0 });
    }
    expect(seen).toContain(first.itemId);
  });

  test("reading session", () => {
    const uid = engine.createUser("Reader");
    const text = [...engine.content.texts.values()][0]!;
    const s = engine.startSession(uid, "reading", { textId: text.id })!;
    const n = engine.next(s.id)!;
    expect(n.exercise!.type).toBe("reading");
    expect(n.exercise!.reading!.questions.length).toBeGreaterThan(1);
  });
});
