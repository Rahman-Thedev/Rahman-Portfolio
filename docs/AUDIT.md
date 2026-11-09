# Portfolio audit (Phase 1 and 2)

Date: 9 November 2026. Scope: the existing `Rahman-Portfolio` codebase, its live links, and the public and private repositories that back the claims it makes.

## 1. What existed

| Area | Finding |
| --- | --- |
| Stack | Vite 7, React 19, Tailwind CSS 4 (via `@tailwindcss/postcss`), `lucide-react`. No router, no backend. |
| Structure | One 419-line `src/App.jsx` holding every section: background, fake terminal, navbar, hero, skills, projects, contact form, footer. |
| Sections | Home, Expertise, Projects (5 cards), Contact ("Handshake"). |
| Visual system | Emerald and cyan neon on near-black, falling "matrix" lines, animated fake terminal, pulsing badges, `Technical_Specifications`-style headings. |
| Boilerplate left over | `App.css` (Vite starter, unused), `assets/react.svg`, `public/vite.svg` favicon, `tailwind.config.js` (v3 format, ignored by Tailwind 4), `autoprefixer` (redundant in Tailwind 4). |
| Tooling | `npm run build` passes. `npm run lint` is broken: ESLint 9 is installed but there is no `eslint.config.js`. There is no `.gitignore`. |
| Deployment | No `vercel.json`. The repo's declared homepage `rahman-portfolio-nu.vercel.app` returns 404. The live site is `itsrahman-thedevportfolio.vercel.app` (confirmed by the owner). |
| SEO | `<title>my-portfolio</title>`, no description, no Open Graph, no favicon of its own, no sitemap or robots. |
| Accessibility | Icon-only links with no labels, form inputs with unassociated labels, nav built from `<button>`s, no skip link, no focus styles, no reduced-motion handling, body text at 10px in places. |

## 2. Claims checked against evidence

| Claim on the old site | Evidence | Verdict |
| --- | --- | --- |
| "Security Aware Architect", "Full-Stack Security" | No security artefacts in public repos. BEUDRYT (private) does show real secure engineering: RLS on every table with an isolation test, signed and idempotent webhooks, secret scanning, security headers. | Overstated title. Replace with evidence. |
| Stack: Node, Express, MongoDB, Python, Flask, Oracle, C++, C#, Three.js | None of these appear in any repository. | Removed until there is something to show. |
| "Oracle VPN: a programmed VPN gateway... encrypted traffic flow management" | Repo README: a terminal-styled interface with an "AES-256-GCM encryption simulation". It is a UI concept, not a VPN. | Misleading. Relabelled as an interface concept. |
| "Resume Shop" live demo | Repo is now private, GitHub Pages returns 404. | Broken link. Removed. |
| "Driver Safety System" | React and MediaPipe drowsiness detection, live. The old link pointed at a secondary deployment alias. | Kept, linked to the canonical deployment. |
| BEUDRYT, CareerBoost Hub, MyKudi, Aegis | Not on the site at all. | The most important work was missing. |

### What the private repositories confirm

- **BEUDRYT** (`beudrytmvp`, live at beudryt.com, aliased to beudrytmvp.vercel.app): Next.js 16, React 19, TypeScript, Supabase (Auth, Postgres, Storage) with RLS on every table, 17 versioned SQL migrations, Zod, Flutterwave subscriptions (previously Paystack), a provider-abstracted AI layer (`lib/ai`) running Google Gemini in production after a documented switch from Claude, Sentry, PostHog, web push, GitHub Actions CI, 28 unit test files, an RLS isolation test on in-memory Postgres, a secrets check, a production backup workflow, and a written decision record (ADR) trail. `docs/scope.md` names Abdulrahman Shamsudeen as product owner. Operated by Klei Holdings.
- **MyKudi** (`mykudi-smart-finance`, `mykudi`): React, TypeScript, Vite, shadcn/ui and Supabase prototype generated with Lovable. Screens: dashboard, savings, bills, transfers, transactions, an AI assistant. No production deployment found. Represented as a prototype.
- **Security note:** `mykudi-smart-finance` has a `.env` file committed to git. It needs to be removed from history and any keys in it rotated (see the final report).

### Stated by the owner, not independently verified

Dates and titles below come from the owner's LinkedIn, supplied after the first pass. The Aegis site is live.

- BEUDRYT: Jul 2024 to present. The earliest BEUDRYT code on GitHub is from September 2026.
- CareerBoost Hub: Founder, Mar 2025 to present.
- MoonDance Systems: Lead Product Engineer on Aegis (getaegis.org), Oct 2026 to present.
- KWASUED: B.Sc. (Ed.) Computer Science, in progress.
- Freelance engagements: no details or dates supplied, so none are shown.

All of these are presented without metrics.

## 3. Strengths worth keeping

- The stack is right for a portfolio: fast, static, cheap to host. No reason to move to Next.js.
- Dark theme and the personal "Oracle" naming already point toward a distinct brand.
- Section order (intro, skills, work, contact) is sound.
- Project cards with category, description and tags are a reasonable pattern.
- Social and contact channels (GitHub, Instagram, WhatsApp, email).
- Mobile menu exists.

## 4. Weaknesses

1. Positioning is wrong. It reads as a generic "security hacker" theme, not as a founder and engineer with a live SaaS product.
2. The best work is absent, and two of five project cards are misleading or broken.
3. The visual language (neon, matrix rain, fake terminal) is exactly what the brief asks to avoid, and it signals template rather than identity.
4. The contact form does nothing: it calls `preventDefault()` and discards input.
5. Everything lives in one file, and the content is hard-coded in JSX, so adding a project means editing layout code.
6. No SEO, broken lint, no deploy config.

## 5. Information architecture (decision)

Keep the single-page home, because recruiters scan, and add three real routes for depth. A 40-line History API router replaces the need for `react-router`.

| Route | Purpose | Change |
| --- | --- | --- |
| `/` | Hero, Now, Selected work, Experience, Capabilities, Principles, Lab preview, Writing preview, Contact | Refined and expanded |
| `/work/:slug` | Case studies: BEUDRYT in depth, the others shorter | New |
| `/lab` | Cybersecurity and technical lab journal, evidence-graded | New |
| `/writing`, `/writing/:slug` | Writing index. Nothing is marked published until it is | New |

All content moves into `src/content/*.js`, so new projects, lab notes and articles are data edits, not layout edits.

## 6. Design direction (decision)

- Palette: graphite surfaces, deep burgundy, one crimson accent. Defined as CSS tokens.
- Type: Instrument Serif for editorial headlines, Inter for reading, JetBrains Mono only for small metadata labels.
- Motion: a single fade-and-rise reveal on scroll, disabled under `prefers-reduced-motion`.
- Removed: matrix lines, fake terminal, pulsing badges, neon glows, underscore headings.
- Added: a simple mark (a ring with a centre point: void and oracle) used for the favicon, nav and Open Graph image.
