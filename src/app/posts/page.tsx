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
        <h1 className="text-2xl font-semibold">Cikkek</h1>
        <p className="text-zinc-600">Minden bejegyzés időrendben.</p>
      </div>

      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-xl border border-zinc-200 p-5">
            <div className="text-sm text-zinc-500">{p.frontmatter.date}</div>
            <Link href={`/posts/${p.slug}`} className="block">
              <div className="mt-1 text-lg font-semibold hover:underline">
                {p.frontmatter.title}
              </div>
            </Link>
            <p className="mt-2 text-zinc-600">{p.frontmatter.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}