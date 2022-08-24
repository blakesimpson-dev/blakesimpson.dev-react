import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Scene from './components/Scene'
import Menu from './components/Menu'
import Overlay from './components/Overlay'
import './styles.css'

const App = () => {
  const [page, setPage] = useState('Home')

  return (
    <>
      <Canvas
        style={{ position: 'fixed' }}
        className="canvas"
        camera={{
          near: 0.1,
          far: 4,
          fov: 17.375,
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
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
