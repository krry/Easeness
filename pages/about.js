import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import AboutContent from '../components/About'

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
