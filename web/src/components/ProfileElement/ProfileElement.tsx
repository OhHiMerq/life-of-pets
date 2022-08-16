import FollowAction from '../FollowAction/FollowAction'
import { Link, routes } from '@redwoodjs/router'
import 'src/index.css'
const ProfileElement = ({ profile }) => {
  return (
    <div className="card">
      <Link to={routes.profile({ id: profile.id })}>
        <h3>{profile.email}</h3>
      </Link>
      <FollowAction profileId={profile.id} />
    </div>
  )
}

export default ProfileElement
