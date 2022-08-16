import { useAuth } from '@redwoodjs/auth'
import { useQuery } from '@redwoodjs/web'
import FollowAction from '../FollowAction/FollowAction'

const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      email
    }
  }
`

const ProfileHeader = ({ userId, currentUserId }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  })
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! ${error.message}</div>
  return (
    <header className="card">
      <h2>Profile: {data.user.email}</h2>

      {currentUserId == userId ? null : <FollowAction profileId={userId} />}
    </header>
  )
}

export default ProfileHeader
