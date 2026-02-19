---
title: "Adatmodell gondolkodás: hogyan épülnek fel az adatbázisok?"
date: "2026-02-19"
excerpt: "A legtöbb rossz KPI nem technikai hiba, hanem gondolkodási. Ez a cikk megmutatja, miért az adatmodell az elemzés valódi alapja."
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 6
---

# Adatmodell gondolkodás: hogyan épülnek fel az adatbázisok?


## 1. Mit jelent az, hogy „egy sor”?

Minden táblánál fel kell tenned egy egyszerű kérdést:

**Mit jelent egyetlen sor ebben a táblában?**

Példák:

- activity_daily  
  → egy user egy nap egy aktivitása  

- customers  
  → egy user  

- status_snapshot  
  → egy user egy hónapban egy státusza  

Ez az úgynevezett *grain*.

Ha a grain nincs tisztázva, akkor a számolás lutri.

## 3. Fact és dimension – két külön szerep

### Fact tábla

Olyan dolgokat tartalmaz, amik **történnek**.

Példák:

- kattintás  
- olvasás  
- vásárlás  
- login  

Ezek tipikusan sok soros, növekvő táblák.

### Dimension tábla

Olyan dolgokat tartalmaz, amik **leírják**, hogy kik és mik.

Példák:

- ügyfél adatai  
- csomag neve  
- ország  
- csatorna  

Ezek lassabban változnak.

Egyszerű szabály:

> Fact = esemény  
> Dimension = kontextus

## 4. Mi romlik el, ha ezt nem érted?

Kérdés:

*Mennyi az átlagos költés ügyfelenként?*

Kezdő megoldás:

```sql
SELECT AVG(amount)
FROM activity;
```

Ez tranzakció-szintű átlag.  
Nem ügyfél-szintű.

Helyes gondolkodás:

1. először ügyfél szinten összegzünk  
2. utána átlagolunk  

```sql
WITH customer_spend AS (
  SELECT customer_id,
         SUM(amount) AS total_spend
  FROM activity
  GROUP BY customer_id
)
SELECT AVG(total_spend)
FROM customer_spend;
```

Ugyanaz az adat.  
Teljesen más kérdés.  
Teljesen más válasz.

## 5. Entity-szint gondolkodás

Minden KPI mögött van egy főszereplő.

Ez az *entity*.

Példák:

- churn → user  
- revenue → customer vagy order  
- activity → user  

Ha ezt nem mondod ki, akkor a mutató értelmezhetetlen.

Ellenőrző kérdés:

**„Ez a szám kinek a viselkedéséről szól?”**

## 6. Mini checklist minden elemzés elején

Mielőtt SQL-t írsz:

- Mit jelent 1 sor?  
- Mi az entity?  
- Milyen szinten akarok mérni?  
- Van-e olyan tábla, ahol előbb aggregálnom kell?

Ez 2 perc gondolkodás.  
Órákat spórol meg.

## 7. Media24 példa: ugyanaz a churn, kétféleképp

status_snapshot:

1 sor = 1 user egy hónapban  

Innen számolt churn:

→ havi státusz-alapú churn  

activity_daily:

1 sor = 1 user egy nap  

Innen számolt churn:

→ viselkedés-alapú churn  

Mindkettő legitim.  
De mást jelent.

## 8. Az adatmodell nem data engineer privilégium

Sokan azt gondolják:

„Az adatmodell a mérnök dolga.”

Valójában:

- a mérnök felépíti  
- az elemzőnek **értenie kell**

Egy jó Data Analyst:

- tudja, melyik tábla mire való  
- tudja, melyik szinten mér  

Ez különbözteti meg a dashboard-kattintót az elemzőtől.

## Zárás

A jó elemzés nem SQL-lel kezdődik.  
Nem Pythonnal.  
Nem Excellel.

Hanem ezzel a kérdéssel:

**„Mit jelent egy sor az adatban?”**

Ha erre tudsz válaszolni,  
akkor az eszköz már csak részlet.
