import index from "../../public/index.html";
import { loadContent } from "../data/index";
import type { AnswerRequest } from "../shared/api";
import { openDb, seedContent } from "./db";
import { ContentStore, Engine, type Mode } from "./engine";

const DB_PATH = process.env.DB_PATH ?? "data/learn-finnish.sqlite";
const PORT = Number(process.env.PORT ?? 3000);

const db = openDb(DB_PATH);
const { seeded, hash } = seedContent(db, loadContent());
const engine = new Engine(db, new ContentStore(db));
console.log(
  `📚 Content ${seeded ? "seeded" : "up to date"} (${hash}): ${engine.content.topicList.length} topics, ` +
    `${engine.content.sentences.size} sentences, ${engine.content.lexicon.size} word forms, ${engine.content.texts.size} texts`,
);

const json = (data: unknown, status = 200) => Response.json(data, { status });
const notFound = (msg = "not found") => json({ error: msg }, 404);
const uid = (url: string) => Number(new URL(url).searchParams.get("uid"));

const server = Bun.serve({
  port: PORT,
  routes: {
    "/": index,
    "/api/health": () => json({ ok: true, sentences: engine.content.sentences.size }),
    "/api/users": {
      GET: () => json(engine.listUsers()),
      POST: async (req) => {
        const body = (await req.json().catch(() => ({}))) as { name?: string };
        const id = engine.createUser(String(body.name ?? ""));
        return json(engine.me(id));
      },
    },
    "/api/me": {
      GET: (req) => {
        const me = engine.me(uid(req.url));
        return me ? json(me) : notFound("user");
      },
    },
    "/api/goal": {
      POST: async (req) => {
        const body = (await req.json()) as { uid: number; goal: number };
        engine.setDailyGoal(body.uid, body.goal);
        return json({ ok: true });
      },
    },
    "/api/topics/:id": {
      GET: (req) => {
        const d = engine.topicDetail(req.params.id);
        return d ? json(d) : notFound("topic");
      },
    },
    "/api/session": {
      POST: async (req) => {
        const body = (await req.json()) as { uid: number; mode: Mode; topic?: string; textId?: string; audio?: boolean };
        const s = engine.startSession(body.uid, body.mode ?? "mixed", body);
        return s ? json({ sessionId: s.id, total: s.total }) : json({ error: "cannot start session" }, 400);
      },
    },
    "/api/session/:id/next": {
      GET: (req) => {
        const r = engine.next(req.params.id);
        return r ? json(r) : notFound("session");
      },
    },
    "/api/session/:id/answer": {
      POST: async (req) => {
        const r = engine.answer(req.params.id, (await req.json()) as AnswerRequest);
        return r ? json(r) : json({ error: "no matching exercise" }, 409);
      },
    },
    "/api/session/:id/skip": {
      POST: (req) => json({ ok: engine.skip(req.params.id) }),
    },
    "/api/*": () => notFound(),
  },
  development: process.env.NODE_ENV !== "production" ? { hmr: true, console: true } : false,
  fetch: () => new Response("Not found", { status: 404 }),
});

console.log(`🇫🇮 Suomi-app running at ${server.url}`);
