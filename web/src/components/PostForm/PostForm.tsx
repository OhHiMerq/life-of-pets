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
import { QUERY as PostsQuery } from 'src/components/FollowedArticlesCell'
import 'src/index.css'

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
    refetchQueries: [{ query: PostsQuery, variables: { userId: userId } }],
  })
  const formMethods = useForm()
  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createPost({ variables: { input: { userId, ...input } } })
  }
  return (
    <div className="card">
      <Toaster />
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
        <FormError error={error} />
        <TextAreaField
          name="body"
          validation={{ required: true }}
          className="input"
          placeholder="Create a Post"
        />
        <br />
        <Submit className="btn flex-end" disabled={loading}>
          Publish
        </Submit>
      </Form>
    </div>
  )
}

export default PostForm
