import fs from "fs";
import path from "path";
import type { NextConfig } from "next";

/** Slugs of posts marked `hidden: true`: their URLs redirect to the essay list. */
function hiddenPostSlugs(): string[] {
  const dir = path.join(process.cwd(), "content", "posts");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && /^hidden:\s*"?true"?\s*$/m.test(fs.readFileSync(path.join(dir, f), "utf8")))
    .map((f) => f.replace(/\.md$/, ""));
}

const nextConfig: NextConfig = {
  // Consume the local design system, which ships raw TypeScript source.
  transpilePackages: ["@meniva/design-system"],
  async redirects() {
    return [
      // Pages retired in the 2026 identity redesign.
      { source: "/fejlodesi-savok/:path*", destination: "/", permanent: true },
      { source: "/mentorprogram", destination: "/rolunk", permanent: true },
      { source: "/glossary", destination: "/posts", permanent: true },
      { source: "/esszek", destination: "/posts", permanent: true },
      // Pre-redesign data-education articles, kept in content/posts but hidden.
      // Temporary, so a post can be restored by removing its flag.
      ...hiddenPostSlugs().map((slug) => ({ source: `/posts/${slug}`, destination: "/posts", permanent: false })),
      {
        source: "/:path*",
        has: [{ type: "host", value: "metis-pi-five.vercel.app" }],
        destination: "https://metis.name/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.metis.name" }],
        destination: "https://metis.name/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (process.env.VERCEL_ENV !== "preview") return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
