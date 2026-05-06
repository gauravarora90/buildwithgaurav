'use client'

import { useEffect } from 'react'
import Link from '@/components/Link'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

// ─── Full-bleed: escapes SectionContainer's max-width ────────────────────────
const FB: React.CSSProperties = { width: '100vw', marginLeft: 'calc(50% - 50vw)' }

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { val: '15+', label: 'Years', sub: 'Building production systems', cls: 'float-0' },
  { val: '50+', label: 'Microservices', sub: 'Architected at scale', cls: 'float-1' },
  { val: 'AI', label: 'Agents', sub: 'In production today', cls: 'float-2' },
  { val: '15', label: 'Countries', sub: 'Banking platform live', cls: 'float-3' },
]

type TagColor = 'blue' | 'teal' | 'purple' | 'green' | 'amber'
const TAG: Record<TagColor, string> = {
  blue: 'bg-[rgba(37,99,235,0.1)] text-[#60A5FA] border border-[rgba(37,99,235,0.2)]',
  teal: 'bg-[rgba(20,184,166,0.1)] text-teal-400 border border-teal-500/20',
  purple: 'bg-[rgba(124,58,237,0.1)] text-purple-400 border border-purple-500/20',
  green: 'bg-[rgba(34,197,94,0.1)] text-green-400 border border-green-500/20',
  amber: 'bg-[rgba(217,119,6,0.1)] text-amber-400 border border-amber-500/20',
}

interface TItem {
  year: string
  title: string
  story: string
  tag: string
  tagColor: TagColor
  special?: boolean
}

const TIMELINE: TItem[] = [
  {
    year: '2011',
    title: 'Started With Android',
    story:
      'Joined when the ecosystem was raw and fragmented. Wrote apps on devices with barely any RAM. Learned that solid fundamentals beat clever hacks — every single time.',
    tag: 'Mobile Engineering',
    tagColor: 'blue',
  },
  {
    year: '2018',
    title: 'Added iOS',
    story:
      'Why stop at one platform? Expanded cross-platform without a team. One engineer, two ecosystems, zero excuses. Doubled the surface area, sharpened the instincts.',
    tag: 'Cross-Platform',
    tagColor: 'blue',
  },
  {
    year: '2019',
    title: 'Fintech Changed Everything',
    story:
      "Built Zoto — Nigeria's #1 payments super-app. Then DBXP — live across 15+ countries. Real money moving through systems I built. Learned what engineering means when it has to work — no exceptions.",
    tag: 'Fintech at Scale',
    tagColor: 'teal',
  },
  {
    year: '2021',
    title: 'Built a Payment System. Alone.',
    story:
      "Complete closed-loop NFC Tap & Pay prepaid system. Hardware integration, backend API, transaction engine, merchant dashboard — every layer, solo. When you're the only one who can fix it, you learn everything.",
    tag: 'Full Stack · Solo',
    tagColor: 'purple',
  },
  {
    year: '2021',
    title: 'Became a Product Engineer',
    story:
      'Joined Raaho as the engineering lead. Stopped being handed specs — started writing them. Architected 50+ microservices from scratch, owned product decisions end-to-end, and built the kind of cross-functional culture where engineering and business are the same conversation.',
    tag: 'Product + Engineering',
    tagColor: 'blue',
  },
  {
    year: '2022',
    title: 'AI Unlocked New Languages',
    story:
      "Used AI to learn Go, Python, Java — in production. Didn't study. Shipped. Discovered AI wasn't just a tool — it was a force multiplier for anyone willing to actually use it.",
    tag: 'AI-Assisted Development',
    tagColor: 'green',
  },
  {
    year: '2023',
    title: 'Went Deep on Data',
    story:
      'CleverTap, Zoho, analytics pipelines. Started making product decisions from real data — not assumptions. Retention curves, funnel drops, cohort analysis — the numbers started telling stories.',
    tag: 'Data-Driven Product',
    tagColor: 'amber',
  },
  {
    year: '2024',
    title: 'Built AI Agents',
    story:
      'Built Chhotu Bot and Mira Bot on Telegram — automating GitHub, CleverTap, DigitalOcean. 90 minutes of daily work became 3 commands. The future arrived early — I just built it first.',
    tag: 'AI Engineering',
    tagColor: 'blue',
  },
  {
    year: '2026',
    title: "What's Next ✦",
    story:
      '15 years of building. Now looking for an AI-first company where this entire journey — mobile, fintech, data, AI agents, product thinking — actually matters. Remote. Global. Ambitious.',
    tag: 'Open to Opportunities',
    tagColor: 'blue',
    special: true,
  },
]

const PROJECTS = [
  {
    title: 'Chhotu Bot',
    tag: 'AI Agent',
    desc: 'Telegram AI assistant automating GitHub, CleverTap & DigitalOcean. 90 min of daily dashboard-checking → 3 commands.',
    tagStyle: 'bg-[rgba(37,99,235,0.1)] text-[#60A5FA] border border-[rgba(37,99,235,0.2)]',
    hoverBorder: 'hover:border-[rgba(37,99,235,0.6)]',
    hoverGlow: 'hover:shadow-[0_0_32px_rgba(37,99,235,0.18)]',
    link: null as null | { label: string; href: string; color: string },
  },
  {
    title: 'NFC Tap & Pay',
    tag: 'Fintech · Solo Build',
    desc: 'Complete closed-loop prepaid payment system. Built alone — hardware to merchant dashboard. Sub-300ms taps.',
    tagStyle: 'bg-[rgba(124,58,237,0.1)] text-purple-400 border border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/60',
    hoverGlow: 'hover:shadow-[0_0_32px_rgba(124,58,237,0.18)]',
    link: { label: 'View case study →', href: '/blog/nfc-tap-and-pay', color: 'text-purple-400' },
  },
  {
    title: 'DBXP Banking Platform',
    tag: 'Digital Banking',
    desc: 'Production digital banking platform. 15+ countries. Real money. Real users. Real scale.',
    tagStyle: 'bg-[rgba(8,145,178,0.1)] text-cyan-400 border border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/60',
    hoverGlow: 'hover:shadow-[0_0_32px_rgba(8,145,178,0.18)]',
    link: null,
  },
  {
    title: 'Zoto Super App',
    tag: 'Payments · Nigeria',
    desc: "Nigeria's #1 payments super-app at Mahindra Comviva. Millions of users. High-stakes fintech at scale.",
    tagStyle: 'bg-[rgba(217,119,6,0.1)] text-amber-400 border border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/60',
    hoverGlow: 'hover:shadow-[0_0_32px_rgba(217,119,6,0.18)]',
    link: null,
  },
]

// ─── Timeline card sub-component ─────────────────────────────────────────────
function TCard({ item }: { item: TItem }) {
  return (
    <div
      data-reveal
      className={`w-full rounded-2xl border border-[#1E293B] bg-[#0D1117] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,0.5)] hover:shadow-[0_0_24px_rgba(37,99,235,0.12)] ${item.special ? 'special-card' : ''}`}
    >
      <div className="mb-1.5 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">
        {item.year}
      </div>
      <h3 className="mb-3 text-lg font-bold text-[#F8FAFC]">{item.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-[#94A3B8]">{item.story}</p>
      <span
        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${TAG[item.tagColor]}`}
      >
        {item.tag}
      </span>
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
        @keyframes badgeDot  { 0%,100%{opacity:1}   50%{opacity:0.25} }
        @keyframes floatUp   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes specialCard {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0), 0 0 0 1px #1E293B; }
          50%     { box-shadow: 0 0 28px rgba(37,99,235,0.3), 0 0 0 1px rgba(37,99,235,0.8); }
        }
        .badge-dot  { animation: badgeDot  2s   ease-in-out infinite; }
        .float-0    { animation: floatUp   3s   ease-in-out infinite; }
        .float-1    { animation: floatUp   3s   ease-in-out infinite 0.5s; }
        .float-2    { animation: floatUp   3s   ease-in-out infinite 1s; }
        .float-3    { animation: floatUp   3s   ease-in-out infinite 1.5s; }
        .special-card { animation: specialCard 2s ease-in-out infinite; }

        [data-reveal] {
          opacity: 0; transform: translateY(22px);
          transition: opacity .55s ease, transform .55s ease;
        }
        [data-reveal].in-view  { opacity: 1; transform: translateY(0); }
        [data-reveal][data-d="1"] { transition-delay: .08s; }
        [data-reveal][data-d="2"] { transition-delay: .16s; }
        [data-reveal][data-d="3"] { transition-delay: .24s; }
        [data-reveal][data-d="4"] { transition-delay: .32s; }
      `}</style>

      {/* ════════════════════════════════════════════════════════ HERO */}
      <section
        style={FB}
        className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-start overflow-hidden bg-black px-6 pt-10 pb-20 sm:pt-14 sm:pb-24"
      >
        {/* Top-right nebula glow */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[700px] w-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(37,99,235,0.12) 0%, transparent 65%)',
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            {/* ── Left: copy ── */}
            <div className="flex-1 space-y-8 lg:max-w-xl">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium text-[#60A5FA]"
                style={{
                  borderColor: 'rgba(37,99,235,0.4)',
                  backgroundColor: 'rgba(37,99,235,0.07)',
                }}
              >
                <span className="badge-dot h-2 w-2 flex-shrink-0 rounded-full bg-[#2563EB]" />
                Building at the intersection of AI + Product
              </div>

              {/* Headline */}
              <div className="space-y-0.5">
                <h1 className="block text-[clamp(52px,8vw,88px)] leading-[1.02] font-black tracking-tight text-[#F8FAFC]">
                  I Build Things
                </h1>
                <h1 className="block text-[clamp(52px,8vw,88px)] leading-[1.02] font-black tracking-tight text-[#F8FAFC]">
                  That Actually
                </h1>
                <h1
                  className="block text-[clamp(56px,8.5vw,96px)] leading-[1.02] font-black tracking-tight"
                  style={{ color: '#2563EB', textShadow: '0 0 50px rgba(37,99,235,0.35)' }}
                >
                  Work.
                </h1>
              </div>

              {/* Sub */}
              <p className="max-w-lg text-[17px] leading-relaxed text-[#94A3B8]">
                15 years. Fintech, logistics, AI agents. I've shipped banking platforms to 15
                countries, built AI systems from scratch, and architected 50+ microservices that
                handle real load.{' '}
                <span className="font-semibold text-[#F8FAFC]">I don't prototype. I ship.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backgroundColor: '#2563EB',
                    boxShadow: '0 0 0 0 rgba(37,99,235,0)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = '0 0 24px rgba(37,99,235,0.5)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = '0 0 0 0 rgba(37,99,235,0)')
                  }
                >
                  See My Work →
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border border-[#1E293B] px-6 py-3 text-sm font-semibold text-[#94A3B8] transition-all duration-200 hover:border-[rgba(37,99,235,0.6)] hover:text-[#F8FAFC]"
                  style={{
                    transition:
                      'border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = 'rgba(37,99,235,0.05)')
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Read My Story
                </Link>
              </div>
            </div>

            {/* ── Right: floating stat cards ── */}
            <div className="hidden lg:block lg:w-72 xl:w-80">
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className={`${s.cls} cursor-default rounded-xl border border-[#1E293B] bg-[#0D1117] p-5 transition-all duration-200 hover:border-[rgba(37,99,235,0.6)] hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]`}
                  >
                    <div className="mb-1 text-3xl leading-none font-bold text-[#2563EB]">
                      {s.val}
                    </div>
                    <div className="mb-1 text-sm font-semibold text-[#F8FAFC]">{s.label}</div>
                    <div className="text-xs leading-snug text-[#94A3B8]">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ THE EVOLUTION */}
      <section style={FB} className="bg-black py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p
            data-reveal
            className="mb-20 text-center text-[11px] font-bold tracking-[0.4em] text-[#475569]"
          >
            THE EVOLUTION
          </p>

          <div className="relative">
            {/* Vertical line — desktop (center) */}
            <div
              className="absolute top-4 bottom-4 left-1/2 hidden -translate-x-1/2 lg:block"
              style={{
                width: 1,
                background:
                  'linear-gradient(to bottom, transparent, #1E293B 8%, #1E293B 92%, transparent)',
              }}
            />
            {/* Vertical line — mobile (left) */}
            <div
              className="absolute top-4 bottom-4 lg:hidden"
              style={{
                left: 11,
                width: 1,
                background:
                  'linear-gradient(to bottom, transparent, #1E293B 8%, #1E293B 92%, transparent)',
              }}
            />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={`${item.year}-${i}`} className="relative">
                  {/* Desktop: alternating layout */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_28px_1fr] lg:items-start">
                    {/* Left col */}
                    <div className="flex justify-end pr-10">
                      {i % 2 === 0 ? (
                        <div className="w-full max-w-[400px]">
                          <TCard item={item} />
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="flex justify-center pt-[26px]">
                      <div
                        className="relative z-10 h-3 w-3 flex-shrink-0 rounded-full"
                        style={{
                          backgroundColor: '#2563EB',
                          boxShadow: '0 0 0 3px rgba(37,99,235,0.15), 0 0 12px rgba(37,99,235,0.6)',
                        }}
                      />
                    </div>

                    {/* Right col */}
                    <div className="pl-10">
                      {i % 2 !== 0 ? (
                        <div className="w-full max-w-[400px]">
                          <TCard item={item} />
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* Mobile: single column */}
                  <div className="pl-9 lg:hidden">
                    <div
                      className="absolute top-[26px] z-10 h-3 w-3 rounded-full"
                      style={{
                        left: 5,
                        backgroundColor: '#2563EB',
                        boxShadow: '0 0 0 3px rgba(37,99,235,0.15), 0 0 10px rgba(37,99,235,0.6)',
                      }}
                    />
                    <TCard item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ THINGS I'VE BUILT */}
      <section style={FB} className="bg-black py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div data-reveal className="mb-14">
            <h2 className="text-4xl font-black text-[#F8FAFC] sm:text-5xl">Things I've Built</h2>
            <p className="mt-3 text-[#94A3B8]">Not demos. Not side projects. Production systems.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <div
                key={p.title}
                data-reveal
                data-d={String((i % 2) + 1)}
                className={`rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 transition-all duration-200 hover:-translate-y-1 ${p.hoverBorder} ${p.hoverGlow}`}
              >
                <span
                  className={`mb-4 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${p.tagStyle}`}
                >
                  {p.tag}
                </span>
                <h3 className="mb-3 text-xl font-bold text-[#F8FAFC]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">{p.desc}</p>
                {p.link && (
                  <Link
                    href={p.link.href}
                    className={`mt-5 inline-flex text-sm font-semibold transition-opacity hover:opacity-70 ${p.link.color}`}
                  >
                    {p.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FROM THE BLOG */}
      {posts.length > 0 && (
        <section style={FB} className="bg-black py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div data-reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-black text-[#F8FAFC] sm:text-5xl">From The Blog</h2>
                <p className="mt-3 text-[#94A3B8]">Real stories from real builds.</p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-[#2563EB] transition-opacity hover:opacity-70"
              >
                All posts →
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {posts.slice(0, 2).map((post, i) => {
                const { slug, date, title, summary } = post
                return (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    data-reveal
                    data-d={String(i + 1)}
                    className="group rounded-2xl border border-[#1E293B] bg-[#0D1117] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.5)] hover:shadow-[0_0_24px_rgba(37,99,235,0.1)]"
                  >
                    <time className="text-xs text-[#475569]" dateTime={date}>
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                    <h3 className="mt-3 text-lg leading-snug font-bold text-[#F8FAFC] transition-colors duration-200 group-hover:text-[#60A5FA]">
                      {title}
                    </h3>
                    {summary && (
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#94A3B8]">
                        {summary}
                      </p>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════ CTA BANNER */}
      <section
        style={{ ...FB, background: 'linear-gradient(135deg, #000000 0%, #0a1628 100%)' }}
        className="border-y border-[#1E293B] py-28"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div data-reveal className="space-y-5">
              <p className="text-xs font-bold tracking-[0.3em] text-[#2563EB]">
                OPEN TO OPPORTUNITIES
              </p>
              <div>
                <h2 className="text-4xl font-black text-[#F8FAFC] sm:text-5xl">
                  Building something
                </h2>
                <h2 className="text-4xl font-black text-[#F8FAFC] sm:text-5xl">
                  ambitious with AI?
                </h2>
              </div>
              <p className="max-w-md text-[#94A3B8]">
                I'm looking for Senior / Principal Engineer or founding team roles at AI-first
                companies.{' '}
                <span className="text-[#F8FAFC]">Remote. Global. Serious work only.</span>
              </p>
            </div>

            {/* Right */}
            <div data-reveal data-d="2" className="flex flex-col items-start gap-5 lg:items-center">
              <Link
                href="mailto:gaurav.arora90@gmail.com"
                className="rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: '#2563EB' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 0 32px rgba(37,99,235,0.55)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                Let's Talk →
              </Link>
              <div className="flex items-center gap-3 text-sm text-[#475569]">
                <Link
                  href="https://github.com/gauravarora90"
                  className="transition-colors hover:text-[#F8FAFC]"
                >
                  GitHub
                </Link>
                <span>·</span>
                <Link
                  href="https://www.linkedin.com/in/gaurav-arora-7933692a/"
                  className="transition-colors hover:text-[#F8FAFC]"
                >
                  LinkedIn
                </Link>
                <span>·</span>
                <Link
                  href="mailto:gaurav.arora90@gmail.com"
                  className="transition-colors hover:text-[#F8FAFC]"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
