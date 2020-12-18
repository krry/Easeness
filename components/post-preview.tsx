import Link from 'next/link'
import styles from './post-preview.module.css'

import CoverImage from './cover-image'
import Date from './date'

const PostPreview = ({title, coverImage, date, excerpt, slug}) => {
  return (
    <div className={styles['post-preview']}>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage} classes={styles['cover-image']} />
      </div>
      <h3 className="mb-3 text-3xl font-bold leading-snug tracking-tight">
        <Link href={`/${slug}`}>
          <a className="pretty-link">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-sm tracking-tight text-gray-800 transition-opacity duration-200 dark:text-gray-600">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed tracking-wide">{excerpt}</p>
    </div>
  )
}

export default PostPreview
