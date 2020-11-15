import client, { previewClient } from './sanity'

const getUniqueDocs = (docs) => {
  const slugs = new Set()
  return docs.filter((doc) => {
    if (slugs.has(doc.slug)) {
      return false
    } else {
      slugs.add(doc.slug)
      return true
    }
  })
}

const postFields = `
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'avatar': avatar.asset->url},
`

const getClient = (preview) => (preview ? previewClient : client)

export const getAllDocsWithSlug = async (docType) => {
  const data = await client.fetch(`
    *[_type == '${docType}']{ 'slug': slug.current }
  `)
  return data
}

export const getPreviewPostBySlug = async (slug) => {
  const data = await getClient(true).fetch(`
    *[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`, {slug})
  return data[0]
}

export const getAllPostsWithSlug =  async () => {
  const data = await client.fetch(`
    *[_type == "post"]{
      'slug': slug.current
    }`)
  return data
}

export const getAllDocsForHome = async (docType, preview) => {
  const fieldString = docType + "Fields"
  const results = await getClient(preview).fetch(`
    *[_type == "${docType}"] | order(date desc, _updatedAt desc) {
      ${eval(fieldString)}
    }`)
  return getUniqueDocs(results)
}

export const getPostAndMorePosts = async (slug, preview) => {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient.fetch(`
      *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`, {slug}).then((res) => res?.[0]),
    curClient.fetch(`
      *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) {
        ${postFields}
        content,
      }[0...2]`, {slug}),
  ])
  return { post, morePosts: getUniqueDocs(morePosts) }
}

const pageFields = `
  title,
  date,
  excerpt,
  'slug': slug.current,
  'author': author->{
    name,
    'avatar': avatar.asset->url
  },
  'coverImage': coverImage.asset->url,
`

export const getPagesBySlug = async (slug, preview) => {
  const curClient = getClient(preview)
  const [page, morePages] = await Promise.all([
    curClient.fetch(`
      *[_type == 'page' && slug.current == '${slug}'] {
        ${pageFields}
        content
      }`, {slug}).then((res) => res?.[0]),
    curClient.fetch(`
      *[_type == 'page' && slug.current != '${slug}'] | order(date desc, _updatedAt desc) {
        ${pageFields}
        content
      }[0...2]`, {slug}),
  ])
  return { page, morePages: getUniqueDocs(morePages) }
}
