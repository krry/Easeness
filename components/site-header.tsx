import {SITE_TITLE} from '../lib/constants'
import Link from 'next/link'
import SiteNav from './site-nav'

const SiteHeader = ({pages}) => {
  return (
    <header className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl md:pr-8 lg:w-1/3 md:tracking-tighter text-cyan-600 dark:cyan-500">
        <Link href="/">
          <a className="pretty-link">{SITE_TITLE}</a>
        </Link>
        <span>.</span>
      </h2>
      <SiteNav classes="mt-5 text-xl text-center md:pl-8 md:text-right lg:w-2/3" pages={pages} />
    </header>
  )
}

export default SiteHeader
