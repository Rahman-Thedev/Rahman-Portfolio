// Per-route document metadata for a single-page app.
import { useEffect } from 'react'

const SITE = 'Omenvoid Oracle'
const BASE = typeof __SITE_URL__ === 'string' ? __SITE_URL__ : ''

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta({ title, description, path }) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE}` : `Rahman · ${SITE} · Software Engineer, Product Builder, Founder`
    document.title = fullTitle
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
      setMeta('meta[name="twitter:description"]', 'content', description)
    }
    if (path) {
      setMeta('link[rel="canonical"]', 'href', `${BASE}${path}`)
      setMeta('meta[property="og:url"]', 'content', `${BASE}${path}`)
    }
  }, [title, description, path])
}
