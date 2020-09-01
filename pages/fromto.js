import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function FromTo({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>From &rarr; To</title>
        </Head>
        <Container>
          <Table>
            <Row></Row>
          </Table>
        </Container>
      </Layout>
  )
}
