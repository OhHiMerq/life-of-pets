import { render } from '@redwoodjs/testing/web'

import PostReact from './PostReact'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostReact', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostReact />)
    }).not.toThrow()
  })
})
