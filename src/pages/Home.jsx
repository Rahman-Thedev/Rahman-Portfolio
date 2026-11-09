import { ArrowRight, Github, Instagram, MessageCircle } from 'lucide-react'
import { links, now, principles, profile } from '../content/profile.js'
import { builds, ventures } from '../content/work.js'
import { education, experience } from '../content/experience.js'
import { capabilities, capabilityTiers } from '../content/skills.js'
import { labEntries } from '../content/lab.js'
import { writing } from '../content/writing.js'
import { Link } from '../lib/router.jsx'
import { usePageMeta } from '../lib/meta.js'
import { ArrowLink, ButtonLink, Container, Section, SectionHeader, StatusBadge, TagList } from '../components/ui.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  usePageMeta({ path: '/' })
  return (
    <>
      <Hero />
      <Now />
      <Work />
      <Experience />
      <Capabilities />
      <Principles />
      <LabAndWriting />
      <Contact />
    </>
  )
}

/* ---------------- Hero ---------------- */

function Hero() {
  const socials = [
    { href: links.github, label: 'GitHub', Icon: Github },
    { href: links.instagram, label: 'Instagram', Icon: Instagram },
    { href: links.whatsapp, label: 'WhatsApp', Icon: MessageCircle },
  ]
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p data-reveal className="eyebrow mb-6">
            {profile.brand} <span className="mx-2 text-line-strong">/</span> {profile.shortName}
          </p>
          <h1 data-reveal className="display text-[2.9rem] text-paper sm:text-6xl lg:text-[4.6rem]">
            {profile.headline}
          </h1>
          <p data-reveal className="mt-6 font-mono text-[0.78rem] uppercase leading-relaxed tracking-[0.12em] text-crimson-text">
            {profile.roles.join(' · ')}
          </p>
          <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.intro}
          </p>
          <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink to="/work/beudryt">Read the BEUDRYT case study</ButtonLink>
            <ButtonLink to="/#contact" variant="secondary">Get in touch</ButtonLink>
            <ul className="ml-1 flex items-center gap-1 sm:ml-3 sm:border-l sm:border-line sm:pl-4" aria-label="Profiles">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-faint transition-colors hover:text-paper"
                  >
                    <Icon size={19} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside data-reveal className="lg:col-span-5 lg:pt-3" aria-label="At a glance">
          <div className="rounded-2xl border border-line bg-graphite/70 p-6 sm:p-8">
            <p className="eyebrow">At a glance</p>
            <p className="mt-4 font-serif text-3xl leading-tight text-paper">{profile.name}</p>
            <p className="mt-1 text-sm text-faint">Professionally known as {profile.shortName}</p>
            <dl className="mt-8 divide-y divide-line border-t border-line text-sm">
              {[
                ['Building', <Link key="b" to="/work/beudryt" className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-crimson-text">BEUDRYT</Link>, 'Founder · Live'],
                ['Ventures', 'CareerBoost Hub · MyKudi', null],
                ['Collaborating', 'Aegis at Moondance', null],
                ['Studying', 'Computer Science, KWASUED', null],
                ['Based in', profile.location, null],
              ].map(([k, v, extra]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-faint">{k}</dt>
                  <dd className="text-right text-paper">
                    {v}
                    {extra && <span className="ml-2 text-faint">{extra}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </Container>
    </section>
  )
}

/* ---------------- Now ---------------- */

function Now() {
  return (
    <section aria-labelledby="now-title" className="border-y border-line bg-graphite/40">
      <Container className="grid gap-8 py-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 id="now-title" className="display text-3xl text-paper">Now</h2>
          <p className="mt-2 text-sm text-faint">Updated {now.updated}</p>
        </div>
        <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2 md:col-span-9">
          {now.items.map((item) => (
            <li key={item.label} data-reveal>
              <p className="eyebrow text-crimson-text">{item.label}</p>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

/* ---------------- Work ---------------- */

function Work() {
  const [featured, ...rest] = ventures
  return (
    <Section id="work" aria-labelledby="work-title">
      <SectionHeader
        index="01"
        eyebrow="Selected work"
        title={<span id="work-title">Ventures, products and collaborations</span>}
        lede="One live product I lead end to end, two ventures I founded or co-founded, and a product collaboration. Each links to a fuller write-up."
      />

      {/* Featured: BEUDRYT */}
      <article data-reveal className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-burgundy-deep via-graphite to-graphite">
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">{featured.kind}</span>
              <StatusBadge status={featured.status} />
            </div>
            <h3 className="display mt-5 text-5xl text-paper sm:text-6xl">{featured.name}</h3>
            <p className="mt-3 text-xl leading-snug text-paper/90">{featured.tagline}</p>
            <p className="mt-5 leading-relaxed text-muted">{featured.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={`/work/${featured.slug}`}>Read the case study</ButtonLink>
              <ButtonLink href={featured.link.href} variant="secondary">Visit {featured.link.label}</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow">Role</p>
            <p className="mt-2 text-paper">{featured.role}</p>
            <p className="eyebrow mt-8">Highlights</p>
            <ul className="mt-3 space-y-3">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson-text" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-line/80 px-6 py-5 sm:px-10 lg:px-12">
          <TagList items={featured.stack} label="BEUDRYT technology" />
        </div>
      </article>

      {/* Other ventures */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((v) => (
          <article key={v.slug} data-reveal className="group relative flex flex-col rounded-2xl border border-line bg-graphite/60 p-6 transition-colors hover:border-line-strong sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="eyebrow">{v.kind}</span>
              <StatusBadge status={v.status} />
            </div>
            <h3 className="mt-5 font-serif text-3xl text-paper">
              <Link to={`/work/${v.slug}`} className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none">
                {v.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-crimson-text">{v.role}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{v.tagline}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-paper">
              Read more
              <ArrowRight size={15} aria-hidden="true" className="text-faint transition-all group-hover:translate-x-0.5 group-hover:text-crimson-text" />
            </span>
          </article>
        ))}
      </div>

      {/* Earlier builds */}
      <div className="mt-20">
        <h3 data-reveal className="eyebrow mb-6">Earlier builds and experiments</h3>
        <ul className="divide-y divide-line border-y border-line">
          {builds.map((b) => (
            <li key={b.name} data-reveal className="grid gap-3 py-6 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-3">
                <p className="font-serif text-2xl text-paper">{b.name}</p>
                <p className="mt-1 font-mono text-xs text-faint">{b.year}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted md:col-span-5">{b.summary}</p>
              <div className="md:col-span-2">
                <TagList items={b.stack} label={`${b.name} technology`} />
              </div>
              <div className="flex gap-5 md:col-span-2 md:justify-end">
                {b.href && <ArrowLink href={b.href}>Live<span className="sr-only"> {b.name}</span></ArrowLink>}
                {b.repo && <ArrowLink href={b.repo}>Code<span className="sr-only"> for {b.name}</span></ArrowLink>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ---------------- Experience ---------------- */

function TimelineItem({ item }) {
  return (
    <li data-reveal className="grid gap-2 py-8 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        {item.period && <p className="font-mono text-sm text-paper">{item.period}</p>}
        {item.type && <p className="mt-1 text-sm text-faint">{item.type}</p>}
      </div>
      <div className="md:col-span-9">
        <h3 className="font-serif text-3xl text-paper">
          {item.href ? (
            <Link to={item.href} className="hover:text-crimson-text">{item.org}</Link>
          ) : (
            item.org
          )}
        </h3>
        <p className="mt-1 text-crimson-text">{item.role}</p>
        <ul className="mt-4 space-y-2">
          {item.points.map((p) => (
            <li key={p} className="flex gap-3 leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-[0.7rem] h-px w-3 shrink-0 bg-line-strong" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title" className="border-t border-line">
      <SectionHeader
        index="02"
        eyebrow="Experience"
        title={<span id="experience-title">Where I’ve built, led and contributed</span>}
      />
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((item) => (
          <TimelineItem key={item.org} item={item} />
        ))}
      </ol>
      <h3 data-reveal className="eyebrow mb-2 mt-16">Education</h3>
      <ol className="divide-y divide-line border-y border-line">
        {education.map((item) => (
          <TimelineItem key={item.org} item={item} />
        ))}
      </ol>
    </Section>
  )
}

/* ---------------- Capabilities ---------------- */

function Capabilities() {
  return (
    <Section id="capabilities" aria-labelledby="capabilities-title" className="border-t border-line">
      <SectionHeader
        index="03"
        eyebrow="Capabilities"
        title={<span id="capabilities-title">What I can do, graded honestly</span>}
        lede="Skills are sorted by evidence, not ambition. If it’s in the first column, there is shipped work behind it."
      />

      <ul data-reveal className="mb-10 grid gap-4 sm:grid-cols-3" aria-label="Legend">
        {capabilityTiers.map((t) => (
          <li key={t.id} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={`mt-1 h-4 w-4 shrink-0 rounded border ${
                t.id === 'shipped' ? 'border-muted bg-graphite-2' : t.id === 'working' ? 'border-faint' : 'border-dashed border-faint'
              }`}
            />
            <div>
              <p className="text-sm text-paper">{t.label}</p>
              <p className="text-sm text-faint">{t.note}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="divide-y divide-line border-y border-line">
        {capabilities.map((group) => (
          <div key={group.area} data-reveal className="grid gap-5 py-7 lg:grid-cols-12 lg:gap-8">
            <h3 className="font-serif text-2xl text-paper lg:col-span-3">{group.area}</h3>
            {capabilityTiers.map((t) => (
              <div key={t.id} className="lg:col-span-3">
                <p className="eyebrow mb-3 lg:hidden">{t.label}</p>
                {group[t.id].length ? (
                  <TagList items={group[t.id]} variant={t.id} label={`${group.area}: ${t.label}`} />
                ) : (
                  <span className="hidden text-sm text-line-strong lg:inline" aria-hidden="true">·</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- Principles ---------------- */

function Principles() {
  return (
    <Section aria-labelledby="principles-title" className="border-t border-line">
      <SectionHeader
        index="04"
        eyebrow="How I work"
        title={<span id="principles-title">Principles, backed by practice</span>}
      />
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {principles.map((p, i) => (
          <li key={p.title} data-reveal className="bg-ink p-7 sm:p-9">
            <p className="font-mono text-xs text-crimson-text">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="mt-4 font-serif text-3xl text-paper">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ---------------- Lab and writing previews ---------------- */

function LabAndWriting() {
  const shipped = labEntries.filter((e) => e.status === 'Shipped').slice(0, 3)
  const learning = labEntries.filter((e) => e.status !== 'Shipped')
  return (
    <Section id="lab-preview" aria-labelledby="lab-title" className="border-t border-line">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader
            index="05"
            eyebrow="The lab"
            title={<span id="lab-title">Security, learned in the open</span>}
            lede="An evidence-graded journal of secure engineering in my own products, and the cybersecurity fundamentals I’m working through."
          />
          <ul className="divide-y divide-line border-y border-line">
            {shipped.map((e) => (
              <li key={e.id} data-reveal className="py-6">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={e.status} />
                  <span className="text-xs text-faint">{e.area}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-paper">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.summary}</p>
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-6 text-sm text-faint">
            Also in progress: {learning.map((e) => e.title).join(', ')}.
          </p>
          <ArrowLink to="/lab" className="mt-6">Open the lab journal</ArrowLink>
        </div>

        <div className="lg:col-span-5">
          <SectionHeader index="06" eyebrow="Writing" title="Notes in progress" />
          <ul className="space-y-6">
            {writing.slice(0, 4).map((w) => (
              <li key={w.slug} data-reveal className="border-l border-line pl-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-faint">{w.kind}</span>
                  <StatusBadge status={w.status} />
                </div>
                <p className="mt-2 font-serif text-xl leading-snug text-paper">{w.title}</p>
              </li>
            ))}
          </ul>
          <ArrowLink to="/writing" className="mt-8">See all writing</ArrowLink>
        </div>
      </div>
    </Section>
  )
}
