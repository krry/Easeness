import Container from './container'
import Link from 'next/link'
import { SITE_TITLE } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2 hover:text-fuchsia-600">
            <Link href="/">{SITE_TITLE}</Link>
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
            <a
              href="https://passage.atmanaut.us"
              className="mx-3 font-bold transition-colors duration-200 hover:underline hover:text-fuchsia-600"
            >
              Passage
            </a>
            <a
              href={`https://atmanaut.me/`}
              className="mx-3 font-bold transition-colors duration-200 hover:underline hover:text-fuchsia-600"
            >
              Atmanaut Blog
            </a>
            <span className="mx-3 font-bold">
              An <a href="https://atmanautica.com" className="transition-colors duration-200 hover:underline hover:text-fuchsia-600">Atmanautica</a> Exploration
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer