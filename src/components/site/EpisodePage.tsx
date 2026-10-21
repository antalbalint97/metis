import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TAGLINE } from "@/lib/site";
import { formatDateShort } from "@/lib/format";
import { SECTION_META, episodeHref, getEpisode, getEpisodes, type SectionKey } from "@/data/episodes";
import { GhostMark } from "./MetisMark";
import { AuthorsBox, Monitor, Screen, Shell, pad2 } from "./ui";

export function episodeMetadata(section: SectionKey, slug: string): Metadata {
  const e = getEpisode(section, slug);
  if (!e) return {};
  const path = episodeHref(e);
  return {
    title: `${e.title} | ${SECTION_META[section].label} | Metis`,
    description: e.excerpt,
    alternates: { canonical: path },
    openGraph: { type: "video.episode", url: path, title: e.title, description: e.excerpt },
  };
}

/** Episode page: title, player + chapters in one monitor card, notes, transcript, next episodes. */
export function EpisodePage({ section, slug }: { section: SectionKey; slug: string }) {
  const e = getEpisode(section, slug);
  if (!e) notFound();
  const meta = SECTION_META[section];
  const others = getEpisodes(section)
    .filter((x) => x.slug !== e.slug)
    .sort((a, b) => a.number - b.number)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-4 lg:pb-16 lg:pt-6">
        <GhostMark
          id={`ep-${slug}-ghost`}
          className="pointer-events-none absolute opacity-40 sm:opacity-90 -right-[200px] -top-[120px] w-[480px] lg:-right-[220px] lg:-top-[150px] lg:w-[760px]"
        />
        <Shell className="relative grid gap-4 lg:grid-cols-[72px_1fr] lg:gap-8">
          <div className="mt-num pt-2 text-[28px]">{pad2(e.number)}</div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-end justify-between gap-6 lg:gap-12">
              <div className="flex flex-col gap-3.5">
                <p className="mt-overline">
                  <Link href={meta.href} className="text-accent no-underline hover:underline">
                    {meta.label}
                  </Link>{" "}
                  · {e.minutes} perc · {formatDateShort(e.date)}
                </p>
                <h1 className="text-[38px] font-light leading-[1.08] tracking-[-0.025em] sm:text-[52px]">{e.title}</h1>
              </div>
              <p className="mt-tagline hidden xl:block">{TAGLINE}</p>
            </div>

            <Monitor>
              <div className="grid lg:grid-cols-[1fr_320px]">
                <Screen title={e.title} youtubeId={e.youtubeId} aspect="aspect-video" playSize={84} />
                <div className="flex flex-col justify-between gap-6 border-t border-monitor-line px-7 py-8 lg:border-l lg:border-t-0">
                  {e.chapters?.length ? (
                    <div className="flex flex-col gap-4">
                      <p className="mt-overline">Fejezetek</p>
                      <ol className="flex flex-col">
                        {e.chapters.map((c, i) => (
                          <li
                            key={c.time}
                            className={`grid grid-cols-[52px_1fr] gap-3 border-t border-monitor-line py-2.5 text-sm ${
                              i === 0 ? "font-semibold text-monitor-foreground" : "text-monitor-muted"
                            }`}
                          >
                            <span className="text-xs font-normal text-monitor-accent">{c.time}</span>
                            <span>{c.title}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <p className="mt-overline">{meta.singular}</p>
                      <p className="text-sm leading-relaxed text-monitor-muted">{e.excerpt}</p>
                    </div>
                  )}
                  {e.links?.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {e.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="rounded-[var(--radius-sm)] border border-monitor-border px-2.5 py-1.5 text-xs text-monitor-muted no-underline hover:text-monitor-foreground"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Monitor>
          </div>
        </Shell>
      </section>

      <section className="pb-20">
        <Shell className="grid gap-12 lg:grid-cols-[72px_minmax(0,720px)_1fr] lg:gap-8">
          <div className="hidden lg:block" />
          <div className="flex flex-col gap-8">
            <p className="text-lg leading-normal text-muted-foreground sm:text-xl">{e.excerpt}</p>
            {e.about ? (
              <div className="mt-rule-top flex flex-col gap-3 pt-7">
                <p className="mt-overline !text-subtle-foreground">A beszélgetésről</p>
                <p className="text-[17px] leading-[1.65] [text-wrap:pretty]">{e.about}</p>
              </div>
            ) : null}
            {e.transcript?.length ? (
              <div className="flex flex-col gap-5 border-t border-border pt-7">
                <p className="text-base font-semibold">Átirat</p>
                {e.transcript.map((t) => (
                  <div key={t.time} className="grid grid-cols-[56px_1fr] gap-4 text-base leading-[1.65] text-muted-foreground">
                    <span className="pt-[3px] text-[13px] text-accent">{t.time}</span>
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="flex flex-col gap-7 lg:pl-4">
            {others.length ? (
              <div>
                <p className="mt-overline mb-7">További epizódok</p>
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={episodeHref(o)}
                    className="grid grid-cols-[40px_1fr] gap-3 border-t border-border py-4 text-foreground no-underline hover:text-accent"
                  >
                    <span className="mt-num text-xl">{pad2(o.number)}</span>
                    <span className="flex flex-col gap-1">
                      <span className="text-base font-semibold leading-snug">{o.title}</span>
                      <span className="text-[13px] text-subtle-foreground">{o.minutes} perc</span>
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
            <AuthorsBox text={meta.guestCta} cta="Vendég ajánlása" href="/irj-nekunk?tipus=vendeg" />
          </aside>
        </Shell>
      </section>
    </>
  );
}
