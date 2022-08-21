import { Link, navigate, routes } from '@redwoodjs/router'
import PostDetails from '../PostDetails/PostDetails'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from '../CommentForm/CommentForm'
import 'src/index.css'
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import EditPost from '../EditPost/EditPost'
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer'

const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.toLocaleTimeString()} | ${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Article = ({ article, summary = false }) => {
  const { currentUser } = useAuth()
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <article className="article">
        <header className="header">
          <Link to={routes.profile({ id: article.userId })}>
            <h3 className="email">{article.User.email}</h3>
          </Link>
          <p className="date">{formattedDate(article.createdAt)}</p>
          {article.userId == currentUser.id ? (
            <>
              <button
                onClick={() => {
                  setIsEdit(true)
                }}
                disabled={isEdit}
              >
                Edit
              </button>
            </>
          ) : null}
        </header>
        <div className="body">
          {isEdit ? (
            <EditPost article={article} setIsEdit={setIsEdit} />
          ) : (
            <>
              {article.body}
              <YoutubePlayer article={article} />
            </>
          )}
        </div>
        <PostDetails article={article} />
      </article>

      {summary && (
        <div>
          <h2>Comments</h2>
          <CommentForm postId={article.id} userId={article.userId} />
          <CommentsCell postId={article.id} />
        </div>
      )}
    </>
  )
}

export default Article
