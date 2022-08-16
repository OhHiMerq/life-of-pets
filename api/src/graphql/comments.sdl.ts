export const schema = gql`
  type Comment {
    id: Int!
    createdAt: DateTime!
    body: String!
    post: Post!
    postId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    comments(postId: Int!): [Comment!]! @requireAuth
    comment(id: Int!): Comment! @requireAuth
  }

  input CreateCommentInput {
    body: String!
    postId: Int!
    userId: Int!
  }

  input UpdateCommentInput {
    body: String
    postId: Int
    userId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
