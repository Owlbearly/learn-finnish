# Sisu – Finnisch lernen in ganzen Sätzen 🇫🇮

Eine Web-App (Bun + TypeScript + SQLite), mit der man Finnisch **direkt in Sätzen und Phrasen** lernt, gegliedert nach
grammatischen Themen und Wortfamilien. Die Schwierigkeit passt sich laufend an, und zu jeder Aufgabe gibt es Hilfe und Erklärungen.

## Starten

```bash
bun install
bun run dev        # http://localhost:3000 (mit Hot Reload)
# oder
bun run start
```

Umgebungsvariablen: `PORT` (Standard 3000), `DB_PATH` (Standard `data/learn-finnish.sqlite`).

```bash
bun test           # Engine-, Adaptivitäts- und Antwortprüfungs-Tests
bun run validate   # prüft alle Inhalte (Lücken, Lexikon-Abdeckung, IDs, Texte)
bun run typecheck
```

## Was die App kann

**Inhalte (Datenbank):** über 30 Themen. Jedes Thema hat eine eigene Grammatik-Erklärung mit Tabellen.
- Phrasen & Alltag: Begrüßung, Zahlen und Zeit, Café, Laden, Weg
- Grammatik-Pfad: von *olla* über die Lokalkasus, Partitiv, Genitiv, Plural, Verbtypen und Stufenwechsel bis zu Imperfekt, Perfekt, Konditional, Passiv und Nebensätzen
- Wortfamilien: z. B. *kirja → kirjoittaa, kirjasto, kirjailija …*

Dazu kommen über 700 Beispielsätze mit Übersetzung, Lücke und Begründung, ein Formen-Lexikon und Lesetexte mit Verständnisfragen.

**Aufgabentypen**
| Typ | Beschreibung |
|---|---|
| Verstehen | Finnischen Satz lesen, Bedeutung wählen |
| Hörverstehen | Satz hören (Sprachausgabe des Browsers), Bedeutung wählen |
| Lückentext | Die richtige Form wählen (Kasus, Person, Zeit) |
| Satzbau | Den korrekten finnischen Satz unter Beinahe-Treffern finden |
| Satzpuzzle | Satz aus Wortkacheln bauen (später mit Störwort) |
| Schreiben | Fehlende Form eintippen (Grundform als Hinweis) |
| Diktat | Gehörten Satz aufschreiben |
| Übersetzen | Deutschen Satz auf Finnisch schreiben |
| Wortfamilie | Paare zuordnen |
| Lesetext | Text lesen, Fragen beantworten |

Die Schreibaufgaben verzeihen Tippfehler und markieren fehlende ä/ö. Pronomen wie *minä* dürfen weggelassen werden.
Ein „Tippfehler“, der eine andere echte Form ergibt (*talosta* statt *talossa*), zählt dagegen als Fehler.

**Adaptivität**
- Jeder Satz hat eine Stufe (1–10), jeder Aufgabentyp einen Schwierigkeitsaufschlag. Ausgewählt wird knapp über der aktuellen Stufe.
- Jede richtige Antwort hebt die Stufe an, und mit wachsender Serie immer schneller (*Tempo*).
- Zwei Fehler in kurzer Folge führen **einen Schritt zurück**.
- Falsch beantwortete Sätze kommen in derselben Lektion in leichterer Form wieder.
- Leitner-Boxen sorgen für verteilte Wiederholung („Wiederholen“-Modus).
- Neue Themen werden passend zur Stufe freigeschaltet, lassen sich aber jederzeit öffnen.

**Hilfe an jeder Ecke**
- Jedes finnische Wort lässt sich antippen und zeigt Grundform, Bedeutung und grammatische Analyse.
- Der 💡-Hilfe-Knopf bietet abgestufte Hinweise: Regel, falsche Antwort streichen, Anfangsbuchstaben, Wortbank, nächstes Wort. Hinweise kosten etwas XP.
- Die Grammatik-Erklärung des Themas ist jederzeit gratis abrufbar.
- Nach jeder Antwort erscheinen Lösung, Übersetzung, Begründung und ein Vergleich mit der eigenen Eingabe.

**Gamification**
- XP mit Combo-Multiplikator (bis ×2) und Tempo-Bonus
- Ränge von 🦔 *Siili* bis 🦢 *Joutsen*
- Tagesziel-Ring und Tages-Serie 🔥
- Sterne pro Thema und 19 Erfolge
- Konfetti, Partikel und Soundeffekte (WebAudio) sowie finnisches Lob („Mahtavaa!“)

## Architektur

```
src/data/types.ts          Inhalts-Schema (Topic, Sentence, Gap, ReadingText, WordFamily, Lexikon)
src/data/content/*.ts      Inhaltspakete → werden beim Start in SQLite geschrieben (bei Änderung neu)
src/server/db.ts           SQLite-Schema (Inhalte + Lernstand) & Seeding
src/server/engine.ts       Aufgabenauswahl, adaptive Schwierigkeit, Wiederholung, Fortschritt
src/server/gamification.ts XP, Ränge, Erfolge, Sterne
src/server/index.ts        Bun.serve: API + gebündeltes Frontend
src/shared/                gemeinsame Typen & Textvergleich (Server und Browser)
public/                    Frontend (Vanilla TypeScript, von Bun gebündelt)
scripts/validate.ts        Inhaltsprüfung
```

Neue Inhalte: Ein Paket in `src/data/content/` anlegen (siehe `scripts/CONTENT_BRIEF.md`), in `src/data/index.ts`
registrieren und `bun run validate` ausführen.

Für die Hörübungen braucht der Browser eine finnische Stimme (z. B. macOS/iOS „Satu“, Android, Windows mit
finnischem Sprachpaket). Ohne Stimme lassen sich die Hörübungen in den Einstellungen abschalten.
