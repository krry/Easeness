import Link from 'next/link'

const SiteNav = ({pages, classes}) => {
  return (
    pages.length > 0 && (
      <nav className={classes}>
        <ul>
          {pages.map((page) => (
            <li key={page.slug} className="inline-block p-2 font-semibold ">
              <Link href={`/${page.slug}`}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  )
}

export default SiteNav
