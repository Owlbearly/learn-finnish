import type { ContentPack } from "../types";

export const pack: ContentPack = {
  name: "p3-cases",
  topics: [
    {
      id: "aeussere-lokalkasus",
      kind: "grammar",
      title: "Auf, von, zu (außen)",
      titleFi: "ulkopaikallissijat",
      order: 10,
      level: 4,
      icon: "🧭",
      summary: "Adessiv -lla, Ablativ -lta, Allativ -lle: auf/bei, von … weg, zu … hin – plus Besitz, Zeit und Mittel.",
      explanation: `### Die drei äußeren Ortskasus

Neben den „inneren“ Kasus (-ssa, -sta, -Vn = in, aus, hinein) hat das Finnische drei **äußere** Ortskasus. Sie beschreiben Oberflächen, die Nähe zu etwas und alles, was „außen“ ist.

| Kasus | Endung | Frage | Grundbedeutung | Beispiel |
| Adessiv | -lla / -llä | missä? | auf, an, bei | pöydällä – auf dem Tisch |
| Ablativ | -lta / -ltä | mistä? | von … (weg) | pöydältä – vom Tisch |
| Allativ | -lle | mihin? | auf … (hin), zu | pöydälle – auf den Tisch |

Die Endung kommt an den **Wortstamm** (wie beim Genitiv ohne -n): pöytä → pöydä-n → pöydä**llä**. Darum gilt der Stufenwechsel: ranta → ra**nn**alla, ilta → i**ll**alla, äiti → ä**id**ille, mökki → mö**k**illä.

### Weitere wichtige Bedeutungen

- **Besitz**: Adessiv + *on* = „haben“: *Minulla on auto.* (Ich habe ein Auto.)
- **Mittel/Werkzeug**: Adessiv = „mit“: *bussilla* (mit dem Bus), *kynällä* (mit dem Stift)
- **Zeit**: *aamulla* (morgens), *illalla* (abends), *yöllä* (nachts), *kesällä* (im Sommer), *ensi viikolla* (nächste Woche)
- **Empfänger**: Allativ = deutscher Dativ „jemandem“: *Annan sen sinulle.* *Soitan äidille.*
- **Quelle**: Ablativ = „von jemandem“: *Sain kirjeen ystävältä.* *Kysy opettajalta.*
- **Sinneseindruck**: *näyttää, kuulostaa, tuntua, maistua* + Ablativ: *Näytät väsyneeltä.* (Du siehst müde aus.)

### Orte mit äußeren Kasus

Viele Orte, an denen man sich „auf“ einer Fläche befindet, nehmen die äußeren Kasus: *torilla* (auf dem Markt), *asemalla* (am Bahnhof), *rannalla* (am Strand), *mökillä* (in der Hütte), *pihalla* (im Hof). Bei Ländern und Städten ist meist der innere Kasus richtig (*Suomessa, Saksassa, Helsingissä*), aber einige nehmen den äußeren: *Venäjällä* (in Russland), *Tampereella*, *Rovaniemellä*, *Ahvenanmaalla* – das muss man einfach lernen.

### Achtung, Unterschied zum Deutschen

Deutsch „auf dem Markt kaufen“ heißt finnisch *ostaa torilta* – man kauft „vom“ Markt (Ablativ), weil die Ware von dort weggeht. Genauso: *Otin avaimet pöydältä.* (Ich nahm die Schlüssel vom Tisch.)`,
    },
    {
      id: "partitiv",
      kind: "grammar",
      title: "Der Partitiv",
      titleFi: "partitiivi",
      order: 11,
      level: 4,
      icon: "🍰",
      summary: "Der häufigste Kasus: nach Zahlen, bei Stoffen, bei unvollendeten Handlungen, nach Verneinung und bei bestimmten Verben.",
      explanation: `### Wozu der Partitiv?

Der Partitiv ist der häufigste Kasus des Finnischen. Er bezeichnet etwas **Unbegrenztes, Unvollständiges oder Verneintes**. Im Deutschen gibt es nichts direkt Vergleichbares – am ehesten passt „etwas von …“.

### Endungen

| Wortausgang | Endung | Beispiele |
| ein kurzer Vokal | -a / -ä | talo → taloa, kirja → kirjaa, kahvi → kahvia |
| langer Vokal / Diphthong | -ta / -tä | maa → maata, tee → teetä, työ → työtä |
| Konsonant | -ta / -tä | avain → avainta, kysymys → kysymystä |
| -e (huone, kirje) | -tta / -ttä | huone → huonetta, kirje → kirjettä |

Achtung: Der Partitiv nutzt immer die **starke Stufe** (kein Stufenwechsel): leipä → leipää, aber Genitiv leivän. Einige Wörter sind unregelmäßig: vesi → vettä, lapsi → lasta, veli → veljeä.

### Wann steht der Partitiv?

- **Nach Zahlen ab 2 und Mengenwörtern**: *kaksi kahvia*, *kolme omenaa*, *paljon aikaa*, *litra maitoa*, *kuinka monta?* – das Nomen bleibt im Singular!
- **Stoffe und Unzählbares**: *Juon vettä. Ostan leipää.* (= etwas Wasser, etwas Brot)
- **Unvollendete Handlung**: *Luen kirjaa.* (Ich lese gerade/in einem Buch.) ↔ *Luin kirjan.* (Ich habe das Buch ausgelesen – Genitiv-Objekt.)
- **Verneinung**: Das Objekt eines verneinten Verbs steht immer im Partitiv: *En juo kahvia. Minulla ei ole autoa.*
- **Verben, die immer den Partitiv wollen**: *rakastaa* (lieben), *auttaa* (helfen), *odottaa* (warten auf), *ajatella* (denken an), *katsoa* (anschauen), *etsiä* (suchen), *tarvita* (brauchen), *puhua* (eine Sprache sprechen).

### Beispiele

- *Rakastan sinua.* – Ich liebe dich.
- *Voinko auttaa sinua?* – Kann ich dir helfen? (dt. Dativ!)
- *Odotamme bussia.* – Wir warten auf den Bus.
- *Minulla on kaksi huonetta.* – Ich habe zwei Zimmer.
- *Kaupassa ei ollut leipää.* – Im Laden gab es kein Brot.`,
    },
    {
      id: "genitiv",
      kind: "grammar",
      title: "Genitiv & Besitz",
      titleFi: "genetiivi",
      order: 12,
      level: 4,
      icon: "🔑",
      summary: "Die Endung -n: Besitz (Liisan auto), vollständiges Objekt (ostan kirjan) und Postpositionen (talon edessä).",
      explanation: `### Die Endung -n

Der Genitiv endet im Singular immer auf **-n**. Er wird an den Wortstamm gehängt, und hier wirkt der **Stufenwechsel** (schwache Stufe vor geschlossener Silbe):

| Nominativ | Genitiv | Stufenwechsel |
| talo | talon | – |
| kirja | kirjan | – |
| äiti | äidin | t → d |
| kaupunki | kaupungin | nk → ng |
| Pekka | Pekan | kk → k |
| poika | pojan | k → j |
| lapsi | lapsen | i → e |
| puhelin | puhelimen | -in → -imen |
| kirje | kirjeen | -e → -ee- |

Der Genitiv-Stamm ist zugleich der Stamm für viele andere Kasus: *kaupungi-n → kaupungi-ssa, kaupungi-lla*.

### 1. Besitz und Zugehörigkeit

Der Besitzer steht **vor** dem Besitz: *Liisan auto* (Liisas Auto), *Suomen pääkaupunki* (die Hauptstadt Finnlands), *naapurin koira* (der Hund des Nachbarn). Bei Pronomen kommt meist noch ein Possessivsuffix dazu: *minun äitini* (meine Mutter), *sinun nimesi* (dein Name). Frage: *kenen?* (wessen?).

### 2. Vollständiges Objekt (Akkusativ)

Wenn eine Handlung **abgeschlossen** ist und das Objekt **ganz** betrifft, steht ein Singular-Objekt auf -n:

- *Ostan kirjan.* – Ich kaufe das Buch (ganz, Ergebnis).
- *Luin kirjan.* – Ich habe das Buch (zu Ende) gelesen.
- vgl. Partitiv: *Luen kirjaa.* – Ich lese (gerade) im Buch.

Bei verneinten Sätzen steht dagegen immer der Partitiv. Auch Zukunft wird oft so ausgedrückt: *Huomenna korjaan pyörän.* (Morgen repariere ich das Rad.)

### 3. Postpositionen

Die meisten finnischen „Präpositionen“ stehen **nach** dem Wort und verlangen den Genitiv:

| Postposition | Bedeutung | Beispiel |
| edessä | vor | talon edessä |
| takana | hinter | talon takana |
| alla | unter | sängyn alla |
| vieressä | neben | Annan vieressä |
| lähellä | in der Nähe von | aseman lähellä |
| läpi | durch | puiston läpi |
| mielestä | nach Meinung von | opettajan mielestä |`,
    },
    {
      id: "plural",
      kind: "grammar",
      title: "Plural",
      titleFi: "monikko",
      order: 13,
      level: 5,
      icon: "👥",
      summary: "Nominativ Plural -t, sonst ein -i- im Stamm: taloissa, kirjoja, ystäville – Adjektive stimmen mit überein.",
      explanation: `### Zwei Arten von Plural

Im **Nominativ** (und beim vollständigen Plural-Objekt) endet der Plural auf **-t** – angehängt an den Genitivstamm, also mit Stufenwechsel: talo → talo**t**, kenkä → ke**ng**ä**t**, avain → avaime**t**, ranta → ra**nn**a**t**.

In **allen anderen Kasus** kennzeichnet ein **-i-** den Plural (zwischen Vokalen wird es zu **-j-**). Es steht zwischen Stamm und Kasusendung:

| Kasus | Singular | Plural |
| Nominativ | talo | talot |
| Partitiv | taloa | taloja |
| Genitiv | talon | talojen |
| Inessiv | talossa | taloissa |
| Elativ | talosta | taloista |
| Illativ | taloon | taloihin |
| Adessiv | talolla | taloilla |
| Allativ | talolle | taloille |

### Was passiert mit dem Stammvokal?

Das -i- verändert den Vokal davor:

- -o, -u, -ö, -y bleiben: talo → taloissa, koulu → kouluissa; lange Vokale werden gekürzt: puu → puissa
- -a wird zu -o-, wenn die erste Silbe a, e oder i hat: kirja → kirjoja, kauppa → kaupoissa, vanha → vanhoissa
- -a fällt weg, wenn die erste Silbe o oder u hat: koira → koiria, kukka → kukkia
- -ä fällt immer weg: ystävä → ystäville, kenkä → kenkiä
- altes -i (-e-Stamm) fällt weg: järvi → järviä, kieli → kielillä; bei neueren Wörtern bleibt -e-: kaupunki → kaupungeissa
- -e (huone) wird zu -ei-: huone → huoneissa

### Partitiv Plural

Sehr häufig! Endung **-a/-ä** nach -j- bzw. **-ita/-itä**: kirjoja, taloja, ihmisiä, järviä, asiakkaita. Er steht bei unbestimmten Mengen: *paljon ihmisiä* (viele Menschen), *Luen kirjoja.* (Ich lese Bücher.)

### Kongruenz

Adjektive und Pronomen stehen im selben Kasus und Numerus wie das Nomen:

- *isot talot* – die großen Häuser
- *isoissa taloissa* – in großen Häusern
- *vanhoista suomalaisista elokuvista* – von alten finnischen Filmen
- *nämä kukat* – diese Blumen

### Vorsicht

Nach Zahlen steht **kein** Plural, sondern Partitiv Singular: *kolme taloa* (drei Häuser).`,
    },
  ],
  sentences: [
    // ---------------- aeussere-lokalkasus ----------------
    {
      id: "ulk-001", topic: "aeussere-lokalkasus", level: 4,
      fi: "Kirja on pöydällä.", de: "Das Buch liegt auf dem Tisch.",
      gap: { answer: "pöydällä", options: ["pöydältä", "pöydälle", "pöydässä"], why: "Wo? auf einer Oberfläche → Adessiv -llä. Stufenwechsel t → d: pöytä → pöydällä." },
      note: "Finnisch sagt einfach „ist“ (on) – kein „liegt“ oder „steht“ nötig.",
    },
    {
      id: "ulk-002", topic: "aeussere-lokalkasus", level: 4,
      fi: "Laita lasi pöydälle.", de: "Stell das Glas auf den Tisch.",
      gap: { answer: "pöydälle", options: ["pöydällä", "pöydältä", "pöytään"], why: "Wohin? auf eine Oberfläche → Allativ -lle." },
    },
    {
      id: "ulk-003", topic: "aeussere-lokalkasus", level: 5,
      fi: "Otin avaimet pöydältä.", de: "Ich habe die Schlüssel vom Tisch genommen.",
      gap: { answer: "pöydältä", options: ["pöydälle", "pöydällä", "pöydästä"], why: "Woher? von einer Oberfläche weg → Ablativ -ltä." },
    },
    {
      id: "ulk-004", topic: "aeussere-lokalkasus", level: 4,
      fi: "Menen töihin bussilla.", de: "Ich fahre mit dem Bus zur Arbeit.",
      gap: { answer: "bussilla", options: ["bussiin", "bussissa", "bussilta"], why: "Verkehrsmittel („mit dem Bus“) stehen im Adessiv -lla." },
      note: "Der Adessiv drückt hier das Mittel aus: bussilla, junalla, autolla, pyörällä.",
      alt: ["Menen bussilla töihin."],
    },
    {
      id: "ulk-005", topic: "aeussere-lokalkasus", level: 4,
      fi: "Annan sen sinulle huomenna.", de: "Ich gebe es dir morgen.",
      gap: { answer: "sinulle", options: ["sinulla", "sinulta", "sinua"], why: "Der Empfänger („dir“) steht im Allativ -lle." },
      note: "Der deutsche Dativ beim Geben entspricht dem finnischen Allativ.",
      alt: ["Annan sen huomenna sinulle."],
    },
    {
      id: "ulk-006", topic: "aeussere-lokalkasus", level: 4,
      fi: "Minulla on kaksi lasta.", de: "Ich habe zwei Kinder.",
      gap: { answer: "Minulla", options: ["Minulle", "Minulta", "Minä"], why: "„Haben“ = Adessiv + on: minulla on … (wörtlich: bei mir ist …)." },
      note: "Finnisch hat kein Verb „haben“. Nach der Zahl kaksi steht der Partitiv Singular lasta (von lapsi).",
    },
    {
      id: "ulk-007", topic: "aeussere-lokalkasus", level: 5,
      fi: "Sain kirjeen ystävältä.", de: "Ich habe einen Brief von einem Freund bekommen.",
      gap: { answer: "ystävältä", options: ["ystävälle", "ystävällä", "ystävästä"], why: "Von einer Person bekommen → Ablativ -ltä." },
    },
    {
      id: "ulk-008", topic: "aeussere-lokalkasus", level: 4,
      fi: "Aamulla juon aina kahvia.", de: "Morgens trinke ich immer Kaffee.",
      gap: { answer: "Aamulla", options: ["Aamulle", "Aamusta", "Aamuun"], why: "Tageszeiten („morgens“) stehen im Adessiv: aamulla, illalla, yöllä." },
      alt: ["Juon aina aamulla kahvia.", "Juon aamulla aina kahvia."],
    },
    {
      id: "ulk-009", topic: "aeussere-lokalkasus", level: 4,
      fi: "Illalla katsomme elokuvaa.", de: "Abends schauen wir einen Film.",
      gap: { answer: "Illalla", options: ["Illalle", "Illasta", "Iltaan"], why: "Zeitangabe „abends“ → Adessiv. Stufenwechsel lt → ll: ilta → illalla." },
      alt: ["Katsomme illalla elokuvaa."],
    },
    {
      id: "ulk-010", topic: "aeussere-lokalkasus", level: 5,
      fi: "Ostin mansikoita torilta.", de: "Ich habe auf dem Markt Erdbeeren gekauft.",
      gap: { answer: "torilta", options: ["torilla", "torille", "torissa"], why: "Beim Kaufen kommt die Ware „vom“ Markt → Ablativ -lta." },
      note: "Deutsch „auf dem Markt kaufen“, Finnisch „vom Markt kaufen“ (ostaa torilta).",
      alt: ["Ostin torilta mansikoita."],
    },
    {
      id: "ulk-011", topic: "aeussere-lokalkasus", level: 5,
      fi: "Odotan sinua asemalla.", de: "Ich warte am Bahnhof auf dich.",
      gap: { answer: "asemalla", options: ["asemalle", "asemalta", "asemassa"], why: "Bahnhof (asema) nimmt die äußeren Kasus; wo? → Adessiv -lla." },
      alt: ["Odotan asemalla sinua."],
    },
    {
      id: "ulk-012", topic: "aeussere-lokalkasus", level: 5,
      fi: "Juna lähtee asemalta kello kuusi.", de: "Der Zug fährt um sechs Uhr vom Bahnhof ab.",
      gap: { answer: "asemalta", options: ["asemalla", "asemalle", "asemasta"], why: "Abfahrt von einem Ort → woher? → Ablativ -lta." },
      alt: ["Juna lähtee kello kuusi asemalta."],
    },
    {
      id: "ulk-013", topic: "aeussere-lokalkasus", level: 6,
      fi: "Asun Suomessa, mutta isoäitini asuu Venäjällä.", de: "Ich wohne in Finnland, aber meine Großmutter wohnt in Russland.",
      gap: { answer: "Venäjällä", options: ["Venäjälle", "Venäjältä", "Venäjä"], why: "Venäjä gehört zu den wenigen Ländern mit äußerem Kasus: Venäjällä (in Russland)." },
      note: "Die meisten Länder nehmen den Inessiv (Suomessa, Saksassa), Russland aber den Adessiv.",
    },
    {
      id: "ulk-014", topic: "aeussere-lokalkasus", level: 5,
      fi: "Soitan äidille joka sunnuntai.", de: "Ich rufe jeden Sonntag meine Mutter an.",
      gap: { answer: "äidille", options: ["äidillä", "äidiltä", "äitiä"], why: "soittaa (anrufen) + Allativ: man ruft „zu“ jemandem. Stufenwechsel t → d." },
      note: "Deutsch „jemanden anrufen“ (Akkusativ), Finnisch soittaa jollekulle (Allativ).",
      alt: ["Soitan joka sunnuntai äidille."],
    },
    {
      id: "ulk-015", topic: "aeussere-lokalkasus", level: 6,
      fi: "Kysy opettajalta, jos et ymmärrä.", de: "Frag die Lehrerin, wenn du es nicht verstehst.",
      gap: { answer: "opettajalta", options: ["opettajalle", "opettajalla", "opettajaa"], why: "kysyä (fragen) + Ablativ: man holt die Antwort „von“ jemandem." },
      note: "Deutsch „jemanden fragen“ (Akkusativ), Finnisch kysyä joltakulta (Ablativ).",
    },
    {
      id: "ulk-016", topic: "aeussere-lokalkasus", level: 6,
      fi: "Tämä kuulostaa hyvältä.", de: "Das klingt gut.",
      gap: { answer: "hyvältä", options: ["hyvälle", "hyvällä", "hyvä"], why: "Sinneseindrücke (kuulostaa, näyttää, tuntua, maistua) + Ablativ." },
      note: "Wörtlich: „Das klingt von gut.“ – typisch finnisch.",
    },
    {
      id: "ulk-017", topic: "aeussere-lokalkasus", level: 6,
      fi: "Näytät väsyneeltä.", de: "Du siehst müde aus.",
      gap: { answer: "väsyneeltä", options: ["väsyneellä", "väsynyt", "väsyneelle"], why: "näyttää (aussehen) + Ablativ: väsynyt → väsyneeltä." },
    },
    {
      id: "ulk-018", topic: "aeussere-lokalkasus", level: 5,
      fi: "Kirjoitan kynällä, en tietokoneella.", de: "Ich schreibe mit dem Stift, nicht am Computer.",
      gap: { answer: "kynällä", options: ["kynälle", "kynältä", "kynässä"], why: "Werkzeug („womit?“) → Adessiv -llä." },
    },
    {
      id: "ulk-019", topic: "aeussere-lokalkasus", level: 6,
      fi: "Kesällä olemme mökillä järven rannalla.", de: "Im Sommer sind wir in der Hütte am See.",
      gap: { answer: "mökillä", options: ["mökille", "mökiltä", "mökissä"], why: "Bei mökki (Sommerhütte) benutzt man die äußeren Kasus: mökillä. Stufenwechsel kk → k." },
      note: "Drei Adessive in einem Satz: Zeit (kesällä), Ort (mökillä), Ufer (rannalla, ranta → nt/nn).",
      alt: ["Olemme kesällä mökillä järven rannalla."],
    },
    {
      id: "ulk-020", topic: "aeussere-lokalkasus", level: 6,
      fi: "Lähdetään rannalle uimaan!", de: "Lass uns an den Strand schwimmen gehen!",
      gap: { answer: "rannalle", options: ["rannalla", "rannalta", "rantaan"], why: "Wohin? → Allativ -lle. Stufenwechsel nt → nn: ranta → rannalle." },
      note: "Lähdetään (Passivform) wird umgangssprachlich und schriftlich als „Lasst uns …“ benutzt.",
    },
    {
      id: "ulk-021", topic: "aeussere-lokalkasus", level: 5,
      fi: "Hän tuli kotiin vasta yöllä.", de: "Er kam erst nachts nach Hause.",
      gap: { answer: "yöllä", options: ["yölle", "yöltä", "yössä"], why: "„Nachts“ = Adessiv von yö." },
    },
    {
      id: "ulk-022", topic: "aeussere-lokalkasus", level: 6,
      fi: "Pyydä apua naapurilta.", de: "Bitte den Nachbarn um Hilfe.",
      gap: { answer: "naapurilta", options: ["naapurille", "naapurilla", "naapuria"], why: "pyytää jotakin joltakulta: um etwas bitten „von“ jemandem → Ablativ." },
      note: "apua steht im Partitiv (unbestimmte Menge Hilfe).",
      alt: ["Pyydä naapurilta apua."],
    },
    {
      id: "ulk-023", topic: "aeussere-lokalkasus", level: 7,
      fi: "Veljelläni ei ole autoa, joten lainaan hänelle omani.", de: "Mein Bruder hat kein Auto, deshalb leihe ich ihm meins.",
      gap: { answer: "hänelle", options: ["hänellä", "häneltä", "häntä"], why: "lainata jollekulle = jemandem leihen → Allativ." },
      note: "Verneinter Besitz: ei ole + Partitiv (autoa). lainata kann „leihen“ (+ Allativ) oder „ausleihen“ (+ Ablativ) bedeuten.",
    },
    {
      id: "ulk-024", topic: "aeussere-lokalkasus", level: 7,
      fi: "Ensi viikolla menen junalla Tampereelle ystäväni luo.", de: "Nächste Woche fahre ich mit dem Zug nach Tampere zu meinem Freund.",
      gap: { answer: "Tampereelle", options: ["Tampereella", "Tampereelta", "Tampereeseen"], why: "Tampere gehört zu den Städten mit äußeren Kasus: Tampereella, Tampereelle." },
      note: "Vier Funktionen in einem Satz: Zeit (viikolla), Mittel (junalla), Richtung (Tampereelle), Postposition luo + Genitiv.",
      alt: ["Menen ensi viikolla junalla Tampereelle ystäväni luo."],
    },

    // ---------------- partitiv ----------------
    {
      id: "par-001", topic: "partitiv", level: 4,
      fi: "Haluaisin kaksi kahvia, kiitos.", de: "Ich hätte gern zwei Kaffee, bitte.",
      gap: { answer: "kahvia", options: ["kahvi", "kahvin", "kahvit"], why: "Nach Zahlen ab zwei steht der Partitiv Singular: kaksi kahvia." },
    },
    {
      id: "par-002", topic: "partitiv", level: 4,
      fi: "Juon aamulla vettä.", de: "Morgens trinke ich Wasser.",
      gap: { answer: "vettä", options: ["vesi", "veden", "vedessä"], why: "Unbestimmte Menge eines Stoffes → Partitiv. vesi ist unregelmäßig: vettä." },
      alt: ["Aamulla juon vettä."],
    },
    {
      id: "par-003", topic: "partitiv", level: 4,
      fi: "Ostan maitoa ja leipää.", de: "Ich kaufe Milch und Brot.",
      gap: { answer: "maitoa", options: ["maito", "maidon", "maidot"], why: "Stoffnamen (etwas Milch) stehen als Objekt im Partitiv." },
      alt: ["Ostan leipää ja maitoa."],
    },
    {
      id: "par-004", topic: "partitiv", level: 4,
      fi: "Luen kirjaa.", de: "Ich lese (gerade) ein Buch.",
      gap: { answer: "kirjaa", options: ["kirjan", "kirja", "kirjassa"], why: "Die Handlung ist nicht abgeschlossen (ich bin mittendrin) → Partitiv." },
      note: "Vergleiche: Luin kirjan = ich habe das Buch ausgelesen.",
    },
    {
      id: "par-005", topic: "partitiv", level: 5,
      fi: "Luin eilen koko kirjan.", de: "Gestern habe ich das ganze Buch gelesen.",
      gap: { answer: "kirjan", options: ["kirjaa", "kirja", "kirjassa"], why: "Abgeschlossene Handlung, ganzes Objekt → Genitiv-Akkusativ -n, kein Partitiv." },
      note: "Gegenbeispiel zum Partitiv: Das Ergebnis ist erreicht.",
      alt: ["Eilen luin koko kirjan."],
    },
    {
      id: "par-006", topic: "partitiv", level: 4,
      fi: "Minulla ei ole autoa.", de: "Ich habe kein Auto.",
      gap: { answer: "autoa", options: ["auto", "auton", "autolla"], why: "Nach Verneinung steht immer der Partitiv: ei ole autoa." },
    },
    {
      id: "par-007", topic: "partitiv", level: 4,
      fi: "En juo kahvia illalla.", de: "Abends trinke ich keinen Kaffee.",
      gap: { answer: "kahvia", options: ["kahvin", "kahvi", "kahvilla"], why: "Verneinter Satz → Objekt im Partitiv." },
      alt: ["Illalla en juo kahvia."],
    },
    {
      id: "par-008", topic: "partitiv", level: 4,
      fi: "Rakastan sinua.", de: "Ich liebe dich.",
      gap: { answer: "sinua", options: ["sinut", "sinulle", "sinun"], why: "rakastaa verlangt immer den Partitiv." },
    },
    {
      id: "par-009", topic: "partitiv", level: 4,
      fi: "Voinko auttaa sinua?", de: "Kann ich dir helfen?",
      gap: { answer: "sinua", options: ["sinulle", "sinut", "sinulla"], why: "auttaa (helfen) nimmt den Partitiv – nicht den Allativ!" },
      note: "Deutsch „dir helfen“ (Dativ), Finnisch auttaa sinua (Partitiv).",
    },
    {
      id: "par-010", topic: "partitiv", level: 5,
      fi: "Odotamme bussia pysäkillä.", de: "Wir warten an der Haltestelle auf den Bus.",
      gap: { answer: "bussia", options: ["bussin", "bussille", "bussi"], why: "odottaa (warten auf) steht immer mit Partitiv." },
      alt: ["Odotamme pysäkillä bussia."],
    },
    {
      id: "par-011", topic: "partitiv", level: 5,
      fi: "Ajattelen sinua usein.", de: "Ich denke oft an dich.",
      gap: { answer: "sinua", options: ["sinulle", "sinusta", "sinut"], why: "ajatella (denken an) + Partitiv." },
      alt: ["Ajattelen usein sinua."],
    },
    {
      id: "par-012", topic: "partitiv", level: 5,
      fi: "Katsotko televisiota?", de: "Schaust du fern?",
      gap: { answer: "televisiota", options: ["television", "televisio", "televisiossa"], why: "katsoa (anschauen) als andauernde Tätigkeit → Partitiv." },
    },
    {
      id: "par-013", topic: "partitiv", level: 4,
      fi: "Hän puhuu suomea ja ruotsia.", de: "Sie spricht Finnisch und Schwedisch.",
      gap: { answer: "suomea", options: ["suomi", "suomen", "suomeksi"], why: "Eine Sprache sprechen: puhua + Partitiv." },
    },
    {
      id: "par-014", topic: "partitiv", level: 4,
      fi: "Tarvitsen apua.", de: "Ich brauche Hilfe.",
      gap: { answer: "apua", options: ["apu", "avun", "avulla"], why: "tarvita (brauchen) + Partitiv. Im Partitiv kein Stufenwechsel: apua (Genitiv: avun)." },
    },
    {
      id: "par-015", topic: "partitiv", level: 5,
      fi: "Pöydällä on kolme omenaa.", de: "Auf dem Tisch liegen drei Äpfel.",
      gap: { answer: "omenaa", options: ["omenat", "omena", "omenan"], why: "Nach Zahlen: Partitiv Singular, kein Plural!" },
      note: "Das Verb bleibt im Singular (on), obwohl es drei Äpfel sind.",
      alt: ["Kolme omenaa on pöydällä."],
    },
    {
      id: "par-016", topic: "partitiv", level: 5,
      fi: "Kaupassa ei ollut leipää.", de: "Im Laden gab es kein Brot.",
      gap: { answer: "leipää", options: ["leipä", "leivän", "leivät"], why: "Verneinter Existenzsatz → Partitiv. Starke Stufe p: leipää." },
    },
    {
      id: "par-017", topic: "partitiv", level: 5,
      fi: "Syön mielelläni kalaa ja perunoita.", de: "Ich esse gern Fisch und Kartoffeln.",
      gap: { answer: "kalaa", options: ["kala", "kalan", "kalat"], why: "Fisch als Speise = Stoff → Partitiv." },
      note: "perunoita ist Partitiv Plural (unbestimmte Anzahl Kartoffeln).",
    },
    {
      id: "par-018", topic: "partitiv", level: 5,
      fi: "Ostin kilon kahvia ja litran maitoa.", de: "Ich habe ein Kilo Kaffee und einen Liter Milch gekauft.",
      gap: { answer: "maitoa", options: ["maidon", "maito", "maitona"], why: "Nach Mengenangaben (kilo, litra, pala) steht der Partitiv." },
      note: "kilon und litran selbst stehen im Genitiv-Akkusativ, weil der Kauf abgeschlossen ist.",
    },
    {
      id: "par-019", topic: "partitiv", level: 5,
      fi: "Minulla on vähän aikaa.", de: "Ich habe ein bisschen Zeit.",
      gap: { answer: "aikaa", options: ["aika", "ajan", "ajat"], why: "Nach Mengenwörtern (vähän, paljon) → Partitiv. Starke Stufe: aikaa (Genitiv ajan)." },
    },
    {
      id: "par-020", topic: "partitiv", level: 6,
      fi: "Etsin avainta, mutta en löydä sitä.", de: "Ich suche den Schlüssel, finde ihn aber nicht.",
      gap: { answer: "avainta", options: ["avaimen", "avain", "avaimet"], why: "etsiä (suchen) nimmt immer den Partitiv; Konsonantstamm → -ta." },
      note: "Auch sitä ist Partitiv – wegen der Verneinung (en löydä).",
    },
    {
      id: "par-021", topic: "partitiv", level: 5,
      fi: "Älä unohda ostaa sokeria!", de: "Vergiss nicht, Zucker zu kaufen!",
      gap: { answer: "sokeria", options: ["sokerin", "sokeri", "sokerit"], why: "Stoffname (etwas Zucker) → Partitiv." },
    },
    {
      id: "par-022", topic: "partitiv", level: 5,
      fi: "Tämä keitto tarvitsee vielä suolaa.", de: "Diese Suppe braucht noch Salz.",
      gap: { answer: "suolaa", options: ["suola", "suolan", "suolassa"], why: "tarvita + Partitiv; Salz ist außerdem ein Stoff." },
    },
    {
      id: "par-023", topic: "partitiv", level: 4,
      fi: "Minulla on kaksi huonetta.", de: "Ich habe zwei Zimmer.",
      gap: { answer: "huonetta", options: ["huoneet", "huoneen", "huone"], why: "Nach kaksi Partitiv; Wörter auf -e bekommen -tta/-ttä: huone → huonetta." },
    },
    {
      id: "par-024", topic: "partitiv", level: 5,
      fi: "En ymmärrä tätä kysymystä.", de: "Ich verstehe diese Frage nicht.",
      gap: { answer: "kysymystä", options: ["kysymyksen", "kysymys", "kysymykset"], why: "Verneinung → Partitiv; Konsonantstamm → -tä. Auch tätä steht im Partitiv." },
    },
    {
      id: "par-025", topic: "partitiv", level: 6,
      fi: "Kuinka monta veljeä sinulla on?", de: "Wie viele Brüder hast du?",
      gap: { answer: "veljeä", options: ["veljet", "veljen", "veli"], why: "Nach kuinka monta (wie viele) Partitiv Singular. veli → veljeä." },
    },
    {
      id: "par-026", topic: "partitiv", level: 6,
      fi: "Lapset leikkivät pihalla, ja minä keitän teetä.", de: "Die Kinder spielen im Hof, und ich koche Tee.",
      gap: { answer: "teetä", options: ["tee", "teen", "teellä"], why: "Langer Vokal → Partitivendung -tä: tee → teetä." },
    },
    {
      id: "par-027", topic: "partitiv", level: 7,
      fi: "Kirjoitin kirjettä koko illan, mutta en saanut sitä valmiiksi.", de: "Ich habe den ganzen Abend an dem Brief geschrieben, ihn aber nicht fertig bekommen.",
      gap: { answer: "kirjettä", options: ["kirjeen", "kirje", "kirjeet"], why: "Die Handlung blieb unvollendet → Partitiv. kirje → kirjettä (-ttä)." },
      note: "koko illan (den ganzen Abend) steht im Akkusativ der Dauer; sitä im Partitiv wegen der Verneinung.",
    },
    {
      id: "par-028", topic: "partitiv", level: 7,
      fi: "Siivosin koko päivän, mutta en ehtinyt pestä ikkunoita.", de: "Ich habe den ganzen Tag geputzt, bin aber nicht dazu gekommen, die Fenster zu putzen.",
      gap: { answer: "ikkunoita", options: ["ikkunat", "ikkunoiden", "ikkunaa"], why: "Verneinter Hauptsatz → auch das Objekt des Infinitivs steht im Partitiv (hier Plural)." },
    },

    // ---------------- genitiv ----------------
    {
      id: "gen-001", topic: "genitiv", level: 4,
      fi: "Tämä on Liisan auto.", de: "Das ist Liisas Auto.",
      gap: { answer: "Liisan", options: ["Liisa", "Liisalla", "Liisaa"], why: "Besitzer im Genitiv -n vor dem Besitz." },
    },
    {
      id: "gen-002", topic: "genitiv", level: 4,
      fi: "Mikä sinun nimesi on?", de: "Wie heißt du?",
      gap: { answer: "sinun", options: ["sinä", "sinulla", "sinua"], why: "„dein“ = Genitiv sinun + Possessivsuffix -si am Nomen." },
      note: "Wörtlich: „Was ist dein Name?“ Das Pronomen sinun kann auch wegfallen: Mikä nimesi on?",
      alt: ["Mikä nimesi on?", "Mikä on sinun nimesi?"],
    },
    {
      id: "gen-003", topic: "genitiv", level: 4,
      fi: "Minun äitini on opettaja.", de: "Meine Mutter ist Lehrerin.",
      gap: { answer: "Minun", options: ["Minä", "Minulla", "Minua"], why: "„mein“ = Genitiv minun (+ Suffix -ni)." },
      alt: ["Äitini on opettaja."],
    },
    {
      id: "gen-004", topic: "genitiv", level: 4,
      fi: "Ostan kirjan.", de: "Ich kaufe das Buch.",
      gap: { answer: "kirjan", options: ["kirjaa", "kirja", "kirjalla"], why: "Ganzes Objekt, Handlung mit Ergebnis → Genitiv-Akkusativ -n." },
    },
    {
      id: "gen-005", topic: "genitiv", level: 4,
      fi: "Äidin syntymäpäivä on huomenna.", de: "Mamas Geburtstag ist morgen.",
      gap: { answer: "Äidin", options: ["Äiti", "Äidillä", "Äitiä"], why: "Besitz → Genitiv. Stufenwechsel t → d: äiti → äidin." },
    },
    {
      id: "gen-006", topic: "genitiv", level: 4,
      fi: "Suomen pääkaupunki on Helsinki.", de: "Die Hauptstadt Finnlands ist Helsinki.",
      gap: { answer: "Suomen", options: ["Suomi", "Suomessa", "Suomea"], why: "Zugehörigkeit („von Finnland“) → Genitiv, steht vorne." },
    },
    {
      id: "gen-007", topic: "genitiv", level: 5,
      fi: "Kaupungin keskusta on lähellä.", de: "Das Stadtzentrum ist in der Nähe.",
      gap: { answer: "Kaupungin", options: ["Kaupunki", "Kaupungissa", "Kaupunkia"], why: "Genitiv mit Stufenwechsel nk → ng: kaupunki → kaupungin." },
    },
    {
      id: "gen-008", topic: "genitiv", level: 5,
      fi: "Asun aseman lähellä.", de: "Ich wohne in der Nähe des Bahnhofs.",
      gap: { answer: "aseman", options: ["asema", "asemalla", "asemaa"], why: "Die Postposition lähellä verlangt den Genitiv davor." },
    },
    {
      id: "gen-009", topic: "genitiv", level: 5,
      fi: "Kissa nukkuu sängyn alla.", de: "Die Katze schläft unter dem Bett.",
      gap: { answer: "sängyn", options: ["sänky", "sängyssä", "sänkyä"], why: "alla (unter) + Genitiv. Stufenwechsel nk → ng." },
    },
    {
      id: "gen-010", topic: "genitiv", level: 5,
      fi: "Odota minua talon edessä.", de: "Warte vor dem Haus auf mich.",
      gap: { answer: "talon", options: ["talo", "talossa", "taloa"], why: "edessä (vor) ist eine Postposition mit Genitiv." },
      alt: ["Odota talon edessä minua."],
    },
    {
      id: "gen-011", topic: "genitiv", level: 5,
      fi: "Söin omenan ja join lasin mehua.", de: "Ich habe einen Apfel gegessen und ein Glas Saft getrunken.",
      gap: { answer: "omenan", options: ["omenaa", "omena", "omenat"], why: "Der ganze Apfel ist gegessen → Genitiv-Akkusativ." },
      note: "lasin ist ebenfalls Genitiv-Akkusativ, mehua aber Partitiv (Stoff nach Mengenangabe).",
    },
    {
      id: "gen-012", topic: "genitiv", level: 5,
      fi: "Tapasin eilen Pekan veljen.", de: "Ich habe gestern Pekkas Bruder getroffen.",
      gap: { answer: "Pekan", options: ["Pekka", "Pekalla", "Pekkaa"], why: "Besitz → Genitiv. Stufenwechsel kk → k: Pekka → Pekan." },
      note: "Auch veljen ist Genitiv – als vollständiges Objekt von tavata.",
      alt: ["Eilen tapasin Pekan veljen."],
    },
    {
      id: "gen-013", topic: "genitiv", level: 5,
      fi: "Lapsen nimi on Aino.", de: "Das Kind heißt Aino.",
      gap: { answer: "Lapsen", options: ["Lapsi", "Lasta", "Lapsella"], why: "Genitiv von lapsi: lapsen (-i wird zu -e-)." },
    },
    {
      id: "gen-014", topic: "genitiv", level: 5,
      fi: "Kirjoitin kirjeen ystävälleni.", de: "Ich habe meinem Freund einen Brief geschrieben.",
      gap: { answer: "kirjeen", options: ["kirjettä", "kirje", "kirjeet"], why: "Fertiger Brief → Genitiv-Akkusativ. kirje → kirjeen." },
    },
    {
      id: "gen-015", topic: "genitiv", level: 5,
      fi: "Kenen laukku tämä on?", de: "Wem gehört diese Tasche?",
      gap: { answer: "Kenen", options: ["Kuka", "Kenellä", "Ketä"], why: "„wessen?“ = kenen (Genitiv von kuka)." },
      note: "Wörtlich: „Wessen Tasche ist das?“",
    },
    {
      id: "gen-016", topic: "genitiv", level: 5,
      fi: "Meidän talomme on järven rannalla.", de: "Unser Haus liegt am See.",
      gap: { answer: "Meidän", options: ["Me", "Meillä", "Meitä"], why: "„unser“ = meidän + Suffix -mme." },
      note: "järven rannalla: Genitiv + rannalla (am Ufer von).",
      alt: ["Talomme on järven rannalla."],
    },
    {
      id: "gen-017", topic: "genitiv", level: 5,
      fi: "Istuin Annan vieressä.", de: "Ich saß neben Anna.",
      gap: { answer: "Annan", options: ["Anna", "Annalla", "Annaa"], why: "vieressä (neben) + Genitiv." },
    },
    {
      id: "gen-018", topic: "genitiv", level: 5,
      fi: "Huomenna korjaan pyörän.", de: "Morgen repariere ich das Fahrrad.",
      gap: { answer: "pyörän", options: ["pyörää", "pyörä", "pyörällä"], why: "Zukünftig abgeschlossene Handlung → Genitiv-Akkusativ." },
      note: "Finnisch hat kein Futur – das Präsens mit Genitiv-Objekt drückt ein sicheres Ergebnis aus.",
      alt: ["Korjaan pyörän huomenna."],
    },
    {
      id: "gen-019", topic: "genitiv", level: 6,
      fi: "Pojan isä työskentelee sairaalassa.", de: "Der Vater des Jungen arbeitet im Krankenhaus.",
      gap: { answer: "Pojan", options: ["Poika", "Pojalla", "Poikaa"], why: "Genitiv mit Stufenwechsel k → j: poika → pojan." },
    },
    {
      id: "gen-020", topic: "genitiv", level: 6,
      fi: "Ensi viikolla vien auton huoltoon.", de: "Nächste Woche bringe ich das Auto in die Werkstatt.",
      gap: { answer: "auton", options: ["autoa", "auto", "autolla"], why: "Das Auto als Ganzes, Handlung mit Ergebnis → Genitiv-Akkusativ." },
      alt: ["Vien auton huoltoon ensi viikolla."],
    },
    {
      id: "gen-021", topic: "genitiv", level: 6,
      fi: "Naapurin koira haukkuu aina aamulla.", de: "Der Hund des Nachbarn bellt immer morgens.",
      gap: { answer: "Naapurin", options: ["Naapuri", "Naapurilla", "Naapuria"], why: "Besitzer im Genitiv vor dem Besitz." },
    },
    {
      id: "gen-022", topic: "genitiv", level: 6,
      fi: "Kävelimme puiston läpi kotiin.", de: "Wir sind durch den Park nach Hause gegangen.",
      gap: { answer: "puiston", options: ["puisto", "puistossa", "puistoa"], why: "läpi (durch) als Postposition + Genitiv." },
    },
    {
      id: "gen-023", topic: "genitiv", level: 7,
      fi: "Maanantaina ostin uuden puhelimen, koska vanha meni rikki.", de: "Am Montag habe ich ein neues Handy gekauft, weil das alte kaputtgegangen ist.",
      gap: { answer: "puhelimen", options: ["puhelinta", "puhelin", "puhelimet"], why: "Abgeschlossener Kauf → Genitiv-Akkusativ. puhelin → puhelimen." },
      note: "Das Adjektiv steht im selben Kasus: uuden puhelimen.",
    },
    {
      id: "gen-024", topic: "genitiv", level: 7,
      fi: "Opettajan mielestä tämä tehtävä on helppo.", de: "Nach Meinung der Lehrerin ist diese Aufgabe leicht.",
      gap: { answer: "Opettajan", options: ["Opettaja", "Opettajalla", "Opettajaa"], why: "mielestä (nach Meinung von) + Genitiv." },
      note: "Mit Pronomen: minun mielestäni = meiner Meinung nach.",
    },

    // ---------------- plural ----------------
    {
      id: "plu-001", topic: "plural", level: 5,
      fi: "Kirjat ovat pöydällä.", de: "Die Bücher liegen auf dem Tisch.",
      gap: { answer: "Kirjat", options: ["Kirja", "Kirjoja", "Kirjoissa"], why: "Bestimmtes Subjekt im Plural → Nominativ Plural -t; das Verb steht im Plural (ovat)." },
    },
    {
      id: "plu-002", topic: "plural", level: 5,
      fi: "Lapset leikkivät pihalla.", de: "Die Kinder spielen im Hof.",
      gap: { answer: "Lapset", options: ["Lapsi", "Lapsia", "Lasten"], why: "Nominativ Plural: lapsi → lapset (Stamm lapse-)." },
    },
    {
      id: "plu-003", topic: "plural", level: 5,
      fi: "Talot ovat täällä isoja.", de: "Die Häuser hier sind groß.",
      gap: { answer: "Talot", options: ["Talo", "Taloja", "Taloissa"], why: "Subjekt im Nominativ Plural -t." },
      note: "Das Prädikatsadjektiv bei Plural-Subjekt steht im Partitiv Plural: isoja.",
    },
    {
      id: "plu-004", topic: "plural", level: 5,
      fi: "Luen paljon kirjoja.", de: "Ich lese viele Bücher.",
      gap: { answer: "kirjoja", options: ["kirjat", "kirjaa", "kirjoissa"], why: "paljon + Partitiv; bei zählbaren Dingen Partitiv Plural: kirja → kirjoja." },
    },
    {
      id: "plu-005", topic: "plural", level: 5,
      fi: "Torilla oli paljon ihmisiä.", de: "Auf dem Markt waren viele Menschen.",
      gap: { answer: "ihmisiä", options: ["ihmiset", "ihmistä", "ihmisten"], why: "Unbestimmte Menge → Partitiv Plural -iä." },
      note: "Das Verb bleibt Singular (oli), weil das Subjekt im Partitiv steht.",
    },
    {
      id: "plu-006", topic: "plural", level: 6,
      fi: "Ihmiset asuvat yhä useammin isoissa kaupungeissa.", de: "Die Menschen wohnen immer öfter in großen Städten.",
      gap: { answer: "kaupungeissa", options: ["kaupungissa", "kaupunkeihin", "kaupungeista"], why: "Inessiv Plural: kaupunki → kaupunge-i-ssa (i wird zu e, dann Plural-i)." },
      note: "Auch das Adjektiv steht im Inessiv Plural: isoissa.",
    },
    {
      id: "plu-007", topic: "plural", level: 5,
      fi: "Annoin lahjat ystäville.", de: "Ich habe den Freunden die Geschenke gegeben.",
      gap: { answer: "ystäville", options: ["ystävälle", "ystävät", "ystäviä"], why: "Allativ Plural: -ä fällt vor dem Plural-i weg: ystävä → ystäville." },
      note: "lahjat: ein bestimmtes, ganzes Plural-Objekt steht im Nominativ Plural (-t).",
    },
    {
      id: "plu-008", topic: "plural", level: 5,
      fi: "Pidän koirista.", de: "Ich mag Hunde.",
      gap: { answer: "koirista", options: ["koirasta", "koiria", "koirat"], why: "pitää + Elativ; allgemein „Hunde“ → Plural: koira → koirista." },
    },
    {
      id: "plu-009", topic: "plural", level: 6,
      fi: "Isoissa taloissa on monta huonetta.", de: "In großen Häusern gibt es viele Zimmer.",
      gap: { answer: "Isoissa", options: ["Isossa", "Isot", "Isoja"], why: "Das Adjektiv stimmt mit dem Nomen überein: Inessiv Plural isoissa taloissa." },
      note: "monta + Partitiv Singular (huonetta), wie nach Zahlen.",
    },
    {
      id: "plu-010", topic: "plural", level: 6,
      fi: "Ostin uudet kengät.", de: "Ich habe (mir) neue Schuhe gekauft.",
      gap: { answer: "kengät", options: ["kenkiä", "kenkä", "kengän"], why: "Ganzes Plural-Objekt (ein bestimmtes Paar) → Nominativ Plural -t, Stufenwechsel nk → ng." },
      note: "Vergleiche: Ostin kenkiä = Ich habe (irgendwelche) Schuhe gekauft.",
    },
    {
      id: "plu-011", topic: "plural", level: 6,
      fi: "Ostin kenkiä ja sukkia.", de: "Ich habe Schuhe und Socken gekauft.",
      gap: { answer: "kenkiä", options: ["kengät", "kengissä", "kenkää"], why: "Unbestimmte Menge → Partitiv Plural; -ä fällt weg, starke Stufe: kenkiä." },
    },
    {
      id: "plu-012", topic: "plural", level: 6,
      fi: "Puissa on jo lehtiä.", de: "An den Bäumen sind schon Blätter.",
      gap: { answer: "Puissa", options: ["Puussa", "Puut", "Puita"], why: "Inessiv Plural: puu → pu-i-ssa (langer Vokal wird gekürzt)." },
      note: "Finnisch: Blätter sind „in“ den Bäumen (Inessiv).",
    },
    {
      id: "plu-013", topic: "plural", level: 5,
      fi: "Suomessa on paljon järviä ja metsiä.", de: "In Finnland gibt es viele Seen und Wälder.",
      gap: { answer: "järviä", options: ["järvet", "järveä", "järvissä"], why: "paljon + Partitiv Plural: järvi → järviä." },
    },
    {
      id: "plu-014", topic: "plural", level: 6,
      fi: "Kirjastossa on kirjoja monilla kielillä.", de: "In der Bibliothek gibt es Bücher in vielen Sprachen.",
      gap: { answer: "kielillä", options: ["kielellä", "kieliä", "kielet"], why: "Adessiv Plural („in Sprachen“): kieli → kielillä; moni stimmt überein: monilla." },
    },
    {
      id: "plu-015", topic: "plural", level: 5,
      fi: "Nämä kukat ovat äidilleni.", de: "Diese Blumen sind für meine Mutter.",
      gap: { answer: "Nämä", options: ["Tämä", "Näitä", "Näissä"], why: "Plural von tämä im Nominativ: nämä (passend zu kukat)." },
    },
    {
      id: "plu-016", topic: "plural", level: 5,
      fi: "Missä avaimet ovat?", de: "Wo sind die Schlüssel?",
      gap: { answer: "avaimet", options: ["avain", "avaimia", "avaimen"], why: "Bestimmte Schlüssel als Subjekt → Nominativ Plural: avain → avaimet." },
      alt: ["Missä ovat avaimet?"],
    },
    {
      id: "plu-017", topic: "plural", level: 6,
      fi: "Kaupoissa on nyt paljon asiakkaita.", de: "In den Geschäften sind jetzt viele Kunden.",
      gap: { answer: "Kaupoissa", options: ["Kaupassa", "Kauppoihin", "Kaupat"], why: "Inessiv Plural: kauppa → kaupo-i-ssa (a → o, Stufenwechsel pp → p)." },
      note: "asiakas → asiakkaita (Partitiv Plural mit starker Stufe kk).",
    },
    {
      id: "plu-018", topic: "plural", level: 7,
      fi: "Kerroin uutiset ensin vanhemmilleni.", de: "Ich habe die Neuigkeiten zuerst meinen Eltern erzählt.",
      gap: { answer: "vanhemmilleni", options: ["vanhempani", "vanhemmiltani", "vanhemmillani"], why: "kertoa jollekulle (jemandem erzählen) → Allativ Plural + Suffix -ni." },
      note: "vanhemmat (Eltern) gibt es fast nur im Plural; mp → mm im Stamm.",
      alt: ["Kerroin ensin uutiset vanhemmilleni."],
    },
    {
      id: "plu-019", topic: "plural", level: 7,
      fi: "Hän soitti kaikille ystävilleen.", de: "Sie hat alle ihre Freunde angerufen.",
      gap: { answer: "ystävilleen", options: ["ystävälleen", "ystävänsä", "ystäviään"], why: "soittaa + Allativ; Plural -i- + Possessivsuffix -en (sein/ihr)." },
      note: "kaikki stimmt mit dem Nomen überein: kaikille ystävilleen.",
    },
    {
      id: "plu-020", topic: "plural", level: 7,
      fi: "Matkustimme pienillä laivoilla saarelta saarelle.", de: "Wir sind mit kleinen Schiffen von Insel zu Insel gereist.",
      gap: { answer: "laivoilla", options: ["laivalla", "laivoja", "laivat"], why: "Verkehrsmittel → Adessiv, hier Plural: laiva → laivoilla (a → o)." },
      note: "pieni → pienillä stimmt überein; saarelta saarelle = von Insel zu Insel.",
    },
    {
      id: "plu-021", topic: "plural", level: 7,
      fi: "Uusissa asunnoissa on isot ikkunat.", de: "Die neuen Wohnungen haben große Fenster.",
      gap: { answer: "asunnoissa", options: ["asunnossa", "asuntoihin", "asunnot"], why: "Inessiv Plural mit Stufenwechsel nt → nn: asunto → asunnoissa." },
      note: "uusi → uusissa (Plural-Stamm uusi-). Wörtlich: „In den neuen Wohnungen sind große Fenster.“",
      alt: ["Uusissa asunnoissa on isoja ikkunoita."],
    },
    {
      id: "plu-022", topic: "plural", level: 7,
      fi: "Pidän vanhoista suomalaisista elokuvista.", de: "Ich mag alte finnische Filme.",
      gap: { answer: "elokuvista", options: ["elokuvasta", "elokuvia", "elokuvat"], why: "pitää + Elativ Plural; alle Adjektive stimmen überein." },
      note: "vanha → vanhoista (a → o), suomalainen → suomalaisista.",
    },
    {
      id: "plu-023", topic: "plural", level: 7,
      fi: "Kesällä lapset uivat järvissä ja leikkivät rannoilla.", de: "Im Sommer schwimmen die Kinder in den Seen und spielen an den Stränden.",
      gap: { answer: "rannoilla", options: ["rannalla", "rantoja", "rannat"], why: "Adessiv Plural: ranta → rannoilla (nt → nn, a → o)." },
    },
    {
      id: "plu-024", topic: "plural", level: 8,
      fi: "Vietin koko viikonlopun vanhojen ystävieni kanssa.", de: "Ich habe das ganze Wochenende mit meinen alten Freunden verbracht.",
      gap: { answer: "ystävieni", options: ["ystävilleni", "ystäviäni", "ystävistäni"], why: "kanssa (mit) verlangt den Genitiv; Genitiv Plural ystävien + Suffix -ni." },
      note: "vanhojen ist Genitiv Plural von vanha, passend zu ystävieni.",
    },
  ],
  lexicon: `
aamuisin | aamu | morgens (regelmäßig) | Adverb (instruktiver Plural -isin: „jeden Morgen“)
aamulla | aamu | morgens, am Morgen | Adessiv (-lla) als Zeitangabe
aikaa | aika | Zeit | Partitiv Sg. (nach vähän/paljon); starke Stufe k (Gen. ajan)
aina | aina | immer | Adverb
Aino | Aino | Aino (Mädchenname) | Eigenname, Nominativ
ajattelen | ajatella | denken (an) | Verb Typ 3, Präsens 1. Sg.; + Partitiv („an jemanden denken“)
alla | alla | unter | Postposition + Genitiv (wo?)
annan | antaa | geben | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel nt → nn
annoin | antaa | geben | Verb Typ 1, Imperfekt 1. Sg. (gab); nt → nn
apua | apu | Hilfe | Partitiv Sg.; starke Stufe p (Gen. avun)
asemalla | asema | Bahnhof | Adessiv (-lla: „am“, wo?)
asemalta | asema | Bahnhof | Ablativ (-lta: „vom … weg“)
aseman | asema | Bahnhof | Genitiv Sg. (-n), hier vor Postposition lähellä
asiakkaita | asiakas | Kunde | Partitiv Plural; -as-Wort, Stamm asiakkaa- (starke Stufe kk)
asun | asua | wohnen | Verb Typ 1, Präsens 1. Sg.
asunnoissa | asunto | Wohnung | Inessiv Plural (-i-ssa); Stufenwechsel nt → nn
asuntoni | asunto | Wohnung | Nominativ Sg. + Possessivsuffix -ni („meine Wohnung“)
asuu | asua | wohnen | Verb Typ 1, Präsens 3. Sg.
asuvat | asua | wohnen | Verb Typ 1, Präsens 3. Pl.
auto | auto | Auto | Nominativ Sg.
autoa | auto | Auto | Partitiv Sg. (nach Verneinung)
auton | auto | Auto | Genitiv Sg. / Genitiv-Akkusativ (ganzes Objekt)
auttaa | auttaa | helfen | Verb Typ 1, Infinitiv; + Partitiv (jemandem helfen)
auttaneet | auttaa | helfen | Partizip Perfekt Plural (he ovat auttaneet = sie haben geholfen)
avaimet | avain | Schlüssel | Nominativ Plural (-t); Stamm avaime-
avainta | avain | Schlüssel | Partitiv Sg. (-ta nach Konsonant)
bussia | bussi | Bus | Partitiv Sg. (odottaa/käyttää + Partitiv)
bussilla | bussi | Bus | Adessiv (-lla): „mit dem Bus“ (Verkehrsmittel)
edessä | edessä | vor | Postposition + Genitiv (wo?)
ehtinyt | ehtiä | Zeit finden, schaffen | Partizip Perfekt (en ehtinyt = ich bin nicht dazu gekommen)
ei | ei (Verneinungsverb) | nicht | Verneinungsverb, 3. Sg. (ei ole = ist nicht / hat nicht)
eilen | eilen | gestern | Adverb
elokuvaa | elokuva | Film | Partitiv Sg. (katsoa + Partitiv)
elokuvista | elokuva | Film | Elativ Plural (-i-sta); pitää + Elativ
en | ei (Verneinungsverb) | nicht | Verneinungsverb, 1. Sg. (minä en …)
ensi | ensi | nächste(r) | unveränderliches Adjektiv (ensi viikolla = nächste Woche)
ensin | ensin | zuerst | Adverb
et | ei (Verneinungsverb) | nicht | Verneinungsverb, 2. Sg. (sinä et …)
etsin | etsiä | suchen | Verb Typ 1, Präsens 1. Sg.; + Partitiv
haluaisin | haluta | wollen, möchten | Verb Typ 4, Konditional 1. Sg. („ich hätte gern“)
haukkuu | haukkua | bellen | Verb Typ 1, Präsens 3. Sg.
he | he | sie (Plural, Personen) | Personalpronomen 3. Pl., Nominativ
heille | he | ihnen | Allativ von he (-lle: „zu ihnen“)
helppo | helppo | leicht, einfach | Adjektiv, Nominativ Sg.
Helsingissä | Helsinki | Helsinki | Inessiv (-ssa = „in“); Stufenwechsel nk → ng
Helsinki | Helsinki | Helsinki | Eigenname, Nominativ
huoltoon | huolto | Wartung, Werkstatt | Illativ (-on: „in … hinein“); viedä huoltoon = zur Wartung bringen
huomenna | huomenna | morgen | Adverb
huonetta | huone | Zimmer | Partitiv Sg. (-tta bei -e-Wörtern), nach Zahlen
hyvältä | hyvä | gut | Ablativ (-ltä); kuulostaa + Ablativ = „klingt …“
hän | hän | er, sie | Personalpronomen 3. Sg., Nominativ
hänelle | hän | ihm, ihr | Allativ (-lle: Empfänger)
ihmiset | ihminen | Mensch | Nominativ Plural; -nen → -se-t
ihmisiä | ihminen | Mensch | Partitiv Plural (-iä); nach paljon
ikkunat | ikkuna | Fenster | Nominativ Plural (-t)
ikkunoita | ikkuna | Fenster | Partitiv Plural (-oita), wegen Verneinung
ikävöin | ikävöidä | vermissen | Verb Typ 2, Präsens 1. Sg.; + Partitiv
illalla | ilta | abends | Adessiv als Zeitangabe; Stufenwechsel lt → ll
illan | ilta | Abend | Genitiv-Akkusativ (koko illan = den ganzen Abend, Dauer); lt → ll
isoissa | iso | groß | Inessiv Plural (Kongruenz mit dem Nomen)
isoja | iso | groß | Partitiv Plural (Prädikativ bei Plural-Subjekt)
isot | iso | groß | Nominativ Plural (-t)
isoäitini | isoäiti | Großmutter | Nominativ Sg. + Possessivsuffix -ni („meine Großmutter“)
istuin | istua | sitzen | Verb Typ 1, Imperfekt 1. Sg. (saß)
isä | isä | Vater | Nominativ Sg.
ja | ja | und | Konjunktion
jo | jo | schon | Adverb
join | juoda | trinken | Verb Typ 2, Imperfekt 1. Sg. (trank)
joista | joka | aus denen | Relativpronomen, Elativ Plural
joka | joka | jede(r); welche(r) | hier: unveränderliches „jeder“ (joka sunnuntai)
jos | jos | wenn, falls | Konjunktion
joten | joten | deshalb, sodass | Konjunktion
juna | juna | Zug | Nominativ Sg.
junalla | juna | Zug | Adessiv: „mit dem Zug“ (Verkehrsmittel)
juo | juoda | trinken | Verb Typ 2, Präsens 3. Sg.
juon | juoda | trinken | Verb Typ 2, Präsens 1. Sg.
järven | järvi | See | Genitiv Sg. (-i → -e-n)
järvi | järvi | See | Nominativ Sg.
järvissä | järvi | See | Inessiv Plural (-i-ssä)
järviä | järvi | See | Partitiv Plural (-iä)
kahvia | kahvi | Kaffee | Partitiv Sg. (Stoff, nach Zahl oder Verneinung)
kaikille | kaikki | alle | Allativ Plural (Kongruenz mit ystävilleen)
kaksi | kaksi | zwei | Zahlwort; danach Partitiv Sg.
kalaa | kala | Fisch | Partitiv Sg. (Stoff, Speise)
kanssa | kanssa | mit (zusammen) | Postposition + Genitiv
katsomme | katsoa | (an)schauen | Verb Typ 1, Präsens 1. Pl.
katsotko | katsoa | (an)schauen | Verb Typ 1, Präsens 2. Sg. + Fragepartikel -ko
kaupassa | kauppa | Laden | Inessiv Sg.; Stufenwechsel pp → p
kaupoissa | kauppa | Laden | Inessiv Plural; a → o, pp → p
kaupungeissa | kaupunki | Stadt | Inessiv Plural; nk → ng, i → e + Plural-i
kaupungin | kaupunki | Stadt | Genitiv Sg.; Stufenwechsel nk → ng
keitto | keitto | Suppe | Nominativ Sg.
keitän | keittää | kochen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
kello | kello | Uhr | Nominativ; kello kuusi = um sechs Uhr
kenen | kuka | wessen | Genitiv von kuka
kengät | kenkä | Schuh | Nominativ Plural (-t); Stufenwechsel nk → ng
kenkiä | kenkä | Schuh | Partitiv Plural (-iä), starke Stufe nk
kerroin | kertoa | erzählen | Verb Typ 1, Imperfekt 1. Sg.; Stufenwechsel rt → rr
keskusta | keskusta | Zentrum | Nominativ Sg.
keskustassa | keskusta | Zentrum | Inessiv (-ssa: „im Zentrum“)
kesällä | kesä | im Sommer | Adessiv als Zeitangabe
kielillä | kieli | Sprache | Adessiv Plural („in … Sprachen“)
kiitos | kiitos | danke | Interjektion / Nomen
kilon | kilo | Kilo | Genitiv-Akkusativ (ganzes Objekt)
kirja | kirja | Buch | Nominativ Sg.
kirjaa | kirja | Buch | Partitiv Sg. (unvollendete Handlung)
kirjan | kirja | Buch | Genitiv Sg. / Genitiv-Akkusativ (ganzes Objekt)
kirjastossa | kirjasto | Bibliothek | Inessiv (-ssa: „in“)
kirjat | kirja | Buch | Nominativ Plural (-t)
kirjeen | kirje | Brief | Genitiv-Akkusativ (-e → -ee-n)
kirjettä | kirje | Brief | Partitiv Sg. (-ttä bei -e-Wörtern)
kirjoitan | kirjoittaa | schreiben | Verb Typ 1, Präsens 1. Sg.; tt → t
kirjoitin | kirjoittaa | schreiben | Verb Typ 1, Imperfekt 1. Sg.; tt → t
kirjoja | kirja | Buch | Partitiv Plural (a → o + j + a)
kissa | kissa | Katze | Nominativ Sg.
koira | koira | Hund | Nominativ Sg.
koirista | koira | Hund | Elativ Plural (-i-sta); pitää + Elativ
koko | koko | ganz | unveränderliches Adjektiv (koko päivän = den ganzen Tag)
kolme | kolme | drei | Zahlwort; danach Partitiv Sg.
korjaan | korjata | reparieren | Verb Typ 4, Präsens 1. Sg.
koska | koska | weil | Konjunktion
kotiin | koti | nach Hause | Illativ (-in: „nach Hause“)
kotona | koti | zu Hause | Essiv (-na), fester Ausdruck „zu Hause“
kuinka | kuinka | wie | Fragewort (kuinka monta = wie viele)
kukat | kukka | Blume | Nominativ Plural; Stufenwechsel kk → k
kukkia | kukka | Blume | Partitiv Plural (-ia), starke Stufe kk
kupin | kuppi | Tasse | Genitiv-Akkusativ; Stufenwechsel pp → p
kuulostaa | kuulostaa | klingen | Verb Typ 1, Präsens 3. Sg.; + Ablativ
kuusi | kuusi | sechs | Zahlwort
kuussa | kuu | Monat | Inessiv (viime kuussa = letzten Monat)
kylään | kylä | Besuch (wörtl. Dorf) | Illativ; tulla kylään = zu Besuch kommen
kynällä | kynä | Stift | Adessiv: „mit dem Stift“ (Werkzeug)
kysy | kysyä | fragen | Imperativ 2. Sg.; + Ablativ (jemanden fragen)
kysymystä | kysymys | Frage | Partitiv Sg. (-tä nach Konsonant)
kävelimme | kävellä | gehen, spazieren | Verb Typ 3, Imperfekt 1. Pl.
käyn | käydä | gehen, besuchen | Verb Typ 2, Präsens 1. Sg.
käytän | käyttää | benutzen | Verb Typ 1, Präsens 1. Sg.; tt → t; + Partitiv
lahjat | lahja | Geschenk | Nominativ Plural (ganzes Plural-Objekt)
lainaan | lainata | leihen | Verb Typ 4, Präsens 1. Sg.; jollekulle = jemandem leihen
laita | laittaa | stellen, legen | Imperativ 2. Sg.; tt → t
laittaa | laittaa | stellen, legen | Verb Typ 1, Präsens 3. Sg.
laivoilla | laiva | Schiff | Adessiv Plural („mit Schiffen“); a → o
lapsen | lapsi | Kind | Genitiv Sg. (lapsi → lapse-n)
lapset | lapsi | Kind | Nominativ Plural
lasi | lasi | Glas | Nominativ / Akkusativ (Objekt beim Imperativ)
lasin | lasi | Glas | Genitiv-Akkusativ
lasta | lapsi | Kind | Partitiv Sg. (unregelmäßig), nach Zahlen
lauantaina | lauantai | am Samstag | Essiv (-na) bei Wochentagen
laukku | laukku | Tasche | Nominativ Sg.
lehtiä | lehti | Blatt | Partitiv Plural (-iä)
leikkivät | leikkiä | spielen | Verb Typ 1, Präsens 3. Pl.
leipää | leipä | Brot | Partitiv Sg. (Stoff); starke Stufe p (Gen. leivän)
Liisan | Liisa | Liisa | Genitiv (-n): „Liisas“
litran | litra | Liter | Genitiv-Akkusativ
luen | lukea | lesen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel k → –
luin | lukea | lesen | Verb Typ 1, Imperfekt 1. Sg.
luo | luo | zu (jemandem hin) | Postposition + Genitiv
luokseni | luo | zu mir | Postposition luo + Suffix -ni (luokse-)
lähdetään | lähteä | aufbrechen, losgehen | Passiv Präsens: „Lasst uns gehen“; Stufenwechsel ht → hd
lähellä | lähellä | in der Nähe | Postposition + Genitiv / Adverb
lähtee | lähteä | abfahren, losgehen | Verb Typ 1, Präsens 3. Sg.
läpi | läpi | durch | Postposition + Genitiv
löydä | löytää | finden | Verneinte Form (en löydä); Stufenwechsel t → d
maanantaina | maanantai | am Montag | Essiv (-na) bei Wochentagen
maitoa | maito | Milch | Partitiv Sg. (Stoff); starke Stufe t
mansikoita | mansikka | Erdbeere | Partitiv Plural (-oita)
Mari | Mari | Mari (Name) | Eigenname, Nominativ
matkustimme | matkustaa | reisen | Verb Typ 1, Imperfekt 1. Pl.
mehua | mehu | Saft | Partitiv Sg. (Stoff nach Mengenangabe)
meidän | me | unser | Genitiv von me (+ Suffix -mme am Nomen)
menee | mennä | gehen, fahren | Verb Typ 3, Präsens 3. Sg.
menen | mennä | gehen, fahren | Verb Typ 3, Präsens 1. Sg.
meni | mennä | gehen | Imperfekt 3. Sg. (meni rikki = ging kaputt)
metsiä | metsä | Wald | Partitiv Plural (-iä)
mielelläni | mielellään | gern | Adverb + Suffix -ni („ich gern“)
mielestä | mieli | nach Meinung | Postposition-artig + Genitiv (Elativ von mieli)
mikä | mikä | was, welche(r) | Fragepronomen, Nominativ
minua | minä | mich | Partitiv (odottaa + Partitiv)
minulla | minä | ich habe (bei mir) | Adessiv (minulla on = ich habe)
minun | minä | mein | Genitiv (+ Suffix -ni am Nomen)
minä | minä | ich | Personalpronomen 1. Sg.
missä | mikä | wo | Inessiv von mikä: „wo?“
monilla | moni | viele | Adessiv Plural (Kongruenz mit kielillä)
monta | moni | viele | Partitiv Sg.; monta + Partitiv Sg. (wie Zahlen)
mutta | mutta | aber | Konjunktion
muutin | muuttaa | umziehen | Verb Typ 1, Imperfekt 1. Sg.; tt → t
myös | myös | auch | Adverb
mökillä | mökki | Sommerhütte | Adessiv (äußerer Kasus); Stufenwechsel kk → k
naapurilta | naapuri | Nachbar | Ablativ (-lta: „von“)
naapurin | naapuri | Nachbar | Genitiv Sg. (Besitz)
nimesi | nimi | Name | Nominativ + Possessivsuffix -si („dein Name“); i → e
nimi | nimi | Name | Nominativ Sg.
nukkuu | nukkua | schlafen | Verb Typ 1, Präsens 3. Sg.
nyt | nyt | jetzt | Adverb
näkyy | näkyä | zu sehen sein | Verb Typ 1, Präsens 3. Sg.
nämä | tämä | diese (Pl.) | Demonstrativpronomen, Nominativ Plural
näytät | näyttää | aussehen | Verb Typ 1, Präsens 2. Sg.; + Ablativ; tt → t
odota | odottaa | warten | Imperativ 2. Sg.; + Partitiv; tt → t
odotamme | odottaa | warten | Präsens 1. Pl.; tt → t
odotan | odottaa | warten | Präsens 1. Sg.; tt → t
ole | olla | sein | Verneinte Form / Imperativ (ei ole)
olemme | olla | sein | Präsens 1. Pl.
oli | olla | sein | Imperfekt 3. Sg. (war; es gab)
ollut | olla | sein | Partizip Perfekt (ei ollut = war nicht / gab es nicht)
omani | oma | mein eigenes | oma + Suffix -ni (Akkusativ: meins)
omenaa | omena | Apfel | Partitiv Sg. (nach Zahlen)
omenan | omena | Apfel | Genitiv-Akkusativ (ganzer Apfel)
on | olla | sein; haben (mit Adessiv) | Präsens 3. Sg.
opettaja | opettaja | Lehrer(in) | Nominativ Sg.
opettajalta | opettaja | Lehrer(in) | Ablativ (kysyä + Ablativ)
opettajan | opettaja | Lehrer(in) | Genitiv Sg.
ostaa | ostaa | kaufen | Infinitiv / Präsens 3. Sg.
ostan | ostaa | kaufen | Präsens 1. Sg.
ostin | ostaa | kaufen | Imperfekt 1. Sg.
otin | ottaa | nehmen | Imperfekt 1. Sg.; tt → t
ovat | olla | sein | Präsens 3. Pl.
paljon | paljon | viel(e) | Mengenwort; danach Partitiv
Pekan | Pekka | Pekka | Genitiv; Stufenwechsel kk → k
perunoita | peruna | Kartoffel | Partitiv Plural (-oita)
pestä | pestä | waschen, putzen | Verb Typ 3, Infinitiv
pidän | pitää | mögen | Präsens 1. Sg.; + Elativ; Stufenwechsel t → d
pienillä | pieni | klein | Adessiv Plural (Kongruenz)
pihalla | piha | Hof | Adessiv (äußerer Kasus: „im Hof“)
pojan | poika | Junge, Sohn | Genitiv; Stufenwechsel k → j
puhelimen | puhelin | Telefon, Handy | Genitiv-Akkusativ; -in → -ime-n
puhuu | puhua | sprechen | Präsens 3. Sg.; Sprache + Partitiv
puissa | puu | Baum | Inessiv Plural (uu → u + i)
puiston | puisto | Park | Genitiv (vor Postposition läpi)
pysäkillä | pysäkki | Haltestelle | Adessiv; Stufenwechsel kk → k
pyydä | pyytää | bitten | Imperativ 2. Sg.; Stufenwechsel t → d; + Ablativ (von jemandem)
pyörällä | pyörä | Fahrrad | Adessiv: „mit dem Fahrrad“
pyörän | pyörä | Fahrrad | Genitiv-Akkusativ (ganzes Objekt)
päivän | päivä | Tag | Genitiv-Akkusativ (koko päivän = den ganzen Tag, Dauer)
pääkaupunki | pääkaupunki | Hauptstadt | Nominativ Sg.
pöydälle | pöytä | Tisch | Allativ (-lle: „auf … hin“); Stufenwechsel t → d
pöydällä | pöytä | Tisch | Adessiv (-llä: „auf“); Stufenwechsel t → d
pöydältä | pöytä | Tisch | Ablativ (-ltä: „von … weg“); Stufenwechsel t → d
rakastan | rakastaa | lieben | Präsens 1. Sg.; immer + Partitiv
rannalla | ranta | Ufer, Strand | Adessiv; Stufenwechsel nt → nn
rannalle | ranta | Ufer, Strand | Allativ; Stufenwechsel nt → nn
rannoilla | ranta | Ufer, Strand | Adessiv Plural; nt → nn, a → o
rikki | rikki | kaputt | Adverb (mennä rikki = kaputtgehen)
ruotsia | ruotsi | Schwedisch | Partitiv (puhua + Partitiv)
saanut | saada | bekommen | Partizip Perfekt (en saanut = ich bekam nicht)
saarelle | saari | Insel | Allativ (-lle: „zu“)
saarelta | saari | Insel | Ablativ (-lta: „von“)
sain | saada | bekommen | Imperfekt 1. Sg.
sairaalassa | sairaala | Krankenhaus | Inessiv (-ssa: „im“)
sen | se | es | Genitiv-Akkusativ von se (ganzes Objekt)
sieltä | siellä | von dort | Ablativ-artiges Ortsadverb („von dort“)
siinä | se | darin, dort | Inessiv von se („in ihr/darin“)
siivosin | siivota | putzen, aufräumen | Verb Typ 4, Imperfekt 1. Sg.
sinne | sinne | dorthin | Ortsadverb („wohin?“)
sinua | sinä | dich | Partitiv (rakastaa, auttaa, odottaa + Partitiv)
sinulla | sinä | du hast (bei dir) | Adessiv (sinulla on = du hast)
sinulle | sinä | dir | Allativ (Empfänger)
sinun | sinä | dein | Genitiv (+ Suffix -si am Nomen)
sitä | se | es, ihn | Partitiv von se (wegen Verneinung)
soitan | soittaa | anrufen | Präsens 1. Sg.; + Allativ; tt → t
soitti | soittaa | anrufen | Imperfekt 3. Sg.
sokeria | sokeri | Zucker | Partitiv Sg. (Stoff)
sukkia | sukka | Socke | Partitiv Plural (-ia)
sunnuntai | sunnuntai | Sonntag | Nominativ (joka sunnuntai = jeden Sonntag)
sunnuntaina | sunnuntai | am Sonntag | Essiv (-na) bei Wochentagen
suolaa | suola | Salz | Partitiv Sg. (Stoff)
suomalaisista | suomalainen | finnisch | Elativ Plural (Kongruenz); -nen → -se- → -si-
suomea | suomi | Finnisch | Partitiv (puhua + Partitiv); i → e
suomen | Suomi | Finnland | Genitiv (-n)
suomessa | Suomi | Finnland | Inessiv (-ssa: „in Finnland“)
syntymäpäivä | syntymäpäivä | Geburtstag | Nominativ Sg.
syön | syödä | essen | Verb Typ 2, Präsens 1. Sg.
sängyn | sänky | Bett | Genitiv; Stufenwechsel nk → ng
söin | syödä | essen | Imperfekt 1. Sg. (aß)
taloissa | talo | Haus | Inessiv Plural (-i-ssa)
talomme | talo | Haus | Nominativ + Possessivsuffix -mme („unser Haus“)
talon | talo | Haus | Genitiv (vor Postposition edessä)
talot | talo | Haus | Nominativ Plural (-t)
talvella | talvi | im Winter | Adessiv als Zeitangabe
Tampereelle | Tampere | Tampere | Allativ (Stadt mit äußeren Kasus)
tapasin | tavata | treffen | Verb Typ 4, Imperfekt 1. Sg.; Stufenwechsel v → p
tarvitsee | tarvita | brauchen | Präsens 3. Sg.; + Partitiv
tarvitsen | tarvita | brauchen | Präsens 1. Sg.; + Partitiv
teetä | tee | Tee | Partitiv Sg. (-tä nach langem Vokal)
tehtävä | tehtävä | Aufgabe | Nominativ Sg.
televisiota | televisio | Fernseher | Partitiv Sg.
tietokoneella | tietokone | Computer | Adessiv („am/mit dem Computer“)
torilla | tori | Markt(platz) | Adessiv (äußerer Kasus: „auf dem Markt“)
torille | tori | Markt(platz) | Allativ („auf den Markt“)
torilta | tori | Markt(platz) | Ablativ („vom Markt“)
tulevat | tulla | kommen | Präsens 3. Pl.
tuli | tulla | kommen | Imperfekt 3. Sg.
tuoretta | tuore | frisch | Partitiv Sg. (-tta bei -e-Wörtern), Kongruenz mit leipää
työkaverini | työkaveri | Arbeitskollege | Nominativ Plural + Suffix -ni („meine Kollegen“)
työpaikan | työpaikka | Arbeitsstelle | Genitiv-Akkusativ; kk → k
työskentelee | työskennellä | arbeiten | Verb Typ 3, Präsens 3. Sg.; nn → nt
tämä | tämä | dies(e/er) | Demonstrativpronomen, Nominativ
tätä | tämä | dies(e/en) | Partitiv (wegen Verneinung)
täällä | täällä | hier | Ortsadverb
töihin | työ | zur Arbeit | Illativ Plural (töihin = zur Arbeit)
uimaan | uida | schwimmen | 3. Infinitiv Illativ (-maan: „zum Schwimmen“)
uivat | uida | schwimmen | Präsens 3. Pl.
unohda | unohtaa | vergessen | Verneinter Imperativ (älä unohda); Stufenwechsel ht → hd
useammin | usein | öfter | Komparativ von usein
usein | usein | oft | Adverb
uuden | uusi | neu | Genitiv-Akkusativ (Kongruenz)
uudet | uusi | neu | Nominativ Plural
uusissa | uusi | neu | Inessiv Plural
uutiset | uutinen | Neuigkeit | Nominativ Plural (ganzes Objekt)
valmiiksi | valmis | fertig | Translativ (-ksi: „fertig werden“)
vanha | vanha | alt | Nominativ Sg.
vanhemmilleni | vanhemmat | Eltern | Allativ Plural + Suffix -ni; mp → mm
vanhoista | vanha | alt | Elativ Plural (a → o)
vanhoja | vanha | alt | Partitiv Plural (a → o)
vanhojen | vanha | alt | Genitiv Plural
vasta | vasta | erst | Adverb
veljelläni | veli | Bruder | Adessiv + Suffix -ni („mein Bruder hat“)
veljen | veli | Bruder | Genitiv-Akkusativ; veli → velje-n
veljeä | veli | Bruder | Partitiv Sg. (nach kuinka monta)
Venäjällä | Venäjä | Russland | Adessiv (Land mit äußerem Kasus)
vettä | vesi | Wasser | Partitiv Sg. (unregelmäßig)
vielä | vielä | noch | Adverb
vien | viedä | bringen (weg) | Verb Typ 2, Präsens 1. Sg.
vieressä | vieressä | neben | Postposition + Genitiv
vietin | viettää | verbringen | Imperfekt 1. Sg.; tt → t
vihanneksia | vihannes | Gemüse | Partitiv Plural
viikolla | viikko | in der Woche | Adessiv als Zeitangabe; kk → k
viikonloppuisin | viikonloppu | am Wochenende (regelmäßig) | Adverb (instruktiver Plural -isin)
viikonlopun | viikonloppu | Wochenende | Genitiv-Akkusativ (Dauer); pp → p
viime | viime | letzte(r) | unveränderliches Adjektiv
voinko | voida | können | Präsens 1. Sg. + Fragepartikel -ko
vähän | vähän | ein bisschen | Mengenwort; danach Partitiv
väsyneeltä | väsynyt | müde | Ablativ (näyttää + Ablativ); -nut → -nee-
yhä | yhä | immer (noch) | Adverb (yhä useammin = immer öfter)
ymmärrä | ymmärtää | verstehen | Verneinte Form (en ymmärrä); rt → rr
ystävieni | ystävä | Freund | Genitiv Plural + Suffix -ni
ystäville | ystävä | Freund | Allativ Plural
ystävilleen | ystävä | Freund | Allativ Plural + Suffix -en („seinen/ihren“)
ystäviäni | ystävä | Freund | Partitiv Plural + Suffix -ni
ystävälleni | ystävä | Freund | Allativ Sg. + Suffix -ni („meinem Freund“)
ystävällisiä | ystävällinen | freundlich | Partitiv Plural (Prädikativ)
ystävältä | ystävä | Freund | Ablativ („von einem Freund“)
ystäväni | ystävä | Freund | Genitiv Sg. + Suffix -ni (vor luo)
yöllä | yö | nachts | Adessiv als Zeitangabe
äidille | äiti | Mutter | Allativ; Stufenwechsel t → d
äidilleni | äiti | Mutter | Allativ + Suffix -ni
äidin | äiti | Mutter | Genitiv; Stufenwechsel t → d
äitini | äiti | Mutter | Nominativ + Suffix -ni („meine Mutter“)
älä | ei (Verneinungsverb) | nicht (Imperativ) | Verneinter Imperativ 2. Sg.
`,
  texts: [
    {
      id: "txt-p3-1",
      title: "Lauantai torilla",
      topic: "aeussere-lokalkasus",
      level: 4,
      fi: "Lauantaina Mari menee aamulla torille. Hän menee sinne bussilla. Torilla on paljon ihmisiä.\n\nMari ostaa kilon perunoita ja vähän kalaa. Hän ostaa myös kukkia äidille, koska äidin syntymäpäivä on sunnuntaina.\n\nKotona Mari laittaa kukat pöydälle ja juo kupin kahvia.",
      de: "Am Samstag geht Mari morgens auf den Markt. Sie fährt mit dem Bus dorthin. Auf dem Markt sind viele Menschen.\n\nMari kauft ein Kilo Kartoffeln und ein bisschen Fisch. Sie kauft auch Blumen für ihre Mutter, weil die Mutter am Sonntag Geburtstag hat.\n\nZu Hause stellt Mari die Blumen auf den Tisch und trinkt eine Tasse Kaffee.",
      questions: [
        { q: "Wie kommt Mari zum Markt?", options: ["Zu Fuß", "Mit dem Bus", "Mit dem Fahrrad"], answer: 1, why: "„Hän menee sinne bussilla.“ – bussilla = mit dem Bus (Adessiv)." },
        { q: "Was kauft Mari für ihre Mutter?", options: ["Fisch", "Kaffee", "Blumen"], answer: 2, why: "„Hän ostaa myös kukkia äidille“ – äidille = für die Mutter (Allativ)." },
        { q: "Wann hat die Mutter Geburtstag?", options: ["Am Sonntag", "Am Samstag", "Am Montag"], answer: 0, why: "„äidin syntymäpäivä on sunnuntaina“." },
        { q: "Wohin stellt Mari die Blumen?", options: ["Ans Fenster", "Auf den Tisch", "In die Küche"], answer: 1, why: "„laittaa kukat pöydälle“ – pöydälle = auf den Tisch (Allativ)." },
      ],
    },
    {
      id: "txt-p3-2",
      title: "Uusi koti Tampereella",
      topic: "plural",
      level: 6,
      fi: "Viime kuussa muutin Tampereelle, koska sain sieltä uuden työpaikan. Asuntoni on keskustassa, aseman lähellä. Siinä on kaksi huonetta ja isot ikkunat, joista näkyy järvi.\n\nAamuisin menen töihin pyörällä, mutta talvella käytän bussia. Työkaverini ovat ystävällisiä, ja he ovat auttaneet minua paljon. Viikonloppuisin käyn torilla ja ostan vihanneksia ja tuoretta leipää.\n\nIkävöin vielä vanhoja ystäviäni Helsingissä, mutta soitan heille usein. Ensi kuussa he tulevat luokseni kylään.",
      de: "Letzten Monat bin ich nach Tampere gezogen, weil ich dort eine neue Stelle bekommen habe. Meine Wohnung liegt im Zentrum, in der Nähe des Bahnhofs. Sie hat zwei Zimmer und große Fenster, aus denen man einen See sieht.\n\nMorgens fahre ich mit dem Fahrrad zur Arbeit, aber im Winter nehme ich den Bus. Meine Kollegen sind freundlich und haben mir sehr geholfen. Am Wochenende gehe ich auf den Markt und kaufe Gemüse und frisches Brot.\n\nIch vermisse meine alten Freunde in Helsinki noch, aber ich rufe sie oft an. Nächsten Monat kommen sie mich besuchen.",
      questions: [
        { q: "Warum ist die Person nach Tampere gezogen?", options: ["Wegen einer neuen Arbeitsstelle", "Wegen des Studiums", "Wegen der Familie"], answer: 0, why: "„sain sieltä uuden työpaikan“ – ich habe dort eine neue Stelle bekommen (Genitiv-Akkusativ)." },
        { q: "Wie kommt die Person im Winter zur Arbeit?", options: ["Mit dem Fahrrad", "Mit dem Auto", "Mit dem Bus"], answer: 2, why: "„talvella käytän bussia“ – im Winter benutze ich den Bus (Partitiv nach käyttää)." },
        { q: "Was sieht man aus den Fenstern?", options: ["Den Bahnhof", "Einen See", "Den Markt"], answer: 1, why: "„isot ikkunat, joista näkyy järvi“." },
        { q: "Wer kommt nächsten Monat zu Besuch?", options: ["Die Kollegen", "Die Eltern", "Die alten Freunde aus Helsinki"], answer: 2, why: "„Ikävöin vielä vanhoja ystäviäni Helsingissä … Ensi kuussa he tulevat luokseni kylään.“" },
      ],
    },
  ],
  families: [],
};
