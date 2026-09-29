import {useCallback, useState} from 'react';

function createVideoElement(): HTMLVideoElement {
  const video = document.createElement('video');
  video.crossOrigin = 'Anonymous';
  video.loop = true;
  video.muted = true;
  return video;
}

/** A muted, looping video element for use as a VideoTexture source. */
export function useVideo() {
  const [video] = useState(createVideoElement);

  const resetVideo = useCallback(() => {
    video.pause();
    video.currentTime = 0;
  }, [video]);

  const changeVideoSource = useCallback(
    (path: string) => {
      video.src = path;
      video.load();
      // Muted videos are allowed to autoplay; nothing to handle on failure
      void video.play();
    },
    [video],
  );

  return {video, resetVideo, changeVideoSource};
}
