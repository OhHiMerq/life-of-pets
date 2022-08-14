import { render } from '@redwoodjs/testing/web'

import FollowAction from './FollowAction'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FollowAction', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowAction />)
    }).not.toThrow()
  })
})
