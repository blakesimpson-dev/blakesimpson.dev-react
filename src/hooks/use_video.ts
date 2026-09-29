import {useCallback, useState} from 'react';

function createVideoElement(): HTMLVideoElement {
  const video = document.createElement('video');
  video.crossOrigin = 'Anonymous';
  video.loop = true;
  video.muted = true;
  return video;
}

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
      // Muted videos may autoplay
      void video.play();
    },
    [video],
  );

  return {video, resetVideo, changeVideoSource};
}
