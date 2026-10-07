'use client'

import { useEffect } from 'react'
import Link from '@/components/Link'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { val: '15+', label: 'Years building production systems' },
  { val: '15+', label: 'Countries running the banking platform' },
  { val: '50+', label: 'Microservices architected' },
  { val: 'AI', label: 'Agents live in production' },
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
    tag: 'AI Agents in Production',
  },
  {
    year: '2024',
    title: 'Built AI Agents',
    story:
      'Built Chhotu Bot and Mira Bot on Telegram — automating GitHub, CleverTap, DigitalOcean. 90 minutes of daily work became 3 commands.',
    tag: 'AI Engineering',
  },
  {
    year: '2023',
    title: 'Went Deep on Data',
    story:
      'CleverTap, Zoho, analytics pipelines. Started making product decisions from real data — not assumptions. Retention curves, funnel drops, cohort analysis — the numbers started telling stories.',
    tag: 'Data-Driven Product',
  },
  {
    year: '2022',
    title: 'AI Unlocked New Languages',
    story:
      "Used AI to learn Go, Python, Java — in production. Didn't study. Shipped. Discovered AI wasn't just a tool — it was a force multiplier for anyone willing to actually use it.",
    tag: 'AI-Assisted Development',
  },
  {
    year: '2021',
    title: 'Became a Product Engineer',
    story:
      'Joined Raaho as the engineering lead. Stopped being handed specs — started writing them. Architected 50+ microservices from scratch, owned product decisions end-to-end, and built the kind of cross-functional culture where engineering and business are the same conversation.',
    tag: 'Product + Engineering',
  },
  {
    year: '2021',
    title: 'Built a Payment System. Alone.',
    story:
      "Complete closed-loop NFC Tap & Pay prepaid system. Hardware integration, backend API, transaction engine, merchant dashboard — every layer, solo. When you're the only one who can fix it, you learn everything.",
    tag: 'Full Stack · Solo',
  },
  {
    year: '2019',
    title: 'Fintech Changed Everything',
    story:
      "Built Zoto — Nigeria's #1 payments super-app. Then DBXP — live across 15+ countries. Real money moving through systems I built. Learned what engineering means when it has to work — no exceptions.",
    tag: 'Fintech at Scale',
  },
  {
    year: '2018',
    title: 'Added iOS',
    story:
      'Why stop at one platform? Expanded cross-platform without a team. One engineer, two ecosystems, zero excuses. Doubled the surface area, sharpened the instincts.',
    tag: 'Cross-Platform',
  },
  {
    year: '2011',
    title: 'Started With Android',
    story:
      'Joined when the ecosystem was raw and fragmented. Wrote apps on devices with barely any RAM. Learned that solid fundamentals beat clever hacks — every single time.',
    tag: 'Mobile Engineering',
  },
]

const OTHER_WORK = projectsData.filter((p) => !p.featured)

// ─── Shared bits ──────────────────────────────────────────────────────────────

const BTN_PRIMARY =
  'inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500'
const BTN_SECONDARY =
  'inline-flex items-center rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/5'
const CARD =
  'rounded-2xl border border-white/10 bg-zinc-900/40 transition-colors hover:border-white/20'

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div data-reveal className="mb-10">
      <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 max-w-2xl text-zinc-400">{sub}</p>}
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home({
  posts,
}: {
  posts: { slug: string; date: string; title: string; summary?: string }[]
}) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{`
        [data-reveal] {
          opacity: 0; transform: translateY(14px);
          transition: opacity .5s ease, transform .5s ease;
        }
        [data-reveal].in-view { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════ HERO */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-20">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to principal engineering roles · AI-first teams
        </p>

        <h1 className="font-display mt-7 text-[clamp(40px,7vw,76px)] leading-[1.04] font-bold tracking-tight text-zinc-50">
          I build things that <span className="text-blue-400">actually work.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
          15 years of shipping production systems. An AI support agent live inside a ticketing app,
          banking platforms running in 15+ countries, and a logistics backend of 50+ microservices.{' '}
          <span className="text-zinc-100">I don&apos;t prototype. I ship.</span>
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="/projects" className={BTN_PRIMARY}>
            See my work
          </Link>
          <Link href="/blog/zenith-ai-support-agent" className={BTN_SECONDARY}>
            Zenith case study
          </Link>
          <Link
            href={`mailto:${siteMetadata.email}`}
            className="px-2 py-2.5 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Get in touch →
          </Link>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-3xl font-bold text-zinc-50">{s.val}</dd>
              <dt className="mt-1.5 text-sm leading-snug text-zinc-400">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* ══════════════════════════════════════════ FEATURED: ZENITH */}
      <section className="border-t border-white/10 py-20">
        <SectionHead
          eyebrow="Featured work"
          title="Zenith: an AI support agent in production"
          sub="The help and support chat inside a live-events ticketing app. It can read everything it needs and change nothing on its own."
        />

        <div data-reveal className={`${CARD} grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.1fr_1fr]`}>
          <div>
            <p className="leading-relaxed text-zinc-300">
              A user types &ldquo;I never got my ticket&rdquo;. Zenith looks up their booking, works
              out what went wrong, and either fixes it in the chat or hands a pre-filled ticket to a
              human.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-400">
              {projectsData[0].highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {projectsData[0].stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link href="/blog/zenith-ai-support-agent" className={`${BTN_PRIMARY} mt-8`}>
              Read the case study →
            </Link>
          </div>

          <dl className="divide-y divide-white/10 self-start rounded-xl border border-white/10 bg-zinc-950/60">
            {ZENITH_SPEC.map((row) => (
              <div key={row.k} className="grid grid-cols-[92px_1fr] gap-4 px-5 py-3.5">
                <dt className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  {row.k}
                </dt>
                <dd className="text-sm leading-snug text-zinc-200">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═════════════════════════════════════════════ SELECTED WORK */}
      <section className="border-t border-white/10 py-20">
        <SectionHead
          eyebrow="Selected work"
          title="Things I've built"
          sub="Not demos. Not side projects. Production systems."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {OTHER_WORK.map((p) => (
            <div key={p.title} data-reveal className={`${CARD} flex flex-col p-7`}>
              <div className="flex items-center justify-between gap-3 text-xs text-zinc-500">
                <span className="font-semibold tracking-wider uppercase">{p.kind}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-zinc-50">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">{p.highlights[0]}</p>
              {p.href && (
                <Link
                  href={p.href}
                  className="mt-auto pt-6 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  {p.linkLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ CAREER */}
      <section className="border-t border-white/10 py-20">
        <SectionHead eyebrow="The evolution" title="15 years, one direction" />

        <ol className="relative space-y-10 border-l border-white/10 pl-6 sm:pl-8">
          {TIMELINE.map((item, i) => (
            <li key={`${item.year}-${i}`} data-reveal className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full ring-4 ring-zinc-950 sm:-left-[37px] ${
                  i === 0 ? 'bg-blue-400' : 'bg-zinc-600'
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-sm font-bold text-blue-400">{item.year}</span>
                <h3 className="font-display text-lg font-bold text-zinc-50">{item.title}</h3>
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-400">
                  {item.tag}
                </span>
              </div>
              <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-zinc-400">{item.story}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══════════════════════════════════════════════════ WRITING */}
      {posts.length > 0 && (
        <section className="border-t border-white/10 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              eyebrow="Writing"
              title="From the blog"
              sub="Real stories from real builds."
            />
            <Link
              href="/blog"
              className="mb-10 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              All posts →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => {
              const { slug, date, title, summary } = post
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  data-reveal
                  className={`${CARD} group block p-7`}
                >
                  <time className="text-xs text-zinc-500" dateTime={date}>
                    {formatDate(date, siteMetadata.locale)}
                  </time>
                  <h3 className="font-display mt-3 text-lg leading-snug font-bold text-zinc-50 transition-colors group-hover:text-blue-300">
                    {title}
                  </h3>
                  {summary && (
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {summary}
                    </p>
                  )}
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ CONTACT */}
      <section className="border-t border-white/10 py-20">
        <div
          data-reveal
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Next chapter
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Got a hard problem <span className="text-blue-400">and AI in the mix?</span>
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
            15 years of shipping gives you a certain radar for what&apos;s real and what&apos;s
            hype. If you&apos;re building something that actually matters —{' '}
            <span className="text-zinc-100">let&apos;s talk.</span> I&apos;m open to principal and
            staff engineering roles at AI-first companies, remote or global.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={`mailto:${siteMetadata.email}`} className={BTN_PRIMARY}>
              Start a conversation →
            </Link>
            <Link href={siteMetadata.linkedin as string} className={BTN_SECONDARY}>
              LinkedIn
            </Link>
            <Link href={siteMetadata.github as string} className={BTN_SECONDARY}>
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
