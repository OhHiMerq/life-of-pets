import type {
  QueryResolvers,
  MutationResolvers,
  FriendResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const friends: QueryResolvers['friends'] = () => {
  return db.friend.findMany()
}

export const friend: QueryResolvers['friend'] = ({ id }) => {
  return db.friend.findUnique({
    where: { id },
  })
}

export const createFriend: MutationResolvers['createFriend'] = ({ input }) => {
  return db.friend.create({
    data: input,
  })
}

export const updateFriend: MutationResolvers['updateFriend'] = ({
  id,
  input,
}) => {
  return db.friend.update({
    data: input,
    where: { id },
  })
}

export const deleteFriend: MutationResolvers['deleteFriend'] = ({ id }) => {
  return db.friend.delete({
    where: { id },
  })
}

export const Friend: FriendResolvers = {
  User: (_obj, { root }) =>
    db.friend.findUnique({ where: { id: root.id } }).User(),
}
