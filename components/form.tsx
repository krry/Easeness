import {useState} from 'react'
import {useForm} from 'react-hook-form'

export default function Form({_id}) {
  const [formData, setFormData] = useState({name: '', email: '', comment: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const {register, handleSubmit, watch, errors} = useForm()

  const onSubmit = async (data: (prevState: undefined) => undefined) => {
    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('Content-Type', 'application/json')

    setIsSubmitting(true)
    setFormData(data)
    try {
      await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: requestHeaders,
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>
  }
  if (hasSubmitted) {
    return (
      <section className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
        <h3 className="mb-4 text-center">
          Welcome to the discussion, {formData.name || 'dear Reader'}.
        </h3>
        <p className="mb-4">Here is what we received:</p>
        <p className="mb-4">
          {' '}
          <blockquote className="pl-4 ml-4 font-serif italic border-l-2 border-purple-200">
            {formData.comment}
          </blockquote>{' '}
        </p>
        <p className="mb-4">We took the liberty of sending you a copy at {formData.email}.</p>
      </section>
    )
  }
  // TODO: enable autocomplete of the name and email fields
  return (
    <section className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
        <input ref={register} type="hidden" name="_id" value={_id} />
        <div className="flex flex-row gap-x-8">
          <div className="w-1/2 field">
            <label className="block mb-5">
              <span className="text-sm font-bold tracking-wide text-gray-800">Call me…</span>
              <input
                name="name"
                ref={register({required: true})}
                className="input form-input"
                placeholder="Kerrbear"
              />
            </label>
          </div>
          <div className="w-1/2 field">
            <label className="block mb-5">
              <span className="text-sm font-bold tracking-wide text-gray-800">Email‡</span>
              <input
                name="email"
                type="email"
                ref={register({required: true})}
                className="input form-input"
                placeholder="your@email.com"
              />
              <aside className="block text-xs text-right text-gray-700">
                ‡Don't worry, spam isn't easeness.
              </aside>
            </label>
          </div>
        </div>
        <label className="block mb-5 field">
          <span className="text-sm font-bold tracking-wide text-gray-800">
            What would you like to share with us?
          </span>
          <textarea
            ref={register({required: true})}
            name="comment"
            className="input form-textarea"
            rows={8}
            placeholder="Insights, perspectives, stories, understandings…"></textarea>
        </label>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <button type="submit" className="btn wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block w-12 h-12 mr-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span>Conversate</span>
        </button>
      </form>
    </section>
  )
}
