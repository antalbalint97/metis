import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metis",
  description: "Tanuló- és gondolkodótér adatelemzéshez.",
};

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1040px] space-y-12 sm:space-y-16">
      {/* Hero */}
      <section className="rounded-xl border border-border bg-surface px-6 py-10 sm:px-10 sm:py-14 shadow-[var(--shadow-sm)]">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground">
          Metis
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Metis egy tanuló- és gondolkodótér azoknak, akik adatokról nem csak
          beszélni, hanem gondolkodni szeretnének. Itt az adatelemzés nem
          eszközlista vagy definíciók gyűjteménye, hanem szemlélet, hogyan tegyél
          fel jó kérdéseket, hogyan nézz rá egy problémára, és hogyan juss el
          valódi megértésig.
        </p>

        <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
          A tartalmak rövid, gyakorlati jegyzetekből, példákból és workshopokból
          állnak. Nem „gyorstalpalók", hanem kapaszkodók: SQL, Python,
          statisztika, üzleti gondolkodás és elemzői döntések ott találkoznak,
          ahol a valós munkában is. Kezdőknek érthetően, haladóknak is hasznosan.
        </p>

        <p className="mt-6 font-medium text-foreground leading-relaxed max-w-2xl">
          A Metis célja nem az, hogy válaszokat adjon helyetted - hanem hogy
          megtanítson jól gondolkodni. Mert a jó elemző nem attól jó, hogy sok
          eszközt ismer, hanem attól, hogy érti, mit csinál és miért.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-5 py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Olvasd a cikkeket
          </Link>
          <Link
            href="/glossary"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-5 py-3 text-sm sm:text-base font-medium text-secondary-foreground hover:bg-secondary-hover transition-colors"
          >
            Fogalomtár
          </Link>
        </div>
      </section>

      {/* Mit találsz a Metisen? */}
      <section className="space-y-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Mit találsz a Metisen?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-xs)]">
            <h3 className="font-semibold text-foreground">Fejlődési sávok</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Strukturált tanulási utak különböző technikai szerepkörökre, valódi
              problémák mentén.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-xs)]">
            <h3 className="font-semibold text-foreground">Mentorprogram</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Személyre szabott fejlődés szakmai mentorral, egyéni terv és
              rendszeres beszélgetések alapján.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-xs)]">
            <h3 className="font-semibold text-foreground">Cikkek és jegyzetek</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Rövid, gyakorlati tartalmak SQL-ről, statisztikáról, Pythonról és
              elemzői gondolkodásról.
            </p>
          </div>
        </div>
      </section>

      {/* Career tracks */}
      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground text-balance">
            Fejlődési sávok Junior–Medior szakembereknek
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Strukturált tanulási keretek különböző technikai szerepkörökre, valódi problémák mentén.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Data Analyst */}
          <div className="flex flex-col rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-foreground">Data Analyst</h3>
              <span className="shrink-0 rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent">
                JUNIOR–MEDIOR
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Adatok értelmezése, üzleti kérdések megválaszolása és döntést támogató elemzések készítése.
            </p>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Fókuszterületek
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  SQL és adatlekérdezés
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Leíró statisztika és vizualizáció
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Üzleti metrikák és riportolás
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-5">
              <Link
                href="/fejlodesi-savok/data-analyst"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary-hover transition-colors"
              >
                Sáv megnyitása
              </Link>
            </div>
          </div>

          {/* Data Scientist */}
          <div className="flex flex-col rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-foreground">Data Scientist</h3>
              <span className="shrink-0 rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent">
                JUNIOR–MEDIOR
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Statisztikai modellezés, hipotézisvizsgálat és adatalapú predikciók készítése.
            </p>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Fókuszterületek
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Valószínűségszámítás és statisztika
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Python és exploratív adatelemzés
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Feature engineering és modellválasztás
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-5">
              <Link
                href="/posts"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary-hover transition-colors"
              >
                Sáv megnyitása
              </Link>
            </div>
          </div>

          {/* Machine Learning Engineer */}
          <div className="flex flex-col rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-foreground">Machine Learning Engineer</h3>
              <span className="shrink-0 rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent">
                JUNIOR–MEDIOR
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              ML modellek építése, üzembe helyezése és skálázása produkcióban.
            </p>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Fókuszterületek
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  ML pipeline-ok és MLOps alapok
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Modell trénírozás és értékelési metrikák
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  API-k és modell szervírálás
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-5">
              <Link
                href="/posts"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary-hover transition-colors"
              >
                Sáv megnyitása
              </Link>
            </div>
          </div>

          {/* Software Engineer */}
          <div className="flex flex-col rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-foreground">Software Engineer</h3>
              <span className="shrink-0 rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent">
                JUNIOR–MEDIOR
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Szoftverrendszerek tervezése, fejlesztése és karbantartása skálázható architektúrában.
            </p>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Fókuszterületek
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Tiszta kód és tervezési minták
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Verziókövetés és CI/CD alapok
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  Adatbázisok és API tervezés
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-5">
              <Link
                href="/posts"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary-hover transition-colors"
              >
                Sáv megnyitása
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorprogram */}
      <section className="rounded-xl border border-border bg-surface shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left — copy */}
          <div className="flex-1 px-6 py-10 sm:px-10 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Mentorprogram
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground text-balance">
              Személyre szabott fejlődés, szakmai mentorral
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              A mentorprogram azoknak szól, akik már dolgoznak a szakmában, és
              szeretnének gyorsabban, strukturáltabban és tudatosabban fejlődni.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Egyéni fejlődési terv
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Rendszeres mentorbeszélgetések
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Valódi problémák közös feldolgozása
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/posts"
                className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-5 py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Mentorprogram részletei
              </Link>
            </div>
          </div>

          {/* Right — abstract visual */}
          <div className="hidden md:flex items-center justify-center w-[340px] lg:w-[400px] shrink-0 bg-muted p-10">
            <div className="relative w-full aspect-square max-w-[260px]">
              {/* Layered geometric shapes */}
              <div className="absolute inset-0 rounded-2xl border border-border bg-surface shadow-[var(--shadow-md)]" />
              <div className="absolute top-6 left-6 right-6 bottom-6 rounded-xl bg-accent-muted" />
              <div className="absolute top-12 left-12 right-12 bottom-12 rounded-lg border border-accent/20 bg-surface shadow-[var(--shadow-sm)]" />
              <div className="absolute top-[72px] left-[72px] h-10 w-10 rounded-full bg-accent/15" />
              <div className="absolute bottom-16 right-14 h-14 w-[100px] rounded-md bg-muted border border-border" />
              <div className="absolute bottom-10 right-10 h-2 w-16 rounded-full bg-accent/30" />
              <div className="absolute top-16 right-14 h-2 w-12 rounded-full bg-border-strong" />
              <div className="absolute top-[88px] right-14 h-2 w-8 rounded-full bg-border" />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
