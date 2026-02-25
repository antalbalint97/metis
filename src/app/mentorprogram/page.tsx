import type { Metadata } from "next";
import Link from "next/link";
import MentorTestimonialsCarousel from "@/components/MentorTestimonialsCarousel";
import FullTestimonials from "@/components/FullTestimonials";

export const metadata: Metadata = {
  title: "Mentorprogram – Metis",
  description:
    "Személyre szabott fejlődés technikai szakembereknek. Junior–Medior Data Analysteknek, Data Scientisteknek, ML Engineer-eknek és Software Engineer-eknek.",
};

export default function MentorprogramPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      {/* ───────────── 1. HERO ───────────── */}
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Mentorprogram
        </p>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance leading-tight">
          Személyre szabott fejlődés technikai szakembereknek
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Junior–Medior Data Analysteknek, Data Scientisteknek, Machine Learning
          Engineer-eknek és Software Engineer-eknek, akik gyorsabban és
          tudatosabban szeretnének fejlődni.
        </p>

        <div>
          <a
            href="#jelentkezes"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-6 py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Jelentkezés mentorprogramra
          </a>
        </div>
      </section>

      {/* ───────────── 2. PROBLÉMAFELVETÉS ───────────── */}
      <section className="rounded-xl border border-border bg-surface px-6 py-8 sm:px-10 sm:py-10 shadow-[var(--shadow-sm)]">
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
          <p>Egyedül is lehet tanulni.</p>
          <p>Tutoriálokból is lehet haladni.</p>
          <p>De nehéz megítélni, jó irányba haladsz-e.</p>
        </div>
        <p className="mt-6 text-base sm:text-lg font-medium text-foreground leading-relaxed max-w-2xl">
          A legnagyobb ugrást nem egy új eszköz, hanem a visszajelzés és az
          irány adja.
        </p>
      </section>

      {/* ───────────── 3. HOGYAN MŰKÖDIK ───────────── */}
      <section className="space-y-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Hogyan működik?
        </h2>

        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Heti 1x 90 perc kiscsoportos foglalkozás
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Pro csomagban: heti 1x 60 perc egyéni konzultáció
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Projektalapú működés
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Folyamatos szakmai visszajelzés
          </li>
        </ul>
      </section>

      {/* ───────────── 4. MIT KAPSZ ───────────── */}
      <section className="space-y-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Mit kapsz?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Egyéni fejlődés */}
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <h3 className="font-semibold text-foreground">Egyéni fejlődés</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Személyre szabott fejlődési terv
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Technikai és gondolkodási készségek
              </li>
            </ul>
          </div>

          {/* Karrier fókusz */}
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <h3 className="font-semibold text-foreground">Karrier fókusz</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                CV review
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                GitHub review
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Interjúgyakorlás
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Salary negotiation coaching
              </li>
            </ul>
          </div>

          {/* Projektmunka */}
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <h3 className="font-semibold text-foreground">Projektmunka</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Saját vagy közös projektek
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Prezentáció
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Üzleti kommunikáció
              </li>
            </ul>
          </div>

          {/* Early access + extra */}
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]">
            <h3 className="font-semibold text-foreground">Early access és extra</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Új tartalmakhoz előbb hozzáférés
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Vendégelőadók
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                Később hackathon jellegű versenyek
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── 5. CSOMAGOK ───────────── */}
      <section className="space-y-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Csomagok
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Light */}
          <div className="flex flex-col rounded-xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-xs)]">
            <h3 className="text-lg font-semibold text-foreground">
              Mentorprogram – Light
            </h3>
            <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              49 000 Ft
              <span className="text-base font-normal text-muted-foreground">
                {" / hó"}
              </span>
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Heti 1x 90 perc kiscsoportos foglalkozás
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Projektalapú tanulás
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Early access tartalom
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Közösségi tanulás
              </li>
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="#jelentkezes"
                className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary-hover transition-colors"
              >
                Jelentkezés
              </a>
            </div>
          </div>

          {/* Pro — highlighted */}
          <div className="relative flex flex-col rounded-xl border-2 border-accent bg-surface p-6 sm:p-8 shadow-[var(--shadow-md)]">
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

            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Heti 1x 60 perc egyéni konzultáció
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Egyéni fejlődési terv
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                CV review
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                GitHub review
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Mock stakeholder meeting
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Take-home assignment gyakorlás
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Salary negotiation coaching
              </li>
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="#jelentkezes"
                className="inline-flex w-full items-center justify-center rounded-lg border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Jelentkezés
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 6. GARANCIA ───────────── */}
      <section className="rounded-xl border border-border bg-muted px-6 py-8 sm:px-10 sm:py-10">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
          Garancia
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          Az első 7 nap után kérdés nélkül visszatérítjük az első havi díjat, ha
          nem érzed hasznosnak.
        </p>
      </section>

      {/* ───────────── 7. KIVONATOS VISSZAJELZÉSEK ───────────── */}
      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            Visszajelzések
          </h2>
          <p className="text-muted-foreground">
            Kivonatok korábbi diákok visszajelzéseiből.
          </p>
        </div>

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

      {/* ───────────── 8. TELJES VISSZAJELZÉSEK ───────────── */}
      <section id="teljes-visszajelzesek" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Teljes visszajelzések
        </h2>

        <FullTestimonials />
      </section>

      {/* ───────────── 9. JELENTKEZÉS MENETE ───────────── */}
      <section id="jelentkezes" className="scroll-mt-24 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            Jelentkezés menete
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Négy egyszerű lépés a kezdésig.
          </p>
        </div>

        <ol className="space-y-4">
          {[
            {
              step: "1",
              title: "Jelentkezési űrlap kitöltése",
              desc: "Rövid kérdőív a hátteredről és céljaidról.",
            },
            {
              step: "2",
              title: "Rövid beszélgetés",
              desc: "Megismerjük egymást és megnézzük, a program neked való-e.",
            },
            {
              step: "3",
              title: "Csomag kiválasztása",
              desc: "Light vagy Pro — az igényeid alapján.",
            },
            {
              step: "4",
              title: "Kezdés",
              desc: "Elkezdünk dolgozni a fejlődési terveden.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-sm font-medium text-muted-foreground">
                {item.step}
              </span>
              <div>
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-6 py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Jelentkezés mentorprogramra
          </Link>
        </div>
      </section>
    </div>
  );
}
