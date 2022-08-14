import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
const FOLLOW = gql`
  mutation CreateFollowMutation($input: CreateFollowInput!) {
    createFollow(input: $input) {
      id
      followerId
      followsId
    }
  }
`
const UNFOLLOW = gql`
  mutation DeleteFollowMutation($input: DeleteFollowInput!) {
    deleteFollow(input: $input) {
      id
      followerId
      followsId
    }
  }
`
const ProfileElement = ({ profile }) => {
  const { currentUser } = useAuth()
  const [followed, setFollowed] = useState(false)
  const [createFollow] = useMutation(FOLLOW)
  const [deleteFollow] = useMutation(UNFOLLOW)

  const onClick = () => {
    if (!followed) {
      createFollow({
        variables: {
          input: { followerId: currentUser.id, followsId: profile.id },
        },
      })
    } else {
      deleteFollow({
        variables: {
          input: { followerId: currentUser.id, followsId: profile.id },
        },
      })
    }

    setFollowed(!followed)
  }

  return (
    <div>
      <h2>
        User({profile.id}): {profile.email}
      </h2>
      <button onClick={onClick}>{followed ? 'Unfollow' : 'Follow'}</button>
    </div>
  )
}

export default ProfileElement
