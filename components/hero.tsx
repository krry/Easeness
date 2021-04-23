import Link from 'next/link'

import CoverImage from './cover-image'
import Datetime from './datetime'

// TODO: offer a call-to-action
const Hero = ({title, coverImage, date, excerpt, slug}) => {
  return (
    <section className="hero">
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage} classes="cover-image no-ib" />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-y-16 lg:gap-y-8 md:mb-24">
        <div>
          <h3 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
            <Link href={`/${slug}`}>
              <a className="pretty-link">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Datetime dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 font-serif text-lg leading-relaxed tracking-wide">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
