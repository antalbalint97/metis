import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import { EPISODES, episodeHref } from "@/data/episodes";

const staticPaths = [
  "/",
  "/privacy",
  "/about",
  "/about/karrier-evolucio",
  "/rolunk",
  "/irj-nekunk",
  "/posts",
  "/eletkepek",
  "/vita",
  "/beszelgetesek",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
    })),
    ...EPISODES.map((e) => ({
      url: `${SITE_URL}${episodeHref(e)}`,
      lastModified: new Date(e.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/posts/${post.slug}`,
      lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
