export const schema = gql`
  type Friend {
    id: Int!
    profileId: Int!
    User: User
    userId: Int
  }

  type Query {
    friends: [Friend!]! @requireAuth
    friend(id: Int!): Friend @requireAuth
  }

  input CreateFriendInput {
    profileId: Int!
    userId: Int
  }

  input UpdateFriendInput {
    profileId: Int
    userId: Int
  }

  type Mutation {
    createFriend(input: CreateFriendInput!): Friend! @requireAuth
    updateFriend(id: Int!, input: UpdateFriendInput!): Friend! @requireAuth
    deleteFriend(id: Int!): Friend! @requireAuth
  }
`
