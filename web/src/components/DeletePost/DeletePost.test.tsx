import { render } from '@redwoodjs/testing/web'

import DeletePost from './DeletePost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeletePost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeletePost />)
    }).not.toThrow()
  })
})
