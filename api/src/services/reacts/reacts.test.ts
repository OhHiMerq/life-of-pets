import { reacts, react, createReact, updateReact, deleteReact } from './reacts'
import type { StandardScenario } from './reacts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('reacts', () => {
  scenario('returns all reacts', async (scenario: StandardScenario) => {
    const result = await reacts()

    expect(result.length).toEqual(Object.keys(scenario.react).length)
  })

  scenario('returns a single react', async (scenario: StandardScenario) => {
    const result = await react({ id: scenario.react.one.id })

    expect(result).toEqual(scenario.react.one)
  })

  scenario('creates a react', async (scenario: StandardScenario) => {
    const result = await createReact({
      input: {
        postId: scenario.react.two.postId,
        userId: scenario.react.two.userId,
        value: 3678179,
      },
    })

    expect(result.postId).toEqual(scenario.react.two.postId)
    expect(result.userId).toEqual(scenario.react.two.userId)
    expect(result.value).toEqual(3678179)
  })

  scenario('updates a react', async (scenario: StandardScenario) => {
    const original = await react({ id: scenario.react.one.id })
    const result = await updateReact({
      id: original.id,
      input: { value: 232859 },
    })

    expect(result.value).toEqual(232859)
  })

  scenario('deletes a react', async (scenario: StandardScenario) => {
    const original = await deleteReact({ id: scenario.react.one.id })
    const result = await react({ id: original.id })

    expect(result).toEqual(null)
  })
})
