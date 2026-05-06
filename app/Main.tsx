'use client'

import { useEffect } from 'react'
import Link from '@/components/Link'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

const timeline = [
  { year: '2011', label: 'Android' },
  { year: '2018', label: 'iOS' },
  { year: '2019', label: 'Fintech' },
  { year: '2021', label: 'NFC Payments' },
  { year: '2022', label: 'AI / LLMs' },
  { year: '2024', label: 'AI Agents' },
  { year: '2026', label: "What's Next ✦" },
]

const projects = [
  {
    title: 'Chhotu Bot',
    tag: 'AI Agent',
    desc: 'Telegram AI assistant automating GitHub, CleverTap & DigitalOcean. 90 min of daily dashboard-checking → 3 commands.',
    glow: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]',
    border: 'hover:border-blue-500/60',
    tagStyle: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
    href: '/blog/chhotu-bot',
  },
  {
    title: 'NFC Tap & Pay',
    tag: 'Fintech · Solo Build',
    desc: 'Complete closed-loop prepaid payment system. Built alone — hardware integration to merchant dashboard. Sub-300ms taps.',
    glow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
    border: 'hover:border-purple-500/60',
    tagStyle: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
    href: '/blog/nfc-tap-and-pay',
  },
  {
    title: 'DBXP Banking Platform',
    tag: 'Digital Banking',
    desc: 'Production digital banking platform deployed across 15+ countries. Real money. Real users. Real scale.',
    glow: 'hover:shadow-[0_0_35px_rgba(20,184,166,0.25)]',
    border: 'hover:border-teal-500/60',
    tagStyle: 'bg-teal-500/10 text-teal-400 border border-teal-500/30',
    href: '/projects',
  },
  {
    title: 'Zoto Super App',
    tag: 'Payments · Nigeria',
    desc: "Nigeria's #1 payments super-app at Mahindra Comviva. Millions of users. High-stakes fintech at scale.",
    glow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    border: 'hover:border-amber-500/60',
    tagStyle: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
    href: '/projects',
  },
]

const stats = [
  { val: '15+', label: 'Years', sub: 'Building production systems', delay: 'float-0' },
  { val: '50+', label: 'Services', sub: 'Microservices at scale', delay: 'float-1' },
  { val: 'AI', label: 'Agents', sub: 'Shipped and running', delay: 'float-2' },
  { val: '15', label: 'Countries', sub: 'Banking platform deployed', delay: 'float-3' },
]

// Full-bleed helper — breaks out of the SectionContainer's max-width constraint
const fullBleed: React.CSSProperties = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
}

export default function Home({
  posts,
}: {
  posts: { slug: string; date: string; title: string; summary?: string; tags?: string[] }[]
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(10px); opacity: 1; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
          50%       { box-shadow: 0 0 18px 2px rgba(59,130,246,0.35); }
        }
        .float-0 { animation: float 4.5s ease-in-out infinite; }
        .float-1 { animation: float 4.5s ease-in-out infinite 0.8s; }
        .float-2 { animation: float 4.5s ease-in-out infinite 1.6s; }
        .float-3 { animation: float 4.5s ease-in-out infinite 2.4s; }
        .scroll-dot { animation: scrollDot 1.8s ease-in-out infinite; }
        .badge-glow { animation: badgePulse 2.5s ease-in-out infinite; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        [data-reveal].in-view {
          opacity: 1;
          transform: translateY(0);
        }
        [data-reveal][data-delay="100"] { transition-delay: 100ms; }
        [data-reveal][data-delay="200"] { transition-delay: 200ms; }
        [data-reveal][data-delay="300"] { transition-delay: 300ms; }
        [data-reveal][data-delay="400"] { transition-delay: 400ms; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={fullBleed}
        className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0a0a0a] px-4 py-24 sm:px-6"
      >
        {/* Subtle dot-grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/6 h-72 w-72 rounded-full bg-blue-900/15 blur-[90px]" />

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center">
            {/* ── Left: Copy ── */}
            <div className="flex-1 space-y-8">
              {/* Badge */}
              <div className="badge-glow inline-flex items-center gap-2.5 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                Principal Product Engineer & AI Builder
              </div>

              {/* Headline */}
              <div>
                <h1 className="block text-6xl leading-[1.05] font-black tracking-tight text-white sm:text-7xl xl:text-8xl">
                  I Build Things
                </h1>
                <h1 className="block text-6xl leading-[1.05] font-black tracking-tight text-white sm:text-7xl xl:text-8xl">
                  That Actually
                </h1>
                <h1 className="block text-6xl leading-[1.05] font-black tracking-tight sm:text-7xl xl:text-8xl">
                  <span className="text-blue-400">Work.</span>
                </h1>
              </div>

              {/* Sub */}
              <p className="max-w-lg text-lg leading-relaxed text-gray-400">
                15 years. Fintech, logistics, AI. From Android apps to AI agents to banking
                platforms across 15 countries.{' '}
                <span className="font-semibold text-gray-200">I don't prototype — I ship.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.55)]"
                >
                  See My Work →
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-gray-500 hover:text-white"
                >
                  Read My Story
                </Link>
              </div>
            </div>

            {/* ── Right: Floating stat cards ── */}
            <div className="hidden w-72 lg:block">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className={`${s.delay} rounded-xl border border-gray-800 bg-gray-900/80 p-4 backdrop-blur-sm`}
                  >
                    <div className="text-2xl font-black text-blue-400">{s.val}</div>
                    <div className="text-sm font-bold text-white">{s.label}</div>
                    <div className="mt-1 text-xs leading-snug text-gray-500">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-widest text-gray-700 uppercase">scroll</span>
            <div className="scroll-dot h-5 w-px rounded-full bg-blue-500/60" />
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────── */}
      <section style={fullBleed} className="overflow-hidden bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p
            data-reveal
            className="mb-10 text-center text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase"
          >
            The Evolution
          </p>
          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                data-reveal
                data-delay={String(i * 60)}
                className="flex-none rounded-xl border border-gray-800/80 bg-gray-900/40 px-5 py-4 text-center transition-colors duration-200 hover:border-blue-500/40"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-lg font-black text-blue-400">{item.year}</div>
                <div className="mt-0.5 text-xs whitespace-nowrap text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section style={fullBleed} className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div data-reveal className="mb-14 text-center">
            <h2 className="text-4xl font-black text-white sm:text-5xl">Things I've Built</h2>
            <p className="mt-3 text-gray-600">Not demos. Not side projects. Production systems.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                data-reveal
                data-delay={String((i % 2) * 120)}
                className={`group relative rounded-xl border border-gray-800/80 bg-gray-900/40 p-6 transition-all duration-300 hover:-translate-y-1 ${p.border} ${p.glow}`}
              >
                <span
                  className={`mb-4 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${p.tagStyle}`}
                >
                  {p.tag}
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
                <div className="mt-5 text-xs font-semibold text-blue-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  View project →
                </div>
              </Link>
            ))}
          </div>

          <div data-reveal className="mt-10 text-center">
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-400"
            >
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────────────── */}
      {posts.length > 0 && (
        <section style={fullBleed} className="bg-[#0d0d0d] py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div data-reveal className="mb-14 flex items-end justify-between">
              <div>
                <h2 className="text-4xl font-black text-white sm:text-5xl">From The Blog</h2>
                <p className="mt-3 text-gray-600">Real stories from real builds.</p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-400"
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
                    data-delay={String(i * 120)}
                    className="group rounded-xl border border-gray-800/80 bg-gray-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-700"
                  >
                    <time className="text-xs text-gray-700" dateTime={date}>
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                    <h3 className="mt-3 text-lg leading-snug font-bold text-white transition-colors group-hover:text-blue-400">
                      {title}
                    </h3>
                    {summary && (
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
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

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section style={fullBleed} className="relative overflow-hidden bg-[#0a0a0a] py-28">
        {/* Edge glow lines */}
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        {/* Side ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10" />

        {/* Center blob */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/8 blur-[100px]" />

        <div data-reveal className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-4xl leading-tight font-black text-white sm:text-5xl">
            Building something ambitious <span className="text-blue-400">with AI?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gray-400">
            I'm open to Senior/Principal Engineer and founding team roles.{' '}
            <span className="text-gray-300">Remote. Global.</span>
          </p>
          <div className="mt-10">
            <Link
              href="mailto:gaurav.arora90@gmail.com"
              className="inline-flex items-center rounded-lg bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-400 hover:shadow-[0_0_32px_rgba(59,130,246,0.55)]"
            >
              Let's Talk →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
