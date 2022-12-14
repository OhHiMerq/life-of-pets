import type {
  QueryResolvers,
  MutationResolvers,
  PostResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const followedPosts: QueryResolvers['followedPosts'] = async ({
  userId,
}) => {
  const follows = await db.follow.findMany({
    where: { followerId: userId },
  })
  const result = [userId]
  for (var i in follows) {
    result.push(follows[i].followsId)
  }
  return db.post.findMany({
    where: {
      userId: { in: result },
    },
    include: {
      reacts: true,
      User: {
        select: {
          email: true,
        },
      },
    },
  })
}

export const posts: QueryResolvers['posts'] = ({ userId }) => {
  return db.post.findMany({
    where: { userId: userId },
    include: {
      reacts: true,
      User: {
        select: {
          email: true,
        },
      },
    },
  })
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post: PostResolvers = {
  User: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).User(),
}
