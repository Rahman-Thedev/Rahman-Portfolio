// Writing. Nothing is marked published until it is.
//
// To publish a piece, set `status: 'Published'`, add a `date`, and either:
//   - `href` to an external post (LinkedIn, Substack, Medium...), or
//   - `body`: an array of blocks rendered at /writing/<slug>.
//     Block types: 'p' (paragraph), 'h' (subheading), 'list' (items array), 'quote'.
//
// Example body: [{ type: 'p', text: '...' }, { type: 'h', text: '...' }, { type: 'list', items: ['...'] }]

export const writing = [
  {
    slug: 'building-beudryt',
    title: 'Building BEUDRYT: from an idea to a founder development platform',
    kind: 'Build log',
    status: 'Drafting',
    blurb: 'How the scope was set, what was cut, and the decisions that shaped the architecture.',
  },
  {
    slug: 'evidence-not-encouragement',
    title: 'Why founders need evidence, not encouragement',
    kind: 'Essay',
    status: 'Drafting',
    blurb: 'The case for a product that challenges founders instead of cheering them on.',
  },
  {
    slug: 'maintaining-a-saas',
    title: 'Lessons from building and maintaining a SaaS product',
    kind: 'Startup lessons',
    status: 'Planned',
    blurb: 'Releases, backups, monitoring and the unglamorous work that keeps a product alive.',
  },
  {
    slug: 'journey-into-cybersecurity',
    title: 'My journey into cybersecurity',
    kind: 'Lab notes',
    status: 'Planned',
    blurb: 'Why a product builder is learning to break things, and how I’m going about it.',
  },
  {
    slug: 'building-from-nigeria',
    title: 'Building technology products from Nigeria',
    kind: 'Essay',
    status: 'Planned',
    blurb: 'Payments, pricing, infrastructure and audience, from where I’m standing.',
  },
]

export const publishedWriting = writing.filter((w) => w.status === 'Published')
