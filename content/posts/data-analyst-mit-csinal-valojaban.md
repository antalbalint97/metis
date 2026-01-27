---
title: "Mit csinál egy Data Analyst valójában?"
date: "2026-01-26"
excerpt: "És hogyan igazodj el a data szerepek zavaros világában."
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 1
---

Ha elkezdesz data állásokat nézni, nagyon gyorsan belefutsz egy furcsa jelenségbe. Szinte minden pozíció „analyst”, „scientist” vagy „engineer”, mégis teljesen mást várnak el.

Ugyanarra a munkára különböző cégek különböző címkéket használnak, és gyakran ugyanaz a cím több különböző szerepet is takar.

Ez nem a jelentkezők hibája. És nem feltétlenül a cégeké sem. Egyszerűen arról van szó, hogy a data világ gyorsabban nőtt, mint ahogy a nyelvünk és a pozícióneveink lekövették volna.

Ez a cikk nem egy újabb definíciós gyűjtemény. A célja az, hogy kapaszkodót adjon ahhoz, hogy el tudd dönteni:

- hogyan érdemes értelmezni a pozícióneveket,
- milyen szerepek léteznek valójában,
- és hogy neked személy szerint ez a terület való-e.


## Miért ilyen zavarosak a pozíciónevek?

A *„title inflation”* a data világban gyakran inkább kommunikációs és branding kérdés, mint pontos szakmai leírás. Egyes címek jobban hangzanak, vonzóbbak a piacon, vagy egyszerűen divatosabbak egy adott időszakban.

Gyakori helyzetek:

- kisebb cégeknél egyetlen emberre kerül adatgyűjtés, elemzés és riportolás,
- magyar KKV-knál az „üzleti elemző” gyakran mindent jelent az Exceltől az SQL-ig,
- nem ritka, hogy „data scientist” cím alatt valójában dashboard-építés zajlik,
- előfordul, hogy egy pozíció három vagy akár még több külön szerepet von össze.

Ez önmagában nem feltétlenül probléma. A gond akkor kezdődik, amikor a jelentkező a cím alapján próbálja megérteni, mire számíthat.

**Egy fontos ökölszabály:** egy pozíciónév önmagában keveset mond. A feladatleírás, a döntési felelősség és a napi munka sokkal többet.

<details>
  <summary><strong>Mini iránytű: mit nézz a pozíciónév helyett?</strong></summary>

- **Kinek dolgozol?** (felsővezető, Project Manager, sales (értékesítési csapat), marketing, product (termékfejlesztésért felelős csapat), finance (pénzügyi csapat))
- **Mi a kimenet?** (dashboard - dinamikus kimutatás, elemzés, modell, pipeline, ad hoc insight)
- **Mi a döntési szereped?** (csak riportolsz, vagy javasolsz, vagy te hozol döntést?)
- **Mennyire termék-szerű a munka?** (egy rendszer része lesz, vagy egyszeri prezentáció?)

</details>


## Egy adat, több szerep
### Hogyan lesz adatból döntés?

Ha leegyszerűsítjük, minden data szerep ugyanarra az alapkérdésre reagál:

> Hogyan lesz adatból értelmezhető információ, majd döntés?

Erre a kérdésre többféle válasz létezik.


## Data Engineer
### Hogyan működjön stabilan az adat?

Az adatmérnök feladata, hogy az adat egyáltalán létezzen, elérhető legyen, és megbízhatóan működjön. Ő rendszerekben gondolkodik.

Az élmény szintjén ez olyan, mint egy mérnök vagy építész munkája: nem az érdekli, milyen szép lesz a végeredmény, hanem hogy bírja-e a terhelést, skálázható-e, biztonságos-e, és hol fog eltörni.

A data engineer tipikusan:

- adatforrásokat köt össze,
- adatfeldolgozási folyamatokat (pipeline-okat) épít,
- adatminőséget biztosít,
- automatizált, skálázható rendszerekben gondolkodik.

<details>
  <summary><strong>Ha a hirdetésben ezt látod, valószínűleg engineering</strong></summary>

- ETL / ELT pipelines
- data pipelines / batch processing (dbt)
- workflow orchestration (Airflow)
- data warehouse / data lake / lakehouse (BigQuery, Snowflake, Redshift, Databricks)
- SQL + Python for data pipelines
- data ingestion (APIs, S3, FTP, Kafka topics)
- streaming / real-time data (Kafka, Kinesis)
- data quality / monitoring / SLAs
- schema management / data modeling
- cloud data stack (AWS / GCP / Azure)

</details>


## Data Analyst
### Mit mondanak az adatok, és mit nem?

Az adatelemző szerepe ott kezdődik, amikor az adat már létezik. A feladata nem az, hogy rendszert építsen, hanem az, hogy értelmezzen.

Elemzőként az élmény sokszor olyan, mint egy nyomozás: van egy halom nyers információ, és abból kell következtetéseket levonni. Nem az a kérdés, hogy „mit tudok kiszámolni”, hanem az, hogy:

> Mire ad választ az adat, és mire nem?

A data analyst tipikusan:

- kérdéseket tesz fel,
- eloszlásokat vizsgál,
- összehasonlít csoportokat,
- felismeri, ha egy mutató félrevezető,
- és mindezt olyanoknak kommunikálja, akik nem adatelemzők.

Ez a szerep döntéstámogatásról szól. Nem jóslásról és nem bizonyításról, hanem arról, hogy csökkentsük a bizonytalanságot.

<details>
  <summary><strong>Tipikus (és nagyon valós) félreértés: „csak számold ki”</strong></summary>

Sok szervezetben az elemzőtől azt várják, hogy „szállítson egy számot”. A jó elemző viszont visszakérdez:

- pontosan **milyen döntéshez** kell?
- mi a **definíció** (pl. „aktív user”, „churn”, „kosár”)?
- milyen **torzítás** lehet az adatban?
- mit **nem tudunk** ebből biztosan?

Ez a különbség a „riport” és az „elemzés” között.

</details>


## Data Scientist
### Mi történhet, ha így döntünk?

Az adattudós szerepe akkor kerül előtérbe, amikor már nem csak megérteni akarjuk a múltat és a jelent, hanem lehetséges jövőbeli kimeneteket modellezünk.

Régebben ez a szerep gyakran együtt járt mély matematikai és statisztikai fejlesztéssel. Ma a valóság ennél árnyaltabb.

A legtöbb data scientist:

- meglévő modelleket alkalmaz,
- megfelelő tanuló algoritmust választ,
- értelmezi a modellek bizonytalanságát,
- és beilleszti az eredményeket egy döntési folyamatba.

Az adattudós élményszinten olyan, mint egy óvatos jós: nem jóslatokat ad, hanem valószínűségeket, és mindig hozzáteszi, mekkora a bizonytalanság.

<details>
  <summary><strong>„Data scientist” vs „ML engineer” egy mondatban</strong></summary>

- **Data scientist:** a modell döntéstámogatási értéke a fókusz (mit jelent, mikor használható, mekkora a bizonytalanság)
- **ML engineer:** a modell termékbe vitele a fókusz (deployment, latency, monitoring, retrain, skálázás)

</details>


## Business analyst, IT business analyst, BI analyst
### Mi micsoda?

Itt születik a legtöbb félreértés.

- A **business analyst** üzleti folyamatokat elemez, követelményeket tisztáz, stakeholder-ekkel dolgozik.
- Az **IT business analyst** gyakran közvetítő az üzlet és az IT között (ő „fordít”).
- A **BI analyst** riportolásra, dashboardokra és mutatókra fókuszál.

Ezek nem rossz vagy alacsonyabb rendű szerepek. Egyszerűen más fókuszú válaszok ugyanarra az igényre: hogyan értsük meg, mi történik egy szervezetben.

<details>
  <summary><strong>Gyors önteszt: melyik áll hozzád közelebb?</strong></summary>

- Szeretsz egyeztetni, definíciókat tisztázni, folyamatokat rajzolni: **Business Analyst**
- Szeretsz hidat képezni üzlet és tech között, specifikációt írni: **IT Business Analyst**
- Szeretsz KPI-okat rendbe rakni, dashboardot csiszolni, „single source of truth”-ot építeni: **BI Analyst**
- Szeretsz kérdéseket bontani, bizonytalanságot kezelni, ok-okozatot keresni: **Data Analyst**

</details>


## Hogyan ismerd fel a gyanús pozíciókat?

Ha egy álláshirdetés egyszerre vár el adatpipeline-építést, dashboardolást és prediktív modellezést, akkor valószínűleg több szerepet vontak össze egy cím alatt.

Ez lehet jó tanulási lehetőség, de fontos tudni, hogy ilyenkor nem klasszikus data analyst vagy data scientist szerepről van szó.

<details>
  <summary><strong>Mikor „jó deal” egy összevont szerep?</strong></summary>

Akkor, ha van mentorálás, realista scope, és tiszta prioritás (mi az első 3 hónap feladata). Ha ezek nincsenek, könnyen „mindent is” szerep lesz belőle.

</details>



## Milyen élmény ebben a világban dolgozni?

Sokan technikai területként gondolnak a data szakmákra, pedig a kreativitás kulcsszerepet játszik. Nem művészi értelemben, hanem problémamegoldásban: új kérdések megfogalmazásában, új nézőpontok felvetésében, adatok újraértelmezésében, és abban, hogyan kötjük össze a számokat a valósággal.

Az eszközök egyre jobbak, az AI egyre több technikai terhet vesz le rólunk. De ettől nem lesz felesleges az elemző. Épp ellenkezőleg: felértékelődik az, aki érti, mit kérdezzen, mit ellenőrizzen, és mit jelent az eredmény.


## Kinek való ez a világ?

Ez a terület neked való lehet, ha:

- szeretsz összetett problémákon gondolkodni,
- nem zavar, hogy nincs mindig egyetlen helyes válasz,
- érdekel a bizonytalanság kezelése,
- és fontosnak tartod az érthető kommunikációt.

Kevésbé ideális, ha kizárólag technikai trükköket keresel, gyors recepteket vársz, vagy frusztrál, ha a válasz gyakran az, hogy „attól függ”.

<details>
  <summary><strong>A leggyakoribb „fájdalom”, amire érdemes készülni</strong></summary>

Az, hogy a munka egy része nem adat, hanem definíció-egyeztetés, adatminőség-vita, „miért más a szám, mint múlt héten?” jellegű kérdések, és az is, hogy az emberek néha nem azt akarják hallani, amit az adat mutat.

</details>


## Zárás

A data szakmák lényege nem az eszközökben és nem a címekben van, hanem abban, hogyan gondolkodunk problémákról, bizonytalanságról és döntésekről.

Ha ezt az attitűdöt érted és magadénak érzed, az eszközök megtanulhatók. Ha viszont csak a címek érdekelnek, a data világ könnyen csalódást okozhat.

A következő cikkben azt bontjuk ki, hogyan néz ki ez a gondolkodás a gyakorlatban: mi az a feltáró adatelemzés, és miért ez minden elemzői munka alapja.
