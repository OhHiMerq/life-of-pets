import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from '../Article/Article'

export const QUERY = gql`
  query ArticlesQuery($userId: Int!) {
    articles: posts(userId: $userId) {
      id
      body
      userId
      createdAt
      reacts {
        id
        postId
        userId
        value
      }
      User {
        id
        email
      }
    }
  }
`

export const Loading = () => (
  <div style={{ textAlign: 'center' }}>Loading...</div>
)

export const Empty = () => (
  <div style={{ textAlign: 'center' }}>No Posts Available</div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  var SortPost = [...articles]
  SortPost = SortPost.sort(function (a, b) {
    var dateA = new Date(a.createdAt).getTime()
    var dateB = new Date(b.createdAt).getTime()
    return dateA < dateB ? 1 : -1 // ? -1 : 1 for ascending/increasing order
  })

  return (
    <>
      {SortPost.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  )
}
