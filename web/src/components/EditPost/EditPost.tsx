import { Form, Submit, TextAreaField } from '@redwoodjs/forms'

const EditPost = ({ article }) => {
  return (
    <>
      <Form>
        <TextAreaField
          name="body"
          validation={{ required: true }}
          className="input"
          placeholder="Edit Post"
        >
          {article.body}
        </TextAreaField>
        <br />
        <Submit className="btn flex-end">Publish</Submit>
      </Form>
    </>
  )
}

export default EditPost
