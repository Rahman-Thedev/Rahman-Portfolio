// A small History API router. The site has four route shapes, which doesn't justify a routing dependency.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const RouterContext = createContext(null)

const normalise = (path) => (path.length > 1 ? path.replace(/\/+$/, '') : path) || '/'
const readLocation = () => ({ path: normalise(window.location.pathname), hash: window.location.hash, key: 0 })
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function RouterProvider({ children }) {
  const [loc, setLoc] = useState(readLocation)

  useEffect(() => {
    const onPop = () => setLoc((prev) => ({ ...readLocation(), key: prev.key + 1 }))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Scroll after each navigation: to the anchor if there is one, otherwise to the top.
  useEffect(() => {
    const id = loc.hash.slice(1)
    const frame = requestAnimationFrame(() => {
      const el = id && document.getElementById(id)
      if (el) {
        // Smooth only within the same page. Across pages the target is still laying out, so jump instantly.
        el.scrollIntoView({ behavior: loc.samePage && !prefersReducedMotion() ? 'smooth' : 'auto', block: 'start' })
        el.focus({ preventScroll: true })
      } else if (loc.key > 0) {
        window.scrollTo(0, 0)
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [loc])

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.origin)
    const path = normalise(url.pathname)
    const samePage = path === normalise(window.location.pathname)
    if (path + url.hash !== normalise(window.location.pathname) + window.location.hash) {
      window.history.pushState({}, '', path + url.search + url.hash)
    }
    setLoc((prev) => ({ path, hash: url.hash, samePage, key: prev.key + 1 }))
  }, [])

  const value = useMemo(() => ({ ...loc, navigate }), [loc, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export const useRouter = () => useContext(RouterContext)

/** Internal link. External URLs, new-tab clicks and modified clicks fall through to the browser. */
export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter()
  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

/** Returns { name, params } for the current path. */
export function matchRoute(path) {
  if (path === '/') return { name: 'home', params: {} }
  if (path === '/lab') return { name: 'lab', params: {} }
  if (path === '/writing') return { name: 'writing', params: {} }
  let m = path.match(/^\/work\/([a-z0-9-]+)$/)
  if (m) return { name: 'work', params: { slug: m[1] } }
  m = path.match(/^\/writing\/([a-z0-9-]+)$/)
  if (m) return { name: 'post', params: { slug: m[1] } }
  return { name: 'not-found', params: {} }
}
