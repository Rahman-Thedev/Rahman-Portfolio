import { writing, publishedWriting } from '../content/writing.js'
import { Link } from '../lib/router.jsx'
import { usePageMeta } from '../lib/meta.js'
import { ArrowLink, Container, StatusBadge } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'

export default function Writing() {
  usePageMeta({
    title: 'Writing',
    description: 'Build logs, startup lessons, product notes and cybersecurity learning from Rahman (Omenvoid Oracle).',
    path: '/writing',
  })
  return (
    <div className="pt-28 sm:pt-36">
      <Container>
        <header className="max-w-3xl pb-12">
          <p data-reveal className="eyebrow">Writing</p>
          <h1 data-reveal className="display mt-5 text-6xl text-paper sm:text-7xl">Build logs and notes</h1>
          <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
            How I think about building products, running a startup and learning security. {publishedWriting.length === 0
              ? 'Nothing is published yet. These are the pieces I’m drafting, listed so you know what’s coming.'
              : 'Pieces still in draft are listed after the published ones.'}
          </p>
        </header>

        <ol className="divide-y divide-line border-y border-line">
          {[...publishedWriting, ...writing.filter((w) => w.status !== 'Published')].map((w) => {
            const readable = w.status === 'Published'
            return (
              <li key={w.slug} data-reveal className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                <div className="flex items-center gap-3 md:col-span-3 md:flex-col md:items-start">
                  <StatusBadge status={w.status} />
                  <span className="text-sm text-faint">{w.kind}</span>
                  {w.date && <span className="font-mono text-xs text-faint">{w.date}</span>}
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-3xl leading-tight text-paper">
                    {readable && w.body ? (
                      <Link to={`/writing/${w.slug}`} className="hover:text-crimson-text">{w.title}</Link>
                    ) : readable && w.href ? (
                      <a href={w.href} target="_blank" rel="noopener noreferrer" className="hover:text-crimson-text">{w.title}</a>
                    ) : (
                      w.title
                    )}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted">{w.blurb}</p>
                </div>
              </li>
            )
          })}
        </ol>
        <div className="py-12">
          <ArrowLink to="/#contact">Want a piece sooner? Ask me</ArrowLink>
        </div>
      </Container>
    </div>
  )
}

export function Post({ slug }) {
  const post = publishedWriting.find((w) => w.slug === slug && w.body)
  usePageMeta({ title: post?.title || 'Not found', description: post?.blurb, path: post ? `/writing/${post.slug}` : undefined })
  if (!post) return <NotFound />
  return (
    <article className="pt-28 sm:pt-36">
      <Container className="max-w-3xl">
        <ArrowLink to="/writing">All writing</ArrowLink>
        <p className="eyebrow mt-10">{post.kind}{post.date && ` · ${post.date}`}</p>
        <h1 className="display mt-5 text-5xl text-paper sm:text-6xl">{post.title}</h1>
        <div className="mt-10 space-y-6 pb-20 text-lg leading-relaxed text-muted">
          {post.body.map((b, i) => {
            if (b.type === 'h') return <h2 key={i} className="pt-6 font-serif text-3xl text-paper">{b.text}</h2>
            if (b.type === 'quote') return <blockquote key={i} className="border-l-2 border-crimson-text pl-5 text-paper">{b.text}</blockquote>
            if (b.type === 'list')
              return (
                <ul key={i} className="list-disc space-y-2 pl-6 marker:text-crimson-text">
                  {b.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              )
            return <p key={i}>{b.text}</p>
          })}
        </div>
      </Container>
    </article>
  )
}
