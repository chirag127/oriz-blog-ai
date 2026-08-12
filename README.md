# latent

**Live: https://ai-blog.oriz.in**

[![License: MIT](https://img.shields.io/badge/License-MIT-0b6b5a.svg)](./LICENSE)
![Astro](https://img.shields.io/badge/Astro-6-0b6b5a.svg)

A working log on building AI systems that survive production — RAG, tool-using agents, and honest evals. What worked, what broke, and the numbers behind both.

Static Astro blog with a lab-notebook visual identity: cool graph-paper ground, a deep teal plotted-trace signal, a burnt-orange "hot weight" accent, Fraunces display + Newsreader body + Spline Sans Mono for tokens. The hero signature is a **token-probability decoder strip** — the thesis headline's last word rendered as the argmax token over its candidate distribution.

## Stack

- Astro 6 (static), MDX content collection
- Tailwind v4, expressive-code, Pagefind search, KaTeX
- PWA (vite-plugin-pwa), RSS/Atom/JSON feeds

## Develop

```bash
npm install --legacy-peer-deps
npm run dev      # local dev
npm run build    # static build → dist/
```

Posts live in `src/content/blog/*.mdx`. Frontmatter schema is in `src/content.config.ts`.

## Design

Palette, type, and theme modes (light / dark / high-contrast) live in `src/styles/tokens.css`. Base element styles + masthead + prose in `src/styles/global.css`. Each oriz site owns its own look; this one is themed independently.

MIT © Chirag Singhal
