import Link from "next/link";
import type { ReactNode } from "react";

/** Page-width wrapper matching the design's 64px desktop gutters. */
export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-16 ${className}`}>{children}</div>;
}

/** Overline + section title, with an optional "Összes →" link on the right. */
export function SectionHead({
  overline,
  title,
  href,
  linkLabel = "Összes →",
  as: Heading = "h2",
  children,
}: {
  overline: string;
  title: string;
  href?: string;
  linkLabel?: string;
  as?: "h1" | "h2";
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-2">
        <p className="mt-overline">{overline}</p>
        <Heading className="text-[26px] font-normal tracking-[-0.015em] sm:text-[32px]">{title}</Heading>
      </div>
      {children}
      {href ? (
        <Link href={href} className="text-sm text-accent no-underline hover:underline">
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}

/** The dark monitor card. */
export function Monitor({ children, className = "", flat = false }: { children: ReactNode; className?: string; flat?: boolean }) {
  return (
    <div className={`mt-monitor ${className}`} style={flat ? { boxShadow: "none" } : undefined}>
      {children}
    </div>
  );
}

/** Screen area of a monitor card: YouTube embed when available, otherwise a still with a play badge. */
export function Screen({
  youtubeId,
  title,
  aspect = "aspect-[16/10]",
  play = true,
  playSize = 72,
}: {
  youtubeId?: string;
  title: string;
  aspect?: string;
  play?: boolean;
  playSize?: number;
}) {
  if (youtubeId) {
    return (
      <div className={`relative ${aspect}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className={`relative ${aspect}`}>
      <div className="mt-scanlines" />
      {play ? (
        <div className="mt-play" style={{ width: playSize, height: playSize }} aria-hidden="true">
          <svg width={playSize / 3.6} height={playSize / 3.6} viewBox="0 0 20 20">
            <path d="M5 3l12 7-12 7z" fill="currentColor" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}

/** Writing card: heavy top rule, title, excerpt and a meta line. */
export function WritingCard({
  href,
  title,
  excerpt,
  meta,
  size = "md",
}: {
  href: string;
  title: string;
  excerpt?: string;
  meta?: string;
  size?: "md" | "sm";
}) {
  return (
    <article className="mt-rule-top flex flex-col gap-2.5 pt-5">
      <h3 className={size === "md" ? "text-xl font-semibold leading-tight sm:text-[22px]" : "text-lg font-semibold leading-snug"}>
        <Link href={href} className="text-foreground no-underline hover:text-accent">
          {title}
        </Link>
      </h3>
      {excerpt ? <p className="text-[15px] leading-normal text-muted-foreground">{excerpt}</p> : null}
      {meta ? <p className="text-[13px] text-subtle-foreground">{meta}</p> : null}
    </article>
  );
}

/** Outlined call-to-action box for contributors ("Szerzőknek"). */
export function AuthorsBox({
  text,
  cta,
  href,
}: {
  text: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border p-6">
      <p className="mt-overline">Szerzőknek</p>
      <p className="text-[15px] leading-normal">{text}</p>
      <Link href={href} className="ds-btn ds-btn--outline ds-btn--sm self-start no-underline">
        {cta}
      </Link>
    </div>
  );
}

export function pad2(n: number) {
  return String(n).padStart(2, "0");
}
