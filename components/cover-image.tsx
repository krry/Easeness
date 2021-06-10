import Link from 'next/link'

import FramerImage from './framer-image'

type CIProps = {
	title: string
	url: string
	slug?: string
	classes?: string
}

// TODO: can we use next-sanity-image to speed up image loads and make them responsive? https://github.com/bundlesandbatches/next-sanity-image

const CoverImage = (props: CIProps) => {
	const { title, slug, classes } = props

	return (
		<div className={`-mx-1 sm:mx-0 ${classes}`}>
			{slug ? (
				<Link href={`/${slug}`}>
					<a aria-label={title}>
						<FramerImage {...props} />
					</a>
				</Link>
			) : (
				<FramerImage {...props} />
			)}
		</div>
	)
}

export default CoverImage
