import type { Metadata } from "next";
import Link from "next/link";
import { Card, SectionHeader } from "@meniva/design-system";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Metis",
  description: "Tanuló- és gondolkodótér adatelemzéshez.",
};

const tracks = [
  {
    title: "Data Analyst",
    href: "/fejlodesi-savok/data-analyst",
    desc: "Adatok értelmezése, üzleti kérdések megválaszolása és döntést támogató elemzések készítése.",
    focus: [
      "SQL és adatlekérdezés",
      "Leíró statisztika és vizualizáció",
      "Üzleti metrikák és riportolás",
    ],
  },
  {
    title: "Data Scientist",
    href: "/fejlodesi-savok/data-scientist",
    desc: "Statisztikai modellezés, hipotézisvizsgálat és adatalapú predikciók készítése.",
    focus: [
      "Valószínűségszámítás és statisztika",
      "Python és exploratív adatelemzés",
      "Feature engineering és modellválasztás",
    ],
  },
  {
    title: "Machine Learning Engineer",
    href: "/fejlodesi-savok/machine-learning-engineer",
    desc: "ML-modellek építése, üzembe helyezése és skálázása produkciós környezetben.",
    focus: [
      "ML pipeline-ok és MLOps alapok",
      "Modelltréning és értékelési metrikák",
      "API-k és modellservírozás",
    ],
  },
  {
    title: "Software Engineer",
    href: "/fejlodesi-savok/software-engineer",
    desc: "Szoftverrendszerek tervezése, fejlesztése és karbantartása skálázható architektúrában.",
    focus: [
      "Tiszta kód és tervezési minták",
      "Verziókövetés és CI/CD alapok",
      "Adatbázisok és API tervezés",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1040px] space-y-12 sm:space-y-16">
      {/* Hero — editorial intro panel */}
      <Card padding="lg">
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
          <Link href="/posts" className="ds-btn ds-btn--primary ds-btn--lg">
            Olvasd a cikkeket
          </Link>
          <Link href="/glossary" className="ds-btn ds-btn--secondary ds-btn--lg">
            Fogalomtár
          </Link>
        </div>
      </Card>

      {/* Visszajelzések — közvetlenül a hero alatt (social proof korán) */}
      <section className="space-y-5">
        <SectionHeader
          title="Mit mondanak a tanulók?"
          description="Néhány rövid visszajelzés korábbi diákoktól."
        />

        <TestimonialsCarousel />
      </section>

      {/* Mit találsz a Metisen? */}
      <section className="space-y-5">
        <SectionHeader title="Mit találsz a Metisen?" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card padding="md">
            <h3 className="font-semibold text-foreground">Fejlődési sávok</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Strukturált tanulási utak különböző technikai szerepkörökre, valódi
              problémák mentén.
            </p>
          </Card>

          <Card padding="md">
            <h3 className="font-semibold text-foreground">Mentorprogram</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Személyre szabott fejlődés szakmai mentorral, egyéni terv és
              rendszeres beszélgetések alapján.
            </p>
          </Card>

          <Card padding="md">
            <h3 className="font-semibold text-foreground">Cikkek és jegyzetek</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Rövid, gyakorlati tartalmak SQL-ről, statisztikáról, Pythonról és
              elemzői gondolkodásról.
            </p>
          </Card>
        </div>
      </section>

      {/* Career tracks */}
      <section id="fejlodesi-savok" className="scroll-mt-24 space-y-5">
        <SectionHeader
          title="Fejlődési sávok Junior–Medior szakembereknek"
          description="Strukturált tanulási keretek különböző technikai szerepkörökre, valódi problémák mentén."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tracks.map((track) => (
            <Card key={track.href} padding="md" className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground">{track.title}</h3>
                <span className="ds-badge shrink-0">JUNIOR–MEDIOR</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {track.desc}
              </p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Fókuszterületek
                </p>
                <ul className="mt-2 space-y-1.5">
                  {track.focus.map((item) => (
                    <li key={item} className="ds-bullet">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-5">
                <Link
                  href={track.href}
                  className="ds-btn ds-btn--secondary ds-btn--sm"
                >
                  Sáv megnyitása
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Mentorprogram */}
      <Card padding="md" className="overflow-hidden !p-0">
        <div className="flex flex-col md:flex-row">
          {/* Left — copy */}
          <div className="flex-1 px-6 py-10 sm:px-10 sm:py-14">
            <SectionHeader
              overline="Mentorprogram"
              title="Személyre szabott fejlődés, szakmai mentorral"
              description="A mentorprogram azoknak szól, akik már dolgoznak a szakmában, és szeretnének gyorsabban, strukturáltabban és tudatosabban fejlődni."
            />

            <ul className="mt-6 space-y-3">
              <li className="ds-bullet">Egyéni fejlődési terv</li>
              <li className="ds-bullet">Rendszeres mentorbeszélgetések</li>
              <li className="ds-bullet">Valódi problémák közös feldolgozása</li>
            </ul>

            <div className="mt-8">
              <Link
                href="/mentorprogram"
                className="ds-btn ds-btn--primary ds-btn--lg"
              >
                Mentorprogram részletei
              </Link>
            </div>
          </div>

          {/* Right — abstract visual */}
          <div className="hidden md:flex items-center justify-center w-[340px] lg:w-[400px] shrink-0 bg-muted p-10">
            <div className="relative w-full aspect-square max-w-[260px]">
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
      </Card>

    </div>
  );
}
