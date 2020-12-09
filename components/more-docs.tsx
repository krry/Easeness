import DocPreview from './doc-preview'

const MoreDocs = ({type, docs}) => {
  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-5xl">
        More {typeLabel}s
      </h2>
      <div className="grid grid-cols-1 row-gap-20 mb-32 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 md:row-gap-32">
        {docs.map((doc) => (
          <DocPreview
            key={doc.slug}
            type={type}
            date={doc.date}
            slug={doc.slug}
            title={doc.title}
            author={doc.author}
            excerpt={doc.excerpt}
            coverImage={doc.coverImage}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreDocs
