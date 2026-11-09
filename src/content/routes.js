// Every public route, used for the sitemap. Imported by vite.config.js, so keep this file free of JSX.
import { caseStudies } from './work.js'
import { writing } from './writing.js'

export const ROUTES = [
  '/',
  ...caseStudies.map((c) => `/work/${c.slug}`),
  '/lab',
  '/writing',
  ...writing.filter((w) => w.status === 'Published' && w.body).map((w) => `/writing/${w.slug}`),
]
