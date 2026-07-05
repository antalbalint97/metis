import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const staticPaths = [
  "/",
  "/privacy",
  "/about",
  "/about/karrier-evolucio",
  "/mentorprogram",
  "/posts",
  "/glossary",
  "/fejlodesi-savok/data-analyst",
  "/fejlodesi-savok/data-scientist",
  "/fejlodesi-savok/machine-learning-engineer",
  "/fejlodesi-savok/software-engineer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/posts/${post.slug}`,
      lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
