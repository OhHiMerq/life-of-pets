import { render } from '@redwoodjs/testing/web'

import FollowPage from './FollowPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FollowPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowPage />)
    }).not.toThrow()
  })
})
