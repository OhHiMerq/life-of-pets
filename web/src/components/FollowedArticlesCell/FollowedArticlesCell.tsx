import type { FollowedArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from '../Article/Article'

export const QUERY = gql`
  query FollowedArticlesQuery($userId: Int!) {
    followedArticles: followedPosts(userId: $userId) {
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

export const Success = ({
  followedArticles,
}: CellSuccessProps<FollowedArticlesQuery>) => {
  var SortPost = [...followedArticles]
  SortPost = SortPost.sort(function (a, b) {
    var dateA = new Date(a.createdAt).getTime()
    var dateB = new Date(b.createdAt).getTime()
    return dateA < dateB ? 1 : -1 // ? -1 : 1 for ascending/increasing order
  })
  return (
    <div>
      {SortPost.map((article) => (
        <div>
          <Article key={article.id} article={article} />
        </div>
      ))}
    </div>
  )
}
