import Link from "next/link";
import { episodeHref, type Episode } from "@/data/episodes";
import { pad2 } from "./ui";

/** Numbered episode row: number, still, title + excerpt, length. */
export function EpisodeRow({ episode: e }: { episode: Episode }) {
  return (
    <article className="relative grid grid-cols-[44px_1fr] items-center gap-x-4 gap-y-3 border-b border-border py-5 sm:grid-cols-[56px_160px_1fr_auto] sm:gap-x-8 lg:grid-cols-[72px_200px_1fr_120px]">
      <div className="mt-num text-2xl sm:text-[28px]">{pad2(e.number)}</div>
      <div className="hidden aspect-[16/10] overflow-hidden rounded-[var(--radius-sm)] bg-muted sm:block" aria-hidden="true" />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-medium sm:text-[22px]">
          <Link href={episodeHref(e)} className="text-foreground no-underline after:absolute after:inset-0 hover:text-accent">
            {e.title}
          </Link>
        </h3>
        <p className="text-[15px] leading-normal text-muted-foreground">{e.excerpt}</p>
      </div>
      <div className="col-start-2 text-[13px] text-subtle-foreground sm:col-start-auto sm:text-right">{e.minutes} perc</div>
    </article>
  );
}
