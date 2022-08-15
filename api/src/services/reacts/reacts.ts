import type {
  QueryResolvers,
  MutationResolvers,
  ReactResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const reacts: QueryResolvers['reacts'] = () => {
  return db.react.findMany()
}

export const react: QueryResolvers['react'] = ({ id }) => {
  return db.react.findUnique({
    where: { id },
  })
}

export const createReact: MutationResolvers['createReact'] = ({ input }) => {
  return db.react.create({
    data: input,
  })
}

export const updateReact: MutationResolvers['updateReact'] = ({
  id,
  input,
}) => {
  return db.react.update({
    data: input,
    where: { id },
  })
}

export const deleteReact: MutationResolvers['deleteReact'] = ({ id }) => {
  return db.react.delete({
    where: { id },
  })
}

export const React: ReactResolvers = {
  post: (_obj, { root }) =>
    db.react.findUnique({ where: { id: root.id } }).post(),
  user: (_obj, { root }) =>
    db.react.findUnique({ where: { id: root.id } }).user(),
}
