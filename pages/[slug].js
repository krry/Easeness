import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PageHeader from '../components/page-header'
import PageBody from '../components/page-body'
import { getPageBySlug, getAllDocsWithSlug } from '../lib/api'

export default function Page({ page, preview }) {
  const router = useRouter()
  console.log('page', page)
  if (!router.isFallback && (!page?.slug || !page?.title)) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
        <Head>
          <title>{page.title}</title>
        </Head>
      {page && (
        <Container>
          <PageHeader
            title={page.title}
            coverImage={page.coverImage}
            date={page.date}
            author={page.author}
          />
          <PageBody content={page.content} />
        </Container>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  console.log('props for page', params.slug)
  const data = await getPageBySlug(params.slug, preview)
  console.log('data for', params.slug, data)
  return {
    props: {
      preview,
      page: data || null,
    }
  }
}

export async function getStaticPaths() {
  const pages = await getAllDocsWithSlug('page')
  return {
    paths:
      pages?.map((page) => ({
        params: {
          slug: page.slug,
        },
      })) || [],
    fallback: true,
  }
}
