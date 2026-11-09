import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useRouter } from '../lib/router.jsx'
import { Container, Mark } from './ui.jsx'

const ITEMS = [
  { label: 'Work', to: '/#work', match: (p, s) => p.startsWith('/work') || (p === '/' && s === 'work') },
  { label: 'Experience', to: '/#experience', match: (p, s) => p === '/' && s === 'experience' },
  { label: 'Capabilities', to: '/#capabilities', match: (p, s) => p === '/' && s === 'capabilities' },
  { label: 'Lab', to: '/lab', match: (p) => p === '/lab' },
  { label: 'Writing', to: '/writing', match: (p) => p.startsWith('/writing') },
]

const SECTION_IDS = ['work', 'experience', 'capabilities', 'contact']

/** Tracks which home-page section is in view. */
function useActiveSection(enabled) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    if (!enabled) return
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [enabled])
  return enabled ? active : null
}

export default function Nav() {
  const { path, key } = useRouter()
  // The mobile menu remembers the navigation it was opened on, so it closes itself on the next one.
  const [openedAt, setOpenedAt] = useState(null)
  const open = openedAt === key
  const [scrolled, setScrolled] = useState(false)
  const section = useActiveSection(path === '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpenedAt(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const linkCls = (active) =>
    `relative text-sm transition-colors ${active ? 'text-paper' : 'text-muted hover:text-paper'}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-ink/85 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-paper" aria-label="Omenvoid Oracle, home">
          <Mark className="h-6 w-6 text-crimson-text" />
          <span className="font-serif text-[1.35rem] leading-none tracking-tight">Omenvoid Oracle</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {ITEMS.map((item) => {
            const active = item.match(path, section)
            return (
              <Link key={item.label} to={item.to} className={linkCls(active)} aria-current={active ? 'page' : undefined}>
                {item.label}
                {active && <span aria-hidden="true" className="absolute -bottom-[22px] left-0 right-0 h-px bg-crimson-text" />}
              </Link>
            )
          })}
          <Link
            to="/#contact"
            className="rounded-full border border-line-strong px-4 py-2 text-sm text-paper transition-colors hover:border-crimson-text"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpenedAt(open ? null : key)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-ink md:hidden">
          <Container className="flex flex-col py-3">
            {[...ITEMS, { label: 'Contact', to: '/#contact', match: () => false }].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="border-b border-line py-4 font-serif text-2xl text-paper last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
