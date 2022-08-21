import { render } from '@redwoodjs/testing/web'

import EditPost from './EditPost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPost />)
    }).not.toThrow()
  })
})
