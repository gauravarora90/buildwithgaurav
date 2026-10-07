import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="pb-16">
      <div className="space-y-4 pt-10 pb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">Projects</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          Things I&apos;ve built
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
          From AI agents to payment systems to digital banking platforms deployed across 15+
          countries. Each of these ran in production, in front of real users.
        </p>
      </div>

      <div className="space-y-5">
        {projectsData.map((p) => (
          <article
            key={p.title}
            className={`rounded-2xl border bg-zinc-900/40 p-6 sm:p-8 ${
              p.featured ? 'border-blue-500/40' : 'border-white/10'
            }`}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500">
              <span className="font-semibold tracking-wider uppercase">{p.kind}</span>
              <span aria-hidden="true">·</span>
              <span>{p.year}</span>
              {p.featured && (
                <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-0.5 font-medium text-blue-300">
                  Latest
                </span>
              )}
            </div>

            <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-zinc-50">
              {p.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">{p.description}</p>

            <ul className="mt-5 max-w-3xl space-y-2.5 text-sm leading-relaxed text-zinc-300">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.href && (
                <Link
                  href={p.href}
                  className="text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  {p.linkLabel} →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
