import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PostForm from 'src/components/PostForm/PostForm'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <PostForm />
    </>
  )
}

export default HomePage
