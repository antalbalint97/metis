# Karrierevolúció — tartalommodell

## Modellcélok

A tartalom legyen CMS-be emelhető, sorrendezhető, lokalizálható és a prezentációtól független. A strukturált adat ne tartalmazzon privát kontaktadatot vagy nyers CV-hivatkozást.

## Page

| Mező | Típus | Kötelező | Leírás |
|---|---|---:|---|
| `slug` | string | igen | Stabil útvonalrész |
| `locale` | enum | igen | Például `hu`, később `en` |
| `seoTitle` | string | igen | Keresőcím |
| `seoDescription` | string | igen | Meta leírás |
| `hero` | Hero | igen | Nyitó tartalom |
| `framing` | Framing | igen | Személyes olvasási keret |
| `stages` | Stage[] | igen | Rendezett karrierszakaszok |
| `turningPoints` | TurningPoint[] | igen | Gondolkodásváltások |
| `carriedLessons` | Lesson[] | igen | Visszatérő készségek |
| `visitorTranslation` | VisitorSection | igen | „Mit jelent ez neked?” |
| `cta` | CTASection | igen | Záró továbblépés |
| `reviewedAt` | date | igen | Tartalmi felülvizsgálat dátuma |

## Stage

| Mező | Típus | Kötelező | Leírás |
|---|---|---:|---|
| `id` | string | igen | Stabil azonosító |
| `order` | number | igen | Megjelenési sorrend |
| `period` | string | igen | Emberileg olvasható időszak |
| `startYear` / `endYear` | number/null | nem | Későbbi szűréshez |
| `title` | string | igen | Narratív szakaszcím, nem pozíció |
| `roleContext` | string | igen | Rövid valós közeg |
| `summary` | string | igen | Mi történt ebben a szakaszban |
| `learned` | string | igen | Fő tanulság |
| `carriedForward` | string[] | igen | Transzferálható készségek |
| `visitorMeaning` | string | igen | Miért fontos az olvasónak |
| `category` | enum[] | igen | `work`, `education`, `research`, `building`, `teaching` |
| `emphasis` | enum | igen | `standard`, `turning-point`, `current` |
| `milestones` | Milestone[] | nem | Válogatott, publikálható tények |
| `optionalLink` | Link | nem | Kapcsolódó publikus oldal |
| `visualGroup` | string | nem | Későbbi nézetek csoportosítása |

## Milestone

`id`, `title`, `context`, `period`, `summary`, `category`, `isPublic`, `sourceConfidence`, `optionalLink`. A `sourceConfidence` szerkesztői mező (`single-source`, `corroborated`, `current-source`), nyilvánosan nem jelenik meg.

## TurningPoint

`id`, `order`, `from`, `to`, `title`, `summary`, `trigger`, `carriedSkills[]`.

## Lesson

`id`, `title`, `summary`, `firstAppearedInStage`, `stageIds[]`, `iconKey?`.

## CTA és section intro

- **SectionIntro:** `overline?`, `title`, `description?`.
- **Action:** `label`, `href`, `kind` (`primary` / `secondary`), `analyticsId?`.
- **CTASection:** `title`, `description`, `primaryAction`, `secondaryAction?`.

## Szerkesztési és privacy szabályok

- Csak publikus narratíva kerüljön a CMS-be; forrásfájl-útvonal és személyes kontakt ne.
- Üzleti hatásmérőszám külön jóváhagyási mező nélkül ne publikálható.
- A `roleContext` kontextust adhat, de ne váljon teljes munkaköri leírássá.
- Minden stage kötelezően tartalmazzon `learned` és `visitorMeaning` mezőt; ezek akadályozzák meg, hogy az oldal CV-listává csússzon.
- A prototype megvalósítás ugyanezt a szerkezetet követi a `src/data/career-evolution.ts` fájlban.
