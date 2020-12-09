import BlockContent from '@sanity/block-content-to-react'

import markdownStyles from './markdown-styles.module.css'

const PostBody = ({content}) => {
  return (
    <div className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <BlockContent blocks={content} className={markdownStyles.markdown} />
    </div>
  )
}

export default PostBody
