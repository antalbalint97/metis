# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build (also runs static generation)
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Metis Blog** is a Hungarian-language data education blog built with Next.js App Router + Static Site Generation.

### Content System

- Blog posts are `.md` files in `/content/posts/` with YAML frontmatter
- Frontmatter fields: `title`, `date`, `excerpt`, and optionally `series`, `seriesTitle`, `seriesOrder`
- [src/lib/posts.ts](src/lib/posts.ts) handles all file-system reading, frontmatter parsing, and reading-time calculation at build time
- Routes are statically generated from slugs via `generateStaticParams()` in [src/app/posts/[slug]/page.tsx](src/app/posts/[slug]/page.tsx)
- Interactive chart specs are stored as Plotly JSON in `/public/plots/` and referenced from post frontmatter

### Markdown Rendering

Posts render via `react-markdown` with custom component overrides in [src/components/md/](src/components/md/):
- `CodeBlock.tsx` — syntax-highlighted code; `language="calc"` renders calculation blocks, `language="python"` gets special styling
- `PlotlyFigure.tsx` — client component that fetches `/public/plots/*.json` and renders interactive Plotly charts
- `Callout.tsx` — highlighted callout boxes
- `Figure.tsx` — static image figures

Plugins in use: `remark-gfm`, `rehype-raw`, `rehype-slug`.

### Styling

Tailwind CSS 4 with custom CSS variables defined in [src/app/globals.css](src/app/globals.css):
- `--color-primary`, `--color-secondary`, `--color-muted`, `--color-foreground`, `--color-border`, `--color-surface`
- Max-width containers: `740px` for main content, `1040px` for wider sections
- Light theme only (no dark mode)

### Page Structure

```
src/app/
├── layout.tsx              # Root layout — header, nav, footer
├── page.tsx                # Homepage with hero + testimonials carousel
├── posts/[slug]/page.tsx   # Dynamic blog post renderer
├── glossary/               # Glossary page
├── about/                  # About page
├── mentorprogram/          # Mentor program landing page
└── fejlodesi-savok/        # 4 learning path pages (data-analyst, data-scientist, machine-learning-engineer, software-engineer)
```

Shared testimonial data lives in [src/data/testimonials.ts](src/data/testimonials.ts) and is consumed by both the homepage and the mentor program page.

### Key Notes

- The entire UI and all content is in **Hungarian**
- `PlotlyFigure` is a `"use client"` component; all other components are React Server Components by default
- `dynamic = "force-static"` is set on the post page to allow new posts without a full rebuild
