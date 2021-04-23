import Datetime from './datetime'

const Comments = ({comments = []}) => {
  return (
    <section className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <hr className="w-2/3 mx-auto my-24 border-gray-700" />
      <h2 className="my-8 mt-16 text-6xl text-center lg:text-6xl prettier-heading rainbow-wheel">
        Comments?
      </h2>
      <ul>
        {comments?.map(({_id, _createdAt, name, email, comment}) => (
          <li key={_id} className="mb-5">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight">
              <a href={`mailto:${email}`} className="pretty-link">
                {name}
              </a>{' '}
              (<Datetime dateString={_createdAt} />)
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
