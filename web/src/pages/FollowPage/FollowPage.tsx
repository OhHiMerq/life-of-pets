import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FollowPage = () => {
  return (
    <>
      <MetaTags title="Follow" description="Follow page" />

      <h1>FollowPage</h1>
      <p>
        Find me in <code>./web/src/pages/FollowPage/FollowPage.tsx</code>
      </p>
      <p>
        My default route is named <code>follow</code>, link to me with `
        <Link to={routes.follow()}>Follow</Link>`
      </p>
    </>
  )
}

export default FollowPage
