import { MetaTags } from '@redwoodjs/web'
import ToFollowCell from 'src/components/ToFollowCell'
import FollowedCell from 'src/components/FollowedCell'
import { useAuth } from '@redwoodjs/auth'

const FollowPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Follow" description="Follow page" />
      <FollowedCell userId={currentUser.id} />
      <ToFollowCell userId={currentUser.id} />
    </>
  )
}

export default FollowPage
