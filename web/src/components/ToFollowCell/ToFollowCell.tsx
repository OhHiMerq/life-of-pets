import type {
  FindToFollowQuery,
  FindToFollowQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ToFollowProfile from '../ToFollowProfile/ToFollowProfile'

export const QUERY = gql`
  query FindToFollowQuery($userId: Int!) {
    toFollow: toFollow(userId: $userId) {
      id
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindToFollowQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  toFollow,
}: CellSuccessProps<FindToFollowQuery, FindToFollowQueryVariables>) => {
  return (
    <div>
      {toFollow.map((profile) => (
        <ToFollowProfile key={profile.id} profile={profile} />
      ))}
    </div>
  )
}
