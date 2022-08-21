import YouTube from 'react-youtube'
import getYouTubeID from 'get-youtube-id'
const YoutubePlayer = ({ article }) => {
  const opts = {
    height: '240',
    width: '370',
    playerVars: {
      autoplay: 0,
    },
  }
  const videoId = getYouTubeID(article.body)
  return (
    <>
      {videoId ? (
        <>
          <hr />
          <YouTube videoId={videoId} opts={opts} />{' '}
        </>
      ) : null}
    </>
  )
}

export default YoutubePlayer
