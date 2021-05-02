import client, { previewClient } from './sanity'

const getUniquePosts = (posts: any[]) => {
	const slugs = new Set()
	return posts.filter(post => {
		if (slugs.has(post.slug)) {
			return false
		} else {
			slugs.add(post.slug)
			return true
		}
	})
}

const getUniquePages = (posts: any[]) => {
	const slugs = new Set()
	return posts.filter(post => {
		if (slugs.has(post.slug)) {
			return false
		} else if (post.doc.name === 'page') {
			slugs.add(post.slug)
			return true
		}
	})
}

const postFields = `
  name,
  title,
  link,
  'slug': slug.current,
  'author': author->{
    name,
    'avatar': avatar.asset->url
  },
  excerpt,
  'coverImage': coverImage.asset->url,
  'doc': doc->{name},
  date,
`

const pageQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc){
	doc->{name},
	link,
	'slug': slug.current,
	title
}
`

const bodyWithLinkSlugs = `
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalink" => {
        "slug": @.reference->slug
      }
    }
  },
`

export const getPostBySlug = async (
	slug: string | string[],
	preview: boolean
) => {
	const curClient = getClient(preview)
	const [post] = await Promise.all([
		curClient.fetch(
			`
      *[_type == 'post' && slug.current == '${slug}'] {
        ${postFields}
        ${bodyWithLinkSlugs}
      }`,
			{ slug }
		),
	])
	return post[0]
}

const getClient = (preview: boolean) => {
	return preview ? previewClient : client
}

export const getAllPostsWithSlug = async () => {
	const data = await client.fetch(`
    *[_type == 'post']{ 'slug': slug.current }
  `)
	return data
}

export const getPreviewPostBySlug = async (slug: string) => {
	const data = await getClient(true).fetch(
		`
    *[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      ${bodyWithLinkSlugs}
    }`,
		{ slug }
	)
	return data[0]
}

export const getAllPostsForNav = async (preview: boolean) => {
	const results = await getClient(preview).fetch(pageQuery)
	return getUniquePages(results)
}

export const getAllPosts = async (preview: boolean) => {
	const results = await getClient(preview).fetch(`
    *[_type == "post"] | order(date desc, _updatedAt desc) {
      ${postFields}
    }`)
	return getUniquePosts(results)
}

export const getPostAndMorePosts = async (
	slug: string | string[],
	preview: boolean
) => {
	const curClient = getClient(preview)
	const [post, morePosts] = await Promise.all([
		curClient
			.fetch(
				`
      *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        ${bodyWithLinkSlugs}
        'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
          _id,
          name,
          email,
          comment,
          _createdAt
        }
      }`,
				{ slug }
			)
			.then(res => res?.[0]),
		curClient.fetch(
			`
      *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) {
        ${postFields}
        content,
      }[0...2]`,
			{ slug }
		),
	])
	return { post, morePosts: getUniquePosts(morePosts) }
}
