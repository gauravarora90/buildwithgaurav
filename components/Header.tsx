import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'

const Header = () => {
  // The box-shadow + clip-path pair paints the bar edge to edge although the header sits in a
  // centred column; the ::after is its bottom border, stretched the same way.
  let headerClass =
    'flex w-full items-center justify-between bg-neutral-50 py-4 shadow-[0_0_0_100vmax_#fafafa] [clip-path:inset(0_-100vmax)] after:absolute after:inset-x-[-100vmax] after:bottom-0 after:h-px after:bg-neutral-200'
  headerClass += siteMetadata.stickyNav ? ' sticky top-0 z-50' : ' relative'

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-xs font-bold tracking-tight text-white">
          GA
        </span>
        <span className="text-[15px] font-semibold text-neutral-950">
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
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {link.title}
              </Link>
            ))}
        </nav>
        <SearchButton />
        <Link
          href={`mailto:${siteMetadata.email}`}
          className="hidden rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 sm:inline-flex"
        >
          Contact
        </Link>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
