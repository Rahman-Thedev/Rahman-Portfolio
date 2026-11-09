import { links, profile } from '../content/profile.js'
import { Link } from '../lib/router.jsx'
import { Container, Mark } from './ui.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Mark className="h-5 w-5 text-crimson-text" />
            <span className="font-serif text-xl">{profile.brand}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-faint">
            {profile.name}. {profile.roles.join(' · ')}.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
          <Link to="/#work" className="text-muted hover:text-paper">Work</Link>
          <Link to="/lab" className="text-muted hover:text-paper">Lab</Link>
          <Link to="/writing" className="text-muted hover:text-paper">Writing</Link>
          <a href={`mailto:${links.email}`} className="text-muted hover:text-paper">Email</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper">GitHub</a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper">Instagram</a>
        </nav>
      </Container>
      <Container className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:justify-between">
        <p>© {year} {profile.name}</p>
        <p>
          Built with React and Vite.{' '}
          <a href="https://github.com/rahman-thedev/Rahman-Portfolio" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-paper">
            Source on GitHub
          </a>
        </p>
      </Container>
    </footer>
  )
}
