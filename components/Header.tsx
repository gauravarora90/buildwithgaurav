import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'

const Header = () => {
  // The box-shadow + clip-path pair paints the bar edge to edge although the header sits in a centred column.
  let headerClass =
    'flex w-full items-center justify-between bg-zinc-950 py-5 shadow-[0_0_0_100vmax_#09090b] [clip-path:inset(0_-100vmax)]'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center gap-3">
        <span className="font-display flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
          GA
        </span>
        <span className="font-display text-lg font-semibold text-zinc-50">
          {siteMetadata.headerTitle}
        </span>
      </Link>
      <div className="flex items-center gap-x-4 leading-5 sm:gap-x-6">
        <nav className="hidden items-center gap-x-6 sm:flex">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.title}
              </Link>
            ))}
        </nav>
        <SearchButton />
        <Link
          href={`mailto:${siteMetadata.email}`}
          className="hidden rounded-lg border border-white/15 px-3.5 py-1.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/5 sm:inline-flex"
        >
          Contact
        </Link>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
