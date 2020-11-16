import DocPreview from './doc-preview'

const MoreDocs = ({type, docs}) => {
  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More {typeLabel}s
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
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
