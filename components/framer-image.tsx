import cn from 'classnames'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { imageBuilder } from '../lib/sanity'

type FIProps = {
	title: string
	url: string
	slug?: string
}

interface SrcEvent {
	target: { src: string }
}

function isSrcEvent(e: any): e is SrcEvent {
	return e && e.target.src !== undefined
}

const animationVariants = {
	visible: { opacity: 1, scale: 1 },
	hidden: { opacity: 0, scale: 1.5 },
}

// TODO: can we use next-sanity-image to speed up image loads and make them responsive? https://github.com/bundlesandbatches/next-sanity-image

const FramerImage = (props: FIProps) => {
	const [loaded, setLoaded] = useState(false)
	const animationControls = useAnimation()
	const { title, url, slug } = props

	useEffect(() => {
		if (loaded) {
			animationControls.start('visible')
		}
	}, [loaded, animationControls])

	return (
		<motion.div
			initial={'hidden'}
			animate={animationControls}
			variants={animationVariants}
			transition={{ ease: 'easeOut', duration: 0.75 }}>
			<Image
				width={2000}
				height={1000}
				alt={`A beautiful ${title}`}
				className={cn('shadow-small', {
					'hover:shadow-large transition-shadow duration-200': slug,
				})}
				src={imageBuilder.image(url).height(1000).width(2000).url()}
				onLoad={event => {
					if (isSrcEvent(event)) {
						const target = event.target

						// next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
						if (target.src.indexOf('data:image/gif;base64') < 0) {
							setLoaded(true)
						}
					}
				}}
			/>
		</motion.div>
	)
}

export default FramerImage
