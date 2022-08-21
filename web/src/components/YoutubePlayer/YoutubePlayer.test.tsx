import { render } from '@redwoodjs/testing/web'

import YoutubePlayer from './YoutubePlayer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('YoutubePlayer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<YoutubePlayer />)
    }).not.toThrow()
  })
})
