import PostPreview from './post-preview';

const MorePosts = ({ posts }) => {
	return (
		<section>
			<h2 className="mb-8 text-4xl md:text-5xl lg:text-5xl pretty-heading">More Easy Pieces</h2>
			<div className="grid grid-cols-1 mb-16 gap-x-16 md:grid-cols-2 gap-y-16 md:gap-x-24 lg:gap-x-32">
				{posts.map(post => (
					<PostPreview
						key={post.slug}
						date={post.date}
						slug={post.slug}
						title={post.title}
						excerpt={post.excerpt}
						coverImage={post.coverImage}
					/>
				))}
			</div>
		</section>
	);
};

export default MorePosts;
