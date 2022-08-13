import {
  friends,
  friend,
  createFriend,
  updateFriend,
  deleteFriend,
} from './friends'
import type { StandardScenario } from './friends.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('friends', () => {
  scenario('returns all friends', async (scenario: StandardScenario) => {
    const result = await friends()

    expect(result.length).toEqual(Object.keys(scenario.friend).length)
  })

  scenario('returns a single friend', async (scenario: StandardScenario) => {
    const result = await friend({ id: scenario.friend.one.id })

    expect(result).toEqual(scenario.friend.one)
  })

  scenario('deletes a friend', async (scenario: StandardScenario) => {
    const original = await deleteFriend({ id: scenario.friend.one.id })
    const result = await friend({ id: original.id })

    expect(result).toEqual(null)
  })
})
