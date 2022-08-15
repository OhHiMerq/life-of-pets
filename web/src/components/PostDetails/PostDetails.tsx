import { useAuth } from '@redwoodjs/auth'
import { useMutation, useQuery } from '@redwoodjs/web'
// import { useMutation } from '@redwoodjs/web'

// import { QUERY as FeedQuery } from 'src/components/FollowedArticlesCell'
// import { QUERY as ArticleQuery } from 'src/components/ArticlesCell'
const CREATE_REACT = gql`
  mutation CreateReactMutation($input: CreateReactInput!) {
    createReact(input: $input) {
      id
      postId
      userId
      value
    }
  }
`

const UPDATE_REACT = gql`
  mutation UpdateReactMutation($id: Int!, $input: UpdateReactInput!) {
    updateReact(id: $id, input: $input) {
      id
      postId
      userId
      value
    }
  }
`

const DELETE_REACT = gql`
  mutation DeleteReactMutation($id: Int!) {
    deleteReact(id: $id) {
      id
      postId
      userId
      value
    }
  }
`

const GET_POST_REACTS = gql`
  query GetPostReacts($postId: Int!) {
    postReacts(postId: $postId) {
      value
    }
  }
`

const GET_USER_REACT = gql`
  query GetUserReact($userId: Int!, $postId: Int!) {
    userReact(userId: $userId, postId: $postId) {
      id
      value
    }
  }
`

const PostDetails = ({ article }) => {
  const { currentUser } = useAuth()

  var likes = 0
  var dislikes = 0

  const {
    loading: postReactLoading,
    error: postReactError,
    data: postReactData,
    refetch: postReactRefetch,
  } = useQuery(GET_POST_REACTS, {
    variables: { postId: article.id },
  })

  const {
    loading: userReactLoading,
    error: userReactError,
    data: userReactData,
    refetch: userReactRefetch,
  } = useQuery(GET_USER_REACT, {
    variables: { userId: currentUser.id, postId: article.id },
  })

  const refetchQueries = () => {
    postReactRefetch({ postId: article.id })
    userReactRefetch({ userId: currentUser.id, postId: article.id })
  }
  const [createReact, { loading: loadingCreate, error: errorCreate }] =
    useMutation(CREATE_REACT, {
      onCompleted: refetchQueries,
    })

  const [deleteReact, { loading: loadingDelete, error: errorDelete }] =
    useMutation(DELETE_REACT, {
      onCompleted: refetchQueries,
    })

  const [updateReact, { loading: loadingUpdate, error: errorUpdate }] =
    useMutation(UPDATE_REACT, { onCompleted: refetchQueries })

  if (postReactLoading) return <div>Loading...</div>
  if (postReactError) return <div>Error! ${postReactError.message}</div>
  if (userReactLoading) return <div>Loading...</div>
  if (userReactError) return <div>Error! ${userReactError.message}</div>

  for (var i in postReactData.postReacts) {
    const value = postReactData.postReacts[i].value
    if (value == 1) {
      likes += 1
    } else if (value == 2) {
      dislikes += 1
    }
  }

  // 1 - like action
  // 2 - dislike action
  const executeReact = (reactAction) => {
    const userReactValue = userReactData.userReact
      ? userReactData.userReact.value
      : 0

    if (userReactValue == 0) {
      createReact({
        variables: {
          input: {
            postId: article.id,
            userId: currentUser.id,
            value: reactAction,
          },
        },
      })
    } else {
      if (reactAction == userReactValue) {
        deleteReact({ variables: { id: userReactData.userReact.id } })
      } else {
        updateReact({
          variables: {
            id: userReactData.userReact.id,
            input: {
              postId: article.id,
              userId: currentUser.id,
              value: reactAction,
            },
          },
        })
      }
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          executeReact(1)
        }}
      >
        ⬆️
      </button>
      {likes}|
      <button
        onClick={() => {
          executeReact(2)
        }}
      >
        ⬇️
      </button>
      {dislikes}
    </div>
  )
}

export default PostDetails
