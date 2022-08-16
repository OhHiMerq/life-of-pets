import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  Submit,
  TextAreaField,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { QUERY as CommentsQuery } from '../CommentsCell'
const CREATE = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      body
      createdAt
      postId
      userId
    }
  }
`
const CommentForm = ({ userId, postId }) => {
  const { currentUser } = useAuth()
  const formMethods = useForm()
  const [createComment, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('Comment Posted')
      formMethods.reset()
    },
    refetchQueries: [{ query: CommentsQuery, variables: { postId: postId } }],
  })
  const onSubmit = (input) => {
    createComment({
      variables: {
        input: { body: input.body, postId: postId, userId: currentUser.id },
      },
    })
  }
  return (
    <div>
      <Toaster />
      <Form onSubmit={onSubmit} formMethods={formMethods}>
        <FormError error={error} />
        <h3>Leave a Comment</h3>
        <TextAreaField name="body" validation={{ required: true }} />
        <Submit disabled={loading}>Post</Submit>
      </Form>
    </div>
  )
}

export default CommentForm
