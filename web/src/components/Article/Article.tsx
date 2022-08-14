const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2>User {article.userId}</h2>
        <p>{article.createdAt}</p>
      </header>
      <div>{article.body}</div>
    </article>
  )
}

export default Article
