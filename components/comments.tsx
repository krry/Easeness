import Date from './date'

const Comments = ({comments = []}) => {
  return (
    <section className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <h2 className="mt-10 mb-4 text-4xl font-semibold leading-tight tracking-tight text-center text-purple-700 lg:text-6xl">
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
