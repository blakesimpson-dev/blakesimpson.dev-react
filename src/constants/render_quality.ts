// Query-string overrides for comparing render cost against image quality on
// real hardware, e.g. /?stats&dpr=2&msaa=8. Defaults tested on a Mac mini
// (integrated GPU): ~30 -> 80+ fps at full window size, no visible quality
// loss. SSAO was dropped entirely; the baked lighting already covers it.
const params = new URLSearchParams(window.location.search);

function numberParam(key: string, fallback: number): number {
  const value = params.get(key);
  return value === null ? fallback : Number(value);
}

export const RENDER_QUALITY = {
  /** FPS / frame time panel. */
  stats: params.has('stats'),
  /** Max device pixel ratio (r3f default is 2). */
  maxDpr: numberParam('dpr', 1.5),
  /** EffectComposer MSAA samples. */
  msaa: numberParam('msaa', 2),
};
