import Container from './container'
import Link from 'next/link'
import { SITE_TITLE } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <Link href="/">{SITE_TITLE}</Link>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://passage.atmanaut.us"
              className="mx-3 bg-black hover:bg-orange-200 hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Passage Clock
            </a>
            <a
              href={`https://atmanaut.me/`}
              className="mx-3 font-bold hover:underline"
            >
              Atmanaut Blog
            </a>
            <span className="mx-3 font-bold">
              An <a href="https://atmanautica.com" className="hover:underline">Atmanautica</a> Exploration
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer