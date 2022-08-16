import { MetaTags } from '@redwoodjs/web'
import ToFollowCell from 'src/components/ToFollowCell'
import FollowedCell from 'src/components/FollowedCell'
import { useAuth } from '@redwoodjs/auth'

const FollowPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Follow" description="Follow page" />
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ margin: '1em auto' }}
          src="https://cdn3.emoji.gg/emojis/9072_partycageparrot.gif"
          alt="partycage"
        />
        <img
          style={{ margin: '1em' }}
          src="https://cdn3.emoji.gg/emojis/9072_partycageparrot.gif"
          alt="partycage"
        />
        <img
          style={{ margin: '1em' }}
          src="https://cdn3.emoji.gg/emojis/9072_partycageparrot.gif"
          alt="partycage"
        />
      </div>
      <h2>Explore</h2>
      <ToFollowCell userId={currentUser.id} />
      <hr />
      <h2>Followed</h2>
      <FollowedCell userId={currentUser.id} />
    </>
  )
}

export default FollowPage
