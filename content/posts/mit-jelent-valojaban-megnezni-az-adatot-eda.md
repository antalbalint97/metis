---
title: "Mit jelent az EDA, azaz „megnézni az adatot”?"
date: "2026-01-27"
excerpt: "A feltáró adatelemzés (EDA) szemlélete és szerepe az elemzői gondolkodásban."
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 2
---

Amikor adatelemzésről beszélünk, sokan automatikusan számolásra, statisztikára vagy modellekre gondolnak. Mintha az elemzés ott kezdődne, ahol képletek és algoritmusok jelennek meg.

A valóságban azonban az elemzés jóval korábban indul. Már az első pillanatban, amikor megnyitunk egy adathalmazt, döntéseket hozunk. Arról, hogy mit nézünk meg, mit hagyunk figyelmen kívül, és milyen kérdéseket tartunk egyáltalán értelmesnek feltenni.

Ezt a kezdeti, gondolkodásközpontú szakaszt nevezzük feltáró adatelemzésnek, angolul *Exploratory Data Analysis*-nek, röviden **EDA**-nak.

Ez a cikk arról szól, mi az EDA valójában, mit ad, mit nem ad, és miért ez minden elemzői munka alapja.


<details>
  <summary><strong>Könyvajánló: Kézdi-Békési - Feltáró adatelemzés</strong></summary>

A feltáró adatelemzés nem pusztán technikák vagy grafikonok gyűjteménye, hanem **elemzői gondolkodásmód**. Ha szeretnél mélyebben elmerülni abban, hogyan lehet ezt a szemléletet tudatosan és következetesen alkalmazni, érdemes elolvasni a **Kézdi-Békési szerzőpáros _Feltáró adatelemzés_ című könyvét**.

A könyv különösen nagy hangsúlyt fektet arra, hogy az elemzés nem objektív igazságok mechanikus előállítása, hanem **döntések sorozata**:

- mit nézünk meg,
- mit hagyunk ki,
- és hogyan értelmezzük az adatot.

A könyvről további információ itt érhető el:  
https://www.alinea.hu/adatelemzes

> Fontos: ez nem affiliate link, csupán szakmai hivatkozás.

</details>


## Mi történik az elemzés legelső órájában?

Egy elemzés ritkán úgy indul, hogy:

> „Melyik modellt használjuk?”

Sokkal inkább ilyen kérdésekkel:

- Ez az adat egyáltalán értelmezhető?
- Mit jelent egy sor, mit jelent egy oszlop?
- Milyen mértékegységek vannak?
- Hiányos-e az adat?
- Vannak-e szélsőséges értékek?
- Van-e valami, ami első ránézésre gyanús?

<details>
  <summary><strong>Miért ezeket kérdezzük először?</strong></summary>

Ez még nem statisztika a klasszikus értelemben.  
Ez **megismerés**.

A feltáró adatelemzés célja nem az, hogy bizonyítson, hanem az, hogy feltérképezze az adat viselkedését, és megmutassa, milyen irányokban érdemes tovább gondolkodni.

</details>


## Mi az EDA valójában?

Az EDA nem egy konkrét módszer, és nem is egy fix lépéssor. Sokkal inkább egy **elemzői attitűd**.

Az EDA lényege az interakció:

- kérdést teszünk fel,
- megnézzük az adatot,
- az adat új kérdéseket vet fel,
- majd visszatérünk a kérdéshez.

<details>
  <summary><strong>Miért „iteratív” az EDA?</strong></summary>

Ez egy iteratív folyamat, ahol az elemzés iránya menet közben alakul. Nem tudjuk előre, hova jutunk el - és ez nem hiba, hanem a módszer része.

**Fontos megérteni:** az EDA nem egy „bevezető szakasz”, amit gyorsan letudunk, hanem egy gondolkodásmód, amely végigkíséri az egész elemzést.

</details>


## Az EDA mint döntések sorozata

A feltáró adatelemzés egyik legfontosabb tanulsága, hogy **nincs semleges elemzés**.

Minden egyes lépés döntés:

- melyik változót nézzük meg először,
- hogyan csoportosítunk,
- mit aggregálunk,
- milyen grafikont használunk,
- mit mutatunk meg másoknak, és mit nem.

<details>
  <summary><strong>Miért számít, hogy milyen döntéseket hozol EDA közben?</strong></summary>

Ezek a döntések befolyásolják, hogy mit látunk meg az adatban - és mit nem.  
Ezért az EDA nem pusztán technikai feladat, hanem **felelősségteljes értelmezés**.

Az elemző aktív résztvevője annak, hogy milyen kép rajzolódik ki az adatokból.

</details>


## Miért az eloszlás az első lépés?

Sok elemzés azért fut félre, mert túl hamar próbálunk „egy számot” mondani. Átlagot, arányt, mutatót.

Az EDA egyik alapszabálya, hogy **először az eloszlást nézzük meg**.

Ennek több oka van:

- sok valós adat ferde eloszlású,
- gyakoriak a szélsőséges értékek,
- sok változó nem „szép” normális eloszlású,
- egyetlen szám gyakran elfedi a valódi szerkezetet.

<details>
  <summary><strong>Mit ad az eloszlásnézés a gyakorlatban?</strong></summary>

Az eloszlás megmutatja:

- hol vannak a tipikus értékek,
- mekkora a változékonyság,
- mennyire reprezentatív egy mutató.

Ez nem statisztikai finnyásság, hanem **elemzői alaposság**.

</details>


## Mit ad az EDA, és mit nem?

Fontos tisztázni az EDA korlátait.

**Az EDA:**

- mintázatokat mutat meg,
- segít felismerni problémákat,
- jobb kérdéseket ad,
- irányt mutat a további elemzéshez.

<details>
  <summary><strong>Mit nem érdemes az EDA-tól várni?</strong></summary>

**Az EDA nem:**

- bizonyít oksági kapcsolatokat,
- nem ad végső válaszokat,
- nem helyettesíti a formális statisztikai elemzést.

Ez nem gyengeség.  
Ez az EDA természetéből fakad.

Az EDA célja nem az, hogy lezárja a gondolkodást, hanem hogy **megnyissa**.

</details>


## Miért Excel az első eszköz?

Sokan meglepődnek azon, hogy a feltáró adatelemzést gyakran Excelben vagy más táblázatkezelőben kezdjük.

Ennek oka egyszerű. Az EDA nem skálázásról és nem automatizálásról szól, hanem **átláthatóságról és gyors visszacsatolásról**.

Excelben:

- gyorsan látjuk az adatot,
- könnyű kísérletezni,
- az összefüggések vizuálisan is megjelennek,
- nem vonja el a figyelmet a technikai részletek.

<details>
  <summary><strong>„Excel vs SQL/Python” - mi változik, mi nem?</strong></summary>

A gondolkodás ugyanaz marad később SQL-ben vagy Pythonban is.  
Az eszköz változik, a szemlélet nem.

</details>


## Az EDA és a döntéstámogatás kapcsolata

A feltáró adatelemzés valódi értéke ott jelenik meg, amikor döntési helyzetben használjuk.

Az EDA segít:

- felismerni a bizonytalanságot,
- elkerülni a túlzott leegyszerűsítéseket,
- megérteni, mit lehet és mit nem kijelenteni az adatok alapján.

Ez különösen fontos üzleti, társadalmi vagy politikai döntések esetén, ahol az adatok félreértelmezése valós következményekkel járhat.

<details>
  <summary><strong>Mit ígér az EDA valójában?</strong></summary>

Az EDA nem azt ígéri, hogy mindig tudjuk a helyes választ.  
Azt ígéri, hogy **kevésbé rossz döntéseket hozunk**, mert jobban értjük a helyzetet.

</details>


## Zárás

Miért ezzel kezdünk?

A feltáró adatelemzés nem egy technikai lépcsőfok, amit „kipipálunk”, hanem az elemzői gondolkodás alapja. Egy olyan keret, amelyhez újra és újra visszatérünk, akár egyszerű riportot, akár összetett elemzést készítünk.

<details>
  <summary><strong>Ha csak egy dolgot viszel magaddal</strong></summary>

Ha ezt a szemléletet elsajátítjuk, az eszközök megtanulhatók.  
Ha viszont ezt kihagyjuk, a legmodernebb technológiák is félrevezető eredményekhez vezethetnek.

Ezért kezdődik minden komoly elemzés azzal, hogy **egyszerűen - de tudatosan - megnézzük az adatot**.

</details>