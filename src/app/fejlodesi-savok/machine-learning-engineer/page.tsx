import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Machine Learning Engineer – Fejlődési sáv | Metis",
  description:
    "Strukturált tanulási út Junior–Medior ML Engineereknek: pipeline-ok, MLOps, deployment és feature-rendszerek.",
};

const starterArticles = [
  { title: "Mi a különbség Data Scientist és ML Engineer között?", href: "#" },
  { title: "Az első ML pipeline-od: adattól a predikcióig", href: "#" },
  { title: "Modell kiértékelés produkciós szemmel", href: "#" },
  { title: "MLOps: miért nem elég a notebook?", href: "#" },
];

const modules = [
  {
    title: "ML pipeline-ok és MLOps alapok",
    description:
      "Hogyan építs reprodukálható, automatizált gépi tanulási folyamatokat a notebookon túl.",
    articles: [
      "ML pipeline anatómiája: adat, tréning, kiértékelés, deploy",
      "Experiment tracking: MLflow, W&B és társai",
      "Reprodukálhatóság: random seed, verziókezelés, environment",
      "Orchestráció: Airflow, Prefect vagy egyszerűbb megoldások?",
    ],
  },
  {
    title: "Modelltréning és értékelési metrikák",
    description:
      "A tréningfolyamat finomhangolása és a modellek objektív összehasonlítása.",
    articles: [
      "Hiperparaméter-hangolás: grid, random, bayesian",
      "Metrikák választása üzleti kontextusban",
      "Overfitting és underfitting diagnosztika",
      "Cross-validation stratégiák idősor és csoportos adatokra",
      "Ensemble módszerek: boosting, bagging, stacking",
    ],
  },
  {
    title: "Deployment, serving és monitorozás",
    description:
      "Hogyan juttasd el a modellt a felhasználókhoz, és hogyan tartsd életben produkciós környezetben.",
    articles: [
      "Modell exportálás: pickle, ONNX, TorchScript",
      "REST API serving: Flask, FastAPI, TF Serving",
      "Batch vs. real-time inference: mikor melyiket?",
      "Modell monitorozás: data drift, performance decay",
      "A/B tesztelés modelleknél: shadow deploy és canary release",
    ],
  },
  {
    title: "Adat- és feature-rendszerek",
    description:
      "A jó modell mögött jó adatok és jól szervezett feature-ök állnak.",
    articles: [
      "Feature store: miért és mikor érdemes?",
      "Online vs. offline feature-ök: tervezési minták",
      "Adatminőség: validáció, tesztelés, monitoring",
      "Adatverziózás: DVC és alternatívái",
    ],
  },
];

export default function MachineLearningEngineerTrackPage() {
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
          Strukturált tanulási út azoknak, akik ML-modelleket építenek, üzembe
          helyeznek és skáláznak produkciós környezetben. Pipeline-ok, MLOps,
          deployment és feature-rendszerek — a valós mérnöki munkához igazítva.
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
            Junior ML Engineereknek, akik a notebook-ból produkció felé lépnének
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Medior szintűeknek, akik a pipeline-ok és MLOps rendszereiben mélyülnének el
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Data Scientisteknek, akik a deployment és serving irányba nyitnának
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Bárkinek, aki megbízható ML-rendszereket szeretne építeni
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
