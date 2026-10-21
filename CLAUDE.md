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

**Metis** (metis.name) is a Hungarian-language vlog, podcast and essay site (sociography, debate culture, solidarity) built with Next.js App Router + Static Site Generation. The visual language is the "Metis abstract identity system": Inter, warm off-white, charcoal, teal, the half-circle sign as a background motif, numbered lists and a dark "monitor" card.

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

### Episodes

- Video/podcast episodes of the Életképek, Vita and Beszélgetések sections live in [src/data/episodes.ts](src/data/episodes.ts) (`youtubeId` embeds the player)
- Shared templates: [SectionPage](src/components/site/SectionPage.tsx) and [EpisodePage](src/components/site/EpisodePage.tsx)

### Styling

Tailwind CSS 4 with tokens in [src/app/globals.css](src/app/globals.css) (`--accent` teal, `--monitor-*` for the dark card) plus the `mt-*` identity classes (`mt-overline`, `mt-monitor`, `mt-scanlines`, `mt-num`, `mt-chip`, `mt-prose`). Site chrome and shared pieces are in [src/components/site/](src/components/site/).
- Page width: `Shell` (max 1440px, 64px desktop gutters); reading column 720px
- Light theme only (no dark mode)

### Page Structure

```
src/app/
├── layout.tsx                  # Root layout: SiteHeader, SiteFooter, analytics
├── page.tsx                    # Homepage: newest Életképek episode, episode list, essays, debate
├── eletkepek|vita|beszelgetesek/  # Section pages + [slug] episode pages
├── posts/                      # Esszék index + [slug] reader view
├── about/                      # Author profile (Antal Bálint) + karrier-evolucio
├── rolunk/                     # About the project
└── irj-nekunk/                 # Submission form (opens a pre-filled e-mail; no backend)
```

### Key Notes

- The entire UI and all content is in **Hungarian**
- `PlotlyFigure` is a `"use client"` component; all other components are React Server Components by default
- `dynamic = "force-static"` is set on the post page to allow new posts without a full rebuild
