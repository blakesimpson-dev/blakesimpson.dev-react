import {Stats} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import type {RootState} from '@react-three/fiber';
import {motion} from 'framer-motion';
import {Suspense, lazy, useState} from 'react';
import {NoToneMapping} from 'three';
import {BackdropScene} from '../components/backdrop_scene';
import {Frame} from '../components/frame';
import {FrameLimiter} from '../components/frame_limiter';
import {Menu} from '../components/menu';
import {Overlay} from '../components/overlay';
import {SceneErrorBoundary} from '../components/scene_error_boundary';
import {CAMERA} from '../constants/camera';
import {MAIN_MOTION} from '../constants/motion';
import type {PageName, SetPage} from '../constants/pages';
import {COMPACT_QUALITY, RENDER_QUALITY} from '../constants/render_quality';
import {useIsCompact} from '../hooks/use_is_compact';
import '../styles/main.scss';
import '../styles/pages.scss';

// The interactive desktop scene (post-processing, outline, Gameboy screen) is
// its own chunk, so compact mode never downloads it
const Scene = lazy(async () => {
  const module = await import('../components/scene');
  return {default: module.Scene};
});

const CLEAR_COLOR = '#FFFFFF';
// The room has no ceiling; the backdrop's wider portrait view shows the space
// above the walls, so fill it with the panels' dark tone instead of white
const CLEAR_COLOR_COMPACT = '#1f2523';

function setClearColor(state: RootState) {
  state.gl.setClearColor(CLEAR_COLOR);
}

function setClearColorCompact(state: RootState) {
  state.gl.setClearColor(CLEAR_COLOR_COMPACT);
}

/**
 * The whole site: the 3D desk plus the menu, page overlay and frame. On
 * phones and tablets (compact) the desk is a cheap, non-interactive backdrop
 * and pages are opened from the menu.
 */
export function Home() {
  const [page, setPage] = useState<PageName>('Home');
  // Fade in only once the scene has mounted (its assets have loaded), so the
  // canvas clear colour never shows while the model and textures load
  const [isSceneReady, setIsSceneReady] = useState(false);
  // Navigation waits for the page panel to finish sliding
  const [isOverlayMoving, setIsOverlayMoving] = useState(false);
  const isCompact = useIsCompact();

  return (
    <motion.main
      className={isCompact ? 'is-compact' : undefined}
      variants={MAIN_MOTION}
      initial="hidden"
      animate={isSceneReady ? 'visible' : 'hidden'}
    >
      {isCompact ? (
        <BackdropCanvas page={page} onReady={setIsSceneReady} />
      ) : (
        <DesktopCanvas
          page={page}
          setPage={setPage}
          onReady={setIsSceneReady}
        />
      )}
      <Menu
        page={page}
        setPage={setPage}
        isCompact={isCompact}
        isNavDisabled={isOverlayMoving}
      />
      <Overlay
        page={page}
        setPage={setPage}
        isCompact={isCompact}
        onTransitionChange={setIsOverlayMoving}
      />
      <Frame />
    </motion.main>
  );
}

interface CanvasProps {
  page: PageName;
  onReady: (isReady: boolean) => void;
}

interface DesktopCanvasProps extends CanvasProps {
  setPage: SetPage;
}

/** Full-quality interactive scene with post-processing. */
function DesktopCanvas({page, setPage, onReady}: DesktopCanvasProps) {
  return (
    <Canvas
      style={{position: 'fixed'}}
      dpr={[1, RENDER_QUALITY.maxDpr]}
      camera={CAMERA}
      gl={{toneMapping: NoToneMapping}}
      onCreated={setClearColor}
    >
      {RENDER_QUALITY.stats && <Stats />}
      <Suspense fallback={null}>
        <Scene page={page} setPage={setPage} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}

/**
 * Compact backdrop: 1x resolution, redrawn at a capped rate and not at all
 * while a page covers it; touches pass through to the page.
 */
function BackdropCanvas({page, onReady}: CanvasProps) {
  return (
    <SceneErrorBoundary
      onError={() => {
        onReady(true);
      }}
    >
      <Canvas
        style={{position: 'fixed', pointerEvents: 'none'}}
        dpr={[1, COMPACT_QUALITY.maxDpr]}
        frameloop="demand"
        camera={CAMERA}
        gl={{toneMapping: NoToneMapping, powerPreference: 'low-power'}}
        onCreated={setClearColorCompact}
      >
        {RENDER_QUALITY.stats && <Stats />}
        <FrameLimiter fps={COMPACT_QUALITY.fps} paused={page !== 'Home'} />
        <Suspense fallback={null}>
          <BackdropScene onReady={onReady} />
        </Suspense>
      </Canvas>
    </SceneErrorBoundary>
  );
}
