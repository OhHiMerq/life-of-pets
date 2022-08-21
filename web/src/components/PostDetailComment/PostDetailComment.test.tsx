import { render } from '@redwoodjs/testing/web'

import PostDetailComment from './PostDetailComment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostDetailComment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostDetailComment />)
    }).not.toThrow()
  })
})
