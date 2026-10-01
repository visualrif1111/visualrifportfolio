# VISUALRIF — Claude Code Guide

Portfolio and business platform for **visualrif.com** (Arif Tariq / VISUALRIF, multidisciplinary designer, Brighton & Hove).

> **Migration in progress.** `main` is the live Vite SPA. The `next-migration` branch is moving the site to Next.js and adding the backend below. Each section marks what **exists today** vs what is the **target**. Do not document a service as live until it is implemented and merged.

---

## Migration status

| Layer | Target | Status |
|---|---|---|
| Frontend | Next.js (App Router) + React + TypeScript + Tailwind CSS v4 | `next-migration`: Next.js 16.3.7, React 19.3, TypeScript strict, Tailwind 4 — done. `main`: still Vite 6 + React 18 + React Router 7 |
| CMS | Sanity (content, case studies, SEO fields, Visual Editing) | Not started — content is hard-coded in TSX |
| CRM | Attio (people, companies, leads, deals, pipeline) | Not started |
| Email | Resend (transactional) | Not started |
| Monitoring | Sentry | Not started |
| Security | Cloudflare Turnstile, Redis (rate limiting), Zod (validation) | Not started |
| SEO | Sanity SEO fields, Next.js Metadata API, JSON-LD, `app/sitemap.ts`, `app/robots.ts` | Static site-wide metadata in `app/layout.tsx` (same tags as the old `index.html`); no sitemap/robots/JSON-LD yet; `/og-image.png` does not exist |
| Search tooling | Google Search Console, Ahrefs Webmaster Tools (external) | Not verified |
| Analytics | Vercel Web Analytics | `<Analytics />` in `app/layout.tsx` on `next-migration`; already enabled on the Vercel project |
| Hosting | Vercel | Live (Vite preset, deploys `main`) |

Update this table as each phase merges.

---

## Responsibilities — one job per platform

| Platform | Owns | Never use it for |
|---|---|---|
| **Sanity** | Website content: projects, case studies, categories, services, experience, testimonials, journal, homepage/about/contact copy, navigation, site settings, SEO fields | People, leads or anything from the enquiry form |
| **Attio** | People, companies, leads, deals, the sales pipeline | Website content |
| **Resend** | Transactional email (internal enquiry notification, client acknowledgement) | Marketing lists, storing enquiries |
| **Redis** | Rate limiting, idempotency keys, short-lived enquiry outbox for CRM retries | Permanent storage |
| **Turnstile** | Bot protection on public forms | — |
| **Zod** | Shared validation schemas (client for UX, server always) | — |
| **Sentry** | Frontend/server errors and integration failures | Storing enquiry contents (scrub PII) |
| **Vercel Web Analytics** | Visitor/traffic analytics | — |
| **Search Console** | Google indexing and organic search performance | — |
| **Ahrefs Webmaster Tools** | External SEO audits, backlinks, technical SEO | Not installed as a site script |
| **Next.js** | Rendering, routing, API route handlers, metadata | — |
| **Vercel** | Hosting, previews, env vars | — |

### Attio pipeline (deal stages)
New Enquiry → Qualifying → Discovery → Proposal → Negotiation → Won → Project Active → Completed → Retainer / Follow-up.
Stage names, object/list slugs and attribute IDs come from configuration/env — never hard-code Attio IDs in components.

---

## Architecture (target)

### Enquiry flow
```
Form (client, Zod for UX)
  → POST /api/enquiry
  → Turnstile verification (server)
  → Zod validation (server, always)
  → Redis rate limit (+ idempotency key)
  → persist to Redis outbox
  → Attio: upsert person → upsert company → create lead/deal
  → Resend: internal notification, then client acknowledgement
  → Sentry on any failure; outbox retried so no enquiry is lost
```
- Integrations live only in `lib/` (e.g. `lib/attio/{client,contacts,companies,leads,deals,types}.ts`, `lib/resend/`, `lib/redis/`, `lib/turnstile/`). Components never call external APIs directly.
- Visitors see generic errors only — never stack traces, upstream API messages or credentials.
- Do not send an acknowledgement email unless the server accepted the enquiry.
- Tracking fields (landing page, referrer, UTM source/medium/campaign/content) are captured silently and sent to Attio only.

### Security
- Secrets are server-only. Only `NEXT_PUBLIC_*` values may reach the browser.
- Verify Turnstile server-side; validate every external input with Zod; rate-limit every public mutation endpoint (limits configured centrally; don't key on IP alone).
- Verify webhook signatures (e.g. Sanity revalidation). Least-privilege tokens for Sanity and Attio.
- Security headers (CSP allowing YouTube, Turnstile, Sanity, Sentry, Google Fonts, Vercel Analytics).
- `/admin` must not exist until an auth solution is approved — server-side session checks, no client-only protection.

### SEO
- Site defaults + per-page overrides via `generateMetadata()` from Sanity's reusable SEO object. Strip stega/Visual Editing characters from metadata.
- JSON-LD (Person, WebSite, ProfessionalService, CreativeWork, BreadcrumbList) only where it matches visible content.
- `app/sitemap.ts` from static routes + published, indexable Sanity documents; `app/robots.ts` references it and blocks `/studio`, `/admin`, `/api`.
- Search Console / Ahrefs verification tokens come from env — never invent them.

---

## Directory structure

### Today (`main`)
```
index.html               # entry — title and SEO meta tags
vite.config.ts           # includes the figma:asset/ resolver → src/assets
vercel.json              # SPA rewrite: all paths → /index.html
src/
  main.tsx
  app/
    App.tsx              # CustomCursor + RouterProvider
    Root.tsx             # layout: ScrollToTop, ScrollProgress, AnimatedBackground, teal route wipe, page fade, CookieBanner
    routes.tsx           # all routes
    Home.tsx             # single-page home (hero, about, timeline, projects)
    InvestInUK.tsx, Swiftrooms.tsx, MoncksOfDoverStreet.tsx, SunilGavaskar.tsx,
    DiversionAudio.tsx, HairyBastard.tsx, JMACustoms.tsx, JMACustomsCategoryPage.tsx
    data/projects.ts     # (migration branch) single project list: order, discipline, year, statement, image; drives Next Project loop + mobile menu
    design/tokens.ts     # (migration branch) TYPE scale + EASE/DURATION motion tokens
    components/
      AnimatedBackground.tsx, CustomCursor.tsx, CookieBanner.tsx, Footer.tsx,
      GalleryLightbox.tsx, MobileNav.tsx, NextProject.tsx, ScrollProgress.tsx,
      ResponsiveYouTubeEmbed.tsx
      case-study/        # shared case-study kit: CaseStudyShell, Hero, Section, SectionHeader, EditorialSplit, Figure, ImageGrid, …
      motion/            # FadeIn, RevealText
      ui/                # unused shadcn components (slated for removal)
    pages/               # legal pages
  imports/, assets/      # images (many unused duplicates — slated for cleanup)
  styles/
public/                  # jma-chains, jma-clothing, favicon
```

### `next-migration` (Next.js, current)
```
app/                     # App Router: layout.tsx (metadata, fonts, CustomCursor, Root, Analytics), page.tsx per route,
                         # not-found.tsx (404 status, then client redirect to /). Route files are thin server components.
src/app/                 # existing page components ('use client' at each page entry) — imported by app/ via @/app/...
  Root.tsx               # client shell: ScrollToTop, route prefetch, teal wipe, AnimatePresence page fade, CookieBanner
  navigation.ts          # useNavigate() + per-history-entry state (replaces React Router navigate(to, { state }))
  data/projects.ts       # project list; data/jmaCategories.ts drives /projects/jma-customs/[category] static params
  components/motion/useReducedMotion.ts  # hydration-safe replacement for motion's hook — always use this one
types/assets.d.ts        # *.png/*.jpg imports are URL strings
next.config.ts           # Turbopack asset rule: image imports resolve to URL strings (as under Vite)
```
Removed with Vite: `index.html`, `vite.config.ts`, `src/main.tsx`, `src/app/App.tsx`, `src/app/routes.tsx`. `figma:asset/…` imports became `@/assets/…`.

### Target (Next.js)
```
app/                     # App Router routes, layouts, route handlers (api/), sitemap.ts, robots.ts
components/
lib/                     # attio/, resend/, redis/, turnstile/, sentry/, seo/, validation (Zod)
sanity/                  # schemas, client, queries, Studio config
types/
public/
```
During migration, existing components may stay under `src/` and be imported by `app/` routes; relocate them only when there is a reason.

---

## Routes (must be preserved)

`/`, `/projects/investinuk`, `/projects/moncks-of-dover-street`, `/projects/swiftrooms`, `/projects/sunil-gavaskar`, `/projects/diversion-audio`, `/projects/the-hairy-bastard`, `/projects/jma-customs`, `/projects/jma-customs/:category`, `/privacy-policy`, `/terms-and-conditions`, `/gdpr`, `/cookie-policy`.

Behaviour to preserve through the migration: teal route wipe + page fade, home scroll restoration when returning from a project (separate desktop/mobile keys in sessionStorage), `#hash` scrolling, Next Project loop, lightboxes (keyboard, swipe, focus), YouTube media, custom cursor (desktop only), sidebar `mix-blend-difference`, mobile project menu, reduced-motion handling.

---

## Commands

```
pnpm install --frozen-lockfile   # pnpm 11.1.3 (pinned via packageManager), Node 24.x
pnpm dev                         # next dev
pnpm build                       # next build — must pass before reporting any task done
pnpm start                       # serve the production build
pnpm lint                        # ESLint (eslint-config-next); 0 errors required
pnpm typecheck                   # tsc --noEmit, strict
```
A `test` script arrives with the first backend phase.

### Next.js rules for this codebase
- Never read `window`, `document`, `localStorage` or `matchMedia` during render — server HTML must match the first client render. Use `useSyncExternalStore` (see `AnimatedBackground`, `CustomCursor`) or effects.
- Use `useReducedMotion` from `src/app/components/motion/useReducedMotion.ts`, never the one from `motion/react`.
- Navigate with `useNavigate()` from `src/app/navigation.ts` (it disables Next's scroll handling; `Root` owns scroll). Use `next/link` with `scroll={false}`.
- `Root.tsx` wraps `children` in `AnimatePresence mode="wait"` keyed by pathname (no `FrozenRouter`); the teal wipe hides the swap. Re-test page transitions after every Next.js upgrade.
- Image imports are URL strings (not `StaticImageData`); `next/image` adoption is a performance-phase decision.
- Fonts load from the Google Fonts stylesheet in `app/layout.tsx`; family names are used literally in class strings, so `next/font` would need a codebase-wide change.

---

## Environment variables

Names only — never put values, keys or tokens in this file or in git. Local values go in `.env.local` (gitignored); production/preview values in Vercel project settings. `.env.example` lists every name.

| Service | Variables |
|---|---|
| Site | `NEXT_PUBLIC_SITE_URL` (not yet used — canonical URL is hard-coded in `app/layout.tsx`) |
| Sanity | `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`, `SANITY_REVALIDATE_SECRET` |
| Attio | `ATTIO_API_KEY` (+ configurable object/list/stage identifiers) |
| Resend | `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` |
| Turnstile | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` |
| Redis | Provisioned via Vercel Marketplace (Upstash) — use the names the integration injects |
| Sentry | `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT` |
| Search verification | `GOOGLE_SITE_VERIFICATION`, `AHREFS_SITE_VERIFICATION` (optional if verified via DNS) |

Today (`main`) no environment variables are required.

---

## Git & deployment workflow

- **`main` = live production.** Vercel deploys every push to `main` to visualrif.com. Never push to `main` without explicit approval.
- The Vercel project still has Vite build overrides (`npm run build` → `dist`) for `main`. `next-migration`'s `vercel.json` overrides them per deployment (`framework: nextjs`, `pnpm build`, `.next`). Don't change project-level build settings until the merge.
- `packageManager` in `package.json` sets the pnpm version. Vercel's build honours it without extra configuration: the 2026-10-01 preview and production builds detected it and installed with pnpm 11.1.3. The Vercel project has no environment variables, including `ENABLE_EXPERIMENTAL_COREPACK`.
- **`next-migration` = the Next.js + backend migration.** All migration work lands here. Pushing this branch creates a Vercel preview deployment — ask before pushing.
- Merge `next-migration` into `main` only after verifying: production build, every route, homepage and project pages, desktop/tablet/mobile, animations, galleries, videos, cursor, scroll behaviour, SEO, forms, accessibility, performance and Vercel configuration.
- Work phase by phase; stop for approval between phases.
- One concern per commit. Never amend published commits. Never reset or discard uncommitted work.
- `pnpm-lock.yaml` **is committed** — keep it in sync with `package.json`.
- Do not commit `dist/`, `.next/`, `.vercel/`, `node_modules/` or `.env*` files (except `.env.example`).
- Do not touch `pnpm-workspace.yaml` unless a phase requires it.
- The DNS for visualrif.com is hosted at NS1/Squarespace, not Vercel — DNS records (Resend, Search Console) are added there manually by the owner.

---

## Brand direction

- **Primary accent:** `#50C1BA` (teal) — highlights, hover states, headings on project pages
- **Background:** `#020404` (near-black) — set on the fixed `AnimatedBackground`
- **Text:** white on dark; `text-gray-300/400/500` for secondary copy
- **Selection:** `bg-[#50C1BA] text-black`
- **Tone:** premium, minimal, editorial — uppercase tracking, wide letter-spacing throughout
- **No gradients** other than the vignette on the animated background

### Typography hierarchy
| Role | Font | Usage |
|---|---|---|
| Display / hero | Barlow Semi Condensed | Page titles, nav |
| Section headings | Barlow | Category labels |
| UI labels | Rajdhani | Nav items, tags, tracking text |
| Body copy | Lato (light) | Project case study paragraphs |
| Legal / meta | Inter | Footer small print, legal pages |

Use the `TYPE` and `EASE`/`DURATION` tokens in `src/app/design/tokens.ts` for new work.

---

## Coding rules

- **Make the smallest change that satisfies the request.** No refactors, renames or clean-up unless asked.
- **No new components** unless a phase calls for them or the user asks.
- **No comments** unless the behaviour would genuinely surprise a reader.
- **No error handling** for cases that cannot happen — but every external integration must handle failure.
- **Performance patterns already in use — keep them:** `React.memo`, `will-change-transform`, RAF throttling on mouse events, `passive` listeners, `loading="lazy"` on below-the-fold images.
- **Tailwind only** for styling. No CSS modules, no new CSS files, inline styles only where required.
- **Packages:** install only what the approved phase needs; never add packages speculatively.
- **Server vs client:** Server Components by default; `'use client'` only where browser APIs, state or animation require it.
- **Read the file before editing it.**

## Design rules

- Sidebar nav is **desktop only** (`hidden md:flex`), fixed at `w-[280px]`; desktop content is offset with `md:pl-[280px]`.
- Mobile nav is a top bar (`md:hidden`): logo + menu/CTA or back button.
- Project pages: full-bleed hero → meta grid (year/location/role/industry) → body sections → Next Project → Footer.
- `AnimatedBackground` is `position: fixed, z-index: -1`, rendered once globally. No per-page backgrounds that fight it.
- `CustomCursor` renders at the app root and disables itself on touch devices. Don't suppress it per page.
- `mix-blend-difference` is used on the sidebar nav — text colour changes invert against content. Test before changing.
- Any new public UI (e.g. the enquiry form) must match the existing design and be designed intentionally for desktop, tablet and mobile.
- Legal pages (Privacy, Cookies, GDPR) must describe only technologies actually deployed.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
