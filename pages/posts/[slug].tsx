import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/container'
import SiteHeader from '../../components/site-header'
import Layout from '../../components/layout'
import MoreDocs from '../../components/more-docs'
import PostBody from '../../components/article-body'
import PostHeader from '../../components/article-header'
import PostTitle from '../../components/article-title'
import Comments from '../../components/comments'
import Form from '../../components/form'
import SectionSeparator from '../../components/section-separator'
import {getAllDocsForHome, getAllDocsWithSlug, getPostAndMorePosts} from '../../lib/api'

const Post = ({post, morePosts, preview, allPages}) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <SiteHeader pages={allPages} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                {post.ogImage && <meta property="og:image" content={post.ogImage.url} />}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>

            <Comments comments={post.comments} />
            <Form _id={post._id} />

            <SectionSeparator />
            {morePosts && morePosts.length > 0 && <MoreDocs docs={morePosts} type={'post'} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
  const data = await getPostAndMorePosts(params.slug, preview)
  const allPages = await getAllDocsForHome('page', preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || [],
      allPages,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllDocsWithSlug('post')
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}

export default Post
