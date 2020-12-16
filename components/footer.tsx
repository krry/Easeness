import Link from 'next/link'

import {SITE_TITLE} from '../lib/constants'
import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 dark:bg-black dark:border-gray-900">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center transition-colors duration-200 lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2 hover:text-lime-600">
            <Link href="/">
              <a className="pretty-link">{SITE_TITLE}</a>
            </Link>
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
            <a href="https://passage.atmanautica.com" className="mx-3 font-bold pretty-link">
              Passage
            </a>
            <a href={`https://atmanaut.me/`} className="mx-3 font-bold pretty-link">
              Atmanaut Blog
            </a>
            <span className="mx-3 font-bold">
              An{' '}
              <a href="https://atmanautica.com" className="pretty-link">
                Atmanautica
              </a>{' '}
              Exploration
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
