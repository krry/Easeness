import Avatar from './avatar';
import CoverImage from './cover-image';
import Datetime from './datetime';
import PostTitle from './post-title';

const PostHeader = ({ title, coverImage, date, author }) => {
	return (
		<section className="my-16 md:my-12 post-header pretty-heading rainbow-wheel">
			<PostTitle>{title}</PostTitle>
			<div className="mb-8 -mx-4 md:mb-16 sm:mx-0">
				<CoverImage title={title} classes="cover-image" url={coverImage} />
			</div>
			<div className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
				<div className="block mb-6 md:mb-12">
					<Avatar name={author?.name} picture={author?.avatar} />
				</div>
				<div className="mb-6 text-md">
					<Datetime dateString={date} />
				</div>
			</div>
		</section>
	);
};

export default PostHeader;
