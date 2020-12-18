import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import styles from './markdown.module.css'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const serializers = {
  types: {
    coverImage: ({node}) => {
      if (!node || !node.asset || !node.asset._ref) {
        return null
      }
      return (
        <figure className={styles.postImage}>
          <Image src={node.slug} alt={node.caption} width={2000} height={1000} />
          <figcaption>
            <em>{node.caption}</em>
            <br />
            Photo: <a href={node.source}>{node.photog}</a>
          </figcaption>
        </figure>
      )
    },
    dinkus: ({node}) => {
      if (!node || !node.asset || !node.asset._ref) {
        return null
      }

      console.log('dinkus node', node)

      return <hr className={styles.dinkus} data-content={node.children} />
    },
  },
  marks: {
    highlight: ({node}) => {
      if (!node || !node.asset || !node.asset._ref) {
        return null
      }
      console.log('highlight node', node)

      return <span className={styles.highlitText}>{node}</span>
    },
  },
}

const PostBody = ({content}) => {
  return (
    <div className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <BlockContent
        blocks={content}
        dataset="production"
        projectId={projectId}
        serializers={serializers}
        className={styles.markdown}
      />
    </div>
  )
}

export default PostBody
