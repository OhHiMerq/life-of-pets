const ProfileElement = ({ profile }) => {
  return (
    <div>
      <h2>
        User({profile.id}): {profile.email}
      </h2>
    </div>
  )
}

export default ProfileElement
