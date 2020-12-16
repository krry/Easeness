import {previewClient} from '../../lib/sanity'

const createComment = async function (
  req: {body: string},
  res: {
    status: (
      arg0: number,
    ) => {(): any; new (): any; json: {(arg0: {message: string; err?: any}): any; new (): any}}
  },
) {
  // Destructure the pieces of our request
  const {_id, name, email, comment} = JSON.parse(req.body)
  try {
    // Use our Client to create a new document in Sanity with an object
    await previewClient.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit comment`, err})
  }

  return res.status(200).json({message: 'Comment submitted'})
}

export default createComment
