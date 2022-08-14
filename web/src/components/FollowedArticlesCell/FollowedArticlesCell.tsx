import type { FollowedArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FollowedArticlesQuery($userId: Int!) {
    followedArticles: followedPosts(userId: $userId) {
      id
      body
      userId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  followedArticles,
}: CellSuccessProps<FollowedArticlesQuery>) => {
  return (
    <ul>
      {followedArticles.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
