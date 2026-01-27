import fs from "fs";
import path from "path";

type Frontmatter = {
  title: string;
  date: string;
  excerpt: string;

  series?: string;
  seriesTitle?: string;
  seriesOrder?: number;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
};

const CONTENT_DIRS = [
  path.join(process.cwd(), "content", "posts"),
  path.join(process.cwd(), "content"),
];

function toOptionalString(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  return s.length ? s : undefined;
}

function toOptionalNumber(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v !== "string") return undefined;
  const n = Number(v.trim());
  return Number.isFinite(n) ? n : undefined;
}

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
  const trimmed = raw.trimStart();

  if (!trimmed.startsWith("---")) {
    return {
      frontmatter: { title: "Untitled", date: "", excerpt: "" },
      content: raw,
    };
  }

  const end = trimmed.indexOf("\n---", 3);
  if (end === -1) {
    return {
      frontmatter: { title: "Untitled", date: "", excerpt: "" },
      content: raw,
    };
  }

  const fmBlock = trimmed.slice(3, end).trim();
  const content = trimmed.slice(end + 4).trimStart();

  const lines = fmBlock.split("\n");
  const fm: Record<string, string> = {};

  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;

    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^"(.*)"$/, "$1");

    fm[key] = value;
  }

  const frontmatter: Frontmatter = {
    title: fm.title ?? "Untitled",
    date: fm.date ?? "",
    excerpt: fm.excerpt ?? "",

    series: toOptionalString(fm.series),
    seriesTitle: toOptionalString(fm.seriesTitle),
    seriesOrder: toOptionalNumber(fm.seriesOrder),
  };

  return { frontmatter, content };
}

function readAllMarkdownFiles(): Array<{ slug: string; fullPath: string }> {
  const out: Array<{ slug: string; fullPath: string }> = [];

  for (const dir of CONTENT_DIRS) {
    if (!fs.existsSync(dir)) continue;

    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

    for (const file of files) {
      const slug = file.replace(/\.mdx?$/, "");
      out.push({ slug, fullPath: path.join(dir, file) });
    }
  }

  const seen = new Set<string>();
  const unique: Array<{ slug: string; fullPath: string }> = [];
  for (const item of out) {
    if (seen.has(item.slug)) continue;
    seen.add(item.slug);
    unique.push(item);
  }

  return unique;
}

export function getAllPosts(): Post[] {
  const files = readAllMarkdownFiles();

  const posts = files.map(({ slug, fullPath }) => {
    const raw = fs.readFileSync(fullPath, "utf8");
    const { frontmatter, content } = parseFrontmatter(raw);
    return { slug, frontmatter, content };
  });

  posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
  return posts;
}

export function getAllSlugs(): string[] {
  return readAllMarkdownFiles().map((x) => x.slug);
}

export function getPostBySlug(slug: string): Post | null {
  const files = readAllMarkdownFiles();
  const hit = files.find((x) => x.slug === slug);
  if (!hit) return null;

  const raw = fs.readFileSync(hit.fullPath, "utf8");
  const { frontmatter, content } = parseFrontmatter(raw);
  return { slug, frontmatter, content };
}