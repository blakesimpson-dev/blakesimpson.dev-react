import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Color, LinearSRGBColorSpace } from 'three'
import { useSceneAssets } from '../hooks/useSceneAssets'
import { screenItems as items } from '../content/screenItems'
import { useVideo } from '../hooks/useVideo'
import '../materials/ScreenMaterial'
import '../styles/screen.scss'
import Dropdown from './Dropdown'

// Raw (unconverted) value, matching how r141 applied '#AAAAAA'
const videoTint = new Color().setHex(0xaaaaaa, LinearSRGBColorSpace)

const Screen = ({ page }) => {
  const screenMesh = useRef()
  const hasBooted = useRef(false)
  const { nodes, bootTexture } = useSceneAssets()
  const { video, resetVideo, changeVideoSource } = useVideo()
  const [isScreenOn, setIsScreenOn] = useState(false)
  const [selectedId, setSelectedId] = useState(items[0].id)
  const screenItem = items.find((item) => item.id === selectedId)

  useEffect(() => {
    if (screenItem.type === 'video') {
      resetVideo()
      changeVideoSource(screenItem.url)
    }
  }, [screenItem, resetVideo, changeVideoSource])

  // Turn the screen on after the camera settles on Home (longer on first load)
  useEffect(() => {
    if (page !== 'Home') return
    const timer = setTimeout(
      () => {
        hasBooted.current = true
        setIsScreenOn(true)
      },
      hasBooted.current ? 2000 : 4500,
    )
    return () => {
      clearTimeout(timer)
      setIsScreenOn(false)
    }
  }, [page])

  useFrame((state) => {
    if (isScreenOn && screenItem.type === 'default')
      screenMesh.current.material.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <>
      <Html
        position={[-0.044494, 1.02884, -0.091586]}
        scale={[0.0201, 0.02, 1]}
        rotation={[0, 0, 0]}
        transform
      >
        {isScreenOn && (
          <div className="screen">
            <div className="screen__title--one">
              Now Playing:&nbsp;
              <span style={{ color: '#1f2523' }}>{screenItem.name}</span>
            </div>
            <Dropdown
              headerContent="File"
              items={items}
              selectedId={selectedId}
              setSelectedItem={setSelectedId}
            />
            <div className="screen__spacer--one" />
            <div className="screen__title--two">Details</div>
            <div className="screen__details">{screenItem.details}</div>
            <div className="screen__spacer--two" />
            <div className="screen__taskbar">
              <div>Now Playing</div>
              <div>Details</div>
            </div>
          </div>
        )}
      </Html>
      <mesh
        ref={screenMesh}
        geometry={nodes.ScreenMesh.geometry}
        scale={[-1, 1, 1]}
        position={[-0.089, 0, 0]}
      >
        {screenItem.type === 'default' && isScreenOn && (
          <screenMaterial attach="material" />
        )}
        {screenItem.type === 'video' && isScreenOn && (
          <meshBasicMaterial attach="material" color={videoTint}>
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
        )}
        {!isScreenOn && (
          <meshBasicMaterial attach="material" map={bootTexture} />
        )}
      </mesh>
    </>
  )
}

Screen.displayName = 'Screen'

export default Screen
