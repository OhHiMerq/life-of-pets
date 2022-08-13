import {
  Form,
  TextAreaField,
  Submit,
  FormError,
  SubmitHandler,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      body
      createdAt
      userId
    }
  }
`

interface FormValues {
  body: string
}

interface Props {
  userId: number
}

const PostForm = ({ userId }: Props) => {
  const [createPost, { loading, error }] = useMutation(CREATE)
  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createPost({ variables: { input: { userId, ...input } } })
  }
  return (
    <div>
      <h3>Create Post</h3>
      <Form onSubmit={onSubmit}>
        <FormError error={error} />
        <TextAreaField name="body" validation={{ required: true }} />
        <br />
        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </div>
  )
}

export default PostForm
