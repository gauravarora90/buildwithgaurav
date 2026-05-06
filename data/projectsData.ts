interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  gradient?: string
  icon?: string
}

const projectsData: Project[] = [
  {
    title: 'Chhotu Bot — AI Telegram Assistant',
    description: `Kuch karna hai? Chhotu se karwa lo. An AI-powered Telegram assistant built with OpenAI that handles GitHub PR summaries, CleverTap analytics reports, and DigitalOcean cron monitoring — all via simple chat commands. Three commands replaced 90 minutes of daily dashboard-checking.`,
    gradient: 'from-violet-500 to-purple-700',
    icon: '🤖',
    href: 'https://github.com/gauravarora90',
  },
  {
    title: 'NFC Tap & Pay — Closed Loop Prepaid',
    description: `A complete closed-loop NFC prepaid payment system built solo — hardware integration, backend API, transaction engine, and merchant dashboard. Sub-300ms tap-to-acknowledgement. Deployed for real users processing real transactions.`,
    gradient: 'from-cyan-500 to-blue-700',
    icon: '📲',
    href: 'https://www.raaho.in',
  },
  {
    title: 'DBXP — Digital Banking Platform',
    description: `A modular digital banking platform deployed across 15+ countries. Powers core banking operations — accounts, cards, transfers, and compliance — built to support rapid market expansion with a single configurable codebase.`,
    gradient: 'from-emerald-500 to-teal-700',
    icon: '🏦',
    href: 'https://www.linkedin.com/in/gaurav-arora-7933692a/',
  },
  {
    title: "Zoto — Nigeria's #1 Payments Super App",
    description: `Led engineering on Zoto, Nigeria's leading payments super-app — enabling millions of users to send money, pay bills, and access financial services via mobile. Scaled the platform to handle high-volume transactions across a complex fintech regulatory environment.`,
    gradient: 'from-orange-500 to-red-600',
    icon: '💸',
    href: 'https://www.linkedin.com/in/gaurav-arora-7933692a/',
  },
]

export default projectsData
