import { useState } from 'react'

const videoElement = (path) => {
  const video = document.createElement('video')
  video.src = path
  video.crossOrigin = 'Anonymous'
  video.loop = true
  video.muted = true
  return video
}

export const useVideo = () => {
  const [kataplexiaVideo] = useState(() => {
    return videoElement('/videos/kataplexia-540.mp4')
  })

  const [bushbashVideo] = useState(() => {
    return videoElement('/videos/bushbash-360.mp4')
  })

  const [blitzVideo] = useState(() => {
    return videoElement('/videos/blitzbandits-360.mp4')
  })

  const [arcadianVideo] = useState(() => {
    return videoElement('/videos/arcadian-360.mp4')
  })

  const [catnipsVideo] = useState(() => {
    return videoElement('/videos/catnips-360.mp4')
  })

  const [gundashVideo] = useState(() => {
    return videoElement('/videos/gundash-360.mp4')
  })

  const [interstateVideo] = useState(() => {
    return videoElement('/videos/interstate-360.mp4')
  })

  const [lmpoVideo] = useState(() => {
    return videoElement('/videos/lmpo-360.mp4')
  })

  const resetVideos = () => {
    kataplexiaVideo.pause()
    kataplexiaVideo.currentTime = 0
    bushbashVideo.pause()
    bushbashVideo.currentTime = 0
    blitzVideo.pause()
    blitzVideo.currentTime = 0
    arcadianVideo.pause()
    arcadianVideo.currentTime = 0
    catnipsVideo.pause()
    catnipsVideo.currentTime = 0
    gundashVideo.pause()
    gundashVideo.currentTime = 0
    interstateVideo.pause()
    interstateVideo.currentTime = 0
    lmpoVideo.pause()
    lmpoVideo.currentTime = 0
  }

  return {
    kataplexiaVideo,
    bushbashVideo,
    blitzVideo,
    arcadianVideo,
    catnipsVideo,
    gundashVideo,
    interstateVideo,
    lmpoVideo,
    resetVideos,
  }
}

export default useVideo
