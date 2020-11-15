import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import PageHeader from '../components/page-header'
import PostTitle from '../components/post-title'
import PageBody from '../components/page-body'
import MoreDocs from '../components/more-docs'
import SectionSeparator from '../components/section-separator'
import {
  getPagesBySlug,
  getAllDocsWithSlug
} from '../lib/api'
import { GetStaticProps, GetStaticPaths } from 'next'

const Page = ({ page, morePages, preview }) => {
  const router = useRouter()
  if (!router.isFallback && (!page?.slug || !page?.title)) {
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
              <title>{page.title}</title>
            </Head>
            <PageHeader
              title={page.title}
              coverImage={page.coverImage}
              date={page.date}
              author={page.author}
            />
            <PageBody content={page.content} />
          </article>
          <SectionSeparator />
          {morePages.length > 0 && <MoreDocs docs={morePages} type={"page"} />}
        </>
      )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const data = await getPagesBySlug(params.slug, preview)
  return {
    props: {
      preview,
      page: data?.page || null,
      morePages: data?.morePages || null,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllDocsWithSlug('page')
  console.log('allPages', allPages)
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