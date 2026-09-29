import {useThree} from '@react-three/fiber';
import {useEffect} from 'react';

interface FrameLimiterProps {
  fps: number;
  paused: boolean;
}

export function FrameLimiter({fps, paused}: FrameLimiterProps) {
  const invalidate = useThree(state => state.invalidate);

  useEffect(() => {
    if (paused) {
      return;
    }
    const interval = setInterval(() => {
      invalidate();
    }, 1000 / fps);
    return () => {
      clearInterval(interval);
    };
  }, [fps, paused, invalidate]);

  return null;
}
