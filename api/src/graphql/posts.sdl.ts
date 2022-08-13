export const schema = gql`
  type Post {
    id: Int!
    body: String!
    createdAt: DateTime!
    User: User!
    userId: Int!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    body: String!
    userId: Int!
  }

  input UpdatePostInput {
    body: String
    userId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
