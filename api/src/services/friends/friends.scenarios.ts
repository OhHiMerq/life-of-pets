import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FriendCreateArgs>({
  friend: {
    one: { data: { profileId: 2035756 } },
    two: { data: { profileId: 9003059 } },
  },
})

export type StandardScenario = typeof standard
