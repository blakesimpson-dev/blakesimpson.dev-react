import {Stats} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import {motion} from 'framer-motion';
import React, {Suspense, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import * as THREE from 'three';
import {MAIN_MOTION} from '../constants/motion';
import {RENDER_QUALITY} from '../constants/render_quality';
import {Frame} from '../components/frame';
import {Menu} from '../components/menu';
import {Overlay} from '../components/overlay';
import {Scene} from '../components/scene';
import {Unsupported} from '../components/unsupported';
import '../styles/main.scss';
import '../styles/pages.scss';

const Home = () => {
  const [page, setPage] = useState('Home');
  // Fade in only once Scene has mounted (its assets have loaded), so the
  // canvas clear colour never shows while the model and textures load
  const [isSceneReady, setSceneReady] = useState(false);
  const isSupported = useMediaQuery({query: '(min-width: 1280px)'});

  return (
    <>
      {isSupported && (
        <motion.main
          variants={MAIN_MOTION}
          initial="hidden"
          animate={isSceneReady ? 'visible' : 'hidden'}
        >
          <Canvas
            style={{position: 'fixed'}}
            dpr={[1, RENDER_QUALITY.maxDpr]}
            camera={{
              // Matches the glTF camera node the CameraActionNLA* tracks target
              name: 'Camera',
              near: 0.1,
              far: 4,
              fov: 19,
              position: [-0.0445, 1.022, 0.938],
              rotation: [0, 0, 0],
            }}
            gl={{
              toneMapping: THREE.NoToneMapping,
            }}
            onCreated={state => {
              state.gl.setClearColor('#FFFFFF');
            }}
          >
            {RENDER_QUALITY.stats && <Stats />}
            <Suspense fallback={null}>
              <Scene page={page} setPage={setPage} onReady={setSceneReady} />
            </Suspense>
          </Canvas>
          <Menu page={page} setPage={setPage} />
          <Overlay page={page} setPage={setPage} />
          <Frame />
        </motion.main>
      )}
      {!isSupported && <Unsupported />}
    </>
  );
};

export default Home;
