import { Link, routes } from '@redwoodjs/router'

const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  console.log(comment)
  return (
    <div>
      <header>
        <Link to={routes.profile({ id: comment.user.id })}>
          <h2>{comment.user.email}</h2>
        </Link>
        <time dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>
      </header>
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment
