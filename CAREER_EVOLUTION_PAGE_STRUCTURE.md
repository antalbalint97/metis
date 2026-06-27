# Karrierevolúció — információs architektúra

## 1. Hero — „Nem egyenes út volt”

- **Cél:** azonnal átkeretezni az oldalt CV-ből tanulási történetté.
- **Tartalom:** rövid főállítás, személyes felütés, két CTA; mellette öt állomásból álló egyszerű útjelző.
- **Layout:** Metis DS split Hero, bal oldalon copy, jobb oldalon puha Card.
- **DS:** `Hero`, `Card`, `PageContainer`, DS gombok.
- **Jelleg:** szerkesztett szöveg + kompakt vizuális összefoglaló.

## 2. Személyes keret — „A korábbi szakaszok nem tűntek el”

- **Cél:** megadni az olvasási kulcsot: a fejlődés akkumuláció, nem identitáscsere.
- **Tartalom:** két rövid bekezdés és egy kiemelt mondat arról, hogy minden szakasz adott valamit.
- **Layout:** keskeny szerkesztőségi szövegmező, mellette „amit ma is viszek” lista.
- **DS:** `SectionHeader`, `Card`.
- **Jelleg:** főleg szöveges.

## 3. Evolúciós térkép — öt szakasz

- **Cél:** megmutatni a tényleges haladást anélkül, hogy álláshirdetés-szerű CV-vé válna.
- **Tartalom:** időszak, szakaszcím, kontextus, mit tanultam, mit vittem tovább, miért számít neked.
- **Layout:** függőleges, semantikus timeline; desktopon évszám-sín + tartalom, mobilon egyetlen jól olvasható oszlop.
- **DS:** `Card` és meglévő tokenek; egy oldal-specifikus timeline-kompozíció.
- **Jelleg:** timeline-alapú, kártyás ritmussal.

## 4. Fordulópontok — nem címek, hanem gondolkodásváltások

- **Cél:** kiemelni a pálya oksági logikáját.
- **Tartalom:** jó kérdés → módszer; módszer → reprodukálható folyamat; output → működő rendszer.
- **Layout:** három egymásra épülő, számozott Card.
- **DS:** `Card`, `SectionHeader`.
- **Jelleg:** kártyás.

## 5. Amit minden szakaszból továbbvittem

- **Cél:** explicitté tenni a transzferálható készségeket.
- **Tartalom:** valóságérzék, problémakeretezés, mérési fegyelem, rendszerépítés, érthető magyarázat.
- **Layout:** ötoszlopos készségsor nagy képernyőn, 1–2 oszlop mobilon/tableten.
- **DS:** egyszerű token-alapú elemek vagy `Card`.
- **Jelleg:** skimmelhető, nem „skill cloud”.

## 6. Mit jelent ez neked?

- **Cél:** a személyes történetet a látogató helyzetére fordítani.
- **Tartalom:** három állítás: nem nulláról indulsz; következő lépést kell tervezni; a visszajelzés rövidíti a kerülőket.
- **Layout:** erős, nyugodt, accent-muted felület; rövid copy.
- **DS:** `SectionHeader`, `Card`.
- **Jelleg:** reflektív és gyakorlati.

## 7. Záró CTA

- **Cél:** egyértelmű, nem nyomulós továbblépés.
- **Tartalom:** mentorprogram mint vezetett út; fejlődési sávok mint önálló út.
- **Layout:** középre zárt feature Card két gombbal.
- **DS:** `Card`, `SectionHeader`, DS gombok.
- **Jelleg:** tömör.

## Oldalritmus

A hosszú esszéérzetet a szöveges és strukturált blokkok váltakozása oldja. Egy képernyőn legfeljebb egy fő gondolat legyen. A timeline-elemek teljes szövege alapból látszik; interakció nem lehet a tartalom elérésének feltétele.
