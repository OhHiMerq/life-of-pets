import { navigate, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

const GET_COMMENTS = gql`
  query GetComments($postId: Int!) {
    comments(postId: $postId) {
      id
      body
    }
  }
`

const PostDetailComment = ({ article }) => {
  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery(GET_COMMENTS, {
    variables: { postId: article.id },
  })

  if (commentsLoading) return <div>Loading...</div>
  if (commentsError) return <div>Error! ${commentsError.message}</div>

  return (
    <span
      className="article-details-comment"
      onClick={() => {
        navigate(routes.article({ id: article.id }))
      }}
    >
      Comments [{commentsData.comments.length}]
    </span>
  )
}

export default PostDetailComment
