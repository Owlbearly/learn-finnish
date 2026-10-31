import type { AchievementInfo, ExerciseType } from "../shared/api";

/** Learner ranks: Finnish animals, from hedgehog to swan. */
export const RANKS = [
  { title: "Siili", de: "Igel", icon: "🦔" },
  { title: "Orava", de: "Eichhörnchen", icon: "🐿️" },
  { title: "Jänis", de: "Hase", icon: "🐇" },
  { title: "Kettu", de: "Fuchs", icon: "🦊" },
  { title: "Pöllö", de: "Eule", icon: "🦉" },
  { title: "Ilves", de: "Luchs", icon: "🐈" },
  { title: "Poro", de: "Rentier", icon: "🦌" },
  { title: "Susi", de: "Wolf", icon: "🐺" },
  { title: "Hirvi", de: "Elch", icon: "🫎" },
  { title: "Karhu", de: "Bär", icon: "🐻" },
  { title: "Joutsen", de: "Singschwan", icon: "🦢" },
];

/** XP needed to reach level n (level 1 = 0 XP). */
export function xpForLevel(n: number): number {
  return 60 * n * (n - 1);
}

export function levelFromXp(xp: number) {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  const cur = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const rank = RANKS[Math.min(level - 1, RANKS.length - 1)]!;
  const suffix = level > RANKS.length ? ` ${level - RANKS.length + 1}` : "";
  return {
    level,
    title: `${rank.title}${suffix} (${rank.de})`,
    icon: rank.icon,
    progress: (xp - cur) / (next - cur),
    xpToNext: next - xp,
  };
}

export const TYPE_XP: Record<ExerciseType, number> = {
  meaning: 10,
  listen: 12,
  gap_choice: 10,
  build_choice: 12,
  order: 14,
  gap_write: 15,
  dictation: 18,
  translate: 22,
  pairs: 15,
  reading: 30,
};

/** Combo multiplier: +10 % per correct answer in a row, max ×2. */
export function comboMultiplier(combo: number): number {
  return 1 + Math.min(combo, 10) * 0.1;
}

export function computeXp(
  type: ExerciseType,
  opts: { combo: number; hints: number; ms: number; remark?: string; score?: number },
): number {
  let xp = TYPE_XP[type] * comboMultiplier(opts.combo);
  if (type === "reading" && opts.score !== undefined) xp *= opts.score;
  if (opts.hints > 0) xp *= 1 / (1 + opts.hints * 0.5);
  if (opts.remark) xp *= 0.8;
  // speed bonus: quick answers in choice tasks
  if (opts.ms > 0 && opts.ms < 6000 && ["meaning", "gap_choice", "build_choice", "listen"].includes(type)) xp += 3;
  return Math.round(xp);
}

export interface AchievementDef extends AchievementInfo {
  check: (s: AchievementStats) => boolean;
}

export interface AchievementStats {
  lessons: number;
  perfectLessons: number;
  bestCombo: number;
  answered: number;
  streakDays: number;
  textsRead: number;
  topicsPracticed: number;
  threeStarTopics: number;
  writeCorrect: number;
  listenCorrect: number;
  skill: number;
  level: number;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { key: "first-lesson", icon: "🌱", title: "Ensimmäinen askel", desc: "Erste Lektion abgeschlossen", check: (s) => s.lessons >= 1 },
  { key: "combo-10", icon: "🔥", title: "Tulessa", desc: "10 richtige Antworten in Folge", check: (s) => s.bestCombo >= 10 },
  { key: "combo-25", icon: "☄️", title: "Pysäyttämätön", desc: "25 richtige Antworten in Folge", check: (s) => s.bestCombo >= 25 },
  { key: "perfect", icon: "💎", title: "Täydellinen", desc: "Eine Lektion ohne Fehler", check: (s) => s.perfectLessons >= 1 },
  { key: "perfect-5", icon: "👑", title: "Mestari", desc: "5 fehlerfreie Lektionen", check: (s) => s.perfectLessons >= 5 },
  { key: "answers-100", icon: "💯", title: "Sata", desc: "100 Aufgaben gelöst", check: (s) => s.answered >= 100 },
  { key: "answers-500", icon: "🏔️", title: "Viisisataa", desc: "500 Aufgaben gelöst", check: (s) => s.answered >= 500 },
  { key: "answers-1000", icon: "🚀", title: "Tuhat", desc: "1000 Aufgaben gelöst", check: (s) => s.answered >= 1000 },
  { key: "streak-3", icon: "📅", title: "Sitkeä", desc: "3 Tage in Folge gelernt", check: (s) => s.streakDays >= 3 },
  { key: "streak-7", icon: "🗓️", title: "Sisu", desc: "7 Tage in Folge gelernt", check: (s) => s.streakDays >= 7 },
  { key: "streak-30", icon: "🏆", title: "Kova sisu", desc: "30 Tage in Folge gelernt", check: (s) => s.streakDays >= 30 },
  { key: "reader", icon: "📖", title: "Lukutoukka", desc: "5 Lesetexte gelesen (Bücherwurm)", check: (s) => s.textsRead >= 5 },
  { key: "explorer", icon: "🧭", title: "Tutkimusmatkailija", desc: "10 verschiedene Themen geübt", check: (s) => s.topicsPracticed >= 10 },
  { key: "three-stars", icon: "⭐", title: "Tähti", desc: "3 Sterne in einem Thema", check: (s) => s.threeStarTopics >= 1 },
  { key: "writer", icon: "✍️", title: "Kirjoittaja", desc: "25 Schreibaufgaben richtig", check: (s) => s.writeCorrect >= 25 },
  { key: "listener", icon: "🎧", title: "Kuuntelija", desc: "25 Höraufgaben richtig", check: (s) => s.listenCorrect >= 25 },
  { key: "skill-5", icon: "🧗", title: "Puolivälissä", desc: "Schwierigkeitsstufe 5 erreicht", check: (s) => s.skill >= 5 },
  { key: "skill-8", icon: "🦅", title: "Korkealla", desc: "Schwierigkeitsstufe 8 erreicht", check: (s) => s.skill >= 8 },
  { key: "level-5", icon: "🦉", title: "Pöllö", desc: "Rang 5 erreicht", check: (s) => s.level >= 5 },
];

/** Stars for a topic: based on correct answers and topic skill relative to the topic's base level. */
export function topicStars(t: { level: number }, p: { answered: number; correct: number; skill: number } | undefined): number {
  if (!p || p.correct < 8) return 0;
  const acc = p.correct / Math.max(1, p.answered);
  if (p.correct >= 50 && acc >= 0.75 && p.skill >= t.level + 2) return 3;
  if (p.correct >= 25 && acc >= 0.65 && p.skill >= t.level + 1) return 2;
  return 1;
}
