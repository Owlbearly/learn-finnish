import type { ContentPack, Gap, Sentence } from "../types";

const g = (answer: string, options: string[], why: string): Gap => ({ answer, options, why });

function s(
  id: string,
  topic: string,
  fi: string,
  de: string,
  level: number,
  gap?: Gap,
  extra: { note?: string; alt?: string[] } = {},
): Sentence {
  return { id, topic, fi, de, level, ...(gap ? { gap } : {}), ...extra };
}

const VTY = "verbtypen";
const AST = "stufenwechsel";
const POS = "postpositionen";
const ESS = "essiv-translativ";
const PSX = "possessivsuffixe";

export const pack: ContentPack = {
  name: "p4-forms",
  topics: [
    {
      id: VTY,
      kind: "grammar",
      title: "Verbtypen 2–6",
      titleFi: "verbityypit 2–6",
      order: 14,
      level: 4,
      icon: "🔧",
      summary: "Wie man syödä, tulla, haluta, tarvita und vanheta im Präsens konjugiert.",
      explanation: `### Der Präsensstamm entscheidet

Finnische Verben werden nach der Endung des Infinitivs in sechs Typen eingeteilt. Typ 1 (puhua, asua) kennst du schon. Bei allen Typen gilt: Man bildet zuerst den **Präsensstamm** und hängt dann die Personalendungen an.

| Person | Endung |
| minä | -n |
| sinä | -t |
| hän | Vokal verlängert (bzw. Stamm) |
| me | -mme |
| te | -tte |
| he | -vat / -vät |

### Die Typen 2–6

| Typ | Infinitiv | Stamm | minä | hän | he |
| 2 (-da/-dä) | syödä | syö- | syön | syö | syövät |
| 2 | tehdä | tee-/teke- | teen | tekee | tekevät |
| 2 | nähdä | näe-/näke- | näen | näkee | näkevät |
| 3 (-la, -na, -ra, -sta) | tulla | tule- | tulen | tulee | tulevat |
| 3 | nousta | nouse- | nousen | nousee | nousevat |
| 4 (Vokal + -ta) | haluta | halua- | haluan | haluaa | haluavat |
| 4 | tavata | tapaa- | tapaan | tapaa | tapaavat |
| 5 (-ita/-itä) | tarvita | tarvitse- | tarvitsen | tarvitsee | tarvitsevat |
| 6 (-eta/-etä) | vanheta | vanhene- | vanhenen | vanhenee | vanhenevat |

### Merkregeln
- **Typ 2**: -da/-dä weg, fertig: *juo-da → juon*. In der 3. Person Sg. wird nichts verlängert, wenn der Stamm schon auf Langvokal/Diphthong endet: *hän syö, hän juo*. Ausnahmen: **tehdä** und **nähdä** (*teen – tekee*, *näen – näkee*).
- **Typ 3**: Infinitivendung weg, **-e-** dazu: *tul-la → tule-*, *mennä → mene-*, *opiskel-la → opiskele-*, *nous-ta → nouse-*.
- **Typ 4**: -ta weg, Stammvokal **verdoppelt** sich: *halu-ta → halua-*, *herä-tä → herää-*. Oft „umgekehrter“ Stufenwechsel: *tavata → tapaan*.
- **Typ 5**: -ta weg, **-tse-** dazu: *tarvi-ta → tarvitse-*, *vali-ta → valitse-*.
- **Typ 6**: -ta weg, **-ne-** dazu: *vanhe-ta → vanhene-*. Diese Verben bedeuten meist „… werden“.

Beispiele: *Me teemme ruokaa.* – *Mitä te ajattelette?* – *Pelaatko tennistä?* – *Tarvitsen apua.* – *Me kaikki vanhenemme.*`,
    },
    {
      id: AST,
      kind: "grammar",
      title: "Stufenwechsel",
      titleFi: "astevaihtelu",
      order: 15,
      level: 4,
      icon: "🪜",
      summary: "kauppa → kaupassa, katu → kadulla: wie sich k, p, t im Wortinneren verändern.",
      explanation: `### Starke und schwache Stufe

Die Konsonanten **k, p, t** in der letzten Silbe eines Wortstamms wechseln oft zwischen einer **starken** und einer **schwachen** Stufe. Grundregel: Wird die Silbe durch eine Endung **geschlossen** (Endung beginnt mit Konsonant + es folgt kein Vokal, z. B. -ssa, -lla, -n, -t, -mme), steht meist die **schwache** Stufe. Bleibt die Silbe **offen** (z. B. Partitiv -a, Illativ -Vn, 3. Person -Vv), bleibt die **starke** Stufe.

| stark | schwach | Beispiel |
| kk | k | nukkua → nukun |
| pp | p | kauppa → kaupassa |
| tt | t | katto → katolla |
| k | – | lukea → luen; joki → joessa |
| p | v | leipä → leivän |
| t | d | katu → kadulla; pöytä → pöydällä |
| nk | ng | Helsinki → Helsingissä |
| mp | mm | lampi → lammessa |
| lt | ll | ilta → illalla |
| nt | nn | ranta → rannalla |
| rt | rr | kerta → kerran |

### Wo bleibt es stark?
- **Partitiv**: *kauppaa, lippua, kertaa*
- **Illativ**: *kauppaan, Helsinkiin, rantaan*
- **3. Person Verb**: *hän lukee, hän nukkuu, hän ymmärtää*

### Umgekehrter Stufenwechsel
Bei Verben vom Typ 4 und Nomen auf -as/-e (z. B. *hammas, sade*) ist es umgekehrt: Die **Grundform ist schwach**, die gebeugten Formen sind **stark**:

| Grundform | gebeugt |
| tavata | tapaan, tapaamme |
| hammas | hampaat, hampaan |
| sade | sateen |

Beispiele: *Asun Helsingissä.* – *Istumme rannalla.* – *Luen kirjaa, hän lukee lehteä.* – *Tapaan hänet huomenna.*`,
    },
    {
      id: POS,
      kind: "grammar",
      title: "Postpositionen",
      titleFi: "postpositiot",
      order: 16,
      level: 5,
      icon: "📍",
      summary: "ystävän kanssa, pöydän päällä, ilman sokeria: Ortsangaben und mehr mit Genitiv.",
      explanation: `### Genitiv + Postposition

Wo Deutsch Präpositionen benutzt („mit“, „wegen“, „unter“), hat Finnisch meist **Postpositionen**: Sie stehen **nach** dem Wort, und dieses steht im **Genitiv** (-n).

| Postposition | Bedeutung | Beispiel |
| kanssa | mit (zusammen) | ystävän kanssa |
| takia | wegen | sateen takia |
| jälkeen | nach (zeitlich) | työn jälkeen |
| kautta | über, via | Tampereen kautta |
| luona / luokse / luota | bei / zu / von (Person) | lääkärin luona |

### Ortspostpositionen in drei Formen
Viele Ortswörter haben – wie die Ortsfälle – drei Formen: **wo? wohin? woher?**

| wo? | wohin? | woher? | Bedeutung |
| päällä | päälle | päältä | auf |
| alla | alle | alta | unter |
| vieressä | viereen | vierestä | neben |
| edessä | eteen | edestä | vor |
| takana | taakse | takaa | hinter |
| sisällä | sisälle | sisältä | in, drinnen |

*Kissa nukkuu sängyn alla* (wo?) – *Kissa juoksee sängyn alle* (wohin?).

### Präpositionen mit Partitiv
Einige Wörter stehen **vor** dem Nomen und verlangen den **Partitiv**:
- **ennen** + Partitiv: *ennen ruokaa* (vor dem Essen), *ennen kuutta* (vor sechs)
- **ilman** + Partitiv: *ilman sokeria* (ohne Zucker)

Achtung: *ennen* kann auch nachgestellt mit Genitiv stehen (*sen ennen*), aber üblich ist die Präposition mit Partitiv. *jälkeen* steht dagegen immer nach dem Genitiv: *ruoan jälkeen*.

Beispiele: *Pankki on aseman vieressä.* – *Juna on myöhässä lumen takia.* – *Juon kahvia ilman sokeria.*`,
    },
    {
      id: ESS,
      kind: "grammar",
      title: "Essiv & Translativ",
      titleFi: "essiivi ja translatiivi",
      order: 19,
      level: 6,
      icon: "🦋",
      summary: "lapsena (als Kind), maanantaina (am Montag), lääkäriksi (zum Arzt werden), suomeksi (auf Finnisch).",
      explanation: `### Essiv: -na / -nä („als“, Zustand, Zeitpunkt)

Der **Essiv** drückt eine Rolle oder einen (vorübergehenden) Zustand aus – deutsch meist „als …“. Außerdem steht er bei vielen **Zeitangaben**.

| Grundform | Essiv | Bedeutung |
| lapsi | lapsena | als Kind |
| opettaja | opettajana | als Lehrer(in) |
| sairas | sairaana | krank (vorübergehend) |
| maanantai | maanantaina | am Montag |
| joulu | jouluna | an Weihnachten |
| tämä vuosi | tänä vuonna | dieses Jahr |

Der Essiv wird an den **starken Stamm** gehängt (wie der Partitiv): *vuosi → vuonna*, *lapsi → lapsena*.

### Translativ: -ksi („zu etwas werden“)

Der **Translativ** bezeichnet eine **Veränderung**: Etwas wird zu etwas. Er wird an den Genitivstamm gehängt (meist schwache Stufe).

| Grundform | Translativ | Beispiel |
| isä | isäksi | tulla isäksi – Vater werden |
| kylmä | kylmäksi | muuttua kylmäksi – kalt werden |
| sairaanhoitaja | sairaanhoitajaksi | opiskella sairaanhoitajaksi |
| valkoinen | valkoiseksi | maalata valkoiseksi |
| suomi | suomeksi | auf Finnisch |
| viikko | viikoksi | für eine Woche |

### Typische Verben
- **tulla** + Translativ: werden (*Hän tuli sairaaksi.*)
- **muuttua** + Translativ: sich verwandeln (*Vesi muuttuu jääksi.*)
- **opiskella / valmistua** + Translativ: Ausbildung zu …
- **pitää** jotakin **jonakin** (Essiv): etwas für etwas halten

### Merke
*Olen opettajana* = ich bin (arbeite) als Lehrer – **Zustand**. *Tulen opettajaksi* = ich werde Lehrer – **Veränderung**. Sprachen: *puhua suomea* (Partitiv), aber *sanoa suomeksi* (Translativ: „ins Finnische übertragen“).`,
    },
    {
      id: PSX,
      kind: "grammar",
      title: "Possessivsuffixe",
      titleFi: "possessiivisuffiksit",
      order: 21,
      level: 6,
      icon: "🎒",
      summary: "kirjani, talossasi, äidilleen: „mein, dein, sein“ als Endung am Wort.",
      explanation: `### Besitz als Endung

Im geschriebenen Finnisch drückt man „mein, dein, sein …“ mit einem **Possessivsuffix** aus. Es steht **ganz am Ende** des Wortes, nach der Kasusendung.

| Person | Pronomen (Genitiv) | Suffix | Beispiel |
| 1. Sg. | (minun) | -ni | kirjani |
| 2. Sg. | (sinun) | -si | kirjasi |
| 3. Sg. | hänen | -nsa/-nsä | hänen kirjansa |
| 1. Pl. | (meidän) | -mme | kirjamme |
| 2. Pl. | (teidän) | -nne | kirjanne |
| 3. Pl. | heidän | -nsa/-nsä | heidän kirjansa |

In der 1. und 2. Person ist das Pronomen **optional** (*minun kirjani* = *kirjani*), in der 3. Person steht *hänen/heidän*, wenn der Besitzer **nicht** das Subjekt ist.

### Stamm und Kasus
Das Suffix hängt am **Vokalstamm** (meist starke Stufe): *nimi → nimeni*, *avain → avaimeni*, *äiti → äitini*. Endungen -n (Genitiv) und -t (Nom. Pl.) **fallen weg**: *kirjani* = mein Buch / meines Buchs / meine Bücher.

| Kasus | mein | dein |
| Inessiv | talossani | talossasi |
| Elativ | talostani | talostasi |
| Allativ | ystävälleni | ystävällesi |
| Partitiv | kotimaatani | kotimaatasi |

In der 3. Person kann nach kurzem Vokal statt -nsa auch **Vokaldehnung + n** stehen: *äidilleen*, *talossaan*.

### Reflexiv: „sein eigenes“
- *Hän otti kirjansa.* – Er nahm **sein eigenes** Buch (Suffix ohne *hänen*).
- *Hän otti hänen kirjansa.* – Er nahm **sein** (eines anderen) Buch.

Auch Postpositionen nehmen Suffixe: *meidän kanssamme* – mit uns.

In der Umgangssprache fallen die Suffixe oft weg (*mun kirja*), im Schriftfinnisch sind sie Pflicht.`,
    },
  ],
  sentences: [
    // ───────────── Verbtypen 2–6 ─────────────
    s("vty-001", VTY, "Minä syön aamulla puuroa.", "Ich esse morgens Haferbrei.", 4,
      g("syön", ["syö", "syövät", "syömme"], "syödä ist Typ 2: -dä fällt weg, Stamm syö-. Für minä kommt -n dazu: syön.")),
    s("vty-002", VTY, "Mitä sinä juot?", "Was trinkst du?", 4,
      g("juot", ["juon", "juo", "juotte"], "juoda (Typ 2), Stamm juo-. sinä → Endung -t: juot.")),
    s("vty-003", VTY, "Me teemme ruokaa yhdessä.", "Wir kochen zusammen.", 4,
      g("teemme", ["tekee", "teen", "tekevät"], "tehdä hat den Stamm tee- (minä, sinä, me, te) und teke- (hän, he). me → teemme."),
      { note: "„tehdä ruokaa“ (wörtlich: Essen machen) ist der übliche Ausdruck für „kochen“." }),
    s("vty-004", VTY, "Hän tekee töitä kotona.", "Er arbeitet von zu Hause aus.", 5,
      g("tekee", ["teen", "teemme", "tekevät"], "In der 3. Person Sg. hat tehdä den Stamm teke- mit verlängertem Vokal: hän tekee."),
      { note: "„tehdä töitä“ = arbeiten (wörtlich: Arbeiten machen), daneben auch „olla töissä“." }),
    s("vty-005", VTY, "Näetkö sinä tuon linnun?", "Siehst du den Vogel dort?", 5,
      g("Näetkö", ["Näkeekö", "Näenkö", "Näettekö"], "nähdä: Stamm näe- für sinä → näet, mit Fragepartikel -kö: näetkö."),
      { alt: ["Näetkö tuon linnun?"] }),
    s("vty-006", VTY, "He käyvät usein saunassa.", "Sie gehen oft in die Sauna.", 4,
      g("käyvät", ["käy", "käymme", "käyn"], "käydä (Typ 2), Stamm käy-. he → -vät (Vokalharmonie: ä): käyvät."),
      { note: "käydä = (regelmäßig) irgendwo hingehen und zurückkommen. Finnisch sagt „in der Sauna gehen“ (Inessiv)." }),
    s("vty-007", VTY, "Te syötte liian nopeasti.", "Ihr esst zu schnell.", 5,
      g("syötte", ["syömme", "syövät", "syö"], "te → Endung -tte an den Stamm syö-: syötte.")),
    s("vty-008", VTY, "Lapset juovat maitoa.", "Die Kinder trinken Milch.", 4,
      g("juovat", ["juo", "juomme", "juon"], "Subjekt im Plural (lapset = he) → -vat: juovat.")),
    s("vty-009", VTY, "Tulen kotiin kuudelta.", "Ich komme um sechs nach Hause.", 5,
      g("Tulen", ["Tulee", "Tulemme", "Tulla"], "tulla ist Typ 3: -la fällt weg, -e- kommt dazu: tule-. minä → tulen."),
      { alt: ["Minä tulen kotiin kuudelta.", "Tulen kotiin kello kuusi."] }),
    s("vty-010", VTY, "Mihin sinä menet?", "Wohin gehst du?", 4,
      g("menet", ["menen", "menee", "menette"], "mennä (Typ 3) → Stamm mene-. sinä → menet."),
      { alt: ["Minne sinä menet?", "Minne menet?"] }),
    s("vty-011", VTY, "Hän opiskelee suomea yliopistossa.", "Sie studiert Finnisch an der Universität.", 4,
      g("opiskelee", ["opiskelen", "opiskella", "opiskelevat"], "opiskella → Stamm opiskele-. hän: Vokal verlängert → opiskelee.")),
    s("vty-012", VTY, "Me opiskelemme joka ilta.", "Wir lernen jeden Abend.", 5,
      g("opiskelemme", ["opiskelee", "opiskelette", "opiskelevat"], "me → -mme an den Stamm opiskele-: opiskelemme.")),
    s("vty-013", VTY, "Mitä te ajattelette tästä?", "Was haltet ihr davon?", 5,
      g("ajattelette", ["ajattelee", "ajattelemme", "ajatella"], "ajatella (Typ 3) → Stamm ajattele-. te → ajattelette."),
      { note: "ajatella + Elativ (-sta) = über etwas denken, eine Meinung haben." }),
    s("vty-014", VTY, "Ajattelen sinua usein.", "Ich denke oft an dich.", 6,
      g("Ajattelen", ["Ajattelee", "Ajattelet", "Ajatella"], "minä → ajattelen."),
      { note: "„an jemanden denken“ = ajatella + Partitiv: ajattelen sinua.", alt: ["Minä ajattelen sinua usein."] }),
    s("vty-015", VTY, "Aurinko nousee kello viisi.", "Die Sonne geht um fünf Uhr auf.", 5,
      g("nousee", ["nousen", "nousevat", "nousta"], "nousta (Typ 3, -sta): -ta fällt weg, -e- kommt dazu: nouse-. hän → nousee."),
      { alt: ["Aurinko nousee viideltä."] }),
    s("vty-016", VTY, "Nousen bussiin rautatieasemalla.", "Ich steige am Bahnhof in den Bus.", 6,
      g("Nousen", ["Nousee", "Nousemme", "Nousta"], "nousta → nouse-. minä → nousen."),
      { note: "nousta bussiin = in den Bus einsteigen (wörtlich: in den Bus aufsteigen), daher der Illativ.", alt: ["Minä nousen bussiin rautatieasemalla."] }),
    s("vty-017", VTY, "He menevät kauppaan yhdessä.", "Sie gehen zusammen in den Laden.", 4,
      g("menevät", ["menee", "menemme", "menen"], "he → mene- + -vät: menevät.")),
    s("vty-018", VTY, "Haluan kupin kahvia.", "Ich möchte eine Tasse Kaffee.", 4,
      g("Haluan", ["Haluaa", "Haluat", "Haluta"], "haluta (Typ 4): -ta fällt weg, Stammvokal verdoppelt: halua-. minä → haluan."),
      { alt: ["Minä haluan kupin kahvia."] }),
    s("vty-019", VTY, "Mitä sinä haluat syödä?", "Was möchtest du essen?", 4,
      g("haluat", ["haluan", "haluaa", "haluatte"], "sinä → halua- + -t: haluat. Danach folgt das zweite Verb im Infinitiv (syödä).")),
    s("vty-020", VTY, "Tapaan Annan kahvilassa.", "Ich treffe Anna im Café.", 5,
      g("Tapaan", ["Tapaa", "Tavata", "Tapaamme"], "tavata (Typ 4) hat umgekehrten Stufenwechsel: Infinitiv v, Präsensstamm tapaa-. minä → tapaan."),
      { alt: ["Minä tapaan Annan kahvilassa."] }),
    s("vty-021", VTY, "Pelaatko sinä tennistä?", "Spielst du Tennis?", 5,
      g("Pelaatko", ["Pelaako", "Pelaanko", "Pelaatteko"], "pelata (Typ 4) → Stamm pelaa-. sinä → pelaat, Frage mit -ko: pelaatko."),
      { alt: ["Pelaatko tennistä?"] }),
    s("vty-022", VTY, "Pojat pelaavat jalkapalloa pihalla.", "Die Jungen spielen im Hof Fußball.", 5,
      g("pelaavat", ["pelaa", "pelaamme", "pelaan"], "Plural-Subjekt → pelaa- + -vat: pelaavat."),
      { alt: ["Pojat pelaavat pihalla jalkapalloa."] }),
    s("vty-023", VTY, "Herään joka aamu kello seitsemän.", "Ich wache jeden Morgen um sieben auf.", 5,
      g("Herään", ["Herää", "Heräämme", "Herätä"], "herätä (Typ 4): -tä fällt weg, ä verdoppelt: herää-. minä → herään."),
      { alt: ["Minä herään joka aamu kello seitsemän.", "Herään joka aamu seitsemältä."] }),
    s("vty-024", VTY, "Tarvitsen apua.", "Ich brauche Hilfe.", 5,
      g("Tarvitsen", ["Tarvitsee", "Tarvitset", "Tarvita"], "tarvita (Typ 5): -ta fällt weg, -tse- kommt dazu: tarvitse-. minä → tarvitsen."),
      { note: "tarvita verlangt meist den Partitiv: apua (Hilfe – unbestimmte Menge).", alt: ["Minä tarvitsen apua."] }),
    s("vty-025", VTY, "Tarvitsetteko te jotain?", "Braucht ihr etwas?", 6,
      g("Tarvitsetteko", ["Tarvitseeko", "Tarvitsemmeko", "Tarvitsetko"], "te → tarvitse- + -tte, Frage mit -ko: tarvitsetteko."),
      { alt: ["Tarvitsetteko jotain?"] }),
    s("vty-026", VTY, "Mitä valitset, teetä vai kahvia?", "Was nimmst du, Tee oder Kaffee?", 6,
      g("valitset", ["valitsen", "valitsee", "valita"], "valita (Typ 5) → Stamm valitse-. sinä → valitset.")),
    s("vty-027", VTY, "Me kaikki vanhenemme.", "Wir alle werden älter.", 6,
      g("vanhenemme", ["vanhenee", "vanhenevat", "vanheta"], "vanheta (Typ 6): -ta fällt weg, -ne- kommt dazu: vanhene-. me → vanhenemme."),
      { note: "Verben vom Typ 6 bedeuten oft „… werden“: vanha (alt) → vanheta (alt werden)." }),
    s("vty-028", VTY, "Syksyllä päivät lyhenevät.", "Im Herbst werden die Tage kürzer.", 6,
      g("lyhenevät", ["lyhenee", "lyhetä", "lyhenemme"], "lyhetä ist Typ 6 wie vanheta: Stamm lyhene-. Plural → lyhenevät."),
      { note: "lyhyt (kurz) → lyhetä (kürzer werden)." }),
    s("vty-029", VTY, "Kun herään, juon ensin kahvia ja sitten menen töihin.", "Wenn ich aufwache, trinke ich zuerst Kaffee und gehe dann zur Arbeit.", 7,
      g("juon", ["juo", "juovat", "juot"], "Subjekt ist minä (wie in herään, menen) → juon."),
      { note: "Drei Verbtypen in einem Satz: herätä (4), juoda (2), mennä (3)." }),

    // ───────────── Stufenwechsel ─────────────
    s("ast-001", AST, "Olen kaupassa.", "Ich bin im Laden.", 4,
      g("kaupassa", ["kauppa", "kauppaan", "kaupasta"], "Wo? → Inessiv -ssa. Die Endung schließt die Silbe, daher schwache Stufe pp → p: kaupassa."),
      { alt: ["Minä olen kaupassa."] }),
    s("ast-002", AST, "Menen kauppaan.", "Ich gehe in den Laden.", 4,
      g("kauppaan", ["kaupassa", "kaupasta", "kauppa"], "Wohin? → Illativ. Der Illativ hat immer die starke Stufe: kauppaan (nicht *kaupaan)."),
      { alt: ["Minä menen kauppaan."] }),
    s("ast-003", AST, "Asumme samalla kadulla.", "Wir wohnen in derselben Straße.", 5,
      g("kadulla", ["katu", "kadulle", "katua"], "Wo? → Adessiv -lla. t → d in geschlossener Silbe: katu → kadulla."),
      { note: "Bei Straßen sagt Finnisch „auf der Straße“ (Adessiv), nicht „in“." }),
    s("ast-004", AST, "Asun Helsingissä.", "Ich wohne in Helsinki.", 4,
      g("Helsingissä", ["Helsinkiin", "Helsingistä", "Helsinki"], "Inessiv -ssä schließt die Silbe → nk wird zu ng: Helsingissä."),
      { alt: ["Minä asun Helsingissä."] }),
    s("ast-005", AST, "Muutan Helsinkiin ensi vuonna.", "Ich ziehe nächstes Jahr nach Helsinki.", 5,
      g("Helsinkiin", ["Helsingissä", "Helsingistä", "Helsingin"], "Illativ = immer starke Stufe: nk bleibt → Helsinkiin."),
      { alt: ["Ensi vuonna muutan Helsinkiin."] }),
    s("ast-006", AST, "Istumme rannalla.", "Wir sitzen am Strand.", 4,
      g("rannalla", ["ranta", "rannalle", "rantaan"], "Adessiv -lla → schwache Stufe: nt → nn. ranta → rannalla."),
      { alt: ["Me istumme rannalla."] }),
    s("ast-007", AST, "Menemme illalla rannalle.", "Wir gehen am Abend an den Strand.", 5,
      g("rannalle", ["ranta", "rannalla", "rantaa"], "Wohin (auf eine Fläche)? → Allativ -lle, schwache Stufe nn: rannalle."),
      { alt: ["Illalla menemme rannalle."] }),
    s("ast-008", AST, "Luen kirjaa.", "Ich lese (gerade) ein Buch.", 4,
      g("Luen", ["Lukee", "Lukevat", "Lukea"], "lukea: Endung -n schließt die Silbe → k fällt weg (k → –): luen."),
      { note: "Partitiv kirjaa: Das Lesen ist noch nicht abgeschlossen.", alt: ["Minä luen kirjaa."] }),
    s("ast-009", AST, "Hän lukee lehteä.", "Er liest Zeitung.", 4,
      g("lukee", ["luen", "luet", "luemme"], "3. Person Sg.: der Vokal wird verlängert, die Silbe bleibt offen → starke Stufe k: lukee.")),
    s("ast-010", AST, "Tapaan hänet huomenna.", "Ich treffe ihn morgen.", 5,
      g("Tapaan", ["Tavata", "Tapaa", "Tapaavat"], "Umgekehrter Stufenwechsel bei Typ 4: Infinitiv schwach (tavata), Präsensstamm stark (tapaa-)."),
      { alt: ["Minä tapaan hänet huomenna.", "Huomenna tapaan hänet."] }),
    s("ast-011", AST, "Missä me tapaamme?", "Wo treffen wir uns?", 5,
      g("tapaamme", ["tavata", "tapaa", "tapaatte"], "Bei Typ 4 sind alle Präsensformen stark: me tapaamme."),
      { alt: ["Missä tapaamme?"] }),
    s("ast-012", AST, "Pöydällä on kaksi kuppia.", "Auf dem Tisch stehen zwei Tassen.", 5,
      g("Pöydällä", ["Pöytä", "Pöydälle", "Pöytää"], "Adessiv -llä → t wird zu d: pöytä → pöydällä."),
      { note: "Nach Zahlen (außer yksi) steht der Partitiv Singular: kaksi kuppia." }),
    s("ast-013", AST, "Otan kupin kahvia.", "Ich nehme eine Tasse Kaffee.", 5,
      g("kupin", ["kuppi", "kuppia", "kuppiin"], "Objekt (eine ganze Tasse) im Genitiv-Akkusativ -n → schwache Stufe pp → p: kupin.")),
    s("ast-014", AST, "Ostan kaksi lippua.", "Ich kaufe zwei Fahrkarten.", 5,
      g("lippua", ["lipun", "lippu", "lipusta"], "Nach kaksi steht der Partitiv. Partitiv -a lässt die Silbe offen → starke Stufe pp: lippua.")),
    s("ast-015", AST, "Hän nukkuu vielä.", "Sie schläft noch.", 5,
      g("nukkuu", ["nukun", "nukut", "nukkua"], "3. Person Sg. (Vokalverlängerung) → starke Stufe kk: nukkuu.")),
    s("ast-016", AST, "Nukun huonosti.", "Ich schlafe schlecht.", 5,
      g("Nukun", ["Nukkuu", "Nukkua", "Nukkuvat"], "minä: Endung -n schließt die Silbe → kk wird zu k: nukun."),
      { alt: ["Minä nukun huonosti."] }),
    s("ast-017", AST, "Lähden töihin kahdeksalta.", "Ich gehe um acht zur Arbeit.", 6,
      g("Lähden", ["Lähtee", "Lähteä", "Lähtevät"], "lähteä: minä-Form mit -n → t wird zu d: lähden."),
      { alt: ["Minä lähden töihin kahdeksalta.", "Lähden töihin kello kahdeksan."] }),
    s("ast-018", AST, "Kesällä uimme lammessa.", "Im Sommer schwimmen wir im Teich.", 6,
      g("lammessa", ["lampi", "lampeen", "lammesta"], "lampi: mp → mm in der schwachen Stufe. Wo? → Inessiv: lammessa."),
      { alt: ["Uimme lammessa kesällä."] }),
    s("ast-019", AST, "Illalla katsomme elokuvan.", "Am Abend schauen wir einen Film.", 5,
      g("Illalla", ["Ilta", "Iltana", "Iltaa"], "Tageszeit mit Adessiv -lla: ilta → illalla (lt → ll)."),
      { alt: ["Katsomme illalla elokuvan."] }),
    s("ast-020", AST, "Käyn salilla kaksi kertaa viikossa.", "Ich gehe zweimal pro Woche ins Fitnessstudio.", 6,
      g("kertaa", ["kerran", "kerta", "kerralla"], "Nach kaksi Partitiv -a, Silbe offen → starke Stufe rt: kertaa."),
      { note: "„… pro Woche“ = Inessiv: viikossa. sali (Halle) steht umgangssprachlich für kuntosali." }),
    s("ast-021", AST, "Olin siellä vain kerran.", "Ich war nur einmal dort.", 6,
      g("kerran", ["kertaa", "kerta", "kerralla"], "kerran (Genitiv/Akkusativ von kerta, rt → rr) ist die feste Form für „einmal“."),
      { alt: ["Olin vain kerran siellä."] }),
    s("ast-022", AST, "Ostan leivän ja maitoa.", "Ich kaufe ein Brot und Milch.", 6,
      g("leivän", ["leipä", "leipään", "leivästä"], "Ganzes Objekt → Genitiv-Akkusativ -n, Silbe geschlossen: p → v. leipä → leivän."),
      { note: "leivän = ein ganzes Brot (Akkusativ), maitoa = etwas Milch (Partitiv, Stoff)." }),
    s("ast-023", AST, "Pesen hampaat aamulla ja illalla.", "Ich putze mir morgens und abends die Zähne.", 7,
      g("hampaat", ["hammas", "hampaan", "hammasta"], "hammas hat umgekehrten Stufenwechsel: Grundform schwach (mm), gebeugte Formen stark (mp): hampaat."),
      { note: "Finnisch braucht kein „mir“: Pesen hampaat. Wörtlich: Ich wasche die Zähne." }),
    s("ast-024", AST, "En ymmärrä, mitä sanot.", "Ich verstehe nicht, was du sagst.", 6,
      g("ymmärrä", ["ymmärtää", "ymmärrän", "ymmärtävät"], "Nach en steht der bloße Stamm, und zwar in der schwachen Stufe (rt → rr), wie bei ymmärrän: en ymmärrä.")),
    s("ast-025", AST, "Hän ymmärtää suomea hyvin.", "Sie versteht gut Finnisch.", 5,
      g("ymmärtää", ["ymmärrän", "ymmärrä", "ymmärrämme"], "3. Person Sg. → starke Stufe rt: ymmärtää.")),
    s("ast-026", AST, "Lennämme huomenna Tukholmaan.", "Wir fliegen morgen nach Stockholm.", 6,
      g("Lennämme", ["Lentää", "Lentävät", "Lennän"], "lentää: Endung -mme schließt die Silbe → nt wird zu nn: lennämme. (Lennän wäre minä.)"),
      { alt: ["Huomenna lennämme Tukholmaan.", "Me lennämme huomenna Tukholmaan."] }),
    s("ast-027", AST, "Joessa on paljon kalaa.", "Im Fluss gibt es viele Fische.", 6,
      g("Joessa", ["Joki", "Jokeen", "Joesta"], "joki: k fällt in der schwachen Stufe weg (und i → e): joki → joessa."),
      { note: "Mengen nach paljon im Partitiv: paljon kalaa – „viel Fisch“." }),

    // ───────────── Postpositionen ─────────────
    s("pos-001", POS, "Menen elokuviin ystävän kanssa.", "Ich gehe mit einem Freund ins Kino.", 5,
      g("ystävän", ["ystävä", "ystävää", "ystävällä"], "kanssa (mit) verlangt den Genitiv: ystävän kanssa."),
      { note: "„ins Kino gehen“ = mennä elokuviin (Illativ Plural: „in die Filme“).", alt: ["Menen ystävän kanssa elokuviin."] }),
    s("pos-002", POS, "Puhuin opettajan kanssa.", "Ich habe mit der Lehrerin gesprochen.", 5,
      g("opettajan", ["opettaja", "opettajaa", "opettajalle"], "Genitiv -n vor der Postposition kanssa.")),
    s("pos-003", POS, "Asun yhdessä kahden ystävän kanssa.", "Ich wohne mit zwei Freunden zusammen.", 7,
      g("kahden", ["kaksi", "kahta", "kahdella"], "Vor kanssa steht auch das Zahlwort im Genitiv: kaksi → kahden (+ ystävän im Singular)."),
      { note: "Nach Zahlwörtern steht das Nomen im Singular, hier im Genitiv: kahden ystävän." }),
    s("pos-004", POS, "Juna on myöhässä lumen takia.", "Der Zug hat wegen des Schnees Verspätung.", 6,
      g("lumen", ["lumi", "lunta", "lumessa"], "takia (wegen) steht nach dem Genitiv: lumi → lumen takia."),
      { alt: ["Lumen takia juna on myöhässä."] }),
    s("pos-005", POS, "Jäin kotiin sateen takia.", "Wegen des Regens bin ich zu Hause geblieben.", 6,
      g("sateen", ["sade", "sadetta", "sateessa"], "Genitiv vor takia. sade → sateen (umgekehrter Stufenwechsel d → t)."),
      { note: "jäädä kotiin – Finnisch sagt „nach Hause bleiben“ (Illativ).", alt: ["Sateen takia jäin kotiin."] }),
    s("pos-006", POS, "Soitan sinulle työn jälkeen.", "Ich rufe dich nach der Arbeit an.", 5,
      g("työn", ["työ", "työtä", "työssä"], "jälkeen (nach) verlangt den Genitiv: työn jälkeen."),
      { note: "soittaa + Allativ: Man ruft „jemandem“ an – soitan sinulle.", alt: ["Työn jälkeen soitan sinulle."] }),
    s("pos-007", POS, "Ruoan jälkeen juomme kahvia.", "Nach dem Essen trinken wir Kaffee.", 5,
      g("jälkeen", ["ennen", "kanssa", "takia"], "„nach“ (zeitlich) = Genitiv + jälkeen. ennen würde „vor“ bedeuten und den Partitiv verlangen."),
      { alt: ["Ruuan jälkeen juomme kahvia.", "Juomme kahvia ruoan jälkeen."] }),
    s("pos-008", POS, "Pese kädet ennen ruokaa.", "Wasch dir vor dem Essen die Hände.", 6,
      g("ruokaa", ["ruoan", "ruoka", "ruoassa"], "ennen steht meist VOR dem Nomen und verlangt den Partitiv: ennen ruokaa."),
      { alt: ["Pese kätesi ennen ruokaa."] }),
    s("pos-009", POS, "Tulen kotiin ennen kuutta.", "Ich komme vor sechs nach Hause.", 6,
      g("kuutta", ["kuuden", "kuusi", "kuudelta"], "ennen + Partitiv: kuusi → kuutta."),
      { alt: ["Tulen kotiin ennen kello kuutta."] }),
    s("pos-010", POS, "Kirja on pöydän päällä.", "Das Buch liegt auf dem Tisch.", 5,
      g("pöydän", ["pöytä", "pöydällä", "pöytää"], "päällä (auf) steht nach dem Genitiv: pöytä → pöydän (t → d)."),
      { alt: ["Kirja on pöydällä."] }),
    s("pos-011", POS, "Kissa nukkuu sängyn alla.", "Die Katze schläft unter dem Bett.", 5,
      g("alla", ["alle", "alta", "päällä"], "Wo? → alla (wie der Adessiv -lla). alle = wohin, alta = woher.")),
    s("pos-012", POS, "Kissa juoksee sängyn alle.", "Die Katze läuft unter das Bett.", 6,
      g("alle", ["alla", "alta", "päälle"], "Bewegung wohin? → alle (wie der Allativ -lle)."),
      { note: "sänky → sängyn: nk → ng." }),
    s("pos-013", POS, "Pankki on aseman vieressä.", "Die Bank ist neben dem Bahnhof.", 5,
      g("aseman", ["asema", "asemalla", "asemaa"], "vieressä (neben) steht nach dem Genitiv: aseman vieressä.")),
    s("pos-014", POS, "Odotan sinua kaupan edessä.", "Ich warte vor dem Laden auf dich.", 5,
      g("kaupan", ["kauppa", "kaupassa", "kauppaa"], "edessä (vor, räumlich) + Genitiv: kauppa → kaupan (pp → p)."),
      { note: "odottaa + Partitiv: auf jemanden warten = odottaa jotakuta (sinua)." }),
    s("pos-015", POS, "Auto on talon takana.", "Das Auto steht hinter dem Haus.", 5,
      g("takana", ["taakse", "takaa", "edessä"], "Wo? → takana. taakse = wohin, takaa = woher.")),
    s("pos-016", POS, "Kaupan sisällä on lämmin, mutta ulkona on kylmä.", "Im Laden ist es warm, aber draußen ist es kalt.", 7,
      g("sisällä", ["sisälle", "sisältä", "ulkona"], "Wo? → sisällä (drinnen). sisälle = hinein, sisältä = heraus.")),
    s("pos-017", POS, "Olen viikonloppuna isoäidin luona.", "Am Wochenende bin ich bei meiner Oma.", 6,
      g("luona", ["luokse", "luota", "kanssa"], "Wo (bei einer Person)? → Genitiv + luona."),
      { note: "„bei“ einer Person = luona; bei Orten benutzt man die Ortsfälle (kotona, töissä)." }),
    s("pos-018", POS, "Menen huomenna lääkärin luokse.", "Ich gehe morgen zum Arzt.", 6,
      g("luokse", ["luona", "luota", "kautta"], "Wohin (zu einer Person)? → luokse."),
      { alt: ["Menen lääkärin luokse huomenna.", "Huomenna menen lääkärin luokse."] }),
    s("pos-019", POS, "Tulen juuri Pekan luota.", "Ich komme gerade von Pekka.", 6,
      g("luota", ["luona", "luokse", "jälkeen"], "Woher (von einer Person)? → luota.")),
    s("pos-020", POS, "Ajamme Tampereen kautta.", "Wir fahren über Tampere.", 6,
      g("Tampereen", ["Tampere", "Tampereella", "Tampereelle"], "kautta (über, via) verlangt den Genitiv: Tampere → Tampereen.")),
    s("pos-021", POS, "Ajan töihin keskustan kautta.", "Ich fahre über die Innenstadt zur Arbeit.", 6,
      g("keskustan", ["keskusta", "keskustassa", "keskustaan"], "Genitiv + kautta: keskustan kautta."),
      { alt: ["Ajan keskustan kautta töihin."] }),
    s("pos-022", POS, "Juon kahvia ilman sokeria.", "Ich trinke Kaffee ohne Zucker.", 5,
      g("sokeria", ["sokerin", "sokeri", "sokerilla"], "ilman (ohne) steht vor dem Nomen und verlangt den Partitiv: ilman sokeria."),
      { alt: ["Minä juon kahvia ilman sokeria.", "Juon kahvin ilman sokeria."] }),
    s("pos-023", POS, "Lähdin kotoa ilman sateenvarjoa.", "Ich bin ohne Regenschirm aus dem Haus gegangen.", 7,
      g("sateenvarjoa", ["sateenvarjon", "sateenvarjo", "sateenvarjolla"], "ilman + Partitiv: sateenvarjo → sateenvarjoa."),
      { note: "kotoa = „von zu Hause“ (feste Form, zu kotona/kotiin)." }),
    s("pos-024", POS, "Lasten takia muutimme maalle.", "Wegen der Kinder sind wir aufs Land gezogen.", 8,
      g("Lasten", ["Lapset", "Lapsia", "Lapsille"], "takia + Genitiv, hier Plural: lapset → lasten."),
      { note: "maalle = aufs Land (Allativ von maa).", alt: ["Muutimme maalle lasten takia."] }),

    // ───────────── Essiv & Translativ ─────────────
    s("ess-001", ESS, "Lapsena asuin Turussa.", "Als Kind habe ich in Turku gewohnt.", 6,
      g("Lapsena", ["Lapseksi", "Lapsi", "Lapsen"], "„als Kind“ = Rolle/Zustand in der Vergangenheit → Essiv: lapsena."),
      { alt: ["Asuin lapsena Turussa."] }),
    s("ess-002", ESS, "Hän työskentelee opettajana.", "Sie arbeitet als Lehrerin.", 6,
      g("opettajana", ["opettajaksi", "opettaja", "opettajan"], "Beruf/Rolle („als …“) → Essiv -na: opettajana.")),
    s("ess-003", ESS, "Olen täällä turistina.", "Ich bin als Tourist hier.", 6,
      g("turistina", ["turistiksi", "turisti", "turistin"], "„als Tourist“ → Essiv: turistina.")),
    s("ess-004", ESS, "Nähdään maanantaina!", "Wir sehen uns am Montag!", 6,
      g("maanantaina", ["maanantai", "maanantaiksi", "maanantaihin"], "Wochentage im Essiv: maanantaina = am Montag."),
      { note: "Nähdään ist eine Passivform mit der Bedeutung „Lasst uns … sehen“." }),
    s("ess-005", ESS, "Jouluna menemme mökille.", "An Weihnachten fahren wir ins Sommerhaus.", 6,
      g("Jouluna", ["Joulu", "Joulun", "Jouluun"], "Feiertage im Essiv: jouluna = an Weihnachten."),
      { alt: ["Menemme jouluna mökille."] }),
    s("ess-006", ESS, "Mitä teet viikonloppuna?", "Was machst du am Wochenende?", 6,
      g("viikonloppuna", ["viikonloppu", "viikonlopuksi", "viikonloppua"], "Zeitpunkt → Essiv: viikonloppuna.")),
    s("ess-007", ESS, "Tänä vuonna kesä on lämmin.", "Dieses Jahr ist der Sommer warm.", 7,
      g("vuonna", ["vuosi", "vuodeksi", "vuoden"], "Zeitangabe mit Jahr → Essiv. vuosi hat den Essiv vuonna (Stamm vuote- → vuon-)."),
      { note: "Auch tämä steht im Essiv: tänä vuonna." }),
    s("ess-008", ESS, "Mikä sinusta tulee isona?", "Was willst du werden, wenn du groß bist?", 7,
      g("isona", ["isoksi", "iso", "isoa"], "„als Großer, wenn man groß ist“ → Essiv: isona."),
      { note: "Wörtlich: „Was wird aus dir als Großer?“ – Elativ sinusta für die Person, aus der etwas wird." }),
    s("ess-009", ESS, "Mikko tuli isäksi viime vuonna.", "Mikko ist letztes Jahr Vater geworden.", 7,
      g("isäksi", ["isänä", "isä", "isän"], "tulla + Translativ = werden: isäksi."),
      { alt: ["Mikko tuli viime vuonna isäksi."] }),
    s("ess-010", ESS, "Hän tuli sairaaksi.", "Er wurde krank.", 7,
      g("sairaaksi", ["sairaana", "sairas", "sairaan"], "Veränderung (krank werden) → Translativ: sairas → sairaaksi."),
      { alt: ["Hän sairastui."], note: "Häufiger sagt man einfach: Hän sairastui." }),
    s("ess-011", ESS, "Olin eilen sairaana.", "Ich war gestern krank.", 7,
      g("sairaana", ["sairaaksi", "sairaan", "sairaat"], "Vorübergehender Zustand → Essiv: sairaana."),
      { alt: ["Olin eilen sairas."], note: "Mit sairaana betont man, dass der Zustand vorübergehend war." }),
    s("ess-012", ESS, "Sano se suomeksi!", "Sag es auf Finnisch!", 6,
      g("suomeksi", ["suomi", "suomea", "suomessa"], "„auf Finnisch“ (etwas ausdrücken) → Translativ: suomeksi."),
      { note: "Aber: puhua suomea – Finnisch sprechen (Partitiv)." }),
    s("ess-013", ESS, "Mitä \"kiitos\" on saksaksi?", "Was heißt „kiitos“ auf Deutsch?", 6,
      g("saksaksi", ["saksa", "saksaa", "saksassa"], "„auf Deutsch“ → Translativ: saksaksi.")),
    s("ess-014", ESS, "Ilma muuttui kylmäksi.", "Das Wetter wurde kalt.", 7,
      g("kylmäksi", ["kylmänä", "kylmä", "kylmää"], "muuttua (sich verändern) + Translativ: kylmäksi."),
      { alt: ["Sää muuttui kylmäksi."] }),
    s("ess-015", ESS, "Vesi muuttuu jääksi.", "Wasser wird zu Eis.", 7,
      g("jääksi", ["jäänä", "jää", "jäätä"], "Verwandlung in etwas → Translativ: jääksi.")),
    s("ess-016", ESS, "Hän opiskelee sairaanhoitajaksi.", "Sie macht eine Ausbildung zur Krankenpflegerin.", 7,
      g("sairaanhoitajaksi", ["sairaanhoitajana", "sairaanhoitaja", "sairaanhoitajan"], "opiskella + Translativ = studieren, um etwas zu werden: sairaanhoitajaksi.")),
    s("ess-017", ESS, "Hän valmistui lääkäriksi viime keväänä.", "Sie hat letztes Frühjahr ihr Medizinstudium abgeschlossen.", 8,
      g("lääkäriksi", ["lääkärinä", "lääkäri", "lääkärin"], "valmistua + Translativ = den Abschluss als … machen: lääkäriksi."),
      { note: "viime keväänä – auch Jahreszeiten stehen als Zeitangabe im Essiv (kevät → keväänä).", alt: ["Hän valmistui viime keväänä lääkäriksi."] }),
    s("ess-018", ESS, "Maalaan seinän valkoiseksi.", "Ich streiche die Wand weiß.", 8,
      g("valkoiseksi", ["valkoisena", "valkoinen", "valkoisen"], "Ergebnis der Handlung (die Wand wird weiß) → Translativ: valkoiseksi."),
      { note: "Adjektive auf -nen haben den Stamm -se-: valkoinen → valkoiseksi." }),
    s("ess-019", ESS, "Tarvitsen huoneen kolmeksi yöksi.", "Ich brauche ein Zimmer für drei Nächte.", 8,
      g("yöksi", ["yönä", "yö", "yötä"], "Geplante Dauer („für …“) → Translativ, Zahl und Nomen beide: kolmeksi yöksi.")),
    s("ess-020", ESS, "Lähden Saksaan viikoksi.", "Ich fahre für eine Woche nach Deutschland.", 8,
      g("viikoksi", ["viikkona", "viikko", "viikossa"], "Geplante Dauer nach lähteä → Translativ. viikko → viikoksi (kk → k)."),
      { alt: ["Lähden viikoksi Saksaan."] }),
    s("ess-021", ESS, "Pidän häntä hyvänä ystävänä.", "Ich halte ihn für einen guten Freund.", 8,
      g("ystävänä", ["ystäväksi", "ystävä", "ystävän"], "pitää jotakuta jonakin = jemanden für etwas halten → Essiv: hyvänä ystävänä."),
      { note: "Das Adjektiv richtet sich nach dem Nomen: hyvänä ystävänä." }),
    s("ess-022", ESS, "Nuorena hän matkusti paljon.", "In jungen Jahren ist sie viel gereist.", 7,
      g("Nuorena", ["Nuoreksi", "Nuori", "Nuoren"], "„als junger Mensch“ → Essiv: nuori → nuorena."),
      { alt: ["Hän matkusti nuorena paljon."] }),
    s("ess-023", ESS, "Nuorena opiskelin Saksassa, ja nyt työskentelen insinöörinä Helsingissä.", "Als junger Mensch habe ich in Deutschland studiert, und jetzt arbeite ich als Ingenieur in Helsinki.", 8,
      g("insinöörinä", ["insinööriksi", "insinööri", "insinöörin"], "Beruf, den man ausübt → Essiv: insinöörinä.")),

    // ───────────── Possessivsuffixe ─────────────
    s("psx-001", PSX, "Tässä on minun kirjani.", "Hier ist mein Buch.", 6,
      g("kirjani", ["kirja", "kirjasi", "kirjansa"], "minun … → Suffix -ni: kirjani."),
      { alt: ["Tässä on kirjani."] }),
    s("psx-002", PSX, "Mikä sinun nimesi on?", "Wie heißt du?", 6,
      g("nimesi", ["nimeni", "nimi", "nimensä"], "sinun → -si. nimi hat den Stamm nime-: nimesi."),
      { alt: ["Mikä nimesi on?", "Mikä on sinun nimesi?", "Mikä on nimesi?"] }),
    s("psx-003", PSX, "Nimeni on Anna.", "Ich heiße Anna.", 6,
      g("Nimeni", ["Nimesi", "Nimi", "Nimensä"], "1. Person → -ni, das Pronomen minun kann wegfallen: nimeni."),
      { alt: ["Minun nimeni on Anna."] }),
    s("psx-004", PSX, "Hänen äitinsä on lääkäri.", "Seine Mutter ist Ärztin.", 6,
      g("äitinsä", ["äitini", "äiti", "äitisi"], "hänen → -nsä (Vokalharmonie: ä): äitinsä.")),
    s("psx-005", PSX, "Meidän talomme on punainen.", "Unser Haus ist rot.", 6,
      g("talomme", ["talonne", "talo", "talonsa"], "meidän → -mme: talomme."),
      { alt: ["Talomme on punainen."] }),
    s("psx-006", PSX, "Missä teidän autonne on?", "Wo ist euer Auto?", 6,
      g("autonne", ["automme", "auto", "autosi"], "teidän → -nne: autonne."),
      { alt: ["Missä autonne on?", "Missä on teidän autonne?"] }),
    s("psx-007", PSX, "Heidän lapsensa ovat jo aikuisia.", "Ihre Kinder sind schon erwachsen.", 7,
      g("lapsensa", ["lapset", "lapsemme", "lapsesi"], "heidän → -nsa. lapsi → Stamm lapse-: lapsensa. (Plural-t fällt vor dem Suffix weg.)"),
      { note: "lapsensa kann „ihr Kind“ oder „ihre Kinder“ heißen – hier zeigt das Verb ovat den Plural." }),
    s("psx-008", PSX, "Asun vanhempieni kanssa.", "Ich wohne bei meinen Eltern.", 8,
      g("vanhempieni", ["vanhempien", "vanhemmat", "vanhempani"], "kanssa + Genitiv Plural vanhempien; das Genitiv-n fällt vor -ni weg: vanhempieni."),
      { alt: ["Asun minun vanhempieni kanssa."] }),
    s("psx-009", PSX, "Unohdin avaimeni kotiin.", "Ich habe meinen Schlüssel zu Hause vergessen.", 7,
      g("avaimeni", ["avaimesi", "avaimet", "avain"], "avain → Stamm avaime- + -ni: avaimeni."),
      { note: "Finnisch sagt „nach Hause vergessen“ (Illativ kotiin). avaimeni kann auch „meine Schlüssel“ heißen." }),
    s("psx-010", PSX, "Talossani on kolme huonetta.", "Mein Haus hat drei Zimmer.", 7,
      g("Talossani", ["Talossasi", "Talossa", "Talostani"], "Inessiv -ssa + Suffix -ni: talossani = in meinem Haus."),
      { alt: ["Minun talossani on kolme huonetta."], note: "„haben“ bei Räumen: Im Haus „sind“ drei Zimmer." }),
    s("psx-011", PSX, "Lähetin viestin ystävälleni.", "Ich habe meiner Freundin eine Nachricht geschickt.", 7,
      g("ystävälleni", ["ystävälle", "ystävällesi", "ystävältäni"], "Allativ -lle (an) + -ni (mein): ystävälleni."),
      { alt: ["Lähetin ystävälleni viestin."] }),
    s("psx-012", PSX, "Hän otti kirjansa ja lähti.", "Er nahm sein Buch und ging.", 7,
      g("kirjansa", ["kirjasi", "kirjani", "kirja"], "Besitzer = Subjekt (er selbst) → nur Suffix -nsa, ohne hänen."),
      { note: "Ohne hänen ist es reflexiv: sein EIGENES Buch." }),
    s("psx-013", PSX, "Hän otti hänen kirjansa.", "Er nahm sein (des anderen) Buch.", 8,
      g("hänen", ["minun", "sinun", "heidän"], "Mit hänen gehört das Buch einer ANDEREN Person als dem Subjekt."),
      { note: "Vergleiche: Hän otti kirjansa = sein eigenes Buch." }),
    s("psx-014", PSX, "Pekka soitti äidilleen.", "Pekka hat seine Mutter angerufen.", 7,
      g("äidilleen", ["äidilleni", "äidille", "äidillesi"], "3. Person nach Kasusendung: statt -nsä oft Vokaldehnung + n: äidille → äidilleen."),
      { alt: ["Pekka soitti äidillensä."] }),
    s("psx-015", PSX, "Rakastamme kotimaatamme.", "Wir lieben unsere Heimat.", 8,
      g("kotimaatamme", ["kotimaamme", "kotimaata", "kotimaatanne"], "rakastaa verlangt den Partitiv (kotimaata) + -mme: kotimaatamme."),
      { alt: ["Me rakastamme kotimaatamme."] }),
    s("psx-016", PSX, "Ottakaa takkinne!", "Nehmt eure Jacken!", 7,
      g("takkinne", ["takkimme", "takki", "takkisi"], "Imperativ für ihr (ottakaa) → -nne: takkinne."),
      { note: "Vor dem Suffix steht die starke Stufe: takki → takkinne (nicht *takinne)." }),
    s("psx-017", PSX, "Onko tämä sinun puhelimesi?", "Ist das dein Handy?", 6,
      g("puhelimesi", ["puhelimeni", "puhelin", "puhelimensa"], "sinun → -si. puhelin → Stamm puhelime-: puhelimesi."),
      { alt: ["Onko tämä puhelimesi?"] }),
    s("psx-018", PSX, "Kerro perheestäsi!", "Erzähl von deiner Familie!", 7,
      g("perheestäsi", ["perheestä", "perheestäni", "perheesi"], "kertoa + Elativ (von) + -si (dein): perheestäsi.")),
    s("psx-019", PSX, "Pidän työstäni.", "Ich mag meine Arbeit.", 7,
      g("työstäni", ["työni", "työstä", "työstäsi"], "pitää (mögen) + Elativ -stä, dazu -ni: työstäni."),
      { alt: ["Pidän minun työstäni."] }),
    s("psx-020", PSX, "Vien lapseni kouluun.", "Ich bringe mein Kind zur Schule.", 7,
      g("lapseni", ["lapsesi", "lapsensa", "lapsi"], "minä bringt MEIN Kind → -ni: lapseni."),
      { note: "lapseni kann auch „meine Kinder“ bedeuten." }),
    s("psx-021", PSX, "Tapasimme ystävämme kahvilassa.", "Wir haben unsere Freunde im Café getroffen.", 8,
      g("ystävämme", ["ystävänne", "ystävä", "ystävänsä"], "Subjekt me → -mme: ystävämme (Singular oder Plural)."),
      { alt: ["Me tapasimme ystävämme kahvilassa."] }),
    s("psx-022", PSX, "Tule meidän kanssamme!", "Komm mit uns!", 7,
      g("kanssamme", ["kanssa", "kanssanne", "kanssani"], "Auch Postpositionen bekommen das Suffix: meidän kanssamme."),
      { alt: ["Tule kanssamme!"] }),
    s("psx-023", PSX, "Hän kertoi, että hänen veljensä asuu nykyään vaimonsa kanssa Tampereella.", "Sie erzählte, dass ihr Bruder jetzt mit seiner Frau in Tampere wohnt.", 9,
      g("vaimonsa", ["vaimoni", "vaimo", "vaimosi"], "Die Frau gehört zum Subjekt des Nebensatzes (veli) → reflexiv, nur Suffix: vaimonsa kanssa."),
      { note: "hänen veljensä: Der Bruder gehört der Person „hän“; vaimonsa ohne hänen bezieht sich auf den Bruder selbst." }),
  ],
  lexicon: `
aamu | aamu | Morgen | Nominativ Sg. (joka aamu = jeden Morgen)
aamulla | aamu | morgens, am Morgen | Adessiv -lla: Tageszeit
aikuisia | aikuinen | erwachsen | Partitiv Pl. (-nen → -si-); Prädikativ bei Plural-Subjekt
ajamme | ajaa | fahren | Verb Typ 1, Präsens 1. Pl. (me)
ajan | ajaa | fahren | Verb Typ 1, Präsens 1. Sg. (minä)
ajattelen | ajatella | denken | Verb Typ 3, Präsens 1. Sg. (Stamm ajattele-)
ajattelette | ajatella | denken | Verb Typ 3, Präsens 2. Pl. (te)
alla | alla | unter (wo?) | Postposition + Genitiv, Ruhelage (wie -lla)
alle | alle | unter (wohin?) | Postposition + Genitiv, Richtung (wie -lle)
anna | Anna | Anna | Vorname, Nominativ
annan | Anna | Anna | Genitiv-Akkusativ (-n), Objekt von tavata
apua | apu | Hilfe | Partitiv Sg. (starke Stufe p)
aseman | asema | Bahnhof | Genitiv Sg. vor Postposition
asuin | asua | wohnen | Verb Typ 1, Imperfekt 1. Sg. (asu- + -i- + -n)
asumme | asua | wohnen | Verb Typ 1, Präsens 1. Pl. (me)
asun | asua | wohnen | Verb Typ 1, Präsens 1. Sg. (minä)
asuu | asua | wohnen | Verb Typ 1, Präsens 3. Sg. (hän)
aurinko | aurinko | Sonne | Nominativ Sg.
auto | auto | Auto | Nominativ Sg.
autonne | auto | Auto | Nominativ Sg. + Possessivsuffix -nne (euer Auto)
avaimeni | avain | Schlüssel | Akkusativ + Possessivsuffix -ni (mein(e) Schlüssel); Stamm avaime-
bussiin | bussi | Bus | Illativ (-iin: „in … hinein“)
edessä | edessä | vor (wo?) | Postposition + Genitiv, Ruhelage
eilen | eilen | gestern | Adverb
elokuvan | elokuva | Film | Genitiv-Akkusativ (ganzer Film als Objekt)
elokuviin | elokuva | Film; Kino | Illativ Pl. (mennä elokuviin = ins Kino gehen)
en | ei (Verneinungsverb) | nicht | Verneinungsverb, 1. Sg. (minä en …)
ennen | ennen | vor (zeitlich) | Präposition + Partitiv
ensi | ensi | nächst- | unveränderliches Adjektiv (ensi vuonna = nächstes Jahr)
ensin | ensin | zuerst | Adverb
että | että | dass | Konjunktion
haluan | haluta | wollen, möchten | Verb Typ 4, Präsens 1. Sg. (Stamm halua-)
haluat | haluta | wollen, möchten | Verb Typ 4, Präsens 2. Sg. (sinä)
hampaat | hammas | Zahn | Akkusativ Pl. (-t); umgekehrter Stufenwechsel mm → mp
he | he | sie (Plural) | Personalpronomen 3. Pl.
heidän | he | ihr(e) (Plural) | Genitiv 3. Pl. (+ Possessivsuffix -nsa)
helsingissä | Helsinki | Helsinki | Inessiv (-ssä = „in“); Stufenwechsel nk → ng
helsinkiin | Helsinki | Helsinki | Illativ (-in: „nach, in … hinein“); starke Stufe nk
herään | herätä | aufwachen | Verb Typ 4, Präsens 1. Sg. (Stamm herää-)
huomenna | huomenna | morgen | Adverb
huoneen | huone | Zimmer | Genitiv-Akkusativ (ganzes Objekt)
huonetta | huone | Zimmer | Partitiv Sg. (nach Zahlwort)
huonosti | huono | schlecht | Adverb (-sti)
hyvin | hyvä | gut | Adverb
hyvänä | hyvä | gut | Essiv (-nä: „als“), Kongruenz mit ystävänä
hän | hän | er, sie | Personalpronomen 3. Sg.
hänen | hän | sein(e), ihr(e) | Genitiv 3. Sg. (+ Possessivsuffix -nsa)
hänet | hän | ihn, sie | Akkusativ 3. Sg. (Personalpronomen auf -t)
häntä | hän | ihn, sie | Partitiv 3. Sg.
illalla | ilta | abends, am Abend | Adessiv: Tageszeit; Stufenwechsel lt → ll
ilma | ilma | Wetter; Luft | Nominativ Sg.
ilman | ilman | ohne | Präposition + Partitiv
ilta | ilta | Abend | Nominativ Sg. (joka ilta = jeden Abend)
insinöörinä | insinööri | Ingenieur | Essiv (-nä: „als“ – Beruf)
isona | iso | groß | Essiv (-na: „als Großer“)
isoäidin | isoäiti | Großmutter | Genitiv Sg. vor Postposition; t → d
istumme | istua | sitzen | Verb Typ 1, Präsens 1. Pl. (me)
isäksi | isä | Vater | Translativ (-ksi: „zu … werden“)
ja | ja | und | Konjunktion
jalkapalloa | jalkapallo | Fußball | Partitiv Sg. (Objekt bei pelata)
jo | jo | schon | Adverb
joessa | joki | Fluss | Inessiv (-ssa); Stufenwechsel k → – (joki → joe-)
joka | joka | jeder | unveränderliches Pronomen (joka aamu)
jotain | jokin | etwas | Partitiv von jokin
jouluna | joulu | Weihnachten | Essiv (-na): Zeitpunkt „an Weihnachten“
juna | juna | Zug | Nominativ Sg.
juoksee | juosta | laufen, rennen | Verb Typ 3, Präsens 3. Sg. (Stamm juokse-)
juomme | juoda | trinken | Verb Typ 2, Präsens 1. Pl. (me)
juon | juoda | trinken | Verb Typ 2, Präsens 1. Sg. (Stamm juo-)
juot | juoda | trinken | Verb Typ 2, Präsens 2. Sg. (sinä)
juovat | juoda | trinken | Verb Typ 2, Präsens 3. Pl. (he)
juuri | juuri | gerade, eben | Adverb
jäin | jäädä | bleiben | Verb Typ 2, Imperfekt 1. Sg.
jälkeen | jälkeen | nach (zeitlich) | Postposition + Genitiv
jääksi | jää | Eis | Translativ (-ksi: „zu … werden“)
kadulla | katu | Straße | Adessiv (-lla: „auf“); Stufenwechsel t → d
kahdeksalta | kahdeksan | acht | Ablativ (-lta): Uhrzeit „um acht“
kahdeksan | kahdeksan | acht | Zahlwort, Nominativ
kahden | kaksi | zwei | Genitiv (kaksi → kahde-)
kahvia | kahvi | Kaffee | Partitiv Sg. (Stoffmenge)
kahvilassa | kahvila | Café | Inessiv (-ssa: „in“)
kahvin | kahvi | Kaffee | Genitiv-Akkusativ (eine ganze Tasse Kaffee)
kaikki | kaikki | alle | Pronomen, Nominativ Pl.
kaksi | kaksi | zwei | Zahlwort, Nominativ (+ Partitiv Sg.)
kalaa | kala | Fisch | Partitiv Sg. (Menge nach paljon)
kanssa | kanssa | mit | Postposition + Genitiv
kanssamme | kanssa | mit uns | Postposition + Possessivsuffix -mme
katsomme | katsoa | (an)schauen | Verb Typ 1, Präsens 1. Pl. (me)
kaupan | kauppa | Laden | Genitiv Sg.; Stufenwechsel pp → p
kaupassa | kauppa | Laden | Inessiv (-ssa: „in“); Stufenwechsel pp → p
kauppaan | kauppa | Laden | Illativ (-an: „in … hinein“); starke Stufe pp
kautta | kautta | über, via | Postposition + Genitiv
kello | kello | Uhr | Nominativ; kello viisi = um fünf Uhr
kerran | kerta | Mal | Genitiv/Akkusativ; als Adverb „einmal“; Stufenwechsel rt → rr
kerro | kertoa | erzählen | Imperativ 2. Sg.; Stufenwechsel rt → rr
kertaa | kerta | Mal | Partitiv Sg. (nach Zahlwort); starke Stufe rt
kertoi | kertoa | erzählen | Verb Typ 1, Imperfekt 3. Sg.
keskustan | keskusta | Innenstadt, Zentrum | Genitiv Sg. vor Postposition
kesä | kesä | Sommer | Nominativ Sg.
kesällä | kesä | im Sommer | Adessiv (-llä): Jahreszeit
keväänä | kevät | Frühling | Essiv (-nä): Zeitangabe (viime keväänä)
kiitos | kiitos | danke | Interjektion / Nomen
kirja | kirja | Buch | Nominativ Sg.
kirjaa | kirja | Buch | Partitiv Sg. (unabgeschlossene Handlung)
kirjani | kirja | Buch | + Possessivsuffix -ni (mein Buch)
kirjansa | kirja | Buch | + Possessivsuffix -nsa (sein/ihr Buch)
kissa | kissa | Katze | Nominativ Sg.
kolme | kolme | drei | Zahlwort, Nominativ (+ Partitiv Sg.)
kolmeksi | kolme | drei | Translativ (-ksi), Kongruenz mit yöksi
kotiin | koti | Zuhause | Illativ: „nach Hause“
kotimaatamme | kotimaa | Heimat(land) | Partitiv (-ta) + Possessivsuffix -mme
kotoa | koti | Zuhause | feste Form „von zu Hause“
kotona | koti | Zuhause | Essiv-Form: „zu Hause“
kouluun | koulu | Schule | Illativ (-un: „in … hinein“)
kun | kun | wenn, als | Konjunktion
kupin | kuppi | Tasse | Genitiv-Akkusativ; Stufenwechsel pp → p
kuppia | kuppi | Tasse | Partitiv Sg. (nach Zahlwort); starke Stufe pp
kuudelta | kuusi | sechs | Ablativ (-lta): Uhrzeit „um sechs“
kuusi | kuusi | sechs | Zahlwort, Nominativ
kuutta | kuusi | sechs | Partitiv (nach ennen)
kylmä | kylmä | kalt | Adjektiv, Nominativ
kylmäksi | kylmä | kalt | Translativ (-ksi: „kalt werden“)
kädet | käsi | Hand | Akkusativ Pl. (-t); Stamm käde-
kätesi | käsi | Hand | Akkusativ Pl. + Possessivsuffix -si (deine Hände)
käyn | käydä | gehen, besuchen | Verb Typ 2, Präsens 1. Sg. (minä)
käyvät | käydä | gehen, besuchen | Verb Typ 2, Präsens 3. Pl. (he)
lammessa | lampi | Teich | Inessiv (-ssa); Stufenwechsel mp → mm
lapsena | lapsi | Kind | Essiv (-na: „als Kind“)
lapseni | lapsi | Kind | + Possessivsuffix -ni (mein Kind / meine Kinder)
lapsensa | lapsi | Kind | + Possessivsuffix -nsa (sein/ihr Kind, ihre Kinder)
lapset | lapsi | Kind | Nominativ Pl.
lasten | lapsi | Kind | Genitiv Pl. (der Kinder)
lehteä | lehti | Zeitung | Partitiv Sg. (Stamm lehte-)
leivän | leipä | Brot | Genitiv-Akkusativ; Stufenwechsel p → v
lennämme | lentää | fliegen | Verb Typ 1, Präsens 1. Pl.; Stufenwechsel nt → nn
liian | liian | zu (sehr) | Adverb
linnun | lintu | Vogel | Genitiv-Akkusativ; Stufenwechsel nt → nn
lippua | lippu | Fahrkarte, Ticket | Partitiv Sg. (nach Zahlwort); starke Stufe pp
luen | lukea | lesen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel k → –
lukee | lukea | lesen | Verb Typ 1, Präsens 3. Sg.; starke Stufe k
lumen | lumi | Schnee | Genitiv Sg. (Stamm lume-)
luokse | luokse | zu (einer Person) | Postposition + Genitiv, Richtung wohin
luona | luona | bei (einer Person) | Postposition + Genitiv, Ruhelage
luota | luota | von (einer Person) weg | Postposition + Genitiv, Richtung woher
lyhenevät | lyhetä | kürzer werden | Verb Typ 6, Präsens 3. Pl. (Stamm lyhene-)
lähden | lähteä | weggehen, aufbrechen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel t → d
lähdin | lähteä | weggehen, aufbrechen | Verb Typ 1, Imperfekt 1. Sg.; t → d
lähetin | lähettää | schicken | Verb Typ 1, Imperfekt 1. Sg.; tt → t
lähti | lähteä | weggehen | Verb Typ 1, Imperfekt 3. Sg.
lämmin | lämmin | warm | Adjektiv, Nominativ
lääkäri | lääkäri | Arzt, Ärztin | Nominativ Sg.
lääkäriksi | lääkäri | Arzt, Ärztin | Translativ (-ksi: „zu … werden“)
lääkärin | lääkäri | Arzt, Ärztin | Genitiv Sg. vor Postposition
maalaan | maalata | streichen, malen | Verb Typ 4, Präsens 1. Sg. (Stamm maalaa-)
maalle | maa | Land | Allativ (-lle): „aufs Land“
maanantaina | maanantai | Montag | Essiv (-na): „am Montag“
maitoa | maito | Milch | Partitiv Sg. (Stoffmenge)
matkusti | matkustaa | reisen | Verb Typ 1, Imperfekt 3. Sg.
me | me | wir | Personalpronomen 1. Pl.
meidän | me | unser | Genitiv 1. Pl. (+ Possessivsuffix -mme)
menemme | mennä | gehen | Verb Typ 3, Präsens 1. Pl. (Stamm mene-)
menen | mennä | gehen | Verb Typ 3, Präsens 1. Sg.
menet | mennä | gehen | Verb Typ 3, Präsens 2. Sg.
menevät | mennä | gehen | Verb Typ 3, Präsens 3. Pl.
mihin | mikä | wohin | Illativ des Fragepronomens
mikko | Mikko | Mikko | Vorname, Nominativ
mikä | mikä | was, welcher | Fragepronomen, Nominativ
minne | minne | wohin | Fragewort
minun | minä | mein | Genitiv 1. Sg. (+ Possessivsuffix -ni)
minä | minä | ich | Personalpronomen 1. Sg.
missä | mikä | wo | Inessiv des Fragepronomens
mitä | mikä | was | Partitiv des Fragepronomens
mutta | mutta | aber | Konjunktion
muutan | muuttaa | umziehen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
muutimme | muuttaa | umziehen | Verb Typ 1, Imperfekt 1. Pl.; tt → t
muuttui | muuttua | sich verändern, werden | Verb Typ 1, Imperfekt 3. Sg.
muuttuu | muuttua | sich verändern, werden | Verb Typ 1, Präsens 3. Sg.
myöhässä | myöhässä | verspätet | Adverb (olla myöhässä = Verspätung haben)
mökille | mökki | Sommerhaus, Hütte | Allativ (-lle); Stufenwechsel kk → k
nimeni | nimi | Name | + Possessivsuffix -ni (mein Name); Stamm nime-
nimesi | nimi | Name | + Possessivsuffix -si (dein Name); Stamm nime-
nopeasti | nopea | schnell | Adverb (-sti)
nousee | nousta | aufgehen, steigen | Verb Typ 3, Präsens 3. Sg. (Stamm nouse-)
nousen | nousta | einsteigen, aufstehen | Verb Typ 3, Präsens 1. Sg.
nukkuu | nukkua | schlafen | Verb Typ 1, Präsens 3. Sg.; starke Stufe kk
nukun | nukkua | schlafen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel kk → k
nuorena | nuori | jung | Essiv (-na: „als junger Mensch“)
nykyään | nykyään | heutzutage, jetzt | Adverb
nyt | nyt | jetzt | Adverb
näetkö | nähdä | sehen | Verb Typ 2, Präsens 2. Sg. + Fragepartikel -kö
nähdään | nähdä | sich sehen | Passiv Präsens: „wir sehen uns“
odotan | odottaa | warten | Verb Typ 1, Präsens 1. Sg.; tt → t
olen | olla | sein | Präsens 1. Sg.
olin | olla | sein | Imperfekt 1. Sg.
on | olla | sein | Präsens 3. Sg.
onko | olla | sein | Präsens 3. Sg. + Fragepartikel -ko
opettajan | opettaja | Lehrer(in) | Genitiv Sg. vor Postposition
opettajana | opettaja | Lehrer(in) | Essiv (-na: „als“)
opiskelee | opiskella | studieren, lernen | Verb Typ 3, Präsens 3. Sg. (Stamm opiskele-)
opiskelemme | opiskella | studieren, lernen | Verb Typ 3, Präsens 1. Pl.
opiskelin | opiskella | studieren | Verb Typ 3, Imperfekt 1. Sg.
ostan | ostaa | kaufen | Verb Typ 1, Präsens 1. Sg.
otan | ottaa | nehmen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
ottakaa | ottaa | nehmen | Imperativ 2. Pl. (ihr)
otti | ottaa | nehmen | Verb Typ 1, Imperfekt 3. Sg.
ovat | olla | sein | Präsens 3. Pl.
paljon | paljon | viel | Adverb (+ Partitiv)
pankki | pankki | Bank | Nominativ Sg.
pekan | Pekka | Pekka | Genitiv; Stufenwechsel kk → k
pekka | Pekka | Pekka | Vorname, Nominativ
pelaatko | pelata | spielen | Verb Typ 4, Präsens 2. Sg. + Fragepartikel -ko
pelaavat | pelata | spielen | Verb Typ 4, Präsens 3. Pl. (Stamm pelaa-)
perheestäsi | perhe | Familie | Elativ (-stä: „von“) + Possessivsuffix -si
pese | pestä | waschen | Imperativ 2. Sg.
pesen | pestä | waschen, putzen | Verb Typ 3, Präsens 1. Sg. (Stamm pese-)
pidän | pitää | mögen; halten | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel t → d
pihalla | piha | Hof | Adessiv (-lla: „auf“)
pojat | poika | Junge | Nominativ Pl.; Stufenwechsel k → j
puhelimesi | puhelin | Telefon, Handy | + Possessivsuffix -si; Stamm puhelime-
puhuin | puhua | sprechen | Verb Typ 1, Imperfekt 1. Sg.
punainen | punainen | rot | Adjektiv, Nominativ
puuroa | puuro | Brei | Partitiv Sg. (Stoffmenge)
päivät | päivä | Tag | Nominativ Pl.
päällä | päällä | auf (wo?) | Postposition + Genitiv, Ruhelage
pöydällä | pöytä | Tisch | Adessiv (-llä: „auf“); Stufenwechsel t → d
pöydän | pöytä | Tisch | Genitiv Sg.; Stufenwechsel t → d
rakastamme | rakastaa | lieben | Verb Typ 1, Präsens 1. Pl. (+ Partitiv)
rannalla | ranta | Strand, Ufer | Adessiv (-lla: „am“); Stufenwechsel nt → nn
rannalle | ranta | Strand, Ufer | Allativ (-lle: „an … hin“); nt → nn
rautatieasemalla | rautatieasema | Bahnhof | Adessiv (-lla: „am“)
ruoan | ruoka | Essen | Genitiv Sg.; Stufenwechsel k → – (ruoka → ruoan)
ruokaa | ruoka | Essen | Partitiv Sg. (nach ennen / Stoffmenge)
ruuan | ruoka | Essen | Genitiv Sg., Nebenform zu ruoan
sairaaksi | sairas | krank | Translativ (-ksi: „krank werden“); Stamm sairaa-
sairaana | sairas | krank | Essiv (-na: vorübergehender Zustand)
sairaanhoitajaksi | sairaanhoitaja | Krankenpfleger(in) | Translativ (-ksi: Ausbildungsziel)
sairas | sairas | krank | Adjektiv, Nominativ
sairastui | sairastua | erkranken | Verb Typ 1, Imperfekt 3. Sg.
saksaan | Saksa | Deutschland | Illativ (-an: „nach“)
saksaksi | saksa | Deutsch (Sprache) | Translativ (-ksi: „auf Deutsch“)
saksassa | Saksa | Deutschland | Inessiv (-ssa: „in“)
salilla | sali | Fitnessstudio, Halle | Adessiv (-lla: „im/beim“)
samalla | sama | gleich, derselbe | Adessiv (-lla), Kongruenz mit kadulla
sano | sanoa | sagen | Imperativ 2. Sg.
sanot | sanoa | sagen | Verb Typ 1, Präsens 2. Sg.
sateen | sade | Regen | Genitiv Sg.; umgekehrter Stufenwechsel d → t
sateenvarjoa | sateenvarjo | Regenschirm | Partitiv Sg. (nach ilman)
saunassa | sauna | Sauna | Inessiv (-ssa: „in“)
se | se | es | Pronomen, Nominativ/Akkusativ
seinän | seinä | Wand | Genitiv-Akkusativ (ganzes Objekt)
seitsemältä | seitsemän | sieben | Ablativ (-ltä): Uhrzeit „um sieben“
seitsemän | seitsemän | sieben | Zahlwort, Nominativ
siellä | siellä | dort | Adverb (Ortsangabe: wo?)
sinua | sinä | dich | Partitiv 2. Sg.
sinulle | sinä | dir | Allativ 2. Sg. (-lle)
sinun | sinä | dein | Genitiv 2. Sg. (+ Possessivsuffix -si)
sinusta | sinä | aus dir; von dir | Elativ 2. Sg. (-sta)
sinä | sinä | du | Personalpronomen 2. Sg.
sisällä | sisällä | drinnen, in (wo?) | Postposition/Adverb, Ruhelage
sitten | sitten | dann | Adverb
soitan | soittaa | anrufen | Verb Typ 1, Präsens 1. Sg.; Stufenwechsel tt → t
soitti | soittaa | anrufen | Verb Typ 1, Imperfekt 3. Sg.
sokeria | sokeri | Zucker | Partitiv Sg. (nach ilman)
suomea | suomi | Finnisch | Partitiv Sg. (Sprache als Objekt)
suomeksi | suomi | Finnisch | Translativ (-ksi: „auf Finnisch“)
syksyllä | syksy | im Herbst | Adessiv (-llä): Jahreszeit
syödä | syödä | essen | Verb Typ 2, Infinitiv
syön | syödä | essen | Verb Typ 2, Präsens 1. Sg. (Stamm syö-)
syötte | syödä | essen | Verb Typ 2, Präsens 2. Pl. (te)
sängyn | sänky | Bett | Genitiv Sg.; Stufenwechsel nk → ng
sää | sää | Wetter | Nominativ Sg.
takana | takana | hinter (wo?) | Postposition + Genitiv, Ruhelage
takia | takia | wegen | Postposition + Genitiv
takkinne | takki | Jacke | + Possessivsuffix -nne (eure Jacke(n)); starke Stufe kk
talomme | talo | Haus | + Possessivsuffix -mme (unser Haus)
talon | talo | Haus | Genitiv Sg. vor Postposition
talossani | talo | Haus | Inessiv (-ssa) + Possessivsuffix -ni
tampereella | Tampere | Tampere | Adessiv (-lla): Städte auf -e nehmen oft -lla
tampereen | Tampere | Tampere | Genitiv (Stamm Tamperee-)
tapaamme | tavata | treffen | Verb Typ 4, Präsens 1. Pl.; umgekehrter Stufenwechsel v → p
tapaan | tavata | treffen | Verb Typ 4, Präsens 1. Sg.; umgekehrter Stufenwechsel v → p
tapasimme | tavata | treffen | Verb Typ 4, Imperfekt 1. Pl.
tarvitsen | tarvita | brauchen | Verb Typ 5, Präsens 1. Sg. (Stamm tarvitse-)
tarvitsetteko | tarvita | brauchen | Verb Typ 5, Präsens 2. Pl. + Fragepartikel -ko
te | te | ihr | Personalpronomen 2. Pl.
teemme | tehdä | machen | Verb Typ 2, Präsens 1. Pl. (Stamm tee-)
teet | tehdä | machen | Verb Typ 2, Präsens 2. Sg.
teetä | tee | Tee | Partitiv Sg.
teidän | te | euer | Genitiv 2. Pl. (+ Possessivsuffix -nne)
tekee | tehdä | machen | Verb Typ 2, Präsens 3. Sg. (Stamm teke-)
tennistä | tennis | Tennis | Partitiv Sg. (Objekt bei pelata)
tukholmaan | Tukholma | Stockholm | Illativ (-an: „nach“)
tule | tulla | kommen | Imperativ 2. Sg.
tulee | tulla | kommen; werden | Verb Typ 3, Präsens 3. Sg. (Stamm tule-)
tulen | tulla | kommen | Verb Typ 3, Präsens 1. Sg.
tuli | tulla | kommen; werden | Verb Typ 3, Imperfekt 3. Sg.
tuon | tuo | jener, dieser dort | Genitiv-Akkusativ des Demonstrativpronomens
turistina | turisti | Tourist | Essiv (-na: „als“)
turussa | Turku | Turku | Inessiv (-ssa: „in“); Stufenwechsel k → – (Turku → Turu-)
työn | työ | Arbeit | Genitiv Sg. vor Postposition
työskentelee | työskennellä | arbeiten | Verb Typ 3, Präsens 3. Sg.; nn → nt (starke Stufe)
työskentelen | työskennellä | arbeiten | Verb Typ 3, Präsens 1. Sg.
työstäni | työ | Arbeit | Elativ (-stä) + Possessivsuffix -ni
tämä | tämä | dies(er) | Demonstrativpronomen, Nominativ
tänä | tämä | dies(es) | Essiv (tänä vuonna = dieses Jahr)
tässä | tämä | hier | Inessiv: „hier“
tästä | tämä | davon, hierüber | Elativ (-stä)
täällä | täällä | hier | Adverb (Ortsangabe: wo?)
töihin | työ | Arbeit | Illativ Pl. (mennä töihin = zur Arbeit gehen)
töitä | työ | Arbeit | Partitiv Pl. (tehdä töitä = arbeiten)
uimme | uida | schwimmen | Verb Typ 2, Präsens 1. Pl.
ulkona | ulkona | draußen | Adverb (Ortsangabe: wo?)
unohdin | unohtaa | vergessen | Verb Typ 1, Imperfekt 1. Sg.; Stufenwechsel ht → hd
usein | usein | oft | Adverb
vai | vai | oder (in Fragen) | Konjunktion
vaimonsa | vaimo | Ehefrau | Genitiv + Possessivsuffix -nsa (seiner eigenen Frau)
vain | vain | nur | Adverb
valitset | valita | wählen | Verb Typ 5, Präsens 2. Sg. (Stamm valitse-)
valkoiseksi | valkoinen | weiß | Translativ (-ksi); Stamm valkoise-
valmistui | valmistua | Abschluss machen, fertig werden | Verb Typ 1, Imperfekt 3. Sg.
vanhempieni | vanhemmat | Eltern | Genitiv Pl. + Possessivsuffix -ni (meiner Eltern)
vanhenemme | vanheta | älter werden | Verb Typ 6, Präsens 1. Pl. (Stamm vanhene-)
veljensä | veli | Bruder | + Possessivsuffix -nsä (sein/ihr Bruder); Stamm velje-
vesi | vesi | Wasser | Nominativ Sg.
vielä | vielä | noch | Adverb
vien | viedä | (hin)bringen | Verb Typ 2, Präsens 1. Sg.
vieressä | vieressä | neben (wo?) | Postposition + Genitiv, Ruhelage
viestin | viesti | Nachricht | Genitiv-Akkusativ (ganzes Objekt)
viideltä | viisi | fünf | Ablativ (-ltä): Uhrzeit „um fünf“
viikoksi | viikko | Woche | Translativ (-ksi: „für eine Woche“); kk → k
viikonloppuna | viikonloppu | Wochenende | Essiv (-na): „am Wochenende“
viikossa | viikko | Woche | Inessiv: „pro Woche“; kk → k
viime | viime | letzt- | unveränderliches Adjektiv (viime vuonna)
viisi | viisi | fünf | Zahlwort, Nominativ
vuonna | vuosi | Jahr | Essiv (-na): Zeitangabe „im Jahr“
yhdessä | yhdessä | zusammen | Adverb
yliopistossa | yliopisto | Universität | Inessiv (-ssa: „an/in“)
ymmärrä | ymmärtää | verstehen | Verneinungsform (en ymmärrä); Stufenwechsel rt → rr
ymmärtää | ymmärtää | verstehen | Verb Typ 1, Präsens 3. Sg.; starke Stufe rt
ystävälleni | ystävä | Freund(in) | Allativ (-lle) + Possessivsuffix -ni
ystävämme | ystävä | Freund(in) | + Possessivsuffix -mme (unser(e) Freund(e))
ystävän | ystävä | Freund(in) | Genitiv Sg. vor Postposition
ystävänä | ystävä | Freund(in) | Essiv (-nä: „als, für“)
yöksi | yö | Nacht | Translativ (-ksi: „für … Nächte“)
äidilleen | äiti | Mutter | Allativ + Possessivsuffix 3. Person (-en = Vokaldehnung + n); t → d
äidillensä | äiti | Mutter | Allativ + Possessivsuffix -nsä (Variante zu äidilleen)
äitinsä | äiti | Mutter | + Possessivsuffix -nsä (seine/ihre Mutter)
`,
  texts: [],
  families: [],
};
