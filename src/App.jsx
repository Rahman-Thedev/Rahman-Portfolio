import { useEffect } from 'react'
import { matchRoute, RouterProvider, useRouter } from './lib/router.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Lab from './pages/Lab.jsx'
import Writing, { Post } from './pages/Writing.jsx'
import NotFound from './pages/NotFound.jsx'

/** Fades elements marked data-reveal into view once. Skipped entirely without IntersectionObserver. */
function useReveal(routeKey) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    document.documentElement.classList.add('js-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [routeKey])
}

function Page() {
  const { path } = useRouter()
  const route = matchRoute(path)
  useReveal(path)

  switch (route.name) {
    case 'home':
      return <Home />
    case 'work':
      return <CaseStudy key={route.params.slug} slug={route.params.slug} />
    case 'lab':
      return <Lab />
    case 'writing':
      return <Writing />
    case 'post':
      return <Post slug={route.params.slug} />
    default:
      return <NotFound />
  }
}

export default function App() {
  return (
    <RouterProvider>
      <div className="page-backdrop min-h-screen overflow-x-clip">
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          <Page />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  )
}
