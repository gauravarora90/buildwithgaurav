export interface Project {
  title: string
  kind: string
  year: string
  description: string
  highlights: string[]
  stack: string[]
  href?: string
  linkLabel?: string
  featured?: boolean
}

const projectsData: Project[] = [
  {
    title: 'Zenith',
    kind: 'AI support agent',
    year: '2026',
    description:
      'The help and support chat inside a live-events ticketing app. Claude runs a bounded tool loop over the user’s own bookings: it finds the ticket, explains the refund rule and drafts the support ticket. It can read what it needs and change nothing on its own.',
    highlights: [
      'Refunds and tickets need a tap from the user. The agent cannot carry them out.',
      'Ownership, personal-data and language rules are enforced in code, not only in the prompt.',
      'A Replay Lab re-runs past chats against new code before it ships.',
      'A cost ledger tracks Claude spend per feature, with off switches.',
    ],
    stack: ['Claude', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Flutter'],
    href: '/blog/zenith-ai-support-agent',
    linkLabel: 'Read the case study',
    featured: true,
  },
  {
    title: 'Chhotu Bot',
    kind: 'AI assistant',
    year: '2024',
    description:
      'A Telegram assistant that handles GitHub PR summaries, CleverTap analytics reports and DigitalOcean cron monitoring through chat commands.',
    highlights: ['Three commands replaced about 90 minutes of daily dashboard-checking.'],
    stack: ['OpenAI', 'Python', 'Telegram', 'GitHub', 'CleverTap', 'DigitalOcean'],
    href: '/blog/chhotu-bot',
    linkLabel: 'Read the story',
  },
  {
    title: 'NFC Tap & Pay',
    kind: 'Fintech · solo build',
    year: '2023',
    description:
      'A complete closed-loop NFC prepaid payment system: hardware integration, backend API, transaction engine and merchant dashboard.',
    highlights: [
      'Built alone, every layer.',
      'Sub-300ms from tap to acknowledgement, on real transactions.',
    ],
    stack: ['NFC', 'Payments', 'Hardware', 'Backend API'],
    href: '/blog/nfc-tap-and-pay',
    linkLabel: 'Read the case study',
  },
  {
    title: 'DBXP',
    kind: 'Digital banking platform',
    year: '2018–21',
    description:
      'A modular digital banking platform covering accounts, cards, transfers and compliance, built so one configurable codebase can serve many markets.',
    highlights: ['Live in 15+ countries.'],
    stack: ['Digital banking', 'Multi-market'],
  },
  {
    title: 'Zoto',
    kind: 'Payments super-app · Nigeria',
    year: '2016–18',
    description:
      'Nigeria’s leading payments super-app at Mahindra Comviva: send money, pay bills and reach financial services from a phone.',
    highlights: ['Millions of users, high-volume transactions, a regulated market.'],
    stack: ['Payments', 'Fintech'],
  },
]

export default projectsData
