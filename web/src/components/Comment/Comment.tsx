import { Link, routes } from '@redwoodjs/router'
import 'src/index.css'
const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.toLocaleTimeString()} | ${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <header className="header" style={{ backgroundColor: '#f8e3a1' }}>
        <Link to={routes.profile({ id: comment.user.id })}>
          <h3 className="email">{comment.user.email}</h3>
        </Link>
        <time className="date" dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>
      </header>
      <p className="body">{comment.body}</p>
    </div>
  )
}

export default Comment
