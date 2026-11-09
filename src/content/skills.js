// Capabilities, graded by evidence.
//   shipped:  used in production work that can be pointed to.
//   working:  used in real projects, still deepening.
//   learning: actively studying. No claim of proficiency.

export const capabilityTiers = [
  { id: 'shipped', label: 'Shipped in production', note: 'Used in live products I can point to.' },
  { id: 'working', label: 'Working knowledge', note: 'Used in real projects. Still deepening.' },
  { id: 'learning', label: 'Currently learning', note: 'Actively studying. Not yet claiming proficiency.' },
]

export const capabilities = [
  {
    area: 'Software development',
    shipped: ['TypeScript', 'React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    working: ['Vite', 'Zod', 'shadcn/ui'],
    learning: [],
  },
  {
    area: 'Backend and infrastructure',
    shipped: ['Supabase', 'PostgreSQL', 'Row-level security', 'SQL migrations', 'Vercel', 'Git', 'GitHub'],
    working: ['GitHub Actions', 'Sentry', 'PostHog', 'Web push'],
    learning: [],
  },
  {
    area: 'AI and product engineering',
    shipped: ['LLM integration (Gemini API)', 'AI provider abstraction', 'Payments (Flutterwave)', 'Webhooks', 'SaaS subscriptions'],
    working: ['Structured LLM output', 'AI cost and rate limiting', 'MediaPipe (computer vision)'],
    learning: [],
  },
  {
    area: 'Business and product',
    shipped: ['Product strategy', 'Scope and roadmap', 'Pricing and packaging', 'Technical documentation', 'Decision records'],
    working: ['Business model development', 'Product research', 'ATS resume strategy'],
    learning: [],
  },
  {
    area: 'Cybersecurity',
    shipped: ['Secure SaaS defaults', 'Secrets hygiene', 'Security headers'],
    working: ['Web application security'],
    learning: ['Linux', 'Networking fundamentals', 'OWASP Top 10', 'Penetration testing labs'],
  },
]
