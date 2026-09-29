// Query-string overrides for testing, e.g. /?stats&dpr=2&msaa=8&compact
const params = new URLSearchParams(window.location.search);

function numberParam(key: string, fallback: number): number {
  const value = params.get(key);
  return value === null ? fallback : Number(value);
}

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
  stats: params.has('stats'),
  maxDpr: numberParam('dpr', 1.5),
  msaa: numberParam('msaa', 2),
};

export const COMPACT_QUALITY = {
  maxDpr: numberParam('dpr', 1),
  fps: numberParam('fps', 30),
};
