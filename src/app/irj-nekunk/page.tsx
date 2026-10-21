import { Suspense } from "react";
import type { Metadata } from "next";
import { CONTACT_EMAIL, TAGLINE } from "@/lib/site";
import { GhostStripes } from "@/components/site/MetisMark";
import { Monitor, Shell, pad2 } from "@/components/site/ui";
import { SubmissionForm } from "@/components/site/SubmissionForm";

export const metadata: Metadata = {
  title: "Írj nekünk | Metis",
  description: "Egy írás, egy válasz valakinek, vagy egy vendég, akit meg kéne hallgatni. Öt munkanapon belül válaszolunk, indoklással.",
  alternates: { canonical: "/irj-nekunk" },
  openGraph: { url: "/irj-nekunk" },
};

const RULES = [
  "Vitatható legyen, ne kiabálós.",
  "Saját név alatt, vagy indokolt névtelenséggel.",
  "Máshol még nem jelent meg, vagy jelezd, hol.",
];

export default function WriteToUsPage() {
  return (
    <section className="relative overflow-hidden pb-20 pt-6 lg:pt-10">
      <GhostStripes
        id="write-ghost"
        className="pointer-events-none absolute -right-[160px] -top-[60px] w-[360px] opacity-70 lg:-right-[60px] lg:top-[20px] lg:w-[400px]"
      />
      <Shell className="relative grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="mt-tagline">{TAGLINE}</p>
            <h1 className="text-[44px] font-light leading-none tracking-[-0.03em] sm:text-[52px]">Írj nekünk</h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Egy írás, egy válasz valakinek, vagy egy vendég, akit meg kéne hallgatni. Öt
              munkanapon belül válaszolunk, indoklással.
            </p>
          </div>

          <Monitor className="p-7">
            <div className="mt-scanlines" />
            <div className="relative flex flex-col gap-3">
              <p className="mt-overline">Már szerzőnk vagy?</p>
              <p className="text-xl font-medium">Írj közvetlenül</p>
              <p className="text-sm leading-relaxed text-monitor-muted">
                Folyamatban lévő írásról, javításról vagy válaszról a szerkesztőségnek:
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-monitor-accent no-underline hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </Monitor>

          <ol className="border-t border-border">
            {RULES.map((r, i) => (
              <li key={r} className="grid grid-cols-[64px_1fr] items-baseline border-b border-border py-4">
                <span className="mt-num text-2xl">{pad2(i + 1)}</span>
                <span className="text-[15px]">{r}</span>
              </li>
            ))}
          </ol>
        </div>

        <Suspense>
          <SubmissionForm />
        </Suspense>
      </Shell>
    </section>
  );
}
