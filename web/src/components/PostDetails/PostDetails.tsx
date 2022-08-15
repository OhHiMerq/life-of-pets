const PostDetails = ({ article }) => {
  let likes = 0
  let dislikes = 0
  for (var i in article.React) {
    if (article.React[i].value == 1) {
      likes += 1
    } else if (article.React[i].value == 2) {
      dislikes += 1
    }
  }
  return (
    <div>
      <button>⬆️</button>
      {likes}|<button>⬇️</button>
      {dislikes}
    </div>
  )
}

export default PostDetails
