---
title: "Leíró statisztika: hogyan ne félj a számoktól és értelmezd őket helyesen?"
date: "2026-01-27"
excerpt: "Nem matekóra: hanem egy intuitív minimum csomag, hogy ne egy számot nézz, hanem az adatok eloszlását."
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 3
---

Az előző cikkben arról volt szó, hogy az elemzés már ott elkezdődik, amikor **megnyitjuk az adatot**. Nem képletekkel indul, hanem döntésekkel: mit nézünk meg, mit hagyunk ki, mit tekintünk „normálisnak”, és mi az, ami gyanús.

Most egy lépéssel tovább megyünk.

Mert van egy pont, ahol sok emberben beüt a fék:  

> „Oké, látom az adatot… de most statisztikáznom kell?”

És itt jelenik meg a *"statisztika szorongás"*.

Ez a cikk nem egy klasszikus értelemben vett statisztikaóra.  
Nem célja, hogy „megtanítsa az elméleti statisztikát”.  
A célja, hogy adjon egy érthető belépő minimumot, ami segít:

- hogy ne csak egy számot nézz,
- hanem tudd, mikor milyen összefoglalás korrekt,
- és hogyan maradj őszinte az adathoz, akkor is, ha egyszerűsítesz.

## Miért veszélyes az „egy szám” gondolkodás?

A leggyakoribb kezdő elemzői reflex az, hogy:

- kiszámolunk egy átlagot,
- ránézünk egy lemorzsolódási rátára (churn rate-re),
- és kész is a „válasz”.

A gond ezzel nem az, hogy „rossz” lenne. Az egyszerűsítés néha kifejezetten hasznos.

A gond az, amikor az egyszerűsítés elrejti a szerkezetet.

Ugyanaz a szám **nagyon különböző világokat** jelenthet.

<plotly id="abra-1" height="420"></plotly>
 
<details>
  <summary><strong>Miért fontos ez elemzőként?</strong></summary>

Mert a döntéseknek nem az „átlag” a következménye, hanem az, ami a valóságban történik a csoportokkal:  
kik a tipikusak, kik lógnak ki, kiket érint igazán egy változás.

</details>

## A változók típusai: a legjobb belépés a leíró statba

Ha csak egy dolgot tanulsz meg ebből a cikkből, legyen ez:

> Minden változótípust másképp érdemes összefoglalni.

### A négy alap típus

- **Numerikus:** pénz, idő, darabszám  
- **Kétértékű, azaz bináris (0/1):** lemorzsolódás igen/nem, aktív igen/nem  
- **Kategórikus:** előfizetés típusa, ország, marketing csatorna  
- **Idő:** dátumok, időbeli trendek

Miért fontos?  
Mert sok félreértés nem a számolásból jön, hanem abból, hogy **rossz típushoz rossz összefoglalást választunk**.

| Változótípus | Tipikus összefoglalás |
|---|---|
| Numerikus | Medián/átlag + eloszlás (hisztogram/boxplot) |
| Bináris (0/1) | Arány + hány megfigyelésből (nevező) |
| Kategórikus | Gyakoriság + arány (top kategóriák) |
| Idő | Trend + összehasonlított időszak (pl. TY vs LY) |

## Középértékek: átlag, medián, módusz

Sokan itt ijednek meg, mert azt hiszik, ez „matek”.

Pedig ezek csak különböző válaszok ugyanarra a kérdésre:

> „Mi a tipikus érték?”

### Átlag
Az átlag akkor jó, ha az értékek nagyjából egy kupacban vannak, és nincs túl sok extrém érték.

### Medián
A medián a „középső” érték: ha sorba rendezed az adatokat, a közepén lévőt kapod.

A medián akkor jó, ha az adat ferde, vagy vannak nagy kilengések.

### Módusz
A leggyakoribb érték. Kategóriáknál különösen hasznos.

```calc
Költés (EUR):
10, 12, 12, 13, 13, 14, 15, 16, 200


1. Sorbarendezés:
10, 12, 12, 13, 13, 14, 15, 16, 200


2. Medián:
- 9 elem → középső a 5.
- medián = 13


3. Átlag:
(10 + 12 + 12 + 13 + 13 + 14 + 15 + 16 + 200) / 9
= 305 / 9
≈ 33.9
```
<plotly id="abra-3" height="420"></plotly>

<details>
  <summary><strong>Ha csak egy mondatot jegyzel meg</strong></summary>

Az átlag érzékeny a szélsőségekre.  
A medián sokszor egy jobb közelítése a tipikus értéknek ad üzleti adatoknál.

</details>

## Mi az eloszlás, és miért ez az EDA egyik első lépése?

Az eloszlás nem hardcore matematikai statisztika. Inkább egy térkép.

Az eloszlás megmutatja:

- hol vannak a tipikus értékek,
- mekkora a szóródás,
- vannak-e szélsőségek,
- és azt is, hogy egy „egy szám” mennyire reprezentatív.

<plotly id="abra-4" height="420"></plotly>

Kapcsolódás az EDA-hoz:

> Az EDA egyik kulcsmozzanata: először megnézed, hogy viselkedik az adat, és csak utána döntesz arról, mit jelent a „tipikus”.

## A három leggyakoribb üzleti eloszlásminta (és mit csinál velük az elemző)

### Ferde eloszlás (tenure = előfizetés hossza)
Sok kicsi érték, kevés nagy.

**Mit csinál az elemző?**
- mediánt néz (vagy percentiliseket),
- és eloszlást mutat, nem csak átlagot.

<plotly id="abra-5" height="420"></plotly>

### Sok nullás változó (usage = aktivitás)
Rengeteg 0, és néhány aktív user.

**Mit csinál az elemző?**
Először kérdez:

- a 0 „nem használja”?
- vagy „még nem volt esélye használni”?
- vagy „rosszul mértük”?

<plotly id="abra-6" height="420"></plotly>

### Outlierek (power userek = kiemelkedő felhasználók, pl. nagy költés)
**Mit csinál az elemző?**
Nem „kidobja”, hanem dönt:

- külön csoportként kezeli?
- „levágja” a széleket egy prezentációban, de külön jelzi?
- vagy a cél épp az, “hogy őket megértse”?

<details>
  <summary><strong>Outlier = hiba?</strong></summary>

Nem minden outlier hiba.  
Gyakran üzleti jelenség (power userek, VIP ügyfelek, nagy kosarak), és a kérdés inkább az, hogy:
- a „tipikus” viselkedés érdekel most,
- vagy épp a szélső esetek működtetik a rendszert.

</details>

## Arányok és 0/1 változók: miért átlag a lemorzsolódási ráta?

Ha van egy 0/1 változó:
- churn = 1, ha elment
- churn = 0, ha maradt

Akkor az átlag ezt jelenti: hány darab 1-es van az összeshez képest.

```calc
10 userből 2 lemorzsolódik:
1, 0, 0, 0, 1, 0, 0, 0, 0, 0

1. Összegzés:
1 + 1 = 2 churn

2. Darabszám:
10 user

3. Átlag (arány):
2 / 10 = 0,2 = 20%
```

De jön a „finom” rész:

> Ugyanaz a 20% teljesen más, ha 10 emberből jön, mint ha 10 000-ből.

Ezért mindig kell mellé, az is hogy  hány megfigyelésből számoljuk:

```calc
Eset 1: kis nevező
2 churn / 10 user
= 0,2 = 20%

→ Kevés megfigyelés
→ Nagy bizonytalanság
→ Egyetlen esemény sokat változtat az arányon


Eset 2: nagy nevező
2000 churn / 10 000 user
= 0,2 = 20%

→ Sok megfigyelés
→ Stabil arány
→ Egy-egy esemény hatása elenyésző
```

## Összehasonlítások: ne csak egy számot nézz

Az elemzés tipikusan nem ott kezdődik, hogy „mennyi összesen”, hanem ott, hogy:

- előfizetési csomag szerint mennyi?
- ország szerint mennyi?
- új vs régi felhasználónál mennyi?

A minimális jó gyakorlat:

- csoportonként átlag/medián (a változó típusától függően),
- és mellé az eloszlás rövid „érzete”.

<plotly id="abra-8" height="420"></plotly>

A következő gondolati lépés (amit majd később bontunk ki):

> Ha különbséget látunk, a következő kérdés nem az, hogy „ki nyert”, hanem az, hogy: mi lehet mögötte?

## Zárás: gyakorlati checklist elemzőknek

Ha gyorsan kell eldöntened, mit nézz:

- **Numerikus és ferde:** medián + eloszlás  
- **Bináris (0/1):** arány + hány megfigyelésből (nevező!)  
- **Kategóriás:** gyakoriság + arány  
- **Idő:** trend + összehasonlított időszak

<details>
  <summary><strong>Ha csak egy dolgot viszel magaddal</strong></summary>

Az elemző nem attól „jó”, hogy sok képletet tud.  
Attól jó, hogy nem hagyja, hogy egyetlen szám elmeséljen egy hamis történetet.

</details>