import { useState } from 'react'
import { labEntries } from '../content/lab.js'
import { usePageMeta } from '../lib/meta.js'
import { Container, StatusBadge } from '../components/ui.jsx'

const AREAS = ['All', ...new Set(labEntries.map((e) => e.area))]

export default function Lab() {
  usePageMeta({
    title: 'The lab',
    description: 'An evidence-graded cybersecurity and technical journal: secure engineering in shipped products, plus Linux, networking, OWASP and penetration testing study.',
    path: '/lab',
  })
  const [area, setArea] = useState('All')
  const entries = area === 'All' ? labEntries : labEntries.filter((e) => e.area === area)
  const counts = labEntries.reduce((acc, e) => ({ ...acc, [e.status]: (acc[e.status] || 0) + 1 }), {})

  return (
    <div className="pt-28 sm:pt-36">
      <Container>
        <header className="grid gap-10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p data-reveal className="eyebrow">The lab</p>
            <h1 data-reveal className="display mt-5 text-6xl text-paper sm:text-7xl">Security, learned in the open</h1>
            <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              I’m a product builder working toward a career in cybersecurity. This journal records two things: the secure engineering
              practices running in software I’ve shipped, and the fundamentals I’m studying now.
            </p>
          </div>
          <aside data-reveal className="rounded-2xl border border-line bg-graphite/60 p-6 lg:col-span-4">
            <p className="eyebrow">Rules for this journal</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li><span className="text-paper">Shipped</span> means there is an artefact behind it: code, a test or a running system.</li>
              <li><span className="text-paper">In progress</span> and <span className="text-paper">Planned</span> are intent, not a claim of skill.</li>
              <li>Write-ups only cover systems I own or have explicit permission to test.</li>
            </ul>
            <p className="mt-5 font-mono text-xs text-faint">
              {Object.entries(counts).map(([k, v]) => `${v} ${k.toLowerCase()}`).join(' · ')}
            </p>
          </aside>
        </header>

        <div role="group" aria-label="Filter by area" className="flex flex-wrap gap-2 border-t border-line pt-8">
          {AREAS.map((a) => (
            <button
              key={a}
              type="button"
              aria-pressed={area === a}
              onClick={() => setArea(a)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                area === a ? 'border-crimson-text bg-crimson/15 text-paper' : 'border-line text-muted hover:border-line-strong hover:text-paper'
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        <ol className="mt-8 divide-y divide-line border-y border-line" aria-live="polite">
          {entries.map((e) => (
            <li key={e.id} id={e.id} className="grid gap-4 py-10 lg:grid-cols-12 lg:gap-10">
              <div className="flex flex-wrap items-center gap-3 lg:col-span-3 lg:flex-col lg:items-start">
                <StatusBadge status={e.status} />
                <span className="text-sm text-faint">{e.area}</span>
                {e.date && <span className="font-mono text-xs text-faint">{e.date}</span>}
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-serif text-3xl text-paper">{e.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{e.summary}</p>
                {e.notes?.map((n) => (
                  <p key={n} className="mt-4 border-l-2 border-burgundy pl-4 leading-relaxed text-muted">{n}</p>
                ))}
                {e.evidence && (
                  <p className="mt-5 text-sm leading-relaxed text-faint">
                    <span className="eyebrow mr-2 text-crimson-text">Evidence</span>
                    {e.evidence}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="py-12 text-sm text-faint">New entries are added as work is completed. Nothing here is backdated.</p>
      </Container>
    </div>
  )
}
