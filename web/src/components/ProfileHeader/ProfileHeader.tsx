import { useAuth } from '@redwoodjs/auth'
import FollowAction from '../FollowAction/FollowAction'

const ProfileHeader = ({ userId }) => {
  const { currentUser } = useAuth()
  return (
    <header>
      <h2>{'Profile'}</h2>
      {currentUser.id == userId ? null : <FollowAction profileId={userId} />}
    </header>
  )
}

export default ProfileHeader
