import { render } from '@redwoodjs/testing/web'

import PostDetails from './PostDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostDetails />)
    }).not.toThrow()
  })
})
