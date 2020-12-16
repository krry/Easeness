import {SITE_TITLE} from '../lib/constants'
import SiteNav from './site-nav'

const Intro = ({pages}) => {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl md:text-8xl md:pr-8 lg:w-1/3 pretty-heading">{SITE_TITLE}.</h1>
      <SiteNav classes="mt-5 text-xl text-center md:pl-8 lg:w-2/3 md:text-right" pages={pages} />
    </section>
  )
}

export default Intro
