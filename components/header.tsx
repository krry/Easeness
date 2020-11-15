import Link from 'next/link'
import { SITE_TITLE } from '../lib/constants'

const Header = () => {
  return (
    <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter hover:text-fuchsia-600">
      <Link href="/">
        <a className="hover:underline">{SITE_TITLE}</a>
      </Link>
      .
    </h2>
  )
}

export default Header