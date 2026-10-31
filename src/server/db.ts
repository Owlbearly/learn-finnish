import { Database } from "bun:sqlite";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import type { Content } from "../data/index";

const SCHEMA = `
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT);

-- ---------- content (re-seeded from src/data when it changes) ----------
CREATE TABLE IF NOT EXISTS topics (
  id TEXT PRIMARY KEY, kind TEXT NOT NULL, title TEXT NOT NULL, title_fi TEXT NOT NULL,
  ord REAL NOT NULL, level REAL NOT NULL, icon TEXT, summary TEXT, explanation TEXT
);
CREATE TABLE IF NOT EXISTS sentences (
  id TEXT PRIMARY KEY, topic TEXT NOT NULL REFERENCES topics(id), fi TEXT NOT NULL, de TEXT NOT NULL,
  level REAL NOT NULL, gap_json TEXT, note TEXT, alt_json TEXT
);
CREATE INDEX IF NOT EXISTS idx_sentences_topic ON sentences(topic);
CREATE TABLE IF NOT EXISTS lexicon (
  key TEXT PRIMARY KEY, form TEXT NOT NULL, lemma TEXT NOT NULL, de TEXT, analysis TEXT
);
CREATE INDEX IF NOT EXISTS idx_lexicon_lemma ON lexicon(lemma);
CREATE TABLE IF NOT EXISTS texts (
  id TEXT PRIMARY KEY, title TEXT NOT NULL, topic TEXT, level REAL NOT NULL,
  fi TEXT NOT NULL, de TEXT NOT NULL, questions_json TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS families (
  topic TEXT PRIMARY KEY REFERENCES topics(id), root TEXT NOT NULL, root_de TEXT NOT NULL, members_json TEXT NOT NULL
);

-- ---------- learners ----------
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  skill REAL NOT NULL DEFAULT 1.0,
  xp INTEGER NOT NULL DEFAULT 0,
  streak_days INTEGER NOT NULL DEFAULT 0,
  last_active TEXT,
  best_combo INTEGER NOT NULL DEFAULT 0,
  daily_goal INTEGER NOT NULL DEFAULT 100,
  lessons INTEGER NOT NULL DEFAULT 0,
  perfect_lessons INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS item_progress (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,
  box INTEGER NOT NULL DEFAULT 0,
  seen INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0,
  wrong INTEGER NOT NULL DEFAULT 0,
  last_seen INTEGER NOT NULL DEFAULT 0,
  due INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, item_id)
);
CREATE TABLE IF NOT EXISTS topic_progress (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,
  skill REAL NOT NULL,
  answered INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0,
  xp INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, topic_id)
);
CREATE TABLE IF NOT EXISTS daily (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  day TEXT NOT NULL,
  xp INTEGER NOT NULL DEFAULT 0,
  answered INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, day)
);
CREATE TABLE IF NOT EXISTS achievements (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  key TEXT NOT NULL,
  unlocked_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, key)
);
CREATE TABLE IF NOT EXISTS answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL, topic TEXT, ex_type TEXT NOT NULL,
  correct INTEGER NOT NULL, ms INTEGER, hints INTEGER, at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_answers_user ON answers(user_id, at);
`;

export function openDb(path: string): Database {
  if (path !== ":memory:") mkdirSync(dirname(path), { recursive: true });
  const db = new Database(path, { create: true });
  db.exec(SCHEMA);
  return db;
}

/** Writes all content into the DB if the content hash changed since the last seed. */
export function seedContent(db: Database, content: Content): { seeded: boolean; hash: string } {
  const hash = Bun.hash(JSON.stringify(content)).toString(16);
  const row = db.query<{ value: string }, []>("SELECT value FROM meta WHERE key = 'content_hash'").get();
  if (row?.value === hash) return { seeded: false, hash };

  const tx = db.transaction(() => {
    for (const t of ["families", "texts", "lexicon", "sentences", "topics"]) db.exec(`DELETE FROM ${t}`);
    const insTopic = db.prepare(
      "INSERT INTO topics (id, kind, title, title_fi, ord, level, icon, summary, explanation) VALUES (?,?,?,?,?,?,?,?,?)",
    );
    for (const t of content.topics)
      insTopic.run(t.id, t.kind, t.title, t.titleFi, t.order, t.level, t.icon, t.summary, t.explanation);
    const insSent = db.prepare(
      "INSERT INTO sentences (id, topic, fi, de, level, gap_json, note, alt_json) VALUES (?,?,?,?,?,?,?,?)",
    );
    for (const s of content.sentences)
      insSent.run(
        s.id, s.topic, s.fi, s.de, s.level,
        s.gap ? JSON.stringify(s.gap) : null, s.note ?? null, s.alt?.length ? JSON.stringify(s.alt) : null,
      );
    const insLex = db.prepare("INSERT OR IGNORE INTO lexicon (key, form, lemma, de, analysis) VALUES (?,?,?,?,?)");
    for (const e of content.lexicon) insLex.run(e.form.toLowerCase(), e.form, e.lemma, e.de, e.analysis);
    const insText = db.prepare(
      "INSERT INTO texts (id, title, topic, level, fi, de, questions_json) VALUES (?,?,?,?,?,?,?)",
    );
    for (const t of content.texts)
      insText.run(t.id, t.title, t.topic ?? null, t.level, t.fi, t.de, JSON.stringify(t.questions));
    const insFam = db.prepare("INSERT OR REPLACE INTO families (topic, root, root_de, members_json) VALUES (?,?,?,?)");
    for (const f of content.families) insFam.run(f.topic, f.root, f.rootDe, JSON.stringify(f.members));
    db.query("INSERT OR REPLACE INTO meta (key, value) VALUES ('content_hash', ?)").run(hash);
  });
  tx();
  return { seeded: true, hash };
}
