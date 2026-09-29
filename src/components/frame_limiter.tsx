import {useThree} from '@react-three/fiber';
import {useEffect} from 'react';

interface FrameLimiterProps {
  /** Redraws per second. */
  fps: number;
  /** Stop redrawing, e.g. while a page covers the scene. */
  paused: boolean;
}

/**
 * Drives a frameloop="demand" canvas at a fixed rate, so animations keep
 * playing without rendering every display frame.
 */
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
