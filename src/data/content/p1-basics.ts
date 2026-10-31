import type { ContentPack } from "../types";

export const pack: ContentPack = {
  name: "p1-basics",
  topics: [
    {
      id: "gruesse",
      kind: "phrases",
      title: "Begrüßen & Höflichkeit",
      titleFi: "Tervehdykset",
      order: 1,
      level: 1,
      icon: "👋",
      summary: "Grüßen, danken, sich entschuldigen, sich vorstellen und verabschieden.",
      explanation: `### Grüßen im Alltag
Finnen grüßen meist kurz: **Hei!** oder **Moi!** passt fast immer – auch gegenüber Fremden. **Terve!** ist locker, **Päivää!** eher förmlich. Zum Abschied sagt man **Moi moi!**, **Hei hei!** oder förmlicher **Näkemiin!** (am Telefon: *Kuulemiin!*).

### Tageszeit-Grüße stehen im Partitiv
Wünsche mit **hyvää** („gutes“) stehen im Partitiv – man „wünscht etwas von etwas Gutem“:

| Finnisch | Deutsch |
| Hyvää huomenta! | Guten Morgen! |
| Hyvää päivää! | Guten Tag! |
| Hyvää iltaa! | Guten Abend! |
| Hyvää yötä! | Gute Nacht! |
| Hyvää viikonloppua! | Schönes Wochenende! |
| Hyvää syntymäpäivää! | Alles Gute zum Geburtstag! |

### Danke, bitte, Entschuldigung
- **Kiitos** = danke, **Kiitos paljon** = vielen Dank. Wofür man dankt, steht im Elativ: *Kiitos avusta!* („Danke für die Hilfe“).
- Ein eigenes Wort für „bitte“ beim Bitten gibt es nicht – Höflichkeit entsteht durch Frageform (*Voitko …?*) oder durch ein angehängtes *kiitos*: *Kahvi, kiitos.*
- **Ole hyvä** (zu einer Person) / **Olkaa hyvä** (höflich oder mehrere) sagt man beim Überreichen („bitte schön“) und als Antwort auf *kiitos* („gern geschehen“).
- **Anteeksi** = Entschuldigung / Verzeihung; Antwort: **Ei se mitään** („macht nichts“).

### Wie geht's?
**Mitä kuuluu?** (wörtlich „Was ist zu hören?“) – Antwort im Partitiv: **Hyvää, kiitos. Entä sinulle?** Lockerer: **Miten menee?** – **Hyvin!**

### Sich vorstellen
- *Minun nimeni on Anna.* – Mein Name ist Anna.
- *Mikä sinun nimesi on?* – Wie heißt du?
- *Hauska tutustua!* – Freut mich!`,
    },
    {
      id: "olla-pronomen",
      kind: "grammar",
      title: "Sein & Personalpronomen",
      titleFi: "olla-verbi",
      order: 2,
      level: 1,
      icon: "🧍",
      summary: "minä olen … he ovat – das Verb „sein“, Personalpronomen und tämä/tuo/se.",
      explanation: `### Das Verb olla („sein“)
*olla* ist unregelmäßig, aber sehr kurz. Die Personalendungen (-n, -t, –, -mme, -tte, -vat) gelten für fast alle Verben.

| Person | Pronomen | olla | Deutsch |
| 1. Sg. | minä | olen | ich bin |
| 2. Sg. | sinä | olet | du bist |
| 3. Sg. | hän | on | er/sie ist |
| 1. Pl. | me | olemme | wir sind |
| 2. Pl. | te | olette | ihr seid / Sie sind |
| 3. Pl. | he | ovat | sie sind |

### Pronomen
- **hän** heißt sowohl „er“ als auch „sie“ – Finnisch kennt kein grammatisches Geschlecht.
- In der 1. und 2. Person wird das Pronomen oft weggelassen, weil die Endung die Person zeigt: *Olen väsynyt.* = Ich bin müde.
- **te** ist auch die höfliche Anrede („Sie“) für eine Person.
- Es gibt **keine Artikel**: *Hän on opettaja.* = Sie ist Lehrerin.

### tämä, tuo, se
| Wort | Bedeutung |
| tämä | dies(es) hier (nah beim Sprecher) |
| tuo | das dort (sichtbar, weiter weg) |
| se | das, es (bereits Bekanntes; umgangssprachlich auch „er/sie“) |

### Prädikativ: Nationalität, Beruf, Eigenschaft
Im Singular steht das Prädikativ im Nominativ: *Hän on suomalainen.* Im **Plural** steht es meist im **Partitiv Plural**: *Me olemme saksalaisia.* – *He ovat opiskelijoita.* Bei Stoffen ebenfalls Partitiv: *Kahvi on kuumaa.*

### Beispiele
- *Minä olen Pekka.* – Ich bin Pekka.
- *Tämä on kirja.* – Das ist ein Buch.
- *Me olemme Berliinistä.* – Wir sind aus Berlin.
- *Olemme naimisissa.* – Wir sind verheiratet.`,
    },
    {
      id: "verbtyp1",
      kind: "grammar",
      title: "Präsens: Verbtyp 1",
      titleFi: "verbityyppi 1",
      order: 3,
      level: 2,
      icon: "🗣️",
      summary: "Verben auf Vokal + a/ä (puhua, lukea, ymmärtää) im Präsens – mit Stufenwechsel.",
      explanation: `### Was ist Verbtyp 1?
Die Grundform endet auf **zwei Vokale**, der zweite ist -a/-ä: *puhua, asua, ostaa, lukea, ymmärtää, rakastaa, nukkua*. Man streicht das letzte -a/-ä und erhält den Präsensstamm; dann kommen die Personalendungen.

| Person | Endung | puhua | lukea | ymmärtää |
| minä | -n | puhun | luen | ymmärrän |
| sinä | -t | puhut | luet | ymmärrät |
| hän | (Vokal verlängert) | puhuu | lukee | ymmärtää |
| me | -mme | puhumme | luemme | ymmärrämme |
| te | -tte | puhutte | luette | ymmärrätte |
| he | -vat/-vät | puhuvat | lukevat | ymmärtävät |

### Stufenwechsel (Konsonantenwechsel)
Enthält der Stamm k, p oder t, gilt: **schwache Stufe** in *minä, sinä, me, te* (Endung schließt die Silbe), **starke Stufe** in *hän* und *he*.

| Wechsel | Grundform | minä | hän |
| kk → k | nukkua | nukun | nukkuu |
| pp → p | oppia | opin | oppii |
| tt → t | ottaa | otan | ottaa |
| k → – | lukea | luen | lukee |
| t → d | tietää | tiedän | tietää |
| rt → rr | ymmärtää | ymmärrän | ymmärtää |
| ht → hd | lähteä | lähden | lähtee |

### 3. Person Singular
Der letzte Vokal des Stammes wird verdoppelt: *puhu-u, asu-u, luke-e*. Endet der Stamm schon auf zwei gleiche Vokale (*ostaa, ymmärtää*), bleibt die Form gleich der Grundform: *Hän ostaa.*

### Vokalharmonie
Die 3. Person Plural heißt **-vat** oder **-vät**: *puhuvat*, aber *ymmärtävät*, *leikkivät*.

### Beispiele
- *Puhun suomea.* – Ich spreche Finnisch.
- *Hän lukee lehteä.* – Er liest Zeitung.
- *Ymmärrän vähän.* – Ich verstehe ein bisschen.
- *Lapset leikkivät pihalla.* – Die Kinder spielen im Hof.`,
    },
    {
      id: "verneinung",
      kind: "grammar",
      title: "Verneinung",
      titleFi: "kieltolause",
      order: 4,
      level: 2,
      icon: "🚫",
      summary: "en, et, ei … eivät + Verbstamm – das Verneinungsverb und der Partitiv nach Verneinung.",
      explanation: `### Das Verneinungsverb
Finnisch verneint mit einem eigenen **Verb**, das nach Person konjugiert wird. Das eigentliche Verb steht danach im **Verneinungsstamm** = Präsensstamm ohne Personalendung (bei Typ 1 in der schwachen Stufe).

| Person | Verneinung | puhua | olla | lukea |
| minä | en | en puhu | en ole | en lue |
| sinä | et | et puhu | et ole | et lue |
| hän | ei | ei puhu | ei ole | ei lue |
| me | emme | emme puhu | emme ole | emme lue |
| te | ette | ette puhu | ette ole | ette lue |
| he | eivät | eivät puhu | eivät ole | eivät lue |

Merke: Der Stamm ändert sich **nicht** nach der Person – nur das Verneinungsverb: *en tiedä, ei tiedä, eivät tiedä*. Bei Stufenwechsel steht immer die schwache Stufe: *nukkua → ei nuku*, *ymmärtää → ei ymmärrä*.

### „ei ole“ und „Ich habe nicht“
- *Tämä ei ole minun.* – Das ist nicht meins.
- „Haben“ wird mit *minulla on* ausgedrückt; verneint: **Minulla ei ole …**

### Partitiv nach Verneinung
In verneinten Sätzen steht das Objekt **immer im Partitiv** – auch wenn es im bejahten Satz im Akkusativ stünde:

| bejaht | verneint |
| Minulla on auto. | Minulla ei ole autoa. |
| Ostan takin. | En osta takkia. |
| Meillä on aikaa. | Meillä ei ole aikaa. |

Ebenso steht nach *ei ole* in Existenzsätzen („es gibt nicht“) der Partitiv: *Kaupassa ei ole maitoa.*

### Kleine Extras
- **Ei kiitos.** – Nein, danke.
- **eikä** = „und nicht / und auch nicht“: *ei maitoa eikä leipää* – weder Milch noch Brot.
- Verneinte Frage: *Etkö tule?* – Kommst du nicht?`,
    },
    {
      id: "fragen",
      kind: "grammar",
      title: "Fragen stellen",
      titleFi: "kysymykset",
      order: 5,
      level: 2,
      icon: "❓",
      summary: "Ja/Nein-Fragen mit -ko/-kö, Fragewörter und die Antwort durch Wiederholen des Verbs.",
      explanation: `### Ja/Nein-Fragen mit -ko/-kö
Man hängt **-ko** (nach Vokalharmonie **-kö**) an das erste Wort des Satzes – meist das Verb – und stellt es an den Anfang:

| Aussage | Frage |
| Puhut suomea. | Puhutko suomea? |
| Hän on kotona. | Onko hän kotona? |
| Ymmärrätte. | Ymmärrättekö? |
| Tiedät. | Tiedätkö? |

### Antworten: das Verb wiederholen
Ein einfaches „ja“ (*kyllä, joo*) gibt es, aber typisch finnisch ist, das **Verb in der passenden Person zu wiederholen**:
- *Puhutko suomea? – **Puhun.*** (Ja.)
- *Puhutko suomea? – **En puhu.*** (Nein.)
- *Onko tämä paikka vapaa? – **On.***

### Fragewörter
| Fragewort | Bedeutung |
| mikä / mitä | was (mitä = Partitiv) |
| kuka | wer |
| kenen | wessen |
| kenelle | wem / an wen |
| missä | wo |
| mistä | woher |
| mihin | wohin |
| milloin | wann |
| miksi | warum |
| miten / kuinka | wie |
| paljonko | wie viel |
| kauanko | wie lange |

Die drei „Wo“-Wörter folgen den Ortsfällen: **missä** (-ssa, wo?), **mistä** (-sta, woher?), **mihin** (-hin, wohin?). Die Antwort steht im gleichen Fall: *Missä asut? – Espoossa.*

Nach einem Fragewort kommt **kein** -ko: *Missä sinä asut?*

### vai oder tai?
In Fragen heißt „oder“ **vai**: *Kahvia vai teetä?* In Aussagen heißt es *tai*.

### Indirekte Frage
*Tiedätkö, missä asema on?* – Im Nebensatz behält das Fragewort seinen Platz, das Verb kommt ans Ende oder bleibt normal.`,
    },
  ],
  sentences: [
    // ───────────── gruesse ─────────────
    {
      id: "gru-001",
      topic: "gruesse",
      fi: "Hyvää huomenta!",
      de: "Guten Morgen!",
      level: 1,
      gap: { answer: "huomenta", options: ["päivää", "iltaa", "yötä"], why: "huomenta = Morgen. päivää = Tag, iltaa = Abend, yötä = Nacht." },
      note: "Tageszeit-Grüße stehen im Partitiv (hyvää huomenta), wörtlich etwa „(ich wünsche) guten Morgen“.",
    },
    {
      id: "gru-002",
      topic: "gruesse",
      fi: "Hyvää päivää!",
      de: "Guten Tag!",
      level: 1,
      gap: { answer: "päivää", options: ["huomenta", "yötä"], why: "päivää ist der Partitiv von päivä (Tag) – der förmliche Tagesgruß." },
    },
    {
      id: "gru-003",
      topic: "gruesse",
      fi: "Hei, mitä kuuluu?",
      de: "Hallo, wie geht's?",
      level: 1,
      gap: { answer: "kuuluu", options: ["kuulun", "kuulut"], why: "Feste Wendung mit 3. Person: Mitä kuuluu? – wörtlich „Was ist zu hören?“" },
      alt: ["Moi, mitä kuuluu?"],
    },
    {
      id: "gru-004",
      topic: "gruesse",
      fi: "Hyvää, kiitos. Entä sinulle?",
      de: "Gut, danke. Und dir?",
      level: 2,
      gap: { answer: "Hyvää", options: ["Hyvä", "Hyvin"], why: "Die Frage lautet mitä (Partitiv), deshalb steht die Antwort ebenfalls im Partitiv: hyvää." },
      note: "Sinulle (Allativ): Die volle Frage ist „Mitä sinulle kuuluu?“ – „Was ist für dich zu hören?“",
    },
    {
      id: "gru-005",
      topic: "gruesse",
      fi: "Kiitos paljon!",
      de: "Vielen Dank!",
      level: 1,
      gap: { answer: "paljon", options: ["hyvin", "hyvä"], why: "paljon = viel. Kiitos paljon ist die feste Wendung für „vielen Dank“." },
      alt: ["Paljon kiitoksia!"],
    },
    {
      id: "gru-006",
      topic: "gruesse",
      fi: "Ole hyvä!",
      de: "Bitte schön! / Gern geschehen!",
      level: 1,
      gap: { answer: "hyvä", options: ["hyvää", "hyvin"], why: "Feste Wendung: ole hyvä (wörtlich „sei gut“) mit dem Adjektiv im Nominativ." },
      note: "Man sagt es beim Überreichen und als Antwort auf „kiitos“. Für „bitte“ beim Bitten benutzt man es nicht.",
    },
    {
      id: "gru-007",
      topic: "gruesse",
      fi: "Olkaa hyvä, tässä on kahvinne.",
      de: "Bitte sehr, hier ist Ihr Kaffee.",
      level: 3,
      gap: { answer: "Olkaa", options: ["Ole", "Olen"], why: "Olkaa ist die Imperativform für mehrere Personen oder die höfliche Anrede (Sie)." },
      note: "kahvinne = „Ihr Kaffee“ (Possessivsuffix -nne für te).",
    },
    {
      id: "gru-008",
      topic: "gruesse",
      fi: "Anteeksi, missä on vessa?",
      de: "Entschuldigung, wo ist die Toilette?",
      level: 2,
      gap: { answer: "Anteeksi", options: ["Kiitos", "Näkemiin"], why: "Anteeksi = Entschuldigung; damit spricht man auch Fremde an." },
      alt: ["Anteeksi, missä vessa on?"],
    },
    {
      id: "gru-009",
      topic: "gruesse",
      fi: "Ei se mitään.",
      de: "Macht nichts. / Kein Problem.",
      level: 3,
      gap: { answer: "mitään", options: ["mikään", "mitä"], why: "In verneinten Sätzen steht „nichts“ im Partitiv: mitään." },
      note: "Typische Antwort auf „Anteeksi!“.",
    },
    {
      id: "gru-010",
      topic: "gruesse",
      fi: "Minun nimeni on Anna.",
      de: "Mein Name ist Anna.",
      level: 2,
      gap: { answer: "nimeni", options: ["nimi", "nimesi"], why: "„mein Name“ = minun nimeni: Genitiv minun + Possessivsuffix -ni." },
      alt: ["Nimeni on Anna."],
    },
    {
      id: "gru-011",
      topic: "gruesse",
      fi: "Mikä sinun nimesi on?",
      de: "Wie heißt du?",
      level: 2,
      gap: { answer: "nimesi", options: ["nimeni", "nimi"], why: "„dein Name“ = sinun nimesi: Possessivsuffix -si für sinä." },
      alt: ["Mikä on sinun nimesi?", "Mikä nimesi on?"],
      note: "Wörtlich: „Was ist dein Name?“",
    },
    {
      id: "gru-012",
      topic: "gruesse",
      fi: "Hauska tutustua!",
      de: "Freut mich, dich kennenzulernen!",
      level: 2,
      gap: { answer: "tutustua", options: ["tutustun", "tutustuu"], why: "Nach hauska („nett“) steht die Grundform (Infinitiv): hauska tutustua." },
      alt: ["Hauska tavata!"],
    },
    {
      id: "gru-013",
      topic: "gruesse",
      fi: "Näkemiin!",
      de: "Auf Wiedersehen!",
      level: 1,
      note: "Förmlicher Abschied. Am Telefon sagt man „Kuulemiin!“ – „Auf Wiederhören!“",
    },
    {
      id: "gru-014",
      topic: "gruesse",
      fi: "Moi moi, nähdään huomenna!",
      de: "Tschüss, bis morgen!",
      level: 2,
      gap: { answer: "huomenna", options: ["huomenta", "huominen"], why: "huomenna = morgen (Zeitangabe). huomenta ist der Gruß „(guten) Morgen“." },
      note: "nähdään = „man sieht sich“ – die Passivform wird umgangssprachlich wie „wir sehen uns“ benutzt.",
      alt: ["Hei hei, nähdään huomenna!"],
    },
    {
      id: "gru-015",
      topic: "gruesse",
      fi: "Tervetuloa Suomeen!",
      de: "Willkommen in Finnland!",
      level: 3,
      gap: { answer: "Suomeen", options: ["Suomessa", "Suomesta", "Suomi"], why: "Nach tervetuloa steht der Illativ (wohin?): Suomeen – „nach Finnland hinein“." },
      note: "Im Deutschen „in Finnland“, im Finnischen eine Richtung: willkommen nach Finnland.",
    },
    {
      id: "gru-016",
      topic: "gruesse",
      fi: "Anteeksi, en ymmärrä.",
      de: "Entschuldigung, ich verstehe nicht.",
      level: 3,
      gap: { answer: "ymmärrä", options: ["ymmärrän", "ymmärtää"], why: "Nach dem Verneinungsverb en steht der Stamm ohne Endung: en ymmärrä." },
    },
    {
      id: "gru-017",
      topic: "gruesse",
      fi: "Voitko puhua hitaammin?",
      de: "Kannst du langsamer sprechen?",
      level: 4,
      gap: { answer: "Voitko", options: ["Voinko", "Voiko"], why: "Du sprichst eine Person an: voit (du kannst) + Fragesuffix -ko = Voitko." },
      note: "Höfliche Bitten formuliert man auf Finnisch gern als Frage – ein eigenes Wort für „bitte“ gibt es nicht.",
    },
    {
      id: "gru-018",
      topic: "gruesse",
      fi: "Kiitos avusta!",
      de: "Danke für die Hilfe!",
      level: 4,
      gap: { answer: "avusta", options: ["apu", "apua", "avussa"], why: "Wofür man dankt, steht im Elativ (-sta): apu → avusta (Stufenwechsel p → v)." },
    },
    {
      id: "gru-019",
      topic: "gruesse",
      fi: "Hyvää viikonloppua!",
      de: "Schönes Wochenende!",
      level: 2,
      gap: { answer: "viikonloppua", options: ["viikonloppu", "viikonloppuna"], why: "Wünsche mit hyvää stehen im Partitiv: viikonloppua." },
    },
    {
      id: "gru-020",
      topic: "gruesse",
      fi: "Kiitos, samoin!",
      de: "Danke, gleichfalls!",
      level: 2,
      gap: { answer: "samoin", options: ["sama", "samaa"], why: "samoin ist ein Adverb = „ebenso, gleichfalls“." },
    },
    {
      id: "gru-021",
      topic: "gruesse",
      fi: "Hyvää yötä ja kauniita unia!",
      de: "Gute Nacht und schöne Träume!",
      level: 3,
      gap: { answer: "yötä", options: ["yö", "iltaa"], why: "Gute-Nacht-Wunsch im Partitiv: yö → yötä." },
      note: "kauniita unia ist Partitiv Plural – auch Wünsche im Plural stehen im Partitiv.",
    },
    {
      id: "gru-022",
      topic: "gruesse",
      fi: "Hyvää syntymäpäivää!",
      de: "Alles Gute zum Geburtstag!",
      level: 2,
      gap: { answer: "syntymäpäivää", options: ["syntymäpäivä", "syntymäpäivänä"], why: "Glückwünsche mit hyvää stehen im Partitiv: syntymäpäivää." },
    },
    {
      id: "gru-023",
      topic: "gruesse",
      fi: "Terveisiä Saksasta!",
      de: "Grüße aus Deutschland!",
      level: 3,
      gap: { answer: "Saksasta", options: ["Saksassa", "Saksaan", "Saksa"], why: "„aus“ = Elativ -sta: Saksasta." },
    },
    {
      id: "gru-024",
      topic: "gruesse",
      fi: "Kiva nähdä taas!",
      de: "Schön, dich wiederzusehen!",
      level: 4,
      gap: { answer: "nähdä", options: ["näen", "näkee"], why: "Nach kiva („schön, nett“) steht die Grundform: kiva nähdä." },
      alt: ["Mukava nähdä taas!"],
    },

    // ───────────── olla-pronomen ─────────────
    {
      id: "oll-001",
      topic: "olla-pronomen",
      fi: "Minä olen Pekka.",
      de: "Ich bin Pekka.",
      level: 1,
      gap: { answer: "olen", options: ["olet", "on"], why: "minä → olen (Endung -n für die 1. Person Singular)." },
    },
    {
      id: "oll-002",
      topic: "olla-pronomen",
      fi: "Sinä olet opettaja.",
      de: "Du bist Lehrer.",
      level: 1,
      gap: { answer: "olet", options: ["olen", "on"], why: "sinä → olet (Endung -t für die 2. Person Singular)." },
      note: "Finnisch hat keine Artikel und unterscheidet nicht zwischen Lehrer und Lehrerin.",
    },
    {
      id: "oll-003",
      topic: "olla-pronomen",
      fi: "Hän on suomalainen.",
      de: "Sie ist Finnin.",
      level: 1,
      gap: { answer: "on", options: ["ovat", "olen"], why: "hän → on (3. Person Singular)." },
      note: "hän heißt „er“ und „sie“ – der Satz kann also auch „Er ist Finne“ bedeuten.",
    },
    {
      id: "oll-004",
      topic: "olla-pronomen",
      fi: "Tämä on kirja.",
      de: "Das ist ein Buch.",
      level: 1,
      gap: { answer: "on", options: ["olen", "ovat"], why: "tämä ist 3. Person Singular → on." },
    },
    {
      id: "oll-005",
      topic: "olla-pronomen",
      fi: "Olen väsynyt.",
      de: "Ich bin müde.",
      level: 2,
      gap: { answer: "Olen", options: ["Olet", "On"], why: "Die Endung -n zeigt „ich“; das Pronomen minä kann wegfallen." },
    },
    {
      id: "oll-006",
      topic: "olla-pronomen",
      fi: "Sinä olet aina niin iloinen!",
      de: "Du bist immer so fröhlich!",
      level: 2,
      gap: { answer: "olet", options: ["olen", "olette"], why: "sinä → olet." },
    },
    {
      id: "oll-007",
      topic: "olla-pronomen",
      fi: "Tuo talo on vanha.",
      de: "Das Haus dort ist alt.",
      level: 2,
      gap: { answer: "Tuo", options: ["Tämä", "Se"], why: "tuo zeigt auf etwas Sichtbares, das weiter weg ist („das dort“)." },
    },
    {
      id: "oll-008",
      topic: "olla-pronomen",
      fi: "Se on hyvä idea.",
      de: "Das ist eine gute Idee.",
      level: 2,
      gap: { answer: "on", options: ["ovat", "olet"], why: "se (das, es) ist 3. Person Singular → on." },
    },
    {
      id: "oll-009",
      topic: "olla-pronomen",
      fi: "Sää on tänään kaunis.",
      de: "Das Wetter ist heute schön.",
      level: 2,
      gap: { answer: "on", options: ["ovat", "olen"], why: "sää (Wetter) ist Singular → on." },
      alt: ["Tänään sää on kaunis."],
    },
    {
      id: "oll-010",
      topic: "olla-pronomen",
      fi: "Me olemme saksalaisia.",
      de: "Wir sind Deutsche.",
      level: 3,
      gap: { answer: "olemme", options: ["olette", "ovat"], why: "me → olemme (Endung -mme)." },
      note: "Prädikativ im Plural steht im Partitiv Plural: saksalaisia (nicht „saksalaiset“).",
    },
    {
      id: "oll-011",
      topic: "olla-pronomen",
      fi: "Te olette todella ystävällisiä.",
      de: "Ihr seid wirklich nett.",
      level: 3,
      gap: { answer: "olette", options: ["olemme", "ovat"], why: "te → olette (Endung -tte)." },
      note: "te kann auch die höfliche Anrede „Sie“ sein. Adjektiv im Partitiv Plural: ystävällisiä.",
    },
    {
      id: "oll-012",
      topic: "olla-pronomen",
      fi: "He ovat opiskelijoita.",
      de: "Sie sind Studenten.",
      level: 3,
      gap: { answer: "ovat", options: ["on", "olette"], why: "he (sie, Plural) → ovat." },
      note: "opiskelijoita = Partitiv Plural von opiskelija – so steht der Beruf bei mehreren Personen.",
    },
    {
      id: "oll-013",
      topic: "olla-pronomen",
      fi: "Matti ja Liisa ovat ystäviä.",
      de: "Matti und Liisa sind Freunde.",
      level: 3,
      gap: { answer: "ovat", options: ["on", "olemme"], why: "Zwei Personen = 3. Person Plural → ovat." },
      note: "ystäviä = Partitiv Plural von ystävä.",
    },
    {
      id: "oll-014",
      topic: "olla-pronomen",
      fi: "Me olemme Berliinistä.",
      de: "Wir sind aus Berlin.",
      level: 3,
      gap: { answer: "Berliinistä", options: ["Berliinissä", "Berliiniin"], why: "„aus“ = Elativ -sta/-stä: Berliinistä." },
    },
    {
      id: "oll-015",
      topic: "olla-pronomen",
      fi: "Olemme naimisissa.",
      de: "Wir sind verheiratet.",
      level: 3,
      gap: { answer: "Olemme", options: ["Olette", "Ovat"], why: "„wir“ steckt in der Endung -mme." },
      note: "naimisissa ist ein Inessiv-Plural, wörtlich etwa „in der Ehe“.",
    },
    {
      id: "oll-016",
      topic: "olla-pronomen",
      fi: "Te olette myöhässä!",
      de: "Sie sind spät dran!",
      level: 3,
      gap: { answer: "olette", options: ["olemme", "ovat"], why: "te → olette; te ist hier die höfliche Anrede." },
      note: "myöhässä (Inessiv) = verspätet, zu spät.",
    },
    {
      id: "oll-017",
      topic: "olla-pronomen",
      fi: "Oletko kotona?",
      de: "Bist du zu Hause?",
      level: 3,
      gap: { answer: "Oletko", options: ["Olenko", "Onko"], why: "olet (du bist) + Fragesuffix -ko = Oletko." },
    },
    {
      id: "oll-018",
      topic: "olla-pronomen",
      fi: "Tämä ravintola on todella hyvä.",
      de: "Dieses Restaurant ist wirklich gut.",
      level: 3,
      gap: { answer: "Tämä", options: ["Tätä", "Tässä"], why: "Subjekt im Nominativ: tämä ravintola – „dieses Restaurant“." },
    },
    {
      id: "oll-019",
      topic: "olla-pronomen",
      fi: "Mikä tuo on? – Se on mustikkapiirakka.",
      de: "Was ist das dort? – Das ist ein Blaubeerkuchen.",
      level: 3,
      gap: { answer: "tuo", options: ["tuota", "tuossa"], why: "Subjekt im Nominativ: tuo = „das dort“." },
      note: "In der Antwort benutzt man se für das schon Erwähnte.",
    },
    {
      id: "oll-020",
      topic: "olla-pronomen",
      fi: "Minä olen lääkäri ja vaimoni on opettaja.",
      de: "Ich bin Arzt und meine Frau ist Lehrerin.",
      level: 3,
      gap: { answer: "on", options: ["olen", "ovat"], why: "vaimoni (meine Frau) ist 3. Person Singular → on." },
    },
    {
      id: "oll-021",
      topic: "olla-pronomen",
      fi: "Kahvi on kuumaa.",
      de: "Der Kaffee ist heiß.",
      level: 4,
      gap: { answer: "kuumaa", options: ["kuuma", "kuumia"], why: "Bei Stoffen (Kaffee, Wasser, Milch) steht das Adjektiv im Partitiv: kuumaa." },
      note: "Vergleiche: Kuppi on kuuma. – Die Tasse ist heiß (zählbar → Nominativ).",
    },
    {
      id: "oll-022",
      topic: "olla-pronomen",
      fi: "Hän on insinööri, ja hänen miehensä on muusikko.",
      de: "Sie ist Ingenieurin, und ihr Mann ist Musiker.",
      level: 4,
      gap: { answer: "hänen", options: ["hän", "häntä"], why: "„ihr/sein“ = Genitiv hänen; dazu das Possessivsuffix -nsä: hänen miehensä." },
    },
    {
      id: "oll-023",
      topic: "olla-pronomen",
      fi: "Olen kotoisin Itävallasta, mutta asun nyt Suomessa.",
      de: "Ich komme aus Österreich, aber ich wohne jetzt in Finnland.",
      level: 4,
      gap: { answer: "Olen", options: ["On", "Olet"], why: "„ich“ → olen; olla kotoisin + Elativ = „stammen aus“." },
      note: "Itävalta → Itävallasta: Stufenwechsel lt → ll.",
    },

    // ───────────── verbtyp1 ─────────────
    {
      id: "vt1-001",
      topic: "verbtyp1",
      fi: "Minä puhun suomea.",
      de: "Ich spreche Finnisch.",
      level: 2,
      gap: { answer: "puhun", options: ["puhut", "puhuu"], why: "minä → Stamm puhu- + -n = puhun." },
      note: "Sprachen stehen nach puhua im Partitiv: suomea, saksaa.",
    },
    {
      id: "vt1-002",
      topic: "verbtyp1",
      fi: "Sinä puhut hyvin saksaa.",
      de: "Du sprichst gut Deutsch.",
      level: 2,
      gap: { answer: "puhut", options: ["puhun", "puhuu"], why: "sinä → puhu- + -t = puhut." },
      alt: ["Sinä puhut saksaa hyvin."],
    },
    {
      id: "vt1-003",
      topic: "verbtyp1",
      fi: "Hän asuu Tampereella.",
      de: "Er wohnt in Tampere.",
      level: 2,
      gap: { answer: "asuu", options: ["asun", "asuvat"], why: "3. Person Singular: letzter Stammvokal wird verdoppelt: asu- → asuu." },
      note: "Bei manchen Städten steht „in“ als Adessiv (-lla): Tampereella.",
    },
    {
      id: "vt1-004",
      topic: "verbtyp1",
      fi: "Hän lukee lehteä.",
      de: "Er liest Zeitung.",
      level: 2,
      gap: { answer: "lukee", options: ["luen", "luet"], why: "hän → starke Stufe (k bleibt) + Vokalverdopplung: lukee." },
    },
    {
      id: "vt1-005",
      topic: "verbtyp1",
      fi: "Me luemme paljon.",
      de: "Wir lesen viel.",
      level: 2,
      gap: { answer: "luemme", options: ["lukevat", "luette"], why: "me → schwache Stufe (k fällt weg) + -mme: luemme." },
    },
    {
      id: "vt1-006",
      topic: "verbtyp1",
      fi: "Minä rakastan sinua.",
      de: "Ich liebe dich.",
      level: 2,
      gap: { answer: "rakastan", options: ["rakastaa", "rakastat"], why: "minä → rakasta- + -n = rakastan." },
      note: "rakastaa verlangt immer den Partitiv: sinua.",
    },
    {
      id: "vt1-007",
      topic: "verbtyp1",
      fi: "Vauva nukkuu nyt.",
      de: "Das Baby schläft jetzt.",
      level: 2,
      gap: { answer: "nukkuu", options: ["nukun", "nukkuvat"], why: "3. Person Singular → starke Stufe kk: nukkuu." },
    },
    {
      id: "vt1-008",
      topic: "verbtyp1",
      fi: "Me asumme kerrostalossa.",
      de: "Wir wohnen in einem Mehrfamilienhaus.",
      level: 3,
      gap: { answer: "asumme", options: ["asutte", "asuvat"], why: "me → asu- + -mme = asumme." },
    },
    {
      id: "vt1-009",
      topic: "verbtyp1",
      fi: "Luen kirjaa joka ilta.",
      de: "Ich lese jeden Abend in einem Buch.",
      level: 3,
      gap: { answer: "Luen", options: ["Luet", "Lukee"], why: "minä → schwache Stufe: lukea → luen (k fällt weg)." },
      note: "kirjaa (Partitiv): Das Lesen ist ein andauernder, unabgeschlossener Vorgang.",
    },
    {
      id: "vt1-010",
      topic: "verbtyp1",
      fi: "Ymmärrän vähän suomea.",
      de: "Ich verstehe ein bisschen Finnisch.",
      level: 3,
      gap: { answer: "Ymmärrän", options: ["Ymmärtää", "Ymmärrät"], why: "minä → schwache Stufe rt → rr: ymmärrän." },
    },
    {
      id: "vt1-011",
      topic: "verbtyp1",
      fi: "Hän ymmärtää kaiken.",
      de: "Er versteht alles.",
      level: 3,
      gap: { answer: "ymmärtää", options: ["ymmärrän", "ymmärrät"], why: "hän → starke Stufe rt; da der Stamm schon auf ää endet, bleibt ymmärtää." },
    },
    {
      id: "vt1-012",
      topic: "verbtyp1",
      fi: "Te ostatte liikaa vaatteita.",
      de: "Ihr kauft zu viele Klamotten.",
      level: 3,
      gap: { answer: "ostatte", options: ["ostamme", "ostavat"], why: "te → osta- + -tte = ostatte." },
      note: "Nach liikaa („zu viel“) steht der Partitiv: vaatteita.",
    },
    {
      id: "vt1-013",
      topic: "verbtyp1",
      fi: "Rakastamme saunaa.",
      de: "Wir lieben die Sauna.",
      level: 3,
      gap: { answer: "Rakastamme", options: ["Rakastavat", "Rakastatte"], why: "„wir“ → -mme: rakastamme." },
    },
    {
      id: "vt1-014",
      topic: "verbtyp1",
      fi: "Tiedän sen.",
      de: "Ich weiß es.",
      level: 3,
      gap: { answer: "Tiedän", options: ["Tietää", "Tiedät"], why: "minä → schwache Stufe t → d: tietää → tiedän." },
    },
    {
      id: "vt1-015",
      topic: "verbtyp1",
      fi: "Otan kahvin, kiitos.",
      de: "Ich nehme einen Kaffee, bitte.",
      level: 3,
      gap: { answer: "Otan", options: ["Ottaa", "Otat"], why: "minä → schwache Stufe tt → t: ottaa → otan." },
      note: "kahvin (Akkusativ = Genitivform): eine ganze, bestimmte Tasse Kaffee.",
    },
    {
      id: "vt1-016",
      topic: "verbtyp1",
      fi: "Kirjoitan sähköpostia.",
      de: "Ich schreibe gerade eine E-Mail.",
      level: 3,
      gap: { answer: "Kirjoitan", options: ["Kirjoittaa", "Kirjoitat"], why: "minä → schwache Stufe tt → t: kirjoitan." },
      note: "Partitiv sähköpostia: Die Handlung ist noch im Gange.",
    },
    {
      id: "vt1-017",
      topic: "verbtyp1",
      fi: "Odotan bussia.",
      de: "Ich warte auf den Bus.",
      level: 3,
      gap: { answer: "Odotan", options: ["Odottaa", "Odotat"], why: "minä → schwache Stufe tt → t: odottaa → odotan." },
      note: "odottaa + Partitiv – im Deutschen „warten auf“.",
    },
    {
      id: "vt1-018",
      topic: "verbtyp1",
      fi: "Kysyn opettajalta.",
      de: "Ich frage die Lehrerin.",
      level: 3,
      gap: { answer: "Kysyn", options: ["Kysyy", "Kysyt"], why: "minä → kysy- + -n = kysyn." },
      note: "Wen man fragt, steht im Ablativ (-lta): opettajalta – wörtlich „vom Lehrer“.",
    },
    {
      id: "vt1-019",
      topic: "verbtyp1",
      fi: "Lapset leikkivät pihalla.",
      de: "Die Kinder spielen im Hof.",
      level: 3,
      gap: { answer: "leikkivät", options: ["leikkii", "leikimme"], why: "he (lapset) → starke Stufe kk + -vät (Vokalharmonie): leikkivät." },
    },
    {
      id: "vt1-020",
      topic: "verbtyp1",
      fi: "Opin joka päivä uusia sanoja.",
      de: "Ich lerne jeden Tag neue Wörter.",
      level: 4,
      gap: { answer: "Opin", options: ["Oppii", "Opit"], why: "minä → schwache Stufe pp → p: oppia → opin." },
    },
    {
      id: "vt1-021",
      topic: "verbtyp1",
      fi: "Soitan sinulle huomenna.",
      de: "Ich rufe dich morgen an.",
      level: 4,
      gap: { answer: "Soitan", options: ["Soittaa", "Soitat"], why: "minä → schwache Stufe tt → t: soittaa → soitan." },
      note: "soittaa + Allativ (-lle): sinulle – wörtlich „ich rufe zu dir“.",
    },
    {
      id: "vt1-022",
      topic: "verbtyp1",
      fi: "Autan sinua mielelläni.",
      de: "Ich helfe dir gern.",
      level: 4,
      gap: { answer: "Autan", options: ["Auttaa", "Autat"], why: "minä → schwache Stufe tt → t: auttaa → autan." },
      note: "auttaa + Partitiv der Person: sinua (deutsch Dativ „dir“).",
    },
    {
      id: "vt1-023",
      topic: "verbtyp1",
      fi: "Lähden töihin kahdeksalta.",
      de: "Ich gehe um acht zur Arbeit.",
      level: 4,
      gap: { answer: "Lähden", options: ["Lähtee", "Lähdet"], why: "minä → schwache Stufe ht → hd: lähteä → lähden." },
    },
    {
      id: "vt1-024",
      topic: "verbtyp1",
      fi: "Lapset ymmärtävät jo englantia.",
      de: "Die Kinder verstehen schon Englisch.",
      level: 4,
      gap: { answer: "ymmärtävät", options: ["ymmärtää", "ymmärrämme"], why: "he → starke Stufe rt + -vät: ymmärtävät." },
    },
    {
      id: "vt1-025",
      topic: "verbtyp1",
      fi: "He ostavat uuden auton.",
      de: "Sie kaufen ein neues Auto.",
      level: 4,
      gap: { answer: "ostavat", options: ["ostaa", "ostatte"], why: "he → osta- + -vat = ostavat." },
      note: "uuden auton = Akkusativ: ein ganzes Auto wird gekauft (abgeschlossene Handlung).",
    },
    {
      id: "vt1-026",
      topic: "verbtyp1",
      fi: "Puhumme kotona saksaa, mutta lapset puhuvat keskenään suomea.",
      de: "Zu Hause sprechen wir Deutsch, aber die Kinder sprechen untereinander Finnisch.",
      level: 5,
      gap: { answer: "puhuvat", options: ["puhuu", "puhumme"], why: "lapset (Plural) → puhuvat." },
    },
    {
      id: "vt1-027",
      topic: "verbtyp1",
      fi: "Kun luen suomalaista lehteä, ymmärrän jo melkein kaiken.",
      de: "Wenn ich eine finnische Zeitung lese, verstehe ich schon fast alles.",
      level: 5,
      gap: { answer: "ymmärrän", options: ["ymmärtää", "ymmärrät"], why: "minä → schwache Stufe rr: ymmärrän." },
      note: "Beide Verben zeigen den Stufenwechsel in der 1. Person: lukea → luen, ymmärtää → ymmärrän.",
    },

    // ───────────── verneinung ─────────────
    {
      id: "neg-001",
      topic: "verneinung",
      fi: "En puhu ruotsia.",
      de: "Ich spreche kein Schwedisch.",
      level: 2,
      gap: { answer: "En", options: ["Et", "Ei"], why: "„ich“ → Verneinungsverb en." },
    },
    {
      id: "neg-002",
      topic: "verneinung",
      fi: "En tiedä.",
      de: "Ich weiß nicht.",
      level: 2,
      gap: { answer: "tiedä", options: ["tiedän", "tietää"], why: "Nach en steht der Verneinungsstamm ohne Endung, schwache Stufe: tiedä." },
    },
    {
      id: "neg-003",
      topic: "verneinung",
      fi: "En ole väsynyt.",
      de: "Ich bin nicht müde.",
      level: 2,
      gap: { answer: "ole", options: ["olen", "on"], why: "Die Person steckt im Verneinungsverb (en); olla erscheint als ole." },
    },
    {
      id: "neg-004",
      topic: "verneinung",
      fi: "Et ole yksin.",
      de: "Du bist nicht allein.",
      level: 2,
      gap: { answer: "Et", options: ["En", "Ei"], why: "„du“ → Verneinungsverb et." },
    },
    {
      id: "neg-005",
      topic: "verneinung",
      fi: "Hän ei asu täällä.",
      de: "Er wohnt nicht hier.",
      level: 2,
      gap: { answer: "ei", options: ["en", "eivät"], why: "hän → ei." },
    },
    {
      id: "neg-006",
      topic: "verneinung",
      fi: "Te ette ole myöhässä.",
      de: "Ihr seid nicht zu spät.",
      level: 2,
      gap: { answer: "ette", options: ["emme", "eivät"], why: "te → ette." },
    },
    {
      id: "neg-007",
      topic: "verneinung",
      fi: "Ei kiitos.",
      de: "Nein, danke.",
      level: 2,
      note: "ei allein kann auch einfach „nein“ bedeuten.",
    },
    {
      id: "neg-008",
      topic: "verneinung",
      fi: "Emme tiedä vielä.",
      de: "Wir wissen es noch nicht.",
      level: 3,
      gap: { answer: "tiedä", options: ["tiedämme", "tietää"], why: "Der Verneinungsstamm ist für alle Personen gleich: emme tiedä." },
    },
    {
      id: "neg-009",
      topic: "verneinung",
      fi: "Ette ymmärrä minua.",
      de: "Ihr versteht mich nicht.",
      level: 3,
      gap: { answer: "ymmärrä", options: ["ymmärrätte", "ymmärtää"], why: "Nach ette folgt nur der Stamm (schwache Stufe rr): ymmärrä." },
    },
    {
      id: "neg-010",
      topic: "verneinung",
      fi: "He eivät tule tänään.",
      de: "Sie kommen heute nicht.",
      level: 3,
      gap: { answer: "eivät", options: ["ei", "emme"], why: "he (Plural) → eivät." },
    },
    {
      id: "neg-011",
      topic: "verneinung",
      fi: "Tämä ei ole minun laukkuni.",
      de: "Das ist nicht meine Tasche.",
      level: 3,
      gap: { answer: "ole", options: ["on", "olen"], why: "Nach ei steht immer ole – nie „ei on“." },
    },
    {
      id: "neg-012",
      topic: "verneinung",
      fi: "Emme asu enää Helsingissä.",
      de: "Wir wohnen nicht mehr in Helsinki.",
      level: 3,
      gap: { answer: "Emme", options: ["Ette", "Eivät"], why: "„wir“ → emme." },
      note: "ei … enää = nicht mehr.",
    },
    {
      id: "neg-013",
      topic: "verneinung",
      fi: "Ei se haittaa.",
      de: "Das macht nichts.",
      level: 3,
      gap: { answer: "Ei", options: ["En", "Eivät"], why: "Subjekt se (3. Person Singular) → ei." },
    },
    {
      id: "neg-014",
      topic: "verneinung",
      fi: "Lapset eivät nuku vielä.",
      de: "Die Kinder schlafen noch nicht.",
      level: 4,
      gap: { answer: "nuku", options: ["nukkuvat", "nukkuu"], why: "Verneinungsstamm in der schwachen Stufe: nukkua → nuku." },
      note: "ei … vielä = noch nicht.",
    },
    {
      id: "neg-015",
      topic: "verneinung",
      fi: "Minulla ei ole autoa.",
      de: "Ich habe kein Auto.",
      level: 4,
      gap: { answer: "autoa", options: ["auto", "auton"], why: "Nach verneintem „haben“ (ei ole) steht der Partitiv: autoa." },
      note: "Vergleiche: Minulla on auto. – Ich habe ein Auto.",
    },
    {
      id: "neg-016",
      topic: "verneinung",
      fi: "Meillä ei ole aikaa.",
      de: "Wir haben keine Zeit.",
      level: 4,
      gap: { answer: "aikaa", options: ["aika", "ajan"], why: "Verneinung → Partitiv: aika → aikaa." },
    },
    {
      id: "neg-017",
      topic: "verneinung",
      fi: "Hän ei juo kahvia.",
      de: "Er trinkt keinen Kaffee.",
      level: 4,
      gap: { answer: "kahvia", options: ["kahvi", "kahvin"], why: "Objekt eines verneinten Verbs steht immer im Partitiv: kahvia." },
    },
    {
      id: "neg-018",
      topic: "verneinung",
      fi: "En osta tätä takkia.",
      de: "Ich kaufe diese Jacke nicht.",
      level: 5,
      gap: { answer: "takkia", options: ["takki", "takin"], why: "Bejaht hieße es „ostan tämän takin“; verneint wird das Objekt zum Partitiv: tätä takkia." },
    },
    {
      id: "neg-019",
      topic: "verneinung",
      fi: "Etkö tule mukaan?",
      de: "Kommst du nicht mit?",
      level: 5,
      gap: { answer: "Etkö", options: ["Enkö", "Eikö"], why: "Verneinte Frage an „du“: et + -kö = etkö." },
    },
    {
      id: "neg-020",
      topic: "verneinung",
      fi: "Täällä ei ole ketään.",
      de: "Hier ist niemand.",
      level: 5,
      gap: { answer: "ketään", options: ["kukaan", "ketä"], why: "In verneinten Existenzsätzen steht „niemand“ im Partitiv: ketään." },
    },
    {
      id: "neg-021",
      topic: "verneinung",
      fi: "En ymmärrä, miksi hän ei vastaa.",
      de: "Ich verstehe nicht, warum er nicht antwortet.",
      level: 5,
      gap: { answer: "ei", options: ["en", "eivät"], why: "Im Nebensatz ist hän das Subjekt → ei." },
    },
    {
      id: "neg-022",
      topic: "verneinung",
      fi: "Kaupassa ei ole maitoa eikä leipää.",
      de: "Im Laden gibt es weder Milch noch Brot.",
      level: 6,
      gap: { answer: "maitoa", options: ["maito", "maidon"], why: "„Es gibt nicht“ (ei ole) verlangt den Partitiv: maitoa." },
      note: "eikä = ja + ei: „und auch nicht“.",
    },
    {
      id: "neg-023",
      topic: "verneinung",
      fi: "Minulla ei ole veljiä eikä siskoja.",
      de: "Ich habe weder Brüder noch Schwestern.",
      level: 6,
      gap: { answer: "veljiä", options: ["veli", "veljet"], why: "Nach verneintem „haben“ steht der Partitiv Plural: veljiä." },
    },

    // ───────────── fragen ─────────────
    {
      id: "kys-001",
      topic: "fragen",
      fi: "Puhutko suomea? – Puhun.",
      de: "Sprichst du Finnisch? – Ja.",
      level: 2,
      gap: { answer: "Puhutko", options: ["Puhunko", "Puhuuko"], why: "Frage an „du“: puhut + -ko = puhutko." },
      note: "Statt „ja“ wiederholt man das Verb in der passenden Person: Puhun.",
    },
    {
      id: "kys-002",
      topic: "fragen",
      fi: "Onko tämä paikka vapaa? – On.",
      de: "Ist dieser Platz frei? – Ja.",
      level: 2,
      gap: { answer: "Onko", options: ["Olenko", "Oletko"], why: "tämä paikka ist 3. Person → on + -ko = onko." },
    },
    {
      id: "kys-003",
      topic: "fragen",
      fi: "Mikä tämä on?",
      de: "Was ist das?",
      level: 2,
      gap: { answer: "Mikä", options: ["Kuka", "Missä"], why: "mikä = was (für Dinge)." },
    },
    {
      id: "kys-004",
      topic: "fragen",
      fi: "Kuka hän on?",
      de: "Wer ist sie?",
      level: 2,
      gap: { answer: "Kuka", options: ["Mikä", "Kenen"], why: "kuka = wer (für Personen)." },
    },
    {
      id: "kys-005",
      topic: "fragen",
      fi: "Missä asut? – Asun Espoossa.",
      de: "Wo wohnst du? – In Espoo.",
      level: 2,
      gap: { answer: "Missä", options: ["Mistä", "Mihin"], why: "„wo?“ = missä (Inessiv); die Antwort steht ebenfalls im Inessiv: Espoossa." },
    },
    {
      id: "kys-006",
      topic: "fragen",
      fi: "Miten menee?",
      de: "Wie läuft's?",
      level: 2,
      gap: { answer: "Miten", options: ["Mikä", "Missä"], why: "miten = wie." },
      alt: ["Kuinka menee?"],
    },
    {
      id: "kys-007",
      topic: "fragen",
      fi: "Mistä olet kotoisin?",
      de: "Woher kommst du?",
      level: 3,
      gap: { answer: "Mistä", options: ["Missä", "Mihin"], why: "„woher?“ = mistä (Elativ)." },
    },
    {
      id: "kys-008",
      topic: "fragen",
      fi: "Mihin menet?",
      de: "Wohin gehst du?",
      level: 3,
      gap: { answer: "Mihin", options: ["Missä", "Mistä"], why: "„wohin?“ = mihin (Illativ)." },
    },
    {
      id: "kys-009",
      topic: "fragen",
      fi: "Milloin juna lähtee?",
      de: "Wann fährt der Zug ab?",
      level: 3,
      gap: { answer: "Milloin", options: ["Miksi", "Kuka"], why: "milloin = wann." },
    },
    {
      id: "kys-010",
      topic: "fragen",
      fi: "Miksi olet surullinen?",
      de: "Warum bist du traurig?",
      level: 3,
      gap: { answer: "Miksi", options: ["Milloin", "Mikä"], why: "miksi = warum." },
    },
    {
      id: "kys-011",
      topic: "fragen",
      fi: "Kuinka vanha olet?",
      de: "Wie alt bist du?",
      level: 3,
      gap: { answer: "Kuinka", options: ["Mikä", "Miksi"], why: "kuinka + Adjektiv = wie (alt, groß …)." },
    },
    {
      id: "kys-012",
      topic: "fragen",
      fi: "Paljonko tämä maksaa?",
      de: "Wie viel kostet das?",
      level: 3,
      gap: { answer: "Paljonko", options: ["Mikä", "Milloin"], why: "paljonko = wie viel (paljon + -ko)." },
      alt: ["Kuinka paljon tämä maksaa?", "Mitä tämä maksaa?"],
    },
    {
      id: "kys-013",
      topic: "fragen",
      fi: "Paljonko kello on?",
      de: "Wie spät ist es?",
      level: 3,
      note: "Wörtlich „Wie viel ist die Uhr?“.",
      alt: ["Mitä kello on?"],
    },
    {
      id: "kys-014",
      topic: "fragen",
      fi: "Asutko yksin? – En asu.",
      de: "Wohnst du allein? – Nein.",
      level: 3,
      gap: { answer: "Asutko", options: ["Asunko", "Asuuko"], why: "Frage an „du“: asut + -ko = asutko." },
      note: "Verneinte Antwort: Verneinungsverb + Verb: En asu. (Kurz auch nur: En.)",
    },
    {
      id: "kys-015",
      topic: "fragen",
      fi: "Tuleeko hän huomenna? – Tulee.",
      de: "Kommt er morgen? – Ja.",
      level: 3,
      gap: { answer: "Tuleeko", options: ["Tulenko", "Tuletko"], why: "hän → tulee + -ko = tuleeko." },
    },
    {
      id: "kys-016",
      topic: "fragen",
      fi: "Voitko auttaa minua?",
      de: "Kannst du mir helfen?",
      level: 3,
      gap: { answer: "Voitko", options: ["Voinko", "Voiko"], why: "Frage an „du“: voit + -ko = voitko." },
      note: "auttaa + Partitiv: minua (deutsch Dativ „mir“).",
    },
    {
      id: "kys-017",
      topic: "fragen",
      fi: "Mitä sinä teet?",
      de: "Was machst du?",
      level: 3,
      gap: { answer: "Mitä", options: ["Mikä", "Mistä"], why: "Als Objekt von tehdä steht „was“ im Partitiv: mitä." },
    },
    {
      id: "kys-018",
      topic: "fragen",
      fi: "Kenen laukku tämä on?",
      de: "Wessen Tasche ist das?",
      level: 4,
      gap: { answer: "Kenen", options: ["Kuka", "Ketä"], why: "„wessen“ = Genitiv von kuka: kenen." },
    },
    {
      id: "kys-019",
      topic: "fragen",
      fi: "Ymmärrättekö englantia? – Ymmärrämme.",
      de: "Versteht ihr Englisch? – Ja.",
      level: 4,
      gap: { answer: "Ymmärrättekö", options: ["Ymmärrämmekö", "Ymmärtävätkö"], why: "Frage an „ihr“: ymmärrätte + -kö (Vokalharmonie) = ymmärrättekö." },
    },
    {
      id: "kys-020",
      topic: "fragen",
      fi: "Onko sinulla lapsia?",
      de: "Hast du Kinder?",
      level: 4,
      gap: { answer: "Onko", options: ["Oletko", "Olenko"], why: "„haben“ = sinulla on – in der Frage: onko sinulla." },
      note: "In der Frage nach unbestimmter Menge steht der Partitiv Plural: lapsia.",
    },
    {
      id: "kys-021",
      topic: "fragen",
      fi: "Saanko kysyä jotain?",
      de: "Darf ich etwas fragen?",
      level: 4,
      gap: { answer: "Saanko", options: ["Saatko", "Saako"], why: "„darf ich“ = saan + -ko = saanko." },
    },
    {
      id: "kys-022",
      topic: "fragen",
      fi: "Juotko kahvia vai teetä? – Teetä, kiitos.",
      de: "Trinkst du Kaffee oder Tee? – Tee, bitte.",
      level: 4,
      gap: { answer: "vai", options: ["tai", "ja"], why: "In Fragen heißt „oder“ vai; tai benutzt man in Aussagen." },
    },
    {
      id: "kys-023",
      topic: "fragen",
      fi: "Miksi et tule mukaan?",
      de: "Warum kommst du nicht mit?",
      level: 5,
      gap: { answer: "Miksi", options: ["Milloin", "Mistä"], why: "miksi = warum; nach einem Fragewort kein -ko." },
    },
    {
      id: "kys-024",
      topic: "fragen",
      fi: "Kenelle soitat?",
      de: "Wen rufst du an?",
      level: 5,
      gap: { answer: "Kenelle", options: ["Kenen", "Kuka"], why: "soittaa verlangt den Allativ (-lle): kuka → kenelle." },
      note: "Im Deutschen Akkusativ „wen“, im Finnischen „zu wem“.",
    },
    {
      id: "kys-025",
      topic: "fragen",
      fi: "Mihin aikaan kauppa aukeaa?",
      de: "Um wie viel Uhr macht der Laden auf?",
      level: 5,
      gap: { answer: "Mihin", options: ["Missä", "Mistä"], why: "Feste Wendung: mihin aikaan = um welche Zeit." },
    },
    {
      id: "kys-026",
      topic: "fragen",
      fi: "Tiedätkö, missä asema on?",
      de: "Weißt du, wo der Bahnhof ist?",
      level: 5,
      gap: { answer: "Tiedätkö", options: ["Tiedänkö", "Tietääkö"], why: "Frage an „du“: tiedät + -kö = tiedätkö (Vokalharmonie)." },
      note: "Im Nebensatz (missä asema on) steht kein -ko.",
    },
    {
      id: "kys-027",
      topic: "fragen",
      fi: "Kauanko olet asunut Suomessa?",
      de: "Wie lange wohnst du schon in Finnland?",
      level: 6,
      gap: { answer: "Kauanko", options: ["Milloin", "Mihin"], why: "kauanko = wie lange." },
      note: "Finnisch benutzt hier das Perfekt (olet asunut), Deutsch das Präsens mit „schon“.",
    },
  ],
  lexicon: `
aikaa | aika | Zeit | Partitiv Sg. (-a); nach Verneinung steht das Objekt im Partitiv
aikaan | aika | Zeit | Illativ Sg. (-an: „in … hinein“); mihin aikaan = um welche Zeit
aina | aina | immer | Adverb
Anna | Anna | Anna | Vorname (Nominativ)
anteeksi | anteeksi | Entschuldigung, Verzeihung | feste Höflichkeitsformel
asema | asema | Bahnhof, Station | Nominativ Sg.
asu | asua | wohnen | Verneinungsstamm (en asu = ich wohne nicht)
asumme | asua | wohnen | Verb Typ 1, Präsens 1. Pl. (me)
asun | asua | wohnen | Verb Typ 1, Präsens 1. Sg. (minä)
asunut | asua | wohnen | Partizip Perfekt Aktiv (olet asunut = du hast gewohnt)
asut | asua | wohnen | Verb Typ 1, Präsens 2. Sg. (sinä)
asutko | asua | wohnen | Präsens 2. Sg. + Fragesuffix -ko (wohnst du?)
asuu | asua | wohnen | Verb Typ 1, Präsens 3. Sg. (hän); Vokal verdoppelt
aukeaa | aueta | sich öffnen, aufgehen | Verb Typ 4, Präsens 3. Sg.
autan | auttaa | helfen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
autoa | auto | Auto | Partitiv Sg. (-a); nach Verneinung
auton | auto | Auto | Akkusativ/Genitiv Sg. (-n): ganzes Objekt
auttaa | auttaa | helfen | Grundform (Infinitiv), Verb Typ 1; + Partitiv der Person
avusta | apu | Hilfe | Elativ Sg. (-sta: „aus, von“); Stufenwechsel p → v; kiitos + Elativ = danke für
Berliinistä | Berliini | Berlin | Elativ (-stä: „aus“)
bussia | bussi | Bus | Partitiv Sg.; odottaa + Partitiv
ei | ei (Verneinungsverb) | nicht; nein | Verneinungsverb, 3. Sg. (hän/se ei …); allein auch „nein“
eikä | ei + ja | und nicht, und auch nicht | Verneinungsverb 3. Sg. + -kä („und“); … eikä … = weder … noch
eivät | ei (Verneinungsverb) | nicht | Verneinungsverb, 3. Pl. (he eivät …)
emme | ei (Verneinungsverb) | nicht | Verneinungsverb, 1. Pl. (me emme …)
en | ei (Verneinungsverb) | nicht | Verneinungsverb, 1. Sg. (minä en …)
englantia | englanti | Englisch | Partitiv Sg. (Sprachen nach puhua/ymmärtää im Partitiv)
entä | entä | und (was ist mit …)? | Fragepartikel: Entä sinulle? = Und dir?
enää | enää | (nicht) mehr | Adverb, nur in verneinten Sätzen: ei enää = nicht mehr
Espoossa | Espoo | Espoo (Stadt) | Inessiv (-ssa: „in“)
et | ei (Verneinungsverb) | nicht | Verneinungsverb, 2. Sg. (sinä et …)
etkö | ei (Verneinungsverb) | nicht? | Verneinungsverb 2. Sg. + Fragesuffix -kö (… du nicht?)
ette | ei (Verneinungsverb) | nicht | Verneinungsverb, 2. Pl. (te ette …)
haittaa | haitata | stören, schaden | Verb Typ 4, Verneinungsstamm (ei haittaa = stört nicht)
hauska | hauska | nett, lustig, angenehm | Adjektiv, Nominativ; hauska tutustua = freut mich
he | he | sie (Plural, Personen) | Personalpronomen 3. Pl., Nominativ
hei | hei | hallo; tschüss | Gruß (hei hei = tschüss)
Helsingissä | Helsinki | Helsinki | Inessiv (-ssä: „in“); Stufenwechsel nk → ng
hitaammin | hitaasti | langsamer | Adverb im Komparativ (von hidas = langsam)
huomenna | huomenna | morgen | Zeitadverb (am nächsten Tag)
huomenta | huomen | Morgen | Partitiv Sg.; Gruß: hyvää huomenta
hyvin | hyvin | gut (Adverb), sehr | Adverb von hyvä
hyvä | hyvä | gut | Adjektiv, Nominativ Sg.
hyvää | hyvä | gut, Gutes | Partitiv Sg.; in Wünschen: hyvää päivää
hän | hän | er, sie | Personalpronomen 3. Sg. (kein Geschlecht), Nominativ
hänen | hän | sein, ihr | Genitiv Sg. von hän (Besitz)
idea | idea | Idee | Nominativ Sg.
iloinen | iloinen | fröhlich | Adjektiv, Nominativ Sg.
ilta | ilta | Abend | Nominativ Sg.; joka ilta = jeden Abend
insinööri | insinööri | Ingenieur(in) | Nominativ Sg.
Itävallasta | Itävalta | Österreich | Elativ (-sta: „aus“); Stufenwechsel lt → ll
ja | ja | und | Konjunktion
jo | jo | schon, bereits | Adverb
joka | joka | jeder | unveränderlich vor Nomen: joka päivä = jeden Tag
jotain | jokin | etwas | Partitiv Sg. von jokin (etwas)
juna | juna | Zug | Nominativ Sg.
juo | juoda | trinken | Verb Typ 2, Verneinungsstamm (ei juo)
juotko | juoda | trinken | Verb Typ 2, Präsens 2. Sg. + Fragesuffix -ko
kahdeksalta | kahdeksan | acht | Ablativ (-lta) für Uhrzeit: um acht Uhr
kahvi | kahvi | Kaffee | Nominativ Sg.
kahvia | kahvi | Kaffee | Partitiv Sg. (Stoff / nach Verneinung)
kahvin | kahvi | Kaffee | Akkusativ/Genitiv Sg. (-n): eine (ganze) Tasse Kaffee
kahvinne | kahvi | Kaffee | Nominativ + Possessivsuffix -nne (Ihr/euer Kaffee)
kaiken | kaikki | alles | Akkusativ Sg. (-n): alles (vollständig)
kauanko | kauan | wie lange | kauan (lange) + Fragesuffix -ko
kauniita | kaunis | schön | Partitiv Pl.
kaunis | kaunis | schön | Adjektiv, Nominativ Sg.
kaupassa | kauppa | Laden, Geschäft | Inessiv (-ssa: „in“); Stufenwechsel pp → p
kauppa | kauppa | Laden, Geschäft | Nominativ Sg.
kello | kello | Uhr | Nominativ Sg.
kenelle | kuka | wem, zu wem | Allativ (-lle: „zu, an“) von kuka
kenen | kuka | wessen | Genitiv Sg. von kuka
kerrostalossa | kerrostalo | Mehrfamilienhaus, Wohnblock | Inessiv (-ssa: „in“)
keskenään | keskenään | untereinander | Adverb (mit Possessivsuffix)
ketään | kukaan | niemand(en), jemand(en) | Partitiv von kukaan; in verneinten Sätzen
kiitoksia | kiitos | Dank | Partitiv Pl.: paljon kiitoksia = vielen Dank
kiitos | kiitos | danke; Dank | Nominativ Sg.; auch als „bitte“ angehängt (Kahvi, kiitos)
kirja | kirja | Buch | Nominativ Sg.
kirjaa | kirja | Buch | Partitiv Sg. (unabgeschlossene Handlung)
kirjoitan | kirjoittaa | schreiben | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
kiva | kiva | schön, nett | Adjektiv (umgangssprachlich), Nominativ
kotoisin | kotoisin | stammend (aus) | Adverb: olla kotoisin + Elativ = stammen aus
kotona | koti | zu Hause | Essiv (-na), feste Form: zu Hause
kuinka | kuinka | wie | Fragewort; kuinka + Adjektiv = wie (alt, groß …)
kuka | kuka | wer | Fragepronomen, Nominativ
kun | kun | wenn, als | Konjunktion
kuuluu | kuulua | zu hören sein; gehören | Präsens 3. Sg.; Mitä kuuluu? = Wie geht's?
kuumaa | kuuma | heiß | Partitiv Sg. (Prädikativ bei Stoffen)
kysyn | kysyä | fragen | Verb Typ 1, Präsens 1. Sg.
kysyä | kysyä | fragen | Grundform (Infinitiv), Verb Typ 1
lapset | lapsi | Kind | Nominativ Pl. (die Kinder)
lapsia | lapsi | Kind | Partitiv Pl. (Kinder, unbestimmte Menge)
laukku | laukku | Tasche | Nominativ Sg.
laukkuni | laukku | Tasche | Nominativ + Possessivsuffix -ni (meine Tasche)
lehteä | lehti | Zeitung; Blatt | Partitiv Sg. (Stamm lehte-)
leikkivät | leikkiä | spielen | Verb Typ 1, Präsens 3. Pl.; starke Stufe kk
leipää | leipä | Brot | Partitiv Sg. (nach Verneinung)
liikaa | liikaa | zu viel | Adverb; + Partitiv
Liisa | Liisa | Liisa | Vorname (Nominativ)
luemme | lukea | lesen | Verb Typ 1, Präsens 1. Pl.; Stufenwechsel k → –
luen | lukea | lesen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel k → –
lukee | lukea | lesen | Verb Typ 1, Präsens 3. Sg.; starke Stufe k
lähden | lähteä | weggehen, aufbrechen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel ht → hd
lähtee | lähteä | abfahren, weggehen | Verb Typ 1, Präsens 3. Sg.; starke Stufe ht
lääkäri | lääkäri | Arzt, Ärztin | Nominativ Sg.
maitoa | maito | Milch | Partitiv Sg. (nach ei ole)
maksaa | maksaa | kosten; bezahlen | Verb Typ 1, Präsens 3. Sg.
Matti | Matti | Matti | Vorname (Nominativ)
me | me | wir | Personalpronomen 1. Pl., Nominativ
meillä | me | bei uns; wir haben | Adessiv (-llä): meillä on = wir haben
melkein | melkein | fast | Adverb
menee | mennä | gehen | Verb Typ 3, Präsens 3. Sg.; Miten menee? = Wie läuft's?
menet | mennä | gehen | Verb Typ 3, Präsens 2. Sg.
miehensä | mies | Mann | Nominativ + Possessivsuffix -nsä (ihr/sein Mann); Stamm miehe-
mielelläni | mielellään | gern | Adverb mit Possessivsuffix -ni (ich … gern)
mihin | mikä | wohin | Illativ (-hin: „wohin“) von mikä
miksi | miksi | warum | Fragewort
mikä | mikä | was, welcher | Fragepronomen, Nominativ
milloin | milloin | wann | Fragewort
minua | minä | mich, mir | Partitiv von minä (Objekt bei auttaa, rakastaa …)
minulla | minä | bei mir; ich habe | Adessiv (-lla): minulla on = ich habe
minun | minä | mein | Genitiv von minä (Besitz)
minä | minä | ich | Personalpronomen 1. Sg., Nominativ
missä | mikä | wo | Inessiv (-ssä: „wo?“) von mikä
mistä | mikä | woher | Elativ (-stä: „woher?“) von mikä
miten | miten | wie | Fragewort (Art und Weise)
mitä | mikä | was | Partitiv von mikä
mitään | mikään | nichts, etwas | Partitiv von mikään; Ei se mitään = macht nichts
moi | moi | hallo; tschüss | lockerer Gruß (moi moi = tschüss)
mukaan | mukaan | mit (mitkommen) | Adverb: tulla mukaan = mitkommen
mukava | mukava | angenehm, nett | Adjektiv, Nominativ
mustikkapiirakka | mustikkapiirakka | Blaubeerkuchen | Kompositum: mustikka (Blaubeere) + piirakka (Kuchen)
mutta | mutta | aber | Konjunktion
muusikko | muusikko | Musiker(in) | Nominativ Sg.
myöhässä | myöhä | verspätet, zu spät | Inessiv (-ssä), feste Wendung: olla myöhässä
naimisissa | naimiset | verheiratet | Inessiv Pl., feste Wendung: olla naimisissa
niin | niin | so | Adverb
nimeni | nimi | Name | Nominativ + Possessivsuffix -ni (mein Name); Stamm nime-
nimesi | nimi | Name | Nominativ + Possessivsuffix -si (dein Name)
nukkuu | nukkua | schlafen | Verb Typ 1, Präsens 3. Sg.; starke Stufe kk
nuku | nukkua | schlafen | Verneinungsstamm; schwache Stufe kk → k
nyt | nyt | jetzt | Adverb
nähdä | nähdä | sehen | Grundform (Infinitiv), Verb Typ 2
nähdään | nähdä | sich sehen | Passiv Präsens; umgangssprachlich „wir sehen uns“
näkemiin | näkemiin | auf Wiedersehen | feste Abschiedsformel
odotan | odottaa | warten | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
ole | olla | sein | Verneinungsstamm (en ole) / Imperativ 2. Sg. (ole hyvä)
olemme | olla | sein | Präsens 1. Pl. (me)
olen | olla | sein | Präsens 1. Sg. (minä)
olet | olla | sein | Präsens 2. Sg. (sinä)
oletko | olla | sein | Präsens 2. Sg. + Fragesuffix -ko (bist du?)
olette | olla | sein | Präsens 2. Pl. (te; auch Höflichkeitsform)
olkaa | olla | sein | Imperativ 2. Pl.; olkaa hyvä = bitte sehr (höflich)
on | olla | sein; haben (minulla on) | Präsens 3. Sg. (hän, se, tämä)
onko | olla | sein | Präsens 3. Sg. + Fragesuffix -ko (ist …?)
opettaja | opettaja | Lehrer(in) | Nominativ Sg.
opettajalta | opettaja | Lehrer(in) | Ablativ (-lta: „von“); kysyä + Ablativ = jemanden fragen
opin | oppia | lernen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel pp → p
opiskelijoita | opiskelija | Student(in) | Partitiv Pl. (Prädikativ im Plural)
osta | ostaa | kaufen | Verneinungsstamm (en osta)
ostatte | ostaa | kaufen | Verb Typ 1, Präsens 2. Pl.
ostavat | ostaa | kaufen | Verb Typ 1, Präsens 3. Pl.
otan | ottaa | nehmen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
ovat | olla | sein | Präsens 3. Pl. (he)
paikka | paikka | Platz, Ort | Nominativ Sg.
paljon | paljon | viel | Adverb; kiitos paljon = vielen Dank
paljonko | paljon | wie viel | paljon + Fragesuffix -ko
Pekka | Pekka | Pekka | Vorname (Nominativ)
pihalla | piha | Hof | Adessiv (-lla: „auf, bei“)
puhu | puhua | sprechen | Verneinungsstamm (en puhu)
puhua | puhua | sprechen | Grundform (Infinitiv), Verb Typ 1
puhumme | puhua | sprechen | Verb Typ 1, Präsens 1. Pl.
puhun | puhua | sprechen | Verb Typ 1, Präsens 1. Sg.
puhut | puhua | sprechen | Verb Typ 1, Präsens 2. Sg.
puhutko | puhua | sprechen | Präsens 2. Sg. + Fragesuffix -ko (sprichst du?)
puhuvat | puhua | sprechen | Verb Typ 1, Präsens 3. Pl.
päivä | päivä | Tag | Nominativ Sg.; joka päivä = jeden Tag
päivää | päivä | Tag | Partitiv Sg.; Gruß: hyvää päivää
rakastamme | rakastaa | lieben | Verb Typ 1, Präsens 1. Pl.
rakastan | rakastaa | lieben | Verb Typ 1, Präsens 1. Sg.
ravintola | ravintola | Restaurant | Nominativ Sg.
ruotsia | ruotsi | Schwedisch | Partitiv Sg. (Sprache; nach Verneinung)
saanko | saada | dürfen; bekommen | Verb Typ 2, Präsens 1. Sg. + Fragesuffix -ko (darf ich?)
saksaa | saksa | Deutsch (Sprache) | Partitiv Sg. (Sprachen nach puhua)
saksalaisia | saksalainen | Deutsche(r) | Partitiv Pl. (Prädikativ im Plural)
Saksasta | Saksa | Deutschland | Elativ (-sta: „aus“)
samoin | samoin | ebenso, gleichfalls | Adverb
sanoja | sana | Wort | Partitiv Pl. (unbestimmte Menge)
saunaa | sauna | Sauna | Partitiv Sg. (rakastaa + Partitiv)
se | se | es, das | Demonstrativ-/Personalpronomen 3. Sg., Nominativ
sen | se | es | Akkusativ/Genitiv Sg. (-n)
sinua | sinä | dich, dir | Partitiv von sinä (Objekt bei rakastaa, auttaa)
sinulla | sinä | bei dir; du hast | Adessiv (-lla): sinulla on = du hast
sinulle | sinä | dir, für dich | Allativ (-lle: „zu, für“)
sinun | sinä | dein | Genitiv von sinä (Besitz)
sinä | sinä | du | Personalpronomen 2. Sg., Nominativ
siskoja | sisko | Schwester | Partitiv Pl. (nach Verneinung)
soitan | soittaa | anrufen; spielen (Instrument) | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
soitat | soittaa | anrufen | Verb Typ 1, Präsens 2. Sg.; Stufenwechsel tt → t
suomalainen | suomalainen | Finne, Finnin; finnisch | Nominativ Sg.
suomalaista | suomalainen | finnisch | Partitiv Sg. (Stamm suomalais-)
suomea | suomi | Finnisch (Sprache) | Partitiv Sg. (Stamm suome-)
Suomeen | Suomi | Finnland | Illativ (-en: „nach … hinein“)
Suomessa | Suomi | Finnland | Inessiv (-ssa: „in“)
surullinen | surullinen | traurig | Adjektiv, Nominativ Sg.
syntymäpäivää | syntymäpäivä | Geburtstag | Partitiv Sg.; hyvää syntymäpäivää = alles Gute zum Geburtstag
sähköpostia | sähköposti | E-Mail | Partitiv Sg. (laufende Handlung)
sää | sää | Wetter | Nominativ Sg.
taas | taas | wieder | Adverb
takkia | takki | Jacke | Partitiv Sg. (nach Verneinung)
talo | talo | Haus | Nominativ Sg.
Tampereella | Tampere | Tampere (Stadt) | Adessiv (-lla: „in“ bei manchen Ortsnamen)
tavata | tavata | treffen, kennenlernen | Grundform (Infinitiv), Verb Typ 4
te | te | ihr; Sie (höflich) | Personalpronomen 2. Pl., Nominativ
teet | tehdä | machen, tun | Verb Typ 2, Präsens 2. Sg.; Stufenwechsel
teetä | tee | Tee | Partitiv Sg.
terveisiä | terveiset | Grüße | Partitiv Pl.; Terveisiä … = Grüße aus …
tervetuloa | tervetuloa | willkommen | feste Formel; + Illativ (wohin)
tiedä | tietää | wissen | Verneinungsstamm; Stufenwechsel t → d
tiedän | tietää | wissen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel t → d
tiedätkö | tietää | wissen | Präsens 2. Sg. + Fragesuffix -kö (weißt du?)
todella | todella | wirklich | Adverb
tule | tulla | kommen | Verneinungsstamm (ei tule)
tulee | tulla | kommen | Verb Typ 3, Präsens 3. Sg.
tuleeko | tulla | kommen | Präsens 3. Sg. + Fragesuffix -ko (kommt er/sie?)
tuo | tuo | das dort, jenes | Demonstrativpronomen, Nominativ (weiter weg)
tutustua | tutustua | kennenlernen | Grundform (Infinitiv), Verb Typ 1
tämä | tämä | dies(es), das hier | Demonstrativpronomen, Nominativ (nah)
tänään | tänään | heute | Zeitadverb
tässä | tämä | hier | Inessiv von tämä: tässä on = hier ist
tätä | tämä | dies(es) | Partitiv von tämä
täällä | täällä | hier | Ortsadverb
töihin | työ | Arbeit | Illativ Pl.: töihin = zur Arbeit
unia | uni | Traum; Schlaf | Partitiv Pl. (Stamm une-/uni-)
uuden | uusi | neu | Akkusativ/Genitiv Sg. (Stamm uude-)
uusia | uusi | neu | Partitiv Pl.
vaatteita | vaate | Kleidungsstück | Partitiv Pl. (nach liikaa)
vai | vai | oder (in Fragen) | Konjunktion nur in Fragen; in Aussagen: tai
vaimoni | vaimo | Ehefrau | Nominativ + Possessivsuffix -ni (meine Frau)
vanha | vanha | alt | Adjektiv, Nominativ Sg.
vapaa | vapaa | frei | Adjektiv, Nominativ Sg.
vastaa | vastata | antworten | Verb Typ 4, Verneinungsstamm (ei vastaa)
vauva | vauva | Baby | Nominativ Sg.
veljiä | veli | Bruder | Partitiv Pl. (Stamm velje-); nach Verneinung
vessa | vessa | Toilette | Nominativ Sg.
vielä | vielä | noch | Adverb; ei vielä = noch nicht
viikonloppua | viikonloppu | Wochenende | Partitiv Sg.; hyvää viikonloppua
voitko | voida | können | Verb Typ 2, Präsens 2. Sg. + Fragesuffix -ko (kannst du?)
vähän | vähän | ein bisschen, wenig | Adverb
väsynyt | väsynyt | müde | Adjektiv, Nominativ Sg.
yksin | yksin | allein | Adverb
ymmärrä | ymmärtää | verstehen | Verneinungsstamm; Stufenwechsel rt → rr
ymmärrämme | ymmärtää | verstehen | Verb Typ 1, Präsens 1. Pl.; Stufenwechsel rt → rr
ymmärrän | ymmärtää | verstehen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel rt → rr
ymmärrättekö | ymmärtää | verstehen | Präsens 2. Pl. + Fragesuffix -kö (versteht ihr?)
ymmärtävät | ymmärtää | verstehen | Verb Typ 1, Präsens 3. Pl.; starke Stufe rt
ymmärtää | ymmärtää | verstehen | Präsens 3. Sg. = Grundform; starke Stufe rt
ystäviä | ystävä | Freund(in) | Partitiv Pl. (Prädikativ im Plural)
ystävällisiä | ystävällinen | freundlich, nett | Partitiv Pl. (Prädikativ im Plural)
yötä | yö | Nacht | Partitiv Sg.; hyvää yötä = gute Nacht
`,
  texts: [],
  families: [],
};
