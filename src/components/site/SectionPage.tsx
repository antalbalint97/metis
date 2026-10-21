import Link from "next/link";
import { TAGLINE } from "@/lib/site";
import { formatDateShort } from "@/lib/format";
import { SECTION_META, episodeHref, getEpisodes, getLatestEpisode, type SectionKey } from "@/data/episodes";
import { GhostMark } from "./MetisMark";
import { EpisodeList } from "./EpisodeList";
import { AuthorsBox, ComingSoonMonitor, Monitor, Screen, Shell, pad2 } from "./ui";

/** Series page (Életképek, Vita, Beszélgetések): lead + newest episode, numbered list, stats. */
export function SectionPage({ section }: { section: SectionKey }) {
  const meta = SECTION_META[section];
  const episodes = getEpisodes(section);
  const latest = getLatestEpisode(section);
  const avg = episodes.length
    ? Math.round(episodes.reduce((sum, e) => sum + e.minutes, 0) / episodes.length / 5) * 5
    : 0;

  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-6 lg:pb-14 lg:pt-10">
        <GhostMark
          id={`${section}-ghost`}
          className="pointer-events-none absolute opacity-40 sm:opacity-90 -right-[200px] -top-[120px] w-[480px] lg:-right-[220px] lg:-top-[160px] lg:w-[760px]"
        />
        <Shell className="relative grid items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-[72px]">
          <div className="flex flex-col gap-5">
            <p className="mt-tagline">{TAGLINE}</p>
            <h1 className="text-[48px] font-light leading-none tracking-[-0.03em] sm:text-[64px]">{meta.title}</h1>
            <p className="text-base leading-relaxed text-muted-foreground">{meta.lead}</p>
          </div>

          {latest ? (
            <Monitor className="grid md:grid-cols-[1fr_300px]">
              <Link href={episodeHref(latest)} aria-label={`${latest.title} megnézése`} className="block">
                <Screen title={latest.title} playSize={72} />
              </Link>
              <div className="flex flex-col justify-between gap-6 px-7 py-8">
                <div className="flex flex-col gap-3.5">
                  <p className="mt-overline">Legújabb · {pad2(latest.number)}</p>
                  <h2 className="text-[28px] font-medium leading-tight">
                    <Link href={episodeHref(latest)} className="text-monitor-foreground no-underline hover:text-monitor-accent">
                      {latest.title}
                    </Link>
                  </h2>
                  <p className="text-sm leading-relaxed text-monitor-muted">{latest.excerpt}</p>
                </div>
                <p className="text-[13px] text-monitor-muted">
                  {latest.minutes} perc · {formatDateShort(latest.date)}
                </p>
              </div>
            </Monitor>
          ) : (
            <ComingSoonMonitor
              label={meta.label}
              text="Az első epizódok most készülnek. Ha van ötleted vagy vendégjavaslatod, írj nekünk."
            />
          )}
        </Shell>
      </section>

      {episodes.length ? (
        <section className="pb-16">
          <Shell>
            <EpisodeList episodes={episodes} overline="Sorozat" />
          </Shell>
        </section>
      ) : null}

      <section className="pb-20">
        <Shell className="grid gap-8 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_420px] lg:gap-6">
          {episodes.length ? (
            <>
              <div className="mt-rule-top flex flex-col gap-1 pt-4">
                <span className="text-[32px] font-normal">{episodes.length}</span>
                <span className="text-[13px] text-subtle-foreground">epizód eddig</span>
              </div>
              <div className="mt-rule-top flex flex-col gap-1 pt-4">
                <span className="text-[32px] font-normal">~{avg} perc</span>
                <span className="text-[13px] text-subtle-foreground">egy beszélgetés</span>
              </div>
            </>
          ) : (
            <div className="mt-rule-top flex flex-col gap-1 pt-4 sm:col-span-2">
              <span className="text-[32px] font-normal">Hamarosan</span>
              <span className="text-[13px] text-subtle-foreground">az első epizód</span>
            </div>
          )}
          <div className="mt-rule-top flex flex-col gap-1 pt-4">
            <span className="text-[32px] font-normal">2 hetente</span>
            <span className="text-[13px] text-subtle-foreground">új epizód</span>
          </div>
          <div className="sm:col-span-3 lg:col-span-1 lg:pl-8">
            <AuthorsBox text={meta.guestCta} cta="Vendég ajánlása" href="/irj-nekunk?tipus=vendeg" />
          </div>
        </Shell>
      </section>
    </>
  );
}
