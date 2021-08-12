/* eslint-disable react/display-name */
import PortableText from '@sanity/block-content-to-react'
import Image from 'next/image'
import React, { useState } from 'react'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const PostBody = ({ content }) => {
	const [readMore, setReadMore] = useState(true)

	const serializers = {
		types: {
			block: props => {
				const style = props.node.style || 'normal'
				// console.log('block', props)
				if (/^h\d/.test(style)) {
					const level = style.replace(/[^\d]/g, '')
					return React.createElement(
						`h${level}`,
						{ className: `post-heading-${level}` },
						props.children
					)
				}

				if (style === 'image') {
					if (!props.node || !props.node.asset || !props.node.asset._ref) {
						return null
					}
					return (
						<figure>
							<Image
								src={props.node.slug || '/potato.jpg'}
								alt={props.node.caption || 'I am a potato'}
								width={2000}
								height={1000}
							/>
							<figcaption>
								<em>{props.node.caption}</em>
								<br />
								Photo: <a href={props.node.source}>{props.node.photog}</a>
							</figcaption>
						</figure>
					)
				}
				if (style === 'hr') {
					return (
						<hr data-content={props.node.children[0].text} className='dinkus' />
					)
				}
				return style === 'blockquote' ? (
					<blockquote className='post-quote'>
						<p>{props.children}</p>
					</blockquote>
				) : (
					<p className='post-paragraph'>{props.children}</p>
				)
			},
			code: props => {
				return (
					<pre data-language={props.node.language} className='post-pre'>
						<code className='post-code'>{props.node.code}</code>
					</pre>
				)
			},
			linebreak: props => {
				const { style } = props.node
				if (style === 'lineBreak') {
					// console.log('line break', props.node)
					return <hr className='lineBreak' />
				}
				if (readMore && style === 'readMore') {
					// console.log('readmore node', props.node)
					return (
						<div className='readMore'>
							<button onClick={() => setReadMore(false)}>Read More</button>
						</div>
					)
				}
				return null
			},
		},
		marks: {
			strong: props => {
				return <strong className='post-strong'>{props.children}</strong>
			},
			em: props => {
				return <em className='post-em'>{props.children}</em>
			},
			code: props => {
				// console.log('code', props.mark)
				return <code className='post-code'>{props.children}</code>
			},
			highlight: props => {
				return <span className='post-hilit hilit'>{props.children}</span>
			},
			link: props => {
				// Read https://css-tricks.com/use-target_blank/
				const { blank, href } = props.mark
				// console.log('external link', props.mark, 'with target blank', blank)
				return blank ? (
					<a
						className='post-link link-away'
						href={href}
						target='_blank'
						rel='noopener noreferrer'>
						{props.children}
					</a>
				) : (
					<a className='post-link' href={href}>
						{props.children}
					</a>
				)
			},
			internalink: props => {
				const { slug = {} } = props.mark
				const href = `/${slug?.current}`
				// console.log('internal link to', props.mark)
				return <a href={href}>{props.children}</a>
			},
		},
	}

	return (
		<div className='max-w-full mx-auto md:max-w-2xl lg:max-w-4xl'>
			<PortableText
				blocks={content}
				dataset='production'
				projectId={projectId}
				serializers={serializers}
				className='text-base leading-relaxed markdown sm:text-lg md:text-xl lg:text-2xl'
			/>
		</div>
	)
}

export default PostBody
