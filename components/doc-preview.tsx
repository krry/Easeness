import Link from 'next/link'
import Date from './date'
import Avatar from './avatar'
import CoverImage from './cover-image'

const DocPreview = ({title, coverImage, date, type, excerpt, author, slug}) => {
  const dir = type === 'post' ? '/posts' : ''
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage} type={type} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link as={`${dir}/${slug}`} href={dir + '/[slug]'}>
          <a className="transition-colors duration-200 hover:underline hover:text-fuchsia-500">
            {title}
          </a>
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.avatar} />
    </div>
  )
}

export default DocPreview
