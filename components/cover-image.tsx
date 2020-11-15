import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'

type CIProps = {
  title: string,
  url: string,
  slug?: string,
  type?: string
}

const CoverImage = (props: CIProps) => {
  const {title, url, slug, type} = props
  const image = (
    <img
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder.image(url).height(1000).width(2000).url()}
    />
  )
  const dir = type === "post" ? "/posts" : ""
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`${dir}/${slug}`} href={dir +"/[slug]"}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage