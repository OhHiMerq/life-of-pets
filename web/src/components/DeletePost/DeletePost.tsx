import { useMutation } from '@redwoodjs/web'

const DELETE_POST = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
      userId
    }
  }
`

const DeletePost = ({ article, currentUser }) => {
  const [deletePost, { loading, error }] = useMutation(DELETE_POST)
  return (
    <>
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
