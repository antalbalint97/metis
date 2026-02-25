import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Scientist – Fejlődési sáv | Metis",
  description:
    "Strukturált tanulási út Junior–Medior Data Scientisteknek: statisztika, Python, modellezés és kísérletezés.",
};

const starterArticles = [
  { title: "Mi a különbség Data Analyst és Data Scientist között?", href: "#" },
  { title: "Hogyan gondolkodik egy Data Scientist egy problémáról?", href: "#" },
  { title: "Az első modelled: mire figyelj, mielőtt kódolsz?", href: "#" },
  { title: "Hipotézis, kísérlet, iteráció: az adattudós keretrendszere", href: "#" },
];

const modules = [
  {
    title: "Valószínűségszámítás és statisztika",
    description:
      "Az adattudós legfontosabb nyelve: eloszlások, becslések, tesztelés és bizonytalanságkezelés.",
    articles: [
      "Valószínűségi változók és eloszlások intuitíven",
      "Feltételes valószínűség és Bayes-tétel a gyakorlatban",
      "Konfidenciaintervallum: mit mond valójában?",
      "Hipotézisvizsgálat: p-érték, szignifikancia és csapdák",
      "A/B teszt tervezés: minta méret, erő, szignifikancia",
    ],
  },
  {
    title: "Python és exploratív adatelemzés",
    description:
      "Pandas, vizualizáció és az az első 30 perc, amikor megismered az adataidat.",
    articles: [
      "Pandas alapok: DataFrame gondolkodás",
      "Hiányzó adatok kezelése: stratégiák és csapdák",
      "Matplotlib és Seaborn: mikor melyiket?",
      "EDA checklist: mit nézz meg először?",
      "Feature-ök felfedezése vizuálisan",
      "Jupyter notebook legjobb gyakorlatok",
    ],
  },
  {
    title: "Feature engineering és modellválasztás",
    description:
      "Hogyan készítsd elő az adatot modellezéshez, és hogyan válaszd ki a megfelelő megközelítést.",
    articles: [
      "Kategorikus változók kódolása: one-hot, target, ordinal",
      "Skálázás és normalizálás: mikor melyik kell?",
      "Feature selection technikák összehasonlítása",
      "Overfitting felismerése és megelőzése",
      "Modellválasztás: regresszió, fa, ensemble — döntési keretrendszer",
    ],
  },
  {
    title: "Modell értékelés és kísérletezés",
    description:
      "Metrikák, validáció és az a kérdés, hogy a modelled tényleg jobb-e, mint a baseline.",
    articles: [
      "Accuracy-n túl: precision, recall, F1 és mikor melyik számít",
      "ROC-görbe és AUC: vizuális modellértékelés",
      "Cross-validation: miért nem elég egy split?",
      "Baseline modellek: miért kezdj egyszerűen?",
    ],
  },
];

export default function DataScientistTrackPage() {
  return (
    <div className="space-y-14 sm:space-y-18">
      {/* Hero */}
      <section>
        <Link
          href="/fejlodesi-savok"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {"← Fejlődési sávok"}
        </Link>

        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Data Scientist – Fejlődési sáv
        </h1>

        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Strukturált tanulási út azoknak, akik statisztikai modellezéssel,
          hipotézisvizsgálattal és adatalapú predikciókkal szeretnének dolgozni.
          Valószínűségszámítás, Python, feature engineering és kísérletezés — a
          valós munkához igazítva.
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-md bg-accent-muted px-2.5 py-1 text-xs font-medium text-accent">
            JUNIOR–MEDIOR
          </span>
          <span className="text-sm text-muted-foreground">Ingyenes tartalom</span>
        </div>
      </section>

      {/* Kinek szól? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Kinek szól?
        </h2>

        <ul className="space-y-2.5 text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Junior Data Scientisteknek, akik szeretnék a statisztikai alapjaikat megerősíteni
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Medior szintűeknek, akik a modellezési gondolkodásukat rendszereznék
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Data Analysteknek, akik a Data Science irányba szeretnének lépni
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Bárkinek, aki kísérletezéssel és predikciókkal akar dolgozni
          </li>
        </ul>
      </section>

      {/* Kezdd itt */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Kezdd itt
        </h2>
        <p className="text-muted-foreground">
          Ha most találtad meg ezt a sávot, ezekkel a cikkekkel érdemes indítani.
        </p>

        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
          <ol className="space-y-3 text-muted-foreground">
            {starterArticles.map((article, i) => (
              <li key={article.title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-strong text-xs text-muted-foreground">
                  {i + 1}
                </span>
                <Link
                  href={article.href}
                  className="font-medium text-foreground hover:text-accent transition-colors"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Modulok */}
      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            Modulok
          </h2>
          <p className="text-muted-foreground">
            Tematikus blokkok, amelyek a Data Scientist munka kulcsterületeit járják körbe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="flex flex-col rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]"
            >
              <h3 className="font-semibold text-foreground">{mod.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {mod.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {mod.articles.map((article) => (
                  <li key={article} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      {article}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Mentorprogram soft CTA */}
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-xs)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Mentorprogram
        </p>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-foreground text-balance">
          Gyorsabban fejlődnél személyes támogatással?
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
          A mentorprogram keretében egyéni fejlődési tervet készítünk, és
          rendszeres beszélgetésekkel segítem a haladásodat — valódi problémákon
          keresztül.
        </p>
        <div className="mt-6">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-5 py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Mentorprogram részletei
          </Link>
        </div>
      </section>
    </div>
  );
}
