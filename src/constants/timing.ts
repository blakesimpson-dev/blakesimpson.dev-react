// Camera and UI timings, in seconds (the unit three.js and framer-motion use).
// The UI waits for each camera move to finish before revealing itself, so
// these values depend on each other: change them together.

/** Camera clip playback speed; the clips are authored at half speed. */
export const CAMERA_TIME_SCALE = 2;
/** Mixer time at which the intro camera move starts. */
export const INTRO_START = 2.5;
/** Crossfade between the Home pose and a page's camera clip. */
export const CAMERA_CROSSFADE = 2;

/** Objects become hoverable/clickable once the camera settles on Home. */
export const SELECTION_DELAY_INTRO = 4.2;
export const SELECTION_DELAY_RETURN = 2;

/** The monitor boots once the camera settles on Home. */
export const SCREEN_DELAY_INTRO = 4.5;
export const SCREEN_DELAY_RETURN = 2;

/** The Gameboy screen turns on once the camera has zoomed in on Music. */
export const GAMEBOY_DELAY = 2;

/** The menu slides in once the camera settles on Home. */
export const MENU_DELAY_INTRO = 4.5;
export const MENU_DELAY_RETURN = 1.8;

/** A page's overlay slides in as its camera zoom finishes. */
export const OVERLAY_DELAY = 2;

/** Converts a timing above to milliseconds for setTimeout. */
export function toMs(seconds: number): number {
  return seconds * 1000;
}
