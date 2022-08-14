import type {
  FindFollowedQuery,
  FindFollowedQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ProfileElement from '../ProfileElement/ProfileElement'

export const QUERY = gql`
  query FindFollowedQuery($userId: Int!) {
    followed: followed(userId: $userId) {
      id
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindFollowedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  followed,
}: CellSuccessProps<FindFollowedQuery, FindFollowedQueryVariables>) => {
  return (
    <div>
      <h2>Followed</h2>
      {followed.map((profile) => (
        <ProfileElement key={profile.id} profile={profile} />
      ))}
    </div>
  )
}
