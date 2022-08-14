import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ToFollowCell from 'src/components/ToFollowCell'
import { useAuth } from '@redwoodjs/auth'

const FollowPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Follow" description="Follow page" />

      <h1>FollowPage</h1>
      <ToFollowCell userId={currentUser.id} />
    </>
  )
}

export default FollowPage
