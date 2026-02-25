import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Machine Learning Engineer – Fejlődési sáv | Metis",
  description:
    "Strukturált tanulási út Junior–Medior ML Engineereknek: pipeline-ok, metrikák, deployment és monitorozás.",
};

const starterArticles = [
  { title: "Mit csinál egy ML Engineer a gyakorlatban?", href: "#" },
  { title: "Hogyan épül fel egy ML pipeline end-to-end?", href: "#" },
  { title: "Metrikák, amelyek számítanak: offline vs. online értékelés", href: "#" },
  { title: "Az első modelled produkció felé: mire figyelj?", href: "#" },
];

const modules = [
  {
    title: "ML pipeline-ok és MLOps alapok",
    description:
      "Hogyan épül fel egy reprodukálható, karbantartható ML rendszer a notebook-on túl.",
    articles: [
      "Notebook-tól a pipeline-ig: miért kell struktúra?",
      "Adatvalidáció és preprocessing automatizálás",
      "Experiment tracking: MLflow, W&B és társaik",
      "Verziókövetés adatra és modellre",
      "CI/CD ML-projektekben: miben más?",
    ],
  },
  {
    title: "Modelltréning és értékelési metrikák",
    description:
      "Tréning-ciklusok, hiperparaméter-keresés és a helyes metrikaválasztás — az üzleti célhoz igazítva.",
    articles: [
      "Tréning, validáció, teszt: miért három halmaz?",
      "Hiperparaméter-tuning stratégiák: grid, random, Bayesian",
      "Offline metrikák: precision, recall, RMSE és társaik",
      "Üzleti metrika vs. modellmetrika: hol a kapcsolat?",
      "Overfitting a gyakorlatban: felismerés és megelőzés",
    ],
  },
  {
    title: "Deployment, serving és monitorozás",
    description:
      "Hogyan kerül a modell éles környezetbe, és hogyan tartod ott egészségesen.",
    articles: [
      "Model serving alapok: REST API, batch, streaming",
      "Containerizáció és modell-csomagolás",
      "A/B teszt és shadow deployment modelleknél",
      "Drift detekció: mikor romlik a modelled?",
      "Alerting és monitoring: mit figyeljünk produkción?",
    ],
  },
  {
    title: "Adat- és feature-rendszerek",
    description:
      "Feature store-ok, adatminőség és a tréning-serving skew elkerülése.",
    articles: [
      "Feature store: mikor van rá szükség?",
      "Tréning-serving skew: honnan jön és hogyan kerüld el?",
      "Adatminőség monitorozás automatizáltan",
      "Feature engineering produkciós környezetben",
    ],
  },
];

export default function MLEngineerTrackPage() {
  return (
    <div className="space-y-14 sm:space-y-18">
      {/* Hero */}
      <section>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {"← Fejlődési sávok"}
        </Link>

        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Machine Learning Engineer – Fejlődési sáv
        </h1>

        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Strukturált tanulási út azoknak, akik ML-modelleket építenek és visznek
          produkcióba. Pipeline-ok, metrikák, deployment és monitorozás — a valós
          rendszerhez igazítva, nem tankönyvi sorrendben.
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
            Junior ML Engineereknek, akik most kezdik a produkciós munkát
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Medior szintűeknek, akik szeretnék rendszerezni az MLOps tudásukat
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Data Scientisteknek, akik a deployment irányba szeretnének lépni
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Bárkinek, aki ML-rendszereket épít és üzemeltet
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
            Tematikus blokkok, amelyek az ML Engineer munka kulcsterületeit járják körbe.
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
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-5 py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Mentorprogram részletei
          </Link>
        </div>
      </section>
    </div>
  );
}
