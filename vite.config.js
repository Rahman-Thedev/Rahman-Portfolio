import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES } from './src/content/routes.js'

// The public URL used in canonical, Open Graph and sitemap tags.
// Order: an explicit SITE_URL, then Vercel's production domain (set automatically at build time), then a fallback.
const SITE_URL = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'https://rahman-portfolio-nu.vercel.app'
).replace(/\/$/, '')

const siteFiles = () => ({
  name: 'site-files',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', SITE_URL),
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10)
    const urls = ROUTES.map((path) => `  <url><loc>${SITE_URL}${path}</loc><lastmod>${today}</lastmod></url>`).join('\n')
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    })
    this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` })
  },
})

export default defineConfig({
  plugins: [react(), siteFiles()],
  define: { __SITE_URL__: JSON.stringify(SITE_URL) },
})
