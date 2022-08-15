import { Link, routes } from '@redwoodjs/router'
import PostDetails from '../PostDetails/PostDetails'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <Link to={routes.profile({ id: article.userId })}>
          <h2>User {article.userId}</h2>
        </Link>
        <p>{article.createdAt}</p>
      </header>
      <div>{article.body}</div>
      <PostDetails article={article} />
    </article>
  )
}

export default Article
