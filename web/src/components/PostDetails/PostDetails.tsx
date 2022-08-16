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

const GET_COMMENTS = gql`
  query GetComments($postId: Int!) {
    comments(postId: $postId) {
      id
      body
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

  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery(GET_COMMENTS, {
    variables: { postId: article.id },
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

  if (postReactLoading || userReactLoading || commentsLoading)
    return <div>Loading...</div>
  if (postReactError || userReactError)
    return (
      <div>
        Error! ${postReactError.message}
        Error! ${userReactError.message}
        Error! ${commentsError.message}
      </div>
    )

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
      <div>
        <button
          style={
            userReactData.userReact && userReactData.userReact.value == 1
              ? { backgroundColor: 'lightblue' }
              : null
          }
          onClick={() => {
            executeReact(1)
          }}
        >
          ⬆️
        </button>
        {likes}|
        <button
          style={
            userReactData.userReact && userReactData.userReact.value == 2
              ? { backgroundColor: 'lightblue' }
              : null
          }
          onClick={() => {
            executeReact(2)
          }}
        >
          ⬇️
        </button>
        {dislikes}
        <span>Comments [{commentsData.comments.length}]</span>
      </div>
    </div>
  )
}

export default PostDetails
