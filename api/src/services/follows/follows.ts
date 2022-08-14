import type {
  QueryResolvers,
  MutationResolvers,
  FollowResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const follows: QueryResolvers['follows'] = ({ id }) => {
  return db.follow.findMany({
    where: {
      followerId: id,
    },
  })
}

export const follow: QueryResolvers['follow'] = ({ id }) => {
  return db.follow.findUnique({
    where: { id },
  })
}

export const createFollow: MutationResolvers['createFollow'] = ({ input }) => {
  return db.follow.create({
    data: input,
  })
}

export const updateFollow: MutationResolvers['updateFollow'] = ({
  id,
  input,
}) => {
  return db.follow.update({
    data: input,
    where: { id },
  })
}

export const deleteFollow: MutationResolvers['deleteFollow'] = async ({
  input,
}) => {
  const data = await db.follow.findFirst({
    where: { followerId: input.followerId, followsId: input.followsId },
  })
  console.log('delete id:', data)
  return db.follow.delete({
    where: { id: data.id },
  })
}

export const Follow: FollowResolvers = {
  follower: (_obj, { root }) =>
    db.follow.findUnique({ where: { id: root.id } }).follower(),
  follows: (_obj, { root }) =>
    db.follow.findUnique({ where: { id: root.id } }).follows(),
}
