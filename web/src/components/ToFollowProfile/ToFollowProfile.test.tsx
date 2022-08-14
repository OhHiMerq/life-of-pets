import { render } from '@redwoodjs/testing/web'

import ToFollowProfile from './ToFollowProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ToFollowProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToFollowProfile />)
    }).not.toThrow()
  })
})
