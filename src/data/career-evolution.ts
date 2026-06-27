export type CareerStageCategory =
  | "work"
  | "education"
  | "research"
  | "building"
  | "teaching";

export type CareerStage = {
  id: string;
  order: number;
  period: string;
  startYear: number;
  endYear: number | null;
  title: string;
  roleContext: string;
  summary: string;
  learned: string;
  carriedForward: string[];
  visitorMeaning: string;
  categories: CareerStageCategory[];
  emphasis: "standard" | "turning-point" | "current";
};

export const careerStages: CareerStage[] = [
  {
    id: "valosagkozeli-kezdetek",
    order: 1,
    period: "2013–2016",
    startYear: 2013,
    endYear: 2016,
    title: "Valóságközeli kezdetek",
    roleContext: "Diákmunkák · kommunikáció · első felelősségek",
    summary:
      "Árufeltöltés, gyorsétterem, csomagolás, pénztár, recepció és adatrögzítés. Nem egy kész karrierterv elemei voltak, hanem az első találkozások azzal, mit jelent pontosan, gyorsan és másokkal együtt dolgozni.",
    learned:
      "A megbízhatóság nem látványos készség, mégis minden későbbi szakmai lépés erre épül.",
    carriedForward: ["Pontosság", "Felelősség", "Kommunikáció"],
    visitorMeaning:
      "A kiindulópontod nem határozza meg a végpontot. A korai munkákból szerzett fegyelem valódi szakmai tőke.",
    categories: ["work", "education"],
    emphasis: "standard",
  },
  {
    id: "kerdesekbol-modszer",
    order: 2,
    period: "2016–2021",
    startYear: 2016,
    endYear: 2021,
    title: "Kérdésekből kutatási módszer",
    roleContext: "Szociológia · Rajk Szakkollégium · kutatás",
    summary:
      "A társadalmi státusz, a mentális egészség, a jólét és az egyenlőtlenség kérdései vezettek el a statisztikához, az ökonometriához és a kutatási fegyelemhez. Itt vált a kíváncsiság ellenőrizhető módszerré.",
    learned:
      "Egy szám önmagában nem válasz. Tudni kell, mit mérünk, mi maradt ki, és milyen feltételezések tartják össze az elemzést.",
    carriedForward: ["Problémakeretezés", "Kutatási fegyelem", "Kritikai gondolkodás"],
    visitorMeaning:
      "A nem technikai háttér nem feltétlenül hátrány: megtaníthat jobb kérdéseket feltenni és emberi kontextusban látni az adatot.",
    categories: ["education", "research"],
    emphasis: "turning-point",
  },
  {
    id: "elmeletbol-adat",
    order: 3,
    period: "2021–2023",
    startYear: 2021,
    endYear: 2023,
    title: "Elméletből használható adat",
    roleContext: "Kutatási asszisztencia · média · adatelemzés",
    summary:
      "Az akadémiai adatmunka mellé először Stata, majd Python, SQL, több adatforrásból épülő riportfolyamatok, szegmentáció és dashboardok kerültek. A módszertanból ismételhető munka lett.",
    learned:
      "Az elemzés akkor teremt értéket, ha mások számára is érthető, újrafuttatható és döntési helyzetben használható.",
    carriedForward: ["Adat-előkészítés", "Automatizálás", "Adatmesélés"],
    visitorMeaning:
      "A karrierváltás gyakran nem ugrás, hanem híd: a már meglévő gondolkodásod mellé fokozatosan épülnek az új eszközök.",
    categories: ["research", "work"],
    emphasis: "turning-point",
  },
  {
    id: "elemzesbol-rendszer",
    order: 4,
    period: "2023–2025",
    startYear: 2023,
    endYear: 2025,
    title: "Elemzésből működő rendszer",
    roleContext: "Légiközlekedés · kiskereskedelem · Data & ML Engineering",
    summary:
      "A fókusz az egyedi elemzésekről produkciós adat- és ML-pipeline-okra, automatizált feldolgozásra, felhős környezetre és üzletileg használt adattermékekre került.",
    learned:
      "A jó modell önmagában kevés. Megbízható adat, üzemeltethető folyamat, világos felelősség és üzleti kontextus együtt alkot rendszert.",
    carriedForward: ["Rendszertervezés", "Skálázhatóság", "Üzleti kontextus"],
    visitorMeaning:
      "A technikai mélység következő szintje nem feltétlenül újabb eszköz: gyakran a teljes folyamatért vállalt felelősség.",
    categories: ["work", "building"],
    emphasis: "standard",
  },
  {
    id: "szintezis-es-tudasatadas",
    order: 5,
    period: "2025–",
    startYear: 2025,
    endYear: null,
    title: "Szintézis és tudásátadás",
    roleContext: "GenAI · terméképítés · Metis · mentorálás",
    summary:
      "A társadalomtudományi kérdezés, az adatos módszer és a mérnöki rendszerépítés ma generatív AI-projektekben, saját digitális termékekben és a Metis tanulási kereteiben találkozik.",
    learned:
      "Az érthető magyarázat nem a technikai mélység leegyszerűsítése, hanem annak próbája, hogy valóban összeállt-e a tudás.",
    carriedForward: ["Szintézis", "Tanítás", "Folyamatos tanulás"],
    visitorMeaning:
      "A mentorálás értéke nem a kész válaszokban, hanem abban van, hogy valaki segít meglátni és felépíteni a következő lépést.",
    categories: ["building", "teaching"],
    emphasis: "current",
  },
];

export const turningPoints = [
  {
    number: "01",
    title: "Kíváncsiságból jó kérdés",
    summary:
      "A sok érdeklődési irány akkor vált szakmai alappá, amikor módszert kapott: definíciókat, adatot és ellenőrizhető érvelést.",
  },
  {
    number: "02",
    title: "Elemzésből ismételhető folyamat",
    summary:
      "Az egyedi válaszok helyett egyre fontosabb lett, hogyan lehet ugyanazt a minőséget újra és másokkal együtt előállítani.",
  },
  {
    number: "03",
    title: "Eszközből rendszer",
    summary:
      "A technológia akkor lett igazán hasznos, amikor már nem különálló modellekben, hanem adatokban, emberekben és működésben együtt gondolkodtam.",
  },
];

export const carriedLessons = [
  { title: "Valóságérzék", summary: "A megoldásnak a tényleges munkában kell működnie." },
  { title: "Jó kérdések", summary: "A tiszta probléma többet ér egy divatos eszköznél." },
  { title: "Mérési fegyelem", summary: "A szám mögötti definíció és bizonytalanság is számít." },
  { title: "Rendszergondolkodás", summary: "Adat, kód, folyamat és ember együtt ad eredményt." },
  { title: "Érthetőség", summary: "A tudás akkor használható, ha átadható és továbbépíthető." },
];
