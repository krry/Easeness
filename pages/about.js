import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import AboutContent from '../components/about-content'

export default function About({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>About Atmanautica</title>
        </Head>
        <Container>
          <AboutContent />
        </Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ preview = false }) {
  // const allPosts = await getAllPostsForHome(preview)
  // return {
  //   props: { allPosts, preview },
  // }
// }
