// Seconds. The UI waits for camera moves, so these depend on each other

// The clips are authored at half speed
export const CAMERA_TIME_SCALE = 2;
// Mixer time the intro starts at
export const INTRO_START = 2.5;
export const CAMERA_CROSSFADE = 2;

export const SELECTION_DELAY_INTRO = 4.2;
export const SELECTION_DELAY_RETURN = 2;

export const SCREEN_DELAY_INTRO = 4.5;
export const SCREEN_DELAY_RETURN = 2;

export const GAMEBOY_DELAY = 2;

export const MENU_DELAY_INTRO = 4.5;
export const MENU_DELAY_RETURN = 1.8;
export const MENU_DELAY_RETURN_COMPACT = 0.2;

export const OVERLAY_DELAY = 2;
export const OVERLAY_DELAY_COMPACT = 0.1;

export function toMs(seconds: number): number {
  return seconds * 1000;
}
