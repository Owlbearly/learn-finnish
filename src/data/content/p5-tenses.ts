import type { ContentPack, Gap, Sentence } from "../types";

const g = (answer: string, options: string[], why: string): Gap => ({ answer, options, why });

type Extra = Pick<Sentence, "note" | "alt">;
function mk(topic: string) {
  return (id: string, level: number, fi: string, de: string, gap?: Gap, extra: Extra = {}): Sentence => ({
    id,
    topic,
    level,
    fi,
    de,
    ...(gap ? { gap } : {}),
    ...extra,
  });
}

const imp = mk("imperfekt");
const imv = mk("imperativ");
const per = mk("perfekt");
const kon = mk("konditional");
const pas = mk("passiv");
const siv = mk("nebensaetze");

export const pack: ContentPack = {
  name: "p5-tenses",
  topics: [
    {
      id: "imperfekt",
      kind: "grammar",
      title: "Vergangenheit (Imperfekt)",
      titleFi: "imperfekti",
      order: 17,
      level: 5,
      icon: "⏪",
      summary: "Was gestern passiert ist: das -i- der Vergangenheit, Stammänderungen und die verneinte Vergangenheit.",
      explanation: `### Bildung
Das finnische Imperfekt (Präteritum) wird mit dem Kennzeichen **-i-** gebildet, das zwischen Stamm und Personalendung tritt. Die Personalendungen sind dieselben wie im Präsens – nur die 3. Person Singular hat keine Längung, sondern endet einfach auf **-i**.

| Person | puhua (Typ 1) | tulla (Typ 3) | haluta (Typ 4) | tarvita (Typ 5)
| minä | puhuin | tulin | halusin | tarvitsin
| sinä | puhuit | tulit | halusit | tarvitsit
| hän | puhui | tuli | halusi | tarvitsi
| me | puhuimme | tulimme | halusimme | tarvitsimme
| te | puhuitte | tulitte | halusitte | tarvitsitte
| he | puhuivat | tulivat | halusivat | tarvitsivat

### Was passiert mit dem Stammvokal?
- **-a/-ä** nach o/u im Wort oder in kurzen Stämmen fällt meist weg: *odottaa → odotin*, *pitää → pidin*.
- **-a → -o** in vielen zweisilbigen Verben mit a in der ersten Silbe: *antaa → annoin*, *sataa → satoi*.
- **-e** fällt weg: *lukea → luin*, *lähteä → lähdin*.
- Langer Vokal wird gekürzt: *saada → sain*, *jäädä → jäin*.
- Diphthonge: *syödä → söin*, *juoda → join* (der erste Vokal fällt).
- Typ 4 und 5 bekommen **-s-** bzw. **-tsi-**: *halusin*, *tarvitsin*.

### Besondere Stämme mit -si-
Bei einigen Verben auf **-ta/-tä** wird *t* vor *i* zu **s**: *tietää → tiesin*, *ymmärtää → ymmärsin*, *löytää → löysin*. Der Stufenwechsel gilt wie im Präsens: geschlossene Silbe = schwache Stufe (*lähteä → lähdin*, aber *hän lähti*).

### Verneinung
Verneinte Vergangenheit = **Verneinungsverb + Partizip auf -nut/-nyt** (Singular) bzw. **-neet** (Plural):

| Person | Form
| minä / sinä / hän | en / et / ei puhunut
| me / te / he | emme / ette / eivät puhuneet

Bei Typ 3 assimiliert sich das *n*: *tulla → tullut*, *mennä → mennyt*, *opiskella → opiskellut*.

### Beispiele
- **Söin** aamulla puuroa. – Ich habe morgens Brei gegessen.
- **Lähdimme** aikaisin. – Wir sind früh losgefahren.
- **Emme tulleet** juhliin. – Wir sind nicht zum Fest gekommen.
- Hän **ei syönyt** mitään. – Er hat nichts gegessen.

Im Deutschen erzählt man im Gespräch oft im Perfekt („ich habe gegessen“) – im Finnischen ist dafür das Imperfekt die normale Erzählzeit.`,
    },
    {
      id: "imperativ",
      kind: "grammar",
      title: "Imperativ & Aufforderungen",
      titleFi: "imperatiivi",
      order: 18,
      level: 5,
      icon: "📣",
      summary: "Befehle, Bitten und Verbote: Tule!, Tulkaa!, Älä mene!, Mennään! und das höfliche Voisitko …?",
      explanation: `### Imperativ für eine Person (sinä)
Die Form entspricht dem **Präsensstamm ohne Endung** – also der „minä“-Form ohne *-n*. Dadurch steht meist die **schwache Stufe**:

| Infinitiv | minä-Form | Imperativ sg.
| tulla | tulen | **Tule!**
| odottaa | odotan | **Odota!**
| ottaa | otan | **Ota!**
| sulkea | suljen | **Sulje!**
| kertoa | kerron | **Kerro!**
| olla | olen | **Ole!**

### Imperativ für mehrere Personen / Sie (te)
Endung **-kaa/-kää** an den Infinitivstamm, mit **starker Stufe**: *tulla → Tulkaa!*, *istua → Istukaa!*, *pukea → Pukekaa!*, *odottaa → Odottakaa!*, *olla → Olkaa!*

### Verbote
- Singular: **Älä** + Imperativstamm: *Älä mene! Älä unohda!*
- Plural: **Älkää** + Form auf **-ko/-kö**: *Älkää huutako! Älkää koskeko!*
- Das Objekt steht nach Verneinung im **Partitiv**: *Älä unohda avaimia!*

### „Lasst uns …!“ – das Passiv
Gesprochen und geschrieben sagt man für „Lass(t) uns …“ einfach die **Passivform**: *Mennään!* („Gehen wir!“), *Syödään!*. Verneint: **Ei mennä vielä.** („Lass uns noch nicht gehen.“)

### Höflich bitten
Ein nackter Imperativ wirkt im Finnischen weniger unhöflich als im Deutschen, aber für Bitten an Fremde benutzt man gern den **Konditional mit -ko/-kö**:
- **Voisitko** auttaa? – Könntest du helfen?
- **Saisinko** lasin vettä? – Könnte ich ein Glas Wasser bekommen?

Weitere Weichmacher: *ole hyvä ja …*, *ole kiltti ja …*, ein angehängtes *kiitos*.

### Beispiele
- **Ota** takki mukaan! – Nimm eine Jacke mit!
- **Istukaa** alas! – Setzen Sie sich / Setzt euch!
- **Älä huoli!** – Mach dir keine Sorgen!
- **Lähdetään!** – Lass uns gehen!`,
    },
    {
      id: "perfekt",
      kind: "grammar",
      title: "Perfekt & Plusquamperfekt",
      titleFi: "perfekti ja pluskvamperfekti",
      order: 20,
      level: 6,
      icon: "✅",
      summary: "olen käynyt, en ole koskaan nähnyt, olin jo syönyt – Erfahrungen, Ergebnisse und Vorvergangenheit.",
      explanation: `### Bildung
**Perfekt** = *olla* im Präsens + **Partizip Perfekt Aktiv** (-nut/-nyt im Singular, -neet im Plural).
**Plusquamperfekt** = *olla* im Imperfekt + dasselbe Partizip.

| Person | Perfekt | Plusquamperfekt
| minä | olen käynyt | olin käynyt
| sinä | olet käynyt | olit käynyt
| hän | on käynyt | oli käynyt
| me | olemme käyneet | olimme käyneet
| te | olette käyneet | olitte käyneet
| he | ovat käyneet | olivat käyneet

### Das Partizip
- Vokalharmonie: *asunut*, aber *nähnyt*, *syönyt*.
- Typ 3 assimiliert: *tulla → tullut*, *mennä → mennyt*, *opiskella → opiskellut*.
- Typ 4: *haluta → halunnut*, *tavata → tavannut*. Typ 2 mit -h-: *tehdä → tehnyt*, *nähdä → nähnyt*.
- Achtung: Das Partizip richtet sich nach der **Zahl** – *me olemme asuneet*, nicht *asunut*.

### Verneinung
**ei + ole/ollut + Partizip**: *En ole koskaan nähnyt revontulia.* – *En ollut vielä syönyt.* Objekte stehen nach Verneinung im Partitiv.

### Wann Perfekt, wann Imperfekt?
Anders als im Deutschen ist das finnische Perfekt **keine Erzählzeit**. Man benutzt es für:
- **Erfahrungen** ohne Zeitpunkt: *Olen käynyt Lapissa.* (aber: *Kävin Lapissa viime vuonna.*)
- **Zustände bis jetzt**: *Olemme asuneet täällä viisi vuotta.* (Deutsch: „Wir wohnen seit fünf Jahren hier.“)
- **Ergebnisse mit Bezug zur Gegenwart**: *Hän on juuri lähtenyt.*

Typische Signalwörter: **jo** (schon), **vielä** (in Fragen/Verneinung: noch), **koskaan** (je/nie), **juuri** (gerade eben).

### Plusquamperfekt
Für etwas, das **vor** einem anderen Ereignis in der Vergangenheit abgeschlossen war: *Kun tulimme asemalle, juna oli jo lähtenyt.* – Als wir zum Bahnhof kamen, war der Zug schon abgefahren.`,
    },
    {
      id: "konditional",
      kind: "grammar",
      title: "Konditional",
      titleFi: "konditionaali",
      order: 22,
      level: 7,
      icon: "💭",
      summary: "haluaisin, voisitko, jos minulla olisi rahaa – Wünsche, Höflichkeit und irreale Bedingungen.",
      explanation: `### Bildung
Kennzeichen **-isi-** zwischen Stamm und Personalendung. Die 3. Person Singular endet einfach auf **-isi** (keine Längung). Stufenwechsel: Vor *-isi-* steht die **starke Stufe** (die Silbe ist offen): *lukea → lukisin*, *ottaa → ottaisin*.

| Person | haluta | voida | olla | tehdä
| minä | haluaisin | voisin | olisin | tekisin
| sinä | haluaisit | voisit | olisit | tekisit
| hän | haluaisi | voisi | olisi | tekisi
| me | haluaisimme | voisimme | olisimme | tekisimme
| te | haluaisitte | voisitte | olisitte | tekisitte
| he | haluaisivat | voisivat | olisivat | tekisivät

### Stammregeln
- Stammvokal **-e** und **-i** fallen weg: *lukea → lukisin*, *leikkiä → leikkisin*.
- Langer Vokal wird gekürzt: *saada → saisin*, *jäädä → jäisin*, *voida → voisin*.
- Diphthonge uo/yö/ie verlieren ihren ersten Vokal: *syödä → söisin*, *juoda → joisin*, *viedä → veisin*.
- Typ 2 mit -h-: *tehdä → tekisin*, *nähdä → näkisin*.
- Verneinung: **en/et/ei … + Konditionalstamm ohne Personalendung**: *en ostaisi*, *emme menisi*.

### Konditional Perfekt
**olisi- + Partizip**: *olisin tullut* (ich wäre gekommen), *olisimme lähteneet*. Damit drückt man Irreales in der Vergangenheit aus.

### Verwendung
- **Höflichkeit**: *Haluaisin kahvia. Voisitko auttaa? Saisinko laskun?*
- **Wünsche und Ratschläge**: *Sinun pitäisi levätä.* (Du solltest dich ausruhen.)
- **Irreale Bedingung** – im Finnischen steht der Konditional in **beiden** Satzteilen, auch im *jos*-Satz: *Jos minulla olisi rahaa, ostaisin auton.* (Deutsch: „Wenn ich Geld hätte, würde ich …“)
- **Indirekte Rede über die Zukunft**: *Hän sanoi, että hän tulisi huomenna.*

### Beispiele
- **Menisin** mielelläni. – Ich würde gern gehen.
- Mitä **tekisit**? – Was würdest du tun?
- **Olisin auttanut**, jos olisit kysynyt. – Ich hätte geholfen, wenn du gefragt hättest.`,
    },
    {
      id: "passiv",
      kind: "grammar",
      title: "Passiv",
      titleFi: "passiivi",
      order: 23,
      level: 7,
      icon: "👥",
      summary: "Suomessa puhutaan suomea, talo rakennettiin 1920, lähdetään! – das unpersönliche Passiv.",
      explanation: `### Was ist das finnische Passiv?
Das finnische Passiv ist **unpersönlich**: Es sagt, dass *jemand* (Menschen, „man“) etwas tut, ohne zu sagen wer. Es gibt nur **eine Form** für alle Fälle, und ein Täter („von …“) wird normalerweise nicht genannt. Deutsch übersetzt man oft mit **„man“** oder mit „wird … -t“.

### Formen
| Zeit | puhua | syödä | avata | lähteä
| Präsens | puhutaan | syödään | avataan | lähdetään
| verneint | ei puhuta | ei syödä | ei avata | ei lähdetä
| Imperfekt | puhuttiin | syötiin | avattiin | lähdettiin
| verneint | ei puhuttu | ei syöty | ei avattu | ei lähdetty
| Perfekt | on puhuttu | on syöty | on avattu | on lähdetty
| Plusquamperf. | oli puhuttu | oli syöty | oli avattu | oli lähdetty

### Bildungshinweise
- Typ 1: schwache Stufe + **-taan/-tään**, Stammvokal *a/ä* → *e*: *viettää → vietetään*, *odottaa → odotetaan*, *lähettää → lähetetään*.
- Typ 2/3: Infinitiv + *-an/-än*: *syödä → syödään*, *tulla → tullaan*, *opiskella → opiskellaan*.
- Typ 4/5: *avata → avataan*, *tarvita → tarvitaan*.
- Imperfekt: *-ttiin/-tiin*, verneint und Perfekt mit dem Partizip auf *-ttu/-tty* bzw. *-tu/-ty*.

### Objekt im Passiv
Ein Totalobjekt steht in der **Grundform** (Nominativ): *Talo rakennettiin.* Teilobjekte bleiben im **Partitiv**: *Suomessa puhutaan suomea.*

### Passiv als „Lasst uns …!“
**Lähdetään!** – Gehen wir! **Syödään!** – Lasst uns essen!

### Umgangssprache: „me mennään“
In der gesprochenen Sprache ersetzt das Passiv die 1. Person Plural: *Me mennään* statt standardsprachlich *Me menemme*. Das hörst du überall – schreiben solltest du aber *menemme*.

### Kein Passiv
*Täällä ei saa tupakoida* (Hier darf man nicht rauchen) ist **kein** Passiv, sondern *saada* in der 3. Person Singular mit unbestimmtem Subjekt.`,
    },
    {
      id: "nebensaetze",
      kind: "grammar",
      title: "Nebensätze & Relativsätze",
      titleFi: "sivulauseet",
      order: 24,
      level: 8,
      icon: "🔗",
      summary: "että, koska, kun, jos, vaikka, kunnes, Relativpronomen joka/jonka/jossa … und indirekte Fragen.",
      explanation: `### Konjunktionen
Finnische Nebensätze haben **normale Wortstellung** (das Verb rutscht nicht ans Ende wie im Deutschen) und werden immer mit Komma abgetrennt.

| Konjunktion | Bedeutung | Beispiel
| että | dass | Luulen, että sataa.
| koska | weil | En tullut, koska olin sairas.
| kun | als / wenn (zeitlich) | Kun tulin kotiin, …
| jos | wenn / falls, ob | Jos sataa, …
| vaikka | obwohl | … vaikka satoi.
| kunnes | bis | Odota, kunnes tulen.

*että + ei* verschmelzen gern zu **ettei** (ettei hän tule). Achtung: **kun** = zeitlich, **jos** = Bedingung.

### Relativpronomen joka / jotka
*joka* (Sg.) und *jotka* (Pl.) werden dekliniert – der Kasus richtet sich nach der **Rolle im Relativsatz**:

| Kasus | Singular | Plural | Beispiel
| Nominativ | joka | jotka | mies, joka asuu …
| Genitiv/Akk. | jonka | joiden / jotka | kirja, jonka ostin
| Partitiv | jota | joita | elokuva, jota katsoimme
| Inessiv | jossa | joissa | talo, jossa asumme
| Elativ | josta | joista | asia, josta puhuimme
| Ablativ | jolta | joilta | mies, jolta ostimme
| Adessiv | jolla | joilla | perheet, joilla on lapsia

Nach Postpositionen steht der Genitiv: *nainen, jonka kanssa puhuimme*. Nach *kaikki, se, mikään* oder einem ganzen Satz benutzt man **mikä**: *Kaikki, mitä hän sanoi, oli totta.*

### Indirekte Fragen
Fragewörter leiten indirekte Fragen ein – auch hier ohne Umstellung: *En tiedä, missä hän asuu.* – *Kysyin, kuka oli soittanut.* Ja/Nein-Fragen bekommen **-ko/-kö** am Verb (= „ob“): *Hän kysyi, olinko jo syönyt.*

### Beispiele
- Ihmiset, **jotka** asuvat maalla, käyttävät autoa.
- **Vaikka** olen asunut täällä kauan, en ole tottunut pimeyteen.
- Voitko kertoa, **mihin** aikaan juna lähtee?`,
    },
  ],
  sentences: [
    // ───────────── imperfekt ─────────────
    imp("imp-001", 5, "Eilen puhuin äidin kanssa puhelimessa.", "Gestern habe ich mit meiner Mutter telefoniert.",
      g("puhuin", ["puhun", "puhui", "puhuit"], "„Eilen“ (gestern) verlangt Vergangenheit: puhu- + -i- + -n (minä) = puhuin."),
      { note: "Wo Deutsch im Gespräch das Perfekt („habe telefoniert“) benutzt, steht im Finnischen das Imperfekt.", alt: ["Puhuin eilen äidin kanssa puhelimessa."] }),
    imp("imp-002", 5, "Söin aamulla puuroa ja join kahvia.", "Morgens habe ich Brei gegessen und Kaffee getrunken.",
      g("Söin", ["Syön", "Söi", "Söit"], "syödä: Im Diphthong yö fällt vor dem -i- das y weg → söin; -n = minä."),
      { note: "Ebenso: juoda → join. Die Objekte stehen im Partitiv (puuroa, kahvia), weil es um eine unbestimmte Menge geht." }),
    imp("imp-003", 5, "Hän tuli kotiin vasta kymmeneltä.", "Er kam erst um zehn nach Hause.",
      g("tuli", ["tulee", "tulin", "tulivat"], "3. Person Singular Imperfekt endet einfach auf -i: tul- + -i = tuli."),
      { note: "kymmeneltä = „um zehn (Uhr)“ – Uhrzeiten stehen im Ablativ." }),
    imp("imp-004", 5, "Halusin ostaa uuden takin, mutta se oli liian kallis.", "Ich wollte eine neue Jacke kaufen, aber sie war zu teuer.",
      g("Halusin", ["Haluan", "Halusi", "Halusit"], "haluta (Typ 4) bildet das Imperfekt mit -s-: halua- + -s- + -i- + -n → halusin."),
      { alt: ["Halusin ostaa uuden takin mutta se oli liian kallis."] }),
    imp("imp-005", 6, "Tarvitsimme apua, joten soitimme naapurille.", "Wir brauchten Hilfe, also riefen wir den Nachbarn an.",
      g("Tarvitsimme", ["Tarvitsemme", "Tarvitsivat", "Tarvitsitte"], "tarvita (Typ 5): Stamm tarvitse-, im Imperfekt -e- → -i-: tarvitsimme."),
      { note: "soittaa + Allativ: man ruft „jemandem“ an (naapurille). soittaa → soitimme: Das a fällt vor -i-, tt → t (geschlossene Silbe)." }),
    imp("imp-006", 6, "Ymmärsin kysymyksen vasta toisella kerralla.", "Ich habe die Frage erst beim zweiten Mal verstanden.",
      g("Ymmärsin", ["Ymmärrän", "Ymmärsi", "Ymmärsit"], "ymmärtää gehört zu den Verben mit t → s vor -i-: ymmärsin (nicht *ymmärtin)."),
      { note: "toisella kerralla – „beim zweiten Mal“ steht im Adessiv." }),
    imp("imp-007", 6, "Tiesitkö, että Mikko muutti Tampereelle?", "Wusstest du, dass Mikko nach Tampere gezogen ist?",
      g("Tiesitkö", ["Tiedätkö", "Tiesikö", "Tiesinkö"], "tietää → tiesi- (t → s vor -i-); sinä = -t, Frage = -kö: tiesitkö."),
      { note: "Tampere → Tampereelle: Viele Städte stehen mit „nach“ im Allativ statt im Illativ." }),
    imp("imp-008", 6, "Lähdimme mökille aikaisin aamulla.", "Wir sind früh am Morgen zum Ferienhaus aufgebrochen.",
      g("Lähdimme", ["Lähdemme", "Lähtivät", "Lähdin"], "lähteä: e fällt vor -i-; die Silbe läh-dim ist geschlossen → schwache Stufe t → d: lähdimme."),
      { note: "Vergleiche: hän lähti (offene Silbe → starke Stufe t)." }),
    imp("imp-009", 5, "En puhunut hänen kanssaan koko iltana.", "Ich habe den ganzen Abend nicht mit ihm gesprochen.",
      g("puhunut", ["puhu", "puhuin", "puhuneet"], "Verneinte Vergangenheit: en + Partizip auf -nut (Singular) – puhunut."),
      { note: "koko iltana = „den ganzen Abend“ (Essiv für Zeitangaben)." }),
    imp("imp-010", 6, "Emme tulleet juhliin, koska lapsi oli sairas.", "Wir sind nicht zum Fest gekommen, weil das Kind krank war.",
      g("tulleet", ["tullut", "tulimme", "tule"], "Nach emme/ette/eivät steht das Partizip im Plural: tulleet. Bei tulla assimiliert -nut zu -lut/-leet."),
      { note: "juhlat (Fest) ist im Finnischen ein Pluralwort → juhliin." }),
    imp("imp-011", 5, "Kävin kaupassa ja ostin leipää ja maitoa.", "Ich war im Laden und habe Brot und Milch gekauft.",
      g("Kävin", ["Käyn", "Kävi", "Kävit"], "käydä: Der lange Stamm käy- wird vor -i- zu käv-: kävin."),
      { note: "käydä kaupassa = „einkaufen gehen, im Laden vorbeischauen“ – mit Inessiv, weil man dort war und zurückkommt." }),
    imp("imp-012", 6, "Bussi oli myöhässä, joten odotimme puoli tuntia.", "Der Bus hatte Verspätung, also haben wir eine halbe Stunde gewartet.",
      g("odotimme", ["odotamme", "odottivat", "odotitte"], "odottaa: a fällt vor -i-, geschlossene Silbe -tim- → schwache Stufe tt → t: odotimme."),
      { note: "olla myöhässä = „Verspätung haben“, wörtlich „in der Verspätung sein“." }),
    imp("imp-013", 5, "Asuin lapsena Oulussa.", "Als Kind habe ich in Oulu gewohnt.",
      g("Asuin", ["Asun", "Asui", "Asuit"], "asua: Stamm asu- + -i- + -n = asuin."),
      { note: "lapsena = „als Kind“ – der Essiv beschreibt einen Zustand / eine Rolle.", alt: ["Lapsena asuin Oulussa."] }),
    imp("imp-014", 6, "He menivät elokuviin, mutta minä jäin kotiin.", "Sie gingen ins Kino, aber ich blieb zu Hause.",
      g("jäin", ["jään", "jäi", "jäit"], "jäädä: Der lange Vokal wird vor -i- gekürzt: jää- → jä- + i + n = jäin."),
      { note: "jäädä kotiin – „zu Hause bleiben“ steht im Finnischen mit Illativ (Richtung)!" }),
    imp("imp-015", 6, "Luin kirjan loppuun yhdessä illassa.", "Ich habe das Buch an einem Abend zu Ende gelesen.",
      g("Luin", ["Luen", "Luki", "Luit"], "lukea: e fällt vor -i-, geschlossene Silbe -luin- → k fällt weg (schwache Stufe): luin. Aber: hän luki."),
      { note: "lukea loppuun = „zu Ende lesen“; das Totalobjekt kirjan steht im Akkusativ." }),
    imp("imp-016", 6, "Ostitko liput eilen?", "Hast du die Karten gestern gekauft?",
      g("Ostitko", ["Ostatko", "Ostiko", "Ostinko"], "osta- + -i- (a fällt) + -t (sinä) + -ko: ostitko."),
      { note: "liput – Plural von lippu (Karte), Stufenwechsel pp → p." }),
    imp("imp-017", 6, "Pidin elokuvasta todella paljon.", "Der Film hat mir wirklich sehr gut gefallen.",
      g("Pidin", ["Pidän", "Piti", "Pidit"], "pitää: ä fällt vor -i-, geschlossene Silbe → t → d: pidin; hän piti."),
      { note: "pitää + Elativ: „etwas mögen“ – wörtlich „von etwas halten“ (elokuvasta)." }),
    imp("imp-018", 6, "Hän ei syönyt mitään koko päivänä.", "Er hat den ganzen Tag nichts gegessen.",
      g("syönyt", ["söi", "syöneet", "syö"], "Verneinte Vergangenheit, 3. Sg.: ei + syönyt (Partizip auf -nyt wegen Vokalharmonie)."),
      { note: "Nach Verneinung steht das Objekt im Partitiv: mitään (nichts)." }),
    imp("imp-019", 7, "Emme ymmärtäneet, mitä opettaja sanoi.", "Wir haben nicht verstanden, was der Lehrer gesagt hat.",
      g("ymmärtäneet", ["ymmärtänyt", "ymmärsimme", "ymmärrä"], "emme + Partizip Plural: ymmärtäneet. Im Partizip steht die starke Stufe rt (nicht rs!)."),
      { note: "sanoa → sanoi (3. Sg. Imperfekt): o bleibt, nur -i wird angehängt." }),
    imp("imp-020", 6, "Kun olin nuori, pelasin jalkapalloa joka päivä.", "Als ich jung war, habe ich jeden Tag Fußball gespielt.",
      g("pelasin", ["pelaan", "pelasi", "pelaisin"], "pelata (Typ 4): Imperfekt mit -s-: pelasin. pelaisin wäre Konditional („ich würde spielen“)."),
      { note: "pelata + Partitiv: jalkapalloa." }),
    imp("imp-021", 7, "Satoi koko päivän, joten pysyimme sisällä.", "Es hat den ganzen Tag geregnet, deshalb sind wir drinnen geblieben.",
      g("Satoi", ["Sataa", "Satoivat", "Satanut"], "sataa: In zweisilbigen Verben mit a – a wird das zweite a vor -i- zu o: satoi."),
      { note: "Wetterverben haben kein Subjekt – kein „es“ wie im Deutschen." }),
    imp("imp-022", 7, "Annoin hänelle kirjan syntymäpäivälahjaksi.", "Ich habe ihr ein Buch zum Geburtstag geschenkt.",
      g("Annoin", ["Annan", "Antoi", "Annoit"], "antaa: a → o vor -i-, geschlossene Silbe → nt → nn: annoin. Aber: hän antoi."),
      { note: "syntymäpäivälahjaksi – Translativ (-ksi): „als / zum Geburtstagsgeschenk“." }),
    imp("imp-023", 7, "Tiesin heti, että jotain oli vialla.", "Ich wusste sofort, dass etwas nicht stimmte.",
      g("Tiesin", ["Tiedän", "Tiesi", "Tiesit"], "tietää: t → s vor dem -i- der Vergangenheit: tiesin."),
      { note: "olla vialla = „kaputt sein / nicht in Ordnung sein“." }),
    imp("imp-024", 6, "Lapset eivät halunneet mennä nukkumaan.", "Die Kinder wollten nicht schlafen gehen.",
      g("halunneet", ["halunnut", "halusivat", "halua"], "eivät + Partizip Plural: haluta → halunneet (Typ 4: -nn-)."),
      { note: "mennä nukkumaan – „schlafen gehen“ mit dem 3. Infinitiv im Illativ (-maan)." }),
    imp("imp-025", 8, "Muutimme Suomeen kolme vuotta sitten, ja aluksi en ymmärtänyt sanaakaan.", "Wir sind vor drei Jahren nach Finnland gezogen, und anfangs habe ich kein einziges Wort verstanden.",
      g("ymmärtänyt", ["ymmärtäneet", "ymmärsin", "ymmärrä"], "en (minä) + Partizip Singular: ymmärtänyt."),
      { note: "sanaakaan = Partitiv + -kaan: „nicht ein einziges Wort“. muuttaa → muutimme (a fällt, tt → t)." }),

    // ───────────── imperativ ─────────────
    imv("imv-001", 5, "Tule tänne, Liisa!", "Komm her, Liisa!",
      g("Tule", ["Tulet", "Tulee", "Tulla"], "Imperativ Singular = Präsensstamm ohne Endung: tule-n → Tule!"),
      { alt: ["Liisa, tule tänne!"] }),
    imv("imv-002", 5, "Odota hetki, minä tulen heti!", "Warte kurz, ich komme sofort!",
      g("Odota", ["Odotat", "Odottaa", "Odotan"], "Wie die minä-Form ohne -n (odota-n) → schwache Stufe: Odota!"),
      { note: "hetki im Akkusativ ohne Endung: „einen Moment“." }),
    imv("imv-003", 5, "Ota takki mukaan, ulkona on kylmä.", "Nimm eine Jacke mit, draußen ist es kalt.",
      g("Ota", ["Otat", "Ottaa", "Otan"], "ottaa → minä otan → Imperativ Ota! (schwache Stufe tt → t)."),
      { note: "Beim Imperativ steht das Totalobjekt in der Grundform: takki (nicht takin)." }),
    imv("imv-004", 5, "Sulje ovi, kiitos.", "Mach bitte die Tür zu.",
      g("Sulje", ["Suljet", "Sulkea", "Sulkee"], "sulkea → minä suljen → Sulje! (lk → lj)."),
      { note: "Ein angehängtes „kiitos“ macht den Imperativ freundlich." }),
    imv("imv-005", 5, "Tulkaa sisään ja istukaa alas!", "Kommen Sie herein und setzen Sie sich!",
      g("istukaa", ["istu", "istutte", "istuvat"], "Für mehrere Personen oder höflich: -kaa an den Stamm: istu- + -kaa = istukaa."),
      { note: "te-Imperativ dient auch als höfliches „Sie“." }),
    imv("imv-006", 6, "Lapset, pukekaa kengät jalkaan!", "Kinder, zieht eure Schuhe an!",
      g("pukekaa", ["pue", "pukevat", "pukea"], "Plural-Imperativ mit starker Stufe: puke- + -kaa = pukekaa (Singular: pue!)."),
      { note: "pukea kengät jalkaan – wörtlich „die Schuhe an den Fuß ziehen“; Finnisch nennt den Körperteil im Illativ." }),
    imv("imv-007", 5, "Älä mene vielä!", "Geh noch nicht!",
      g("mene", ["menet", "mennä", "menee"], "Verbot im Singular: Älä + Imperativstamm (= minä-Form ohne -n): älä mene."),
      { note: "älä ist eine Form des Verneinungsverbs ei." }),
    imv("imv-008", 6, "Älä unohda avaimia!", "Vergiss die Schlüssel nicht!",
      g("unohda", ["unohdat", "unohtaa", "unohtanut"], "älä + Stamm in schwacher Stufe: unohtaa → unohda."),
      { note: "Nach dem verneinten Imperativ steht das Objekt im Partitiv: avaimia (von avain)." }),
    imv("imv-009", 6, "Älkää huutako, vauva nukkuu!", "Schreit nicht, das Baby schläft!",
      g("huutako", ["huuda", "huudatte", "huutaa"], "Verbot im Plural: Älkää + Stamm in starker Stufe + -ko/-kö: huutako."),
      { note: "Singular wäre: Älä huuda!" }),
    imv("imv-010", 7, "Älkää koskeko tauluihin!", "Bitte die Bilder nicht berühren!",
      g("koskeko", ["koske", "koskevat", "koskea"], "Älkää + -ko/-kö (Vokalharmonie: koske- → koskeko)."),
      { note: "koskea + Illativ: „etwas berühren“ – wörtlich „in etwas hinein berühren“ (tauluihin)." }),
    imv("imv-011", 5, "Mennään kahville!", "Lass uns einen Kaffee trinken gehen!",
      g("Mennään", ["Menemme", "Menkää", "Mennä"], "„Lass(t) uns …“ wird mit der Passivform ausgedrückt: mennä → mennään."),
      { note: "mennä kahville – „auf einen Kaffee gehen“ (Allativ)." }),
    imv("imv-012", 6, "Syödään ensin ja lähdetään sitten.", "Lass uns erst essen und dann losgehen.",
      g("lähdetään", ["lähdemme", "lähtekää", "lähteä"], "Passiv als Aufforderung „lass uns“: lähteä → lähdetään (schwache Stufe t → d)."),
      { alt: ["Syödään ensin, ja lähdetään sitten."] }),
    imv("imv-013", 6, "Ei mennä vielä kotiin.", "Lass uns noch nicht nach Hause gehen.",
      g("mennä", ["mennään", "mene", "menkää"], "Verneintes „lass uns“: ei + Passivstamm ohne -än: ei mennä."),
      { note: "Das ist dieselbe Form wie das verneinte Passiv („man geht nicht“)." }),
    imv("imv-014", 6, "Voisitko auttaa minua hetken?", "Könntest du mir kurz helfen?",
      g("Voisitko", ["Voisin", "Voisi", "Voisimme"], "Höfliche Bitte an „du“: Konditional voisi- + -t + -ko = voisitko."),
      { note: "auttaa + Partitiv: auttaa minua (im Deutschen Dativ „mir“).", alt: ["Voisitko auttaa minua hetken."] }),
    imv("imv-015", 6, "Saisinko lasin vettä?", "Könnte ich ein Glas Wasser bekommen?",
      g("Saisinko", ["Saisitko", "Saisiko", "Saada"], "Ich-Bitte: saada → Konditional saisin + -ko."),
      { note: "Höflicher als „Saanko …?“. lasin vettä: Mengenangabe + Partitiv." }),
    imv("imv-016", 5, "Ole hyvä ja istu alas.", "Bitte setz dich.",
      g("istu", ["istut", "istuu", "istua"], "Imperativ Singular: istu-n → istu!"),
      { note: "„Ole hyvä ja …“ = „sei so gut und …“ – eine höfliche Einleitung." }),
    imv("imv-017", 6, "Kerro minulle, mitä tapahtui.", "Erzähl mir, was passiert ist.",
      g("Kerro", ["Kerrot", "Kertoa", "Kertoo"], "kertoa → minä kerron → Kerro! (rt → rr)."),
      { alt: ["Kerro, mitä tapahtui."] }),
    imv("imv-018", 6, "Soita minulle, kun olet perillä!", "Ruf mich an, wenn du angekommen bist!",
      g("Soita", ["Soitat", "Soittaa", "Soitan"], "soittaa → minä soitan → Soita! (tt → t)."),
      { note: "olla perillä = „am Ziel sein, angekommen sein“." }),
    imv("imv-019", 6, "Lapset, olkaa hiljaa!", "Kinder, seid still!",
      g("olkaa", ["ole", "olette", "olla"], "olla → Plural-Imperativ: ol- + -kaa = olkaa."),
      { note: "olla hiljaa = „still sein“." }),
    imv("imv-020", 6, "Älä huoli, kaikki menee hyvin.", "Mach dir keine Sorgen, alles wird gut.",
      g("huoli", ["huolit", "huolia", "huolinut"], "Älä + Imperativstamm: huolia → älä huoli."),
      { note: "Feste Wendung. kaikki menee hyvin – wörtlich „alles geht gut“." }),
    imv("imv-021", 7, "Ole kiltti ja anna minulle se kirja.", "Sei so lieb und gib mir das Buch.",
      g("anna", ["annat", "antaa", "annan"], "antaa → minä annan → anna! (nt → nn)."),
      { note: "„Ole kiltti ja …“ ist eine typische freundliche Bitte, vor allem an Kinder oder Vertraute." }),
    imv("imv-022", 8, "Kirjoittakaa nimenne lomakkeeseen ja odottakaa vuoroanne.", "Tragen Sie Ihren Namen in das Formular ein und warten Sie, bis Sie an der Reihe sind.",
      g("odottakaa", ["odota", "odotatte", "odottavat"], "Höflicher Plural-Imperativ mit starker Stufe: odotta- + -kaa = odottakaa."),
      { note: "nimenne, vuoroanne: Possessivsuffix -nne (Ihr/euer). odottaa + Partitiv: vuoroanne." }),
    imv("imv-023", 5, "Pidä hauskaa illalla!", "Viel Spaß heute Abend!",
      g("Pidä", ["Pidät", "Pitää", "Pidän"], "pitää → minä pidän → Pidä! (tt → d)."),
      { note: "pitää hauskaa = „Spaß haben“, wörtlich „Lustiges halten“." }),

    // ───────────── perfekt ─────────────
    per("per-001", 6, "Olen käynyt Lapissa kaksi kertaa.", "Ich war schon zweimal in Lappland.",
      g("käynyt", ["käyneet", "kävin", "käy"], "Perfekt (Erfahrung): olen + Partizip Singular käynyt."),
      { note: "Ohne konkreten Zeitpunkt → Perfekt. Mit „viime vuonna“ wäre es Imperfekt: Kävin Lapissa viime vuonna." }),
    per("per-002", 6, "Olemme asuneet Helsingissä viisi vuotta.", "Wir wohnen seit fünf Jahren in Helsinki.",
      g("asuneet", ["asunut", "asuimme", "asumme"], "Bei me/te/he steht das Partizip im Plural: olemme asuneet."),
      { note: "Deutsch benutzt hier Präsens + „seit“, Finnisch das Perfekt, weil der Zustand bis jetzt andauert." }),
    per("per-003", 6, "En ole koskaan nähnyt revontulia.", "Ich habe noch nie Polarlichter gesehen.",
      g("nähnyt", ["nähneet", "näin", "näe"], "Verneintes Perfekt: en ole + Partizip Singular nähnyt."),
      { note: "koskaan + Verneinung = „nie“. revontulia steht wegen der Verneinung im Partitiv." }),
    per("per-004", 6, "Oletko jo syönyt?", "Hast du schon gegessen?",
      g("syönyt", ["syöneet", "söit", "syö"], "Frage im Perfekt: oletko + Partizip Singular syönyt."),
      { alt: ["Oletko syönyt jo?"] }),
    per("per-005", 6, "Hän ei ole vielä tullut kotiin.", "Er ist noch nicht nach Hause gekommen.",
      g("tullut", ["tulleet", "tuli", "tule"], "ei ole + Partizip: tulla → tullut (n assimiliert zu l)."),
      { note: "vielä + Verneinung = „noch nicht“." }),
    per("per-006", 7, "Oletteko koskaan käyneet Suomessa?", "Waren Sie / Wart ihr schon einmal in Finnland?",
      g("käyneet", ["käynyt", "kävitte", "käy"], "te verlangt das Partizip im Plural: oletteko käyneet."),
      { note: "Wird te als höfliches „Sie“ an eine Person gerichtet, sagt man oft trotzdem käynyt – in der Mehrzahl-Bedeutung immer käyneet." }),
    per("per-007", 6, "Olen jo lukenut tämän kirjan.", "Ich habe dieses Buch schon gelesen.",
      g("lukenut", ["lukeneet", "luin", "lue"], "olen + Partizip Singular: lukea → lukenut (starke Stufe k)."),
      { alt: ["Olen lukenut tämän kirjan jo."] }),
    per("per-008", 7, "Emme ole vielä päättäneet, minne lähdemme lomalle.", "Wir haben noch nicht entschieden, wohin wir in den Urlaub fahren.",
      g("päättäneet", ["päättänyt", "päätimme", "päätä"], "emme ole + Partizip Plural: päättäneet."),
      { note: "lähteä lomalle = „in den Urlaub fahren“ (Allativ)." }),
    per("per-009", 7, "Oletko nähnyt avaimiani?", "Hast du meine Schlüssel gesehen?",
      g("nähnyt", ["nähneet", "näit", "näe"], "Perfekt-Frage, sinä: oletko + nähnyt."),
      { note: "avaimiani = Partitiv Plural + Possessivsuffix -ni („meine Schlüssel“). Der Partitiv steht, weil die Frage offen ist." }),
    per("per-010", 7, "Kuinka kauan olet opiskellut suomea?", "Wie lange lernst du schon Finnisch?",
      g("opiskellut", ["opiskelleet", "opiskelit", "opiskele"], "opiskella (Typ 3): -nut assimiliert zu -llut: opiskellut."),
      { note: "Wieder: Deutsch Präsens + „schon“, Finnisch Perfekt." }),
    per("per-011", 6, "Sää on ollut tänään todella kaunis.", "Das Wetter war heute wirklich schön.",
      g("ollut", ["olleet", "oli", "ole"], "Perfekt von olla: on + ollut."),
      { note: "Der Tag ist noch nicht vorbei → Perfekt." }),
    per("per-012", 7, "Lapset ovat jo menneet nukkumaan.", "Die Kinder sind schon schlafen gegangen.",
      g("menneet", ["mennyt", "menivät", "mene"], "ovat (he) + Partizip Plural: mennä → menneet."),
      {}),
    per("per-013", 7, "Olin jo syönyt, kun ystäväni soitti.", "Ich hatte schon gegessen, als mein Freund anrief.",
      g("Olin", ["Olen", "Olisin", "Olimme"], "Plusquamperfekt: olla im Imperfekt (olin) + Partizip – das Essen war vor dem Anruf abgeschlossen."),
      { note: "ystäväni = „mein Freund / meine Freundin“ (Possessivsuffix -ni)." }),
    per("per-014", 7, "Kun tulimme asemalle, juna oli jo lähtenyt.", "Als wir zum Bahnhof kamen, war der Zug schon abgefahren.",
      g("lähtenyt", ["lähteneet", "lähti", "lähde"], "oli + Partizip Singular (juna = 3. Sg.): lähtenyt (starke Stufe t)."),
      {}),
    per("per-015", 8, "Hän oli asunut Ruotsissa ennen kuin hän muutti Suomeen.", "Sie hatte in Schweden gewohnt, bevor sie nach Finnland zog.",
      g("oli", ["on", "olisi", "olivat"], "Vorvergangenheit: olla im Imperfekt, 3. Sg. – oli asunut."),
      { note: "ennen kuin = „bevor“." }),
    per("per-016", 8, "En ollut koskaan ennen syönyt poronlihaa.", "Ich hatte noch nie zuvor Rentierfleisch gegessen.",
      g("ollut", ["ole", "olin", "olleet"], "Verneintes Plusquamperfekt: en + ollut + Partizip."),
      { note: "poronlihaa: Partitiv wegen der Verneinung." }),
    per("per-017", 7, "Olen tehnyt tätä työtä kymmenen vuotta.", "Ich mache diese Arbeit seit zehn Jahren.",
      g("tehnyt", ["tehneet", "tein", "tee"], "tehdä → Partizip tehnyt (das h bleibt)."),
      { note: "tätä työtä im Partitiv: Die Tätigkeit dauert noch an, ist nicht abgeschlossen." }),
    per("per-018", 7, "Oletko jo kertonut hänelle uutisen?", "Hast du ihm schon die Neuigkeit erzählt?",
      g("kertonut", ["kertoneet", "kerroit", "kerro"], "oletko + Partizip Singular: kertoa → kertonut (starke Stufe rt)."),
      {}),
    per("per-019", 7, "Olemme odottaneet bussia jo puoli tuntia.", "Wir warten schon seit einer halben Stunde auf den Bus.",
      g("odottaneet", ["odottanut", "odotimme", "odota"], "olemme + Partizip Plural: odottaneet."),
      { note: "odottaa + Partitiv: bussia (Deutsch: „auf den Bus warten“)." }),
    per("per-020", 7, "Hän on juuri lähtenyt töihin.", "Er ist gerade zur Arbeit gegangen.",
      g("juuri", ["vielä", "koskaan"], "juuri + Perfekt = „gerade eben“. vielä (noch) und koskaan (je/nie) passen hier nicht."),
      { note: "töihin – „zur Arbeit“ steht im Finnischen im Plural (työt)." }),
    per("per-021", 8, "En ole vielä ehtinyt vastata hänen viestiinsä.", "Ich bin noch nicht dazu gekommen, auf seine Nachricht zu antworten.",
      g("ehtinyt", ["ehtineet", "ehdin", "ehdi"], "en ole + Partizip Singular: ehtiä → ehtinyt."),
      { note: "ehtiä = „Zeit finden, dazu kommen“. vastata + Illativ: viestiinsä (auf seine Nachricht)." }),
    per("per-022", 8, "Kun olimme syöneet, menimme kävelylle.", "Nachdem wir gegessen hatten, gingen wir spazieren.",
      g("syöneet", ["syönyt", "söimme", "syömme"], "olimme (me) + Partizip Plural: syöneet."),
      { note: "kun + Plusquamperfekt entspricht deutschem „nachdem“." }),

    // ───────────── konditional ─────────────
    kon("kon-001", 7, "Haluaisin kupin kahvia, kiitos.", "Ich hätte gern eine Tasse Kaffee, bitte.",
      g("Haluaisin", ["Haluaisi", "Halusin", "Haluaisit"], "Höflicher Wunsch, minä: halua- + -isi- + -n = haluaisin."),
      { note: "Wie „ich hätte gern / ich möchte“ – höflicher als haluan." }),
    kon("kon-002", 7, "Voisitko avata ikkunan?", "Könntest du das Fenster öffnen?",
      g("Voisitko", ["Voisinko", "Voisiko", "Voisimmeko"], "Bitte an „du“: voi- + -si- + -t + -ko. Der lange Vokal oi bleibt, das i verschmilzt: voisit."),
      {}),
    kon("kon-003", 7, "Jos minulla olisi rahaa, ostaisin uuden auton.", "Wenn ich Geld hätte, würde ich ein neues Auto kaufen.",
      g("olisi", ["on", "oli", "olisin"], "Irreale Bedingung: Auch im jos-Satz steht der Konditional. minulla on → minulla olisi (3. Sg.)."),
      { note: "„Ich habe“ = minulla on – deshalb olisi, nicht olisin!" }),
    kon("kon-004", 8, "Jos voittaisin lotossa, ostaisin talon meren rannalta.", "Wenn ich im Lotto gewinnen würde, würde ich ein Haus am Meer kaufen.",
      g("ostaisin", ["ostin", "ostan", "ostaisi"], "Hauptsatz einer irrealen Bedingung: Konditional, minä: ostaisin."),
      { note: "ostaa jostakin – man kauft „von wo“, daher Ablativ: meren rannalta." }),
    kon("kon-005", 7, "Mitä sinä tekisit minun asemassani?", "Was würdest du an meiner Stelle tun?",
      g("tekisit", ["teit", "teet", "tekisin"], "tehdä bildet den Konditional vom Stamm teke-: tekisit."),
      { note: "minun asemassani = „an meiner Stelle“, wörtlich „in meiner Position“." }),
    kon("kon-006", 7, "Olisi kiva nähdä taas pian.", "Es wäre schön, sich bald wiederzusehen.",
      g("Olisi", ["Oli", "Olisin", "Olisit"], "Unpersönlich, 3. Sg. Konditional: olisi."),
      {}),
    kon("kon-007", 7, "Menisin mielelläni, mutta minulla ei ole aikaa.", "Ich würde gern gehen, aber ich habe keine Zeit.",
      g("Menisin", ["Menin", "Menen", "Menisi"], "mennä → Stamm mene-, e fällt vor -isi-: menisin."),
      { note: "minulla ei ole aikaa – „ich habe keine Zeit“, Partitiv nach Verneinung." }),
    kon("kon-008", 7, "Saisinko laskun, kiitos?", "Könnte ich bitte die Rechnung bekommen?",
      g("Saisinko", ["Saisitko", "Saisiko", "Saisimmeko"], "saada: langer Vokal wird gekürzt: sa- + -isi- + -n + -ko."),
      { note: "Die Standardformel im Restaurant." }),
    kon("kon-009", 8, "Sinun pitäisi levätä enemmän.", "Du solltest dich mehr ausruhen.",
      g("pitäisi", ["pitäisit", "pitäisin", "piti"], "Ratschlag: Genitiv (sinun) + pitäisi – das Verb steht immer in der 3. Person Singular."),
      { note: "pitää „müssen“ → Konditional pitäisi = „sollte“." }),
    kon("kon-010", 8, "Jos sataisi, jäisimme kotiin.", "Wenn es regnen würde, würden wir zu Hause bleiben.",
      g("jäisimme", ["jäämme", "jäimme", "jäisivät"], "jäädä: langer Vokal gekürzt + -isi- + -mme = jäisimme."),
      {}),
    kon("kon-011", 8, "Hän sanoi, että hän tulisi huomenna.", "Er sagte, dass er morgen kommen würde.",
      g("tulisi", ["tulisin", "tulisit", "tulisimme"], "Subjekt hän → 3. Sg. Konditional: tulisi."),
      { note: "Indirekte Rede über die Zukunft aus vergangener Sicht steht oft im Konditional." }),
    kon("kon-012", 8, "Olisin tullut, jos olisin tiennyt.", "Ich wäre gekommen, wenn ich es gewusst hätte.",
      g("tiennyt", ["tienneet", "tiesin", "tiedä"], "Konditional Perfekt: olisin + Partizip Singular tiennyt."),
      { note: "Das Objekt „es“ fällt im Finnischen einfach weg." }),
    kon("kon-013", 8, "Jos olisit kysynyt, olisin auttanut sinua.", "Wenn du gefragt hättest, hätte ich dir geholfen.",
      g("auttanut", ["auttaneet", "autoin", "auttaisin"], "Irreal in der Vergangenheit: olisin + Partizip auttanut."),
      { note: "auttaa + Partitiv: sinua." }),
    kon("kon-014", 9, "Me olisimme lähteneet aikaisemmin, mutta auto ei käynnistynyt.", "Wir wären früher losgefahren, aber das Auto sprang nicht an.",
      g("lähteneet", ["lähtenyt", "lähdimme", "lähtisimme"], "olisimme (me) + Partizip Plural: lähteneet."),
      {}),
    kon("kon-015", 8, "Olisiko teillä vapaata huonetta tälle yölle?", "Hätten Sie ein freies Zimmer für heute Nacht?",
      g("Olisiko", ["Olisin", "Olisit", "Olisimme"], "Besitz: teillä on → höfliche Frage im Konditional, 3. Sg.: olisiko."),
      { note: "In Fragen nach etwas Unbestimmtem steht der Partitiv: vapaata huonetta." }),
    kon("kon-016", 8, "Kävisitkö kaupassa matkalla kotiin?", "Könntest du auf dem Heimweg im Laden vorbeigehen?",
      g("Kävisitkö", ["Kävisinkö", "Kävisikö", "Kävisimmekö"], "Bitte an „du“: käydä → kävi- + -si- + -t + -kö."),
      { note: "Konditional-Fragen sind eine sehr übliche, freundliche Form der Bitte." }),
    kon("kon-017", 8, "En ikinä uskaltaisi hypätä laskuvarjolla.", "Ich würde mich nie trauen, Fallschirm zu springen.",
      g("uskaltaisi", ["uskaltaisin", "uskalla", "uskaltanut"], "Verneinter Konditional: en + Konditionalstamm ohne Personalendung: en uskaltaisi."),
      { note: "ikinä = „nie(mals)“ in verneinten Sätzen, umgangsnäher als koskaan." }),
    kon("kon-018", 8, "Tämä olisi parempi, jos se olisi halvempi.", "Das wäre besser, wenn es billiger wäre.",
      g("olisi", ["on", "oli", "olisin"], "Irreale Bedingung: Konditional auch im jos-Satz; Subjekt se → 3. Sg.: olisi."),
      { note: "halvempi = Komparativ von halpa (Stufenwechsel lp → lv)." }),
    kon("kon-019", 8, "Jos minä olisin sinä, en ostaisi sitä.", "Wenn ich du wäre, würde ich es nicht kaufen.",
      g("ostaisi", ["ostaisin", "osta", "ostanut"], "Nach en steht der Konditionalstamm ohne Personalendung: en ostaisi."),
      { note: "Nach Verneinung steht das Objekt im Partitiv: sitä." }),
    kon("kon-020", 9, "Lapset leikkisivät ulkona koko päivän, jos saisivat.", "Die Kinder würden den ganzen Tag draußen spielen, wenn sie dürften.",
      g("saisivat", ["saavat", "saivat", "saisimme"], "he (lapset) → -isivat: saada → saisivat. Bedingungssatz im Konditional."),
      { note: "saada = auch „dürfen“. leikkiä → leikkisivät (i fällt vor -isi-)." }),
    kon("kon-021", 9, "Kuka uskoisi, että olemme jo olleet naimisissa kymmenen vuotta?", "Wer würde glauben, dass wir schon zehn Jahre verheiratet sind?",
      g("uskoisi", ["uskoi", "uskoo", "uskoisin"], "kuka = 3. Person Singular: uskoisi."),
      { note: "olla naimisissa = „verheiratet sein“ (Inessiv Plural). Perfekt + Zeitdauer = deutsches „seit“." }),
    kon("kon-022", 10, "Jos olisimme lähteneet ajoissa, emme olisi myöhästyneet junasta.", "Wenn wir rechtzeitig losgegangen wären, hätten wir den Zug nicht verpasst.",
      g("myöhästyneet", ["myöhästynyt", "myöhästyimme", "myöhästyisimme"], "emme olisi + Partizip Plural: myöhästyneet."),
      { note: "myöhästyä junasta = „den Zug verpassen“ – wörtlich „sich vom Zug verspäten“ (Elativ)." }),

    // ───────────── passiv ─────────────
    pas("pas-001", 7, "Suomessa puhutaan suomea ja ruotsia.", "In Finnland spricht man Finnisch und Schwedisch.",
      g("puhutaan", ["puhuu", "puhumme", "puhuttiin"], "Unpersönlich „man spricht“: Präsens Passiv puhu- + -taan."),
      { note: "Die Sprachen stehen als Teilobjekt im Partitiv." }),
    pas("pas-002", 7, "Tässä ravintolassa syödään hyvin.", "In diesem Restaurant isst man gut.",
      g("syödään", ["syö", "syötiin", "syömme"], "Passiv Präsens von syödä: Infinitiv + -än: syödään."),
      {}),
    pas("pas-003", 7, "Talo rakennettiin vuonna 1920.", "Das Haus wurde 1920 gebaut.",
      g("rakennettiin", ["rakennetaan", "rakensi", "rakennettu"], "Imperfekt Passiv: rakentaa → rakenne- + -ttiin."),
      { note: "Das Totalobjekt talo steht im Passiv in der Grundform (Nominativ)." }),
    pas("pas-004", 7, "Kaupat avataan yhdeksältä.", "Die Geschäfte öffnen um neun.",
      g("avataan", ["avaa", "avattiin", "avaavat"], "avata (Typ 4): Passiv Präsens avataan – wörtlich „die Geschäfte werden geöffnet“."),
      { note: "Deutsch sagt „die Geschäfte öffnen“ – im Finnischen öffnet jemand die Geschäfte." }),
    pas("pas-005", 7, "Juhannusta vietetään kesäkuussa.", "Mittsommer wird im Juni gefeiert.",
      g("vietetään", ["viettää", "vietettiin", "viettävät"], "viettää → schwache Stufe vietä-, ä → e: vietetään."),
      { note: "viettää + Partitiv bei Festen: juhannusta, joulua." }),
    pas("pas-006", 8, "Saunassa ei yleensä puhuta politiikkaa.", "In der Sauna spricht man normalerweise nicht über Politik.",
      g("puhuta", ["puhutaan", "puhu", "puhuttu"], "Verneintes Passiv Präsens: ei + Passivform ohne -an: ei puhuta."),
      { note: "puhua politiikkaa = „über Politik reden“, Partitiv als Objekt." }),
    pas("pas-007", 7, "Lähdetään jo, muuten myöhästymme.", "Lass uns schon gehen, sonst kommen wir zu spät.",
      g("Lähdetään", ["Lähdemme", "Lähtekää", "Lähteä"], "„Lass uns …“ = Passiv: lähteä → lähdetään."),
      {}),
    pas("pas-008", 7, "Me mennään huomenna mökille.", "Wir fahren morgen zum Ferienhaus.",
      undefined,
      { note: "Umgangssprache! Gesprochen ersetzt das Passiv die 1. Person Plural: „me mennään“. Standardsprachlich: Me menemme huomenna mökille.", alt: ["Menemme huomenna mökille.", "Me menemme huomenna mökille."] }),
    pas("pas-009", 7, "Kirje lähetettiin eilen.", "Der Brief wurde gestern abgeschickt.",
      g("lähetettiin", ["lähetetään", "lähetti", "lähettävät"], "Imperfekt Passiv: lähettää → lähete- + -ttiin."),
      {}),
    pas("pas-010", 8, "Varas saatiin kiinni seuraavana päivänä.", "Der Dieb wurde am nächsten Tag gefasst.",
      g("saatiin", ["saadaan", "sai", "saivat"], "Imperfekt Passiv von saada: saa- + -tiin."),
      { note: "saada kiinni = „fangen, fassen“. seuraavana päivänä: Essiv für Zeitpunkt." }),
    pas("pas-011", 8, "Tätä sanaa ei käytetä enää.", "Dieses Wort wird nicht mehr benutzt.",
      g("käytetä", ["käytetään", "käytä", "käytetty"], "Verneintes Passiv Präsens: ei + käytetä (ohne -än)."),
      { note: "Partitiv tätä sanaa wegen der Verneinung." }),
    pas("pas-012", 7, "Kauppa suljetaan kello yhdeksän.", "Der Laden schließt um neun Uhr.",
      g("suljetaan", ["suljettiin", "sulkee", "sulje"], "sulkea → schwache Stufe sulje- + -taan: suljetaan."),
      {}),
    pas("pas-013", 8, "Kokouksessa päätettiin, että toimisto muuttaa keskustaan.", "In der Besprechung wurde beschlossen, dass das Büro ins Zentrum umzieht.",
      g("päätettiin", ["päätetään", "päätti", "päättivät"], "Imperfekt Passiv: päättää → pääte- + -ttiin."),
      {}),
    pas("pas-014", 8, "Ennen Suomessa ei puhuttu englantia yhtä paljon kuin nykyään.", "Früher wurde in Finnland nicht so viel Englisch gesprochen wie heute.",
      g("puhuttu", ["puhuttiin", "puhuta", "puhunut"], "Verneintes Imperfekt Passiv: ei + Partizip auf -ttu: ei puhuttu."),
      { note: "yhtä paljon kuin = „genauso viel wie“." }),
    pas("pas-015", 9, "Kirja on käännetty kahdellekymmenelle kielelle.", "Das Buch ist in zwanzig Sprachen übersetzt worden.",
      g("käännetty", ["käännetään", "käännettiin", "kääntänyt"], "Perfekt Passiv: on + Partizip auf -tty: kääntää → käännetty (nt → nn)."),
      { note: "kääntää jollekin kielelle – Übersetzen „auf eine Sprache“ steht im Allativ. Zahlen werden mitdekliniert: kahdellekymmenelle." }),
    pas("pas-016", 7, "Mitä tänään tehdään?", "Was machen wir heute?",
      g("tehdään", ["tehty", "tehdä", "tekee"], "Passiv Präsens von tehdä: tehdä + -än = tehdään."),
      { note: "Wörtlich „Was wird heute gemacht?“ – im Alltag die übliche Frage „Was machen wir?“." }),
    pas("pas-017", 8, "Joulupukkia odotetaan jouluaattona.", "Den Weihnachtsmann erwartet man an Heiligabend.",
      g("odotetaan", ["odotettiin", "odottaa", "odota"], "odottaa → odote- + -taan: odotetaan."),
      { note: "In Finnland kommt der Weihnachtsmann am 24. Dezember persönlich vorbei. odottaa + Partitiv." }),
    pas("pas-018", 7, "Suomessa juodaan paljon kahvia.", "In Finnland wird viel Kaffee getrunken.",
      g("juodaan", ["juo", "juotiin", "juomme"], "Passiv Präsens von juoda: juoda + -an = juodaan."),
      {}),
    pas("pas-019", 8, "Uusi silta avattiin liikenteelle viime viikolla.", "Die neue Brücke wurde letzte Woche für den Verkehr freigegeben.",
      g("avattiin", ["avataan", "avasi", "avattu"], "Imperfekt Passiv von avata: avat- + -tiin."),
      {}),
    pas("pas-020", 8, "Lasku on jo maksettu.", "Die Rechnung ist schon bezahlt.",
      g("maksettu", ["maksettiin", "maksetaan", "maksanut"], "Perfekt Passiv: on + Partizip auf -ttu: maksettu."),
      {}),
    pas("pas-021", 9, "Kun kaikki oli syöty, alettiin siivota.", "Als alles aufgegessen war, fing man an aufzuräumen.",
      g("syöty", ["syötiin", "syönyt", "syödään"], "Plusquamperfekt Passiv: oli + Partizip syöty."),
      { note: "alettiin = Imperfekt Passiv von alkaa (anfangen)." }),
    pas("pas-022", 9, "Ruotsia opiskellaan Suomen kouluissa pakollisena kielenä.", "Schwedisch wird in finnischen Schulen als Pflichtsprache gelernt.",
      g("opiskellaan", ["opiskelee", "opiskeltiin", "opiskelemme"], "Typ 3: Infinitiv + -an: opiskella → opiskellaan."),
      { note: "pakollisena kielenä – Essiv: „als Pflichtsprache“." }),
    pas("pas-023", 10, "Asiasta ei ole vielä päätetty mitään.", "In der Sache ist noch nichts entschieden worden.",
      g("päätetty", ["päätetään", "päättänyt", "päätettiin"], "Verneintes Perfekt Passiv: ei ole + Partizip päätetty."),
      { note: "päättää asiasta – „über etwas entscheiden“ mit Elativ." }),

    // ───────────── nebensaetze ─────────────
    siv("siv-001", 8, "Luulen, että huomenna sataa.", "Ich glaube, dass es morgen regnet.",
      g("että", ["koska", "jos", "kun"], "Nach Verben des Denkens und Sagens folgt der Inhaltssatz mit että („dass“)."),
      { note: "Keine Verbendstellung im Nebensatz – anders als im Deutschen." }),
    siv("siv-002", 8, "En tullut töihin, koska olin sairas.", "Ich bin nicht zur Arbeit gekommen, weil ich krank war.",
      g("koska", ["että", "vaikka", "kunnes"], "Begründung: koska = „weil“."),
      {}),
    siv("siv-003", 8, "Kun tulin kotiin, lapset nukkuivat jo.", "Als ich nach Hause kam, schliefen die Kinder schon.",
      g("Kun", ["Jos", "Vaikka", "Että"], "Zeitlich „als / wenn“ = kun. jos ist nur Bedingung („falls“)."),
      { alt: ["Lapset nukkuivat jo, kun tulin kotiin."] }),
    siv("siv-004", 8, "Jos sataa, emme mene uimaan.", "Wenn es regnet, gehen wir nicht schwimmen.",
      g("Jos", ["Vaikka", "Koska", "Että"], "Bedingung „falls / wenn“ = jos."),
      { alt: ["Emme mene uimaan, jos sataa."] }),
    siv("siv-005", 8, "Menimme ulos, vaikka satoi.", "Wir gingen hinaus, obwohl es regnete.",
      g("vaikka", ["koska", "kunnes", "että"], "Gegensatz „obwohl“ = vaikka."),
      {}),
    siv("siv-006", 8, "Odota tässä, kunnes tulen takaisin.", "Warte hier, bis ich zurückkomme.",
      g("kunnes", ["koska", "vaikka", "että"], "„bis“ (zeitlich) = kunnes."),
      {}),
    siv("siv-007", 8, "Mies, joka asuu naapurissa, on lääkäri.", "Der Mann, der nebenan wohnt, ist Arzt.",
      g("joka", ["jonka", "jossa", "jota"], "Das Relativpronomen ist Subjekt im Nebensatz → Nominativ: joka."),
      { note: "lääkäri ohne Artikel – Berufe stehen einfach im Nominativ." }),
    siv("siv-008", 8, "Kirja, jonka ostin eilen, on todella hyvä.", "Das Buch, das ich gestern gekauft habe, ist wirklich gut.",
      g("jonka", ["joka", "jota", "jossa"], "Totalobjekt im Relativsatz → Akkusativ/Genitiv: jonka."),
      {}),
    siv("siv-009", 8, "Talo, jossa asumme, on sata vuotta vanha.", "Das Haus, in dem wir wohnen, ist hundert Jahre alt.",
      g("jossa", ["joka", "jonka", "josta"], "„in dem“ → Inessiv: jossa."),
      {}),
    siv("siv-010", 8, "Elokuva, jota katsoimme, oli liian pitkä.", "Der Film, den wir angeschaut haben, war zu lang.",
      g("jota", ["jonka", "joka", "jossa"], "katsoa (fernsehen/schauen) verlangt ein Partitivobjekt → jota."),
      {}),
    siv("siv-011", 8, "Ihmiset, jotka asuvat maalla, käyttävät paljon autoa.", "Menschen, die auf dem Land wohnen, benutzen oft das Auto.",
      g("jotka", ["joka", "joita", "joilla"], "Bezugswort im Plural, Subjekt im Relativsatz → jotka."),
      { note: "maalla = „auf dem Land“ (Adessiv)." }),
    siv("siv-012", 9, "Ystävät, joita tapasin Tampereella, olivat opiskelukavereitani.", "Die Freunde, die ich in Tampere getroffen habe, waren Studienkollegen von mir.",
      g("joita", ["jotka", "joilla", "joiden"], "tavata verlangt den Partitiv; Plural → joita."),
      { note: "opiskelukavereitani: Partitiv Plural + -ni = „(einige) meiner Studienkollegen“." }),
    siv("siv-013", 9, "Perheet, joilla on pieniä lapsia, saavat tukea.", "Familien, die kleine Kinder haben, bekommen Unterstützung.",
      g("joilla", ["jotka", "joita", "joissa"], "„haben“ wird mit dem Adessiv ausgedrückt: perheillä on → joilla on."),
      {}),
    siv("siv-014", 8, "En tiedä, missä hän asuu.", "Ich weiß nicht, wo er wohnt.",
      g("missä", ["mistä", "mihin", "mikä"], "Indirekte Frage nach dem Ort (wo?) → missä."),
      {}),
    siv("siv-015", 8, "Voitko kertoa, mihin aikaan juna lähtee?", "Kannst du mir sagen, um wie viel Uhr der Zug abfährt?",
      g("mihin", ["missä", "mistä", "mikä"], "„um wie viel Uhr“ = mihin aikaan (Illativ)."),
      {}),
    siv("siv-016", 9, "Kysyin, kuka oli soittanut.", "Ich fragte, wer angerufen hatte.",
      g("kuka", ["kenet", "kenen", "mikä"], "Subjekt der indirekten Frage (Person) → Nominativ kuka."),
      { note: "Plusquamperfekt: Der Anruf war vor dem Fragen." }),
    siv("siv-017", 9, "Hän kysyi, olinko jo syönyt.", "Er fragte, ob ich schon gegessen hätte.",
      g("olinko", ["olin", "olenko", "oliko"], "Indirekte Ja/Nein-Frage: Fragepartikel -ko am Verb (= „ob“); minä → olin + ko."),
      { note: "Kein „ob“-Wort – das -ko übernimmt diese Funktion." }),
    siv("siv-018", 9, "Hän sanoi, ettei hän voi tulla.", "Er sagte, dass er nicht kommen kann.",
      g("ettei", ["että", "eikä", "jos"], "että + ei verschmelzen zu ettei („dass nicht“)."),
      { alt: ["Hän sanoi, että hän ei voi tulla."] }),
    siv("siv-019", 9, "Mies, jolta ostimme mökin, muutti Espanjaan.", "Der Mann, von dem wir das Ferienhaus gekauft haben, ist nach Spanien gezogen.",
      g("jolta", ["jonka", "jolle", "jossa"], "ostaa joltakin – „von jemandem kaufen“ → Ablativ: jolta."),
      {}),
    siv("siv-020", 9, "Koska bussi oli myöhässä, en ehtinyt kokoukseen, joka alkoi kahdeksalta.", "Weil der Bus Verspätung hatte, schaffte ich es nicht zur Besprechung, die um acht begann.",
      g("joka", ["jota", "jossa", "jonka"], "Subjekt im Relativsatz (die Besprechung begann) → joka."),
      { note: "ehtiä + Illativ: es rechtzeitig irgendwohin schaffen." }),
    siv("siv-021", 10, "Vaikka olen asunut Suomessa kymmenen vuotta, en ole vieläkään tottunut pimeisiin talviin.", "Obwohl ich seit zehn Jahren in Finnland lebe, habe ich mich immer noch nicht an die dunklen Winter gewöhnt.",
      g("Vaikka", ["Koska", "Kun", "Jos"], "Gegensatz („obwohl“) → vaikka."),
      { note: "tottua + Illativ: „sich an etwas gewöhnen“ – pimeisiin talviin. vieläkään = „immer noch nicht“." }),
    siv("siv-022", 10, "Kun olimme syöneet, ystäväni kertoi, että hän oli saanut uuden työpaikan.", "Nachdem wir gegessen hatten, erzählte mein Freund, dass er eine neue Stelle bekommen hatte.",
      g("että", ["koska", "kun", "jos"], "Inhalt des Erzählten → että."),
      {}),
    siv("siv-023", 10, "Jos olisin tiennyt, että juna on myöhässä, olisin jäänyt kotiin.", "Wenn ich gewusst hätte, dass der Zug Verspätung hat, wäre ich zu Hause geblieben.",
      g("Jos", ["Kun", "Koska", "Vaikka"], "Irreale Bedingung → jos + Konditional Perfekt."),
      {}),
    siv("siv-024", 9, "Muistatko sen naisen, jonka kanssa puhuimme juhlissa?", "Erinnerst du dich an die Frau, mit der wir auf der Party gesprochen haben?",
      g("jonka", ["joka", "jota", "jolla"], "kanssa ist eine Postposition und verlangt den Genitiv: jonka kanssa."),
      { note: "muistaa + Akkusativ: sen naisen (im Deutschen „sich erinnern an“)." }),
    siv("siv-025", 9, "Kaikki, mitä hän sanoi, oli totta.", "Alles, was er gesagt hat, war wahr.",
      g("mitä", ["mikä", "jota", "joka"], "Nach kaikki benutzt man mikä statt joka; sanoa verlangt hier den Partitiv → mitä."),
      {}),
  ],
  lexicon: `
aamulla | aamu | morgens | Adessiv (-lla) für Tageszeit: „am Morgen“
aikaa | aika | Zeit | Partitiv Sg. (nach Verneinung: ei ole aikaa)
aikaan | aika | Zeit, Uhrzeit | Illativ Sg.; mihin aikaan = „um wie viel Uhr“
aikaisemmin | aikaisemmin | früher, eher | Adverb, Komparativ zu aikaisin
aikaisin | aikaisin | früh | Adverb
aina | aina | immer | Adverb
ajoissa | ajoissa | rechtzeitig | Adverb (erstarrter Inessiv Pl. von aika)
alas | alas | hinunter, nach unten | Richtungsadverb; istua alas = sich hinsetzen
alettiin | alkaa | anfangen | Passiv Imperfekt („man fing an“), Stufenwechsel lk → l
alkoi | alkaa | anfangen, beginnen | Imperfekt 3. Sg. (a → o vor -i)
aluksi | aluksi | anfangs, zuerst | Adverb (Translativ von alku)
anna | antaa | geben | Imperativ Sg. (nt → nn); auch Frauenname Anna
annoin | antaa | geben | Imperfekt 1. Sg. (a → o, nt → nn)
apua | apu | Hilfe | Partitiv Sg. (unbestimmte Menge), Stufenwechsel p → v im Stamm avu-
asemalle | asema | Bahnhof | Allativ Sg. (-lle: „zu“)
asemassani | asema | Position, Stelle | Inessiv Sg. + Possessivsuffix -ni („in meiner Lage“)
asiasta | asia | Sache, Angelegenheit | Elativ Sg. (-sta: „über / von“)
astetta | aste | Grad | Partitiv Sg. nach Zahl (kolmekymmentä astetta)
asuin | asua | wohnen | Imperfekt 1. Sg. (minä)
asumme | asua | wohnen | Präsens 1. Pl. (me)
asuneet | asua | wohnen | Partizip Perfekt Aktiv Pl. (-neet)
asunut | asua | wohnen | Partizip Perfekt Aktiv Sg. (-nut)
asuu | asua | wohnen | Präsens 3. Sg.
asuvat | asua | wohnen | Präsens 3. Pl.
auto | auto | Auto | Nominativ Sg. (Subjekt)
autoa | auto | Auto | Partitiv Sg.
auton | auto | Auto | Akkusativ/Genitiv Sg. (Totalobjekt)
auttaa | auttaa | helfen | Infinitiv (Typ 1); + Partitiv
auttanut | auttaa | helfen | Partizip Perfekt Aktiv Sg.
avaimia | avain | Schlüssel | Partitiv Pl. (Stamm avaime-)
avaimiani | avain | Schlüssel | Partitiv Pl. + Possessivsuffix -ni („meine Schlüssel“)
avata | avata | öffnen | Infinitiv (Typ 4)
avataan | avata | öffnen | Passiv Präsens („man öffnet / wird geöffnet“)
avattiin | avata | öffnen | Passiv Imperfekt („wurde geöffnet“)
bussi | bussi | Bus | Nominativ Sg.
bussia | bussi | Bus | Partitiv Sg. (odottaa + Partitiv)
ehtinyt | ehtiä | Zeit haben, rechtzeitig schaffen | Partizip Perfekt Aktiv Sg.
ei | ei (Verneinungsverb) | nicht | Verneinungsverb 3. Sg.; auch beim Passiv und „ei mennä“
eikä | eikä | und nicht | ja + ei; Verneinungsverb mit -kä („und auch nicht“)
eilen | eilen | gestern | Zeitadverb
eivät | ei (Verneinungsverb) | nicht | Verneinungsverb 3. Pl. (he eivät …)
elokuva | elokuva | Film | Nominativ Sg.
elokuvasta | elokuva | Film | Elativ Sg. (pitää + Elativ: „etwas mögen“)
elokuviin | elokuva | Kino | Illativ Pl.; mennä elokuviin = ins Kino gehen
emme | ei (Verneinungsverb) | nicht | Verneinungsverb 1. Pl. (me emme …)
emmekä | ei (Verneinungsverb) | und wir … nicht | emme + -kä („und … nicht“)
en | ei (Verneinungsverb) | nicht | Verneinungsverb 1. Sg. (minä en …)
enemmän | enemmän | mehr | Adverb, Komparativ von paljon
englantia | englanti | Englisch | Partitiv Sg. (Sprache als Objekt)
ennen | ennen | früher; vor | Adverb; ennen kuin = bevor
ensimmäinen | ensimmäinen | erste(r) | Ordinalzahl, Nominativ
ensimmäisenä | ensimmäinen | erste(r) | Essiv Sg. (Zeitangabe: am ersten …)
ensimmäistä | ensimmäinen | erste(r) | Partitiv Sg.; ensimmäistä kertaa = zum ersten Mal
ensin | ensin | zuerst | Adverb
enää | enää | (nicht) mehr | Adverb in verneinten Sätzen
espanjaan | Espanja | Spanien | Illativ Sg. (-an: „nach“)
ettei | että + ei | dass nicht | Konjunktion että verschmolzen mit Verneinungsverb ei
että | että | dass | Konjunktion (Inhaltssatz)
haluaisi | haluta | wollen, möchten | Konditional 3. Sg. bzw. Stamm nach Verneinung (ei haluaisi)
haluaisin | haluta | möchten | Konditional 1. Sg. (höflicher Wunsch)
halunneet | haluta | wollen | Partizip Perfekt Aktiv Pl. (Typ 4: -nneet)
halusin | haluta | wollen | Imperfekt 1. Sg. (Typ 4: -s-)
halvempi | halpa | billig | Komparativ (-mpi), Stufenwechsel lp → lv
hauskaa | hauska | lustig, Spaß | Partitiv Sg.; pitää hauskaa = Spaß haben
he | he | sie (Pl.) | Personalpronomen 3. Pl.
helsingissä | Helsinki | Helsinki | Inessiv (-ssä: „in“), Stufenwechsel nk → ng
helsingistä | Helsinki | Helsinki | Elativ (-stä: „aus, von“), nk → ng
heti | heti | sofort | Adverb
hetken | hetki | Moment | Akkusativ Sg. als Zeitdauer („einen Moment lang“)
hetki | hetki | Moment, Augenblick | Nominativ/Akkusativ Sg.; odota hetki = warte kurz
hiihdimme | hiihtää | Ski fahren (Langlauf) | Imperfekt 1. Pl. (ht → hd)
hiljaa | hiljaa | leise, still | Adverb; olla hiljaa = still sein
hiljaisuus | hiljaisuus | Stille | Nominativ Sg. (-uus: Eigenschaftsnomen)
huoli | huolia | sich sorgen | Imperativ-Stamm nach älä (Älä huoli!); auch Nomen „Sorge“
huomenna | huomenna | morgen | Zeitadverb
huonetta | huone | Zimmer | Partitiv Sg. (unbestimmtes Objekt in Frage)
huutako | huutaa | schreien | Verneinter Imperativ Pl. (älkää … -ko)
hypätä | hypätä | springen | Infinitiv (Typ 4)
hyvin | hyvin | gut | Adverb (von hyvä)
hyvä | hyvä | gut | Adjektiv, Nominativ; ole hyvä = bitte
hän | hän | er, sie | Personalpronomen 3. Sg.
hänelle | hän | ihm, ihr | Allativ (-lle: „an, für“)
hänen | hän | sein, ihr | Genitiv (auch vor kanssa)
ihmiset | ihminen | Menschen | Nominativ Pl.
ikinä | ikinä | nie (mit Verneinung) | Adverb
ikkunan | ikkuna | Fenster | Akkusativ Sg. (Totalobjekt)
illalla | ilta | abends | Adessiv (Tageszeit), Stufenwechsel lt → ll
illassa | ilta | Abend | Inessiv Sg. (yhdessä illassa = an einem Abend), lt → ll
iltana | ilta | Abend | Essiv Sg. (koko iltana = den ganzen Abend)
istu | istua | sitzen, sich setzen | Imperativ Sg.
istukaa | istua | sitzen, sich setzen | Imperativ Pl. (-kaa)
ja | ja | und | Konjunktion
jalkaan | jalka | Fuß | Illativ Sg.; pukea jalkaan = (Schuhe) anziehen
jalkapalloa | jalkapallo | Fußball | Partitiv Sg. (pelata + Partitiv)
jo | jo | schon | Adverb
joiden | joka | dessen, deren (Pl.) | Relativpronomen, Genitiv Pl. (joiden kanssa)
joilla | joka | die (Pl.), bei denen | Relativpronomen, Adessiv Pl. (joilla on = die … haben)
join | juoda | trinken | Imperfekt 1. Sg. (uo → o)
joita | joka | die (Pl.) | Relativpronomen, Partitiv Pl.
joka | joka | der, die, das; jeder | Relativpronomen Nominativ Sg.; joka päivä = jeden Tag
joku | joku | jemand | Indefinitpronomen
jolta | joka | von dem / der | Relativpronomen, Ablativ Sg. (-lta: „von“)
jonka | joka | den, dessen | Relativpronomen, Akkusativ/Genitiv Sg.
jos | jos | wenn, falls | Konjunktion (Bedingung)
jossa | joka | in dem / der | Relativpronomen, Inessiv Sg.
jota | joka | den, die, das | Relativpronomen, Partitiv Sg.
jotain | jokin | etwas | Indefinitpronomen, Partitiv Sg.
joten | joten | also, deshalb | Konjunktion (Folge)
jotka | joka | die (Pl.) | Relativpronomen, Nominativ Pl.
jouluaattona | jouluaatto | Heiligabend | Essiv Sg. (Zeitpunkt), tt → t
joulupukkia | joulupukki | Weihnachtsmann | Partitiv Sg. (odottaa + Partitiv), kk → k
juhannusta | juhannus | Mittsommer(fest) | Partitiv Sg. (viettää + Partitiv)
juhliin | juhlat | Fest, Party | Illativ Pl. (Pluralwort)
juhlissa | juhlat | Fest, Party | Inessiv Pl. („auf der Party“)
juna | juna | Zug | Nominativ Sg.
junasta | juna | Zug | Elativ Sg. (myöhästyä junasta = den Zug verpassen)
juodaan | juoda | trinken | Passiv Präsens
juuri | juuri | gerade (eben); fast | Adverb; ei juuri mitään = fast nichts
jäin | jäädä | bleiben | Imperfekt 1. Sg. (langer Vokal gekürzt)
jäisimme | jäädä | bleiben | Konditional 1. Pl.
jäänyt | jäädä | bleiben | Partizip Perfekt Aktiv Sg.
kahdeksalta | kahdeksan | acht | Ablativ (Uhrzeit: „um acht“)
kahdellekymmenelle | kaksikymmentä | zwanzig | Allativ (beide Teile dekliniert)
kahvia | kahvi | Kaffee | Partitiv Sg. (Stoffname)
kahville | kahvi | Kaffee | Allativ Sg.; mennä kahville = auf einen Kaffee gehen
kaikki | kaikki | alle, alles | Pronomen, Nominativ
kaksi | kaksi | zwei | Grundzahl, Nominativ
kallis | kallis | teuer | Adjektiv, Nominativ
kanssa | kanssa | mit | Postposition + Genitiv
kanssaan | kanssa | mit ihm/ihr | Postposition + Possessivsuffix 3. Person
katsoimme | katsoa | (an)schauen | Imperfekt 1. Pl.
kauan | kauan | lange | Adverb
kaunis | kaunis | schön | Adjektiv, Nominativ
kaupassa | kauppa | Laden | Inessiv Sg. (pp → p)
kaupat | kauppa | Läden | Nominativ Pl. (pp → p)
kauppa | kauppa | Laden, Geschäft | Nominativ Sg.
kello | kello | Uhr | Nominativ; kello yhdeksän = um neun Uhr
kengät | kenkä | Schuhe | Nominativ Pl. (Totalobjekt beim Imperativ), nk → ng
kerralla | kerta | Mal | Adessiv Sg. (toisella kerralla = beim zweiten Mal), rt → rr
kerro | kertoa | erzählen, sagen | Imperativ Sg. (rt → rr)
kertaa | kerta | Mal | Partitiv Sg. nach Zahl (kaksi kertaa)
kertoa | kertoa | erzählen, sagen | Infinitiv (Typ 1)
kertoi | kertoa | erzählen | Imperfekt 3. Sg.
kertonut | kertoa | erzählen | Partizip Perfekt Aktiv Sg.
keskustaan | keskusta | Zentrum | Illativ Sg.
kesäkuussa | kesäkuu | Juni | Inessiv Sg. (Monat: „im Juni“)
kesämökki | kesämökki | Sommerhaus | Nominativ Sg.
kevät | kevät | Frühling | Nominativ Sg.
kielelle | kieli | Sprache | Allativ Sg. (Stamm kiele-)
kielenä | kieli | Sprache | Essiv Sg. („als Sprache“)
kiinni | kiinni | fest, zu | Adverb; saada kiinni = fassen
kiitos | kiitos | danke, bitte | Höflichkeitswort
kiltti | kiltti | lieb, brav | Adjektiv; ole kiltti = sei so lieb
kirja | kirja | Buch | Nominativ Sg.
kirjan | kirja | Buch | Akkusativ/Genitiv Sg. (Totalobjekt)
kirje | kirje | Brief | Nominativ Sg. (Objekt im Passiv)
kirjoittakaa | kirjoittaa | schreiben | Imperativ Pl. (-kaa)
kiva | kiva | nett, schön | Adjektiv (umgangsnah)
koko | koko | ganz | unflektiertes Attribut (koko päivän)
kokoukseen | kokous | Besprechung, Sitzung | Illativ Sg. (Stamm kokoukse-)
kokouksessa | kokous | Besprechung | Inessiv Sg.
kolmantena | kolmas | dritte(r) | Essiv Sg. (am dritten …)
kolme | kolme | drei | Grundzahl
kolmekymmentä | kolmekymmentä | dreißig | Grundzahl
koska | koska | weil; wann | Konjunktion (Grund)
koskaan | koskaan | je, (mit Verneinung) nie | Adverb
koskeko | koskea | berühren | Verneinter Imperativ Pl. (älkää … -ko)
kotiin | koti | Zuhause | Illativ Sg. („nach Hause“)
kotoisin | kotoisin | stammend aus | Adverb; olla kotoisin + Elativ = stammen aus
kotona | koti | Zuhause | Essiv Sg. („zu Hause“)
kouluissa | koulu | Schule | Inessiv Pl.
kuin | kuin | als, wie | Vergleichspartikel
kuinka | kuinka | wie | Fragewort; kuinka kauan = wie lange
kuka | kuka | wer | Fragepronomen, Nominativ
kun | kun | als, wenn (zeitlich) | Konjunktion
kunnes | kunnes | bis | Konjunktion (zeitlich)
kuopiosta | Kuopio | Kuopio (Stadt) | Elativ („aus“)
kupin | kuppi | Tasse | Akkusativ Sg., pp → p
kurssilla | kurssi | Kurs | Adessiv Sg. („im / beim Kurs“)
kylmä | kylmä | kalt | Adjektiv
kymmeneltä | kymmenen | zehn | Ablativ (Uhrzeit: „um zehn“)
kymmenen | kymmenen | zehn | Grundzahl
kysyi | kysyä | fragen | Imperfekt 3. Sg.
kysyin | kysyä | fragen | Imperfekt 1. Sg.
kysymyksen | kysymys | Frage | Akkusativ Sg. (Stamm kysymykse-)
kysynyt | kysyä | fragen | Partizip Perfekt Aktiv Sg.
kysyy | kysyä | fragen | Präsens 3. Sg.
kävelylle | kävely | Spaziergang | Allativ Sg.; mennä kävelylle = spazieren gehen
kävimme | käydä | besuchen, gehen | Imperfekt 1. Pl. (käy- → käv-)
kävin | käydä | besuchen, gehen | Imperfekt 1. Sg.
kävisitkö | käydä | vorbeigehen | Konditional 2. Sg. + Frage -kö
käydä | käydä | gehen, besuchen | Infinitiv (Typ 2)
käyneet | käydä | gewesen, besucht | Partizip Perfekt Aktiv Pl.
käynnistynyt | käynnistyä | anspringen, starten | Partizip Perfekt Aktiv Sg. (nach ei)
käynyt | käydä | gewesen, besucht | Partizip Perfekt Aktiv Sg.
käytetä | käyttää | benutzen | Passiv Präsens verneint (ei käytetä), tt → t
käyttävät | käyttää | benutzen | Präsens 3. Pl.
käännetty | kääntää | übersetzen | Partizip Perfekt Passiv (-tty), nt → nn
lapissa | Lappi | Lappland | Inessiv, pp → p
lappiin | Lappi | Lappland | Illativ („nach Lappland“)
lapsena | lapsi | Kind | Essiv Sg. („als Kind“)
lapset | lapsi | Kinder | Nominativ Pl.
lapsi | lapsi | Kind | Nominativ Sg.
lapsia | lapsi | Kinder | Partitiv Pl.
lasin | lasi | Glas | Akkusativ Sg.
lasku | lasku | Rechnung | Nominativ Sg.
laskun | lasku | Rechnung | Akkusativ Sg.
laskuvarjolla | laskuvarjo | Fallschirm | Adessiv (Mittel: „mit“)
leikkisivät | leikkiä | spielen (Kinder) | Konditional 3. Pl.
leipää | leipä | Brot | Partitiv Sg.
levätä | levätä | sich ausruhen | Infinitiv (Typ 4)
liian | liian | zu (sehr) | Adverb
liikenteelle | liikenne | Verkehr | Allativ Sg. (Stamm liikentee-)
liisa | Liisa | Liisa | Frauenname
liput | lippu | Karten, Tickets | Nominativ/Akkusativ Pl., pp → p
lohikeittoa | lohikeitto | Lachssuppe | Partitiv Sg.
lomakkeeseen | lomake | Formular | Illativ Sg. (Stamm lomakkee-)
lomalle | loma | Urlaub | Allativ Sg. („in den Urlaub“)
loppuun | loppu | Ende | Illativ Sg.; lukea loppuun = zu Ende lesen
lotossa | lotto | Lotto | Inessiv Sg., tt → t
luin | lukea | lesen | Imperfekt 1. Sg. (k fällt weg)
lukenut | lukea | lesen | Partizip Perfekt Aktiv Sg.
lumiukon | lumiukko | Schneemann | Akkusativ Sg., kk → k
lunta | lumi | Schnee | Partitiv Sg.
luonto | luonto | Natur | Nominativ Sg.
luulen | luulla | glauben, meinen | Präsens 1. Sg.
lyhyt | lyhyt | kurz | Adjektiv
lähdemme | lähteä | losgehen, abfahren | Präsens 1. Pl. (t → d)
lähdetään | lähteä | losgehen | Passiv Präsens („lass uns gehen“), t → d
lähdimme | lähteä | losgehen | Imperfekt 1. Pl. (t → d)
lähetettiin | lähettää | schicken | Passiv Imperfekt
lähtee | lähteä | abfahren | Präsens 3. Sg.
lähteneet | lähteä | losgegangen | Partizip Perfekt Aktiv Pl.
lähtenyt | lähteä | losgegangen | Partizip Perfekt Aktiv Sg.
lääkäri | lääkäri | Arzt, Ärztin | Nominativ Sg.
maalla | maa | Land | Adessiv Sg. („auf dem Land“)
maitoa | maito | Milch | Partitiv Sg.
maksettu | maksaa | bezahlen | Partizip Perfekt Passiv (-ttu)
matka | matka | Reise | Nominativ Sg.
matkalla | matka | Weg, Reise | Adessiv Sg. („unterwegs“)
matkustimme | matkustaa | reisen | Imperfekt 1. Pl.
me | me | wir | Personalpronomen 1. Pl.
melkein | melkein | fast | Adverb
mene | mennä | gehen | Imperativ Sg. / nach älä
menee | mennä | gehen | Präsens 3. Sg.
menemme | mennä | gehen | Präsens 1. Pl.
menimme | mennä | gehen | Imperfekt 1. Pl.
menisin | mennä | gehen | Konditional 1. Sg.
menivät | mennä | gehen | Imperfekt 3. Pl.
menneet | mennä | gegangen | Partizip Perfekt Aktiv Pl.
mennä | mennä | gehen | Infinitiv (Typ 3); ei mennä = lass uns nicht gehen
mennään | mennä | gehen | Passiv Präsens („lass uns gehen“; umgangssprachl. „wir gehen“)
meren | meri | Meer | Genitiv Sg. (Stamm mere-)
mielelläni | mielellään | gern | Adverb + Possessivsuffix 1. Sg.
mies | mies | Mann | Nominativ Sg.
mihin | mikä | wohin | Fragewort, Illativ
mikko | Mikko | Mikko | Männername, Nominativ
mikon | Mikko | Mikko | Akkusativ/Genitiv, kk → k
miksi | miksi | warum | Fragewort
mikä | mikä | was, welche(r) | Frage-/Relativpronomen, Nominativ
minne | minne | wohin | Fragewort
minua | minä | mich | Partitiv
minulla | minä | ich habe (bei mir) | Adessiv (Besitz: minulla on)
minulle | minä | mir | Allativ
minun | minä | mein | Genitiv
minä | minä | ich | Personalpronomen 1. Sg.
missä | mikä | wo | Fragewort, Inessiv
miten | miten | wie | Fragewort
mitä | mikä | was | Partitiv
mitään | mikään | nichts (mit Verneinung) | Partitiv
muistatko | muistaa | sich erinnern | Präsens 2. Sg. + Frage -ko
mukaan | mukaan | mit | Adverb; ottaa mukaan = mitnehmen
mutta | mutta | aber | Konjunktion
muuten | muuten | sonst; übrigens | Adverb
muutimme | muuttaa | umziehen | Imperfekt 1. Pl. (tt → t)
muuttaa | muuttaa | umziehen | Präsens 3. Sg. / Infinitiv
muutti | muuttaa | umziehen | Imperfekt 3. Sg.
myöhässä | myöhässä | verspätet | Adverb; olla myöhässä = Verspätung haben
myöhästymme | myöhästyä | sich verspäten | Präsens 1. Pl.
myöhästyneet | myöhästyä | sich verspätet | Partizip Perfekt Aktiv Pl.
myöhään | myöhään | spät | Adverb
mökille | mökki | Ferienhaus | Allativ Sg., kk → k
mökin | mökki | Ferienhaus | Akkusativ Sg., kk → k
naapurille | naapuri | Nachbar | Allativ Sg. (soittaa + Allativ)
naapurissa | naapuri | Nachbarschaft | Inessiv Sg. („nebenan“)
naimisissa | naimisissa | verheiratet | Adverb (Inessiv Pl.); olla naimisissa
naisen | nainen | Frau | Akkusativ Sg.
niin | niin | so | Adverb
nimenne | nimi | Name | Akkusativ + Possessivsuffix 2. Pl. („Ihren/euren Namen“)
nopeasti | nopeasti | schnell | Adverb (-sti)
nukkuivat | nukkua | schlafen | Imperfekt 3. Pl.
nukkumaan | nukkua | schlafen | 3. Infinitiv Illativ (mennä nukkumaan)
nukkuu | nukkua | schlafen | Präsens 3. Sg.
nuori | nuori | jung | Adjektiv
nykyään | nykyään | heutzutage | Adverb
nyt | nyt | jetzt | Adverb
nähdä | nähdä | sehen | Infinitiv (Typ 2)
nähnyt | nähdä | gesehen | Partizip Perfekt Aktiv Sg.
näimme | nähdä | sehen | Imperfekt 1. Pl.
odota | odottaa | warten | Imperativ Sg. (tt → t)
odotetaan | odottaa | warten, erwarten | Passiv Präsens
odotimme | odottaa | warten | Imperfekt 1. Pl. (tt → t)
odottakaa | odottaa | warten | Imperativ Pl.
odottaneet | odottaa | gewartet | Partizip Perfekt Aktiv Pl.
oikein | oikein | richtig | Adverb
ole | olla | sein | Imperativ Sg. / Form nach Verneinung (en ole)
olemme | olla | sein | Präsens 1. Pl.
olen | olla | sein | Präsens 1. Sg.
olet | olla | sein | Präsens 2. Sg.
oletko | olla | sein | Präsens 2. Sg. + Frage -ko
oletteko | olla | sein | Präsens 2. Pl. + Frage -ko
oli | olla | sein | Imperfekt 3. Sg.
olimme | olla | sein | Imperfekt 1. Pl.
olin | olla | sein | Imperfekt 1. Sg.
olinko | olla | sein | Imperfekt 1. Sg. + -ko („ob ich war“)
olisi | olla | sein | Konditional 3. Sg.
olisiko | olla | sein | Konditional 3. Sg. + Frage -ko
olisimme | olla | sein | Konditional 1. Pl.
olisin | olla | sein | Konditional 1. Sg.
olisit | olla | sein | Konditional 2. Sg.
olivat | olla | sein | Imperfekt 3. Pl.
olkaa | olla | sein | Imperativ Pl.
olleet | olla | gewesen | Partizip Perfekt Aktiv Pl.
ollut | olla | gewesen | Partizip Perfekt Aktiv Sg.
on | olla | sein | Präsens 3. Sg.
opettaja | opettaja | Lehrer(in) | Nominativ Sg.
opetti | opettaa | lehren, beibringen | Imperfekt 3. Sg.
opiskellaan | opiskella | lernen, studieren | Passiv Präsens
opiskellut | opiskella | gelernt | Partizip Perfekt Aktiv Sg. (-llut)
opiskelukavereitani | opiskelukaveri | Studienkollege | Partitiv Pl. + Possessivsuffix -ni
ostaa | ostaa | kaufen | Infinitiv (Typ 1)
ostaisi | ostaa | kaufen | Konditionalstamm nach Verneinung (en ostaisi)
ostaisin | ostaa | kaufen | Konditional 1. Sg.
ostimme | ostaa | kaufen | Imperfekt 1. Pl.
ostin | ostaa | kaufen | Imperfekt 1. Sg.
ostitko | ostaa | kaufen | Imperfekt 2. Sg. + Frage -ko
ota | ottaa | nehmen | Imperativ Sg. (tt → t)
oulussa | Oulu | Oulu (Stadt) | Inessiv
ovat | olla | sein | Präsens 3. Pl.
ovi | ovi | Tür | Nominativ/Akkusativ Sg. (Objekt beim Imperativ)
pakkasta | pakkanen | Frost | Partitiv Sg.; astetta pakkasta = Grad unter null
pakollisena | pakollinen | Pflicht-, obligatorisch | Essiv Sg. („als …“)
paljon | paljon | viel | Adverb
parasta | paras | das Beste | Partitiv Sg. (Superlativ von hyvä)
parempi | parempi | besser | Komparativ von hyvä
pelasin | pelata | spielen (Spiel, Sport) | Imperfekt 1. Sg. (Typ 4)
perheet | perhe | Familien | Nominativ Pl.
perillä | perillä | am Ziel | Adverb; olla perillä = angekommen sein
pian | pian | bald | Adverb
pidin | pitää | mögen | Imperfekt 1. Sg. (t → d)
pidä | pitää | halten; haben | Imperativ Sg.; pidä hauskaa = viel Spaß
pienessä | pieni | klein | Inessiv Sg. (Stamm piene-)
pieniä | pieni | klein | Partitiv Pl.
pimeisiin | pimeä | dunkel | Illativ Pl.
pimeä | pimeä | dunkel | Adjektiv, Nominativ
pitkä | pitkä | lang | Adjektiv
pitäisi | pitää | sollen | Konditional 3. Sg. (sinun pitäisi = du solltest)
politiikkaa | politiikka | Politik | Partitiv Sg.
poroja | poro | Rentier | Partitiv Pl.
poronlihaa | poronliha | Rentierfleisch | Partitiv Sg.
porotilalla | porotila | Rentierfarm | Adessiv Sg. („auf der Farm“)
puhelimessa | puhelin | Telefon | Inessiv Sg.; olla puhelimessa = telefonieren
puhuimme | puhua | sprechen | Imperfekt 1. Pl.
puhuin | puhua | sprechen | Imperfekt 1. Sg.
puhuivat | puhua | sprechen | Imperfekt 3. Pl.
puhunut | puhua | gesprochen | Partizip Perfekt Aktiv Sg.
puhuta | puhua | sprechen | Passiv Präsens verneint (ei puhuta)
puhutaan | puhua | sprechen | Passiv Präsens („man spricht“)
puhuttu | puhua | gesprochen | Partizip Perfekt Passiv (ei puhuttu)
puhuu | puhua | sprechen | Präsens 3. Sg.
pukekaa | pukea | anziehen | Imperativ Pl. (starke Stufe k)
puoli | puoli | halb | Zahlwort; puoli tuntia = eine halbe Stunde
puuroa | puuro | Brei | Partitiv Sg.
pysyimme | pysyä | bleiben | Imperfekt 1. Pl.
päivä | päivä | Tag | Nominativ/Akkusativ Sg.; joka päivä = jeden Tag
päivän | päivä | Tag | Akkusativ Sg. als Dauer (koko päivän)
päivänä | päivä | Tag | Essiv Sg. (Zeitpunkt)
päätettiin | päättää | beschließen | Passiv Imperfekt
päätetty | päättää | beschlossen | Partizip Perfekt Passiv
päättäneet | päättää | beschlossen | Partizip Perfekt Aktiv Pl.
rahaa | raha | Geld | Partitiv Sg.
rakennettiin | rakentaa | bauen | Passiv Imperfekt (nt → nn)
rakensivat | rakentaa | bauen | Imperfekt 3. Pl. (nt → ns vor -i)
rannalta | ranta | Ufer, Strand | Ablativ Sg., nt → nn
ravintolassa | ravintola | Restaurant | Inessiv Sg.
revontulia | revontulet | Polarlichter | Partitiv Pl.
rovaniemellä | Rovaniemi | Rovaniemi (Stadt) | Adessiv („in“)
ruotsia | ruotsi | Schwedisch | Partitiv Sg.
ruotsissa | Ruotsi | Schweden | Inessiv
saanut | saada | bekommen | Partizip Perfekt Aktiv Sg.
saatiin | saada | bekommen | Passiv Imperfekt
saavat | saada | bekommen | Präsens 3. Pl.
sairas | sairas | krank | Adjektiv
saisinko | saada | bekommen | Konditional 1. Sg. + Frage -ko
saisivat | saada | bekommen, dürfen | Konditional 3. Pl.
saksasta | Saksa | Deutschland | Elativ („aus“)
sanaa | sana | Wort | Partitiv Sg.
sanaakaan | sana | Wort | Partitiv Sg. + -kaan („kein einziges Wort“)
sanoi | sanoa | sagen | Imperfekt 3. Sg.
sanoo | sanoa | sagen | Präsens 3. Sg.
sata | sata | hundert | Grundzahl
sataa | sataa | regnen | Präsens 3. Sg. (ohne Subjekt)
sataisi | sataa | regnen | Konditional 3. Sg.
satoi | sataa | regnen | Imperfekt 3. Sg. (a → o)
saunassa | sauna | Sauna | Inessiv Sg.
saunotaan | saunoa | in die Sauna gehen | Passiv Präsens
se | se | es, das | Pronomen, Nominativ
sen | se | das, den | Akkusativ/Genitiv
seuraavana | seuraava | nächste(r) | Essiv Sg. (am nächsten …)
siellä | siellä | dort | Adverb
siivota | siivota | aufräumen | Infinitiv (Typ 4)
silta | silta | Brücke | Nominativ Sg.
sinua | sinä | dich | Partitiv
sinun | sinä | dein; du (sollst) | Genitiv
sinä | sinä | du | Personalpronomen 2. Sg.
sisällä | sisällä | drinnen | Adverb
sisään | sisään | hinein | Richtungsadverb
sitten | sitten | dann; vor (… sitten) | Adverb; viisi vuotta sitten = vor fünf Jahren
sitä | se | es, das | Partitiv
soita | soittaa | anrufen | Imperativ Sg. (tt → t)
soitimme | soittaa | anrufen | Imperfekt 1. Pl.
soittanut | soittaa | angerufen | Partizip Perfekt Aktiv Sg.
soitti | soittaa | anrufen | Imperfekt 3. Sg.
sujuvasti | sujuvasti | fließend | Adverb
sulje | sulkea | schließen | Imperativ Sg. (lk → lj)
suljetaan | sulkea | schließen | Passiv Präsens (lk → lj)
suomalaisille | suomalainen | Finne | Allativ Pl. („für Finnen“)
suomea | suomi | Finnisch | Partitiv Sg.
suomeen | Suomi | Finnland | Illativ („nach Finnland“)
suomen | suomi | Finnisch; Finnland | Genitiv (suomen kurssi = Finnischkurs)
suomessa | Suomi | Finnland | Inessiv („in Finnland“)
syntymäpäivälahjaksi | syntymäpäivälahja | Geburtstagsgeschenk | Translativ (-ksi: „als“)
syödään | syödä | essen | Passiv Präsens
syöneet | syödä | gegessen | Partizip Perfekt Aktiv Pl.
syönyt | syödä | gegessen | Partizip Perfekt Aktiv Sg.
syötimme | syöttää | füttern | Imperfekt 1. Pl. (tt → t)
syöty | syödä | gegessen | Partizip Perfekt Passiv
sää | sää | Wetter | Nominativ Sg.
söimme | syödä | essen | Imperfekt 1. Pl. (yö → ö)
söin | syödä | essen | Imperfekt 1. Sg. (yö → ö)
taas | taas | wieder | Adverb
taivas | taivas | Himmel | Nominativ Sg.
takaisin | takaisin | zurück | Adverb
takin | takki | Jacke | Akkusativ Sg., kk → k
takki | takki | Jacke | Nominativ/Akkusativ (Objekt beim Imperativ)
talo | talo | Haus | Nominativ Sg.
talon | talo | Haus | Akkusativ Sg.
talvena | talvi | Winter | Essiv Sg. (viime talvena = letzten Winter)
talvi | talvi | Winter | Nominativ Sg.
talviin | talvi | Winter | Illativ Pl. (tottua + Illativ)
tampereella | Tampere | Tampere (Stadt) | Adessiv („in“)
tampereelle | Tampere | Tampere | Allativ („nach“)
tampereelta | Tampere | Tampere | Ablativ („aus, von“)
tapahtui | tapahtua | passieren | Imperfekt 3. Sg.
tapasi | tavata | treffen | Imperfekt 3. Sg. (v → p)
tapasin | tavata | treffen | Imperfekt 1. Sg.
tarvitsimme | tarvita | brauchen | Imperfekt 1. Pl. (Typ 5)
tauluihin | taulu | Bild, Gemälde | Illativ Pl. (koskea + Illativ)
tehdään | tehdä | machen | Passiv Präsens
tehnyt | tehdä | gemacht | Partizip Perfekt Aktiv Sg.
teillä | te | ihr habt / Sie haben | Adessiv (Besitz)
tekisit | tehdä | machen | Konditional 2. Sg. (Stamm teke-)
tiedä | tietää | wissen | Form nach Verneinung (en tiedä), tt → d
tiennyt | tietää | gewusst | Partizip Perfekt Aktiv Sg.
tiesin | tietää | wissen | Imperfekt 1. Sg. (t → s)
tiesitkö | tietää | wissen | Imperfekt 2. Sg. + Frage -kö
todella | todella | wirklich | Adverb
toimisto | toimisto | Büro | Nominativ Sg.
toisella | toinen | zweite(r) | Adessiv Sg.
totta | tosi | wahr | Partitiv Sg.; olla totta = wahr sein
tottunut | tottua | sich gewöhnen | Partizip Perfekt Aktiv Sg. (+ Illativ)
tukea | tuki | Unterstützung | Partitiv Sg. (k → ∅ im Stamm tue-)
tule | tulla | kommen | Imperativ Sg.
tulen | tulla | kommen | Präsens 1. Sg.
tuli | tulla | kommen | Imperfekt 3. Sg.
tulimme | tulla | kommen | Imperfekt 1. Pl.
tulin | tulla | kommen | Imperfekt 1. Sg.
tulisi | tulla | kommen | Konditional 3. Sg.
tulkaa | tulla | kommen | Imperativ Pl.
tulla | tulla | kommen | Infinitiv (Typ 3)
tulleet | tulla | gekommen | Partizip Perfekt Aktiv Pl.
tullut | tulla | gekommen | Partizip Perfekt Aktiv Sg.
tuntia | tunti | Stunde | Partitiv Sg. (puoli tuntia)
tuntui | tuntua | sich anfühlen | Imperfekt 3. Sg.
työpaikan | työpaikka | Arbeitsstelle | Akkusativ Sg., kk → k
työskenteli | työskennellä | arbeiten | Imperfekt 3. Sg. (nn → nt)
työtä | työ | Arbeit | Partitiv Sg.
tälle | tämä | dieser, diese | Allativ (tälle yölle = für diese Nacht)
tämä | tämä | dies, das | Demonstrativpronomen, Nominativ
tämän | tämä | dieses | Akkusativ/Genitiv
tänne | tänne | hierher | Richtungsadverb
tänään | tänään | heute | Zeitadverb
tärkeä | tärkeä | wichtig | Adjektiv
tässä | tämä | hier, in diesem | Inessiv
tätä | tämä | dieses | Partitiv
töihin | työ | Arbeit | Illativ Pl.; mennä töihin = zur Arbeit gehen
uimaan | uida | schwimmen | 3. Infinitiv Illativ (mennä uimaan)
ulkona | ulkona | draußen | Adverb
ulos | ulos | hinaus | Richtungsadverb
unohda | unohtaa | vergessen | Imperativ-Stamm nach älä (ht → hd)
uskaltaisi | uskaltaa | sich trauen | Konditionalstamm nach Verneinung (en uskaltaisi)
uskoisi | uskoa | glauben | Konditional 3. Sg.
uuden | uusi | neu | Akkusativ Sg. (Stamm uude-)
uusi | uusi | neu | Adjektiv, Nominativ
uutisen | uutinen | Neuigkeit | Akkusativ Sg.
vaikealta | vaikea | schwierig | Ablativ (tuntua + Ablativ: sich … anfühlen)
vaikka | vaikka | obwohl | Konjunktion
vanha | vanha | alt | Adjektiv
vapaata | vapaa | frei | Partitiv Sg.
varas | varas | Dieb | Nominativ Sg.
vasta | vasta | erst | Adverb
vastaa | vastata | antworten | Präsens 3. Sg.
vastata | vastata | antworten | Infinitiv (Typ 4); + Illativ
vauva | vauva | Baby | Nominativ Sg.
vettä | vesi | Wasser | Partitiv Sg.
vialla | vika | Fehler | Adessiv; olla vialla = nicht in Ordnung sein (k → ∅)
vielä | vielä | noch | Adverb; vielä + Verneinung = noch nicht
vieläkään | vielä | immer noch (nicht) | vielä + -kään in verneinten Sätzen
viestiinsä | viesti | Nachricht | Illativ Sg. + Possessivsuffix 3. Person
vietetään | viettää | feiern, verbringen | Passiv Präsens (tt → t)
vihdoin | vihdoin | endlich | Adverb
vihreä | vihreä | grün | Adjektiv
viikolla | viikko | Woche | Adessiv Sg. (viime viikolla = letzte Woche), kk → k
viikossa | viikko | Woche | Inessiv Sg. (kaksi kertaa viikossa = zweimal pro Woche)
viime | viime | letzte(r) | unflektiertes Attribut
viisi | viisi | fünf | Grundzahl
voi | voida | können | Präsens 3. Sg.
voisitko | voida | können | Konditional 2. Sg. + Frage -ko
voitko | voida | können | Präsens 2. Sg. + Frage -ko
voittaisin | voittaa | gewinnen | Konditional 1. Sg.
vuonna | vuosi | Jahr | Essiv (Jahreszahl: „im Jahr“)
vuoroanne | vuoro | Reihe, Turn | Partitiv Sg. + Possessivsuffix 2. Pl.
vuotta | vuosi | Jahr | Partitiv Sg. nach Zahl
yhdeksältä | yhdeksän | neun | Ablativ (Uhrzeit: „um neun“)
yhdeksän | yhdeksän | neun | Grundzahl
yhdessä | yksi | ein(s) | Inessiv Sg. (yhdessä illassa = an einem Abend)
yhtä | yhtä | genauso | Adverb; yhtä paljon kuin = genauso viel wie
yleensä | yleensä | normalerweise | Adverb
ymmärsin | ymmärtää | verstehen | Imperfekt 1. Sg. (rt → rs)
ymmärtäneet | ymmärtää | verstanden | Partizip Perfekt Aktiv Pl.
ymmärtänyt | ymmärtää | verstanden | Partizip Perfekt Aktiv Sg.
ystäväni | ystävä | Freund(in) | Nominativ + Possessivsuffix -ni („mein Freund“)
ystävät | ystävä | Freunde | Nominativ Pl.
yöjunalla | yöjuna | Nachtzug | Adessiv (Verkehrsmittel: „mit“)
yölle | yö | Nacht | Allativ Sg. („für die Nacht“)
yöllä | yö | Nacht | Adessiv Sg. („nachts“)
äidin | äiti | Mutter | Genitiv Sg. (vor kanssa), t → d
älkää | ei (Verneinungsverb) | nicht (Verbot) | Verneinter Imperativ Pl.
älä | ei (Verneinungsverb) | nicht (Verbot) | Verneinter Imperativ Sg.
`,
  texts: [
    {
      id: "txt-p5-1",
      title: "Matka Lappiin",
      topic: "imperfekt",
      level: 6,
      fi: "Viime talvena matkustimme Lappiin. Lähdimme Helsingistä yöjunalla, ja aamulla olimme Rovaniemellä. Ulkona oli todella kylmä, melkein kolmekymmentä astetta pakkasta.\n\nEnsimmäisenä päivänä kävimme porotilalla ja syötimme poroja. Illalla söimme lohikeittoa pienessä ravintolassa. Myöhään yöllä näimme revontulia ensimmäistä kertaa. Taivas oli vihreä ja kaunis, emmekä halunneet mennä nukkumaan.\n\nKolmantena päivänä hiihdimme, ja lapset rakensivat lumiukon. Matka oli lyhyt, mutta emme koskaan unohda sitä.",
      de: "Letzten Winter sind wir nach Lappland gereist. Wir fuhren mit dem Nachtzug von Helsinki los, und am Morgen waren wir in Rovaniemi. Draußen war es wirklich kalt, fast dreißig Grad unter null.\n\nAm ersten Tag besuchten wir eine Rentierfarm und fütterten Rentiere. Abends aßen wir Lachssuppe in einem kleinen Restaurant. Spät in der Nacht sahen wir zum ersten Mal Polarlichter. Der Himmel war grün und wunderschön, und wir wollten nicht schlafen gehen.\n\nAm dritten Tag fuhren wir Ski, und die Kinder bauten einen Schneemann. Die Reise war kurz, aber wir werden sie nie vergessen.",
      questions: [
        {
          q: "Wie reiste die Familie nach Lappland?",
          options: ["Mit dem Flugzeug", "Mit dem Nachtzug", "Mit dem Auto"],
          answer: 1,
          why: "„Lähdimme Helsingistä yöjunalla“ – yöjuna = Nachtzug.",
        },
        {
          q: "Was machten sie am ersten Tag?",
          options: ["Sie fuhren Ski.", "Sie besuchten eine Rentierfarm und fütterten Rentiere.", "Sie bauten einen Schneemann."],
          answer: 1,
          why: "„Ensimmäisenä päivänä kävimme porotilalla ja syötimme poroja.“",
        },
        {
          q: "Mitä he söivät illalla?",
          options: ["Lohikeittoa", "Poronlihaa", "Pizzaa"],
          answer: 0,
          why: "„Illalla söimme lohikeittoa pienessä ravintolassa.“",
        },
        {
          q: "Warum wollten sie in der Nacht nicht schlafen gehen?",
          options: ["Weil es zu kalt war", "Weil sie Polarlichter sahen", "Weil die Kinder krank waren"],
          answer: 1,
          why: "„Myöhään yöllä näimme revontulia … emmekä halunneet mennä nukkumaan.“",
        },
      ],
    },
    {
      id: "txt-p5-2",
      title: "Muutto Suomeen",
      topic: "nebensaetze",
      level: 8,
      fi: "Anna muutti Saksasta Suomeen viisi vuotta sitten, koska hän oli saanut työpaikan Tampereelta. Aluksi kaikki tuntui vaikealta, vaikka hän oli opiskellut suomea jo kotona. Ihmiset, joiden kanssa hän työskenteli, puhuivat niin nopeasti, ettei hän ymmärtänyt juuri mitään. Ensimmäinen talvi oli pimeä ja kylmä, eikä hän ollut koskaan nähnyt niin paljon lunta.\n\nKun kevät vihdoin tuli, hän alkoi käydä suomen kurssilla kaksi kertaa viikossa. Siellä hän tapasi Mikon, joka oli kotoisin Kuopiosta. Mikko opetti hänelle, miten saunotaan oikein ja miksi kesämökki on suomalaisille niin tärkeä.\n\nNyt Anna puhuu suomea melkein sujuvasti, ja hän sanoo, ettei hän haluaisi enää muuttaa takaisin. Jos joku kysyy, mikä Suomessa on parasta, hän vastaa aina: hiljaisuus ja luonto.",
      de: "Anna ist vor fünf Jahren von Deutschland nach Finnland gezogen, weil sie eine Stelle in Tampere bekommen hatte. Anfangs fühlte sich alles schwierig an, obwohl sie schon zu Hause Finnisch gelernt hatte. Die Leute, mit denen sie arbeitete, sprachen so schnell, dass sie fast nichts verstand. Der erste Winter war dunkel und kalt, und sie hatte noch nie so viel Schnee gesehen.\n\nAls endlich der Frühling kam, begann sie, zweimal pro Woche einen Finnischkurs zu besuchen. Dort lernte sie Mikko kennen, der aus Kuopio stammte. Mikko brachte ihr bei, wie man richtig in die Sauna geht und warum das Sommerhaus für Finnen so wichtig ist.\n\nHeute spricht Anna fast fließend Finnisch, und sie sagt, dass sie nicht mehr zurückziehen möchte. Wenn jemand fragt, was das Beste an Finnland ist, antwortet sie immer: die Stille und die Natur.",
      questions: [
        {
          q: "Warum ist Anna nach Finnland gezogen?",
          options: ["Wegen der Liebe", "Weil sie eine Stelle in Tampere bekommen hatte", "Um an der Universität zu studieren"],
          answer: 1,
          why: "„… koska hän oli saanut työpaikan Tampereelta.“",
        },
        {
          q: "Was war am Anfang bei der Arbeit schwierig?",
          options: ["Die Kollegen sprachen sehr schnell.", "Die Arbeit war zu anstrengend.", "Sie hatte keine Kollegen."],
          answer: 0,
          why: "„Ihmiset, joiden kanssa hän työskenteli, puhuivat niin nopeasti, ettei hän ymmärtänyt juuri mitään.“",
        },
        {
          q: "Wo hat Anna Mikko kennengelernt?",
          options: ["Bei der Arbeit", "In der Sauna", "Im Finnischkurs"],
          answer: 2,
          why: "„… hän alkoi käydä suomen kurssilla … Siellä hän tapasi Mikon.“",
        },
        {
          q: "Mikä on Annan mielestä parasta Suomessa?",
          options: ["Sauna ja kesämökki", "Hiljaisuus ja luonto", "Talvi ja lumi"],
          answer: 1,
          why: "„… hän vastaa aina: hiljaisuus ja luonto.“",
        },
      ],
    },
  ],
  families: [],
};
