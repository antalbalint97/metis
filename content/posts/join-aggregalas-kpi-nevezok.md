---
title: "JOIN, aggregálás és KPI nevezők: hol csúszik félre az elemzés?"
date: "2026-02-19"
excerpt: "Miért nem elég tudni JOIN-olni? Hogyan torzulnak el a KPI-ok, ha rossz szinten számolunk?"
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 2
---

# JOIN, aggregálás és KPI nevezők: hol csúszik félre az elemzés?

Az előző cikkben arról volt szó, miért nem SQL-lel kezdődik a jó elemzés,  
hanem az adatmodell megértésével.

Most jön az a pont, ahol a legtöbb kezdő elemzés félrecsúszik.

Nem azért, mert rossz az SQL.  
Hanem azért, mert rossz szinten gondolkodunk.

Ez a cikk három dologról szól:

- mit csinál valójában egy JOIN,  
- miért veszélyes az 1 : many kapcsolat,  
- és hogyan válasszuk meg helyesen egy KPI nevezőjét.  

---

## 1. Mit csinál valójában egy JOIN?

Sokan úgy tanulják meg a JOIN-t, mint egy technikai eszközt:

```sql
SELECT *
FROM activity a
JOIN customers c
  ON a.customer_id = c.customer_id;
```

A legtöbb fejben ilyenkor ez történik:

„Összeraktam két táblát.”

Valójában azonban a JOIN nem táblákat rak össze.  
A JOIN **sorokat párosít össze**.

Ha egy customerhez 5 activity sor tartozik,  
akkor a JOIN után 5 sor lesz.

Nem 1.

Ez a legtöbb KPI torzulásának alapja.

---

## 2. Az 1 : many torzítás

Tegyük fel, hogy meg akarjuk nézni:

*Mennyi az átlagos költés ügyfelenként?*

Kezdő megoldás:

```sql
SELECT AVG(amount)
FROM activity a
JOIN customers c
  ON a.customer_id = c.customer_id;
```

Ez technikailag helyes.

De ez tranzakció-szintű átlag.

Nem ügyfél-szintű.

Ha egy ügyfél sok tranzakciót csinál,  
akkor nagyobb súlyt kap az átlagban.

Ez torzít.

---

## 3. A helyes gondolkodás: először aggregálj

Helyes megoldás:

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

Először entity-szintre lépünk.  
Utána számolunk mutatót.

Ez a különbség sor-szint és entity-szint között.

---

## 4. Mikor dupláz a JOIN?

Tipikus esetek:

- 1 : many kapcsolat  
- több fact tábla JOIN  
- nem ismert grain  

Ha nem tudod pontosan, mit jelent 1 sor,  
a JOIN könnyen sor-szorzássá válik.

És a legveszélyesebb az egészben:

a lekérdezés nem dob hibát.

Csak rossz számot ad.

---

## 5. Row-level vs entity-level

Fontos különbség:

**Row-level mutató:**  
átlag tranzakció érték  

**Entity-level mutató:**  
átlag ügyfél költés  

Ez nem technikai kérdés.  
Ez üzleti döntés.

Melyik érdekel?

---

## 6. KPI nevezők – itt csúszik el igazán

Egy KPI mindig tört:

Számláló / Nevező

A legtöbb torzulás a nevezőnél történik.

Példa:

Churn rate = churned / aktív időszak elején

Activation rate = aktivált / eligible

Ha rossz a nevező:

- túl magas arány  
- túl alacsony arány  
- félrevezető döntés  

---

## 7. KPI definíciós sablon

Minden KPI előtt töltsd ki:

- Entity:  
- Számláló:  
- Nevező:  
- Időablak:  
- Forrás tábla:  

Ha ezt nem tudod leírni,  
akkor a KPI még nincs kész.

---

## 8. Media24 példa: churn torzulás

Ha churn-t számolsz activity táblából,  
de a nevező status_snapshot-ból jön,

akkor könnyen:

- rossz időszakot hasonlítasz  
- eltérő grainen számolsz  
- torz arányt kapsz  

Ez nem SQL-hiba.  
Ez modell-hiba.

---

## Zárás

A JOIN nem veszélyes.  
A gondolkodás nélküli JOIN az.

A KPI nem torzít.  
A rosszul választott nevező torzít.

A jó elemző nem csak lekérdez.  
Hanem definiál.

És a definíció mindig megelőzi a kódot.
