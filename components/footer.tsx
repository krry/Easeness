import Link from 'next/link'

import { SITE_TITLE } from '../lib/constants'
import Container from './container'

const Footer = () => {
	return (
		<footer className='border-t bg-screen border-cyan-200 dark:bg-shadow dark:border-indigo-800'>
			<Container>
				<div className='flex flex-col items-center py-24 lg:flex-row'>
					<h3 className='mb-10 text-4xl font-bold leading-tight tracking-tighter text-center transition-colors duration-200 lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2'>
						<Link href='/'>
							<a className='pretty-link'>{SITE_TITLE}</a>
						</Link>
					</h3>
					<div className='flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2'>
						<a
							href={'https://kerrbe.ar'}
							className='mx-3 font-bold pretty-link'>
							Kerrbear&apos;s
						</a>
						<a
							href='https://nameless.quest'
							className='mx-3 font-bold pretty-link'>
							Nameless
						</a>
						<a
							href={`https://atmanaut.me/`}
							className='mx-3 font-bold pretty-link'>
							Atmanaut
						</a>
						<span className='mx-3 font-bold'>
							Made with 🧿 by{' '}
							<a href={`https://krry.dev/`} className='pretty-link'>
								k·rry.dev
							</a>
						</span>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
