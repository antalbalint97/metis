---
title: "JOIN, aggregálás és KPI nevezők: hol csúszik félre az elemzés?"
date: "2026-02-16"
excerpt: "Miért nem elég tudni JOIN-olni - és hogyan torzulnak el a mutatók, ha rossz szinten számolunk."
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 6
---

Az előző cikkben az adatmodell alapjairól volt szó: fact, dimension, primary key, foreign key, grain.

Most jön az a pont, ahol a legtöbb kezdő elemzés félrecsúszik.

Nem azért, mert rossz az SQL.
Hanem azért, mert rossz szinten gondolkodunk.

Ez a cikk három dologról szól:

- mit csinál valójában egy JOIN,
- miért veszélyes a duplázás,
- és hogyan válasszuk meg helyesen egy KPI nevezőjét.

---

## Mit csinál valójában egy JOIN?

Sokan úgy tanulják meg a JOIN-t, mint egy technikai eszközt:

```sql
SELECT *
FROM activity a
JOIN customers c
  ON a.customer_id = c.customer_id;
```

De a JOIN nem „összerak két táblát”.
A JOIN sorokat párosít össze.

Ha egy customerhez 5 activity sor tartozik,
akkor a JOIN után 5 sor lesz.

Nem 1.

---

## A klasszikus 1 : many torzítás

Kérdés:

Mennyi az átlagos költés ügyfelenként?

Kezdő megoldás:

```sql
SELECT AVG(amount)
FROM activity a
JOIN customers c
  ON a.customer_id = c.customer_id;
```

Ez tranzakció szintű átlag.

---

## Helyes megoldás

Először aggregálunk ügyfél szinten:

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

---

## Mikor dupláz a JOIN?

- 1 : many kapcsolat
- több fact tábla JOIN
- nem ismert grain

---

## Row-level vs entity-level

Row-level:
- átlag tranzakció érték

Entity-level:
- átlag ügyfél költés

---

## KPI nevezők

Activation rate = aktivált / eligible

Churn rate = churned / aktív időszak elején

---

## Három kérdés minden KPI előtt

1. Ki az entity?
2. Mi a számláló?
3. Ki a nevező?

---

## Zárás

A JOIN nem veszélyes.
A gondolkodás nélküli JOIN az.

A KPI nem torzít.
A rosszul választott nevező torzít.
