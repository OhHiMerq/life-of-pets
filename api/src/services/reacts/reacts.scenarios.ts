import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ReactCreateArgs>({
  react: {
    one: {
      data: {
        value: 7015935,
        post: {
          create: {
            body: 'String',
            User: {
              create: {
                email: 'String2849106',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String247969',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        value: 6035972,
        post: {
          create: {
            body: 'String',
            User: {
              create: {
                email: 'String1761325',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String3265802',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
