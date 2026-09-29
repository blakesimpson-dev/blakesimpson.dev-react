// Query-string overrides for comparing render cost against image quality on
// real hardware, e.g. /?stats&dpr=2&msaa=8. Defaults tested on a Mac mini
// (integrated GPU): ~30 -> 80+ fps at full window size, no visible quality
// loss. SSAO was dropped entirely; the baked lighting already covers it.
const params = new URLSearchParams(window.location.search);

function numberParam(key: string, fallback: number): number {
  const value = params.get(key);
  return value === null ? fallback : Number(value);
}

/** Forces a layout for testing: ?compact on desktop, ?desktop on a phone. */
export const VIEWPORT_OVERRIDE = viewportParam();

function viewportParam(): 'compact' | 'desktop' | null {
  if (params.has('compact')) {
    return 'compact';
  }
  if (params.has('desktop')) {
    return 'desktop';
  }
  return null;
}

export const RENDER_QUALITY = {
  /** FPS / frame time panel. */
  stats: params.has('stats'),
  /** Max device pixel ratio (r3f default is 2). */
  maxDpr: numberParam('dpr', 1.5),
  /** EffectComposer MSAA samples. */
  msaa: numberParam('msaa', 2),
};

/**
 * Phones and tablets: the scene is a non-interactive backdrop, so render it
 * at 1x and redraw at a capped rate instead of every display frame.
 */
export const COMPACT_QUALITY = {
  /** Max device pixel ratio. */
  maxDpr: numberParam('dpr', 1),
  /** Redraws per second while Home is showing. */
  fps: numberParam('fps', 30),
};
