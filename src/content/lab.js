// The lab: an evidence-based technical and cybersecurity journal.
//
// Rules:
//   - status 'Shipped' only when there is an artefact behind it (code, a test, a running system).
//   - 'In progress' and 'Planned' entries make no claim of skill, only of intent and direction.
//   - Add an entry by appending an object. `notes` is optional and renders as a short write-up.
//
// area values: 'Secure engineering' | 'Web security' | 'Linux' | 'Networking' | 'Offensive security labs'

export const labEntries = [
  {
    id: 'rls-isolation',
    title: 'Row-level security, proven by a test',
    area: 'Secure engineering',
    status: 'Shipped',
    date: 'Sep 2026',
    summary:
      'Every BEUDRYT table has row-level security. An automated two-account test applies all migrations to an in-memory Postgres and checks that one founder can never read or change another founder’s rows.',
    evidence: 'BEUDRYT test suite (private repository), 29 isolation checks passing on both development and production projects at launch of the foundation slice.',
    notes: [
      'Policies are easy to write and easy to get subtly wrong. A test that signs in as two different users and tries to cross the boundary catches the mistakes a code review misses.',
    ],
  },
  {
    id: 'webhooks',
    title: 'Payment webhooks: verify, de-duplicate, re-verify',
    area: 'Secure engineering',
    status: 'Shipped',
    date: 'Oct 2026',
    summary:
      'Subscription webhooks are rejected without a valid signature, de-duplicated so a replay is a no-op, and re-verified against the payment provider before any access is granted.',
    evidence: 'BEUDRYT billing module and unit tests (private repository). Unsigned webhook requests return 401 in the production smoke test.',
    notes: [
      'The browser callback and the webhook can arrive in either order. Both run the same idempotent function, so whichever arrives first wins and the second changes nothing.',
    ],
  },
  {
    id: 'prompt-injection',
    title: 'Prompt injection as an architecture decision',
    area: 'Web security',
    status: 'Shipped',
    date: 'Sep 2026',
    summary:
      'Rejected an AI setup that would have placed founder-typed text next to tools with access to connected integrations. Untrusted input and privileged capabilities are kept apart by design.',
    evidence: 'Documented in a BEUDRYT architecture decision record (private repository).',
  },
  {
    id: 'secrets-headers',
    title: 'Secrets hygiene and security headers',
    area: 'Secure engineering',
    status: 'Shipped',
    date: 'Oct 2026',
    summary:
      'A secrets check fails the build if anything secret-looking is committed. HSTS, CSP, nosniff and referrer headers are checked as part of a read-only production smoke test.',
    evidence: 'BEUDRYT CI and smoke test (private repository). This portfolio also ships a CSP and security headers via vercel.json.',
  },
  {
    id: 'linux',
    title: 'Linux fundamentals',
    area: 'Linux',
    status: 'In progress',
    date: null,
    summary: 'File system, permissions, users and groups, processes, services and logs. Notes will be published here as each topic is completed.',
  },
  {
    id: 'networking',
    title: 'Networking fundamentals',
    area: 'Networking',
    status: 'In progress',
    date: null,
    summary: 'The OSI and TCP/IP models, addressing and subnetting, DNS, HTTP and TLS, and reading traffic with packet capture tools.',
  },
  {
    id: 'owasp-self-audit',
    title: 'OWASP Top 10, applied to my own software',
    area: 'Web security',
    status: 'Planned',
    date: null,
    summary: 'Work through each OWASP Top 10 category and check it against software I already run, starting with BEUDRYT. Findings and fixes will be written up here.',
  },
  {
    id: 'pentest-labs',
    title: 'Penetration testing labs',
    area: 'Offensive security labs',
    status: 'Planned',
    date: null,
    summary: 'Hands-on practice on deliberately vulnerable, legally provided targets. Write-ups will be posted only for completed labs, and never for systems I don’t have permission to test.',
  },
]
