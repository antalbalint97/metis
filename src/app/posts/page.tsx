import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { formatDateShort, readingMinutes } from "@/lib/format";
import { TAGLINE } from "@/lib/site";
import { GhostStripes } from "@/components/site/MetisMark";
import { AuthorsBox, Shell } from "@/components/site/ui";
import { WritingRow } from "@/components/site/WritingRow";

export const metadata: Metadata = {
  title: "Esszék | Metis",
  description: "Írások, publicisztikák és hosszabb gondolatmenetek. Minden írás időrendben.",
  alternates: { canonical: "/posts" },
  openGraph: { url: "/posts", images: ["https://metis.name/brand/og-default.png"] },
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-6 lg:pb-14 lg:pt-10">
        <GhostStripes
          id="posts-ghost"
          className="pointer-events-none absolute -right-[160px] -top-[120px] w-[420px] lg:-right-[200px] lg:-top-[140px] lg:w-[620px]"
        />
        <Shell className="relative flex max-w-[1440px] flex-col gap-5">
          <p className="mt-tagline">{TAGLINE}</p>
          <h1 className="text-[48px] font-light leading-none tracking-[-0.03em] sm:text-[64px]">Esszék</h1>
          <p className="max-w-[560px] text-base leading-relaxed text-muted-foreground">
            Írások, amelyek egy kérdést végiggondolnak, nem csak felvetnek. Minden írás időrendben.
          </p>
        </Shell>
      </section>

      <section className="pb-20">
        <Shell className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-14">
          <div className="border-t border-border">
            {posts.map((p, i) => (
              <WritingRow
                key={p.slug}
                number={posts.length - i}
                kind={p.frontmatter.seriesTitle ?? "Esszé"}
                title={p.frontmatter.title}
                excerpt={p.frontmatter.excerpt}
                href={`/posts/${p.slug}`}
                metaTop="Antal Bálint"
                metaBottom={`${formatDateShort(p.frontmatter.date)} · ${readingMinutes(p.content)} perc`}
              />
            ))}
          </div>
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <AuthorsBox
              text="Nem hozták le? Küldd be ide. Minden írásra indoklással válaszolunk."
              cta="Beküldés"
              href="/irj-nekunk"
            />
          </aside>
        </Shell>
      </section>
    </>
  );
}
