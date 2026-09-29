import {Stats} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import type {CameraProps} from '@react-three/fiber';
import {motion} from 'framer-motion';
import {Suspense, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {NoToneMapping} from 'three';
import {Frame} from '../components/frame';
import {Menu} from '../components/menu';
import {Overlay} from '../components/overlay';
import {Scene} from '../components/scene';
import {Unsupported} from '../components/unsupported';
import {MAIN_MOTION} from '../constants/motion';
import type {PageName} from '../constants/pages';
import {RENDER_QUALITY} from '../constants/render_quality';
import '../styles/main.scss';
import '../styles/pages.scss';

/** Narrowest viewport the desktop scene supports. */
const DESKTOP_QUERY = '(min-width: 1280px)';
const CLEAR_COLOR = '#FFFFFF';

/** Start pose; the glTF camera clips then animate this camera. */
const CAMERA: CameraProps = {
  // Matches the glTF camera node the CameraActionNLA* tracks target
  name: 'Camera',
  near: 0.1,
  far: 4,
  fov: 19,
  position: [-0.0445, 1.022, 0.938],
  rotation: [0, 0, 0],
};

/** The whole site: the 3D desk plus the menu, page overlay and frame. */
export function Home() {
  const [page, setPage] = useState<PageName>('Home');
  // Fade in only once Scene has mounted (its assets have loaded), so the
  // canvas clear colour never shows while the model and textures load
  const [isSceneReady, setIsSceneReady] = useState(false);
  const isSupported = useMediaQuery({query: DESKTOP_QUERY});

  if (!isSupported) {
    return <Unsupported />;
  }

  return (
    <motion.main
      variants={MAIN_MOTION}
      initial="hidden"
      animate={isSceneReady ? 'visible' : 'hidden'}
    >
      <Canvas
        style={{position: 'fixed'}}
        dpr={[1, RENDER_QUALITY.maxDpr]}
        camera={CAMERA}
        gl={{toneMapping: NoToneMapping}}
        onCreated={state => {
          state.gl.setClearColor(CLEAR_COLOR);
        }}
      >
        {RENDER_QUALITY.stats && <Stats />}
        <Suspense fallback={null}>
          <Scene page={page} setPage={setPage} onReady={setIsSceneReady} />
        </Suspense>
      </Canvas>
      <Menu page={page} setPage={setPage} />
      <Overlay page={page} setPage={setPage} />
      <Frame />
    </motion.main>
  );
}
