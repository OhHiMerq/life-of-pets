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

// const UPDATE_REACT = gql`
//   mutation UpdateReactMutation($id: Int!, $input: UpdateReactInput!) {
//     updateReact(id: $id, input: $input) {
//       id
//       postId
//       userId
//       value
//     }
//   }
// `

// const DELETE_REACT = gql`
//   mutation DeleteReactMutation($id: Int!) {
//     deleteReact(id: $id) {
//       id
//       postId
//       userId
//       value
//     }
//   }
// `

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
      value
    }
  }
`

const PostDetails = ({ article }) => {
  const { currentUser } = useAuth()

  var likes = 0
  var dislikes = 0

  // // const [updateReact, { loading: loadingUpdate, error: errorUpdate }] =
  // //   useMutation(UPDATE_REACT)
  // // const [deleteReact, { loading: loadingDelete, error: errorDelete }] =
  // //   useMutation(DELETE_REACT)

  // let userValue = 0
  // let userReactId = 0

  // let likes = 0
  // let dislikes = 0
  // for (var i in article.React) {
  //   if (article.React[i].value == 1) {
  //     likes += 1
  //   } else if (article.React[i].value == 2) {
  //     dislikes += 1
  //   }

  //   if (currentUser.id == article.React[i].userId) {
  //     userValue = article.React[i].value
  //     userReactId = article.React[i].id
  //   }
  // }

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
  } = useQuery(GET_USER_REACT, {
    variables: { userId: article.userId, postId: article.id },
  })

  const [createReact, { loading: loadingCreate, error: errorCreate }] =
    useMutation(CREATE_REACT, {
      onCompleted: () => {
        postReactRefetch({ postId: article.id })
      },
    })

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

  const onLike = () => {
    const userReactValue = userReactData.userReact
      ? userReactData.userReact.value
      : 0

    if (userReactValue == 0) {
      createReact({
        variables: {
          input: { postId: article.id, userId: currentUser.id, value: 1 },
        },
      })
    }
    // if (userValue == 0) {
    //   createReact({
    //     variables: {
    //       input: { postId: article.id, userId: currentUser.id, value: 1 },
    //     },
    //   })
    // } else if (userValue == 2) {
    //   updateReact({
    //     variables: {
    //       id: userReactId,
    //       input: {
    //         postId: article.id,
    //         userId: currentUser.id,
    //         value: 1,
    //       },
    //     },
    //   })
    // } else if (userValue == 1) {
    //   deleteReact({ variables: { id: userReactId } })
    // }
  }

  const onDislike = () => {}
  return (
    <div>
      <button onClick={onLike}>⬆️</button>
      {likes}|<button onClick={onDislike}>⬇️</button>
      {dislikes}
    </div>
  )
}

export default PostDetails
