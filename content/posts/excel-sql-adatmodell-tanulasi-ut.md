---
title: "Miért Excel → SQL → adatmodell a helyes tanulási út?"
date: "2026-02-19"
excerpt: "A legtöbben SQL-lel vagy Pythonnal akarnak kezdeni. Pedig az igazi fejlődés az Excelből indul, és adatmodell gondolkodásban ér véget."
series: "data-gondolkodas"
seriesTitle: "Adatos gondolkodás"
seriesOrder: 3
---

# Miért Excel → SQL → adatmodell a helyes tanulási út?

Ha valaki Data Analyst akar lenni, gyakran ezt mondja:

„Meg akarom tanulni az SQL-t.”  
„Meg akarom tanulni a Pythont.”

Ez érthető.

De a tapasztalatom az, hogy a legtöbb elakadás nem technológiai,  
hanem gondolkodási.

Ez a cikk arról szól, miért érdemes az elemzői tanulást:

Excel → SQL → adatmodell gondolkodás sorrendben felépíteni.

---

## 1. Excel mint gondolkodási eszköz

Sokan lenézik az Excelt.

Pedig Excelben minden alap elemzői művelet ott van:

- szűrés  
- csoportosítás  
- arányszámítás  
- bontás dimenziók szerint  

Pivot tábla = kérdésfeltevés.

Amikor pivotolsz, valójában ezt kérdezed:

„Mi történik, ha ugyanazt az adatot más tengely mentén nézem?”

Ez tiszta elemzői gondolkodás.

---

## 2. A pivot mögött SQL van

Vegyünk egy egyszerű pivotot:

Rows: snapshot_month  
Values: AVG(is_active)

SQL megfelelője:

```sql
SELECT snapshot_month,
       AVG(is_active) AS active_rate
FROM status_snapshot
GROUP BY snapshot_month;
```

A pivot nem varázslat.  
Csak egy vizuális GROUP BY.

Ha ezt megérted, az SQL már nem félelmetes.

---

## 3. SQL mint formalizált Excel

Az SQL nem új gondolkodás.

Az SQL:

Excel gondolkodás szövegben.

SELECT = mit nézek  
WHERE = mire szűrök  
GROUP BY = hogyan bontom  
CASE WHEN = üzleti szabály  

Ha Excelben tudsz gondolkodni,  
SQL-ben is fogsz tudni.

---

## 4. Miért nem elég önmagában az SQL?

Mert az SQL csak eszköz.

Lehet tökéletes lekérdezésed,  
és mégis rossz számot kapsz.

Ha nem tudod:

- mit jelent egy sor  
- mi az entity  
- milyen szinten mérsz  

akkor az SQL csak gyorsítja a hibát.

---

## 5. Itt jön képbe az adatmodell

Az adatmodell válaszol ezekre:

- melyik tábla mire való  
- hogyan kapcsolódnak  
- mi a grain  

Ezért a tanulási ív:

Excel → SQL → adatmodell

Nem fordítva.

---

## 6. Tipikus rossz tanulási sorrend

Sokan így kezdenek:

SQL → Python → dashboard

Közben:

- nem tudják mit mérnek  
- nem tudják mit jelent egy sor  
- nem értik a torzulásokat  

Ez frusztrációhoz vezet.

---

## 7. Tipikus jó tanulási sorrend

1. Excelben kérdez  
2. SQL-ben reprodukál  
3. adatmodellben megérti  

Ez stabil alapot ad.

---

## 8. Media24 példa

Excel pivot:

snapshot_month × active_rate

SQL:

```sql
SELECT snapshot_month,
       AVG(is_active)
FROM status_snapshot
GROUP BY snapshot_month;
```

Adatmodell kérdés:

„1 sor itt mit jelent?”

Ez a három szint együtt ad elemzőt.

---

## Zárás

Nem az a kérdés, hogy milyen eszközt tanulsz meg először.

Hanem az, hogy megtanulsz-e gondolkodni az adatról.

Az eszközök jönnek-mennek.

A gondolkodás marad.
