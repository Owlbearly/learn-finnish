import type { AnswerResponse, Exercise, MeResponse, NextResponse, SessionSummary, TopicInfo } from "../src/shared/api";
import { diffEl, renderExercise, sentenceEl, speakButtons, type CheckOutcome, type ExView, type Hint } from "./exercises";
import {
  $, api, applyTheme, burst, confetti, floatText, h, hideGloss, markdown, save, saveSettings, settings, sfx, speak, store, toast,
} from "./lib";

const app = document.getElementById("app")!;
let uid: number | null = store<{ id: number | null }>("sisu.user", { id: null }).id;
let me: MeResponse | null = null;
let keyHandler: ((e: KeyboardEvent) => void) | null = null;
document.addEventListener("keydown", (e) => keyHandler?.(e));
applyTheme();

// ------------------------------------------------------------------ helpers
const CEFR = (s: number) => (s < 2.5 ? "A1.1" : s < 4.5 ? "A1" : s < 6.5 ? "A2" : s < 8.5 ? "B1" : "B1+");
const PRAISE = [
  ["Hienoa!", "Prima!"], ["Mahtavaa!", "Großartig!"], ["Loistavaa!", "Glänzend!"], ["Upeaa!", "Toll!"],
  ["Hyvä!", "Gut!"], ["Täydellistä!", "Perfekt!"], ["Oikein!", "Richtig!"], ["Nappiin!", "Volltreffer!"],
];
const COMFORT = [["Ei haittaa!", "Macht nichts!"], ["Melkein!", "Fast!"], ["Yritä uudelleen!", "Versuch's nochmal!"], ["Opit koko ajan!", "Du lernst ständig dazu!"]];
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)]!;

async function loadMe() {
  if (uid == null) return null;
  try { me = await api<MeResponse>(`/api/me?uid=${uid}`); } catch { me = null; uid = null; save("sisu.user", { id: null }); }
  return me;
}

function modal(title: string, body: any, opts: { wide?: boolean } = {}) {
  const close = () => { bg.remove(); document.removeEventListener("keydown", esc); };
  const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); close(); } };
  const bg = h("div", { class: "modal-bg", onclick: (e: Event) => { if (e.target === bg) close(); } },
    h("div", { class: "modal", style: opts.wide ? { width: "min(860px,100%)" } : undefined },
      h("div", { class: "modal-head" }, h("h2", null, title), h("button", { class: "icon-btn", onclick: close, "aria-label": "Schließen" }, "✕")),
      body));
  document.body.appendChild(bg);
  document.addEventListener("keydown", esc, true);
  return close;
}

async function showExplanation(topicId: string) {
  const d = await api<any>(`/api/topics/${topicId}`);
  modal(`${d.topic.icon} ${d.topic.title}`, [
    h("p", { class: "muted" }, h("i", null, d.topic.titleFi), " · ", d.topic.summary),
    h("div", { class: "md", html: markdown(d.topic.explanation) }),
  ]);
}

function topbar() {
  const u = me!.user;
  return h("header", { class: "topbar" },
    h("a", { class: "brand", href: "#/" }, h("div", { class: "flag" }), "Sisu"),
    h("nav", { class: "nav" },
      h("span", { class: "chip fire", title: "Lern-Serie (Tage)" }, "🔥 ", String(u.streakDays)),
      h("span", { class: "chip", title: `${u.xp} XP gesamt` }, "⭐ ", String(u.xp)),
      h("a", { class: "icon-btn", href: "#/achievements", title: "Erfolge" }, "🏆"),
      h("a", { class: "icon-btn", href: "#/settings", title: "Einstellungen" }, "⚙️")));
}

// ------------------------------------------------------------------ router
async function route() {
  keyHandler = null;
  hideGloss();
  speechSynthesis?.cancel?.();
  window.scrollTo(0, 0);
  const hash = location.hash.replace(/^#/, "") || "/";
  if (uid == null || !(await loadMe())) return renderWelcome();
  const [, page, arg] = hash.split("/");
  switch (page) {
    case "": return renderHome();
    case "topic": return renderTopic(arg!);
    case "learn": return runLesson({ mode: (arg as any) || "mixed" });
    case "practice": return runLesson({ mode: "topic", topic: arg });
    case "read": return arg ? runLesson({ mode: "reading", textId: arg }) : renderTexts();
    case "achievements": return renderAchievements();
    case "settings": return renderSettings();
    default: location.hash = "#/";
  }
}
window.addEventListener("hashchange", route);

// ------------------------------------------------------------------ welcome
async function renderWelcome() {
  const users = await api<{ id: number; name: string; xp: number }[]>("/api/users").catch(() => []);
  const input = h("input", { placeholder: "Dein Name", maxlength: 40, autofocus: true }) as HTMLInputElement;
  const start = async () => {
    const r = await api<MeResponse>("/api/users", { name: input.value || "Oppija" });
    uid = r.user.id; save("sisu.user", { id: uid });
    location.hash = "#/"; route();
  };
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") start(); });
  app.replaceChildren(h("div", { class: "welcome card" },
    h("div", { class: "big-emoji" }, "🇫🇮"),
    h("h1", null, "Tervetuloa!"),
    h("p", { class: "muted" }, "Lerne Finnisch in ganzen Sätzen – adaptiv, mit Erklärungen an jeder Ecke. Je mehr du richtig hast, desto schneller geht es voran."),
    input,
    h("button", { class: "btn primary big block", onclick: start }, "Los geht's! · Aloitetaan!"),
    users.length ? h("div", { class: "users-list" }, h("p", { class: "muted small" }, "Oder weiter als:"),
      users.map((u) => h("button", { class: "btn block", onclick: () => { uid = u.id; save("sisu.user", { id: uid }); route(); } }, `${u.name} · ${u.xp} XP`))) : null));
  input.focus();
}

// ------------------------------------------------------------------ home
function renderHome() {
  const { user: u, topics, texts } = me!;
  const goalPct = Math.min(100, Math.round((u.dailyXp / u.dailyGoal) * 100));
  const maxWeek = Math.max(u.dailyGoal, ...u.week.map((d) => d.xp));
  const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const recommended = topics.filter((t) => t.unlocked && t.stars < 2).sort((a, b) => a.order - b.order)[0];

  const hero = h("div", { class: "hero" },
    h("div", { class: "card hero-main" },
      h("div", { class: "muted small" }, `Hei ${u.name}! ${u.levelIcon} ${u.levelTitle}`),
      h("h1", null, u.answered ? "Jatketaan! – Weiter geht's" : "Aloitetaan! – Los geht's"),
      h("div", { class: "skill-gauge" },
        h("div", null, h("div", { class: "skill-num" }, u.skill.toFixed(1)), h("div", { class: "small muted" }, "Stufe / 10")),
        h("div", { class: "bar" }, h("i", { style: { width: `${(u.skill / 10) * 100}%` } })),
        h("span", { class: "cefr" }, CEFR(u.skill))),
      h("button", { class: "btn primary big block", onclick: () => (location.hash = "#/learn/mixed") }, "▶  Adaptive Lektion starten"),
      recommended ? h("p", { class: "small muted", style: { marginBottom: 0 } }, `Empfohlenes Thema: ${recommended.icon} ${recommended.title}`) : null),
    h("div", { class: "card" },
      h("div", { class: "row" },
        h("div", { class: `ring ${goalPct >= 100 ? "done" : ""}`, style: { "--p": goalPct } as any }, h("div", null, goalPct >= 100 ? "✓" : `${u.dailyXp}`, h("br"), h("span", { class: "small muted" }, `/ ${u.dailyGoal}`))),
        h("div", null, h("h3", null, goalPct >= 100 ? "Tagesziel erreicht! 🎉" : "Tagesziel"), h("div", { class: "muted small" }, `${u.levelIcon} Rang ${u.level} · noch ${u.xpToNext} XP bis Rang ${u.level + 1}`),
          h("div", { class: "bar gold", style: { marginTop: "8px" } }, h("i", { style: { width: `${u.levelProgress * 100}%` } })))),
      h("div", { class: "week", style: { marginTop: "16px" } }, u.week.map((d) =>
        h("div", { title: `${d.day}: ${d.xp} XP` }, h("i", { style: { height: `${Math.max(4, (d.xp / maxWeek) * 52)}px`, opacity: d.xp ? 1 : 0.25 } }), h("span", null, days[new Date(d.day).getDay()]!)))),
      h("div", { class: "stats", style: { marginTop: "14px" } },
        h("div", { class: "stat" }, h("b", null, String(u.answered)), h("span", null, "Aufgaben")),
        h("div", { class: "stat" }, h("b", null, `${Math.round(u.accuracy * 100)}%`), h("span", null, "Genauigkeit")),
        h("div", { class: "stat" }, h("b", null, `🔥 ${u.bestCombo}`), h("span", null, "Beste Combo")),
        h("div", { class: "stat" }, h("b", null, String(u.lessons)), h("span", null, "Lektionen")))));

  const quick = h("div", { class: "quick" },
    h("div", { class: "card", onclick: () => (location.hash = "#/learn/review") },
      h("div", { class: "ico" }, "🔁"), h("div", null, h("h3", { style: { margin: 0 } }, "Wiederholen"), h("div", { class: "muted small" }, u.dueCount ? `${u.dueCount} Sätze fällig` : "Fehler & fällige Sätze"))),
    h("div", { class: "card", onclick: () => (location.hash = "#/read") },
      h("div", { class: "ico" }, "📰"), h("div", null, h("h3", { style: { margin: 0 } }, "Lesen & Verstehen"), h("div", { class: "muted small" }, `${texts.filter((t) => t.read).length}/${texts.length} Texte gelesen`))),
    h("div", { class: "card", onclick: () => (location.hash = "#/achievements") },
      h("div", { class: "ico" }, "🏆"), h("div", null, h("h3", { style: { margin: 0 } }, "Erfolge"), h("div", { class: "muted small" }, `${me!.achievements.filter((a) => a.unlocked).length}/${me!.achievements.length} freigeschaltet`))));

  const section = (title: string, sub: string, list: TopicInfo[]) => list.length ? [
    h("div", { class: "section-title" }, h("h2", null, title), h("span", { class: "muted small" }, sub)),
    h("div", { class: "path" }, list.map(topicCard)),
  ] : [];

  app.replaceChildren(topbar(), hero, quick,
    ...section("Phrasen & Alltag", "fertige Sätze für echte Situationen", topics.filter((t) => t.kind === "phrases")),
    ...section("Grammatik-Pfad", "Schritt für Schritt – jedes Thema mit Erklärung", topics.filter((t) => t.kind === "grammar")),
    ...section("Wortfamilien", "ein Stamm, viele Wörter", topics.filter((t) => t.kind === "family")));
}

function topicCard(t: TopicInfo) {
  const acc = t.answered ? t.correct / t.answered : 0;
  return h("button", { class: `topic ${t.unlocked ? "" : "locked"}`, onclick: () => (location.hash = `#/topic/${t.id}`) },
    h("span", { class: "lvl" }, `Stufe ${t.level}`),
    h("div", { class: "ti" }, t.icon),
    h("div", null, h("div", { class: "tt" }, t.title), h("div", { class: "tf" }, t.titleFi)),
    h("div", { class: "stars" }, [0, 1, 2].map((i) => (i < t.stars ? h("b", null, "★") : "★"))),
    h("div", { class: "bar", style: { height: "8px" } }, h("i", { style: { width: `${Math.min(100, (t.correct / 50) * 100)}%` } })),
    h("div", { class: "small muted" }, t.answered ? `${t.correct} richtig · ${Math.round(acc * 100)} %` : `${t.sentenceCount} Sätze`));
}

// ------------------------------------------------------------------ topic page
async function renderTopic(id: string) {
  const d = await api<any>(`/api/topics/${id}`);
  const info = me!.topics.find((t) => t.id === id);
  const fam = d.family as { root: string; rootDe: string; members: { fi: string; de: string; note?: string }[] } | null;
  app.replaceChildren(topbar(),
    h("div", { class: "card", style: { marginBottom: "16px" } },
      h("div", { class: "row wrap" },
        h("div", { style: { fontSize: "3rem" } }, d.topic.icon),
        h("div", { class: "grow" }, h("h1", { style: { marginBottom: "2px" } }, d.topic.title), h("div", { class: "muted" }, h("i", null, d.topic.titleFi), " · ", d.topic.summary)),
        h("button", { class: "btn primary big", onclick: () => (location.hash = `#/practice/${id}`) }, "▶ Thema üben")),
      info && !info.unlocked ? h("p", { class: "small muted" }, `🔒 Empfohlen ab Stufe ${Math.max(1, info.level - 1.5).toFixed(1)} – du kannst es aber jederzeit schon üben.`) : null,
      info?.answered ? h("p", { class: "small muted" }, `Deine Stufe in diesem Thema: ${info.skill.toFixed(1)} · ${info.correct}/${info.answered} richtig`) : null),
    fam ? h("div", { class: "card", style: { marginBottom: "16px" } },
      h("div", { class: "family-root" }, `🌳 ${fam.root} – ${fam.rootDe}`),
      h("div", { class: "family-grid" }, fam.members.map((m) => h("div", null, h("b", null, m.fi), " ", h("button", { class: "icon-btn", style: { width: "30px", height: "30px", fontSize: ".85rem" }, onclick: () => speak(m.fi) }, "🔊"),
        h("div", null, m.de), m.note ? h("div", { class: "small muted" }, m.note) : null)))) : "",
    h("div", { class: "card md", style: { marginBottom: "16px" } }, h("h2", null, "📘 Erklärung"), h("div", { html: markdown(d.topic.explanation) })),
    h("div", { class: "card" }, h("h2", null, `💬 Beispielsätze (${d.sentences.length})`), h("p", { class: "muted small" }, "Tippe auf ein Wort für Grundform, Bedeutung und Grammatik."),
      h("div", { class: "sent-list" }, d.sentences.map((s: any) =>
        h("div", { class: "sent-item" },
          h("button", { class: "icon-btn", onclick: () => speak(s.fi), "aria-label": "Anhören" }, "🔊"),
          h("div", { class: "grow" }, sentenceEl(s.fi, d.gloss, { cls: "small" }), h("div", { class: "de" }, s.de),
            s.note || s.why ? h("div", { class: "small muted", style: { marginTop: "4px" } }, "💡 ", s.note ?? s.why) : null),
          h("span", { class: "lvl-pill" }, `${s.level}`))))));
}

// ------------------------------------------------------------------ texts
function renderTexts() {
  const skill = me!.user.skill;
  app.replaceChildren(topbar(), h("h1", null, "📰 Lesen & Verstehen"),
    h("p", { class: "muted" }, "Kurze Texte mit Verständnisfragen. Tippe im Text auf Wörter, um sie erklärt zu bekommen."),
    h("div", { class: "path" }, me!.texts.map((t) =>
      h("button", { class: `topic ${t.level > skill + 2 ? "locked" : ""}`, onclick: () => (location.hash = `#/read/${t.id}`) },
        h("span", { class: "lvl" }, `Stufe ${t.level}`), h("div", { class: "ti" }, t.read ? "✅" : "📄"), h("div", { class: "tt" }, t.title),
        h("div", { class: "small muted" }, t.read ? "gelesen" : "neu")))));
}

// ------------------------------------------------------------------ achievements & settings
function renderAchievements() {
  app.replaceChildren(topbar(), h("h1", null, "🏆 Erfolge"),
    h("div", { class: "ach-grid" }, me!.achievements.map((a) =>
      h("div", { class: `card ach ${a.unlocked ? "" : "locked"}` }, h("div", { class: "ai" }, a.icon), h("b", null, a.title), h("div", { class: "small muted" }, a.desc)))));
}

function renderSettings() {
  const toggle = (label: string, key: "sound" | "audio" | "autoplay") => {
    const cb = h("input", { type: "checkbox", class: "toggle", checked: settings[key] }) as HTMLInputElement;
    cb.onchange = () => { settings[key] = cb.checked; saveSettings(); };
    return h("div", { class: "settings-row" }, h("label", null, label), cb);
  };
  const goal = h("select", { class: "btn" }, [50, 100, 200, 400].map((g) => h("option", { value: g, selected: me!.user.dailyGoal === g }, `${g} XP`))) as HTMLSelectElement;
  goal.onchange = () => api("/api/goal", { uid, goal: Number(goal.value) }).then(() => toast("Tagesziel gespeichert", { icon: "🎯" }));
  const theme = h("select", { class: "btn" }, [["auto", "System"], ["light", "Hell"], ["dark", "Dunkel"]].map(([v, l]) => h("option", { value: v, selected: settings.theme === v }, l))) as HTMLSelectElement;
  theme.onchange = () => { settings.theme = theme.value as any; saveSettings(); };
  const rate = h("input", { type: "range", min: "0.6", max: "1.2", step: "0.1", value: String(settings.rate) }) as HTMLInputElement;
  rate.onchange = () => { settings.rate = Number(rate.value); saveSettings(); speak("Hyvää päivää! Mitä kuuluu?"); };
  app.replaceChildren(topbar(), h("div", { class: "card" }, h("h1", null, "⚙️ Einstellungen"),
    toggle("Soundeffekte", "sound"),
    toggle("Hörübungen & Aussprache (Sprachausgabe)", "audio"),
    toggle("Sätze automatisch vorlesen", "autoplay"),
    h("div", { class: "settings-row" }, h("label", null, "Sprechtempo"), rate),
    h("div", { class: "settings-row" }, h("label", null, "Tagesziel"), goal),
    h("div", { class: "settings-row" }, h("label", null, "Design"), theme),
    h("div", { class: "settings-row" }, h("label", null, `Angemeldet als ${me!.user.name}`),
      h("button", { class: "btn", onclick: () => { uid = null; save("sisu.user", { id: null }); location.hash = "#/"; route(); } }, "Profil wechseln"))));
}

// ------------------------------------------------------------------ lesson runner
interface LessonOpts { mode: "mixed" | "topic" | "review" | "reading"; topic?: string; textId?: string }

async function runLesson(opts: LessonOpts) {
  const start = await api<{ sessionId: string; total: number }>("/api/session", { uid, ...opts, audio: settings.audio });
  const sid = start.sessionId;
  let combo = 0, sessionXp = 0, skill = opts.mode === "topic" ? me!.topics.find((t) => t.id === opts.topic)?.skill ?? 1 : me!.user.skill;

  const progress = h("div", { class: "bar" }, h("i", { style: { width: "0%" } }));
  const comboEl = h("div", { class: "combo" });
  const xpEl = h("div", { class: "xp-counter" }, "0 XP");
  const diffEl2 = h("div", { class: "diff-indicator", title: "Aktuelle Schwierigkeitsstufe" });
  const stage = h("div");
  const bar = h("div", { class: "actionbar" });
  const quit = h("button", { class: "icon-btn", title: "Lektion beenden", onclick: () => { if (confirm("Lektion beenden? Dein Fortschritt bis hier ist gespeichert.")) location.hash = "#/"; } }, "✕");
  app.replaceChildren(h("div", { class: "lesson-top" }, quit, progress, comboEl, xpEl), h("div", { class: "row", style: { justifyContent: "flex-end", marginTop: "-10px", marginBottom: "8px" } }, diffEl2), stage, bar);

  const setDiff = (arrow = "") => { diffEl2.replaceChildren(`🎯 Stufe ${skill.toFixed(1)} ${arrow}`); };
  const setCombo = (pop: boolean) => {
    comboEl.replaceChildren(combo >= 2 ? `🔥 ${combo}  ×${(1 + Math.min(combo, 10) * 0.1).toFixed(1)}` : "");
    comboEl.classList.toggle("hot", combo >= 5);
    if (pop) { comboEl.classList.remove("pop"); void comboEl.offsetWidth; comboEl.classList.add("pop"); }
  };
  setDiff();

  const next = async () => {
    const r = await api<NextResponse>(`/api/session/${sid}/next`);
    (progress.firstChild as HTMLElement).style.width = `${(r.progress.done / r.progress.total) * 100}%`;
    if (r.done) return showSummary(r.summary!, opts);
    showExercise(r.exercise!);
  };

  const showExercise = (ex: Exercise) => {
    let hintsUsed = 0, answered = false;
    const t0 = performance.now();
    const ctx = { changed: () => updateBar(), submit: (o?: CheckOutcome) => finish(o ?? view.check()) };
    const view: ExView = renderExercise(ex, ctx);
    const helpBtn = h("button", { class: "btn gold", onclick: () => openHelp() }, "💡 Hilfe");
    const checkBtn = h("button", { class: "btn success big", onclick: () => doCheck() }, "Prüfen");
    const skipBtn = (ex.type === "listen" || ex.type === "dictation")
      ? h("button", { class: "btn ghost", onclick: async () => { await api(`/api/session/${sid}/skip`, {}); toast("Hörübungen für diese Lektion pausiert", { icon: "🔇" }); next(); } }, "Kann gerade nicht hören")
      : null;
    const updateBar = () => { checkBtn.disabled = !view.ready(); };
    const doCheck = () => { if (!answered && view.ready()) finish(view.check()); };

    const kinds: Record<string, string> = {
      meaning: "Verstehen", listen: "Hörverstehen", gap_choice: "Lückentext", build_choice: "Satzbau", order: "Satzpuzzle",
      gap_write: "Schreiben", dictation: "Diktat", translate: "Übersetzen", pairs: "Wortfamilie", reading: "Lesetext",
    };
    stage.replaceChildren(h("div", { class: "ex" },
      h("div", { class: "ex-head" },
        h("span", { class: "chip blue" }, kinds[ex.type]), h("span", { class: "chip" }, ex.topicTitle),
        ex.retry ? h("span", { class: "retry-badge" }, "↺ Nochmal üben") : null),
      h("div", { class: "ex-instr" }, ex.instruction),
      view.el));
    bar.className = "actionbar";
    bar.replaceChildren(h("div", { class: "inner" }, helpBtn, skipBtn, h("div", { class: "grow" }), view.auto ? h("span", { class: "muted small" }, ex.type === "pairs" || ex.type === "reading" ? "" : "Tipp: Tasten 1–4") : checkBtn));
    updateBar();
    view.focus?.();

    const openHelp = () => {
      const out = h("div");
      const btns = view.hints.map((hint: Hint) => {
        const b = h("button", { class: "btn block", style: { marginTop: "8px", textAlign: "left" } }, `${hint.icon}  ${hint.label}`, hint.cost ? h("span", { class: "small muted" }, "  (−XP)") : h("span", { class: "small muted" }, "  (gratis)"));
        b.onclick = () => {
          if (hint.cost && !answered) hintsUsed++;
          const res = hint.apply();
          const content = typeof res === "string" ? h("div", { class: "md", html: markdown(res) }) : res;
          if (content) out.prepend(h("div", { class: "help-step" }, h("h4", null, `${hint.icon} ${hint.label}`), content));
          if (hint.cost) b.disabled = true;
          sfx.click();
        };
        return b;
      });
      modal("💡 Hilfe", [
        h("p", { class: "muted small" }, "Hilfen mit −XP verringern die Punkte dieser Aufgabe – aber lernen ist wichtiger als Punkte! Tippe außerdem jederzeit auf finnische Wörter."),
        btns,
        h("button", { class: "btn primary block", style: { marginTop: "8px" }, onclick: () => showExplanation(ex.help.topicId) }, `📘 Grammatik: ${ex.help.topicTitle} (gratis)`),
        out,
      ]);
    };

    const finish = async (o: CheckOutcome) => {
      if (answered) return;
      answered = true;
      const ms = Math.round(performance.now() - t0);
      const res = await api<AnswerResponse>(`/api/session/${sid}/answer`, { exerciseId: ex.id, correct: o.correct, score: o.score, ms, hints: hintsUsed, remark: o.remark });
      combo = res.combo; sessionXp = res.sessionXp; skill = res.skill;
      xpEl.textContent = `${sessionXp} XP`;
      (progress.firstChild as HTMLElement).style.width = `${(res.progress.done / res.progress.total) * 100}%`;
      setCombo(o.correct);
      setDiff(res.skillDelta > 0.001 ? "↑" : res.skillDelta < -0.001 ? "↓" : "");
      const r = checkBtn.getBoundingClientRect();
      if (o.correct) {
        sfx.correct(combo);
        burst(innerWidth / 2, r.top > 0 ? r.top : innerHeight - 60, 18 + Math.min(combo, 10) * 4, 6 + Math.min(combo, 10) * 0.5);
        if (res.xp) floatText(`+${res.xp} XP`, innerWidth / 2, innerHeight - 140);
      } else sfx.wrong();
      if (res.speedUp) { sfx.combo(); toast(`${combo} richtig in Folge – das Tempo zieht an!`, { icon: "⚡", kind: "gold" }); }
      if (res.stepBack) { sfx.stepBack(); toast("Wir gehen einen Schritt zurück und festigen das Gelernte.", { icon: "🧭", kind: "red", ms: 3500 }); }
      if (res.levelUp) { setTimeout(() => { sfx.fanfare(); confetti(); toast(`Neuer Rang: ${res.levelUp!.title}!`, { icon: "🎖️", kind: "gold", ms: 4000 }); }, 400); }
      for (const a of res.achievements) setTimeout(() => { sfx.fanfare(); toast(`${a.title} – ${a.desc}`, { icon: a.icon, kind: "green", ms: 4500 }); }, 800);
      showFeedback(ex, o, res);
    };

    keyHandler = (e) => {
      if ((e.target as HTMLElement)?.closest?.(".modal")) return;
      if (e.key === "Enter" && !e.shiftKey) {
        if (answered) { e.preventDefault(); ($<HTMLButtonElement>("#continue-btn") ?? null)?.click(); return; }
        if (!view.auto) { e.preventDefault(); doCheck(); }
        return;
      }
      if (answered) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (view.key?.(e)) e.preventDefault();
    };
  };

  const showFeedback = (ex: Exercise, o: CheckOutcome, res: AnswerResponse) => {
    const good = o.correct;
    const [fi, de] = good ? pick(PRAISE) : pick(COMFORT);
    const isWrite = ex.type === "gap_write" || ex.type === "dictation" || ex.type === "translate" || ex.type === "order";
    const extra = h("div", { class: "fb-extra" });
    if (ex.type !== "pairs" && ex.type !== "reading") {
      if (!good && isWrite && o.given) extra.append(h("div", { class: "small muted" }, "Vergleich:"), diffEl(o.given, o.solution ?? ex.fi));
      if (o.remark === "umlaut") extra.append(h("div", { class: "why" }, "⚠️ Achte auf ä und ö – im Finnischen ändern sie die Bedeutung (z. B. ", h("i", null, "tuli"), " „Feuer/kam“ vs. ", h("i", null, "tyli"), ")."));
      if (o.remark === "typo") extra.append(h("div", { class: "why" }, "✏️ Kleiner Tippfehler – trotzdem gezählt. Richtig: ", h("b", null, o.solution ?? "")));
      if (ex.help.why) extra.append(h("div", { class: "why", html: "💡 " + markdown(ex.help.why).replace(/^<p>|<\/p>$/g, "") }));
      if (ex.help.note) extra.append(h("div", { class: "why", html: "📝 " + markdown(ex.help.note).replace(/^<p>|<\/p>$/g, "") }));
    }
    const sol = ex.type === "pairs" || ex.type === "reading" ? null
      : h("div", null,
        h("div", { class: "fb-solution row", style: { gap: "8px" } }, speakButtons(ex.fi).el.firstChild as HTMLElement, h("span", null, ex.fi)),
        h("div", { class: "fb-de" }, ex.de));
    const cont = h("button", { class: `btn big ${good ? "success" : "danger"}`, id: "continue-btn", onclick: () => next() }, "Weiter ⏎");
    bar.className = `actionbar ${good ? "good" : "bad"}`;
    bar.replaceChildren(h("div", { class: "inner" },
      h("div", { class: "fb" },
        h("div", { class: "fb-title" }, good ? "✅" : "💪", ` ${fi} `, h("small", null, de), res.xp ? h("span", { class: "chip fire", style: { marginLeft: "auto" } }, `+${res.xp} XP`) : null),
        sol, extra),
      h("div", { class: "row" },
        h("button", { class: "btn", onclick: () => showExplanation(ex.help.topicId) }, "📘 Grammatik"),
        cont)));
    if (settings.audio && settings.autoplay && ex.type !== "pairs" && ex.type !== "reading" && ex.type !== "meaning") speak(ex.fi);
    cont.focus({ preventScroll: true });
  };

  next();
}

function showSummary(s: SessionSummary, opts: LessonOpts) {
  keyHandler = null;
  const acc = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
  const emoji = s.perfect ? "🏆" : acc >= 80 ? "🎉" : acc >= 50 ? "💪" : "🌱";
  const title = s.perfect ? "Täydellistä! Fehlerfrei!" : acc >= 80 ? "Mahtavaa!" : acc >= 50 ? "Hyvää työtä!" : "Jokainen virhe opettaa!";
  const delta = s.skillAfter - s.skillBefore;
  confetti(); sfx.fanfare();
  const again = h("button", { class: "btn primary big", onclick: () => route() }, "▶ Nächste Lektion");
  app.replaceChildren(h("div", { class: "summary" },
    h("div", { class: "big-emoji" }, emoji),
    h("h1", null, title),
    h("p", { class: "muted" }, acc >= 50 ? "Dein Sprachgefühl wächst mit jedem Satz." : "Fehler sind Teil des Lernens – wir haben das Tempo angepasst."),
    h("div", { class: "summary-stats" },
      h("div", { class: "stat" }, h("b", null, `+${s.xp}`), h("span", null, "XP")),
      h("div", { class: "stat" }, h("b", null, `${acc}%`), h("span", null, `${s.correct}/${s.answered} richtig`)),
      h("div", { class: "stat" }, h("b", null, `🔥 ${s.maxCombo}`), h("span", null, "beste Combo")),
      h("div", { class: "stat" }, h("b", null, `${s.skillAfter.toFixed(1)}`), h("span", null, `Stufe ${delta >= 0 ? "▲" : "▼"} ${Math.abs(delta).toFixed(1)}`))),
    h("div", { class: "card", style: { textAlign: "left", marginBottom: "16px" } },
      h("div", { class: "row" }, h("b", { class: "grow" }, `🎯 Tagesziel: ${s.dailyXp}/${s.dailyGoal} XP`), h("span", { class: "chip fire" }, `🔥 ${s.streakDays} ${s.streakDays === 1 ? "Tag" : "Tage"}`)),
      h("div", { class: "bar gold", style: { marginTop: "8px" } }, h("i", { style: { width: `${Math.min(100, (s.dailyXp / s.dailyGoal) * 100)}%` } }))),
    s.achievements.map((a) => h("div", { class: "ach-new" }, h("div", { class: "ai" }, a.icon), h("div", null, h("b", null, `Neuer Erfolg: ${a.title}`), h("div", { class: "small muted" }, a.desc)))),
    h("div", { class: "row", style: { justifyContent: "center", marginTop: "18px" } },
      h("button", { class: "btn big", onclick: () => (location.hash = "#/") }, "Übersicht"),
      opts.mode === "reading" ? h("button", { class: "btn primary big", onclick: () => (location.hash = "#/read") }, "📰 Weitere Texte") : again)));
  keyHandler = (e) => { if (e.key === "Enter") (opts.mode === "reading" ? (location.hash = "#/read") : route()); };
}

route();
