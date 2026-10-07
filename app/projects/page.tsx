import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="pt-10 pb-20 sm:pt-14">
      <div className="pb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-neutral-600">
          From AI agents to payment systems to digital banking platforms deployed across 15+
          countries. Each of these ran in production, in front of real users.
        </p>
      </div>

      <div className="space-y-4">
        {projectsData.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-500">
              <span>{p.kind}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{p.year}</span>
              {p.featured && (
                <span className="rounded border border-neutral-300 bg-neutral-50 px-1.5 py-0.5 font-medium text-neutral-700">
                  Latest
                </span>
              )}
            </div>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">
              {p.title}
            </h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-neutral-600">{p.description}</p>

            <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-neutral-800">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-xs text-neutral-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.href && (
                <Link
                  href={p.href}
                  className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
                >
                  {p.linkLabel}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
