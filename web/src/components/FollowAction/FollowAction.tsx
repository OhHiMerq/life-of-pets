import { useAuth } from '@redwoodjs/auth'
import { useMutation, useQuery } from '@redwoodjs/web'
import { useState } from 'react'
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

const GET_FOLLOWS = gql`
  query GetFollowsQuery($id: Int!) {
    follows(id: $id) {
      id
      followsId
    }
  }
`

const FollowAction = ({ profileId }) => {
  const { currentUser } = useAuth()
  const [followed, setFollowed] = useState(false)
  const [createFollow, { loading: loadingFollow, error: errorFollow }] =
    useMutation(FOLLOW)
  const [deleteFollow, { loading: loadingUnfollow, error: errorUnfollow }] =
    useMutation(UNFOLLOW)

  const { loading, error, data } = useQuery(GET_FOLLOWS, {
    variables: { id: currentUser.id },
    onCompleted: () => {
      const followsId = []
      for (var i in data.follows) {
        followsId.push(data.follows[i].followsId)
      }
      setFollowed(followsId.includes(profileId))
    },
  })

  if (loading) return <div>'Loading...'</div>
  if (error) return <div>`Error! ${error.message}`</div>

  const onClick = () => {
    if (!followed) {
      createFollow({
        variables: {
          input: { followerId: currentUser.id, followsId: profileId },
        },
      })
    } else {
      deleteFollow({
        variables: {
          input: { followerId: currentUser.id, followsId: profileId },
        },
      })
    }

    setFollowed(!followed)
  }
  return (
    <button onClick={onClick} disabled={loadingFollow || loadingUnfollow}>
      {followed ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default FollowAction
