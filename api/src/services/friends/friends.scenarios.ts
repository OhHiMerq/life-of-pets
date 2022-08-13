import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FriendCreateArgs>({
  friend: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = typeof standard
