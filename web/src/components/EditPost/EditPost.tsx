import { Form, Submit, TextAreaField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { QUERY as FollowedPostsQuery } from 'src/components/FollowedArticlesCell'
import { QUERY as UserPostsQuery } from 'src/components/ArticlesCell'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

const UPDATE_POST = gql`
  mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
    }
  }
`

const EditPost = ({ article, setIsEdit }) => {
  const { currentUser } = useAuth()
  const realBody = article.body
  const [editBody, setEditBody] = useState(article.body)
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST, {
    onCompleted: () => {
      toast.success('Post Edited!')
      setIsEdit(false)
    },
    refetchQueries: [
      { query: FollowedPostsQuery, variables: { userId: currentUser.id } },
      { query: UserPostsQuery, variables: { userId: currentUser.id } },
    ],
  })
  const onSubmit = (data) => {
    updatePost({ variables: { id: article.id, input: { body: data.body } } })
  }
  return (
    <>
      <Toaster />
      <Form onSubmit={onSubmit}>
        <TextAreaField
          name="body"
          validation={{ required: true }}
          className="input"
          placeholder="Edit Post"
          defaultValue={article.body}
          onChange={(e) => setEditBody(e.target.value)}
          disabled={loading}
        />
        <br />
        <Submit disabled={loading || realBody == editBody}>Apply</Submit>
        <button
          type="button"
          onClick={() => {
            setIsEdit(false)
          }}
        >
          Cancel
        </button>
      </Form>
    </>
  )
}

export default EditPost
