// Identity, contact channels and the "Now" section.
// Everything a visitor reads about who Rahman is starts here.

export const profile = {
  brand: 'Omenvoid Oracle',
  name: 'Abdulrahman Shamsudeen Abiodun',
  shortName: 'Rahman',
  location: 'Nigeria',
  roles: ['Software Engineer', 'Product Builder', 'Entrepreneur', 'Aspiring Cybersecurity Professional'],
  headline: 'I build products that have to hold up in the real world.',
  intro:
    'I’m Rahman, a Computer Science student in Nigeria. I founded BEUDRYT and lead its product and engineering, a live platform that helps first-time founders test ideas with evidence before they build. I’m also Lead Product Engineer on Aegis at MoonDance Systems, I run CareerBoost Hub, and I’m building a disciplined foundation in cybersecurity.',
}

export const links = {
  email: 'abdulrahmanshamsudeen146@gmail.com',
  github: 'https://github.com/rahman-thedev',
  instagram: 'https://www.instagram.com/the_omenvoid_oracle',
  instagramHandle: '@the_omenvoid_oracle',
  whatsapp: 'https://wa.me/message/AUPT4YAL4MXBP1',
  linkedin: 'https://www.linkedin.com/in/shamsudeen-abdul-rahman-97ba622b8',
}

// Update this block whenever priorities change. Keep it honest and current.
export const now = {
  updated: 'November 2026',
  items: [
    {
      label: 'Building',
      text: 'BEUDRYT: the Founder Proof Ledger, weekly founder accountability and the Klei AI advisor.',
    },
    {
      label: 'Learning',
      text: 'Linux and networking fundamentals, then the OWASP Top 10, applied to software I already run.',
    },
    {
      label: 'Shipping',
      text: 'Product strategy and launches on Aegis, the AI employee from MoonDance Systems, as Lead Product Engineer.',
    },
    {
      label: 'Studying',
      text: 'B.Sc. (Ed.) Computer Science at KWASUED.',
    },
  ],
}

// How I work. Each principle points at a practice that exists in shipped work.
export const principles = [
  {
    title: 'Evidence over encouragement',
    text: 'Founders, products and engineers all improve faster when assumptions are written down and tested. It’s the idea BEUDRYT is built on, and the way I make my own decisions.',
  },
  {
    title: 'Write the decision down',
    text: 'Scope is a document, not a feeling. BEUDRYT runs on an approved scope and a trail of architecture decision records, so every trade-off has a reason someone can challenge.',
  },
  {
    title: 'Security is a default',
    text: 'Row-level security on every table, signed and idempotent payment webhooks, no secrets in git. These go in on day one, not after the first incident.',
  },
  {
    title: 'Done means verified',
    text: 'A release isn’t finished when it deploys. It’s finished when smoke tests pass in production and the data still matches. If a safety gate isn’t met, the release waits.',
  },
]
