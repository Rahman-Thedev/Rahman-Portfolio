// Ventures, collaborations and builds.
// Rule for this file: describe only what exists. No invented users, revenue or features.
//
// status values: 'Live' | 'In development' | 'Prototype' | 'Active' | 'Collaboration' | 'Archived', or null when unconfirmed
// A case study page is generated at /work/<slug> for every entry with a `caseStudy`.

export const ventures = [
  {
    slug: 'beudryt',
    name: 'BEUDRYT',
    tagline: 'An evidence-driven operating system for first-time founders.',
    role: 'Founder · Product and engineering lead',
    period: 'Jul 2024 – Present',
    status: 'Live',
    kind: 'Principal project',
    featured: true,
    link: { href: 'https://beudryt.com', label: 'beudryt.com' },
    summary:
      'BEUDRYT takes a founder through five guided stages, from problem to real-world test. An AI reviewer challenges vague or unsupported answers, evidence is recorded in a Founder Proof Ledger, and every stage ends with a written report. I own the product, the scope and the technical decisions.',
    highlights: [
      'Live SaaS on Next.js, TypeScript and Supabase, with row-level security on every table',
      'Provider-abstracted AI layer, which let the product switch LLM vendors without touching business logic',
      'USD subscriptions through Flutterwave, with signed, de-duplicated and re-verified webhooks',
      'Klei AI advisor, Founder Proof Ledger, weekly accountability, simulator and an 11-tool Startup Kit',
    ],
    stack: ['Next.js', 'TypeScript', 'React', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Zod', 'Gemini API', 'Flutterwave', 'Vercel', 'Sentry', 'PostHog', 'GitHub Actions'],
    caseStudy: {
      intro:
        'Most first-time founders don’t fail for lack of encouragement. They fail because they build on assumptions nobody tested. BEUDRYT is my answer to that: a product that asks for evidence, not enthusiasm.',
      facts: [
        { label: 'Role', value: 'Founder, product owner, engineering lead' },
        { label: 'Status', value: 'Live, in active development' },
        { label: 'Operator', value: 'Klei Holdings' },
        { label: 'Code', value: 'Private repository. Architecture notes on request.' },
      ],
      sections: [
        {
          title: 'The problem',
          paragraphs: [
            'First-time founders get plenty of motivation and very little friction. Generic AI tools tend to agree with whatever they’re told, and most founder content is advice, not process.',
            'The gap I wanted to close: a structured path that makes a founder state assumptions, go and collect real evidence, and make decisions they can defend before they spend money building.',
          ],
        },
        {
          title: 'What the product does',
          items: [
            { title: 'Five guided stages', text: 'Understand, Validate, Decide, Execute, Reflect. Each answer is checked for vague or unsupported reasoning, with up to two follow-up challenges, and each stage ends with a written report.' },
            { title: 'Founder Proof Ledger', text: 'Every assumption, experiment and decision in one place. Evidence is rated by fixed rules and its source is always shown, so founder-reported claims and receipts are never confused.' },
            { title: 'Klei AI advisor', text: 'A decision advisor that knows the founder’s idea, stage and evidence, and suggests the cheapest next test rather than a long plan.' },
            { title: 'Founder Accountability', text: 'Weekly objectives, assignments that name the evidence they should produce, blockers and progress reviews.' },
            { title: 'Simulator and Startup Kit', text: 'Month-by-month number testing before money is at risk, plus eleven founder tools and learning tracks.' },
          ],
        },
        {
          title: 'Architecture',
          list: [
            'Next.js App Router and TypeScript on Vercel, with preview deployments for every change.',
            'Supabase for auth, Postgres and storage. Row-level security on every table, with schema changes shipped as versioned SQL migrations.',
            'AI runs server-side only, behind a single provider interface. Model output is JSON validated with Zod, every call is logged, and per-user and site-wide daily caps protect the budget.',
            'Payments behind a provider interface: USD subscriptions through Flutterwave hosted checkout, so card data never touches BEUDRYT’s servers.',
            'Sentry for errors, PostHog for product analytics, web push and transactional email for lifecycle messages.',
          ],
        },
        {
          title: 'Decisions that mattered',
          items: [
            {
              title: 'Abstract what is likely to change',
              text: 'The AI and payment layers were wrapped behind interfaces from day one, even with one implementation each. That paid off twice: the LLM moved from Claude to Gemini, and payments moved from Paystack to Flutterwave, each without rewriting business logic.',
            },
            {
              title: 'Treat prompt injection as a product risk',
              text: 'One way to power the AI would have exposed connected workspace integrations to text typed by founders. I rejected it. Untrusted user input never sits next to privileged tools.',
            },
            {
              title: 'Protect founders’ ideas',
              text: 'Free-tier AI usage can allow a provider to train on prompts. Founders’ ideas are in those prompts, so production requires a billing-enabled key.',
            },
            {
              title: 'Written observations, not fake scores',
              text: 'Stage feedback is written, with no numeric scores or percentages. A score on an unvalidated idea is false precision.',
            },
            {
              title: 'Fail honestly',
              text: 'When live web research is unavailable, the product says so and labels results as hypotheses instead of degrading silently.',
            },
          ],
        },
        {
          title: 'How it is kept safe in production',
          list: [
            'An automated two-account isolation test runs every migration against in-memory Postgres and proves one founder can’t read another’s data.',
            'Payment webhooks are signature-checked, de-duplicated and re-verified against the provider before any entitlement changes.',
            'A secrets check fails the build if anything secret-looking is committed. HSTS, CSP and related security headers are verified in production.',
            'Releases run against a read-only production smoke test, and schema migrations wait for a verified backup. If the gate is not met, the migration does not ship.',
          ],
        },
        {
          title: 'What I’m working on next',
          paragraphs: [
            'Deepening the Proof Ledger and accountability loop, improving the quality of Klei AI’s recommendations, and turning the build into a series of written build logs on this site.',
          ],
        },
      ],
    },
  },
  {
    slug: 'aegis',
    name: 'Aegis',
    tagline: 'An AI employee that takes work from chat to a finished result, built by MoonDance Systems.',
    role: 'Lead Product Engineer · MoonDance Systems',
    period: 'Oct 2026 – Present',
    status: 'Active',
    kind: 'Role',
    link: { href: 'https://getaegis.org', label: 'getaegis.org' },
    summary:
      'Aegis is an AI-powered co-worker: you give it a job in Slack, Telegram, Discord or on the web, and it carries research, code, reports and recurring work through to a finished result. As Lead Product Engineer I contribute to its product strategy and development. Aegis is MoonDance’s product; I am part of the team, not an owner or officer.',
    highlights: [
      'Product strategy and direction for an AI agent product',
      'Launching product features and running product operations',
      'Working between design and engineering so decisions are made once and made clearly',
    ],
    stack: ['Product strategy', 'Product engineering', 'Product operations', 'AI agents', 'Launch'],
    caseStudy: {
      intro:
        'Most AI tools hand you a draft and leave the rest to you. Aegis is built to finish the job. My work is making sure what gets built is the right thing, in the right order, and that it actually ships.',
      facts: [
        { label: 'Role', value: 'Lead Product Engineer' },
        { label: 'Company', value: 'MoonDance Systems' },
        { label: 'Since', value: 'October 2026' },
        { label: 'Setup', value: 'Hybrid. Team member, not an owner or officer.' },
      ],
      sections: [
        {
          title: 'The product',
          paragraphs: [
            'Aegis works where teams already talk. A request in chat becomes a piece of finished work, whether that is research, code, a report or a recurring task, so people can hand off the job instead of supervising it step by step.',
          ],
        },
        {
          title: 'My role',
          list: [
            'Contributing to Aegis’s product strategy: what it should do, for whom, and what comes first.',
            'Product development and launch work, from shaping a feature to getting it in front of users.',
            'Product operations and coordination across design and engineering.',
          ],
        },
      ],
    },
  },
  {
    slug: 'careerboost-hub',
    name: 'CareerBoost Hub',
    tagline: 'Career positioning services built around how hiring systems actually read applications.',
    role: 'Founder',
    period: 'Mar 2025 – Present',
    status: 'Active',
    kind: 'Venture',
    link: null,
    summary:
      'A career venture that helps people get hired. Today that means ATS-optimised resumes, cover letters, LinkedIn positioning, interview preparation and executive biographies. The aim is a career marketplace that connects candidates with the right hires. I design the services, set the packaging and pricing, and deliver the work.',
    highlights: [
      'ATS resume strategy: structure, keywords and formatting that survive applicant tracking systems',
      'Service design, packaging and pricing for individual clients',
      'Direct, customer-facing delivery from brief to final document',
    ],
    stack: ['ATS strategy', 'Service design', 'Pricing', 'Copywriting', 'Client delivery'],
    caseStudy: {
      intro:
        'Good candidates are often filtered out before a person reads their application. CareerBoost Hub exists to fix the parts of that problem that are fixable: structure, clarity and positioning.',
      facts: [
        { label: 'Role', value: 'Founder' },
        { label: 'Since', value: 'March 2025' },
        { label: 'Type', value: 'Career services, growing toward a marketplace' },
      ],
      sections: [
        {
          title: 'Services',
          list: ['ATS resume optimisation', 'Cover letters', 'LinkedIn profile positioning', 'Interview preparation', 'Executive biographies'],
        },
        {
          title: 'What I own',
          list: [
            'Resume strategy: how an applicant tracking system parses a document, and how a recruiter skims it in seconds.',
            'Packaging services into clear offers, and pricing them.',
            'Client communication and delivery from brief to final document.',
          ],
        },
      ],
    },
  },
  {
    slug: 'mykudi',
    name: 'MyKudi',
    tagline: 'Smart savings for everyday Nigerians, within the Klei business vision.',
    role: 'Co-founder · Technology and product contributor',
    period: 'Since 2025',
    status: 'Prototype',
    kind: 'Venture',
    link: null,
    summary:
      'A fintech initiative focused on making saving simple and habitual for everyday Nigerians. I contribute to the product direction and built the working prototype. The product is not launched, and the prototype is not a licensed financial service.',
    highlights: [
      'Prototype web app: dashboard, savings goals, bills, transfers, transaction history and an AI assistant',
      'Built with React, TypeScript, Vite, shadcn/ui and Supabase',
      'Part of the wider Klei business vision alongside BEUDRYT',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'shadcn/ui', 'Tailwind CSS'],
    caseStudy: {
      intro:
        'Saving is hard when income is irregular and tools assume it isn’t. MyKudi explores what a savings product designed for everyday Nigerians should feel like.',
      facts: [
        { label: 'Role', value: 'Co-founder, technology and product contributor' },
        { label: 'Status', value: 'Prototype. Not launched.' },
      ],
      sections: [
        {
          title: 'What exists today',
          paragraphs: [
            'A working prototype that models the core flows: a dashboard, savings goals, bills, transfers, transaction history and an in-app AI assistant. It was built rapidly with an AI-assisted app builder and Supabase to test the experience before committing to infrastructure.',
          ],
        },
        {
          title: 'What it is not, yet',
          paragraphs: [
            'MyKudi does not hold customer funds or move real money. Any production version needs a licensed partner, compliance work and a security review before it handles a single naira.',
          ],
        },
      ],
    },
  },
]

// Smaller, earlier builds. Honest one-liners, real links only.
export const builds = [
  {
    name: 'Driver Sentinel',
    summary: 'Real-time drowsiness detection in the browser. Tracks facial landmarks with MediaPipe and raises audio and visual alerts when a driver’s eyes close for too long.',
    stack: ['React', 'MediaPipe', 'Computer vision'],
    href: 'https://driver-safety-system.vercel.app',
    repo: 'https://github.com/rahman-thedev/Driver-Safety-system',
    year: '2026',
  },
  {
    name: 'VOID gallery',
    summary: 'An editorial, minimal digital art gallery. An exercise in restraint: typography, spacing and quiet motion.',
    stack: ['TypeScript', 'React', 'Design'],
    href: 'https://gallery-stillness.vercel.app',
    year: '2026',
  },
  {
    name: 'DataTrend',
    summary: 'A 14-day mobile data tracker. Log daily usage, see the trend, and get a forecast before you run out.',
    stack: ['JavaScript', 'Charts', 'Forecasting'],
    href: 'https://rahman-thedev.github.io/Oracle_DataTrend/',
    repo: 'https://github.com/rahman-thedev/Oracle_DataTrend',
    year: '2026',
  },
  {
    name: 'Cipher AgriTech',
    summary: 'A landing page for a concept company applying AI to agricultural equipment.',
    stack: ['HTML', 'CSS', 'Responsive'],
    href: 'https://rahman-thedev.github.io/Cipher-Agritech-land-page/',
    repo: 'https://github.com/rahman-thedev/Cipher-Agritech-land-page',
    year: '2026',
  },
  {
    name: 'Oracle VPN (interface concept)',
    summary: 'A terminal-styled VPN client interface with simulated node selection and key validation. A UI study, not a working VPN.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://rahman-thedev.github.io/ORACLE_VPN_v1.0.4/',
    repo: 'https://github.com/rahman-thedev/ORACLE_VPN_v1.0.4',
    year: '2026',
  },
]

export const caseStudies = ventures.filter((v) => v.caseStudy)
