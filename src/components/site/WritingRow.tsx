import Link from "next/link";
import { pad2 } from "./ui";

/** Numbered writing row of the author / essay lists. */
export function WritingRow({
  number,
  kind,
  title,
  excerpt,
  href,
  metaTop,
  metaBottom,
}: {
  number: number;
  kind: string;
  title: string;
  excerpt?: string;
  href: string;
  metaTop?: string;
  metaBottom?: string;
}) {
  return (
    <article className="relative grid grid-cols-[44px_1fr] gap-x-4 gap-y-2 border-b border-border py-6 sm:grid-cols-[72px_1fr_auto] sm:gap-x-8 lg:grid-cols-[104px_1fr_auto]">
      <div className="mt-num text-2xl sm:text-[28px]">{pad2(number)}</div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{kind}</p>
        <h3 className="text-xl font-normal leading-snug sm:text-2xl">
          <Link href={href} className="text-foreground no-underline after:absolute after:inset-0 hover:text-accent">
            {title}
          </Link>
        </h3>
        {excerpt ? <p className="text-[15px] leading-normal text-muted-foreground">{excerpt}</p> : null}
      </div>
      <div className="col-start-2 text-[13px] leading-snug text-subtle-foreground sm:col-start-auto sm:text-right">
        {metaTop ? <div>{metaTop}</div> : null}
        {metaBottom ? <div>{metaBottom}</div> : null}
      </div>
    </article>
  );
}
