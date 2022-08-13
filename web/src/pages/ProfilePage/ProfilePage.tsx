import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
import { useAuth } from '@redwoodjs/auth'
const ProfilePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>ProfilePage</h1>
      <ArticlesCell userId={currentUser.id} />
    </>
  )
}

export default ProfilePage
