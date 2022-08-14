import { render } from '@redwoodjs/testing/web'

import ProfileElement from './ProfileElement'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileElement', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileElement />)
    }).not.toThrow()
  })
})
