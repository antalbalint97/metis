import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Analyst – Fejlődési sáv | Metis",
  description:
    "Strukturált tanulási út Junior–Medior Data Analysteknek: SQL, statisztika, vizualizáció és üzleti gondolkodás.",
};

const starterArticles = [
  { title: "Mit csinál egy Data Analyst valójában?", href: "/posts/data-analyst-mit-csinal-valojaban" },
  { title: "Hogyan gondolkodik egy elemző a számok mögött?", href: "#" },
  { title: "Az első napod adatokkal: mire figyelj?", href: "#" },
  { title: "Kérdésfeltevés, ami megváltoztatja az elemzésed", href: "#" },
];

const modules = [
  {
    title: "Üzleti kérdésfeltevés",
    description:
      "Hogyan fordítsd le az üzleti problémát elemzői kérdéssé, és mikor elég egy egyszerű válasz.",
    articles: [
      "Mi a különbség kérdés és metrika között?",
      "Stakeholder-interjú technikák elemzőknek",
      "Hogyan definiálj mérőszámot nulláról?",
      "Tipikus csapdák kérdésfeltevésnél",
      "Egy jó brief anatómiája",
    ],
  },
  {
    title: "SQL gondolkodás",
    description:
      "Nem szintaxis, hanem szemlélet: hogyan gondolkodj adatszerkezetekben és lekérdezésekben.",
    articles: [
      "SELECT-en túl: hogyan tervezz lekérdezést?",
      "JOIN-ok a gyakorlatban: mikor melyiket?",
      "Aggregáció és csoportosítás: a helyes szint",
      "Window functions: miért nem luxus?",
      "CTE-k és olvashatóság",
      "Lekérdezés-optimalizálás alapjai",
    ],
  },
  {
    title: "Statisztika elemzőknek",
    description:
      "Leíró statisztika, eloszlások és összehasonlítások — nem tankönyvi, hanem elemzői szemmel.",
    articles: [
      "Átlag, medián, szórás: mikor melyik számít?",
      "Eloszlások felismerése a gyakorlatban",
      "Outlierek: mikor probléma, mikor feature?",
      "Összehasonlítások csapdái: kontextus nélkül nincs igazság",
      "Korrelációtól az ok-okozatig: hol a határ?",
    ],
  },
  {
    title: "Vizualizáció és riportolás",
    description:
      "Hogyan mutass meg egy sztorit adatokkal, anélkül hogy félrevezetnéd a nézőt.",
    articles: [
      "Ábratípus-választás: döntési keretrendszer",
      "Dashboard vs. riport: mikor melyik?",
      "Szín, skála, tengely: a vizualizáció alapjai",
      "Storytelling adatokkal: a prezentáció felépítése",
    ],
  },
];

export default function DataAnalystTrackPage() {
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
          Data Analyst – Fejlődési sáv
        </h1>

        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Strukturált tanulási út azoknak, akik adatokból szeretnének döntéseket
          támogatni. SQL, statisztika, vizualizáció és üzleti gondolkodás — a
          valós munkához igazítva, nem tankönyvi sorrendben.
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
            Junior Data Analysteknek, akik most kezdték el a munkát és szeretnének tudatosabban fejlődni
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Medior elemzőknek, akik szeretnék rendszerezni a meglévő tudásukat
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Karrierváltóknak, akik adatelemzés felé mozdulnának
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Bárkinek, aki üzleti kontextusban akar adatokkal dolgozni
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
            Tematikus blokkok, amelyek egy-egy területet járnak körbe az elemzői munka szemszögéből.
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
          rendszeres beszélgetésekkel segítem a haladasodat — valódi problémákon
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
