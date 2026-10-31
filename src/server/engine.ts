import type { Database } from "bun:sqlite";
import type {
  AchievementInfo, AnswerRequest, AnswerResponse, Exercise, ExerciseType, Gloss, MeResponse,
  NextResponse, SessionSummary, TopicInfo, UserInfo,
} from "../shared/api";
import type { FamilyMember, Gap, ReadingQuestion } from "../data/types";
import { shuffle, tokenize } from "../shared/text";
import { ACHIEVEMENTS, type AchievementStats, computeXp, comboMultiplier, levelFromXp, topicStars } from "./gamification";

// ---------------------------------------------------------------------------
// In-memory view of the content tables
// ---------------------------------------------------------------------------

export interface TopicRow {
  id: string; kind: "phrases" | "grammar" | "family"; title: string; title_fi: string;
  ord: number; level: number; icon: string; summary: string; explanation: string;
}
export interface SentenceRow {
  id: string; topic: string; fi: string; de: string; level: number;
  gap?: Gap; note?: string; alt: string[]; tokens: string[];
}
export interface TextRow {
  id: string; title: string; topic: string | null; level: number; fi: string; de: string; questions: ReadingQuestion[];
}
export interface FamilyRow { topic: string; root: string; rootDe: string; members: FamilyMember[] }

export class ContentStore {
  topics = new Map<string, TopicRow>();
  topicList: TopicRow[] = [];
  sentences = new Map<string, SentenceRow>();
  byTopic = new Map<string, SentenceRow[]>();
  lexicon = new Map<string, Gloss>();
  texts = new Map<string, TextRow>();
  families = new Map<string, FamilyRow>();

  constructor(db: Database) {
    this.topicList = db.query<TopicRow, []>("SELECT * FROM topics ORDER BY ord").all();
    for (const t of this.topicList) this.topics.set(t.id, t);
    for (const r of db.query<any, []>("SELECT * FROM sentences").all()) {
      const s: SentenceRow = {
        id: r.id, topic: r.topic, fi: r.fi, de: r.de, level: r.level,
        gap: r.gap_json ? JSON.parse(r.gap_json) : undefined,
        note: r.note ?? undefined, alt: r.alt_json ? JSON.parse(r.alt_json) : [], tokens: tokenize(r.fi),
      };
      this.sentences.set(s.id, s);
      const l = this.byTopic.get(s.topic) ?? [];
      l.push(s);
      this.byTopic.set(s.topic, l);
    }
    for (const r of db.query<any, []>("SELECT * FROM lexicon").all())
      this.lexicon.set(r.key, { form: r.form, lemma: r.lemma, de: r.de ?? "", analysis: r.analysis ?? "" });
    for (const r of db.query<any, []>("SELECT * FROM texts ORDER BY level").all())
      this.texts.set(r.id, { ...r, questions: JSON.parse(r.questions_json) });
    for (const r of db.query<any, []>("SELECT * FROM families").all())
      this.families.set(r.topic, { topic: r.topic, root: r.root, rootDe: r.root_de, members: JSON.parse(r.members_json) });
  }

  gloss(...texts: string[]): Record<string, Gloss> {
    const out: Record<string, Gloss> = {};
    for (const t of texts)
      for (const w of tokenize(t)) {
        const k = w.toLowerCase();
        const g = this.lexicon.get(k);
        if (g) out[k] = g;
      }
    return out;
  }
}

// ---------------------------------------------------------------------------
// Adaptive difficulty
// ---------------------------------------------------------------------------

/** How much harder an exercise type is compared to simply recognising the meaning. */
export const TYPE_BONUS: Record<ExerciseType, number> = {
  meaning: 0, listen: 0.6, gap_choice: 0.4, build_choice: 0.7, order: 0.9,
  gap_write: 1.3, dictation: 1.6, translate: 2.2, pairs: 0.3, reading: 0.5,
};
/** Minimum skill before a type is offered. */
export const TYPE_MIN: Record<ExerciseType, number> = {
  meaning: 0, listen: 1.4, gap_choice: 0, build_choice: 1.6, order: 1.3,
  gap_write: 2.6, dictation: 3.2, translate: 4.2, pairs: 0, reading: 1.8,
};

export function clampSkill(x: number): number {
  return Math.max(1, Math.min(10, x));
}

/**
 * Adaptive tempo: every correct answer raises the skill, faster with a growing streak
 * (and when the item was harder than the current skill). Two mistakes within the last
 * four answers trigger a "step back" (−0.6) so the learner gets easier material again.
 */
export function adaptSkill(
  skill: number,
  opts: { correct: boolean; streak: number; difficulty: number; hints: number; recent: boolean[] },
): { skill: number; delta: number; stepBack: boolean; speedUp: boolean } {
  let delta: number;
  let stepBack = false;
  let speedUp = false;
  if (opts.correct) {
    const tempo = 1 + Math.min(opts.streak, 8) * 0.2;
    const challenge = Math.max(0.4, Math.min(1.6, 1 + (opts.difficulty - skill) * 0.3));
    delta = (0.12 * tempo * challenge) / (1 + opts.hints * 0.5);
    speedUp = opts.streak > 0 && opts.streak % 5 === 0;
  } else {
    delta = -0.12;
    const last = opts.recent.slice(-3);
    if (last.filter((r) => !r).length >= 1) {
      // this wrong answer + at least one other in the last 3 → step back
      delta -= 0.6;
      stepBack = true;
    }
  }
  const next = clampSkill(skill + delta);
  return { skill: next, delta: next - skill, stepBack, speedUp };
}

// ---------------------------------------------------------------------------
// Sessions
// ---------------------------------------------------------------------------

export type Mode = "mixed" | "topic" | "review" | "reading";

interface Session {
  id: string;
  userId: number;
  mode: Mode;
  topic?: string;
  textId?: string;
  audio: boolean;
  total: number;
  done: number;
  served: Set<string>;
  recent: boolean[];
  combo: number;
  maxCombo: number;
  xp: number;
  correct: number;
  answered: number;
  skillBefore: number;
  current?: Exercise;
  lastType?: ExerciseType;
  lastTopic?: string;
  retries: { itemId: string; at: number }[];
  achievements: AchievementInfo[];
  summary?: SessionSummary;
  counter: number;
  created: number;
}

interface ItemProgress { item_id: string; box: number; seen: number; correct: number; wrong: number; last_seen: number; due: number }
interface TopicProgressRow { topic_id: string; skill: number; answered: number; correct: number; xp: number }

const BOX_INTERVAL_MIN = [0, 10, 60 * 24, 60 * 24 * 3, 60 * 24 * 7, 60 * 24 * 21];
const SESSION_LENGTH = 12;

export function today(d = new Date()): string {
  return d.toLocaleDateString("sv-SE");
}

function rand<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)]!;
}

export class Engine {
  sessions = new Map<string, Session>();

  constructor(private db: Database, public content: ContentStore) {}

  // ---------------- users ----------------

  createUser(name: string) {
    const r = this.db
      .query<{ id: number }, [string, number]>("INSERT INTO users (name, created_at) VALUES (?, ?) RETURNING id")
      .get(name.trim().slice(0, 40) || "Oppija", Date.now());
    return r!.id;
  }

  listUsers() {
    return this.db.query<{ id: number; name: string; xp: number }, []>("SELECT id, name, xp FROM users ORDER BY id").all();
  }

  private user(id: number) {
    return this.db.query<any, [number]>("SELECT * FROM users WHERE id = ?").get(id);
  }

  private topicProgress(userId: number): Map<string, TopicProgressRow> {
    const rows = this.db
      .query<TopicProgressRow, [number]>("SELECT topic_id, skill, answered, correct, xp FROM topic_progress WHERE user_id = ?")
      .all(userId);
    return new Map(rows.map((r) => [r.topic_id, r]));
  }

  private itemProgress(userId: number): Map<string, ItemProgress> {
    const rows = this.db.query<ItemProgress, [number]>("SELECT * FROM item_progress WHERE user_id = ?").all(userId);
    return new Map(rows.map((r) => [r.item_id, r]));
  }

  private isUnlocked(t: TopicRow, skill: number, tp: Map<string, TopicProgressRow>): boolean {
    return t.level <= skill + 1.5 || t.ord <= 3 || (tp.get(t.id)?.answered ?? 0) > 0;
  }

  userInfo(userId: number): UserInfo | null {
    const u = this.user(userId);
    if (!u) return null;
    const lv = levelFromXp(u.xp);
    const d = this.db.query<any, [number, string]>("SELECT * FROM daily WHERE user_id = ? AND day = ?").get(userId, today());
    const tot = this.db
      .query<{ n: number; c: number }, [number]>("SELECT COUNT(*) n, COALESCE(SUM(correct),0) c FROM answers WHERE user_id = ?")
      .get(userId)!;
    const due = this.db
      .query<{ n: number }, [number, number]>("SELECT COUNT(*) n FROM item_progress WHERE user_id = ? AND due <= ? AND seen > 0")
      .get(userId, Date.now())!;
    const week: { day: string; xp: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const day = today(new Date(Date.now() - i * 864e5));
      const r = this.db.query<{ xp: number }, [number, string]>("SELECT xp FROM daily WHERE user_id = ? AND day = ?").get(userId, day);
      week.push({ day, xp: r?.xp ?? 0 });
    }
    // streak is broken if last activity is older than yesterday
    const yesterday = today(new Date(Date.now() - 864e5));
    const streak = u.last_active === today() || u.last_active === yesterday ? u.streak_days : 0;
    return {
      id: u.id, name: u.name, skill: u.skill, xp: u.xp, level: lv.level, levelTitle: lv.title, levelIcon: lv.icon,
      levelProgress: lv.progress, xpToNext: lv.xpToNext, streakDays: streak, bestCombo: u.best_combo,
      dailyXp: d?.xp ?? 0, dailyGoal: u.daily_goal, lessons: u.lessons, answered: tot.n,
      accuracy: tot.n ? tot.c / tot.n : 0, dueCount: due.n, week,
    };
  }

  me(userId: number): MeResponse | null {
    const user = this.userInfo(userId);
    if (!user) return null;
    const tp = this.topicProgress(userId);
    const topics: TopicInfo[] = this.content.topicList.map((t) => {
      const p = tp.get(t.id);
      return {
        id: t.id, kind: t.kind, title: t.title, titleFi: t.title_fi, order: t.ord, level: t.level, icon: t.icon,
        summary: t.summary, sentenceCount: this.content.byTopic.get(t.id)?.length ?? 0,
        skill: p?.skill ?? t.level, answered: p?.answered ?? 0, correct: p?.correct ?? 0,
        stars: topicStars(t, p), unlocked: this.isUnlocked(t, user.skill, tp),
      };
    });
    const unlocked = new Set(
      this.db.query<{ key: string }, [number]>("SELECT key FROM achievements WHERE user_id = ?").all(userId).map((r) => r.key),
    );
    const ip = this.itemProgress(userId);
    return {
      user, topics,
      achievements: ACHIEVEMENTS.map(({ check, ...a }) => ({ ...a, unlocked: unlocked.has(a.key) })),
      texts: [...this.content.texts.values()].map((t) => ({
        id: t.id, title: t.title, level: t.level, read: (ip.get(t.id)?.correct ?? 0) > 0,
      })),
    };
  }

  setDailyGoal(userId: number, goal: number) {
    this.db.query("UPDATE users SET daily_goal = ? WHERE id = ?").run(Math.max(20, Math.min(1000, goal)), userId);
  }

  // ---------------- sessions ----------------

  startSession(userId: number, mode: Mode, opts: { topic?: string; textId?: string; audio?: boolean }): Session | null {
    const u = this.user(userId);
    if (!u) return null;
    if (mode === "topic" && (!opts.topic || !this.content.topics.has(opts.topic))) return null;
    if (mode === "reading" && opts.textId && !this.content.texts.has(opts.textId)) return null;
    // garbage-collect old sessions
    for (const [k, s] of this.sessions) if (Date.now() - s.created > 6 * 3600e3) this.sessions.delete(k);
    const skill = mode === "topic" ? this.topicSkill(userId, opts.topic!) : u.skill;
    const s: Session = {
      id: crypto.randomUUID(), userId, mode, topic: opts.topic, textId: opts.textId, audio: opts.audio !== false,
      total: mode === "reading" ? 1 : SESSION_LENGTH, done: 0, served: new Set(), recent: [], combo: 0, maxCombo: 0,
      xp: 0, correct: 0, answered: 0, skillBefore: skill, retries: [], achievements: [], counter: 0, created: Date.now(),
    };
    this.sessions.set(s.id, s);
    return s;
  }

  private topicSkill(userId: number, topicId: string): number {
    const r = this.db
      .query<{ skill: number }, [number, string]>("SELECT skill FROM topic_progress WHERE user_id = ? AND topic_id = ?")
      .get(userId, topicId);
    return r?.skill ?? this.content.topics.get(topicId)?.level ?? 1;
  }

  private currentSkill(s: Session): number {
    if (s.mode === "topic") return this.topicSkill(s.userId, s.topic!);
    return this.user(s.userId)?.skill ?? 1;
  }

  next(sessionId: string): NextResponse | null {
    const s = this.sessions.get(sessionId);
    if (!s) return null;
    const progress = { done: s.done, total: s.total };
    if (s.done >= s.total) return { done: true, summary: this.finish(s), progress };
    if (s.current) return { done: false, exercise: s.current, progress };
    const ex = this.pickExercise(s);
    if (!ex) {
      s.total = s.done;
      return { done: true, summary: this.finish(s), progress: { done: s.done, total: s.total } };
    }
    s.current = ex;
    s.served.add(ex.itemId);
    s.lastType = ex.type;
    s.lastTopic = ex.topic;
    return { done: false, exercise: ex, progress };
  }

  private pickExercise(s: Session): Exercise | null {
    const skill = this.currentSkill(s);

    // 1) reading session
    if (s.mode === "reading") {
      const text = s.textId ? this.content.texts.get(s.textId) : this.pickText(s, skill, true);
      return text ? this.buildReading(s, text) : null;
    }

    // 2) a sentence answered wrongly earlier comes back in an easier format
    const retryIdx = s.retries.findIndex((r) => r.at <= s.done);
    if (retryIdx >= 0) {
      const r = s.retries.splice(retryIdx, 1)[0]!;
      const sent = this.content.sentences.get(r.itemId);
      if (sent) {
        const types: ExerciseType[] = sent.gap ? ["gap_choice", "build_choice", "order"] : ["meaning", "order"];
        const type = rand(types.filter((t) => t !== s.lastType && this.typeFits(t, sent, s, 10)) as ExerciseType[]) ?? "meaning";
        const ex = this.buildSentence(s, sent, type, skill);
        ex.retry = true;
        return ex;
      }
    }

    const ip = this.itemProgress(s.userId);
    const tp = this.topicProgress(s.userId);
    let scope: SentenceRow[];
    if (s.mode === "topic") {
      scope = this.content.byTopic.get(s.topic!) ?? [];
      const fam = this.content.families.get(s.topic!);
      if (fam && (s.done === 1 || s.done === 7) && !s.served.has(fam.topic)) return this.buildPairs(s, fam);
    } else {
      const unlocked = this.content.topicList.filter((t) => this.isUnlocked(t, skill, tp));
      const ids = new Set(unlocked.map((t) => t.id));
      scope = [...this.content.sentences.values()].filter((x) => ids.has(x.topic));
      if (s.mode === "review") {
        const now = Date.now();
        const due = scope.filter((x) => {
          const p = ip.get(x.id);
          return p && p.seen > 0 && p.due <= now;
        });
        if (due.length >= 3) scope = due;
      }
      // a reading text in the middle of a mixed lesson
      if (s.mode === "mixed" && s.done === Math.floor(s.total * 0.6) && skill >= TYPE_MIN.reading) {
        const text = this.pickText(s, skill, false, ip);
        if (text) return this.buildReading(s, text);
      }
      // occasionally a word-family matching game
      if (s.mode === "mixed" && s.done === 3) {
        const fams = unlocked.filter((t) => t.kind === "family" && this.content.families.has(t.id));
        if (fams.length && Math.random() < 0.6) return this.buildPairs(s, this.content.families.get(rand(fams).id)!);
      }
    }
    if (!scope.length) return null;

    const target = skill + 0.4;
    const now = Date.now();
    let best: { s: SentenceRow; t: ExerciseType; score: number } | null = null;
    const types: ExerciseType[] = ["meaning", "listen", "gap_choice", "build_choice", "order", "gap_write", "dictation", "translate"];
    for (const sent of scope) {
      if (s.served.has(sent.id)) continue;
      const p = ip.get(sent.id);
      let itemScore = 0;
      if (!p) itemScore += 0.4;
      else if (p.due <= now) itemScore += 0.8 + (p.wrong > p.correct ? 0.4 : 0);
      else itemScore -= 0.5 + p.box / 5;
      if (s.mode === "mixed" && sent.topic === s.lastTopic) itemScore -= 0.3;
      // topics the learner has hardly practised get a little boost in mixed mode
      if (s.mode !== "topic" && (tp.get(sent.topic)?.answered ?? 0) < 10) itemScore += 0.2;
      for (const t of types) {
        if (!this.typeFits(t, sent, s, skill)) continue;
        let score = itemScore - Math.abs(sent.level + TYPE_BONUS[t] - target);
        if (t === s.lastType) score -= 0.7;
        score += (Math.random() - 0.5) * 1.2;
        if (!best || score > best.score) best = { s: sent, t, score };
      }
    }
    if (!best) return null;
    return this.buildSentence(s, best.s, best.t, skill);
  }

  private typeFits(t: ExerciseType, sent: SentenceRow, s: Session, skill: number): boolean {
    if (skill < TYPE_MIN[t]) return false;
    const n = sent.tokens.length;
    switch (t) {
      case "listen":
      case "dictation":
        if (!s.audio) return false;
        return t === "listen" || n <= 9;
      case "gap_choice":
      case "gap_write":
        return !!sent.gap;
      case "order":
        return n >= 3 && n <= 12;
      case "translate":
        return n <= 11;
      default:
        return true;
    }
  }

  private pickText(s: Session, skill: number, anyLevel: boolean, ip = this.itemProgress(s.userId)): TextRow | undefined {
    const texts = [...this.content.texts.values()].filter((t) => !s.served.has(t.id));
    const fitting = texts.filter((t) => t.level <= skill + 1);
    const pool = fitting.length ? fitting : anyLevel ? texts : [];
    if (!pool.length) return undefined;
    // prefer unread, then closest to the learner's level
    return pool
      .map((t) => ({ t, score: -(ip.get(t.id)?.seen ?? 0) * 2 - Math.abs(t.level - skill) + Math.random() }))
      .sort((a, b) => b.score - a.score)[0]!.t;
  }

  private exBase(s: Session, type: ExerciseType, itemId: string, topicId: string, difficulty: number) {
    const topic = this.content.topics.get(topicId);
    return {
      id: `${s.id}:${++s.counter}`, type, itemId, topic: topicId, topicTitle: topic?.title ?? "",
      difficulty: Math.round(difficulty * 10) / 10,
    };
  }

  buildSentence(s: Session, sent: SentenceRow, type: ExerciseType, skill: number): Exercise {
    const topic = this.content.topics.get(sent.topic)!;
    const base = this.exBase(s, type, sent.id, sent.topic, sent.level + TYPE_BONUS[type]);
    const help = {
      why: sent.gap?.why, note: sent.note, gloss: this.content.gloss(sent.fi, ...(sent.gap?.options ?? [])),
      topicId: topic.id, topicTitle: topic.title,
    };
    const ex: Exercise = { ...base, instruction: "", fi: sent.fi, de: sent.de, help, wrongForms: sent.gap?.options };
    const pool = this.content.byTopic.get(sent.topic) ?? [];
    switch (type) {
      case "meaning":
      case "listen": {
        const opts = this.distractors(sent, pool, (x) => x.de, 3);
        ex.options = shuffle([sent.de, ...opts]);
        ex.answerIndex = ex.options.indexOf(sent.de);
        ex.instruction = type === "meaning" ? "Was bedeutet dieser Satz?" : "Hör zu – was bedeutet der Satz?";
        break;
      }
      case "gap_choice": {
        const g = sent.gap!;
        ex.gapIndex = sent.tokens.indexOf(g.answer);
        ex.options = shuffle([g.answer, ...g.options]);
        ex.answerIndex = ex.options.indexOf(g.answer);
        ex.instruction = "Welche Form passt in die Lücke?";
        break;
      }
      case "build_choice": {
        let variants: string[] = [];
        if (sent.gap) variants = sent.gap.options.map((o) => replaceToken(sent.fi, sent.gap!.answer, o));
        variants = [...new Set(variants)].filter((v) => v !== sent.fi);
        if (variants.length < 2) variants.push(...this.distractors(sent, pool, (x) => x.fi, 3 - variants.length));
        ex.options = shuffle([sent.fi, ...variants.slice(0, 3)]);
        ex.answerIndex = ex.options.indexOf(sent.fi);
        ex.instruction = "Welcher finnische Satz ist richtig?";
        ex.help.gloss = this.content.gloss(sent.fi, ...ex.options);
        break;
      }
      case "order": {
        const tokens = sent.tokens.slice();
        if (skill >= 5) {
          const g = this.content.lexicon.get(tokens[0]!.toLowerCase());
          if (g && g.lemma[0] === g.lemma[0]!.toLowerCase()) tokens[0] = tokens[0]!.toLowerCase();
        }
        let tiles = tokens.slice();
        if (skill >= 3.5 && sent.gap) tiles.push(rand(sent.gap.options));
        tiles = shuffle(tiles);
        if (tiles.join(" ") === tokens.join(" ")) tiles = shuffle(tiles);
        ex.tiles = tiles;
        ex.accept = [sent.fi, ...sent.alt].map((x) => tokenize(x).join(" ").toLowerCase());
        ex.instruction = "Bilde den finnischen Satz.";
        break;
      }
      case "gap_write": {
        const g = sent.gap!;
        ex.gapIndex = sent.tokens.indexOf(g.answer);
        ex.gapLemma = this.content.lexicon.get(g.answer.toLowerCase())?.lemma;
        ex.accept = [g.answer];
        ex.instruction = "Schreibe die richtige Form in die Lücke.";
        break;
      }
      case "dictation":
        ex.accept = [sent.fi];
        ex.instruction = "Hör zu und schreibe den Satz auf.";
        break;
      case "translate":
        ex.accept = [sent.fi, ...sent.alt];
        ex.instruction = "Übersetze ins Finnische.";
        break;
      default:
        break;
    }
    return ex;
  }

  private distractors(sent: SentenceRow, pool: SentenceRow[], f: (x: SentenceRow) => string, n: number): string[] {
    const own = f(sent);
    const len = own.length;
    const cand = new Map<string, number>();
    const add = (list: SentenceRow[], penalty: number) => {
      for (const x of list) {
        const v = f(x);
        if (x.id === sent.id || v === own || cand.has(v)) continue;
        cand.set(v, Math.abs(v.length - len) / Math.max(10, len) + penalty + Math.random() * 0.6);
      }
    };
    add(pool, 0);
    if (cand.size < n + 2) add([...this.content.sentences.values()].filter((x) => Math.abs(x.level - sent.level) <= 2), 0.5);
    return [...cand.entries()].sort((a, b) => a[1] - b[1]).slice(0, n).map(([v]) => v);
  }

  private buildPairs(s: Session, fam: FamilyRow): Exercise {
    const topic = this.content.topics.get(fam.topic)!;
    const members = shuffle(fam.members).slice(0, 5);
    return {
      ...this.exBase(s, "pairs", fam.topic, fam.topic, topic.level + TYPE_BONUS.pairs),
      instruction: `Wortfamilie „${fam.root}“ (${fam.rootDe}): Finde die Paare.`,
      fi: fam.root, de: fam.rootDe, pairs: members,
      help: { gloss: this.content.gloss(...members.map((m) => m.fi)), topicId: topic.id, topicTitle: topic.title, note: members.map((m) => `**${m.fi}** – ${m.de}${m.note ? ` (${m.note})` : ""}`).join("\n") },
    };
  }

  private buildReading(s: Session, t: TextRow): Exercise {
    const topicId = t.topic ?? this.content.topicList[0]?.id ?? "";
    const topic = this.content.topics.get(topicId);
    const base = this.exBase(s, "reading", t.id, topicId, t.level + TYPE_BONUS.reading);
    if (!t.topic) base.topicTitle = "Lesen & Verstehen";
    return {
      ...base,
      instruction: "Lies den Text und beantworte die Fragen.",
      fi: t.fi, de: t.de,
      reading: { title: t.title, fi: t.fi, de: t.de, questions: t.questions },
      help: { gloss: this.content.gloss(t.fi), topicId, topicTitle: topic?.title ?? "" },
    };
  }

  // ---------------- answers ----------------

  answer(sessionId: string, req: AnswerRequest): AnswerResponse | null {
    const s = this.sessions.get(sessionId);
    if (!s || !s.current || s.current.id !== req.exerciseId) return null;
    const ex = s.current;
    s.current = undefined;
    const correct = !!req.correct;
    const userBefore = this.user(s.userId);
    const levelBefore = levelFromXp(userBefore.xp).level;

    // combo & xp
    s.combo = correct ? s.combo + 1 : 0;
    s.maxCombo = Math.max(s.maxCombo, s.combo);
    const xp = correct ? computeXp(ex.type, { combo: s.combo - 1, hints: req.hints, ms: req.ms, remark: req.remark, score: req.score }) : 0;
    s.xp += xp;
    s.answered++;
    if (correct) s.correct++;
    s.done++;

    // adaptive skill (global + topic)
    const globalSkill: number = userBefore.skill;
    const tSkill = this.topicSkill(s.userId, ex.topic);
    const adaptOpts = { correct, streak: s.combo, difficulty: ex.difficulty, hints: req.hints, recent: s.recent };
    const g = adaptSkill(globalSkill, adaptOpts);
    const t = adaptSkill(tSkill, adaptOpts);
    s.recent.push(correct);
    if (g.stepBack || t.stepBack) s.recent = [];
    // in topic mode the global skill moves more slowly
    const newGlobal = s.mode === "topic" ? clampSkill(globalSkill + g.delta * 0.4) : g.skill;

    if (!correct && ex.type !== "reading" && ex.type !== "pairs") {
      s.retries.push({ itemId: ex.itemId, at: Math.min(s.done + 3, s.total - 1) });
    }

    const now = Date.now();
    const day = today();
    const writeType = ex.type === "gap_write" || ex.type === "translate" || ex.type === "dictation";
    const tx = this.db.transaction(() => {
      // spaced repetition (Leitner boxes)
      const p = this.db
        .query<ItemProgress, [number, string]>("SELECT * FROM item_progress WHERE user_id = ? AND item_id = ?")
        .get(s.userId, ex.itemId);
      const box = correct ? Math.min(5, (p?.box ?? 0) + 1) : Math.max(0, (p?.box ?? 0) - 2);
      this.db
        .query(
          `INSERT INTO item_progress (user_id, item_id, box, seen, correct, wrong, last_seen, due) VALUES (?,?,?,?,?,?,?,?)
           ON CONFLICT(user_id, item_id) DO UPDATE SET box=excluded.box, seen=seen+1, correct=correct+excluded.correct,
             wrong=wrong+excluded.wrong, last_seen=excluded.last_seen, due=excluded.due`,
        )
        .run(s.userId, ex.itemId, box, 1, correct ? 1 : 0, correct ? 0 : 1, now, now + BOX_INTERVAL_MIN[box]! * 60e3);
      this.db
        .query(
          `INSERT INTO topic_progress (user_id, topic_id, skill, answered, correct, xp) VALUES (?,?,?,?,?,?)
           ON CONFLICT(user_id, topic_id) DO UPDATE SET skill=excluded.skill, answered=answered+1,
             correct=correct+excluded.correct, xp=xp+excluded.xp`,
        )
        .run(s.userId, ex.topic, t.skill, 1, correct ? 1 : 0, xp);
      // streak
      const yesterday = today(new Date(now - 864e5));
      let streak = userBefore.streak_days as number;
      if (userBefore.last_active !== day) streak = userBefore.last_active === yesterday ? streak + 1 : 1;
      this.db
        .query("UPDATE users SET skill = ?, xp = xp + ?, best_combo = MAX(best_combo, ?), streak_days = ?, last_active = ? WHERE id = ?")
        .run(newGlobal, xp, s.combo, streak, day, s.userId);
      this.db
        .query(
          `INSERT INTO daily (user_id, day, xp, answered, correct) VALUES (?,?,?,1,?)
           ON CONFLICT(user_id, day) DO UPDATE SET xp=xp+excluded.xp, answered=answered+1, correct=correct+excluded.correct`,
        )
        .run(s.userId, day, xp, correct ? 1 : 0);
      this.db
        .query("INSERT INTO answers (user_id, item_id, topic, ex_type, correct, ms, hints, at) VALUES (?,?,?,?,?,?,?,?)")
        .run(s.userId, ex.itemId, ex.topic, writeType ? `${ex.type}` : ex.type, correct ? 1 : 0, req.ms, req.hints, now);
    });
    tx();

    const userAfter = this.user(s.userId);
    const lv = levelFromXp(userAfter.xp);
    const achievements = this.checkAchievements(s.userId);
    s.achievements.push(...achievements);
    return {
      xp, combo: s.combo, multiplier: comboMultiplier(s.combo), skill: s.mode === "topic" ? t.skill : newGlobal,
      skillDelta: s.mode === "topic" ? t.delta : newGlobal - globalSkill, stepBack: g.stepBack || t.stepBack,
      speedUp: g.speedUp, levelUp: lv.level > levelBefore ? { level: lv.level, title: lv.title } : undefined,
      achievements, sessionXp: s.xp, progress: { done: s.done, total: s.total },
    };
  }

  /** Skip the current exercise (e.g. no audio available) without penalty. */
  skip(sessionId: string): boolean {
    const s = this.sessions.get(sessionId);
    if (!s || !s.current) return false;
    if (s.current.type === "listen" || s.current.type === "dictation") s.audio = false;
    s.current = undefined;
    return true;
  }

  private finish(s: Session): SessionSummary {
    if (s.summary) return s.summary;
    const perfect = s.answered >= 8 && s.correct === s.answered;
    this.db
      .query("UPDATE users SET lessons = lessons + 1, perfect_lessons = perfect_lessons + ? WHERE id = ?")
      .run(perfect ? 1 : 0, s.userId);
    s.achievements.push(...this.checkAchievements(s.userId));
    const info = this.userInfo(s.userId)!;
    s.summary = {
      xp: s.xp, correct: s.correct, answered: s.answered, maxCombo: s.maxCombo, skillBefore: s.skillBefore,
      skillAfter: this.currentSkill(s), perfect, achievements: s.achievements, streakDays: info.streakDays,
      dailyXp: info.dailyXp, dailyGoal: info.dailyGoal,
    };
    return s.summary;
  }

  private checkAchievements(userId: number): AchievementInfo[] {
    const u = this.user(userId);
    const have = new Set(
      this.db.query<{ key: string }, [number]>("SELECT key FROM achievements WHERE user_id = ?").all(userId).map((r) => r.key),
    );
    const q = (sql: string) => (this.db.query<{ n: number }, [number]>(sql).get(userId)?.n ?? 0);
    const tp = this.topicProgress(userId);
    let three = 0;
    for (const [id, p] of tp) {
      const t = this.content.topics.get(id);
      if (t && topicStars(t, p) === 3) three++;
    }
    const stats: AchievementStats = {
      lessons: u.lessons, perfectLessons: u.perfect_lessons, bestCombo: u.best_combo,
      answered: q("SELECT COUNT(*) n FROM answers WHERE user_id = ?"),
      streakDays: u.streak_days,
      textsRead: q("SELECT COUNT(DISTINCT item_id) n FROM answers WHERE user_id = ? AND ex_type = 'reading' AND correct = 1"),
      topicsPracticed: tp.size, threeStarTopics: three,
      writeCorrect: q("SELECT COUNT(*) n FROM answers WHERE user_id = ? AND ex_type IN ('gap_write','translate','dictation') AND correct = 1"),
      listenCorrect: q("SELECT COUNT(*) n FROM answers WHERE user_id = ? AND ex_type IN ('listen','dictation') AND correct = 1"),
      skill: u.skill, level: levelFromXp(u.xp).level,
    };
    const fresh: AchievementInfo[] = [];
    for (const a of ACHIEVEMENTS) {
      if (have.has(a.key) || !a.check(stats)) continue;
      this.db.query("INSERT INTO achievements (user_id, key, unlocked_at) VALUES (?,?,?)").run(userId, a.key, Date.now());
      fresh.push({ key: a.key, icon: a.icon, title: a.title, desc: a.desc });
    }
    return fresh;
  }

  // ---------------- browsing ----------------

  topicDetail(topicId: string) {
    const t = this.content.topics.get(topicId);
    if (!t) return null;
    const sentences = (this.content.byTopic.get(topicId) ?? []).slice().sort((a, b) => a.level - b.level);
    return {
      topic: { id: t.id, kind: t.kind, title: t.title, titleFi: t.title_fi, level: t.level, icon: t.icon, summary: t.summary, explanation: t.explanation },
      sentences: sentences.map((x) => ({ id: x.id, fi: x.fi, de: x.de, level: x.level, note: x.note, why: x.gap?.why })),
      family: this.content.families.get(topicId) ?? null,
      gloss: this.content.gloss(...sentences.map((x) => x.fi)),
    };
  }
}

/** Replace the first occurrence of a whole token in a sentence, preserving capitalisation. */
export function replaceToken(sentence: string, token: string, replacement: string): string {
  const re = new RegExp(`(^|[\\s"“„(])${escapeRe(token)}(?=$|[\\s.,!?;:"”)])`);
  return sentence.replace(re, (_m, pre: string) => {
    const atStart = pre === "" || /["“„(]$/.test(pre);
    const rep = atStart && token[0] === token[0]!.toUpperCase() ? replacement[0]!.toUpperCase() + replacement.slice(1) : replacement;
    return pre + rep;
  });
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
