import { Form, TextAreaField, Submit } from '@redwoodjs/forms'

const PostForm = () => {
  return (
    <div>
      <h3>Create Post</h3>
      <Form>
        <TextAreaField name="body" validation={{ required: true }} />
      </Form>
      <Submit>Submit</Submit>
    </div>
  )
}

export default PostForm
