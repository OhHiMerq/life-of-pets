import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FollowCreateArgs>({
  follow: {
    one: {
      data: {
        follower: {
          create: {
            email: 'String9341928',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        follows: {
          create: {
            email: 'String3216957',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        follower: {
          create: {
            email: 'String7751970',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        follows: {
          create: {
            email: 'String2700249',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
