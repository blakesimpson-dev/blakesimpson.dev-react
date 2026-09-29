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

// Separate chunk, so compact never downloads the desktop scene
const Scene = lazy(async () => {
  const module = await import('../components/scene');
  return {default: module.Scene};
});

const CLEAR_COLOR = '#FFFFFF';
// The room has no ceiling; wide views show the space above the walls
const CLEAR_COLOR_COMPACT = '#1f2523';

function setClearColor(state: RootState) {
  state.gl.setClearColor(CLEAR_COLOR);
}

function setClearColorCompact(state: RootState) {
  state.gl.setClearColor(CLEAR_COLOR_COMPACT);
}

export function Home() {
  const [page, setPage] = useState<PageName>('Home');
  // Fade in once the scene has loaded, so the clear colour never flashes
  const [isSceneReady, setIsSceneReady] = useState(false);
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
