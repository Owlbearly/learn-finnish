/** Small client-side helpers: DOM builder, API, speech, sound, effects, markdown. */
import type { Gloss } from "../src/shared/api";

// ---------------------------------------------------------------- DOM
type Child = Node | string | number | null | undefined | false | Child[];
export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props?: Record<string, any> | null,
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props ?? {})) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "style" && typeof v === "object") {
      for (const [sk, sv] of Object.entries(v)) {
        if (sk.startsWith("--")) el.style.setProperty(sk, String(sv));
        else (el.style as any)[sk] = sv;
      }
    }
    else if (k === "html") el.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
    else if (k in el && typeof v !== "string") (el as any)[k] = v;
    else el.setAttribute(k, v === true ? "" : String(v));
  }
  append(el, children);
  return el;
}
function append(el: Node, children: Child[]) {
  for (const c of children) {
    if (c == null || c === false) continue;
    if (Array.isArray(c)) append(el, c);
    else el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}
export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector(sel) as T | null;

// ---------------------------------------------------------------- API
export async function api<T>(path: string, body?: unknown): Promise<T> {
  const res = await fetch(path, body === undefined ? undefined : {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json() as Promise<T>;
}

// ---------------------------------------------------------------- settings
export interface Settings { sound: boolean; audio: boolean; autoplay: boolean; rate: number; theme: "auto" | "light" | "dark" }
const DEFAULTS: Settings = { sound: true, audio: true, autoplay: true, rate: 0.9, theme: "auto" };
export function store<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? { ...fallback, ...JSON.parse(v) } : fallback; } catch { return fallback; }
}
export function save(key: string, v: unknown) { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }
export const settings: Settings = store("sisu.settings", DEFAULTS);
export function saveSettings() { save("sisu.settings", settings); applyTheme(); }
export function applyTheme() {
  if (settings.theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", settings.theme);
}

// ---------------------------------------------------------------- speech (Web Speech API)
let fiVoice: SpeechSynthesisVoice | null = null;
function pickVoice() {
  if (!("speechSynthesis" in window)) return;
  const voices = speechSynthesis.getVoices();
  fiVoice = voices.find((v) => v.lang === "fi-FI" && /natural|online|neural/i.test(v.name))
    ?? voices.find((v) => v.lang.toLowerCase().startsWith("fi")) ?? null;
}
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
export function hasFinnishVoice() { pickVoice(); return !!fiVoice; }
export function speak(text: string, opts: { slow?: boolean; onend?: () => void } = {}) {
  if (!("speechSynthesis" in window)) { opts.onend?.(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fi-FI";
  if (fiVoice) u.voice = fiVoice;
  u.rate = opts.slow ? 0.6 : settings.rate;
  u.onend = () => opts.onend?.();
  u.onerror = () => opts.onend?.();
  speechSynthesis.speak(u);
}

// ---------------------------------------------------------------- sound (WebAudio synth)
let ctx: AudioContext | null = null;
function ac() { return (ctx ??= new AudioContext()); }
function tone(freq: number, start: number, dur: number, type: OscillatorType = "sine", vol = 0.18) {
  const a = ac(); const o = a.createOscillator(); const g = a.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0, a.currentTime + start);
  g.gain.linearRampToValueAtTime(vol, a.currentTime + start + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
  o.connect(g).connect(a.destination); o.start(a.currentTime + start); o.stop(a.currentTime + start + dur + 0.05);
}
export const sfx = {
  correct(combo = 0) {
    if (!settings.sound) return;
    const base = 523.25 * Math.pow(2, Math.min(combo, 12) / 12);
    tone(base, 0, 0.18, "triangle"); tone(base * 1.26, 0.08, 0.22, "triangle"); tone(base * 1.5, 0.16, 0.35, "triangle", 0.14);
  },
  wrong() { if (!settings.sound) return; tone(220, 0, 0.18, "sawtooth", 0.07); tone(174, 0.12, 0.3, "sawtooth", 0.06); },
  click() { if (!settings.sound) return; tone(880, 0, 0.05, "square", 0.04); },
  combo() { if (!settings.sound) return; [659, 784, 988, 1319].forEach((f, i) => tone(f, i * 0.06, 0.2, "triangle", 0.12)); },
  fanfare() {
    if (!settings.sound) return;
    [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.11, i === 5 ? 0.7 : 0.18, "triangle", 0.16));
  },
  stepBack() { if (!settings.sound) return; tone(440, 0, 0.2, "sine", 0.1); tone(330, 0.15, 0.3, "sine", 0.1); },
};

// ---------------------------------------------------------------- effects
interface Particle { x: number; y: number; vx: number; vy: number; life: number; max: number; color: string; size: number; rot: number; vr: number; shape: number }
const particles: Particle[] = [];
let running = false;
const COLORS = ["#1d5bd8", "#12b5a6", "#f5a524", "#7c4dff", "#17a663", "#ff6b7d", "#ffffff"];
function loop() {
  const c = document.getElementById("fx") as HTMLCanvasElement;
  const g = c.getContext("2d")!;
  const dpr = window.devicePixelRatio || 1;
  if (c.width !== innerWidth * dpr) { c.width = innerWidth * dpr; c.height = innerHeight * dpr; }
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]!;
    p.life++; p.x += p.vx; p.y += p.vy; p.vy += 0.25; p.vx *= 0.99; p.rot += p.vr;
    const a = 1 - p.life / p.max;
    if (a <= 0) { particles.splice(i, 1); continue; }
    g.save(); g.globalAlpha = a; g.translate(p.x, p.y); g.rotate(p.rot); g.fillStyle = p.color;
    if (p.shape === 0) g.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    else { g.beginPath(); g.arc(0, 0, p.size / 2.5, 0, Math.PI * 2); g.fill(); }
    g.restore();
  }
  if (particles.length) requestAnimationFrame(loop); else { running = false; g.clearRect(0, 0, innerWidth, innerHeight); }
}
export function burst(x: number, y: number, n = 40, spread = 9) {
  for (let i = 0; i < n; i++) {
    const ang = Math.random() * Math.PI * 2; const sp = Math.random() * spread + 2;
    particles.push({ x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 5, life: 0, max: 50 + Math.random() * 40,
      color: COLORS[i % COLORS.length]!, size: 6 + Math.random() * 7, rot: Math.random() * 6, vr: (Math.random() - .5) * .4, shape: i % 3 === 0 ? 1 : 0 });
  }
  if (!running) { running = true; requestAnimationFrame(loop); }
}
export function confetti() {
  for (let k = 0; k < 5; k++) setTimeout(() => burst(innerWidth * (0.15 + Math.random() * 0.7), innerHeight * 0.35, 60, 12), k * 180);
}
export function floatText(text: string, x: number, y: number) {
  const el = h("div", { class: "xp-float", style: { left: `${x}px`, top: `${y}px` } }, text);
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}
export function toast(content: string, opts: { icon?: string; kind?: "gold" | "green" | "red"; ms?: number } = {}) {
  const el = h("div", { class: `toast ${opts.kind ?? ""}` }, opts.icon ? h("span", { class: "ti" }, opts.icon) : null, h("div", null, content));
  document.getElementById("toasts")!.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 300); }, opts.ms ?? 2800);
}

// ---------------------------------------------------------------- markdown-lite
function esc(s: string) { return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!); }
function inline(s: string) {
  return esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<i>$2</i>");
}
export function markdown(src: string): string {
  const out: string[] = [];
  const blocks = src.replace(/\r/g, "").split(/\n\s*\n/);
  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trimEnd()).filter((l) => l.trim());
    if (!lines.length) continue;
    let buf: string[] = [];
    let i = 0;
    const flushPara = () => { if (buf.length) { out.push(`<p>${buf.map(inline).join("<br>")}</p>`); buf = []; } };
    while (i < lines.length) {
      const l = lines[i]!.trim();
      if (l.startsWith("### ") || l.startsWith("## ") || l.startsWith("# ")) { flushPara(); out.push(`<h3>${inline(l.replace(/^#+\s/, ""))}</h3>`); i++; }
      else if (/^[-*•] /.test(l)) {
        flushPara(); const items: string[] = [];
        while (i < lines.length && /^[-*•] /.test(lines[i]!.trim())) items.push(`<li>${inline(lines[i]!.trim().slice(2))}</li>`), i++;
        out.push(`<ul>${items.join("")}</ul>`);
      } else if (l.startsWith("|")) {
        flushPara(); const rows: string[][] = [];
        while (i < lines.length && lines[i]!.trim().startsWith("|")) {
          const cells = lines[i]!.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
          if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
          i++;
        }
        const [head, ...body] = rows;
        out.push(`<table><thead><tr>${head!.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body
          .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
      } else { buf.push(l); i++; }
    }
    flushPara();
  }
  return out.join("\n");
}

// ---------------------------------------------------------------- word gloss popover
let pop: HTMLElement | null = null;
export function showGloss(target: HTMLElement, g: Gloss | undefined, word: string) {
  hideGloss();
  target.classList.add("active");
  const r = target.getBoundingClientRect();
  pop = h("div", { class: "popover" },
    g ? [h("b", null, word), g.lemma.toLowerCase() !== word.toLowerCase() ? h("span", null, `  ← ${g.lemma}`) : null,
      h("div", null, g.de), g.analysis ? h("div", { class: "an" }, g.analysis) : null]
      : [h("b", null, word), h("div", { class: "an" }, "Keine Angabe im Wörterbuch")]);
  document.body.appendChild(pop);
  const pr = pop.getBoundingClientRect();
  let left = r.left + r.width / 2 - pr.width / 2;
  left = Math.max(8, Math.min(innerWidth - pr.width - 8, left));
  const top = r.top - pr.height - 8 < 8 ? r.bottom + 8 : r.top - pr.height - 8;
  pop.style.left = `${left}px`; pop.style.top = `${top}px`;
  (pop as any)._target = target;
}
export function hideGloss() {
  if (pop) { (pop as any)._target?.classList.remove("active"); pop.remove(); pop = null; }
}
document.addEventListener("click", (e) => { if (!(e.target as HTMLElement).closest?.(".w")) hideGloss(); });
window.addEventListener("scroll", hideGloss, { passive: true });
