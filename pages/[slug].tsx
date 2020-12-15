import {GetStaticPaths, GetStaticProps} from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import {useRouter} from 'next/router'

import Container from '../components/container'
import Header from '../components/site-header'
import Layout from '../components/layout'
import MoreDocs from '../components/more-docs'
import ArticleBody from '../components/article-body'
import ArticleHeader from '../components/article-header'
import ArticleTitle from '../components/article-title'
import SectionSeparator from '../components/section-separator'
import {getAllDocsWithSlug, getAllDocsForHome, getPageBySlug, getPostAndMorePosts} from '../lib/api'

const Page = ({page, morePosts, preview, allPages}) => {
  const router = useRouter()
  if (!router.isFallback && (!page?.slug || !page?.title)) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header pages={allPages} />
        {router.isFallback ? (
          <ArticleTitle>Loading…</ArticleTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{page.title}</title>
              </Head>
              <ArticleHeader
                title={page.title}
                coverImage={page.coverImage}
                date={page.date}
                author={page.author}
              />
              <ArticleBody content={page.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && <MoreDocs docs={morePosts} type={'post'} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
  const data = await getPageBySlug(params.slug, preview)
  const allPages = await getAllDocsForHome('page', preview)
  const allPosts = await getAllDocsForHome('post', preview)
  return {
    props: {
      preview,
      page: data || null,
      morePosts: allPosts.slice(0, 2) || [],
      allPages,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllDocsWithSlug('page')
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

export default Page
