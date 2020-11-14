import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'

const dataset = 'production'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export default function PageBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent
        blocks={content}
        dataset={dataset}
        projectId={projectId}
        className={markdownStyles.markdown}
      />
    </div>
  )
}
