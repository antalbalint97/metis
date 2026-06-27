import type { Metadata } from "next";
import Link from "next/link";
import { Card, Hero, PageContainer, Section, SectionHeader } from "@meniva/design-system";
import {
  careerStages,
  carriedLessons,
  turningPoints,
} from "@/data/career-evolution";

export const metadata: Metadata = {
  title: "Karrierváltás az adatok felé — egy nem lineáris út | Metis",
  description:
    "Diákmunkától és szociológiától az adatelemzésen át az ML-rendszerekig: valós karrierút, tanulságokkal azoknak, akik most építik magukat.",
};

const stageLabels = careerStages.map((stage) => ({
  period: stage.period,
  title: stage.title,
}));

export default function CareerEvolutionPage() {
  return (
    <>
      <PageContainer size="marketing" className="pb-10 pt-10 sm:pb-14 sm:pt-14">
        <Hero
          variant="split"
          align="left"
          overline="Rólam · Karrierevolúció"
          title={
            <>
              Nem egyenes út volt.
              <span className="mt-2 block text-accent">De minden szakasz épített valamit.</span>
            </>
          }
          description="Diákmunkákból, kommunikációból és szociológiából indultam. Kutatáson és adatelemzésen át jutottam el működő ML-rendszerekig — és közben megtanultam, hogy a fejlődés ritkán egyetlen nagy ugrás."
          primaryAction={{
            label: "Nézd meg az utat",
            render: ({ className, children }) => (
              <a href="#az-ut" className={className}>
                {children}
              </a>
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
            <Card padding="feature" className="relative overflow-hidden">
              <p className="ds-overline">Az út röviden</p>
              <ol className="relative mt-6 space-y-5 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-border-strong">
                {stageLabels.map((stage, index) => (
                  <li key={stage.period} className="relative grid grid-cols-[12px_1fr] gap-4">
                    <span
                      className={`relative z-10 mt-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface ${
                        index === stageLabels.length - 1 ? "ring-4 ring-accent-muted" : ""
                      }`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-mono text-xs font-medium text-accent">{stage.period}</p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-foreground">
                        {stage.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>
          }
        />
      </PageContainer>

      <Section spacing="default" className="border-y border-border bg-surface">
        <PageContainer size="content">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div>
              <SectionHeader
                overline="Olvasási kulcs"
                title="A korábbi szakaszok nem tűntek el"
                description="Nem lett semmissé a diákmunkák fegyelme attól, hogy később kódot írtam. A szociológiai kérdések sem maradtak hátra attól, hogy modelleket és adatfolyamatokat építettem. A pályám inkább rétegekben épült, mintsem szerepeket cserélt."
              />
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Ez az oldal ezért nem pozíciók listája. Azt mutatja meg, mit tanultam az egyes
                szakaszokból, mit vittem tovább, és ebből mi lehet hasznos annak, aki most keresi a
                saját következő lépését.
              </p>
            </div>
            <Card padding="default" className="!bg-accent-muted">
              <p className="ds-overline">A visszatérő minta</p>
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                Nem nulláról kezdtem újra. Mindig a már meglévő tapasztalatra építettem rá a
                következő réteget.
              </blockquote>
            </Card>
          </div>
        </PageContainer>
      </Section>

      <Section id="az-ut" spacing="default" className="scroll-mt-20">
        <PageContainer size="wide">
          <SectionHeader
            overline="Öt szakasz"
            title="Így épült fel"
            description="Nem minden állomás tűnt előre logikusnak. Visszanézve mégis látszik, melyik készségből lett a következő szakasz alapja."
          />

          <ol className="relative mt-10 space-y-6 before:absolute before:bottom-8 before:left-[7px] before:top-8 before:w-px before:bg-border-strong md:before:left-[9.5rem]">
            {careerStages.map((stage) => (
              <li
                key={stage.id}
                className="relative grid gap-3 pl-8 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-10 md:pl-0"
              >
                <span
                  className={`absolute left-0 top-8 z-10 h-4 w-4 rounded-full border-[3px] border-background bg-accent md:left-[9rem] ${
                    stage.emphasis === "current" ? "ring-4 ring-accent-muted" : ""
                  }`}
                  aria-hidden="true"
                />
                <div className="pt-1 md:pt-8 md:text-right">
                  <p className="font-mono text-sm font-semibold text-accent">{stage.period}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {String(stage.order).padStart(2, "0")} / 05
                  </p>
                </div>

                <Card as="article" padding="feature">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                    {stage.roleContext}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {stage.title}
                  </h3>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{stage.summary}</p>

                  <div className="mt-7 grid gap-5 border-t border-border pt-6 lg:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Ezt tanultam belőle</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.learned}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Ezért számíthat neked</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {stage.visitorMeaning}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="mr-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      Amit továbbvittem
                    </span>
                    {stage.carriedForward.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </PageContainer>
      </Section>

      <Section spacing="default" className="bg-muted">
        <PageContainer size="wide">
          <SectionHeader
            overline="Fordulópontok"
            title="Nem a pozíció neve változtatott meg mindent"
            description="A fontos váltások inkább abban történtek, hogyan néztem egy problémára és milyen felelősséget vállaltam a megoldásért."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {turningPoints.map((point) => (
              <Card key={point.number} padding="default">
                <p className="font-mono text-sm font-semibold text-accent">{point.number}</p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.summary}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </Section>

      <Section spacing="default">
        <PageContainer size="wide">
          <SectionHeader
            overline="Ami megmaradt"
            title="Öt készség, amely minden szerepben velem maradt"
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {carriedLessons.map((lesson, index) => (
              <div key={lesson.title} className="bg-surface p-6">
                <p className="font-mono text-xs font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-semibold text-foreground">{lesson.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lesson.summary}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </Section>

      <Section spacing="default" className="border-y border-border bg-accent-muted">
        <PageContainer size="content">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader overline="Mit jelent ez neked?" title="Nem kell késznek lenned az induláshoz" />
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Valószínűleg te sem nulláról indulsz. Lehet, hogy ügyfelekkel dolgoztál, folyamatokat
                szerveztél, kutattál, tanítottál vagy egyszerűen megtanultál kitartóan végigvinni
                nehéz feladatokat. Ezek nem kitérők: megfelelően lefordítva a következő pályád részei.
              </p>
              <p className="font-medium text-foreground">
                Nem a teljes útvonalat kell ma látnod. A következő értelmes lépést kell megtalálnod,
                majd elég sokáig dolgoznod rajta ahhoz, hogy legyen mire továbbépíteni.
              </p>
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section spacing="default">
        <PageContainer size="content">
          <Card padding="feature" className="text-center">
            <SectionHeader
              align="center"
              overline="A te következő lépésed"
              title="Nem kész pályatervet adok, hanem kapaszkodókat az építkezéshez"
              description="Ha jól jönne egy tapasztalt külső nézőpont, a mentorprogramban közösen bontjuk le a célodat tanulható, gyakorolható lépésekre. Ha előbb egyedül néznél körül, kezdd a fejlődési sávokkal."
            />
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/mentorprogram" className="ds-btn ds-btn--primary ds-btn--lg">
                Mentorprogram
              </Link>
              <Link href="/#fejlodesi-savok" className="ds-btn ds-btn--outline ds-btn--lg">
                Fejlődési sávok
              </Link>
            </div>
          </Card>
        </PageContainer>
      </Section>
    </>
  );
}
