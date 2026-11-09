import { useState } from 'react'
import { Check, Copy, Github, Instagram, Mail, MessageCircle } from 'lucide-react'
import { links } from '../content/profile.js'
import { Section, SectionHeader } from './ui.jsx'

const REASONS = ['Hiring or internship', 'Collaboration or partnership', 'Client project', 'Career services (CareerBoost Hub)', 'Something else']

const inputCls =
  'w-full rounded-lg border border-line bg-ink px-4 py-3 text-paper placeholder:text-faint transition-colors focus:border-crimson-text focus:outline-none'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  // No backend: the form composes an email in the visitor's own mail app. Nothing is stored.
  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const reason = String(data.get('reason') || '')
    const subject = `${reason} · from ${name}`
    const body = `${String(data.get('message') || '').trim()}\n\n${name}\n${String(data.get('email') || '').trim()}`
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const channels = [
    { label: 'WhatsApp', value: 'Message directly', href: links.whatsapp, Icon: MessageCircle },
    { label: 'GitHub', value: 'rahman-thedev', href: links.github, Icon: Github },
    { label: 'Instagram', value: links.instagramHandle, href: links.instagram, Icon: Instagram },
  ]

  return (
    <Section id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <SectionHeader
        index="07"
        eyebrow="Contact"
        title={<span id="contact-title">Let’s talk about what you’re building</span>}
        lede="I’m open to engineering and product roles, internships, founder collaborations and client work. Tell me what you need and I’ll reply personally."
      />

      <div className="grid gap-12 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-5">
          <p className="eyebrow">Email</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 break-all text-lg text-paper underline decoration-line-strong underline-offset-[6px] hover:decoration-crimson-text">
              <Mail size={18} aria-hidden="true" className="shrink-0 text-crimson-text" />
              {links.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs text-muted transition-colors hover:border-line-strong hover:text-paper"
            >
              {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <span role="status" aria-live="polite" className="sr-only">{copied ? 'Email address copied' : ''}</span>
          </div>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3 text-paper">
                    <Icon size={18} aria-hidden="true" className="text-faint group-hover:text-crimson-text" />
                    {label}
                  </span>
                  <span className="text-sm text-faint group-hover:text-paper">
                    {value}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form data-reveal onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-line bg-graphite/60 p-6 sm:p-8 lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className="mb-2 block text-sm text-paper">Name</label>
              <input id="c-name" name="name" required autoComplete="name" className={inputCls} />
            </div>
            <div>
              <label htmlFor="c-email" className="mb-2 block text-sm text-paper">Your email</label>
              <input id="c-email" name="email" type="email" required autoComplete="email" className={inputCls} />
            </div>
          </div>
          <div>
            <label htmlFor="c-reason" className="mb-2 block text-sm text-paper">What is this about?</label>
            <select id="c-reason" name="reason" className={inputCls} defaultValue={REASONS[0]}>
              {REASONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="c-message" className="mb-2 block text-sm text-paper">Message</label>
            <textarea id="c-message" name="message" rows={5} required className={inputCls} placeholder="A few lines about the role, project or idea." />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-faint sm:max-w-xs">
              This opens your email app with the message ready to send. Nothing is stored on this site.
            </p>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-crimson-hover">
              <Mail size={16} aria-hidden="true" />
              Compose email
            </button>
          </div>
        </form>
      </div>
    </Section>
  )
}
