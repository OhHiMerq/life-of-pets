import { Link, navigate, routes } from '@redwoodjs/router'
import PostDetails from '../PostDetails/PostDetails'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from '../CommentForm/CommentForm'
const Article = ({ article, summary = false }) => {
  return (
    <article>
      <header>
        <Link to={routes.profile({ id: article.userId })}>
          <h2>{article.User.email}</h2>
        </Link>
        <p>{article.createdAt}</p>
      </header>
      <div
        onClick={() => {
          navigate(routes.article({ id: article.id }))
        }}
      >
        {article.body}
      </div>
      <PostDetails article={article} />
      {summary && (
        <div>
          <CommentForm postId={article.id} userId={article.userId} />
          <CommentsCell postId={article.id} />
        </div>
      )}
    </article>
  )
}

export default Article
