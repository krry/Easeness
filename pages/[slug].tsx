import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../components/container'
import Layout from '../components/layout'
import SiteHeader from '../components/site-header'
import PostHeader from '../components/post-header'
import PostTitle from '../components/post-title'
import PostBody from '../components/post-body'
import Dinkus from '../components/dinkus'
import MorePosts from '../components/more-posts'
import Comments from '../components/comments'
import Form from '../components/form'
import {getAllPostsWithSlug, getAllPostsForNav, getPostsAndMorePosts} from '../lib/api'

const Post = ({post, morePosts, preview, navPosts}) => {
  const router = useRouter()
  if (!router.isFallback && (!post?.slug || !post?.title)) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <SiteHeader pages={navPosts} />
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

            {post.doc.name === 'post' && (
              <section>
                <Comments comments={post?.comments} />
                <Form _id={post._id} />
              </section>
            )}

            <Dinkus text="⚜︎" />
            {morePosts?.length > 0 && <MorePosts posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
  const posts = await getPostsAndMorePosts(params.slug, preview)
  const pages = await getAllPostsForNav(preview)
  return {
    props: {
      preview,
      post: posts?.post || null,
      morePosts: posts?.morePosts || [],
      navPosts: pages || [],
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllPostsWithSlug()
  return {
    paths:
      allPages?.map((page) => ({
        params: {
          slug: page.slug,
        },
      })) || [],
    fallback: true,
  }
}

export default Post
