import {useCallback, useState} from 'react';

const createVideoElement = () => {
  const video = document.createElement('video');
  video.crossOrigin = 'Anonymous';
  video.loop = true;
  video.muted = true;
  return video;
};

export const useVideo = () => {
  const [video] = useState(createVideoElement);

  const resetVideo = useCallback(() => {
    video.pause();
    video.currentTime = 0;
  }, [video]);

  const changeVideoSource = useCallback(
    path => {
      video.src = path;
      video.load();
      video.play();
    },
    [video],
  );

  return {
    video,
    resetVideo,
    changeVideoSource,
  };
};

export default useVideo;
