import PageNav from './page-nav'

const Intro = ({pages}) => {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8 lg:w-1/3">
        Easeness.
      </h1>
      <PageNav classes="mt-5 text-xl text-center md:pl-8 lg:w-2/3 md:text-right" pages={pages} />
    </section>
  )
}

export default Intro
