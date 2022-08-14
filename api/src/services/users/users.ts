import type {
  QueryResolvers,
  MutationResolvers,
  UserResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const toFollow: QueryResolvers['toFollow'] = async ({ userId }) => {
  const followed = await db.follow.findMany({
    where: { followerId: userId },
  })
  const followedUserId = [userId]
  for (var i in followed) {
    followedUserId.push(followed[i].followsId)
  }

  return db.user.findMany({
    where: {
      NOT: {
        id: { in: followedUserId },
      },
    },
    include: { follows: true },
  })
}

export const followed: QueryResolvers['followed'] = async ({ userId }) => {
  const followed = await db.follow.findMany({
    where: { followerId: userId },
  })
  const followedUserId = []
  for (var i in followed) {
    followedUserId.push(followed[i].followsId)
  }

  return db.user.findMany({
    where: {
      id: { in: followedUserId },
    },
    include: { follows: true },
  })
}

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserResolvers = {
  posts: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).posts(),
}
