export const schema = gql`
  type React {
    id: Int!
    post: Post!
    postId: Int!
    user: User!
    userId: Int!
    value: Int!
  }

  type Query {
    postReacts(postId: Int!): [React!]! @requireAuth
    userReact(userId: Int!, postId: Int!): React @requireAuth
    reacts: [React!]! @requireAuth
    react(id: Int!): React @requireAuth
  }

  input CreateReactInput {
    postId: Int!
    userId: Int!
    value: Int!
  }

  input UpdateReactInput {
    postId: Int
    userId: Int
    value: Int
  }

  type Mutation {
    createReact(input: CreateReactInput!): React! @requireAuth
    updateReact(id: Int!, input: UpdateReactInput!): React! @requireAuth
    deleteReact(id: Int!): React! @requireAuth
  }
`
