import Container from '../components/container'
import MoreDocs from '../components/more-docs'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllDocsForHome} from '../lib/api'
import Head from 'next/head'
import {GetStaticProps} from 'next'
// import { CMS_NAME } from '../lib/constants'

const Index = ({allPosts, allPages, preview}) => {
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
          {morePosts.length > 0 && <MoreDocs docs={morePosts} type={'post'} />}
          {morePages.length > 0 && <MoreDocs docs={morePages} type={'page'} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
  const allPosts = await getAllDocsForHome('post', preview)
  const allPages = await getAllDocsForHome('page', preview)
  return {
    props: {allPosts, allPages, preview},
  }
}

export default Index
