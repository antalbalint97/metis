import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { isValidElement } from "react";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { formatDateLong, formatDateShort, readingMinutes } from "@/lib/format";
import { getAllPosts } from "@/lib/posts";
import { GhostStripes } from "@/components/site/MetisMark";
import { Shell, WritingCard, pad2 } from "@/components/site/ui";
import { ShareButton } from "@/components/site/ShareButton";

import { Callout } from "@/components/md/Callout";
import { Code } from "@/components/md/CodeBlock";
import { PlotlyFigure } from "@/components/md/PlotlyFigure";

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const image = post.frontmatter.ogImage
    ? new URL(post.frontmatter.ogImage, SITE_URL).toString()
    : `${SITE_URL}/brand/og-article-default.png`;

  return {
    title: `${post.frontmatter.title} | Metis`,
    description: post.frontmatter.excerpt,
    alternates: { canonical: `/posts/${slug}` },
    openGraph: {
      type: "article",
      locale: "hu_HU",
      url: `/posts/${slug}`,
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      publishedTime: post.frontmatter.date || undefined,
      images: [{ url: image, width: 1200, height: 630, alt: post.frontmatter.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: [image],
    },
  };
}

/** Heading anchor id from its text ("Mi veszik el?" -> "mi-veszik-el"). */
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function textOf(node: unknown): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: unknown }>(node)) return textOf(node.props.children);
  return "";
}

/** Level-2 headings outside code fences, for the section index. */
function extractH2(markdown: string) {
  const out: { id: string; title: string }[] = [];
  let inFence = false;
  for (const line of markdown.split("\n")) {
    if (line.trim().startsWith("```")) inFence = !inFence;
    const m = !inFence && /^##\s+(.+?)\s*#*$/.exec(line);
    if (m) {
      const title = m[1].replace(/[*_`]/g, "");
      out.push({ id: slugify(title), title });
    }
  }
  return out;
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

  const minutes = readingMinutes(post.content);
  const allPosts = getAllPosts();
  const number = allPosts.length - allPosts.findIndex((p) => p.slug === slug);
  const sections = extractH2(post.content);
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
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date || undefined,
    inLanguage: "hu-HU",
    url: `${SITE_URL}/posts/${slug}`,
    mainEntityOfPage: `${SITE_URL}/posts/${slug}`,
    image: post.frontmatter.ogImage
      ? new URL(post.frontmatter.ogImage, SITE_URL).toString()
      : `${SITE_URL}/brand/og-article-default.png`,
    author: { "@type": "Person", name: "Antal Bálint", url: `${SITE_URL}/about` },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#antal-balint`,
      name: "Antal Bálint",
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/images/balint.jpg`,
    },
  };

  const related = [
    ...seriesItems.filter((x) => x.slug !== slug && (x === prevItem || x === nextItem)),
    ...allPosts
      .filter((p) => p.slug !== slug && p.slug !== prevItem?.slug && p.slug !== nextItem?.slug)
      .map((p) => ({ slug: p.slug, title: p.frontmatter.title, excerpt: p.frontmatter.excerpt, date: p.frontmatter.date })),
  ].slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative overflow-hidden pb-12 pt-6 lg:pb-14 lg:pt-10">
        <GhostStripes
          id="post-ghost"
          className="pointer-events-none absolute -right-[160px] -top-[120px] w-[380px] lg:-right-[200px] lg:-top-[140px] lg:w-[620px]"
        />
        <Shell className="relative grid items-end gap-6 lg:grid-cols-[72px_1fr_360px] lg:gap-8">
          <div className="mt-num hidden text-[28px] lg:block">E·{pad2(number)}</div>
          <header className="flex flex-col gap-5">
            <p className="mt-overline">
              {seriesTitleToShow ?? "Esszé"}
              {post.frontmatter.date ? ` · ${formatDateLong(post.frontmatter.date)}` : null}
            </p>
            <h1 className="max-w-[820px] text-[36px] font-light leading-[1.08] tracking-[-0.025em] [text-wrap:balance] sm:text-[56px]">
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.excerpt ? (
              <p className="max-w-[720px] text-lg leading-normal text-muted-foreground [text-wrap:pretty] sm:text-xl">
                {post.frontmatter.excerpt}
              </p>
            ) : null}
          </header>
          <div className="mt-rule-top flex flex-col gap-3.5 pb-1 pt-5">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/balint.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-muted object-cover" />
              <div className="flex flex-col">
                <Link href="/about" className="text-[15px] font-semibold text-foreground no-underline hover:text-accent">
                  Antal Bálint
                </Link>
                <span className="text-[13px] text-subtle-foreground">{minutes} perc olvasás</span>
              </div>
            </div>
            <div className="flex gap-2">
              <ShareButton title={post.frontmatter.title} />
            </div>
          </div>
        </Shell>
      </section>

      <Shell className="grid gap-12 pb-20 lg:grid-cols-[72px_minmax(0,720px)_1fr] lg:gap-8">
        <nav aria-label="Szakaszok" className="hidden lg:sticky lg:top-6 lg:flex lg:flex-col lg:gap-3.5 lg:self-start lg:pt-1.5">
          {sections.map((sec, i) => (
            <a key={sec.id} href={`#${sec.id}`} title={sec.title} className="text-[13px] text-subtle-foreground no-underline hover:text-accent">
              {pad2(i + 1)}
            </a>
          ))}
        </nav>

        <article className="min-w-0">
          <div className="mt-prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={
                {
                  code: Code,

                  h2: ({ children }: { children?: React.ReactNode }) => (
                    <h2 id={slugify(textOf(children))}>{children}</h2>
                  ),

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
                      <p className="my-7 [text-wrap:pretty]" {...props}>
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
            <section className="mt-14 border-t border-border pt-8">
              <p className="mt-overline">Cikksorozat</p>
              <h2 className="mt-2 text-2xl font-normal tracking-[-0.015em]">{seriesTitleToShow}</h2>
              <ol className="mt-6 border-t border-border">
                {seriesItems.map((it, i) => {
                  const isCurrent = it.slug === slug;
                  return (
                    <li key={it.slug} className="grid grid-cols-[40px_1fr] gap-3 border-b border-border py-3.5">
                      <span className={isCurrent ? "text-lg text-accent" : "mt-num text-lg"}>
                        {pad2(typeof it.seriesOrder === "number" ? it.seriesOrder : i + 1)}
                      </span>
                      {isCurrent ? (
                        <span className="text-base font-semibold" aria-current="page">{it.title}</span>
                      ) : (
                        <Link href={`/posts/${it.slug}`} className="text-base text-foreground no-underline hover:text-accent">
                          {it.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
              <div className="mt-6 flex flex-wrap justify-between gap-4 text-sm">
                {prevItem ? (
                  <Link href={`/posts/${prevItem.slug}`} className="text-accent no-underline hover:underline">
                    ← Előző rész
                  </Link>
                ) : <span />}
                {nextItem ? (
                  <Link href={`/posts/${nextItem.slug}`} className="text-accent no-underline hover:underline">
                    Következő rész →
                  </Link>
                ) : null}
              </div>
            </section>
          ) : null}

          <div className="mt-rule-top mt-12 flex flex-wrap items-center justify-between gap-6 pt-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-lg font-semibold">Válaszolnál erre az írásra?</span>
              <span className="text-sm text-muted-foreground">Az ellenvéleményeket ugyanúgy lehozzuk.</span>
            </div>
            <Link
              href={`/irj-nekunk?tipus=valasz&cikk=${encodeURIComponent(post.frontmatter.title)}`}
              className="ds-btn ds-btn--primary ds-btn--md no-underline"
              data-cta-id="post_reply"
              data-analytics-placement="post_footer"
            >
              Válasz beküldése
            </Link>
          </div>
        </article>

        {related.length ? (
          <aside className="flex flex-col gap-7 lg:sticky lg:top-6 lg:self-start lg:pl-4">
            <p className="mt-overline">Kapcsolódó</p>
            {related.map((r) => (
              <WritingCard
                key={r.slug}
                href={`/posts/${r.slug}`}
                title={r.title}
                excerpt={r.excerpt}
                meta={`Antal Bálint${r.date ? ` · ${formatDateShort(r.date)}` : ""}`}
              />
            ))}
          </aside>
        ) : null}
      </Shell>
    </>
  );
}
