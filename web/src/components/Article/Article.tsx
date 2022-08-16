import { Link, navigate, routes } from '@redwoodjs/router'
import PostDetails from '../PostDetails/PostDetails'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from '../CommentForm/CommentForm'
import 'src/index.css'

const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.toLocaleTimeString()} | ${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Article = ({ article, summary = false }) => {
  return (
    <article className="article">
      <header className="article-header">
        <Link to={routes.profile({ id: article.userId })}>
          <h3>{article.User.email}</h3>
        </Link>
        <p className="article-date">{formattedDate(article.createdAt)}</p>
      </header>
      <div
        onClick={() => {
          navigate(routes.article({ id: article.id }))
        }}
        className="article-body"
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
