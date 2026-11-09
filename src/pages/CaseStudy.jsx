import { ArrowLeft } from 'lucide-react'
import { caseStudies } from '../content/work.js'
import { Link } from '../lib/router.jsx'
import { usePageMeta } from '../lib/meta.js'
import { ArrowLink, ButtonLink, Container, StatusBadge, TagList } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'

function Block({ section }) {
  return (
    <section data-reveal className="grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-10">
      <h2 className="display text-3xl text-paper lg:col-span-4">{section.title}</h2>
      <div className="lg:col-span-8">
        {section.paragraphs && (
          <div className="prose-body text-lg leading-relaxed text-muted">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
        {section.list && (
          <ul className="space-y-4">
            {section.list.map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-[0.7rem] h-px w-4 shrink-0 bg-crimson-text" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {section.items && (
          <dl className="divide-y divide-line border-y border-line">
            {section.items.map((item) => (
              <div key={item.title} className="py-5">
                <dt className="text-paper">{item.title}</dt>
                <dd className="mt-1.5 leading-relaxed text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}

export default function CaseStudy({ slug }) {
  const index = caseStudies.findIndex((c) => c.slug === slug)
  const work = caseStudies[index]
  usePageMeta({
    title: work ? `${work.name} case study` : 'Not found',
    description: work ? `${work.name}: ${work.tagline} ${work.role}.` : undefined,
    path: work ? `/work/${work.slug}` : undefined,
  })
  if (!work) return <NotFound />

  const next = caseStudies[(index + 1) % caseStudies.length]
  const { caseStudy: cs } = work

  return (
    <article className="pt-28 sm:pt-36">
      <Container>
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-faint hover:text-paper">
          <ArrowLeft size={15} aria-hidden="true" /> All work
        </Link>

        <header className="mt-10 pb-14">
          <div data-reveal className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">{work.kind}</span>
            <StatusBadge status={work.status} />
            {work.period && <span className="font-mono text-xs text-faint">{work.period}</span>}
          </div>
          <h1 data-reveal className="display mt-6 text-6xl text-paper sm:text-7xl lg:text-8xl">{work.name}</h1>
          <p data-reveal className="mt-5 max-w-3xl text-2xl leading-snug text-paper/90">{work.tagline}</p>
          <p data-reveal className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{cs.intro}</p>

          <dl data-reveal className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {cs.facts.map((f) => (
              <div key={f.label} className="bg-graphite p-5">
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-paper">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <TagList items={work.stack} label={`${work.name} technology and skills`} />
            {work.link && (
              <ButtonLink href={work.link.href} className="self-start">
                Visit {work.link.label}
              </ButtonLink>
            )}
          </div>
        </header>

        {cs.sections.map((s) => (
          <Block key={s.title} section={s} />
        ))}

        <nav aria-label="More work" className="mt-6 flex flex-col gap-4 border-t border-line py-12 sm:flex-row sm:items-center sm:justify-between">
          <ArrowLink to="/#work">Back to all work</ArrowLink>
          {next && next.slug !== work.slug && (
            <Link to={`/work/${next.slug}`} className="group text-right">
              <span className="eyebrow block">Next</span>
              <span className="font-serif text-3xl text-paper group-hover:text-crimson-text">{next.name}</span>
            </Link>
          )}
        </nav>
      </Container>
    </article>
  )
}
