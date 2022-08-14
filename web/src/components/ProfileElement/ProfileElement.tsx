import FollowAction from '../FollowAction/FollowAction'
import { Link, routes } from '@redwoodjs/router'

const ProfileElement = ({ profile }) => {
  return (
    <div>
      <Link to={routes.profile({ id: profile.id })}>
        <h2>
          User({profile.id}): {profile.email}
        </h2>
      </Link>
      <FollowAction profileId={profile.id} />
    </div>
  )
}

export default ProfileElement
