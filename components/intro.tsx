import {CMS_NAME, CMS_URL} from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        Easeness.
      </h1>
      <h4 className="mt-5 text-lg tracking-tighter text-center md:text-left md:pl-8">
        Bringing ease to business with{' '}
        <a
          href="https://atmanautica.com/"
          className="transition-colors duration-200 hover:underline hover:text-fuchsia-600">
          Atmanautica
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="transition-colors duration-200 hover:underline hover:text-fuchsia-600">
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  )
}

export default Intro
