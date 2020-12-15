import {SITE_TITLE} from '../lib/constants'
import Link from 'next/link'
import SiteNav from './site-nav'

const SiteHeader = ({pages}) => {
  return (
    <header className="flex items-baseline md:flex-row md:justify-between">
      <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight transition-colors duration-200 md:text-4xl md:tracking-tighter hover:text-fuchsia-600">
        <Link href="/">
          <a className="hover:underline">{SITE_TITLE}</a>
        </Link>
        .
      </h2>
      <SiteNav classes="mt-5 text-xl text-center md:pl-8 md:text-right" pages={pages} />
    </header>
  )
}

export default SiteHeader
