import Link from 'next/link';

function alphabetize(a, b) {
	const nameA = a.link.toUpperCase(); // ignore upper and lowercase
	const nameB = b.link.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	// names must be equal
	return 0;
}

const SiteNav = ({ pages, classes }) => {
	return (
		pages?.length > 0 && (
			<nav className={classes}>
				<ul>
					{pages.sort(alphabetize).map(page => (
						<li key={page.slug} className="inline-block px-2 font-semibold md:mx-2 ">
							<Link href={`/${page.slug}`}>
								<a className="pretty-link retro">{page.link}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		)
	);
};

export default SiteNav;
