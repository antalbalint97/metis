---
title: "Adatmodell gondolkodás: fact, dimension, kulcsok és kapcsolatok"
date: "2026-02-16"
excerpt: "Miért nem mindegy, hogy mit jelent egy sor az adatban - és miért innen indul minden korrekt elemzés."
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 5
---

Sok kezdő Data Analyst úgy tanul SQL-t, mint egy lekérdezési nyelvet.
SELECT, WHERE, GROUP BY, JOIN.

Ez hasznos.
De önmagában kevés.

A jó elemzés nem ott kezdődik, hogy mit írunk le,
hanem ott, hogy hogyan gondolkodunk az adatról.

Ez a cikk arról szól, mi az az adatmodell gondolkodás,
és miért ez az alapja minden későbbi korrekt mérésnek.

---

## Mi az az adatmodell gondolkodás?

Egyszerűen megfogalmazva:

Tudod, hogy egy sor mit jelent.
Tudod, hogy egy tábla mire szolgál.
Tudod, hogy a táblák hogyan kapcsolódnak egymáshoz.

Ha ez nincs meg, akkor:

- rossz szinten aggregálsz,
- duplázol JOIN-nal,
- és félrevezető KPI-ket számolsz.

---

## Fact és dimension: két külön világ

### Fact (ténytábla)

Olyan eseményeket tartalmaz, amelyek megtörténtek.

Példák:
- vásárlás
- rendelés
- app activity
- kattintás
- tranzakció

Példa:

| activity_id | customer_id | date | amount |
|------------|-------------|------|--------|
| 1001 | 42 | 2026-01-05 | 12.99 |

---

### Dimension (dimenziótábla)

Leíró információ az entitásokról.

| customer_id | signup_date | country | segment |
|-------------|-------------|---------|---------|
| 42 | 2025-03-12 | HU | premium |

---

## Primary key és foreign key

Primary key: egy sor egyedi azonosítója.
Foreign key: másik tábla primary key-jére mutató oszlop.

---

## 1 : many kapcsolat

1 customer → sok activity sor

---

## Grain

Mit jelent egy sor a táblában.

---

## Gyakori hiba

```sql
SELECT COUNT(*) FROM activity;
```

Helyes:

```sql
SELECT COUNT(DISTINCT customer_id) FROM activity;
```

---

## Zárás

Az adatmodell nem adat engineer privilégium.
Egy jó Data Analyst érti a struktúrát.
