import { usePageMeta } from '../lib/meta.js'
import { ButtonLink, Container, Mark } from '../components/ui.jsx'

export default function NotFound() {
  usePageMeta({ title: 'Page not found' })
  return (
    <div className="flex min-h-[80vh] items-center pt-24">
      <Container>
        <Mark className="h-12 w-12 text-crimson-text" />
        <h1 className="display mt-8 text-6xl text-paper sm:text-7xl">Nothing here.</h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
          That page doesn’t exist, or it moved when this site was rebuilt.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/">Go home</ButtonLink>
          <ButtonLink to="/#work" variant="secondary">See the work</ButtonLink>
        </div>
      </Container>
    </div>
  )
}
