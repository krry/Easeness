import Link from 'next/link'
import styles from './hero.module.css'

import Avatar from './avatar'
import CoverImage from './cover-image'
import Date from './date'

// TODO: offer a call-to-action
const Hero = ({title, coverImage, date, excerpt, author, slug}) => {
  return (
    <section className={styles.hero}>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage} classes={styles['cover-image']} />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-y-16 lg:gap-y-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
            <Link href={`/${slug}`}>
              <a className="pretty-link">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed tracking-wide">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
