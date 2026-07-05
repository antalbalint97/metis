import { ArticleCard, PageContainer, SectionHeader } from "@meniva/design-system";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Cikkek | Metis",
  description: "Magyar cikkek adatelemzésről, statisztikáról, SQL-ről és Pythonról.",
  alternates: { canonical: "/posts" },
  openGraph: { url: "/posts", images: ["https://metis.name/brand/og-default.png"] },
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <PageContainer size="wide" className="space-y-8 py-10 sm:py-14">
      <SectionHeader as="h1" title="Cikkek" description="Minden bejegyzés időrendben." />

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <ArticleCard
            key={p.slug}
            href={`/posts/${p.slug}`}
            title={p.frontmatter.title}
            excerpt={p.frontmatter.excerpt}
            date={p.frontmatter.date}
            cta="Olvasd el"
          />
        ))}
      </div>
    </PageContainer>
  );
}
