import {
  Form,
  TextAreaField,
  Submit,
  FormError,
  SubmitHandler,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
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
  const [createPost, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('Published Successfully!')
      formMethods.reset()
    },
  })
  const formMethods = useForm()
  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createPost({ variables: { input: { userId, ...input } } })
  }
  return (
    <div>
      <Toaster />
      <h3>Create Post</h3>
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
        <FormError error={error} />
        <TextAreaField name="body" validation={{ required: true }} />
        <br />
        <Submit disabled={loading}>Publish</Submit>
      </Form>
    </div>
  )
}

export default PostForm
