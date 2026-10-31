/** Types exchanged between server and browser client. */

export type ExerciseType =
  | "meaning" // read Finnish → choose German meaning
  | "listen" // hear Finnish → choose German meaning
  | "gap_choice" // sentence with blank → choose correct form
  | "build_choice" // German shown → choose the correct Finnish sentence (near-miss distractors)
  | "order" // German shown → arrange Finnish word tiles
  | "gap_write" // sentence with blank + base form → type the form
  | "dictation" // hear Finnish → type it
  | "translate" // German shown → type the Finnish sentence
  | "pairs" // match Finnish ↔ German words (word families)
  | "reading"; // short text + comprehension questions

export interface Gloss {
  form: string;
  lemma: string;
  de: string;
  analysis: string;
}

export interface Help {
  /** explanation why the gap answer is right */
  why?: string;
  /** sentence-specific grammar note */
  note?: string;
  /** lowercase word form → gloss */
  gloss: Record<string, Gloss>;
  topicId: string;
  topicTitle: string;
}

export interface ReadingPayload {
  title: string;
  fi: string;
  de: string;
  questions: { q: string; options: string[]; answer: number; why: string }[];
}

export interface Exercise {
  /** unique per session step */
  id: string;
  type: ExerciseType;
  /** content item id (sentence id, text id or family topic id) */
  itemId: string;
  topic: string;
  topicTitle: string;
  /** effective difficulty (sentence level + exercise type bonus) */
  difficulty: number;
  /** German instruction */
  instruction: string;
  fi: string;
  de: string;
  /** index of the blanked token in tokenize(fi) */
  gapIndex?: number;
  /** base form shown as hint for gap_write */
  gapLemma?: string;
  options?: string[];
  answerIndex?: number;
  tiles?: string[];
  /** real but wrong forms: a near-miss producing one of these is not counted as a typo */
  wrongForms?: string[];
  /** accepted solutions (word lists for "order", strings for write tasks) */
  accept?: string[];
  pairs?: { fi: string; de: string; note?: string }[];
  reading?: ReadingPayload;
  /** this item was answered wrongly earlier in the session */
  retry?: boolean;
  help: Help;
}

export interface AnswerRequest {
  exerciseId: string;
  correct: boolean;
  /** for reading: number of correctly answered questions / total */
  score?: number;
  ms: number;
  hints: number;
  /** "typo" | "umlaut" for accepted-with-remark answers */
  remark?: string;
}

export interface AchievementInfo {
  key: string;
  icon: string;
  title: string;
  desc: string;
}

export interface AnswerResponse {
  xp: number;
  combo: number;
  multiplier: number;
  skill: number;
  skillDelta: number;
  /** too many mistakes → difficulty stepped back */
  stepBack: boolean;
  /** many correct in a row → tempo increased */
  speedUp: boolean;
  levelUp?: { level: number; title: string };
  achievements: AchievementInfo[];
  sessionXp: number;
  progress: { done: number; total: number };
}

export interface SessionSummary {
  xp: number;
  correct: number;
  answered: number;
  maxCombo: number;
  skillBefore: number;
  skillAfter: number;
  perfect: boolean;
  achievements: AchievementInfo[];
  streakDays: number;
  dailyXp: number;
  dailyGoal: number;
}

export interface NextResponse {
  done: boolean;
  exercise?: Exercise;
  summary?: SessionSummary;
  progress: { done: number; total: number };
}

export interface TopicInfo {
  id: string;
  kind: "phrases" | "grammar" | "family";
  title: string;
  titleFi: string;
  order: number;
  level: number;
  icon: string;
  summary: string;
  sentenceCount: number;
  /** learner state */
  skill: number;
  answered: number;
  correct: number;
  stars: number;
  unlocked: boolean;
}

export interface UserInfo {
  id: number;
  name: string;
  skill: number;
  xp: number;
  level: number;
  levelTitle: string;
  levelIcon: string;
  levelProgress: number;
  xpToNext: number;
  streakDays: number;
  bestCombo: number;
  dailyXp: number;
  dailyGoal: number;
  lessons: number;
  answered: number;
  accuracy: number;
  dueCount: number;
  week: { day: string; xp: number }[];
}

export interface MeResponse {
  user: UserInfo;
  topics: TopicInfo[];
  achievements: (AchievementInfo & { unlocked: boolean })[];
  texts: { id: string; title: string; level: number; read: boolean }[];
}
