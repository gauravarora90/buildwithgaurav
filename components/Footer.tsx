import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

const LINKS = [
  { title: 'Email', href: `mailto:${siteMetadata.email}` },
  { title: 'LinkedIn', href: siteMetadata.linkedin as string },
  { title: 'GitHub', href: siteMetadata.github as string },
  { title: 'Resume', href: `${siteMetadata.siteUrl}/static/Gaurav_Arora_Resume.pdf` },
  { title: 'RSS', href: '/feed.xml' },
]

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 py-8 text-sm text-neutral-500 sm:flex-row">
      <p>© {new Date().getFullYear()} Gaurav Arora</p>
      <div className="flex items-center gap-5">
        {LINKS.map((l) => (
          <Link key={l.title} href={l.href} className="transition-colors hover:text-neutral-950">
            {l.title}
          </Link>
        ))}
      </div>
    </footer>
  )
}
