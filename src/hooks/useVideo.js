import { useState } from 'react'

export const useVideo = () => {
  const videoElement = () => {
    const video = document.createElement('video')
    video.crossOrigin = 'Anonymous'
    video.loop = true
    video.muted = true
    return video
  }

  const [video] = useState(() => {
    return videoElement()
  })

  const resetVideo = () => {
    video.pause()
    video.currentTime = 0
  }

  const changeVideoSource = (path) => {
    video.src = path
    video.load()
    video.play()
  }

  return {
    video,
    resetVideo,
    changeVideoSource,
  }
}

export default useVideo
