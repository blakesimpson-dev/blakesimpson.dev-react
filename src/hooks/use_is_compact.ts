import {useMediaQuery} from 'react-responsive';
import {VIEWPORT_OVERRIDE} from '../constants/render_quality';

/**
 * Below the desktop width, or on touch screens (hover-to-select needs a
 * mouse), the scene becomes a backdrop and navigation moves to the menu.
 */
const COMPACT_QUERY = '(max-width: 1279px), (pointer: coarse)';

/** Landscape phones: matches the max-height breakpoint in the SCSS. */
const SHORT_QUERY = '(max-height: 500px)';

/** Whether to use the compact (phone/tablet) layout and render profile. */
export function useIsCompact(): boolean {
  const matchesQuery = useMediaQuery({query: COMPACT_QUERY});
  if (VIEWPORT_OVERRIDE !== null) {
    return VIEWPORT_OVERRIDE === 'compact';
  }
  return matchesQuery;
}

/** Short screens (landscape phones), where the menu hides behind open pages. */
export function useIsShortViewport(): boolean {
  return useMediaQuery({query: SHORT_QUERY});
}
