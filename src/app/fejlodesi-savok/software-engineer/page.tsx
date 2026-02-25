import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Engineer – Fejlődési sáv | Metis",
  description:
    "Strukturált tanulási út Junior–Medior Software Engineereknek: tiszta kód, architektúra, CI/CD és integrációk.",
};

const starterArticles = [
  { title: "Mikor jó egy kód? Olvashatóság, felelősség, egyszerűség", href: "#" },
  { title: "Refaktorálás a gyakorlatban: mikor és hogyan?", href: "#" },
  { title: "API tervezés alapjai: REST, konvenciók, hibakezelés", href: "#" },
  { title: "CI/CD alapok: mit automatizálj először?", href: "#" },
];

const modules = [
  {
    title: "Tiszta kód és tervezési minták",
    description:
      "Hogyan írj karbantartható, olvasható és bővíthető kódot — a valós fejlesztői munkában.",
    articles: [
      "Single Responsibility: egy osztály, egy felelősség",
      "Elnevezések ereje: változók, függvények, modulok",
      "Dependency injection: miért és hogyan?",
      "Tervezési minták a gyakorlatban: Strategy, Observer, Factory",
    ],
  },
  {
    title: "Rendszertervezés és architektúra alapok",
    description:
      "Hogyan gondolkodj rendszerszinten, mielőtt kódolsz: komponensek, határok és kompromisszumok.",
    articles: [
      "Monolitikus vs. mikroszerviz: mikor melyik?",
      "Rétegek és modulok: a jó architektúra alapjai",
      "Állapotkezelés: hol és hogyan tartsd az adatot?",
      "Terhelés, skálázás és cache: alapfogalmak fejlesztőknek",
    ],
  },
  {
    title: "Verziókezelés, CI/CD és release",
    description:
      "A megbízható szállítás alapjai: branch stratégia, automatizáció és kiadási folyamatok.",
    articles: [
      "Git workflow: trunk-based vs. feature branch",
      "CI pipeline felépítése: lint, teszt, build, deploy",
      "Automatikus tesztelés: unit, integráció, e2e — mikor melyik?",
      "Release stratégiák: semantic versioning és changelog",
    ],
  },
  {
    title: "API-k, adatmodellezés és integrációk",
    description:
      "Hogyan tervezz API-t, gondolkodj adatszerkezetben és csatlakozz külső rendszerekhez.",
    articles: [
      "RESTful API konvenciók: endpoint-ok, státuszkódok, hibakezelés",
      "Adatmodellezés relációs adatbázisban: normálformák és trade-off-ok",
      "Autentikáció és autorizáció: JWT, OAuth és session",
      "Külső integrációk: webhook-ok, retry és idempotencia",
    ],
  },
];

export default function SoftwareEngineerTrackPage() {
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
          Software Engineer – Fejlődési sáv
        </h1>

        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Strukturált tanulási út azoknak, akik skálázható szoftverrendszereket
          terveznek és szállítanak. Tervezési döntések, tiszta kód, architektúra
          és megbízható szállítás — a valós fejlesztői munkához igazítva.
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
            Junior fejlesztőknek, akik szeretnének túllépni a „működik" szinten
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Medior szintűeknek, akik az architektúra és rendszertervezés felé nyitnának
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Karrierváltóknak, akik a szoftverfejlesztés alapjait keresik strukturáltan
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Bárkinek, aki megbízható, karbantartható szoftvert szeretne írni
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
            Tematikus blokkok, amelyek a Software Engineer munka kulcsterületeit járják körbe.
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
