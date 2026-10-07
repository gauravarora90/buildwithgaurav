import Link from '@/components/Link'
import Image from '@/components/Image'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { val: '15+', label: 'Years building', sub: 'Production systems since 2011' },
  { val: '15+', label: 'Countries', sub: 'Running the banking platform' },
  { val: '50+', label: 'Microservices', sub: 'Architected at Raaho' },
  { val: 'AI', label: 'Agents', sub: 'Live in production' },
]

const ZENITH_SPEC = [
  { k: 'Model', v: 'Claude Sonnet for live chat, Haiku for offline work' },
  { k: 'Agent loop', v: 'Bounded: 5 tool round trips, then a human' },
  { k: 'Tools', v: 'Ten fixed tools, almost all read-only' },
  { k: 'Actions', v: 'Refunds and tickets need a tap from the user' },
  { k: 'Testing', v: 'Replay Lab re-runs past chats on new code' },
  { k: 'Cost', v: 'Prompt caching, and a ledger per feature' },
]

interface TItem {
  year: string
  title: string
  story: string
  tag: string
}

const TIMELINE: TItem[] = [
  {
    year: '2026',
    title: 'Shipped Zenith',
    story:
      'Designed and built an AI support agent for a live-events ticketing app. Claude with a bounded tool loop, human approval for refunds, a replay lab for testing changes against real chats, and a cost ledger per feature. Live in production.',
    tag: 'AI agents in production',
  },
  {
    year: '2024',
    title: 'Built AI Agents',
    story:
      'Built Chhotu Bot and Mira Bot on Telegram — automating GitHub, CleverTap, DigitalOcean. 90 minutes of daily work became 3 commands.',
    tag: 'AI engineering',
  },
  {
    year: '2023',
    title: 'Went Deep on Data',
    story:
      'CleverTap, Zoho, analytics pipelines. Started making product decisions from real data — not assumptions. Retention curves, funnel drops, cohort analysis — the numbers started telling stories.',
    tag: 'Data-driven product',
  },
  {
    year: '2022',
    title: 'AI Unlocked New Languages',
    story:
      "Used AI to learn Go, Python, Java — in production. Didn't study. Shipped. Discovered AI wasn't just a tool — it was a force multiplier for anyone willing to actually use it.",
    tag: 'AI-assisted development',
  },
  {
    year: '2021',
    title: 'Became a Product Engineer',
    story:
      'Joined Raaho as the engineering lead, where I still am. Stopped being handed specs — started writing them. Architected 50+ microservices from scratch, owned product decisions end-to-end, and built the kind of cross-functional culture where engineering and business are the same conversation.',
    tag: 'Raaho · present',
  },
  {
    year: '2021',
    title: 'Built a Payment System. Alone.',
    story:
      "Complete closed-loop NFC Tap & Pay prepaid system. Hardware integration, backend API, transaction engine, merchant dashboard — every layer, solo. When you're the only one who can fix it, you learn everything.",
    tag: 'Full stack · solo',
  },
  {
    year: '2019',
    title: 'Fintech Changed Everything',
    story:
      "Built Zoto — Nigeria's #1 payments super-app. Then DBXP — live across 15+ countries. Real money moving through systems I built. Learned what engineering means when it has to work — no exceptions.",
    tag: 'Fintech at scale',
  },
  {
    year: '2018',
    title: 'Added iOS',
    story:
      'Why stop at one platform? Expanded cross-platform without a team. One engineer, two ecosystems, zero excuses. Doubled the surface area, sharpened the instincts.',
    tag: 'Cross-platform',
  },
  {
    year: '2011',
    title: 'Started With Android',
    story:
      'Joined when the ecosystem was raw and fragmented. Wrote apps on devices with barely any RAM. Learned that solid fundamentals beat clever hacks — every single time.',
    tag: 'Mobile engineering',
  },
]

const ZENITH = projectsData[0]
const OTHER_WORK = projectsData.filter((p) => !p.featured)

// ─── Shared bits ──────────────────────────────────────────────────────────────

const BTN_PRIMARY =
  'inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700'
const BTN_SECONDARY =
  'inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50'
const PANEL = 'rounded-xl border border-neutral-200 bg-white'
const TEXT_LINK =
  'text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900'

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950">{title}</h2>
      {sub && <p className="mt-1.5 max-w-2xl text-[15px] text-neutral-500">{sub}</p>}
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home({
  posts,
}: {
  posts: { slug: string; date: string; title: string; summary?: string }[]
}) {
  return (
    <div className="space-y-16 pt-10 pb-20 sm:pt-16">
      {/* ════════════════════════════════════════════════════════ HERO */}
      <section>
        <div className="flex items-center gap-4">
          <Image
            src="/static/images/avatar.png"
            alt="Gaurav Arora"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full border border-neutral-200 object-cover"
          />
          <div>
            <div className="text-[15px] font-semibold text-neutral-950">Gaurav Arora</div>
            <div className="text-sm text-neutral-500">
              Principal Product Engineer · Leading engineering at Raaho
            </div>
          </div>
        </div>

        <h1 className="mt-8 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
          I build things that actually work.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          15 years of shipping production systems. An AI support agent live inside a ticketing app,
          banking platforms running in 15+ countries, and a logistics backend of 50+ microservices.
          I don&apos;t prototype. I ship.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/projects" className={BTN_PRIMARY}>
            See my work
          </Link>
          <Link href="/blog/zenith-ai-support-agent" className={BTN_SECONDARY}>
            Zenith case study
          </Link>
          <Link href={`mailto:${siteMetadata.email}`} className={`${TEXT_LINK} ml-1`}>
            Email me
          </Link>
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Open to principal and staff engineering roles at AI-first companies, remote or global.
        </p>

        <dl className={`${PANEL} mt-12 grid grid-cols-2 overflow-hidden lg:grid-cols-4`}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`border-neutral-200 p-5 ${i % 2 === 1 ? 'border-l' : ''} ${
                i > 1 ? 'border-t lg:border-t-0' : ''
              } ${i > 0 ? 'lg:border-l' : ''}`}
            >
              <dt className="text-xs font-medium text-neutral-500">{s.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
                {s.val}
              </dd>
              <dd className="mt-1 text-xs text-neutral-500">{s.sub}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ══════════════════════════════════════════ FEATURED: ZENITH */}
      <section>
        <SectionHead
          title="Latest: Zenith, an AI support agent in production"
          sub="The help and support chat inside a live-events ticketing app. It can read everything it needs and change nothing on its own."
        />

        <div className={`${PANEL} grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr]`}>
          <div>
            <p className="leading-relaxed text-neutral-700">
              A user types &ldquo;I never got my ticket&rdquo;. Zenith looks up their booking, works
              out what went wrong, and either fixes it in the chat or hands a pre-filled ticket to a
              human.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-neutral-600">
              {ZENITH.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {ZENITH.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-xs text-neutral-600"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link href="/blog/zenith-ai-support-agent" className={`${BTN_PRIMARY} mt-7`}>
              Read the case study
            </Link>
          </div>

          <dl className="divide-y divide-neutral-200 self-start rounded-lg border border-neutral-200 bg-neutral-50">
            {ZENITH_SPEC.map((row) => (
              <div key={row.k} className="grid grid-cols-[88px_1fr] gap-4 px-4 py-3">
                <dt className="font-mono text-xs text-neutral-500">{row.k}</dt>
                <dd className="text-sm leading-snug text-neutral-800">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═════════════════════════════════════════════ SELECTED WORK */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead
            title="Selected work"
            sub="Not demos. Not side projects. Production systems."
          />
          <Link href="/projects" className={`${TEXT_LINK} mb-6`}>
            All projects
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {OTHER_WORK.map((p) => (
            <div key={p.title} className={`${PANEL} flex flex-col p-6`}>
              <div className="flex items-center justify-between gap-3 text-xs text-neutral-500">
                <span>{p.kind}</span>
                <span className="font-mono">{p.year}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.description}</p>
              <p className="mt-3 text-sm leading-relaxed font-medium text-neutral-900">
                {p.highlights[0]}
              </p>
              {p.href && (
                <div className="mt-auto pt-5">
                  <Link href={p.href} className={TEXT_LINK}>
                    {p.linkLabel}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ CAREER */}
      <section>
        <SectionHead title="The evolution" sub="15 years, latest first." />

        <ol className={`${PANEL} divide-y divide-neutral-200`}>
          {TIMELINE.map((item, i) => (
            <li
              key={`${item.year}-${i}`}
              className="grid gap-x-6 gap-y-1 p-5 sm:grid-cols-[56px_1fr] sm:p-6"
            >
              <div className="pt-0.5 font-mono text-sm text-neutral-500">{item.year}</div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[15px] font-semibold text-neutral-950">{item.title}</h3>
                  <span className="text-xs text-neutral-500">{item.tag}</span>
                </div>
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-neutral-600">
                  {item.story}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══════════════════════════════════════════════════ WRITING */}
      {posts.length > 0 && (
        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead title="Writing" sub="Real stories from real builds." />
            <Link href="/blog" className={`${TEXT_LINK} mb-6`}>
              All posts
            </Link>
          </div>

          <div className={`${PANEL} divide-y divide-neutral-200`}>
            {posts.slice(0, 3).map((post) => {
              const { slug, date, title, summary } = post
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group grid gap-x-6 gap-y-1 p-5 transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-neutral-50 sm:grid-cols-[150px_1fr] sm:p-6"
                >
                  <time className="pt-0.5 font-mono text-xs text-neutral-500" dateTime={date}>
                    {formatDate(date, siteMetadata.locale)}
                  </time>
                  <div>
                    <h3 className="text-[15px] leading-snug font-semibold text-neutral-950 group-hover:underline">
                      {title}
                    </h3>
                    {summary && (
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                        {summary}
                      </p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ CONTACT */}
      <section className={`${PANEL} p-6 sm:p-10`}>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
          Got a hard problem and AI in the mix?
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-neutral-600">
          15 years of shipping gives you a certain radar for what&apos;s real and what&apos;s hype.
          I&apos;m leading engineering at Raaho today, and I&apos;m open to principal and staff
          engineering roles at AI-first companies. If you&apos;re building something that actually
          matters, let&apos;s talk.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href={`mailto:${siteMetadata.email}`} className={BTN_PRIMARY}>
            Start a conversation
          </Link>
          <Link href={siteMetadata.linkedin as string} className={BTN_SECONDARY}>
            LinkedIn
          </Link>
          <Link href={siteMetadata.github as string} className={BTN_SECONDARY}>
            GitHub
          </Link>
        </div>
      </section>
    </div>
  )
}
