# Karrierevolúció — design direction

## Metis-örökség

Az oldal ugyanazt a világos, meleg felületrendszert, Fraunces display tipográfiát, IBM Plex Sans törzsszöveget, tompa teal akcentust, lekerekítést és DS shellt használja, mint a Metis többi oldala. Nem kap külön logót, színpalettát vagy microsite-navigációt.

## Saját karakter

Az oldal egyedi eleme az **épülő út**: vékony függőleges vonal, nagy, halk évszámok és a szakaszokból továbbvitt készségek. Ez az eredeti Claude-koncepció csomópont-logikájának Metisre fordított változata. A „knowledge graph” nem szó szerinti hálóábra, hanem olvasási struktúra.

## Tipográfiai hierarchia

- Hero H1: Fraunces, nagy, de nem plakátszerű.
- Szekciócímek: Fraunces, 2–3 lépcsővel a törzsszöveg fölött.
- Timeline-címek: Fraunces vagy a DS display token; a funkcionális alcímek sans.
- Évek, kategóriák és címkék: IBM Plex Mono kis méretben, visszafogott teal/szürke tónussal.
- Törzsszöveg: IBM Plex Sans, kényelmes sorköz, 60–75 karakteres sorhossz.

## Felület- és akcentusstratégia

- Alap: `--background` meleg törtfehér.
- Tartalmi kártyák: `--surface`, finom `--border`, minimális vagy nulla árnyék.
- Reflexiós/mentorérték blokk: `--accent-muted`.
- Teal csak jelentéshordozó pontokon: timeline-csomópont, „továbbvittem” címke, CTA és fókuszállapot.
- Nincs szakaszonként új szín: a sokszínű fázispaletta az eredeti koncepcióból vizuális zaj lenne.

## Timeline és kártyák

Az idővonal nem infografika és nem interaktív diagram. A vonal a folytonosságot, a csomópontok a fordulópontokat jelzik. Minden elem ugyanazt az anatómiát használja: időszak → cím → kontextus → tanulság → továbbvitt készség → látogatói relevancia.

## Mozgás

- Első verzióban nincs kötelező kliensoldali animáció.
- Később opcionális: egyszeri, 150–250 ms-os reveal; timeline-pont finom színváltása; hover a kártyán.
- `prefers-reduced-motion` mellett minden tartalom statikusan jelenik meg.
- Nincs particle canvas, parallax, automatikus scroll-vezérelt fejezetváltás vagy tartalmat elrejtő animáció.

## Desktop

- Marketing szélességű hero, olvasható split.
- A timeline stabil bal sínnel és tágas jobb tartalommal működik.
- A szekciók között több levegő legyen, mint a kártyák belsejében.
- Kerülni kell a dashboard-rácsot; maximum három azonos súlyú kártya egy sorban.

## Mobil

- Egyoszlopos olvasás; az évszám a cím fölé kerül.
- A timeline-vonal bal oldalon marad, de nem vesz el érdemi szélességet.
- CTA-k törhetnek teljes szélességre.
- Nincs sticky fejezetnavigáció és nincs hoverre rejtett információ.

## Kerülendő

Sötét technológiai háttér, csillag/particle motívum, üvegkártya, neon fázisszínek, skill-cloud, kördiagram, munkáltatói logófal, túl nagy eredményszámok, önmitologizáló „evolution of an AI researcher” hang, valamint olyan animáció, amely a nyugodt olvasást prezentációvá változtatja.
