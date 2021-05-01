import { GetStaticProps } from 'next'
import Head from 'next/head'

import Container from '../components/container'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MorePosts from '../components/more-posts'
import { getAllPosts, getAllPostsForNav } from '../lib/api'
import { SITE_TITLE } from '../lib/constants'

const Index = ({ allPosts, navPages, preview }) => {
	const hero = allPosts[0]
	const morePosts = allPosts.slice(1)
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>{SITE_TITLE}.</title>
				</Head>
				<Container>
					<Intro pages={navPages} />
					{hero && (
						<Hero
							title={hero.title}
							coverImage={hero.coverImage}
							date={hero.date}
							slug={hero.slug}
							excerpt={hero.excerpt}
						/>
					)}
					{morePosts?.length > 0 && <MorePosts posts={morePosts} />}
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllPosts(preview)
	const navPages = await getAllPostsForNav(preview)

	return {
		props: { navPages, allPosts, preview },
	}
}

export default Index
