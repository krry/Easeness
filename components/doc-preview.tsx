import Link from 'next/link'

import Avatar from './avatar'
import CoverImage from './cover-image'
import Date from './date'

const DocPreview = ({title, coverImage, date, type, excerpt, author, slug}) => {
  const dir = type === 'post' ? '/posts' : ''
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage} type={type} />
      </div>
      <h3 className="mb-3 text-3xl font-bold leading-snug tracking-tight">
        <Link as={`${dir}/${slug}`} href={dir + '/[slug]'}>
          <a className="transition-colors duration-200 hover:underline hover:text-fuchsia-500">
            {title}
          </a>
        </Link>
      </h3>
      <div className="mb-4 text-sm tracking-tight transition-opacity duration-200 opacity-75 hover:opacity-100">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed tracking-wide">{excerpt}</p>
      <Avatar name={author.name} picture={author.avatar} />
    </div>
  )
}

export default DocPreview
