import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CourseCard,
  Hero,
  PageContainer,
  Section,
  SectionHeader,
} from "@meniva/design-system";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { CTRLPLANE_URL, NULLFAL_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metis | Adatelemzés és mentorálás",
  description: "Antal Bálint mentor- és tanulótere adatelemzéshez, statisztikához, data science-hez és ML-hez.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", images: ["https://metis.name/brand/og-default.png"] },
};

const learningSteps = [
  {
    n: "1",
    title: "Tegyél fel jó kérdéseket",
    desc: "Mit szeretnél valójában megtudni az adatból?",
  },
  {
    n: "2",
    title: "Láss rá a problémára",
    desc: "Hogyan álljon össze az elemzés, mielőtt számolni kezdesz?",
  },
  {
    n: "3",
    title: "Juss el a valódi megértésig",
    desc: "A cél a döntés, nem csak a szám.",
  },
];

const offerings = [
  {
    label: "Mentorálás",
    title: "Mentorprogram",
    desc: "Személyre szabott fejlődés konkrét elakadások, tanulási célok és szakmai beszélgetések mentén.",
    href: "/mentorprogram",
    cta: "Részletek",
  },
  {
    label: "Tutorialok",
    title: "Rövid tutorialok és magyarázatok",
    desc: "SQL, statisztika, Python, adatelemzés és matematikai gondolkodás rövid, érthető bontásokban.",
    href: "/posts",
    cta: "Cikkek megnyitása",
  },
  {
    label: "Önálló tanulás",
    title: "Ingyenes tanulási anyagok",
    desc: "Vázlatok, gyakorlók, videók és vizuális magyarázatok azoknak, akik önállóan is haladnának.",
    href: "#anyagok",
    cta: "Anyagok",
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

const resources = [
  {
    label: "Tutorial",
    title: "Rövid tutorialok",
    desc: "Egy-egy fogalom vagy módszer tömör, érthető bontásban.",
  },
  {
    label: "Videó",
    title: "Videós magyarázatok",
    desc: "Rövid bemutatók olyan témákhoz, amelyeket könnyebb látva megérteni.",
  },
  {
    label: "Vizuális jegyzet",
    title: "Matek és statisztika vizuálisan",
    desc: "Intuíció, ábrák és kapcsolatok, mielőtt megérkeznek a képletek.",
  },
  {
    label: "Gyakorlás",
    title: "Gyakorlófeladatok",
    desc: "Kis, fókuszált feladatok az önálló gyakorláshoz.",
  },
];

function StepList() {
  return (
    <ol className="mt-5 space-y-5">
      {learningSteps.map((step) => (
        <li key={step.n} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-muted text-sm font-semibold text-accent">
            {step.n}
          </span>
          <div>
            <p className="font-semibold text-foreground">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {step.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function HomePage() {
  return (
    <>
      <PageContainer size="marketing" className="pb-4 pt-10 sm:pt-16">
        <Hero
          variant="split"
          align="left"
          overline="Mentorálás és tanulás · Adatelemzés"
          title="Metis - mentorálás és tanulási utak adatelemzéshez"
          description={
            <>
              A Metis Antal Bálint magyar nyelvű mentor- és tanulótere
              adatelemzéshez, statisztikához, Pythonhoz és SQL-hez.
              <span className="mt-4 block font-medium text-foreground">
                A jó elemző nem attól jó, hogy sok eszközt ismer, hanem attól,
                hogy érti, mit csinál és miért.
              </span>
            </>
          }
          primaryAction={{
            label: "Mentorprogram részletei",
            render: ({ className, children }) => (
              <Link href="/mentorprogram" className={className}>
                {children}
              </Link>
            ),
          }}
          secondaryAction={{
            label: "Ingyenes anyagok",
            render: ({ className, children }) => (
              <Link href="#anyagok" className={className}>
                {children}
              </Link>
            ),
          }}
          media={
            <Card padding="feature" className="learning-card">
              <p className="ds-overline">Így tanulunk</p>
              <StepList />
            </Card>
          }
        />
      </PageContainer>

      <Section spacing="default">
        <PageContainer size="wide" className="space-y-16 sm:space-y-24">
          <section aria-labelledby="journey-title">
            <Card padding="feature" className="journey-card">
              <div className="grid gap-7 sm:grid-cols-[190px_1fr] sm:items-center lg:gap-10">
                <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-accent/20 bg-surface sm:mx-0">
                  <Image
                    src="/images/balint.jpg"
                    alt="Bálint, a Metis mentora"
                    width={600}
                    height={600}
                    className="aspect-square h-auto w-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="ds-overline">A teljesebb történet</p>
                  <h2
                    id="journey-title"
                    className="ds-section-header__title mt-3"
                  >
                    Hogyan jutottam el a diákmunkáktól az adatos és
                    AI-rendszerekig?
                  </h2>
                  <p className="ds-section-header__desc mt-4 max-w-2xl">
                    Nem egyenes karrierút volt. Öt szakaszban mutatom meg, mit
                    tanultam közben, és mi az, amit ma mentorként is továbbadok.
                    Ez a háttér adja a mentorálás alapját.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/about/karrier-evolucio"
                      className="ds-btn ds-btn--primary ds-btn--md"
                    >
                      Megnézem az utat
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="space-y-6">
            <SectionHeader
              title="Mit találsz a Metisen?"
              description="Három út ugyanahhoz a célhoz: tudatosabb, magabiztosabb technikai gondolkodás."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {offerings.map((offering) => (
                <Card
                  key={offering.title}
                  padding="lg"
                  className="flex flex-col"
                >
                  <p className="ds-overline">{offering.label}</p>
                  <h3 className="ds-card-title mt-3">
                    {offering.title}
                  </h3>
                  <p className="ds-card-body mt-3 flex-1 text-sm">
                    {offering.desc}
                  </p>
                  <Link href={offering.href} className="learning-link mt-5">
                    {offering.cta} <span aria-hidden="true">→</span>
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          <section id="fejlodesi-savok" className="scroll-mt-24 space-y-6">
            <SectionHeader
              overline="Tanulási utak"
              title="Fejlődési sávok"
              description="Szerepkör szerinti tanulási keretek, valódi problémák mentén. Minden sávnak megvan a saját kiindulópontja és fókusza."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tracks.map((track) => (
                <CourseCard
                  key={track.href}
                  title={track.title}
                  level="JUNIOR / MEDIOR"
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

          <section className="space-y-6" aria-labelledby="testimonials-title">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="ds-overline">Visszajelzések</p>
                <h2
                  id="testimonials-title"
                  className="mt-3 text-3xl font-semibold tracking-tight text-foreground"
                >
                  Mit mondanak a tanulók?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Rövid részletek korábbi tanulóktól. A hosszabb
                  visszajelzések külön megnyithatók.
                </p>
              </div>
              <div className="rating-badge" aria-label="5/5 tanulói értékelés">
                <span aria-hidden="true" className="rating-dots">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span>5/5 tanulói értékelés</span>
              </div>
            </div>
            <TestimonialsCarousel />
          </section>

          <section id="anyagok" className="scroll-mt-24 space-y-6">
            <SectionHeader
              overline="Ingyenes"
              title="Ingyenes tanulási anyagok"
              description="Rövid anyagok, amikkel önállóan is tudsz gyakorolni. A gyűjtemény fokozatosan bővül."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <Card key={resource.title} padding="lg">
                  <div className="flex items-center justify-between gap-3">
                    <p className="ds-overline">{resource.label}</p>
                    <span className="soon-badge">Hamarosan</span>
                  </div>
                  <h3 className="ds-card-title mt-4 text-lg">
                    {resource.title}
                  </h3>
                  <p className="ds-card-body mt-2 text-sm">
                    {resource.desc}
                  </p>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Addig is a már elérhető rövid magyarázatokat a{" "}
              <Link href="/posts" className="learning-link">
                cikkek között
              </Link>{" "}
              találod.
            </p>
          </section>

          <section className="space-y-6" data-nosnippet>
            <SectionHeader
              overline="A Metis ökoszisztémája"
              title="Ha más tanulási forma illik hozzád"
              description="Két kapcsolódó felület más kiindulópontokhoz. A Metis mentorálási útja ettől változatlanul itt marad."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card padding="lg" className="ecosystem-card">
                <p className="ds-overline text-muted-foreground">Szakmai blog</p>
                <h3 className="ds-card-title mt-3">
                  CtrlPlane
                </h3>
                <p className="ds-card-body mt-3">
                  Ha az AI, az adatmunka és az iparág alakulása érdekel, olvasd a
                  CtrlPlane szakmai blogot.
                </p>
                <a
                  href={CTRLPLANE_URL}
                  className="learning-link mt-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  CtrlPlane megnyitása <span aria-hidden="true">→</span>
                </a>
              </Card>
              <Card padding="lg" className="ecosystem-card">
                <p className="ds-overline text-muted-foreground">AI tutor</p>
                <h3 className="ds-card-title mt-3">
                  Nullfal
                </h3>
                <p className="ds-card-body mt-3">
                  Ha még nem állsz készen mentorprogramra, de AI tutorral, egyedi
                  roadmapekkel, technikai gyakorlással, szimulált interjúkkal és
                  projektekkel mélyítenéd a tudásod, próbáld ki a Nullfalt.
                </p>
                <a
                  href={NULLFAL_URL}
                  className="learning-link mt-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nullfal megnyitása <span aria-hidden="true">→</span>
                </a>
              </Card>
            </div>
          </section>

          <Card padding="feature" className="final-cta text-center">
            <SectionHeader
              align="center"
              title="Tanuljunk együtt gondolkodni."
              description="Olvass bele az anyagokba, vagy nézd meg, hogyan segít a mentorprogram a tudatosabb, gyorsabb fejlődésben."
            />
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/mentorprogram"
                className="ds-btn ds-btn--primary ds-btn--lg"
              >
                Mentorprogram részletei
              </Link>
              <Link
                href="#anyagok"
                className="ds-btn ds-btn--outline ds-btn--lg"
              >
                Ingyenes anyagok
              </Link>
            </div>
          </Card>
        </PageContainer>
      </Section>
    </>
  );
}
