import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
// import { useMutation } from '@redwoodjs/web'

// import { QUERY as FeedQuery } from 'src/components/FollowedArticlesCell'
// import { QUERY as ArticleQuery } from 'src/components/ArticlesCell'
import 'src/index.css'
import DeletePost from '../DeletePost/DeletePost'
import PostDetailComment from '../PostDetailComment/PostDetailComment'
import PostReact from '../PostReact/PostReact'

const PostDetails = ({ article }) => {
  const { currentUser } = useAuth()

  return (
    <div className="post-details">
      <div>
        <PostReact article={article} currentUser={currentUser} />
        <PostDetailComment article={article} />
        <DeletePost article={article} currentUser={currentUser} />
      </div>
    </div>
  )
}

export default PostDetails
