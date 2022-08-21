import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { QUERY as FollowedPostsQuery } from 'src/components/FollowedArticlesCell'
import { QUERY as UserPostsQuery } from 'src/components/ArticlesCell'

const DELETE_POST = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
      userId
    }
  }
`

const DeletePost = ({ article, currentUser }) => {
  const [deletePost, { loading, error }] = useMutation(DELETE_POST, {
    onCompleted: () => {
      toast.success('Post Deleted!')
    },
    refetchQueries: [
      { query: FollowedPostsQuery, variables: { userId: currentUser.id } },
      { query: UserPostsQuery, variables: { userId: currentUser.id } },
    ],
  })

  return (
    <>
      <Toaster />
      {article.userId == currentUser.id ? (
        <span>
          <button
            disabled={loading}
            onClick={() => {
              deletePost({ variables: { id: article.id } })
            }}
          >
            Delete
          </button>
        </span>
      ) : null}
    </>
  )
}

export default DeletePost
