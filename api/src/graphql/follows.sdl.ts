export const schema = gql`
  type Follow {
    id: Int!
    followerId: Int!
    followsId: Int!
    follower: User!
    follows: User!
  }

  type Query {
    follows(id: Int!): [Follow!]! @requireAuth
    follow(id: Int!): Follow @requireAuth
  }

  input CreateFollowInput {
    followerId: Int!
    followsId: Int!
  }

  input DeleteFollowInput {
    followerId: Int!
    followsId: Int!
  }

  input UpdateFollowInput {
    followerId: Int
    followsId: Int
  }

  type Mutation {
    createFollow(input: CreateFollowInput!): Follow! @requireAuth
    updateFollow(id: Int!, input: UpdateFollowInput!): Follow! @requireAuth
    deleteFollow(input: DeleteFollowInput!): Follow! @requireAuth
  }
`
