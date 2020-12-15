import Avatar from './avatar'
import CoverImage from './cover-image'
import Date from './date'
import ArticleTitle from './article-title'

const ArticleHeader = ({title, coverImage, date, author}) => {
  return (
    <section className="my-16 md:my-12">
      <ArticleTitle>{title}</ArticleTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.avatar} />
      </div>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage} />
      </div>
      <div className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
        <div className="block mb-6 md:hidden">
          <Avatar name={author.name} picture={author.avatar} />
        </div>
        <div className="mb-6 text-md">
          <Date dateString={date} />
        </div>
      </div>
    </section>
  )
}

export default ArticleHeader
