import { render } from '@redwoodjs/testing/web'

import ProfileHeader from './ProfileHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileHeader />)
    }).not.toThrow()
  })
})
