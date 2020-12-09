import BlockContent from '@sanity/block-content-to-react'

import markdownStyles from './markdown-styles.module.css'

const dataset = 'production'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const PageBody = ({content}) => {
  return (
    <div className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <BlockContent
        blocks={content}
        dataset={dataset}
        projectId={projectId}
        className={markdownStyles.markdown}
      />
    </div>
  )
}

export default PageBody
