import { useAuth } from '@redwoodjs/auth'
// import { useMutation } from '@redwoodjs/web'

// import { QUERY as FeedQuery } from 'src/components/FollowedArticlesCell'
// import { QUERY as ArticleQuery } from 'src/components/ArticlesCell'
// const CREATE_REACT = gql`
//   mutation CreateReactMutation($input: CreateReactInput!) {
//     createReact(input: $input) {
//       id
//       postId
//       userId
//       value
//     }
//   }
// `

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

// const GET_USER_REACT_FROM_POST = gql`
// query GetUserReactFromPost{

// }`
const PostDetails = ({ article }) => {
  const { currentUser } = useAuth()
  // const [createReact, { loading: loadingCreate, error: errorCreate }] =
  //   useMutation(CREATE_REACT, { refetchQueries: [{ query: FeedQuery }] })
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

  const onLike = () => {
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
      Details
      {/* <button onClick={onLike}>⬆️</button>
      {likes}|<button onClick={onDislike}>⬇️</button>
      {dislikes} */}
    </div>
  )
}

export default PostDetails
