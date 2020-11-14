import Container from '../components/container'
import MoreDocs from '../components/more-docs'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllDocsForHome } from '../lib/api'
import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts, allPages, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const morePages = allPages.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Easeness.</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreDocs docs={morePosts} type={"post"} />}
          {morePages.length > 0 && <MoreDocs docs={morePages} type={"page"} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllDocsForHome('post', preview)
  const allPages = await getAllDocsForHome('page', preview)
  return {
    props: { allPosts, allPages, preview },
  }
}
