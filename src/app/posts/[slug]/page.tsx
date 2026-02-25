import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { isValidElement } from "react";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

import { Callout } from "@/components/md/Callout";
import { Code } from "@/components/md/CodeBlock";
import { PlotlyFigure } from "@/components/md/PlotlyFigure";

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function estimateReadingTimeMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const wpm = 220;
  return Math.max(1, Math.round(words / wpm));
}

/**
 * Convert "  \n" -> "\n\n" outside code fences to create real paragraphs.
 */
function normalizeHardBreaks(input: string) {
  const lines = input.split("\n");
  const out: string[] = [];
  let inFence = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("```")) inFence = !inFence;

    if (!inFence && line.endsWith("  ")) {
      out.push(line.slice(0, -2));
      out.push("");
      continue;
    }

    out.push(line);
  }

  return out.join("\n");
}

type SeriesItem = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  series?: string;
  seriesTitle?: string;
  seriesOrder?: number;
};

function safeNumber(n: unknown) {
  return typeof n === "number" && Number.isFinite(n) ? n : undefined;
}

function safeIntFromAttr(v: unknown) {
  if (typeof v === "number" && Number.isFinite(v)) return Math.trunc(v);
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v);
    if (Number.isFinite(n)) return Math.trunc(n);
  }
  return undefined;
}

function hasBlockChild(children: any): boolean {
  const arr = Array.isArray(children) ? children : [children];

  const blockLikeTags = new Set([
    "div",
    "figure",
    "table",
    "pre",
    "blockquote",
    "ul",
    "ol",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "details",
    "plotly",
    "callout",
    "calc",
  ]);

  return arr.some((c) => {
    if (!c) return false;

    // plain text -> not block
    if (typeof c === "string") return false;

    // If it's a React element: treat any component child as block-like
    // This is the crucial part: <plotly> renderer is a function component child inside <p>.
    if (isValidElement(c)) {
      const t: any = c.type;

      // HTML tag
      if (typeof t === "string") return blockLikeTags.has(t);

      // Function / component
      if (typeof t === "function") return true;

      return false;
    }

    return false;
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const minutes = estimateReadingTimeMinutes(post.content);
  const content = normalizeHardBreaks(post.content);

  const currentSeries = post.frontmatter.series as string | undefined;
  const currentSeriesTitle = post.frontmatter.seriesTitle as string | undefined;
  const currentOrder = safeNumber(post.frontmatter.seriesOrder);

  let seriesItems: SeriesItem[] = [];
  let prevItem: SeriesItem | null = null;
  let nextItem: SeriesItem | null = null;

  if (currentSeries) {
    const slugs = getAllSlugs();

    seriesItems = slugs
    .flatMap((s) => {
      const p = getPostBySlug(s);
      if (!p) return [];

      const fm = p.frontmatter as any;

      const item: SeriesItem = {
        slug: s,
        title: fm.title ?? "",
        excerpt: fm.excerpt ?? "",
        date: fm.date ?? "",
        series: fm.series,
        seriesTitle: fm.seriesTitle,
        seriesOrder: safeNumber(fm.seriesOrder),
      };

      return [item];
    })
    .filter((x) => x.series === currentSeries)
    .sort((a, b) => {
      const ao = a.seriesOrder ?? 999999;
      const bo = b.seriesOrder ?? 999999;
      if (ao !== bo) return ao - bo;

      const ad = a.date ?? "";
      const bd = b.date ?? "";
      return ad.localeCompare(bd);
    });

    if (typeof currentOrder === "number") {
      prevItem =
        seriesItems.find((x) => x.seriesOrder === currentOrder - 1) ?? null;
      nextItem =
        seriesItems.find((x) => x.seriesOrder === currentOrder + 1) ?? null;
    } else {
      const idx = seriesItems.findIndex((x) => x.slug === slug);
      prevItem = idx > 0 ? seriesItems[idx - 1] : null;
      nextItem =
        idx >= 0 && idx < seriesItems.length - 1 ? seriesItems[idx + 1] : null;
    }
  }

  const seriesTitleToShow =
    currentSeriesTitle ?? (currentSeries ? "Cikksorozat" : undefined);

  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{post.frontmatter.date}</span>
          <span className="text-border-strong">•</span>
          <span>{minutes} perc olvasás</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.frontmatter.title}
        </h1>

        {post.frontmatter.excerpt ? (
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.frontmatter.excerpt}
          </p>
        ) : null}
      </header>

      <div
        className="
          max-w-none leading-7 text-foreground

          [&_p]:my-7
          [&_li>p]:my-0

          [&_h2]:mt-16 [&_h2]:mb-6
          [&_h2]:text-2xl sm:[&_h2]:text-3xl
          [&_h2]:font-semibold [&_h2]:tracking-tight
          [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-3

          [&_h3]:mt-10 [&_h3]:mb-4
          [&_h3]:text-xl sm:[&_h3]:text-2xl
          [&_h3]:font-semibold [&_h3]:tracking-tight

          [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-accent

          [&_p+ul]:mt-4
          [&_p+ol]:mt-4
          [&_ul]:my-1 [&_ul]:list-disc [&_ul]:pl-6
          [&_ol]:my-1 [&_ol]:list-decimal [&_ol]:pl-6
          [&_li]:my-0.5 [&_li]:pl-1

          [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-border
          [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground

          [&_hr]:my-10 [&_hr]:border-border

          [&_details]:my-8
          [&_summary]:cursor-pointer
          [&_summary]:select-none

          [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse
          [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:p-3 [&_th]:text-left [&_th]:text-foreground
          [&_td]:border [&_td]:border-border [&_td]:p-3
        "
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={
          {
          code: Code,


          p: ({ node, children, ...props }: any) => {
          if (node?.parent?.type === "listItem") {
          if (hasBlockChild(children)) {
          return (
          <div className="my-2" {...props}>
          {children}
          </div>
          );
          }


          return (
          <p className="my-0" {...props}>
          {children}
          </p>
          );
          }


          if (hasBlockChild(children)) {
          return (
          <div className="my-7" {...props}>
          {children}
          </div>
          );
          }


          return (
          <p className="my-7" {...props}>
          {children}
          </p>
          );
          },


          callout: ({ node, ...props }: any) => {
          return <Callout title={props.title}>{props.children}</Callout>;
          },


          plotly: ({ node, ...props }: any) => {
          const height = safeIntFromAttr(props.height) ?? 420;
          return <PlotlyFigure id={props.id} height={height} />;
          },
          } as any
          }
          >
          {content}
          </ReactMarkdown>
      </div>

      {currentSeries && seriesItems.length > 0 ? (
        <section className="border-t border-border pt-10">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Cikksorozat</p>
              <h2 className="text-2xl font-semibold tracking-tight">
                {seriesTitleToShow}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-sm text-muted-foreground">Előző rész</p>
                {prevItem ? (
                  <Link
                    href={`/posts/${prevItem.slug}`}
                    className="mt-2 block font-medium text-foreground underline underline-offset-4 hover:text-accent transition-colors"
                  >
                    {prevItem.title}
                  </Link>
                ) : (
                  <p className="mt-2 text-muted-foreground">Nincs (ez az első rész).</p>
                )}
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-sm text-muted-foreground">Következő rész</p>
                {nextItem ? (
                  <Link
                    href={`/posts/${nextItem.slug}`}
                    className="mt-2 block font-medium text-foreground underline underline-offset-4 hover:text-accent transition-colors"
                  >
                    {nextItem.title}
                  </Link>
                ) : (
                  <p className="mt-2 text-muted-foreground">Nincs (ez az utolsó rész).</p>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-sm text-muted-foreground">Összes rész</p>

              <ol className="mt-3 space-y-2">
                {seriesItems.map((it) => {
                  const isCurrent = it.slug === slug;

                  return (
                    <li key={it.slug} className="flex items-start gap-3">
                      <span className="mt-0.5 text-sm text-muted-foreground">
                        {typeof it.seriesOrder === "number"
                          ? `${it.seriesOrder}.`
                          : "•"}
                      </span>

                      {isCurrent ? (
                        <div>
                          <p className="font-medium text-foreground">{it.title}</p>
                          {it.excerpt ? (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {it.excerpt}
                            </p>
                          ) : null}
                        </div>
                      ) : (
                        <div>
                          <Link
                            href={`/posts/${it.slug}`}
                            className="font-medium text-foreground underline underline-offset-4 hover:text-accent transition-colors"
                          >
                            {it.title}
                          </Link>
                          {it.excerpt ? (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {it.excerpt}
                            </p>
                          ) : null}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
