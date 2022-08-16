import type { CommentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No Comments Yet</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<CommentsQuery>) => {
  var SortComments = [...comments]
  SortComments = SortComments.sort(function (a, b) {
    var dateA = new Date(a.createdAt).getTime()
    var dateB = new Date(b.createdAt).getTime()
    return dateA < dateB ? 1 : -1 // ? -1 : 1 for ascending/increasing order
  })

  return (
    <div>
      {SortComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
