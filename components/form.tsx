import {useState} from 'react'
import {useForm} from 'react-hook-form'

export default function Form({_id}) {
  const [formData, setFormData] = useState({name: '', email: '', comment: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = async (data: (prevState: undefined) => undefined) => {
    setIsSubmitting(true)
    let response: Response
    setFormData(data)
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      // type: 'application/json',
    }
    try {
      response = await fetch('/api/createComment', options)
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

  return (
    <section className="max-w-full mx-auto md:max-w-2xl lg:max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
        <input ref={register} type="hidden" name="_id" value={_id} />
        <div className="flex flex-row">
          <div className="w-1/2 mx-2 my-2 field">
            <label className="block mb-5">
              <span className="text-gray-700">My friends call me…</span>
              <input
                name="name"
                ref={register({required: true})}
                className="block w-full px-3 py-2 mt-1 border rounded shadow form-input"
                placeholder="Kerrbear"
              />
            </label>
          </div>
          <div className="w-1/2 mx-2 my-2 field">
            <label className="block mb-5">
              <span className="text-gray-700">Email‡</span>
              <input
                name="email"
                type="email"
                ref={register({required: true})}
                className="block w-full px-3 py-2 mt-1 border rounded shadow form-input"
                placeholder="your@email.com"
              />
              <aside className="block text-xs text-right text-gray-700">
                ‡Don't worry, spam isn't easeness.
              </aside>
            </label>
          </div>
        </div>
        <label className="block mb-5">
          <span className="text-gray-700">What would you like to share with us?</span>
          <textarea
            ref={register({required: true})}
            name="comment"
            className="block w-full px-3 py-2 mt-1 border rounded shadow form-textarea"
            rows={8}
            placeholder="Insights, perspectives, stories, understandings…"></textarea>
        </label>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
        />
      </form>
    </section>
  )
}
