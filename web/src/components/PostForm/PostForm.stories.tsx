import PostForm from './PostForm'

export const generated = (args) => {
  mockGraphQLMutation('CreatePostMutation', (variables, { ctx }) => {
    const id = Math.floor(Math.random() * 1000)
    ctx.delay(1000)

    return {
      createPost: {
        id: id,
        body: 'Test Body',
        createdAt: new Date().toISOString(),
      },
    }
  })
  return <PostForm {...args} />
}

export default { title: 'Components/PostForm' }
