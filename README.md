# Bella — Premium Drinking Water

Static, SEO-optimized, multilingual marketing site for Bella (Eastern Food &
Beverage Pvt. Ltd.), built with Next.js (App Router), TypeScript, Tailwind
CSS, shadcn/ui and next-intl.

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router), static export (`output: "export"`) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui (Radix primitives) |
| i18n | next-intl — English + Nepali live; 5 more languages staged |
| Theming | next-themes (light / dark, system-aware) |
| Forms | react-hook-form + zod, posts to an external form endpoint |
| Icons | lucide-react (+ hand-rolled social icons — see below) |

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000 → redirects to /en/
```

```bash
npm run build      # static export → out/
npm run lint
```

`npm run build` produces a plain HTML/CSS/JS site in `out/`, deployable to
any static host (Netlify, Cloudflare Pages, S3, GitHub Pages, cPanel...).
There is no Node server and no API routes at runtime.

## Folder structure

```
src/
  app/
    layout.tsx              Bare pass-through root layout (no <html>/<body> — see file comment)
    not-found.tsx            Root 404 (paths outside /[locale])
    sitemap.ts / robots.ts / manifest.ts   Generated from config, not hardcoded
    [locale]/
      layout.tsx              Real <html> document: fonts, ThemeProvider, NextIntlClientProvider, Header/Footer
      page.tsx                 Home
      our-story/page.tsx
      purity/page.tsx
      products/page.tsx
      quality/page.tsx
      business/page.tsx
      contact/page.tsx
      privacy-policy/page.tsx
      terms-and-conditions/page.tsx
      not-found.tsx            Localized 404

  components/
    ui/            shadcn/ui primitives (button, card, dialog, select, ...) — regenerate via `npx shadcn add <name>`
    layout/        Header, Footer, Logo, LanguageSwitcher, WhatsAppFloatButton
    theme/         ThemeProvider, ThemeToggle
    shared/        Cross-page building blocks: Container, SectionHeading, IconFeature,
                    StepCard, PageHero, CTABanner, MineralComposition, RatingStars,
                    TestimonialCard, CertificateCard, JsonLd
    product/       ProductCard
    icons/         Hand-rolled Facebook/Instagram/YouTube icons (lucide-react dropped brand logos)
    sections/      One folder per page, one file per section — this is where page content lives
      home/ our-story/ purity/ products/ quality/ business/ contact/

  config/
    site.ts         Business info, nav structure, footer columns — single source of truth
    languages.ts     Every supported language (active + staged) — see "Adding a language" below

  data/             Typed content arrays (products, purification steps, minerals,
                    certifications, business opportunities, testimonials) — icons/slugs
                    live here, display text lives in messages/*.json

  i18n/
    routing.ts       next-intl locale list + prefix strategy
    navigation.ts     Locale-aware Link / router / usePathname
    request.ts        Loads messages/<locale>.json per request

  lib/
    seo.ts           generateMetadata helper: canonical URL, hreflang alternates, OG/Twitter
    schema.ts         JSON-LD builders (Organization, BreadcrumbList, Product, FAQ)
    forms.ts          Static-export-friendly form submission + mailto fallback
    utils.ts           cn() (shadcn's clsx+tailwind-merge helper)

  types/            Shared TypeScript types

messages/
  en.json, ne.json    All UI copy, one file per locale, same key shape

public/
  images/            See public/images/README.md for the exact filenames every
                      component expects — drop assets in, no code changes needed
  index.html          Zero-JS meta-refresh to /en/ — makes "/" work on any static
                      host without server config (see next section)
```

## How i18n + static export fit together

The site has **no server at runtime** (`output: "export"`), which rules out
Next.js middleware and rewrites in production. Two things route locale entry
without them:

1. **`middleware.ts`** — still present and correct for `next dev` / `next
   start` / any Node deploy target. Redirects `/` → `/en/` and negotiates
   `Accept-Language`. Has no effect once exported to static files.
2. **`public/index.html`** — a static meta-refresh to `/en/`, copied verbatim
   into `out/index.html`. This is what actually fires on a static host,
   since static file servers serve `index.html` for `/` by default.

Locale URLs are simple, unlocalized slugs (`/en/our-story`, `/ne/our-story` —
not `/ne/hamro-kahani`), because translated pathnames require Next.js
rewrites, which don't exist in a static export. See the comment in
`src/i18n/routing.ts`.

## Adding a language

1. Open `src/config/languages.ts`, find the language (Maithili, Bhojpuri,
   Rajbanshi, Tamang and Tharu/Chaudhary are already listed as `active:
   false`), flip it to `active: true`.
2. Copy `messages/en.json` to `messages/<code>.json` and translate every
   string (same keys, same nesting — nothing else to configure).
3. `npm run build` — the language switcher, `[locale]` static params,
   sitemap, and hreflang alternates all pick it up automatically.

## Adding a page

1. Add a route folder under `src/app/[locale]/<slug>/page.tsx`.
2. Add its content as section components under `src/components/sections/<slug>/`.
3. Add nav/footer entries in `src/config/site.ts` if it should appear in navigation.
4. Add `nav.<slug>` and `seo.<slug>` keys to **both** `messages/en.json` and `messages/ne.json`.
5. Add the path to `src/app/sitemap.ts`.

## Forms (Contact, Business partner inquiry)

Static export means there's no API route to receive submissions. Set
`NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`) to a form backend
(Formspree, Getform, Basin, or your own serverless endpoint) that accepts a
JSON POST. Without it configured, both forms fall back to opening a
pre-filled `mailto:` link — see `src/lib/forms.ts`.

## Brand theming

All brand colors are CSS custom properties in `src/app/globals.css`
(`--brand-navy`, `--brand-navy-deep`, `--brand-green`, `--brand-sky`,
`--whatsapp`), each defined once for light mode and once for `.dark`. Change
those two blocks to re-skin the entire site — every component reads from the
shared Tailwind tokens (`bg-brand-navy`, `text-brand-green`, etc.), not
hardcoded hex values.

## SEO

- Per-page `generateMetadata` (canonical URL, hreflang alternates for every
  active locale + x-default, Open Graph, Twitter cards) via `src/lib/seo.ts`.
- JSON-LD: sitewide `LocalBusiness` schema in the locale layout, per-page
  `BreadcrumbList` — see `src/lib/schema.ts`.
- `src/app/sitemap.ts` and `src/app/robots.ts` are generated from the same
  page list + language config, not hand-maintained XML/text files.
