import { MetaTags, useQuery } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
import { useAuth } from '@redwoodjs/auth'
import ProfileHeader from 'src/components/ProfileHeader/ProfileHeader'

const ProfilePage = ({ id }) => {
  const { currentUser } = useAuth()
  const profileId = id ? +id : currentUser.id
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />
      <ProfileHeader userId={profileId} currentUserId={currentUser.id} />
      <ArticlesCell userId={profileId} />
    </>
  )
}

export default ProfilePage
