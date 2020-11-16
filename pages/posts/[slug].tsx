import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreDocs from '../../components/more-docs'
import PostTitle from '../../components/post-title'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import {getAllDocsWithSlug, getPostAndMorePosts} from '../../lib/api'
import {GetStaticProps, GetStaticPaths} from 'next'

const Post = ({post, morePosts, preview}) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
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
            <SectionSeparator />
            {morePosts.length > 0 && <MoreDocs docs={morePosts} type={'post'} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
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
