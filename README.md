# Omenvoid Oracle

The personal site of Abdulrahman Shamsudeen Abiodun (Rahman): software engineer, product builder, founder of [BEUDRYT](https://beudryt.com), and aspiring cybersecurity professional.

Vite, React 19 and Tailwind CSS 4. No backend.

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # outputs dist/, including sitemap.xml and robots.txt
npm run preview
```

## Editing content

All copy lives in `src/content/`. Layout code never needs to change to add work.

| File | What it holds |
| --- | --- |
| `profile.js` | Name, headline, intro, contact links, the **Now** section, principles |
| `work.js` | Ventures with case studies (each gets `/work/<slug>`), and earlier builds |
| `experience.js` | Timeline and education. Leave `period: null` until a date is confirmed |
| `skills.js` | Capabilities, graded `shipped` / `working` / `learning` |
| `lab.js` | The security and technical lab journal. Only mark `Shipped` when there is an artefact |
| `writing.js` | Articles. Set `status: 'Published'` plus `href` (external) or `body` (rendered on-site) |

Update `now.updated` in `profile.js` whenever the Now section changes.

## Routes

`/`, `/work/:slug`, `/lab`, `/writing`, `/writing/:slug`. Routing is a small History API router in `src/lib/router.jsx`; `vercel.json` rewrites unknown paths to `index.html`.

## Deployment

Built for Vercel. The public URL used in canonical, Open Graph and sitemap tags resolves in this order: the `SITE_URL` environment variable, then Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, then a fallback in `vite.config.js`. Set `SITE_URL` once a custom domain exists.

`vercel.json` also sets security headers (CSP, HSTS, nosniff, frame and referrer policies) and long-lived caching for hashed assets.

## Design tokens

Defined in `src/index.css` under `@theme`: graphite surfaces (`ink`, `graphite`, `line`), text (`paper`, `muted`, `faint`), and `burgundy` / `crimson`. Use `crimson` for filled buttons and `crimson-text` for accent text on dark backgrounds; both pass WCAG AA.

See `docs/AUDIT.md` for the audit and decisions behind this version.
