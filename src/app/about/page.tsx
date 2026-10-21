import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { formatDateShort, formatMonth, readingMinutes } from "@/lib/format";
import { CONTACT_EMAIL } from "@/lib/site";
import { EPISODES, SECTION_META, episodeHref } from "@/data/episodes";
import { GhostStripes } from "@/components/site/MetisMark";
import { Monitor, Shell } from "@/components/site/ui";
import { WritingRow } from "@/components/site/WritingRow";

export const metadata: Metadata = {
  title: "Antal Bálint | Metis",
  description: "Antal Bálint, a Metis alapítója: szociológus végzettségű adattudós, aki írásokat és beszélgetéseket készít egy házi stúdióból.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", images: ["https://metis.name/brand/og-default.png"] },
};

const AUTHOR = "Antal Bálint";

export default function AboutPage() {
  const posts = getAllPosts();
  const episodes = EPISODES.filter((e) => e.author === AUTHOR);
  const items = [
    ...posts.map((p) => ({
      key: p.slug,
      date: p.frontmatter.date,
      kind: p.frontmatter.seriesTitle ?? "Esszé",
      title: p.frontmatter.title,
      excerpt: p.frontmatter.excerpt,
      href: `/posts/${p.slug}`,
      meta: `${formatDateShort(p.frontmatter.date)} · ${readingMinutes(p.content)} perc`,
    })),
    ...episodes.map((e) => ({
      key: e.slug,
      date: e.date,
      kind: SECTION_META[e.section].singular,
      title: e.title,
      excerpt: e.excerpt,
      href: episodeHref(e),
      meta: `${formatDateShort(e.date)} · Videó · ${e.minutes} perc`,
    })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));
  const since = [...items].map((i) => i.date).sort()[0];

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-6 lg:pb-12 lg:pt-10">
        <GhostStripes
          id="author-ghost"
          className="pointer-events-none absolute -right-[120px] -top-[60px] w-[320px] lg:right-[40px] lg:top-[20px] lg:w-[340px]"
        />
        <Shell className="relative grid items-end gap-8 lg:grid-cols-[72px_180px_1fr_320px] lg:gap-8">
          <div className="mt-num hidden text-[28px] lg:block">Sz·01</div>
          <div className="h-[140px] w-[140px] overflow-hidden rounded-full bg-muted lg:h-[180px] lg:w-[180px]">
            <Image src="/images/balint.jpg" alt="Antal Bálint portré" width={360} height={360} priority className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="mt-overline">Szerző · Alapító</p>
            <h1 className="text-[40px] font-light leading-none tracking-[-0.03em] sm:text-[56px]">Antal Bálint</h1>
            <p className="max-w-[600px] text-[17px] leading-relaxed text-muted-foreground">
              Szociológus végzettségű adattudós. Írásokat ír, és egy házi stúdióból készíti a Metis
              beszélgetéseit. Témái: nyilvánosság, vitakultúra, a láthatatlan munka, és hogy mit
              mondanak a számok az emberekről.
            </p>
            <div className="flex gap-4 text-[15px]">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent no-underline hover:underline">E-mail</a>
              <Link href="/about/karrier-evolucio" className="text-accent no-underline hover:underline">Karrierút</Link>
            </div>
          </div>
          <dl className="relative flex flex-col text-[15px]">
            <div className="flex justify-between border-b border-border py-2.5">
              <dt className="text-muted-foreground">írás</dt>
              <dd className="font-medium">{posts.length}</dd>
            </div>
            <div className="flex justify-between border-b border-border py-2.5">
              <dt className="text-muted-foreground">epizód</dt>
              <dd className="font-medium">{episodes.length}</dd>
            </div>
            {since ? (
              <div className="flex justify-between py-2.5">
                <dt className="text-muted-foreground">óta</dt>
                <dd className="font-medium">{formatMonth(since)}</dd>
              </div>
            ) : null}
          </dl>
        </Shell>
      </section>

      <section className="pb-20">
        <Shell className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-14">
          <div>
            <p className="mb-4 inline-block border-b-2 border-accent pb-1 text-[15px]">Mind ({items.length})</p>
            <div className="border-t border-border">
              {items.map((it, i) => (
                <WritingRow
                  key={it.key}
                  number={items.length - i}
                  kind={it.kind}
                  title={it.title}
                  excerpt={it.excerpt}
                  href={it.href}
                  metaTop={AUTHOR}
                  metaBottom={it.meta}
                />
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-8 lg:sticky lg:top-6 lg:self-start">
            <Monitor className="p-7">
              <div className="mt-scanlines" />
              <div className="relative flex flex-col gap-3">
                <p className="mt-overline">Transzparencia</p>
                <p className="text-sm leading-relaxed text-monitor-muted">
                  A Metis nem piaci alapon működik. A szerző nem kap fizetést a projektért. A
                  felszerelés saját. Támogatás: nincs.
                </p>
                <Link href="/rolunk" className="text-sm text-monitor-accent no-underline hover:underline">
                  Részletek →
                </Link>
              </div>
            </Monitor>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Bemutatkozás</p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Nem klasszikus matekos háttérből érkeztem, adattudósként dolgoztam a
                kiskereskedelem, a légiipar és a média területén. Számomra az adat nem öncélú
                számhalmaz, hanem eszköz arra, hogy jobban értsük egymást.
              </p>
            </div>
          </aside>
        </Shell>
      </section>
    </>
  );
}
