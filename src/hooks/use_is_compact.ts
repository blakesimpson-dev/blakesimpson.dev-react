import {useMediaQuery} from 'react-responsive';
import {VIEWPORT_OVERRIDE} from '../constants/render_quality';

// Touch screens too: hover-to-select needs a mouse
const COMPACT_QUERY = '(max-width: 1279px), (pointer: coarse)';

// Matches the max-height breakpoint in the SCSS
const SHORT_QUERY = '(max-height: 500px)';

export function useIsCompact(): boolean {
  const matchesQuery = useMediaQuery({query: COMPACT_QUERY});
  if (VIEWPORT_OVERRIDE !== null) {
    return VIEWPORT_OVERRIDE === 'compact';
  }
  return matchesQuery;
}

export function useIsShortViewport(): boolean {
  return useMediaQuery({query: SHORT_QUERY});
}
