import { GiKite } from 'react-icons/gi';

import { SITE_TITLE } from '../lib/constants';
import SiteNav from './site-nav';

const Intro = ({ pages }) => {
	return (
		<section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
			<h1 className="text-5xl md:text-6xl lg:text-7xl md:pr-8 lg:w-1/2 pretty-heading rainbow-wheel">
				<GiKite className="inline-block mb-4 text-black opacity-20 dark:text-white flip-x" />
				{SITE_TITLE}.
			</h1>
			<SiteNav classes="mt-5 text-xl text-center md:pl-8 lg:w-1/2 md:text-right" pages={pages} />
		</section>
	);
};

export default Intro;
