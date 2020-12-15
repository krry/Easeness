import {GetStaticProps} from 'next'
import Head from 'next/head'

import Container from '../components/container'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreDocs from '../components/more-docs'
import {getAllDocsForHome} from '../lib/api'
import {SITE_TITLE} from '../lib/constants'

const Index = ({allPosts, allPages, preview}) => {
  const hero = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{SITE_TITLE}.</title>
        </Head>
        <Container>
          <Intro pages={allPages} />
          {hero && (
            <Hero
              title={hero.title}
              coverImage={hero.coverImage}
              date={hero.date}
              author={hero.author}
              slug={hero.slug}
              excerpt={hero.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreDocs docs={morePosts} type={'post'} />}
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
