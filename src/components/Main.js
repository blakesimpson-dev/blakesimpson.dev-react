import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import * as THREE from 'three'
import Menu from './Menu'
import { useMotion } from '../hooks/useMotion'
import Overlay from './Overlay'
import Scene from './Scene'
import Frame from './Frame'

const Main = () => {
  const [page, setPage] = useState('Home')
  const { mainMotion } = useMotion()

  return (
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
        gl={{ toneMapping: THREE.NoToneMapping, encoding: THREE.sRGBEncoding }}
        onCreated={(state) => {
          state.gl.setClearColor('#FFFFFF')
        }}
      >
        <Scene page={page} setPage={setPage} />
      </Canvas>
      <Menu page={page} setPage={setPage} />
      <Overlay page={page} setPage={setPage} />
      <Frame />
    </motion.main>
  )
}

export default Main
