import Link from 'next/link'

const SiteNav = ({pages, classes}) => {
  return (
    pages?.length > 0 && (
      <nav className={classes}>
        <ul>
          {pages.map((page) => (
            <li key={page.slug} className="inline-block px-2 font-semibold md:mx-2 ">
              <Link as={`/${page.slug}`} href={`/[page.slug]`}>
                <a className="pretty-link">{page.link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  )
}

export default SiteNav
