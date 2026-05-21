# VISUALRIF Portfolio — Claude Code Guide

## Stack

- **Framework:** React 18 (SPA, no SSR)
- **Build:** Vite 6 + `@vitejs/plugin-react`
- **Routing:** React Router v7 (`createBrowserRouter`)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Animation:** `motion/react` (Framer Motion v12)
- **Language:** TypeScript
- **Package manager:** pnpm
- **Assets:** Figma-exported images imported via `figma:asset/...` or local `src/imports/`
- **Fonts:** Google Fonts (Barlow Semi Condensed, Barlow, Rajdhani, Inter, Lato) — loaded in `src/styles/fonts.css`

### Key commands
```
pnpm dev      # dev server at localhost:5173
pnpm build    # production build to dist/
```

---

## Project structure

```
src/
  app/
    App.tsx              # root component, mounts CustomCursor + RouterProvider
    Root.tsx             # shared layout: AnimatedBackground + CookieBanner
    routes.tsx           # all routes defined here
    Home.tsx             # single-page scroll home (hero, about, timeline, projects)
    DiversionAudio.tsx   # project case study page
    MoncksOfDoverStreet.tsx
    Swiftrooms.tsx
    SunilGavaskar.tsx
    components/
      AnimatedBackground.tsx   # fixed parallax teal-line background
      CustomCursor.tsx         # branded SVG cursor (desktop only)
      CookieBanner.tsx         # GDPR cookie consent (localStorage)
      Footer.tsx               # contact + social + legal links
    pages/               # legal pages (Privacy, T&Cs, GDPR, Cookie Policy)
  imports/               # Figma-exported PNGs, SVG path data
  styles/                # fonts.css, globals.css, tailwind.css, theme.css
index.html               # entry — title and SEO meta tags live here
```

---

## Brand direction

- **Primary accent:** `#50C1BA` (teal) — used for highlights, hover states, headings on project pages
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

---

## Coding rules

- **No new components** unless explicitly asked. Duplication currently exists across project pages (nav, logo SVGs) — leave it until a refactor is requested.
- **No comments** unless the behaviour would genuinely surprise a reader.
- **No error handling** for cases that cannot happen in this codebase.
- **Performance patterns already in use — keep them:** `React.memo`, `will-change-transform`, RAF throttling on mouse events, `passive` event listeners, `loading="lazy"` on all images.
- **Tailwind only** for styling. Do not introduce CSS modules, inline style objects (except where required, e.g. `style={{ border: 0 }}`), or new CSS files.
- **Do not install new packages** without being asked.
- **Do not touch `pnpm-workspace.yaml`** — it has a pre-existing unrelated modification.
- **Do not commit `dist/`, `node_modules/`, or `pnpm-lock.yaml`** — they are untracked and should remain so (no `.gitignore` exists yet, but treat them as ignored).

---

## Design rules

- Sidebar nav is **desktop only** (`hidden md:flex`), fixed at `w-[280px]`. All main content on desktop is offset with `md:pl-[280px]`.
- Mobile nav is a top bar (`md:hidden`), logo + single CTA or back button.
- Project pages share a consistent structure: full-bleed hero → meta grid (year/location/role/industry) → body sections → Footer.
- The `AnimatedBackground` is `position: fixed, z-index: -1` and renders globally via `Root.tsx`. Do not add per-page backgrounds that fight it.
- The `CustomCursor` is rendered at the app root and is automatically disabled on touch devices. Do not suppress it per-page.
- `mix-blend-difference` is used on the sidebar nav — changes to nav text colour will invert against page content. Test before changing.

---

## Deployment notes

- Pure SPA — the server must redirect all paths to `index.html` (React Router handles routing client-side).
- `pnpm build` outputs to `dist/`. No environment variables are required.
- SEO meta tags and the page title are in `index.html` — not dynamically set per route. If per-page titles are needed in future, use a `<title>` update via `useEffect` or a head-management library.
- The JS bundle is ~540 kB gzipped at 174 kB. This is expected given all project pages are bundled together. Code-splitting is a known future improvement, not a bug.
- Images are large (some 4–20 MB uncompressed PNGs from Figma). Vite hashes and copies them to `dist/assets/` — no manual asset handling needed.

---

## Working safely

- **Make the smallest change that satisfies the request.** Do not refactor, rename, or clean up surrounding code unless asked.
- **Read the file before editing it.** Never guess at indentation or content.
- **Always run `pnpm build` after edits** and confirm it exits cleanly before reporting done.
- **Never amend published commits.** Create a new commit if a fix is needed after pushing.
- **One concern per commit.** Do not bundle unrelated changes.
- When in doubt, show the diff and ask before applying.
