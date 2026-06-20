import type { Metadata } from "next";
import Link from "next/link";
import { Card, SectionHeader } from "@meniva/design-system";
import MentorTestimonialsCarousel from "@/components/MentorTestimonialsCarousel";
import FullTestimonials from "@/components/FullTestimonials";

export const metadata: Metadata = {
  title: "Mentorprogram – Metis",
  description:
    "Személyre szabott fejlődés technikai szakembereknek. Junior–Medior Data Analysteknek, Data Scientisteknek, ML Engineer-eknek és Software Engineer-eknek.",
};

const benefits = [
  {
    title: "Egyéni fejlődés",
    items: ["Személyre szabott fejlődési terv", "Technikai és gondolkodási készségek"],
  },
  {
    title: "Karrier fókusz",
    items: ["CV review", "GitHub review", "Interjúgyakorlás", "Salary negotiation coaching"],
  },
  {
    title: "Projektmunka",
    items: ["Saját vagy közös projektek", "Prezentáció", "Üzleti kommunikáció"],
  },
  {
    title: "Early access és extra",
    items: ["Új tartalmakhoz előbb hozzáférés", "Vendégelőadók", "Később hackathon jellegű versenyek"],
  },
];

const steps = [
  { step: "1", title: "Jelentkezési űrlap kitöltése", desc: "Rövid kérdőív a hátteredről és céljaidról." },
  { step: "2", title: "Rövid beszélgetés", desc: "Megismerjük egymást és megnézzük, a program neked való-e." },
  { step: "3", title: "Csomag kiválasztása", desc: "Light vagy Pro — az igényeid alapján." },
  { step: "4", title: "Kezdés", desc: "Elkezdünk dolgozni a fejlődési terveden." },
];

export default function MentorprogramPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      {/* 1. HERO */}
      <SectionHeader
        as="h1"
        overline="Mentorprogram"
        title="Személyre szabott fejlődés technikai szakembereknek"
        description="Junior–Medior Data Analysteknek, Data Scientisteknek, Machine Learning Engineer-eknek és Software Engineer-eknek, akik gyorsabban és tudatosabban szeretnének fejlődni."
        actions={
          <a href="#jelentkezes" className="ds-btn ds-btn--primary ds-btn--lg">
            Jelentkezés mentorprogramra
          </a>
        }
      />

      {/* 2. PROBLÉMAFELVETÉS */}
      <Card padding="lg">
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
          <p>Egyedül is lehet tanulni.</p>
          <p>Tutoriálokból is lehet haladni.</p>
          <p>De nehéz megítélni, jó irányba haladsz-e.</p>
        </div>
        <p className="mt-6 text-base sm:text-lg font-medium text-foreground leading-relaxed max-w-2xl">
          A legnagyobb ugrást nem egy új eszköz, hanem a visszajelzés és az irány
          adja.
        </p>
      </Card>

      {/* 3. HOGYAN MŰKÖDIK */}
      <section className="space-y-5">
        <SectionHeader title="Hogyan működik?" />
        <ul className="space-y-3">
          <li className="ds-bullet">Heti 1x 90 perc kiscsoportos foglalkozás</li>
          <li className="ds-bullet">Pro csomagban: heti 1x 60 perc egyéni konzultáció</li>
          <li className="ds-bullet">Projektalapú működés</li>
          <li className="ds-bullet">Folyamatos szakmai visszajelzés</li>
        </ul>
      </section>

      {/* 4. MIT KAPSZ */}
      <section className="space-y-5">
        <SectionHeader title="Mit kapsz?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <Card key={b.title} padding="md">
              <h3 className="font-semibold text-foreground">{b.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {b.items.map((item) => (
                  <li key={item} className="ds-bullet">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. CSOMAGOK */}
      <section className="space-y-5">
        <SectionHeader title="Csomagok" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Light */}
          <Card padding="lg" className="flex flex-col">
            <h3 className="text-lg font-semibold text-foreground">
              Mentorprogram – Light
            </h3>
            <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              49 000 Ft
              <span className="text-base font-normal text-muted-foreground">
                {" / hó"}
              </span>
            </p>

            <ul className="mt-6 space-y-2.5">
              <li className="ds-bullet">Heti 1x 90 perc kiscsoportos foglalkozás</li>
              <li className="ds-bullet">Projektalapú tanulás</li>
              <li className="ds-bullet">Early access tartalom</li>
              <li className="ds-bullet">Közösségi tanulás</li>
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="#jelentkezes"
                className="ds-btn ds-btn--secondary ds-btn--md ds-btn--full"
              >
                Jelentkezés
              </a>
            </div>
          </Card>

          {/* Pro — highlighted */}
          <Card
            padding="lg"
            className="relative flex flex-col !border-2 !border-accent shadow-[var(--shadow-md)]"
          >
            <span className="absolute -top-3 left-6 rounded-md bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
              AJÁNLOTT
            </span>

            <h3 className="text-lg font-semibold text-foreground">
              Mentorprogram – Pro
            </h3>
            <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              89 000 Ft
              <span className="text-base font-normal text-muted-foreground">
                {" / hó"}
              </span>
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Minden a Light csomagban, plusz:
            </p>

            <ul className="mt-4 space-y-2.5">
              <li className="ds-bullet">Heti 1x 60 perc egyéni konzultáció</li>
              <li className="ds-bullet">Egyéni fejlődési terv</li>
              <li className="ds-bullet">CV review</li>
              <li className="ds-bullet">GitHub review</li>
              <li className="ds-bullet">Mock stakeholder meeting</li>
              <li className="ds-bullet">Take-home assignment gyakorlás</li>
              <li className="ds-bullet">Salary negotiation coaching</li>
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="#jelentkezes"
                className="ds-btn ds-btn--primary ds-btn--md ds-btn--full"
              >
                Jelentkezés
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* 6. GARANCIA */}
      <Card padding="lg" className="!bg-muted">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
          Garancia
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          Az első 7 nap után kérdés nélkül visszatérítjük az első havi díjat, ha
          nem érzed hasznosnak.
        </p>
      </Card>

      {/* 7. KIVONATOS VISSZAJELZÉSEK */}
      <section className="space-y-5">
        <SectionHeader
          title="Visszajelzések"
          description="Kivonatok korábbi diákok visszajelzéseiből."
        />

        <MentorTestimonialsCarousel />

        <div>
          <a
            href="#teljes-visszajelzesek"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Ugrás a teljes visszajelzésekhez →
          </a>
        </div>
      </section>

      {/* 8. TELJES VISSZAJELZÉSEK */}
      <section id="teljes-visszajelzesek" className="scroll-mt-24 space-y-5">
        <SectionHeader title="Teljes visszajelzések" />
        <FullTestimonials />
      </section>

      {/* 9. JELENTKEZÉS MENETE */}
      <section id="jelentkezes" className="scroll-mt-24 space-y-8">
        <SectionHeader
          title="Jelentkezés menete"
          description="Négy egyszerű lépés a kezdésig."
        />

        <ol className="space-y-4">
          {steps.map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-sm font-medium text-muted-foreground">
                {item.step}
              </span>
              <div>
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div>
          <Link href="/" className="ds-btn ds-btn--primary ds-btn--lg">
            Jelentkezés mentorprogramra
          </Link>
        </div>
      </section>
    </div>
  );
}
