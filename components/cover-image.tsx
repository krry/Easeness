import cn from 'classnames'
import Link from 'next/link'

import {imageBuilder} from '../lib/sanity'

type CIProps = {
  title: string
  url: string
  slug?: string
  classes?: string
}

const CoverImage = (props: CIProps) => {
  const {title, url, slug, classes} = props
  const image = (
    <img
      width={2000}
      height={1000}
      alt={`Cover for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-large transition-shadow duration-200': slug,
      })}
      src={imageBuilder.image(url).height(1000).width(2000).url()}
    />
  )
  return (
    <div className={`-mx-5 sm:mx-0 ${classes}`}>
      {slug ? (
        <Link as={`/${slug}`} href={'/[slug]'}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
