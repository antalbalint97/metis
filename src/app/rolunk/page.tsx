import Link from "next/link";
import type { Metadata } from "next";
import { TAGLINE } from "@/lib/site";
import { GhostMark } from "@/components/site/MetisMark";
import { Monitor, Shell, pad2 } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Rólunk | Metis",
  description: "Egy felület, ahol a polarizálódáson túl lehet vitázni. Vlog, podcast és írások egy házi stúdióból, nem pénzért.",
  alternates: { canonical: "/rolunk" },
  openGraph: { url: "/rolunk" },
};

const VALUES = [
  {
    title: "Szociográfia",
    text: "Az Életképek sorozat valódi emberek és élethelyzetek történetét mutatja be. Nem híres embereket. Azokat, akiken keresztül megismerhetjük egymás valóságát.",
  },
  {
    title: "Vitakultúra",
    text: "A vitákban két álláspont ül egy asztalnál, moderátorral. Nem kell egyetérteniük. Az ellenvéleményt a legerősebb formájában mondjuk ki.",
  },
  {
    title: "Szolidaritás",
    text: "A megismerés nem cél, hanem eszköz. Azért hallgatjuk végig egymást, hogy mellé tudjunk állni.",
  },
];

const STEPS = [
  "Beküldöd az írást vagy ajánlasz egy vendéget.",
  "Öt munkanapon belül válaszolunk, indoklással.",
  "Ha megjelenik, a te neveddel, változtatás nélkül, vagy egyeztetett szerkesztéssel.",
  "A válaszírásokat ugyanitt hozzuk le.",
];

export default function AboutUsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-10 lg:pb-16 lg:pt-14">
        <GhostMark
          id="rolunk-ghost"
          className="pointer-events-none absolute left-1/2 top-0 w-[560px] -translate-x-1/2 lg:w-[780px]"
        />
        <Shell className="relative flex flex-col items-center gap-6 text-center">
          <p className="mt-tagline">{TAGLINE}</p>
          <h1 className="max-w-[900px] text-[38px] font-light leading-[1.08] tracking-[-0.025em] [text-wrap:balance] sm:text-[60px]">
            Egy felület, ahol a polarizálódáson túl lehet vitázni.
          </h1>
          <p className="max-w-[680px] text-lg leading-relaxed text-muted-foreground">
            A Metis egy vlog, podcast és írások gyűjteménye. Olyan történetek és érvek jelennek meg
            itt, amelyeket a nagyobb médiumok nem hoznak le. Egy házi stúdióból, nem pénzért.
          </p>
        </Shell>
      </section>

      <section className="pb-16">
        <Shell>
          <Monitor className="grid md:grid-cols-2">
            <div className="relative min-h-[220px] md:min-h-[420px]">
              <div className="mt-scanlines" />
            </div>
            <div className="flex flex-col justify-center gap-5 px-7 py-10 md:px-12">
              <p className="mt-overline">A stúdió</p>
              <h2 className="text-[28px] font-normal leading-tight sm:text-[36px]">Egy lakás, egy kamera, két mikrofon.</h2>
              <p className="text-[15px] leading-relaxed text-monitor-muted">
                Nem professzionális stúdió, és nem is akar annak látszani. A Metis saját projekt: nem
                kap fizetést senki, nincs hirdetés, nincs támogató. Ha egyszer társadalmi vállalkozás
                lesz belőle, azt itt fogjuk először leírni.
              </p>
              <p className="text-[15px] leading-relaxed">
                Akkor is csináljuk, ha száz embert ér el. Akkor is, ha több százezret.
              </p>
            </div>
          </Monitor>
        </Shell>
      </section>

      <section className="pb-16 lg:pb-20">
        <Shell className="grid gap-8 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <div key={v.title} className="mt-rule-top grid grid-cols-[56px_1fr] gap-4 pt-6 lg:grid-cols-[72px_1fr]">
              <span className="mt-num text-[28px]">{pad2(i + 1)}</span>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </Shell>
      </section>

      <section className="pb-20">
        <Shell className="grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
          <div className="flex flex-col gap-4">
            <p className="mt-overline">Hogyan döntünk</p>
            <h2 className="text-[30px] font-normal tracking-[-0.015em] sm:text-[34px]">Átlátható szerkesztés</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Minden beküldött írásra válaszolunk, és leírjuk, miért igen vagy miért nem. Az egyetlen
              szempont: vitatható legyen, ne kiabálós. Az ellenvélemény nem ok az elutasításra.
            </p>
            <Link href="/irj-nekunk" className="ds-btn ds-btn--primary ds-btn--md mt-2 self-start no-underline">
              Írj nekünk
            </Link>
          </div>
          <ol className="border-t border-border">
            {STEPS.map((s, i) => (
              <li key={s} className="grid grid-cols-[56px_1fr] items-baseline gap-4 border-b border-border py-5 lg:grid-cols-[104px_1fr]">
                <span className="mt-num text-[28px]">{pad2(i + 1)}</span>
                <span className="text-lg">{s}</span>
              </li>
            ))}
          </ol>
        </Shell>
      </section>
    </>
  );
}
