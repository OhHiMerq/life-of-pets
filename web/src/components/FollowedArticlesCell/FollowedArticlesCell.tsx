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
    <div>
      {followedArticles.map((article) => (
        <div>
          <Article key={article.id} article={article} />
        </div>
      ))}
    </div>
  )
}
