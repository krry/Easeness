import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'

const PostHeader = ({title, coverImage, date, author}) => {
  return (
    <section className="my-16 md:my-12">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.avatar} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.avatar} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </section>
  )
}

export default PostHeader
