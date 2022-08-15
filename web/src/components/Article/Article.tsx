import { Link, navigate, routes } from '@redwoodjs/router'
import PostDetails from '../PostDetails/PostDetails'
import CommentsCell from 'src/components/CommentsCell'
const Article = ({ article, summary = false }) => {
  return (
    <article>
      <header>
        <Link to={routes.profile({ id: article.userId })}>
          <h2>User {article.userId}</h2>
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
          <CommentsCell />
        </div>
      )}
    </article>
  )
}

export default Article
