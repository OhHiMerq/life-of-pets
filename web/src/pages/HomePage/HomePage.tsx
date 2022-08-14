import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PostForm from 'src/components/PostForm/PostForm'
import { useAuth } from '@redwoodjs/auth'
import FollowedArticlesCell from 'src/components/FollowedArticlesCell'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <PostForm userId={currentUser.id} />
      <FollowedArticlesCell userId={currentUser.id} />
    </>
  )
}

export default HomePage
