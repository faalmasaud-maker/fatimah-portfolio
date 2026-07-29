# Fatimah AL Masaud — Portfolio

Bilingual portfolio site (Arabic default, English secondary) for a Business
Systems Analyst. Static, no backend.

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, next-intl,
Framer Motion, lucide-react.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000 — redirects to /ar
npm run build    # production build
npm run start    # serve the production build
```

## Deploy

Fully static: no API routes, no database, no server-side data, no environment
secrets. `npm run build` prerenders `/ar` and `/en` via `generateStaticParams`.
Push to a Git host and import into Vercel or Netlify — the defaults for a
Next.js project work as-is.

**Set your domain before going live.** `src/app/[locale]/layout.tsx` reads
`NEXT_PUBLIC_SITE_URL` for canonical and Open Graph URLs. Add it as an
environment variable in your host's dashboard, e.g.
`NEXT_PUBLIC_SITE_URL=https://your-domain.com`. Without it the build falls back
to `http://localhost:3000`, which is harmless locally but wrong in production.

## Fonts

Inter, Playfair Display and Tajawal are pulled by `next/font/google` at **build
time** and served from your own domain. The site makes no runtime request to
Google.

Thmanyah is optional and self-hosted. Drop the woff2 files into
`public/fonts/thmanyah/` with exactly these names:

```
ThmanyahDisplay-Light.woff2     300    ThmanyahText-Light.woff2     300
ThmanyahDisplay-Regular.woff2   400    ThmanyahText-Regular.woff2   400
ThmanyahDisplay-Medium.woff2    500    ThmanyahText-Medium.woff2    500
ThmanyahDisplay-Bold.woff2      700
ThmanyahDisplay-Black.woff2     900
```

Display is used for Arabic headings and the wordmark, Text for Arabic body
copy. Until the files are present, Arabic falls back to Tajawal and nothing
breaks.

## Structure

```
src/
  app/
    layout.tsx                minimal root; imports globals.css
    globals.css               @font-face, design tokens, base layer, utilities
    [locale]/
      layout.tsx              fonts, html lang+dir, no-flash theme script,
                              providers, per-locale metadata
      page.tsx                assembles the nine sections
  components/
    ui/                       button.tsx, card.tsx
    shared/                   navbar, footer, intro-moment, signature-field,
                              theme-provider, theme-toggle, language-switcher,
                              reveal, section-heading
    sections/                 hero, about, skills, membership, projects,
                              cv, tools, roles, contact
  data/portfolio.ts           structure only: bento spans, icon keys, nav,
                              tool list, contact URLs — no user-facing strings
  i18n/                       routing.ts, request.ts
  lib/utils.ts                cn()
messages/                     ar.json, en.json — every user-facing string
public/cv/                    the downloadable CV
public/fonts/thmanyah/        optional Arabic font files
```

## Editing content

All copy lives in `messages/ar.json` and `messages/en.json`. Nothing
user-facing is hardcoded in components, so text changes never require touching
code.

Two entries are bilingual by design and appear in both files:
`intro.lineEn` / `intro.lineAr` (the opening screen shows both languages).

## Colour system

Every colour resolves through a semantic token declared in `globals.css` and
mapped in `tailwind.config.ts`. No component contains a raw hex value, so the
palette is enforceable rather than a convention.

- `--bg-base` `--bg-surface` `--bg-elevated` `--bg-invert`
- `--ink-primary` `--ink-secondary` `--ink-muted` `--ink-subtle` `--ink-invert`
- `--accent` `--accent-deep`, `--grad-1..3`, `--edge` `--edge-strong` `--edge-subtle`
- background intensity: `--mesh-a` `--mesh-b` `--trail`, glass: `--glass-*`

Palette is navy and blue (HSL hue 200–245) plus neutrals, white and black.
Because every colour is an HSL triplet, scanning `globals.css` for a hue
outside 200–245 with non-zero saturation finds any drift.

Measured contrast, each token against its own theme background:

| token | dark | light | target |
|---|---|---|---|
| ink-primary | 17.19:1 | 15.26:1 | ≥ 7 |
| ink-secondary | 11.35:1 | 9.01:1 | ≥ 4.5 |
| ink-muted | 7.15:1 | 5.60:1 | ≥ 4.5 |
| accent | 6.72:1 | 6.81:1 | ≥ 4.5 |

`ink-subtle` (3.85 / 2.91) is decorative only — hairlines and the scroll hint,
never body text.

## Theme

Custom provider in `components/shared/theme-provider.tsx` (React context +
localStorage). `themeBootstrapScript` is inlined in `<head>` and sets
`.dark`/`.light` on `<html>` before first paint, so there is no flash. Dark is
the default.

## The display name

`hero.name_display` in `messages/ar.json` holds the Arabic name with twelve
U+0640 tatweel characters, which produce the extended letterforms. It is
rendered in the navbar wordmark, the hero heading and the footer, each wrapped
in `.keep-tatweel` (`font-variant-ligatures: none`) so font shaping cannot
collapse it.

Do not normalise or "clean up" this string — stripping the tatweel silently
changes the wordmark. The hero and navbar both measure the rendered text after
fonts load and scale it to fit on one line, so swapping the Arabic font cannot
break the layout.

## Accessibility

Every entrance animation, the opening screen and the background motion are
disabled under `prefers-reduced-motion: reduce`.
