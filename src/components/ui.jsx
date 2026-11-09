import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from '../lib/router.jsx'

/** The Omenvoid Oracle mark: a ring and a centre point. */
export function Mark({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="10.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  )
}

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Section({ id, className = '', children, ...rest }) {
  return (
    <section id={id} tabIndex={id ? -1 : undefined} className={`py-20 sm:py-28 ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeader({ index, eyebrow, title, lede, action }) {
  return (
    <div data-reveal className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4">
          {index && <span className="text-crimson-text">{index}</span>}
          {index && <span className="mx-2 text-line-strong">/</span>}
          {eyebrow}
        </p>
        <h2 className="display text-4xl text-paper sm:text-5xl">{title}</h2>
        {lede && <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>}
      </div>
      {action}
    </div>
  )
}

const STATUS_STYLES = {
  Live: 'border-crimson/60 text-crimson-text',
  Shipped: 'border-crimson/60 text-crimson-text',
  Active: 'border-line-strong text-paper',
  Published: 'border-crimson/60 text-crimson-text',
  'In progress': 'border-line-strong text-paper',
  Drafting: 'border-line-strong text-paper',
  Prototype: 'border-line-strong text-muted',
  Collaboration: 'border-line-strong text-muted',
  Planned: 'border-dashed border-line-strong text-faint',
}

export function StatusBadge({ status }) {
  if (!status) return null
  const live = status === 'Live' || status === 'Shipped' || status === 'Published'
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] ${STATUS_STYLES[status] || 'border-line-strong text-muted'}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-crimson-text' : 'bg-current opacity-60'}`} />
      {status}
    </span>
  )
}

export function Tag({ children, variant = 'default' }) {
  const styles = {
    default: 'border-line text-muted',
    shipped: 'border-line-strong bg-graphite-2 text-paper',
    working: 'border-line text-muted',
    learning: 'border-dashed border-line-strong text-faint',
  }
  return <span className={`inline-block rounded-md border px-2.5 py-1 text-[0.8rem] leading-none ${styles[variant]}`}>{children}</span>
}

export function TagList({ items, variant, label }) {
  if (!items?.length) return null
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag variant={variant}>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap'
const btnStyles = {
  primary: 'bg-crimson text-paper hover:bg-crimson-hover',
  secondary: 'border border-line-strong text-paper hover:border-paper/60 hover:bg-white/[0.03]',
}

/** Button-styled link. `to` for internal routes, `href` for external ones (opens in a new tab). */
export function ButtonLink({ to, href, variant = 'primary', children, className = '' }) {
  const cls = `${btnBase} ${btnStyles[variant]} ${className}`
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  return (
    <Link to={to} className={cls}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}

/** Text link with an arrow. */
export function ArrowLink({ to, href, children, className = '' }) {
  const cls = `group inline-flex items-center gap-1.5 text-sm font-medium text-paper underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-crimson-text ${className}`
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowUpRight size={15} aria-hidden="true" className="text-faint transition-colors group-hover:text-crimson-text" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  return (
    <Link to={to} className={cls}>
      {children}
      <ArrowRight size={15} aria-hidden="true" className="text-faint transition-all group-hover:translate-x-0.5 group-hover:text-crimson-text" />
    </Link>
  )
}
