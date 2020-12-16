import Date from './date'

const Comments = ({comments = []}) => {
  return (
    <section className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <hr className="w-2/3 mx-auto my-24 border-gray-700" />
      <h2 className="my-8 mt-16 text-6xl font-extrabold leading-tight tracking-tighter text-center text-transparent lg:text-6xl bg-clip-text bg-gradient-to-br from-cyan-500 to-fuchsia-600 rainbow-wheel">
        Comments?
      </h2>
      <ul>
        {comments?.map(({_id, _createdAt, name, email, comment}) => (
          <li key={_id} className="mb-5">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight">
              <a href={`mailto:${email}`}>{name}</a> (<Date dateString={_createdAt} />)
            </h4>
            <p>{comment}</p>
            <hr className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Comments
