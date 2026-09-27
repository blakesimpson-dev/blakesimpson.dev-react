import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import React, { Suspense, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import * as THREE from 'three'
import { useMotion } from '../hooks/useMotion'
import Frame from '../components/Frame'
import Menu from '../components/Menu'
import Overlay from '../components/Overlay'
import Scene from '../components/Scene'
import Unsupported from '../components/Unsupported'
import './main.scss'
import '../styles/pages.scss'

const Main = () => {
  const [page, setPage] = useState('Home')
  const { mainMotion } = useMotion()
  const isSupported = useMediaQuery({ query: '(min-width: 1280px)' })

  return (
    <>
      {isSupported && (
        <motion.main variants={mainMotion} initial="hidden" animate="visible">
          <Canvas
            style={{ position: 'fixed' }}
            camera={{
              near: 0.1,
              far: 4,
              fov: 19,
              position: [-0.0445, 1.022, 0.938],
              rotation: [0, 0, 0],
            }}
            gl={{
              toneMapping: THREE.NoToneMapping,
              encoding: THREE.sRGBEncoding,
            }}
            onCreated={(state) => {
              state.gl.setClearColor('#FFFFFF')
            }}
          >
            <Suspense fallback={null}>
              <Scene page={page} setPage={setPage} />
            </Suspense>
          </Canvas>
          <Menu page={page} setPage={setPage} />
          <Overlay page={page} setPage={setPage} />
          <Frame />
        </motion.main>
      )}
      {!isSupported && <Unsupported />}
    </>
  )
}

export default Main
