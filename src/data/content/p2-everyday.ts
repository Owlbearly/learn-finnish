import type { ContentPack } from "../types";

export const pack: ContentPack = {
  name: "p2-everyday",
  topics: [
    {
      id: "innere-lokalkasus",
      kind: "grammar",
      title: "Wo? Woher? Wohin? (innen)",
      titleFi: "sisäpaikallissijat",
      order: 6,
      level: 3,
      icon: "🏠",
      summary: "Inessiv (-ssa), Elativ (-sta) und Illativ (-Vn, -hVn, -seen): in, aus, hinein.",
      explanation: `### Drei Fälle für „innen“
Wo das Deutsche Präpositionen benutzt (*in, aus, nach*), hängt das Finnische eine Endung an das Wort. Für Orte, die man sich als **Innenraum** vorstellt (Städte, Länder, Gebäude, Räume, Behälter), gibt es drei Fälle:

| Frage | Fall | Endung | Beispiel
| Wo? (missä?) | Inessiv | -ssa / -ssä | talossa – im Haus
| Woher? (mistä?) | Elativ | -sta / -stä | talosta – aus dem Haus
| Wohin? (mihin?) | Illativ | -Vn, -hVn, -seen | taloon – ins Haus

### Der Illativ
Der Illativ hat mehrere Formen:
- kurzer Vokal am Ende → Vokal verdoppeln + **-n**: *talo → taloon, koulu → kouluun, Turku → Turkuun*
- einsilbig oder auf Langvokal/Diphthong: **-h + Vokal + n**: *maa → maahan, työ → työhön, Pori → Poriin* (Ausnahme: hier nur -in)
- Wörter auf -e (Stamm -ee-) und Langvokal in mehrsilbigen Wörtern: **-seen**: *huone → huoneeseen, Espoo → Espooseen*

### Stufenwechsel
Inessiv und Elativ haben eine geschlossene Silbe → **schwache Stufe**: *kauppa → kaupassa, kaupasta*, *Helsinki → Helsingissä*, *Turku → Turussa*. Der Illativ behält die **starke Stufe**: *kauppaan, Helsinkiin, Turkuun*.

### Vokalharmonie
Enthält das Wort a, o, u → *-ssa/-sta*; sonst *-ssä/-stä*: *keittiössä, Saksassa*.

### Abstrakte Verwendungen
Viele Verben verlangen einen dieser Fälle:
- **pitää** + Elativ: *Pidän kahvista.* – Ich mag Kaffee.
- **olla kiinnostunut** + Elativ: *Olen kiinnostunut musiikista.*
- **puhua** + Elativ („über“): *Puhumme työstä.*
- **rakastua** + Illativ: *Rakastuin Helsinkiin.*

Feste Ausdrücke: *kotona* (zu Hause), *kotiin* (nach Hause), *töissä / töihin / töistä* (bei der / zur / von der Arbeit).`,
    },
    {
      id: "minulla-on",
      kind: "grammar",
      title: "Haben: minulla on",
      titleFi: "omistuslause",
      order: 7,
      level: 3,
      icon: "🎒",
      summary: "Besitz ausdrücken mit Adessiv + on: Minulla on koira – ich habe einen Hund.",
      explanation: `### Es gibt kein Verb „haben“
Finnisch sagt wörtlich „**bei mir ist** ein Hund“: Der Besitzer steht im **Adessiv** (-lla/-llä), danach folgt immer **on** (3. Person Singular), dann das Besessene im Nominativ.

| Person | Adessiv | Beispiel
| minä | minulla | Minulla on koira.
| sinä | sinulla | Sinulla on auto.
| hän | hänellä | Hänellä on kissa.
| me | meillä | Meillä on talo.
| te | teillä | Teillä on lapsia.
| he | heillä | Heillä on kiire.
| Anna | Annalla | Annalla on pyörä.

Das Verb bleibt immer **on** – auch bei „wir“ oder „sie (Pl.)“: *Meillä on…*, nicht *meillä olemme*.

### Verneinung und Frage
- Verneinung: **ei ole** + **Partitiv**: *Minulla **ei ole** auto**a**.* – Ich habe kein Auto.
- Frage: **Onko** + Adessiv: *Onko sinulla aikaa?* – Hast du Zeit?
- Unbestimmte Mengen und Mehrzahl in Fragen stehen oft im Partitiv: *Onko teillä lapsia?*
- Fragewort: **Kenellä** on avaimet? – Wer hat die Schlüssel?

### Zeitformen
Vergangenheit: *Minulla **oli** koira.* Konditional: *Jos minulla **olisi** aikaa…*

### Zustände und Gefühle
Viele körperliche Zustände drückt man ebenfalls so aus:

| Finnisch | Deutsch
| Minulla on nälkä. | Ich habe Hunger.
| Minulla on jano. | Ich habe Durst.
| Minulla on kylmä / kuuma. | Mir ist kalt / heiß.
| Minulla on kiire. | Ich habe es eilig.
| Minulla on flunssa. | Ich bin erkältet.

Verneint: *Minulla ei ole kiire**ttä**.* – Ich habe keine Eile.`,
    },
    {
      id: "zahlen-zeit",
      kind: "phrases",
      title: "Zahlen, Uhrzeit & Tage",
      titleFi: "numerot ja aika",
      order: 8,
      level: 3,
      icon: "🕒",
      summary: "Zahlen, Preise, Uhrzeit, Wochentage, Monate, Datum und Alter.",
      explanation: `### Zahlen 0–10
| 0 nolla | 1 yksi | 2 kaksi | 3 kolme | 4 neljä | 5 viisi
| 6 kuusi | 7 seitsemän | 8 kahdeksan | 9 yhdeksän | 10 kymmenen

11–19: *yksitoista, kaksitoista …*; Zehner: *kaksikymmentä* (20), *kolmekymmentä* (30); 25 = *kaksikymmentäviisi*; 100 = *sata*.

### Zahl + Partitiv
Nach jeder Zahl ab 2 steht das Nomen im **Partitiv Singular**: *kaksi lasta, viisi euroa, seitsemän päivää*. Das Verb bleibt Singular.

### Preise
*Paljonko tämä maksaa?* – *Se maksaa viisi euroa.*

### Uhrzeit
| Finnisch | Deutsch
| Kello on kolme. | Es ist drei Uhr.
| Kello on puoli neljä. | Es ist halb vier (3:30!).
| Kello on kymmentä yli viisi. | Es ist zehn nach fünf.
| Kello on varttia vaille kaksi. | Es ist Viertel vor zwei.
| kuudelta / kello kuusi | um sechs Uhr

Wie im Deutschen bezieht sich **puoli** auf die *kommende* Stunde. „Um … Uhr“: Ablativ **-lta** (*kuudelta*) oder *kello* + Zahl.

### Tage und Monate
- Wochentage: *maanantai, tiistai, keskiviikko, torstai, perjantai, lauantai, sunnuntai*. „Am Montag“ = Essiv **-na**: *maanantaina*.
- Monate enden auf *-kuu*: *tammikuu, helmikuu … joulukuu*. „Im Januar“ = Inessiv: *tammikuussa*.
- Datum: Ordinalzahl + Monat im Partitiv: *neljäs toukokuuta* (4. Mai).

### Alter
*Olen 30-vuotias.* oder *Olen kolmekymmentä vuotta vanha.* Frage: *Kuinka vanha olet?*`,
    },
    {
      id: "alltag",
      kind: "phrases",
      title: "Alltag: Café, Laden, Weg",
      titleFi: "arkitilanteet",
      order: 9,
      level: 3,
      icon: "☕",
      summary: "Bestellen, einkaufen, nach dem Weg fragen, Bahnhof, Arzt, Smalltalk, Telefon.",
      explanation: `### Höflich bitten mit dem Konditional
Finnen sagen selten „bitte“. Höflichkeit entsteht durch den **Konditional** (-isi-) – lerne die Formen zunächst als feste Wendungen:

| Finnisch | Deutsch
| Saisinko kahvin? | Könnte ich einen Kaffee bekommen?
| Haluaisin tilata. | Ich würde gern bestellen.
| Voisitko puhua hitaammin? | Könntest du langsamer sprechen?
| Saanko laskun? | Kann ich die Rechnung haben?

*kiitos* steht oft am Ende einer Bitte und bedeutet hier „bitte“: *Yksi kahvi, kiitos.*

### Nach dem Weg fragen
- *Missä on …?* – Wo ist …?
- *Miten pääsen …lle / …Vn?* – Wie komme ich zu/nach …?
- *vasemmalle / oikealle / suoraan* – nach links / nach rechts / geradeaus
- *… vieressä* – neben …

### Bahnhof und Arzt
- *Yksi meno-paluu Turkuun.* – Einmal hin und zurück nach Turku.
- *Miltä raiteelta juna lähtee?* – Von welchem Gleis fährt der Zug?
- *Minulla on kuumetta.* – Ich habe Fieber.
- *Mikä teitä vaivaa?* – Was fehlt Ihnen?

### Smalltalk und Telefon
- *Mitä kuuluu? – Kiitos hyvää.* – Wie geht's? – Danke, gut.
- *Hauska tutustua!* – Freut mich!
- *Hei, täällä puhuu Mikko.* – Hallo, hier spricht Mikko.

Beachte: Objekte im Partitiv (*kuumetta, hyvää*) sind in diesen Wendungen fest – präge sie dir als Ganzes ein.`,
    },
  ],
  sentences: [
    // ---------- innere-lokalkasus ----------
    {
      id: "ine-001", topic: "innere-lokalkasus", fi: "Asun Helsingissä.", de: "Ich wohne in Helsinki.", level: 3,
      gap: { answer: "Helsingissä", options: ["Helsinkiin", "Helsingistä", "Helsinki"], why: "Wo? → Inessiv -ssä. Stufenwechsel nk → ng: Helsinki → Helsingissä." },
    },
    {
      id: "ine-002", topic: "innere-lokalkasus", fi: "Olen kotoisin Turusta.", de: "Ich komme aus Turku.", level: 3,
      gap: { answer: "Turusta", options: ["Turussa", "Turkuun", "Turku"], why: "Woher? → Elativ -sta. Stufenwechsel rk → r: Turku → Turusta." },
      note: "„kotoisin“ + Elativ = „stammen aus“.",
    },
    {
      id: "ine-003", topic: "innere-lokalkasus", fi: "Matkustan huomenna Turkuun.", de: "Ich fahre morgen nach Turku.", level: 3,
      gap: { answer: "Turkuun", options: ["Turussa", "Turusta", "Turku"], why: "Wohin? → Illativ: Endvokal verdoppeln + n. Der Illativ hat die starke Stufe (rk bleibt)." },
    },
    {
      id: "ine-004", topic: "innere-lokalkasus", fi: "Lapset ovat koulussa.", de: "Die Kinder sind in der Schule.", level: 3,
      gap: { answer: "koulussa", options: ["kouluun", "koulusta", "koulu"], why: "Wo? → Inessiv -ssa (koulu hat u → -ssa)." },
    },
    {
      id: "ine-005", topic: "innere-lokalkasus", fi: "Menen kauppaan.", de: "Ich gehe in den Laden.", level: 3,
      gap: { answer: "kauppaan", options: ["kaupassa", "kaupasta", "kauppa"], why: "Wohin? → Illativ -an. Im Illativ bleibt die starke Stufe pp." },
    },
    {
      id: "ine-006", topic: "innere-lokalkasus", fi: "Tulen juuri kaupasta.", de: "Ich komme gerade aus dem Laden.", level: 4,
      gap: { answer: "kaupasta", options: ["kauppaan", "kaupassa", "kauppa"], why: "Woher? → Elativ -sta. Geschlossene Silbe → schwache Stufe pp → p." },
    },
    {
      id: "ine-007", topic: "innere-lokalkasus", fi: "Kirja on laukussa.", de: "Das Buch ist in der Tasche.", level: 3,
      gap: { answer: "laukussa", options: ["laukkuun", "laukusta", "laukku"], why: "Wo? → Inessiv -ssa; kk → k (schwache Stufe)." },
    },
    {
      id: "ine-008", topic: "innere-lokalkasus", fi: "Otan avaimet laukusta.", de: "Ich nehme die Schlüssel aus der Tasche.", level: 4,
      gap: { answer: "laukusta", options: ["laukussa", "laukkuun", "laukku"], why: "Etwas aus etwas herausnehmen → Elativ -sta." },
      note: "Deutsch „aus der Tasche nehmen“ – Finnisch genauso mit dem Elativ.",
    },
    {
      id: "ine-009", topic: "innere-lokalkasus", fi: "Laitan puhelimen laukkuun.", de: "Ich stecke das Handy in die Tasche.", level: 4,
      gap: { answer: "laukkuun", options: ["laukussa", "laukusta", "laukku"], why: "Etwas hineintun → Illativ; starke Stufe kk bleibt: laukkuun." },
    },
    {
      id: "ine-010", topic: "innere-lokalkasus", fi: "Muutimme Suomeen viime vuonna.", de: "Wir sind letztes Jahr nach Finnland gezogen.", level: 5,
      gap: { answer: "Suomeen", options: ["Suomessa", "Suomesta", "Suomi"], why: "Wohin? → Illativ. Suomi hat den Stamm Suome- → Suomeen." },
      alt: ["Viime vuonna muutimme Suomeen."],
    },
    {
      id: "ine-011", topic: "innere-lokalkasus", fi: "Olen kotoisin Saksasta.", de: "Ich komme aus Deutschland.", level: 3,
      gap: { answer: "Saksasta", options: ["Saksassa", "Saksaan", "Saksa"], why: "Herkunft (woher?) → Elativ -sta." },
    },
    {
      id: "ine-012", topic: "innere-lokalkasus", fi: "Mennään kahvilaan!", de: "Gehen wir ins Café!", level: 4,
      gap: { answer: "kahvilaan", options: ["kahvilassa", "kahvilasta", "kahvila"], why: "Bewegung hinein → Illativ: a verdoppeln + n." },
      note: "„Mennään“ (Passivform) bedeutet in der Umgangssprache „lass(t) uns gehen“.",
    },
    {
      id: "ine-013", topic: "innere-lokalkasus", fi: "Istumme keittiössä ja juomme teetä.", de: "Wir sitzen in der Küche und trinken Tee.", level: 4,
      gap: { answer: "keittiössä", options: ["keittiöön", "keittiöstä", "keittiö"], why: "Wo? → Inessiv. Wegen ö (Vokalharmonie) -ssä statt -ssa." },
    },
    {
      id: "ine-014", topic: "innere-lokalkasus", fi: "Tule olohuoneeseen!", de: "Komm ins Wohnzimmer!", level: 4,
      gap: { answer: "olohuoneeseen", options: ["olohuoneessa", "olohuoneesta", "olohuone"], why: "Wörter auf -e haben den Stamm -ee-; ihr Illativ endet auf -seen: huone → huoneeseen." },
    },
    {
      id: "ine-015", topic: "innere-lokalkasus", fi: "Juna saapuu Oulusta.", de: "Der Zug kommt aus Oulu an.", level: 4,
      gap: { answer: "Oulusta", options: ["Oulussa", "Ouluun", "Oulu"], why: "Herkunftsort der Bewegung → Elativ -sta." },
    },
    {
      id: "ine-016", topic: "innere-lokalkasus", fi: "Menen saunaan.", de: "Ich gehe in die Sauna.", level: 3,
      gap: { answer: "saunaan", options: ["saunassa", "saunasta", "sauna"], why: "Wohin? → Illativ: saunaan." },
    },
    {
      id: "ine-017", topic: "innere-lokalkasus", fi: "Tulin juuri saunasta.", de: "Ich komme gerade aus der Sauna.", level: 5,
      gap: { answer: "saunasta", options: ["saunassa", "saunaan", "sauna"], why: "Woher? → Elativ -sta." },
      note: "Finnisch benutzt hier die Vergangenheit (tulin = ich kam), Deutsch eher das Präsens.",
    },
    {
      id: "ine-018", topic: "innere-lokalkasus", fi: "Maito on jääkaapissa.", de: "Die Milch ist im Kühlschrank.", level: 4,
      gap: { answer: "jääkaapissa", options: ["jääkaappiin", "jääkaapista", "jääkaappi"], why: "Wo? → Inessiv; geschlossene Silbe → pp wird zu p." },
    },
    {
      id: "ine-019", topic: "innere-lokalkasus", fi: "Ota maito jääkaapista.", de: "Nimm die Milch aus dem Kühlschrank.", level: 4,
      gap: { answer: "jääkaapista", options: ["jääkaapissa", "jääkaappiin", "jääkaappi"], why: "Heraus aus → Elativ -sta, schwache Stufe p." },
    },
    {
      id: "ine-020", topic: "innere-lokalkasus", fi: "Olen kiinnostunut musiikista.", de: "Ich interessiere mich für Musik.", level: 5,
      gap: { answer: "musiikista", options: ["musiikissa", "musiikkiin", "musiikki"], why: "„kiinnostunut“ verlangt den Elativ (interessiert *aus* etwas). kk → k." },
      note: "Deutsch „für“, Finnisch Elativ – solche Rektionen muss man mitlernen.",
    },
    {
      id: "ine-021", topic: "innere-lokalkasus", fi: "Pidän kahvista.", de: "Ich mag Kaffee.", level: 4,
      gap: { answer: "kahvista", options: ["kahvissa", "kahviin", "kahvia"], why: "pitää (mögen) verlangt immer den Elativ." },
      alt: ["Tykkään kahvista."],
    },
    {
      id: "ine-022", topic: "innere-lokalkasus", fi: "Pidätkö tästä kaupungista?", de: "Gefällt dir diese Stadt?", level: 6,
      gap: { answer: "kaupungista", options: ["kaupungissa", "kaupunkiin", "kaupunki"], why: "pitää + Elativ. Stufenwechsel nk → ng: kaupunki → kaupungista." },
      note: "Auch das Demonstrativ steht im Elativ: tämä → tästä.",
    },
    {
      id: "ine-023", topic: "innere-lokalkasus", fi: "Puhumme usein työstä.", de: "Wir sprechen oft über die Arbeit.", level: 5,
      gap: { answer: "työstä", options: ["työssä", "työhön", "työ"], why: "puhua jostakin = über etwas sprechen → Elativ." },
    },
    {
      id: "ine-024", topic: "innere-lokalkasus", fi: "Rakastuin Helsinkiin heti.", de: "Ich habe mich sofort in Helsinki verliebt.", level: 6,
      gap: { answer: "Helsinkiin", options: ["Helsingissä", "Helsingistä", "Helsinki"], why: "rakastua (sich verlieben) verlangt den Illativ – wie Deutsch „sich *in* … verlieben“." },
      alt: ["Rakastuin heti Helsinkiin."],
    },
    {
      id: "ine-025", topic: "innere-lokalkasus", fi: "Asuimme ennen Berliinissä, mutta nyt asumme Espoossa.", de: "Früher haben wir in Berlin gewohnt, aber jetzt wohnen wir in Espoo.", level: 6,
      gap: { answer: "Espoossa", options: ["Espooseen", "Espoosta", "Espoo"], why: "Wo? → Inessiv -ssa. (Illativ von Espoo wäre Espooseen.)" },
    },
    {
      id: "ine-026", topic: "innere-lokalkasus", fi: "Lähden aamulla töihin.", de: "Ich gehe morgens zur Arbeit.", level: 5,
      gap: { answer: "töihin", options: ["töissä", "töistä", "työ"], why: "Feste Wendung im Plural: töissä (bei der Arbeit), töihin (zur Arbeit), töistä (von der Arbeit)." },
    },
    {
      id: "ine-027", topic: "innere-lokalkasus", fi: "Otin kirjan hyllystä ja vein sen makuuhuoneeseen.", de: "Ich nahm das Buch aus dem Regal und brachte es ins Schlafzimmer.", level: 7,
      gap: { answer: "makuuhuoneeseen", options: ["makuuhuoneessa", "makuuhuoneesta", "makuuhuone"], why: "Ziel der Bewegung → Illativ; huone → huoneeseen (-seen)." },
    },
    {
      id: "ine-028", topic: "innere-lokalkasus", fi: "Menen nyt kotiin.", de: "Ich gehe jetzt nach Hause.", level: 3,
      gap: { answer: "kotiin", options: ["kotona", "kotoa", "koti"], why: "„nach Hause“ = kotiin (Illativ). Achtung: „zu Hause“ heißt kotona, „von zu Hause“ kotoa." },
    },

    // ---------- minulla-on ----------
    {
      id: "omi-001", topic: "minulla-on", fi: "Minulla on koira.", de: "Ich habe einen Hund.", level: 3,
      gap: { answer: "Minulla", options: ["Minä", "Minun", "Minulle"], why: "Besitzer steht im Adessiv (-lla): minulla on = ich habe." },
    },
    {
      id: "omi-002", topic: "minulla-on", fi: "Sinulla on kaunis koti.", de: "Du hast ein schönes Zuhause.", level: 3,
      gap: { answer: "Sinulla", options: ["Sinä", "Sinun", "Sinulle"], why: "Adessiv von sinä: sinulla." },
    },
    {
      id: "omi-003", topic: "minulla-on", fi: "Hänellä on kaksi lasta.", de: "Er/Sie hat zwei Kinder.", level: 3,
      gap: { answer: "Hänellä", options: ["Hän", "Hänen", "Hänelle"], why: "Adessiv von hän: hänellä." },
      note: "Nach der Zahl kaksi steht der Partitiv Singular: lapsi → lasta.",
    },
    {
      id: "omi-004", topic: "minulla-on", fi: "Meillä on uusi auto.", de: "Wir haben ein neues Auto.", level: 3,
      gap: { answer: "Meillä", options: ["Me", "Meidän", "Meille"], why: "Adessiv von me: meillä. Das Verb bleibt trotzdem on (nicht olemme)." },
    },
    {
      id: "omi-005", topic: "minulla-on", fi: "Teillä on iso talo.", de: "Ihr habt ein großes Haus.", level: 3,
      gap: { answer: "Teillä", options: ["Te", "Teidän", "Teille"], why: "Adessiv von te: teillä." },
    },
    {
      id: "omi-006", topic: "minulla-on", fi: "Heillä on paljon ystäviä.", de: "Sie haben viele Freunde.", level: 4,
      gap: { answer: "Heillä", options: ["He", "Heidän", "Heille"], why: "Adessiv von he: heillä." },
      note: "paljon (viel) verlangt den Partitiv: ystäviä (Partitiv Plural von ystävä).",
    },
    {
      id: "omi-007", topic: "minulla-on", fi: "Onko sinulla aikaa huomenna?", de: "Hast du morgen Zeit?", level: 4,
      gap: { answer: "Onko", options: ["Oletko", "Olenko", "Ovatko"], why: "In der Besitzfrage steht immer onko (3. Sg.) – egal, wer der Besitzer ist." },
      note: "aikaa ist Partitiv: Zeit als unbestimmte Menge.",
    },
    {
      id: "omi-008", topic: "minulla-on", fi: "Minulla ei ole autoa.", de: "Ich habe kein Auto.", level: 4,
      gap: { answer: "autoa", options: ["auto", "autot", "autoon"], why: "Nach verneintem „haben“ (ei ole) steht das Besessene im Partitiv." },
    },
    {
      id: "omi-009", topic: "minulla-on", fi: "Onko teillä lapsia?", de: "Haben Sie Kinder?", level: 4,
      gap: { answer: "lapsia", options: ["lapset", "lapsi", "lasta"], why: "Unbestimmte Mehrzahl in der Frage → Partitiv Plural lapsia." },
      note: "„teillä“ ist hier die höfliche Anrede (Sie).",
    },
    {
      id: "omi-010", topic: "minulla-on", fi: "Meillä ei ole lapsia.", de: "Wir haben keine Kinder.", level: 4,
      gap: { answer: "ole", options: ["on", "olla", "olemme"], why: "Verneinung: ei + Verbstamm ole. Das Verb richtet sich nicht nach „me“." },
    },
    {
      id: "omi-011", topic: "minulla-on", fi: "Minulla on nälkä.", de: "Ich habe Hunger.", level: 3,
      gap: { answer: "nälkä", options: ["nälkää", "nälän"], why: "Feste Wendung: minulla on nälkä (Nominativ)." },
    },
    {
      id: "omi-012", topic: "minulla-on", fi: "Onko sinulla kylmä?", de: "Ist dir kalt?", level: 4,
      gap: { answer: "kylmä", options: ["kylmää", "kylmässä"], why: "Körpergefühle: Adessiv + on + Nominativ (kylmä)." },
      note: "Deutsch „mir ist kalt“ – Finnisch „bei mir ist kalt“.",
    },
    {
      id: "omi-013", topic: "minulla-on", fi: "Minulla on kiire.", de: "Ich habe es eilig.", level: 3,
      gap: { answer: "kiire", options: ["kiirettä", "kiireen"], why: "Bejaht steht kiire im Nominativ." },
    },
    {
      id: "omi-014", topic: "minulla-on", fi: "Minulla ei ole kiirettä.", de: "Ich habe keine Eile.", level: 4,
      gap: { answer: "kiirettä", options: ["kiire", "kiireen"], why: "Verneint → Partitiv: kiire → kiirettä." },
    },
    {
      id: "omi-015", topic: "minulla-on", fi: "Hänellä on flunssa.", de: "Er/Sie ist erkältet.", level: 4,
      gap: { answer: "Hänellä", options: ["Hänen", "Hänelle", "Hän"], why: "Auch Krankheiten „hat“ man mit dem Adessiv." },
    },
    {
      id: "omi-016", topic: "minulla-on", fi: "Minulla on päänsärky.", de: "Ich habe Kopfschmerzen.", level: 4,
      gap: { answer: "Minulla", options: ["Minä", "Minulle", "Minun"], why: "Besitz/Zustand → Adessiv minulla." },
      alt: ["Päätäni särkee."],
      note: "Wörtlich „bei mir ist Kopfschmerz“; Alternative: Päätäni särkee (= mein Kopf schmerzt).",
    },
    {
      id: "omi-017", topic: "minulla-on", fi: "Isällä on uusi työpaikka.", de: "Vater hat eine neue Arbeitsstelle.", level: 4,
      gap: { answer: "Isällä", options: ["Isä", "Isän", "Isälle"], why: "Auch bei Nomen: Besitzer im Adessiv (isä → isällä)." },
    },
    {
      id: "omi-018", topic: "minulla-on", fi: "Liisalla on kaksi kissaa.", de: "Liisa hat zwei Katzen.", level: 4,
      gap: { answer: "Liisalla", options: ["Liisa", "Liisan", "Liisalle"], why: "Name im Adessiv: Liisa → Liisalla." },
      note: "Nach kaksi: Partitiv Singular kissaa.",
    },
    {
      id: "omi-019", topic: "minulla-on", fi: "Onko sinulla rahaa? Minulla on vain viisi euroa.", de: "Hast du Geld? Ich habe nur fünf Euro.", level: 5,
      gap: { answer: "rahaa", options: ["raha", "rahat"], why: "Geld als unbestimmte Menge → Partitiv rahaa." },
    },
    {
      id: "omi-020", topic: "minulla-on", fi: "Meillä oli hauskaa eilen.", de: "Wir hatten gestern Spaß.", level: 5,
      gap: { answer: "oli", options: ["olimme", "olivat", "on"], why: "Vergangenheit: immer oli (3. Sg.), auch bei meillä." },
      alt: ["Eilen meillä oli hauskaa."],
      note: "hauskaa (Partitiv) in der festen Wendung „Spaß haben“.",
    },
    {
      id: "omi-021", topic: "minulla-on", fi: "Minulla oli lapsena koira, mutta nyt minulla ei ole lemmikkiä.", de: "Als Kind hatte ich einen Hund, aber jetzt habe ich kein Haustier.", level: 6,
      gap: { answer: "lemmikkiä", options: ["lemmikki", "lemmikin"], why: "ei ole → Partitiv: lemmikki → lemmikkiä." },
      note: "lapsena = Essiv „als Kind“.",
    },
    {
      id: "omi-022", topic: "minulla-on", fi: "Jos minulla olisi enemmän aikaa, opiskelisin suomea joka päivä.", de: "Wenn ich mehr Zeit hätte, würde ich jeden Tag Finnisch lernen.", level: 7,
      gap: { answer: "olisi", options: ["on", "oli", "olisin"], why: "Irrealer Wunsch → Konditional olisi (3. Sg., denn die Besitzkonstruktion bleibt bei on/oli/olisi)." },
    },
    {
      id: "omi-023", topic: "minulla-on", fi: "Kenellä on avaimet?", de: "Wer hat die Schlüssel?", level: 5,
      gap: { answer: "Kenellä", options: ["Kuka", "Kenen", "Kenelle"], why: "„Wer hat?“ → Fragewort im Adessiv: kuka → kenellä." },
    },
    {
      id: "omi-024", topic: "minulla-on", fi: "Onko sinulla jano?", de: "Hast du Durst?", level: 3,
      gap: { answer: "sinulla", options: ["sinä", "sinun", "sinulle"], why: "Frage: Onko + Adessiv." },
    },

    // ---------- zahlen-zeit ----------
    {
      id: "aik-001", topic: "zahlen-zeit", fi: "Paljonko kello on?", de: "Wie spät ist es?", level: 3,
      alt: ["Mitä kello on?", "Paljonko kello on nyt?"],
      note: "Wörtlich „Wie viel ist die Uhr?“",
    },
    {
      id: "aik-002", topic: "zahlen-zeit", fi: "Kello on kolme.", de: "Es ist drei Uhr.", level: 3,
      gap: { answer: "kolme", options: ["kolmas", "kolmen", "kolmea"], why: "Uhrzeit: kello on + Grundzahl im Nominativ." },
    },
    {
      id: "aik-003", topic: "zahlen-zeit", fi: "Kello on puoli neljä.", de: "Es ist halb vier.", level: 4,
      gap: { answer: "neljä", options: ["kolme", "neljän"], why: "puoli + kommende Stunde – genau wie im Deutschen: puoli neljä = 3:30." },
      note: "Nicht wie Englisch „half four“ (= 4:30)!",
    },
    {
      id: "aik-004", topic: "zahlen-zeit", fi: "Kello on varttia vaille kaksi.", de: "Es ist Viertel vor zwei.", level: 5,
      gap: { answer: "vaille", options: ["yli", "puoli"], why: "vaille = vor (fehlend bis), yli = nach. Viertel vor zwei → varttia vaille kaksi." },
      note: "vartti (Viertelstunde) steht im Partitiv: varttia.",
    },
    {
      id: "aik-005", topic: "zahlen-zeit", fi: "Kello on kymmentä yli viisi.", de: "Es ist zehn nach fünf.", level: 5,
      gap: { answer: "yli", options: ["vaille", "puoli"], why: "yli = nach (über). Die Minuten stehen im Partitiv: kymmentä." },
      alt: ["Kello on kymmenen yli viisi."],
    },
    {
      id: "aik-006", topic: "zahlen-zeit", fi: "Tavataan kuudelta.", de: "Treffen wir uns um sechs.", level: 5,
      gap: { answer: "kuudelta", options: ["kuusi", "kuudessa", "kuuteen"], why: "„um … Uhr“ → Ablativ -lta: kuusi → kuudelta (t → d)." },
      alt: ["Tavataan kello kuusi."],
    },
    {
      id: "aik-007", topic: "zahlen-zeit", fi: "Se maksaa viisi euroa.", de: "Das kostet fünf Euro.", level: 3,
      gap: { answer: "euroa", options: ["euro", "euron", "eurot"], why: "Nach Zahlen ab 2 → Partitiv Singular: euroa." },
    },
    {
      id: "aik-008", topic: "zahlen-zeit", fi: "Paljonko tämä maksaa?", de: "Was kostet das?", level: 3,
      alt: ["Mitä tämä maksaa?"],
    },
    {
      id: "aik-009", topic: "zahlen-zeit", fi: "Kahvi maksaa kolme euroa viisikymmentä senttiä.", de: "Der Kaffee kostet drei Euro fünfzig.", level: 4,
      gap: { answer: "senttiä", options: ["sentti", "sentin"], why: "Nach der Zahl viisikymmentä → Partitiv senttiä." },
    },
    {
      id: "aik-010", topic: "zahlen-zeit", fi: "Tänään on maanantai.", de: "Heute ist Montag.", level: 3,
      gap: { answer: "maanantai", options: ["maanantaina", "maanantaita"], why: "„Heute ist …“ → Nominativ, keine Zeitendung." },
    },
    {
      id: "aik-011", topic: "zahlen-zeit", fi: "Nähdään maanantaina!", de: "Bis Montag!", level: 3,
      gap: { answer: "maanantaina", options: ["maanantai", "maanantaita"], why: "„am Montag“ → Essiv -na: maanantaina." },
      note: "Wörtlich: „Wir sehen uns am Montag.“",
    },
    {
      id: "aik-012", topic: "zahlen-zeit", fi: "Teen töitä tiistaista perjantaihin.", de: "Ich arbeite von Dienstag bis Freitag.", level: 5,
      gap: { answer: "perjantaihin", options: ["perjantaina", "perjantaista"], why: "von … bis = Elativ … Illativ: tiistaista perjantaihin." },
    },
    {
      id: "aik-013", topic: "zahlen-zeit", fi: "Viikonloppuna menemme mökille.", de: "Am Wochenende fahren wir ins Ferienhaus.", level: 4,
      gap: { answer: "Viikonloppuna", options: ["Viikonloppu", "Viikonlopussa"], why: "Zeitpunkt „am Wochenende“ → Essiv -na." },
      note: "mökki (Sommerhaus) – man fährt mökille (Allativ), nicht *mökkiin.",
    },
    {
      id: "aik-014", topic: "zahlen-zeit", fi: "Syntymäpäiväni on tammikuussa.", de: "Mein Geburtstag ist im Januar.", level: 4,
      gap: { answer: "tammikuussa", options: ["tammikuu", "tammikuuhun", "tammikuusta"], why: "„im (Monat)“ → Inessiv -ssa: tammikuussa." },
    },
    {
      id: "aik-015", topic: "zahlen-zeit", fi: "Kesäkuussa illat ovat pitkiä ja valoisia.", de: "Im Juni sind die Abende lang und hell.", level: 5,
      gap: { answer: "Kesäkuussa", options: ["Kesäkuu", "Kesäkuuhun", "Kesäkuusta"], why: "Monat als Zeitangabe → Inessiv -ssa." },
    },
    {
      id: "aik-016", topic: "zahlen-zeit", fi: "Olen 30-vuotias.", de: "Ich bin 30 Jahre alt.", level: 4,
      alt: ["Olen kolmekymmentä vuotta vanha.", "Olen kolmekymmentävuotias."],
    },
    {
      id: "aik-017", topic: "zahlen-zeit", fi: "Kuinka vanha sinä olet?", de: "Wie alt bist du?", level: 3,
      gap: { answer: "olet", options: ["olen", "on", "oletko"], why: "sinä → olet (2. Sg.)." },
      alt: ["Kuinka vanha olet?", "Minkä ikäinen olet?"],
    },
    {
      id: "aik-018", topic: "zahlen-zeit", fi: "Tyttäreni on seitsemän vuotta vanha.", de: "Meine Tochter ist sieben Jahre alt.", level: 4,
      gap: { answer: "vuotta", options: ["vuosi", "vuoden"], why: "Nach der Zahl → Partitiv: vuosi → vuotta." },
      alt: ["Tyttäreni on seitsemänvuotias."],
    },
    {
      id: "aik-019", topic: "zahlen-zeit", fi: "Tänään on neljäs toukokuuta.", de: "Heute ist der vierte Mai.", level: 6,
      gap: { answer: "toukokuuta", options: ["toukokuu", "toukokuussa"], why: "Datum: Ordinalzahl + Monat im Partitiv (neljäs toukokuuta)." },
    },
    {
      id: "aik-020", topic: "zahlen-zeit", fi: "Juna lähtee puoli kolmelta.", de: "Der Zug fährt um halb drei.", level: 6,
      gap: { answer: "kolmelta", options: ["kolme", "kolmeen", "kolmessa"], why: "„um“ → Ablativ -lta; bei halben Stunden bekommt die Zahl die Endung: puoli kolmelta = um 2:30." },
    },
    {
      id: "aik-021", topic: "zahlen-zeit", fi: "Ostin kolme omenaa ja kaksi leipää.", de: "Ich habe drei Äpfel und zwei Brote gekauft.", level: 5,
      gap: { answer: "omenaa", options: ["omena", "omenat", "omenoita"], why: "Nach Zahlen → Partitiv Singular (nicht Plural!): kolme omenaa." },
    },
    {
      id: "aik-022", topic: "zahlen-zeit", fi: "Viikossa on seitsemän päivää.", de: "Eine Woche hat sieben Tage.", level: 4,
      gap: { answer: "päivää", options: ["päivä", "päivät", "päiviä"], why: "Nach seitsemän → Partitiv Singular päivää." },
      note: "Finnisch sagt „In der Woche sind sieben Tage“ – eine Art Besitzsatz mit Inessiv.",
    },
    {
      id: "aik-023", topic: "zahlen-zeit", fi: "Olin Suomessa kaksi viikkoa vuonna 2019.", de: "Ich war 2019 zwei Wochen in Finnland.", level: 6,
      gap: { answer: "viikkoa", options: ["viikko", "viikon"], why: "Dauer mit Zahl → Partitiv: kaksi viikkoa." },
      note: "Jahreszahlen: vuonna (Essiv von vuosi) + Zahl = „im Jahr“.",
    },
    {
      id: "aik-024", topic: "zahlen-zeit", fi: "Kokous alkaa kello yhdeksän ja loppuu kello yksitoista.", de: "Die Besprechung beginnt um neun und endet um elf.", level: 5,
      gap: { answer: "yhdeksän", options: ["yhdeksäs", "yhdeksältä"], why: "Nach „kello“ steht die Grundzahl im Nominativ (ohne -lta)." },
    },
    {
      id: "aik-025", topic: "zahlen-zeit", fi: "Lähden lomalle heinäkuun alussa.", de: "Ich fahre Anfang Juli in den Urlaub.", level: 6,
      gap: { answer: "heinäkuun", options: ["heinäkuu", "heinäkuussa"], why: "„am Anfang von …“ → Genitiv + alussa: heinäkuun alussa." },
    },
    {
      id: "aik-026", topic: "zahlen-zeit", fi: "Mikä päivä tänään on?", de: "Welcher Tag ist heute?", level: 3,
      alt: ["Mikä päivä on tänään?"],
    },

    // ---------- alltag ----------
    {
      id: "ark-001", topic: "alltag", fi: "Saisinko kahvin, kiitos?", de: "Könnte ich bitte einen Kaffee bekommen?", level: 3,
      gap: { answer: "Saisinko", options: ["Saisitko", "Saisiko"], why: "Höfliche Bitte über sich selbst → 1. Person: saisin + -ko (Konditional von saada)." },
      alt: ["Saanko kahvin, kiitos?", "Saisinko kahvia, kiitos?"],
      note: "„kiitos“ am Ende entspricht hier dem deutschen „bitte“.",
    },
    {
      id: "ark-002", topic: "alltag", fi: "Haluaisin tilata.", de: "Ich würde gern bestellen.", level: 4,
      gap: { answer: "Haluaisin", options: ["Haluaisit", "Haluaisi"], why: "Ich → 1. Sg. Konditional haluaisin (höflicher als haluan)." },
    },
    {
      id: "ark-003", topic: "alltag", fi: "Yksi kahvi ja korvapuusti, kiitos.", de: "Einen Kaffee und eine Zimtschnecke, bitte.", level: 3,
      note: "korvapuusti – die finnische Zimtschnecke, wörtlich „Ohrfeige“.",
    },
    {
      id: "ark-004", topic: "alltag", fi: "Voinko maksaa kortilla?", de: "Kann ich mit Karte zahlen?", level: 4,
      gap: { answer: "kortilla", options: ["kortti", "korttia", "kortilta"], why: "Mittel/Werkzeug → Adessiv -lla; tt → t: kortti → kortilla." },
    },
    {
      id: "ark-005", topic: "alltag", fi: "Paljonko se tekee yhteensä?", de: "Was macht das zusammen?", level: 5,
      gap: { answer: "yhteensä", options: ["yhdessä", "yksin"], why: "yhteensä = insgesamt (Summe); yhdessä = gemeinsam." },
    },
    {
      id: "ark-006", topic: "alltag", fi: "Saisinko laskun?", de: "Könnte ich die Rechnung bekommen?", level: 4,
      gap: { answer: "laskun", options: ["lasku", "laskua"], why: "Ganzes, bestimmtes Objekt → Akkusativ -n: laskun." },
      alt: ["Saanko laskun?"],
    },
    {
      id: "ark-007", topic: "alltag", fi: "Onko teillä tätä isommassa koossa?", de: "Haben Sie das eine Nummer größer?", level: 7,
      gap: { answer: "koossa", options: ["koko", "koon"], why: "„in einer Größe“ → Inessiv; koko → koossa (k fällt weg)." },
      note: "Wörtlich: „Haben Sie dies in größerer Größe?“ – auch das Adjektiv steht im Inessiv (isommassa).",
    },
    {
      id: "ark-008", topic: "alltag", fi: "Saanko sovittaa tätä?", de: "Darf ich das anprobieren?", level: 5,
    },
    {
      id: "ark-009", topic: "alltag", fi: "Missä on lähin apteekki?", de: "Wo ist die nächste Apotheke?", level: 3,
      gap: { answer: "Missä", options: ["Mihin", "Mistä"], why: "Wo? = missä (Inessiv von mikä)." },
    },
    {
      id: "ark-010", topic: "alltag", fi: "Anteeksi, miten pääsen rautatieasemalle?", de: "Entschuldigung, wie komme ich zum Bahnhof?", level: 5,
      gap: { answer: "rautatieasemalle", options: ["rautatieasemalla", "rautatieasemalta"], why: "Ziel (wohin?) bei asema → Allativ -lle." },
      note: "asema (Bahnhof) benutzt die äußeren Ortsfälle: asemalla, asemalle, asemalta.",
    },
    {
      id: "ark-011", topic: "alltag", fi: "Mene suoraan ja käänny sitten vasemmalle.", de: "Geh geradeaus und bieg dann links ab.", level: 5,
      gap: { answer: "vasemmalle", options: ["vasemmalla", "vasemmalta"], why: "Richtung → -lle: vasemmalle = nach links." },
    },
    {
      id: "ark-012", topic: "alltag", fi: "Apteekki on kirkon vieressä.", de: "Die Apotheke ist neben der Kirche.", level: 5,
      gap: { answer: "vieressä", options: ["viereen", "vierestä"], why: "Wo? → vieressä; Genitiv davor: kirkon vieressä." },
    },
    {
      id: "ark-013", topic: "alltag", fi: "Miltä raiteelta juna Tampereelle lähtee?", de: "Von welchem Gleis fährt der Zug nach Tampere?", level: 6,
      gap: { answer: "raiteelta", options: ["raide", "raiteella"], why: "„von (welchem Gleis)“ → Ablativ -lta. raide hat den Stamm raitee-." },
      note: "Tampere benutzt die äußeren Ortsfälle: Tampereella, Tampereelle, Tampereelta.",
    },
    {
      id: "ark-014", topic: "alltag", fi: "Yksi meno-paluu Turkuun, kiitos.", de: "Einmal hin und zurück nach Turku, bitte.", level: 4,
      gap: { answer: "Turkuun", options: ["Turussa", "Turusta"], why: "Fahrtziel → Illativ: Turkuun." },
    },
    {
      id: "ark-015", topic: "alltag", fi: "Juna on myöhässä kymmenen minuuttia.", de: "Der Zug hat zehn Minuten Verspätung.", level: 5,
      gap: { answer: "myöhässä", options: ["myöhään", "myöhäinen"], why: "„verspätet sein“ = olla myöhässä. myöhään bedeutet „spät (am Tag)“." },
    },
    {
      id: "ark-016", topic: "alltag", fi: "Menen lääkäriin kello kymmenen.", de: "Ich gehe um zehn zum Arzt.", level: 5,
      gap: { answer: "lääkäriin", options: ["lääkärissä", "lääkäristä"], why: "„zum Arzt gehen“ = mennä lääkäriin (Illativ, wie „in die Praxis hinein“)." },
      note: "Deutsch „zum Arzt“, Finnisch „in den Arzt hinein“ – der Illativ ist hier fest.",
    },
    {
      id: "ark-017", topic: "alltag", fi: "Minulla on kuumetta ja kurkku on kipeä.", de: "Ich habe Fieber und Halsschmerzen.", level: 5,
      gap: { answer: "kuumetta", options: ["kuume", "kuumeen"], why: "Fieber als Menge → Partitiv kuumetta." },
      note: "„kurkku on kipeä“ = wörtlich „der Hals ist krank/wund“.",
    },
    {
      id: "ark-018", topic: "alltag", fi: "Mikä teitä vaivaa?", de: "Was fehlt Ihnen?", level: 6,
      gap: { answer: "teitä", options: ["te", "teille"], why: "vaivata (plagen) hat ein Partitivobjekt: teitä." },
    },
    {
      id: "ark-019", topic: "alltag", fi: "Mitä kuuluu? – Kiitos hyvää, entä sinulle?", de: "Wie geht's? – Danke, gut, und dir?", level: 3,
      gap: { answer: "hyvää", options: ["hyvä", "hyvin"], why: "Antwort auf „Mitä kuuluu?“ steht im Partitiv: hyvää." },
    },
    {
      id: "ark-020", topic: "alltag", fi: "Hauska tutustua!", de: "Freut mich, dich kennenzulernen!", level: 3,
      alt: ["Hauska tavata!"],
    },
    {
      id: "ark-021", topic: "alltag", fi: "Mistä sinä olet kotoisin?", de: "Woher kommst du?", level: 3,
      gap: { answer: "Mistä", options: ["Missä", "Mihin"], why: "Herkunft → woher? = mistä." },
    },
    {
      id: "ark-022", topic: "alltag", fi: "Onpa kaunis ilma tänään!", de: "Was für ein schönes Wetter heute!", level: 6,
      note: "Die Partikel -pa/-pä am Verb macht den Satz zum Ausruf.",
    },
    {
      id: "ark-023", topic: "alltag", fi: "Hei, täällä puhuu Mikko.", de: "Hallo, hier spricht Mikko.", level: 4,
      gap: { answer: "täällä", options: ["tänne", "täältä"], why: "„hier“ (wo?) = täällä; tänne = hierher, täältä = von hier." },
    },
    {
      id: "ark-024", topic: "alltag", fi: "Voisitko puhua vähän hitaammin?", de: "Könntest du etwas langsamer sprechen?", level: 5,
      gap: { answer: "Voisitko", options: ["Voisinko", "Voisiko"], why: "Bitte an „du“ → 2. Sg. Konditional: voisit + -ko." },
    },
    {
      id: "ark-025", topic: "alltag", fi: "Voinko jättää viestin?", de: "Kann ich eine Nachricht hinterlassen?", level: 5,
      gap: { answer: "viestin", options: ["viesti", "viestiä"], why: "Ganzes Objekt → Akkusativ -n: viestin." },
    },
    {
      id: "ark-026", topic: "alltag", fi: "Anteeksi, en ymmärtänyt. Voitko toistaa?", de: "Entschuldigung, ich habe das nicht verstanden. Kannst du das wiederholen?", level: 6,
      gap: { answer: "ymmärtänyt", options: ["ymmärrä", "ymmärsin"], why: "Verneinte Vergangenheit: en + Partizip ymmärtänyt." },
    },
    {
      id: "ark-027", topic: "alltag", fi: "Haluaisin varata pöydän kahdelle hengelle kello seitsemäksi.", de: "Ich würde gern einen Tisch für zwei Personen um sieben Uhr reservieren.", level: 7,
      gap: { answer: "pöydän", options: ["pöytä", "pöytää"], why: "Ganzes Objekt → Akkusativ -n; tö → dä: pöytä → pöydän." },
      note: "kahdelle hengelle = „für zwei Personen“ (Allativ), seitsemäksi = „für sieben Uhr“ (Translativ).",
    },
  ],
  texts: [
    {
      id: "txt-p2-1",
      title: "Kahvilassa",
      topic: "alltag",
      level: 3,
      fi: "Anna on kahvilassa. Hän on vähän väsynyt. Myyjä sanoo: \"Hei! Mitä saisi olla?\" Anna vastaa: \"Saisinko ison kahvin ja korvapuustin?\"\n\nKahvi ja korvapuusti maksavat yhteensä kuusi euroa. Anna maksaa kortilla. Hän istuu ikkunan vieressä ja juo kahvia.",
      de: "Anna ist im Café. Sie ist ein bisschen müde. Die Verkäuferin sagt: „Hallo! Was darf es sein?“ Anna antwortet: „Könnte ich einen großen Kaffee und eine Zimtschnecke bekommen?“\n\nKaffee und Zimtschnecke kosten zusammen sechs Euro. Anna bezahlt mit Karte. Sie sitzt neben dem Fenster und trinkt Kaffee.",
      questions: [
        { q: "Wo ist Anna?", options: ["Im Café", "Im Laden", "Zu Hause"], answer: 0, why: "„Anna on kahvilassa.“ – kahvilassa = im Café." },
        { q: "Was bestellt Anna?", options: ["Tee und Brot", "Einen großen Kaffee und eine Zimtschnecke", "Einen kleinen Kaffee"], answer: 1, why: "„Saisinko ison kahvin ja korvapuustin?“" },
        { q: "Wie viel kostet alles zusammen?", options: ["Fünf Euro", "Sechs Euro", "Sieben Euro"], answer: 1, why: "„maksavat yhteensä kuusi euroa“ – kuusi = sechs." },
        { q: "Wie bezahlt Anna?", options: ["Bar", "Mit Karte", "Gar nicht"], answer: 1, why: "„Anna maksaa kortilla.“ – mit Karte." },
      ],
    },
    {
      id: "txt-p2-2",
      title: "Mikael Turussa",
      topic: "innere-lokalkasus",
      level: 4,
      fi: "Mikael on kotoisin Saksasta, Hampurista. Hän muutti viime vuonna Suomeen. Nyt hän asuu Turussa pienessä asunnossa.\n\nAamulla hän menee bussilla töihin. Hän on töissä kirjastossa. Illalla hän tulee kotiin ja laittaa ruokaa keittiössä. Viikonloppuna hän käy usein saunassa. Hän pitää Turusta paljon.",
      de: "Mikael kommt aus Deutschland, aus Hamburg. Er ist letztes Jahr nach Finnland gezogen. Jetzt wohnt er in Turku in einer kleinen Wohnung.\n\nMorgens fährt er mit dem Bus zur Arbeit. Er arbeitet in einer Bibliothek. Abends kommt er nach Hause und kocht in der Küche. Am Wochenende geht er oft in die Sauna. Turku gefällt ihm sehr.",
      questions: [
        { q: "Woher kommt Mikael?", options: ["Aus Turku", "Aus Hamburg", "Aus Helsinki"], answer: 1, why: "„kotoisin Saksasta, Hampurista“ – Elativ: aus Hamburg." },
        { q: "Wo arbeitet Mikael?", options: ["In einer Bibliothek", "In einem Café", "In einer Schule"], answer: 0, why: "„Hän on töissä kirjastossa.“ – kirjastossa = in der Bibliothek." },
        { q: "Wo kocht er?", options: ["In der Sauna", "Im Wohnzimmer", "In der Küche"], answer: 2, why: "„laittaa ruokaa keittiössä“ – keittiössä = in der Küche." },
        { q: "Was macht er am Wochenende oft?", options: ["Er geht in die Sauna", "Er fährt nach Deutschland", "Er arbeitet"], answer: 0, why: "„Viikonloppuna hän käy usein saunassa.“" },
      ],
    },
  ],
  families: [],
  lexicon: `
30-vuotias | 30-vuotias | 30 Jahre alt | Adjektiv: Zahl + -vuotias („-jährig“), Nominativ
aamulla | aamu | morgens | Adessiv (-lla) als Zeitangabe: „am Morgen“
aikaa | aika | Zeit | Partitiv Sg. (unbestimmte Menge)
alkaa | alkaa | beginnen | Verb Typ 1, Präsens 3. Sg.
alussa | alku | Anfang | Inessiv „am Anfang“; Stufenwechsel lk → l
anna | Anna | Anna | Vorname, Nominativ
anteeksi | anteeksi | Entschuldigung | Partikel / feste Wendung
apteekki | apteekki | Apotheke | Nominativ Sg.
asuimme | asua | wohnen | Verb Typ 1, Imperfekt 1. Pl. (me)
asumme | asua | wohnen | Verb Typ 1, Präsens 1. Pl. (me)
asun | asua | wohnen | Verb Typ 1, Präsens 1. Sg. (minä)
asunnossa | asunto | Wohnung | Inessiv (-ssa: „in“); Stufenwechsel nt → nn
asuu | asua | wohnen | Verb Typ 1, Präsens 3. Sg. (hän)
auto | auto | Auto | Nominativ Sg.
autoa | auto | Auto | Partitiv Sg. (nach Verneinung)
avaimet | avain | Schlüssel | Nominativ Pl. (Stamm avaime-)
berliinissä | Berliini | Berlin | Inessiv (-ssä: „in“)
bussilla | bussi | Bus | Adessiv (-lla): „mit dem Bus“ (Verkehrsmittel)
ei | ei (Verneinungsverb) | nicht | Verneinungsverb, 3. Sg. (hän/se ei …)
eilen | eilen | gestern | Adverb
en | ei (Verneinungsverb) | nicht | Verneinungsverb, 1. Sg. (minä en …)
enemmän | enemmän | mehr | Komparativ-Adverb von paljon
ennen | ennen | früher, vorher | Adverb
entä | entä | und (was ist mit …)? | Fragepartikel
espoossa | Espoo | Espoo | Inessiv (-ssa: „in“)
euroa | euro | Euro | Partitiv Sg. (nach Zahl)
flunssa | flunssa | Erkältung, Grippe | Nominativ Sg.
haluaisin | haluta | wollen, mögen | Verb Typ 4, Konditional 1. Sg.: „ich hätte gern“
hampurista | Hampuri | Hamburg | Elativ (-sta: „aus“)
hauska | hauska | nett, lustig | Adjektiv, Nominativ; hauska tutustua = freut mich
hauskaa | hauska | Spaß, lustig | Partitiv Sg.; olla hauskaa = Spaß haben
hei | hei | hallo, hi | Grußwort
heillä | he | sie (Pl.) | Adessiv: „bei ihnen“ → heillä on = sie haben
heinäkuun | heinäkuu | Juli | Genitiv (-n): „des Juli“
helsingissä | Helsinki | Helsinki | Inessiv (-ssä = „in“); Stufenwechsel nk → ng
helsinkiin | Helsinki | Helsinki | Illativ (-in: „nach/in … hinein“); starke Stufe nk
hengelle | henki | Person (beim Zählen), Geist | Allativ (-lle: „für“); Stufenwechsel nk → ng
heti | heti | sofort | Adverb
hitaammin | hitaasti | langsamer | Komparativ des Adverbs hitaasti
huomenna | huomenna | morgen | Adverb (erstarrter Essiv)
hyllystä | hylly | Regal | Elativ (-stä: „aus/von“)
hyvää | hyvä | gut | Partitiv Sg.; Antwort auf „Mitä kuuluu?“
hän | hän | er, sie | Personalpronomen 3. Sg., Nominativ
hänellä | hän | er, sie | Adessiv: „bei ihm/ihr“ → hänellä on = er/sie hat
ikkunan | ikkuna | Fenster | Genitiv (-n), vor Postposition vieressä
ikäinen | ikäinen | alt (an Jahren) | Adjektiv; minkä ikäinen = wie alt
illalla | ilta | abends | Adessiv als Zeitangabe; Stufenwechsel lt → ll
illat | ilta | Abend | Nominativ Pl.; Stufenwechsel lt → ll
ilma | ilma | Wetter, Luft | Nominativ Sg.
iso | iso | groß | Adjektiv, Nominativ
isommassa | iso | größer | Komparativ (-mpi), Inessiv: isompi → isommassa (mp → mm)
ison | iso | groß | Akkusativ/Genitiv Sg. (-n), passt sich kahvin an
istumme | istua | sitzen | Verb Typ 1, Präsens 1. Pl. (me)
istuu | istua | sitzen | Verb Typ 1, Präsens 3. Sg.
isällä | isä | Vater | Adessiv: „beim Vater“ → isällä on = Vater hat
ja | ja | und | Konjunktion
jano | jano | Durst | Nominativ Sg.
joka | joka | jede(r) | Pronomen (unveränderlich in joka päivä)
jos | jos | wenn, falls | Konjunktion
juna | juna | Zug | Nominativ Sg.
juo | juoda | trinken | Verb Typ 2, Präsens 3. Sg.
juomme | juoda | trinken | Verb Typ 2, Präsens 1. Pl. (me)
juuri | juuri | gerade, eben | Adverb
jättää | jättää | lassen, hinterlassen | Verb Typ 1, Infinitiv
jääkaapissa | jääkaappi | Kühlschrank | Inessiv (-ssa); Stufenwechsel pp → p
jääkaapista | jääkaappi | Kühlschrank | Elativ (-sta); Stufenwechsel pp → p
kahdelle | kaksi | zwei | Allativ (-lle: „für“); Stamm kahde-
kahvi | kahvi | Kaffee | Nominativ Sg.
kahvia | kahvi | Kaffee | Partitiv Sg. (Teilmenge: „etwas Kaffee“)
kahvilaan | kahvila | Café | Illativ (-an: „in … hinein“)
kahvilassa | kahvila | Café | Inessiv (-ssa: „in“)
kahvin | kahvi | Kaffee | Akkusativ Sg. (-n: ganzes Objekt, „einen Kaffee“)
kahvista | kahvi | Kaffee | Elativ (-sta), Rektion von pitää
kaksi | kaksi | zwei | Grundzahl, Nominativ; danach Partitiv Sg.
kaunis | kaunis | schön | Adjektiv, Nominativ
kaupasta | kauppa | Laden | Elativ (-sta: „aus“); Stufenwechsel pp → p
kauppaan | kauppa | Laden | Illativ (-an: „in … hinein“); starke Stufe pp
kaupungista | kaupunki | Stadt | Elativ (-sta); Stufenwechsel nk → ng
keittiössä | keittiö | Küche | Inessiv (-ssä: „in“)
kello | kello | Uhr; um (… Uhr) | Nominativ Sg.
kenellä | kuka | wer | Adessiv: „bei wem“ → kenellä on = wer hat
kesäkuussa | kesäkuu | Juni | Inessiv (-ssa): „im Juni“
kiinnostunut | kiinnostunut | interessiert | Partizip/Adjektiv; + Elativ („an, für“)
kiire | kiire | Eile | Nominativ Sg.
kiirettä | kiire | Eile | Partitiv Sg. (nach Verneinung); Stamm kiiree-
kiitos | kiitos | danke; bitte (am Ende einer Bitte) | Nominativ
kipeä | kipeä | krank, wund, schmerzend | Adjektiv, Nominativ
kirja | kirja | Buch | Nominativ Sg.
kirjan | kirja | Buch | Akkusativ Sg. (-n: ganzes Objekt)
kirjastossa | kirjasto | Bibliothek | Inessiv (-ssa: „in“)
kirkon | kirkko | Kirche | Genitiv (-n); Stufenwechsel kk → k
kissaa | kissa | Katze | Partitiv Sg. (nach Zahl)
koira | koira | Hund | Nominativ Sg.
kokous | kokous | Besprechung, Sitzung | Nominativ Sg.
kolme | kolme | drei | Grundzahl, Nominativ
kolmekymmentä | kolmekymmentä | dreißig | Grundzahl (kolme + kymmentä)
kolmekymmentävuotias | kolmekymmentävuotias | dreißigjährig | Adjektiv, Nominativ
kolmelta | kolme | drei | Ablativ (-lta): „um (drei)“ bei Uhrzeiten
koossa | koko | Größe | Inessiv (-ssa); Stufenwechsel k → –
kortilla | kortti | Karte | Adessiv (-lla: „mit“, Mittel); Stufenwechsel tt → t
korvapuusti | korvapuusti | Zimtschnecke | Nominativ Sg.
korvapuustin | korvapuusti | Zimtschnecke | Akkusativ Sg. (-n: ganzes Objekt)
koti | koti | Zuhause, Heim | Nominativ Sg.
kotiin | koti | nach Hause | Illativ (-in: „hinein“)
kotoisin | kotoisin | stammend (aus) | Adverb; olla kotoisin + Elativ = stammen aus
koulussa | koulu | Schule | Inessiv (-ssa: „in“)
kuinka | kuinka | wie | Fragewort
kurkku | kurkku | Hals, Kehle | Nominativ Sg.
kuudelta | kuusi | sechs | Ablativ (-lta): „um sechs“; Stamm kuude- (t → d)
kuuluu | kuulua | gehören, (zu hören sein) | Verb Typ 1, Präsens 3. Sg.; Mitä kuuluu? = Wie geht's?
kuumetta | kuume | Fieber | Partitiv Sg.; Stamm kuumee-
kuusi | kuusi | sechs | Grundzahl, Nominativ
kylmä | kylmä | kalt | Adjektiv, Nominativ
kymmenen | kymmenen | zehn | Grundzahl, Nominativ
kymmentä | kymmenen | zehn | Partitiv Sg. (Minuten bei der Uhrzeit)
käy | käydä | gehen, besuchen | Verb Typ 2, Präsens 3. Sg.; käydä saunassa = in die Sauna gehen
käänny | kääntyä | abbiegen, sich wenden | Imperativ 2. Sg.; Stufenwechsel nt → nn
laitan | laittaa | legen, stellen, tun | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
laittaa | laittaa | legen; laittaa ruokaa = kochen | Verb Typ 1, Präsens 3. Sg.
lapsena | lapsi | Kind | Essiv (-na): „als Kind“
lapset | lapsi | Kinder | Nominativ Pl.
lapsia | lapsi | Kinder | Partitiv Pl.
laskun | lasku | Rechnung | Akkusativ Sg. (-n: ganzes Objekt)
lasta | lapsi | Kind | Partitiv Sg. (nach Zahl)
laukkuun | laukku | Tasche | Illativ (-un: „in … hinein“); starke Stufe kk
laukussa | laukku | Tasche | Inessiv (-ssa); Stufenwechsel kk → k
laukusta | laukku | Tasche | Elativ (-sta); Stufenwechsel kk → k
leipää | leipä | Brot | Partitiv Sg. (nach Zahl)
lemmikkiä | lemmikki | Haustier | Partitiv Sg. (nach Verneinung)
liisalla | Liisa | Liisa | Adessiv: „bei Liisa“ → Liisalla on = Liisa hat
lomalle | loma | Urlaub | Allativ (-lle): „in den Urlaub“
loppuu | loppua | enden | Verb Typ 1, Präsens 3. Sg.
lähden | lähteä | weggehen, aufbrechen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel ht → hd
lähin | lähin | nächste(r) | Superlativ von läheinen/lähellä, Nominativ
lähtee | lähteä | abfahren, losgehen | Verb Typ 1, Präsens 3. Sg.
lääkäriin | lääkäri | Arzt | Illativ (-in): „zum Arzt“
maanantai | maanantai | Montag | Nominativ Sg.
maanantaina | maanantai | Montag | Essiv (-na): „am Montag“
maito | maito | Milch | Nominativ Sg.
maksaa | maksaa | kosten; bezahlen | Verb Typ 1, Präsens 3. Sg. / Infinitiv
maksavat | maksaa | kosten | Verb Typ 1, Präsens 3. Pl.
makuuhuoneeseen | makuuhuone | Schlafzimmer | Illativ (-seen: „in … hinein“)
matkustan | matkustaa | reisen, fahren | Verb Typ 1, Präsens 1. Sg.
meillä | me | wir | Adessiv: „bei uns“ → meillä on = wir haben
mene | mennä | gehen | Imperativ 2. Sg.
menee | mennä | gehen | Verb Typ 3, Präsens 3. Sg.
menemme | mennä | gehen, fahren | Verb Typ 3, Präsens 1. Pl.
menen | mennä | gehen | Verb Typ 3, Präsens 1. Sg.
mennään | mennä | gehen | Passiv Präsens, umgangssprachlich: „lass(t) uns gehen“
meno-paluu | meno-paluu | Hin- und Rückfahrt | Kompositum (meno = Hinweg, paluu = Rückkehr)
mikael | Mikael | Mikael | Vorname, Nominativ
mikko | Mikko | Mikko | Vorname, Nominativ
mikä | mikä | was, welche(r) | Fragepronomen, Nominativ
miltä | mikä | von welchem | Ablativ (-ltä) von mikä
minkä | mikä | welcher | Genitiv von mikä; minkä ikäinen = wie alt
minulla | minä | ich | Adessiv: „bei mir“ → minulla on = ich habe
minuuttia | minuutti | Minute | Partitiv Sg. (nach Zahl)
missä | mikä | wo | Inessiv von mikä: „wo?“
mistä | mikä | woher | Elativ von mikä: „woher?“
miten | miten | wie | Fragewort
mitä | mikä | was | Partitiv von mikä
musiikista | musiikki | Musik | Elativ (-sta); Stufenwechsel kk → k
mutta | mutta | aber | Konjunktion
muutimme | muuttaa | umziehen | Verb Typ 1, Imperfekt 1. Pl.; Stufenwechsel tt → t
muutti | muuttaa | umziehen | Verb Typ 1, Imperfekt 3. Sg.
myyjä | myyjä | Verkäufer(in) | Nominativ Sg. (myydä + -jä)
myöhässä | myöhässä | verspätet | Adverb (Inessiv-Form): olla myöhässä = Verspätung haben
mökille | mökki | Ferienhaus, Hütte | Allativ (-lle); Stufenwechsel kk → k
neljä | neljä | vier | Grundzahl, Nominativ
neljäs | neljäs | vierte(r) | Ordinalzahl, Nominativ
nyt | nyt | jetzt | Adverb
nähdään | nähdä | sehen | Passiv Präsens: „wir sehen uns“
nälkä | nälkä | Hunger | Nominativ Sg.
ole | olla | sein | Verneinungsform (ei ole)
olen | olla | sein | Präsens 1. Sg.
olet | olla | sein | Präsens 2. Sg.
oli | olla | sein | Imperfekt 3. Sg.
olin | olla | sein | Imperfekt 1. Sg.
olisi | olla | sein | Konditional 3. Sg.
olla | olla | sein | Infinitiv
olohuoneeseen | olohuone | Wohnzimmer | Illativ (-seen: „in … hinein“)
omenaa | omena | Apfel | Partitiv Sg. (nach Zahl)
on | olla | sein; (bei …) ist = hat | Präsens 3. Sg.
onko | olla | ist …? | Präsens 3. Sg. + Fragepartikel -ko
onpa | olla | ist (Ausruf) | Präsens 3. Sg. + Ausrufpartikel -pa
opiskelisin | opiskella | studieren, lernen | Verb Typ 3, Konditional 1. Sg.
ostin | ostaa | kaufen | Verb Typ 1, Imperfekt 1. Sg.
ota | ottaa | nehmen | Imperativ 2. Sg.; Stufenwechsel tt → t
otan | ottaa | nehmen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
otin | ottaa | nehmen | Verb Typ 1, Imperfekt 1. Sg.; Stufenwechsel tt → t
oulusta | Oulu | Oulu | Elativ (-sta: „aus“)
ovat | olla | sein | Präsens 3. Pl.
paljon | paljon | viel | Adverb; + Partitiv
paljonko | paljon | wie viel | paljon + Fragepartikel -ko
perjantaihin | perjantai | Freitag | Illativ (-hin): „bis Freitag“
pidän | pitää | mögen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel t → d; + Elativ
pidätkö | pitää | mögen | Präsens 2. Sg. + Fragepartikel -kö; + Elativ
pienessä | pieni | klein | Inessiv (-ssä); Stamm piene-
pitkiä | pitkä | lang | Partitiv Pl. (Prädikativ zu Plural)
pitää | pitää | mögen | Verb Typ 1, Präsens 3. Sg.; + Elativ
puhelimen | puhelin | Telefon, Handy | Akkusativ Sg. (-n); Stamm puhelime-
puhua | puhua | sprechen | Infinitiv
puhumme | puhua | sprechen | Präsens 1. Pl.; puhua + Elativ = sprechen über
puhuu | puhua | sprechen | Präsens 3. Sg.
puoli | puoli | halb | Nominativ; puoli neljä = halb vier (3:30)
päivä | päivä | Tag | Nominativ Sg.
päivää | päivä | Tag | Partitiv Sg. (nach Zahl)
päänsärky | päänsärky | Kopfschmerzen | Nominativ Sg. (pää + särky)
pääsen | päästä | (hin)kommen, gelangen | Verb Typ 3, Präsens 1. Sg.
päätäni | pää | Kopf | Partitiv Sg. + Possessivsuffix -ni („meinen Kopf“)
pöydän | pöytä | Tisch | Akkusativ Sg. (-n); Stufenwechsel t → d
rahaa | raha | Geld | Partitiv Sg. (unbestimmte Menge)
raiteelta | raide | Gleis | Ablativ (-lta: „von“); Stamm raitee- (d → t)
rakastuin | rakastua | sich verlieben | Imperfekt 1. Sg.; + Illativ
rautatieasemalle | rautatieasema | Bahnhof | Allativ (-lle: „zu“)
ruokaa | ruoka | Essen | Partitiv Sg.; laittaa ruokaa = kochen
saanko | saada | bekommen, dürfen | Präsens 1. Sg. + -ko: „darf ich / bekomme ich?“
saapuu | saapua | ankommen | Präsens 3. Sg.
saisi | saada | bekommen | Konditional 3. Sg.; Mitä saisi olla? = Was darf es sein?
saisinko | saada | bekommen | Konditional 1. Sg. + -ko: „könnte ich … bekommen?“
saksasta | Saksa | Deutschland | Elativ (-sta: „aus“)
sanoo | sanoa | sagen | Präsens 3. Sg.
saunaan | sauna | Sauna | Illativ (-an: „in … hinein“)
saunassa | sauna | Sauna | Inessiv (-ssa: „in“)
saunasta | sauna | Sauna | Elativ (-sta: „aus“)
se | se | es, das | Pronomen, Nominativ
seitsemäksi | seitsemän | sieben | Translativ (-ksi): „für (sieben Uhr)“
seitsemän | seitsemän | sieben | Grundzahl, Nominativ
seitsemänvuotias | seitsemänvuotias | siebenjährig | Adjektiv, Nominativ
sen | se | es | Akkusativ (-n)
senttiä | sentti | Cent | Partitiv Sg. (nach Zahl)
sinulla | sinä | du | Adessiv: „bei dir“ → sinulla on = du hast
sinulle | sinä | dir | Allativ (-lle: „dir“)
sinä | sinä | du | Personalpronomen 2. Sg.
sitten | sitten | dann | Adverb
sovittaa | sovittaa | anprobieren | Infinitiv
suomea | suomi | Finnisch | Partitiv Sg. (Objekt von opiskella)
suomeen | Suomi | Finnland | Illativ (-en: „nach“); Stamm Suome-
suomessa | Suomi | Finnland | Inessiv (-ssa: „in“); Stamm Suome-
suoraan | suoraan | geradeaus | Adverb
syntymäpäiväni | syntymäpäivä | Geburtstag | Nominativ + Possessivsuffix -ni („mein“)
särkee | särkeä | schmerzen | Präsens 3. Sg.
talo | talo | Haus | Nominativ Sg.
tammikuussa | tammikuu | Januar | Inessiv (-ssa): „im Januar“
tampereelle | Tampere | Tampere | Allativ (-lle): „nach Tampere“
tavata | tavata | treffen | Infinitiv (Verb Typ 4)
tavataan | tavata | treffen | Passiv Präsens: „treffen wir uns“
teen | tehdä | machen, tun | Präsens 1. Sg.; tehdä töitä = arbeiten
teetä | tee | Tee | Partitiv Sg.
teillä | te | ihr / Sie | Adessiv: „bei euch/Ihnen“
teitä | te | euch / Sie | Partitiv (Objekt)
tekee | tehdä | machen | Präsens 3. Sg.
tiistaista | tiistai | Dienstag | Elativ (-sta): „ab/von Dienstag“
tilata | tilata | bestellen | Infinitiv (Verb Typ 4)
toistaa | toistaa | wiederholen | Infinitiv
toukokuuta | toukokuu | Mai | Partitiv Sg. (im Datum)
tule | tulla | kommen | Imperativ 2. Sg.
tulee | tulla | kommen | Präsens 3. Sg.
tulen | tulla | kommen | Präsens 1. Sg.
tulin | tulla | kommen | Imperfekt 1. Sg.
turkuun | Turku | Turku | Illativ (-un: „nach“); starke Stufe rk
turussa | Turku | Turku | Inessiv (-ssa); Stufenwechsel rk → r
turusta | Turku | Turku | Elativ (-sta); Stufenwechsel rk → r
tutustua | tutustua | kennenlernen | Infinitiv
tykkään | tykätä | mögen | Präsens 1. Sg. (Verb Typ 4); + Elativ
tyttäreni | tytär | Tochter | Nominativ + Possessivsuffix -ni („meine“)
työpaikka | työpaikka | Arbeitsstelle | Nominativ Sg.
työstä | työ | Arbeit | Elativ (-stä): „über die Arbeit“
tämä | tämä | dies(es) | Demonstrativpronomen, Nominativ
tänään | tänään | heute | Adverb
tästä | tämä | diesem | Elativ von tämä
tätä | tämä | dies | Partitiv von tämä
täällä | täällä | hier | Adverb (wo?)
töihin | työ | Arbeit | Illativ Pl.: „zur Arbeit“
töissä | työ | Arbeit | Inessiv Pl.: „bei der Arbeit“
töitä | työ | Arbeit | Partitiv Pl.; tehdä töitä = arbeiten
usein | usein | oft | Adverb
uusi | uusi | neu | Adjektiv, Nominativ
vaille | vaille | vor (Uhrzeit), ohne | Postposition
vain | vain | nur | Adverb
vaivaa | vaivata | plagen, fehlen | Präsens 3. Sg.; Mikä teitä vaivaa? = Was fehlt Ihnen?
valoisia | valoisa | hell | Partitiv Pl.
vanha | vanha | alt | Adjektiv, Nominativ
varata | varata | reservieren | Infinitiv (Verb Typ 4)
varttia | vartti | Viertelstunde | Partitiv Sg.
vasemmalle | vasen | nach links | Allativ (-lle); Stamm vasemma-
vastaa | vastata | antworten | Präsens 3. Sg.
vein | viedä | (hin)bringen | Imperfekt 1. Sg.
vieressä | vieri | neben | Postposition (Inessiv): „neben (wo?)“
viestin | viesti | Nachricht | Akkusativ Sg. (-n: ganzes Objekt)
viikkoa | viikko | Woche | Partitiv Sg. (nach Zahl)
viikonloppuna | viikonloppu | Wochenende | Essiv (-na): „am Wochenende“
viikossa | viikko | Woche | Inessiv: „in der Woche“; Stufenwechsel kk → k
viime | viime | letzte(r), vorige(r) | unveränderliches Attribut
viisi | viisi | fünf | Grundzahl, Nominativ
viisikymmentä | viisikymmentä | fünfzig | Grundzahl
voinko | voida | können | Präsens 1. Sg. + -ko: „kann ich?“
voisitko | voida | können | Konditional 2. Sg. + -ko: „könntest du?“
voitko | voida | können | Präsens 2. Sg. + -ko: „kannst du?“
vuonna | vuosi | Jahr | Essiv: „im Jahr“
vuotta | vuosi | Jahr | Partitiv Sg. (nach Zahl); Stamm vuot-
vähän | vähän | ein bisschen | Adverb
väsynyt | väsynyt | müde | Adjektiv (Partizip), Nominativ
yhdeksän | yhdeksän | neun | Grundzahl, Nominativ
yhteensä | yhteensä | insgesamt, zusammen | Adverb
yksi | yksi | eins, ein(e) | Grundzahl, Nominativ
yksitoista | yksitoista | elf | Grundzahl
yli | yli | nach (Uhrzeit), über | Postposition
ymmärtänyt | ymmärtää | verstehen | Partizip Perfekt Aktiv (en ymmärtänyt = ich habe nicht verstanden)
ystäviä | ystävä | Freund | Partitiv Pl. (nach paljon)
`,
};
