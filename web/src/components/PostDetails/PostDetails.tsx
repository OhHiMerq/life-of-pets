import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
// import { useMutation } from '@redwoodjs/web'

// import { QUERY as FeedQuery } from 'src/components/FollowedArticlesCell'
// import { QUERY as ArticleQuery } from 'src/components/ArticlesCell'
import 'src/index.css'
import PostReact from '../PostReact/PostReact'

const GET_COMMENTS = gql`
  query GetComments($postId: Int!) {
    comments(postId: $postId) {
      id
      body
    }
  }
`

const PostDetails = ({ article }) => {
  const { currentUser } = useAuth()

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
    <div className="post-details">
      <div>
        <PostReact article={article} currentUser={currentUser} />
        <span
          className="article-details-comment"
          onClick={() => {
            navigate(routes.article({ id: article.id }))
          }}
        >
          Comments [{commentsData.comments.length}]
        </span>
      </div>
    </div>
  )
}

export default PostDetails
