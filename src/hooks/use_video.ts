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

  const loadVideo = useCallback(
    (path: string) => {
      video.src = path;
      video.load();
    },
    [video],
  );

  return {video, loadVideo};
}
