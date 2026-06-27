import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  SectionHeader,
  Hero,
  PageContainer,
  Section,
  ServiceCard,
  CourseCard,
} from "@meniva/design-system";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Metis",
  description: "Tanuló- és gondolkodótér adatelemzéshez.",
};

// The hero's right-side module — the three steps of how Metis teaches thinking.
// Built only from shared Card + typography + spacing + list primitives (no
// decorative dashboard). Preserves the substance of the old hero's first
// paragraph (jó kérdések → problémalátás → valódi megértés).
const hogyanSteps = [
  { n: "1", title: "Tegyél fel jó kérdéseket", desc: "Mit akarsz valójában megtudni az adatból." },
  { n: "2", title: "Láss rá a problémára", desc: "Hogyan álljon össze az elemzés." },
  { n: "3", title: "Juss el a valódi megértésig", desc: "Döntés, nem csak szám." },
];

// Mentor program "how we work together" progression (problem → model → practice).
// Replaces the former decorative dashboard box with a real learning rhythm.
const mentorFlow = [
  { n: "1", title: "Probléma", desc: "Valódi feladattal kezdünk, nem absztrakcióval." },
  { n: "2", title: "Modell", desc: "Közösen felépítjük a megoldás gondolati keretét." },
  { n: "3", title: "Gyakorlat", desc: "Addig gyakorlod, amíg magabiztosan a tiéd lesz." },
];

const offerings = [
  {
    title: "Fejlődési sávok",
    desc: "Strukturált tanulási utak különböző technikai szerepkörökre, valódi problémák mentén.",
  },
  {
    title: "Mentorprogram",
    desc: "Személyre szabott fejlődés szakmai mentorral, egyéni terv és rendszeres beszélgetések alapján.",
  },
  {
    title: "Cikkek és jegyzetek",
    desc: "Rövid, gyakorlati tartalmak SQL-ről, statisztikáról, Pythonról és elemzői gondolkodásról. Nem „gyorstalpalók”, hanem kapaszkodók – kezdőknek érthetően, haladóknak is hasznosan.",
  },
];

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

/** Shared numbered-step list — same anatomy as the hero module (family-consistent). */
function StepList({ steps }: { steps: { n: string; title: string; desc: string }[] }) {
  return (
    <ol className="mt-5 space-y-5">
      {steps.map((s) => (
        <li key={s.n} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-muted text-sm font-semibold text-accent">
            {s.n}
          </span>
          <div>
            <p className="font-semibold text-foreground">{s.title}</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — responsive split: value proposition + "how Metis makes you think"
          module. Marketing-width band; the DS Hero owns the split grid (≈55/45 on
          desktop, single column on mobile), so no nested PageContainer inside. */}
      <PageContainer size="marketing" className="pt-10 sm:pt-14">
        <Hero
          variant="split"
          align="left"
          overline="Tanuló- és gondolkodótér · Adatelemzés"
          title="Tanulj meg gondolkodni az adatokról."
          description={
            <>
              A Metisen az adatelemzés nem definíciók gyűjteménye, hanem szemlélet:
              jó kérdések, tiszta problémalátás és valódi megértés.
              <span className="mt-4 block font-medium text-foreground">
                A jó elemző nem attól jó, hogy sok eszközt ismer, hanem attól, hogy
                érti, mit csinál és miért.
              </span>
            </>
          }
          primaryAction={{
            label: "Olvasd a cikkeket",
            render: ({ className, children }) => (
              <Link href="/posts" className={className}>
                {children}
              </Link>
            ),
          }}
          secondaryAction={{
            label: "Mentorprogram",
            render: ({ className, children }) => (
              <Link href="/mentorprogram" className={className}>
                {children}
              </Link>
            ),
          }}
          media={
            <Card padding="feature">
              <p className="ds-overline">Így gondolkodtat a Metis</p>
              <StepList steps={hogyanSteps} />
            </Card>
          }
        />
      </PageContainer>

      {/* Below-hero content — one DS Section band + a single wide container.
          Sub-sections are spaced with the utility stack (no double container). */}
      <Section spacing="default">
        <PageContainer size="wide" className="space-y-16 sm:space-y-20">
          {/* Visszajelzések — social proof korán */}
          <section className="space-y-5">
            <SectionHeader
              title="Mit mondanak a tanulók?"
              description="Néhány rövid visszajelzés korábbi diákoktól."
            />
            <TestimonialsCarousel />
          </section>

          {/* Mit találsz a Metisen? — shared ServiceCard anatomy */}
          <section className="space-y-5">
            <SectionHeader title="Mit találsz a Metisen?" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {offerings.map((o) => (
                <ServiceCard
                  key={o.title}
                  interactive={false}
                  title={o.title}
                  description={o.desc}
                />
              ))}
            </div>
          </section>

          {/* Fejlődési sávok — shared CourseCard anatomy */}
          <section id="fejlodesi-savok" className="scroll-mt-24 space-y-5">
            <SectionHeader
              title="Fejlődési sávok Junior–Medior szakembereknek"
              description="Strukturált tanulási keretek különböző technikai szerepkörökre, valódi problémák mentén."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tracks.map((track) => (
                <CourseCard
                  key={track.href}
                  title={track.title}
                  level="JUNIOR–MEDIOR"
                  description={track.desc}
                  topics={track.focus}
                  topicsLabel="Fókuszterületek"
                  action={{
                    label: "Sáv megnyitása",
                    render: ({ className, children }) => (
                      <Link href={track.href} className={className}>
                        {children}
                      </Link>
                    ),
                  }}
                />
              ))}
            </div>
          </section>

          {/* Mentorprogram — meaningful split: copy + "how we work together" flow */}
          <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
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
                <Link href="/mentorprogram" className="ds-btn ds-btn--primary ds-btn--lg">
                  Mentorprogram részletei
                </Link>
              </div>
            </div>

            <Card padding="feature">
              <p className="ds-overline">Hogyan haladunk együtt?</p>
              <StepList steps={mentorFlow} />
            </Card>
          </section>
        </PageContainer>
      </Section>
    </>
  );
}
