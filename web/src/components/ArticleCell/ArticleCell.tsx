import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from 'src/components/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      userId
      createdAt
      body
      User {
        email
      }
    }
  }
`

export const Loading = () => (
  <div style={{ textAlign: 'center' }}>Loading...</div>
)

export const Empty = () => (
  <div style={{ textAlign: 'center' }}>No Available Post</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  article,
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  return <Article article={article} summary={true} />
}
