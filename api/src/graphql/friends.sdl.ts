export const schema = gql`
  type Friend {
    id: Int!
    User: User
    userId: Int
  }

  type Query {
    friends: [Friend!]! @requireAuth
    friend(id: Int!): Friend @requireAuth
  }

  input CreateFriendInput {
    userId: Int
  }

  input UpdateFriendInput {
    userId: Int
  }

  type Mutation {
    createFriend(input: CreateFriendInput!): Friend! @requireAuth
    updateFriend(id: Int!, input: UpdateFriendInput!): Friend! @requireAuth
    deleteFriend(id: Int!): Friend! @requireAuth
  }
`
