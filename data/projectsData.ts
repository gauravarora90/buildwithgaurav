interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Mira Bot — AI Telegram Agent',
    description: `An AI-powered Telegram agent built with OpenAI that automates GitHub workflows and CleverTap analytics. Mira handles repository events, surfaces insights, and takes action — all from a chat interface. Built to eliminate manual toil for engineering and growth teams.`,
    imgSrc: '/static/images/projects/mira-bot.png',
    href: 'https://github.com/gauravarora90',
  },
  {
    title: 'NFC Tap & Pay — Closed Loop Prepaid System',
    description: `A complete closed-loop NFC prepaid payment system enabling contactless tap-and-pay transactions. Designed from the ground up with card issuance, wallet management, merchant integration, and real-time transaction processing — all without relying on open-loop card networks.`,
    imgSrc: '/static/images/projects/nfc-tap-pay.png',
    href: 'https://www.raaho.in',
  },
  {
    title: 'DBXP — Digital Banking Platform',
    description: `A modular digital banking platform deployed across 15+ countries. DBXP powers core banking operations including accounts, cards, transfers, and compliance — built to support rapid market expansion with a single, configurable codebase.`,
    imgSrc: '/static/images/projects/dbxp.png',
    href: 'https://www.linkedin.com/in/gaurav-arora-7933692a/',
  },
  {
    title: "Zoto — Nigeria's #1 Payments Super App",
    description: `Led engineering on Zoto, Nigeria's leading payments super-app, enabling millions of users to send money, pay bills, and access financial services via mobile. Scaled the platform to handle high-volume transactions across a complex fintech regulatory environment.`,
    imgSrc: '/static/images/projects/zoto.png',
    href: 'https://www.linkedin.com/in/gaurav-arora-7933692a/',
  },
]

export default projectsData
