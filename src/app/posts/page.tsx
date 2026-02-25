import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Cikkek | Metis Blog",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-foreground">Cikkek</h1>
        <p className="text-muted-foreground">Minden bejegyzés időrendben.</p>
      </div>

      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-xs)]">
            <div className="text-sm text-muted-foreground">{p.frontmatter.date}</div>
            <Link href={`/posts/${p.slug}`} className="block">
              <div className="mt-1 text-lg font-semibold text-foreground hover:text-accent transition-colors">
                {p.frontmatter.title}
              </div>
            </Link>
            <p className="mt-2 text-muted-foreground">{p.frontmatter.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
