import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { formatDateShort, readingMinutes } from "@/lib/format";
import { TAGLINE } from "@/lib/site";
import { episodeHref, getLatestEpisode, getEpisodes } from "@/data/episodes";
import { GhostMark } from "@/components/site/MetisMark";
import { AuthorsBox, Monitor, pad2, Screen, SectionHead, Shell, WritingCard } from "@/components/site/ui";
import { EpisodeRow } from "@/components/site/EpisodeRow";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getLatestEpisode("eletkepek");
  const rest = getEpisodes("eletkepek")
    .filter((e) => e.slug !== featured?.slug)
    .sort((a, b) => a.number - b.number);
  const posts = getAllPosts().slice(0, 4);
  const debate = getLatestEpisode("vita");

  return (
    <>
      {/* Hero: the sign as background, the newest episode in a dark monitor card. */}
      <section className="relative overflow-hidden pb-14 pt-8 lg:min-h-[620px] lg:pb-[72px] lg:pt-12">
        <GhostMark
          id="home-ghost"
          className="pointer-events-none absolute opacity-40 sm:opacity-90 -right-[180px] -top-[80px] w-[420px] sm:w-[560px] lg:-right-[220px] lg:-top-[120px] lg:w-[760px]"
        />
        <Shell className="relative grid items-end gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
          <div className="flex flex-col gap-5">
            <p className="mt-tagline">{TAGLINE}</p>
            <h1 className="text-[40px] font-light leading-[1.08] tracking-[-0.02em] [text-wrap:balance] sm:text-[52px]">
              Egymás valóságát csak elmondva ismerjük meg.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground [text-wrap:pretty]">
              Vlog, podcast és írások egy házi stúdióból. Olyan történetek és viták, amelyek a nagy
              médiumokba nem férnek be.
            </p>
          </div>

          {featured ? (
            <Monitor className="grid md:grid-cols-[1fr_300px]">
              <Link href={episodeHref(featured)} aria-label={`${featured.title} megnézése`} className="block">
                <Screen title={featured.title} />
              </Link>
              <div className="flex flex-col justify-between gap-6 px-7 py-8">
                <div className="flex flex-col gap-3.5">
                  <p className="mt-overline">Életképek · {pad2(featured.number)}</p>
                  <h2 className="text-[28px] font-medium leading-tight">
                    <Link href={episodeHref(featured)} className="text-monitor-foreground no-underline hover:text-monitor-accent">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="text-sm leading-relaxed text-monitor-muted">{featured.excerpt}</p>
                </div>
                <p className="text-[13px] text-monitor-muted">
                  {featured.minutes} perc · {formatDateShort(featured.date)}
                </p>
              </div>
            </Monitor>
          ) : null}
        </Shell>
      </section>

      {/* Életképek: every episode, in order. */}
      <section className="pb-16">
        <Shell>
          <SectionHead overline="Életképek" title="Az összes epizód, sorban" href="/eletkepek" />
          <div className="mt-7 border-t border-border">
            {rest.map((e) => (
              <EpisodeRow key={e.slug} episode={e} />
            ))}
          </div>
        </Shell>
      </section>

      {/* Esszék + Vita */}
      <section className="pb-16 lg:pb-20">
        <Shell className="grid gap-14 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-7">
            <SectionHead overline="Esszék" title="Írások" href="/posts" />
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((p) => (
                <WritingCard
                  key={p.slug}
                  href={`/posts/${p.slug}`}
                  title={p.frontmatter.title}
                  excerpt={p.frontmatter.excerpt}
                  meta={`Antal Bálint · ${formatDateShort(p.frontmatter.date)} · ${readingMinutes(p.content)} perc`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <SectionHead overline="Vita" title="Két álláspont" href="/vita" linkLabel="→" />
            {debate ? (
              <article className="flex flex-col gap-3">
                <Link href={episodeHref(debate)} aria-label={debate.title} className="block">
                  <Monitor flat className="!rounded-[var(--radius-md)] !bg-ink">
                    <Screen title={debate.title} aspect="aspect-video" play={false} />
                  </Monitor>
                </Link>
                <h3 className="text-xl font-semibold leading-snug">
                  <Link href={episodeHref(debate)} className="text-foreground no-underline hover:text-accent">
                    {debate.title}
                  </Link>
                </h3>
                <p className="text-sm leading-normal text-muted-foreground">{debate.excerpt}</p>
              </article>
            ) : null}
            <AuthorsBox
              text="Nem hozták le? Küldd be ide. Minden írásra indoklással válaszolunk."
              cta="Beküldés"
              href="/irj-nekunk"
            />
          </div>
        </Shell>
      </section>
    </>
  );
}
