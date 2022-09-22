import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useScene } from '../hooks/useScene'
import useScreenItems from '../hooks/useScreenItems'
import { useVideo } from '../hooks/useVideo'
import '../materials/ScreenMaterial'
import '../styles/screen.scss'
import Dropdown from './Dropdown'

const Screen = ({ page }) => {
  const screenMesh = useRef()
  const { nodes, bootTexture } = useScene('/models/model.glb')
  const { video, resetVideo, changeVideoSource } = useVideo()
  const { items } = useScreenItems()
  const [isScreenOn, setIsScreenOn] = useState(false)
  const [screenOnDelay, setScreenOnDelay] = useState(4500)
  const [screenItem, setScreenItem] = useState(items[0])

  const setSelectedItem = (id) => {
    items.forEach((item) => (item.selected = false))
    const item = items.filter((item) => {
      return item.id == id
    })[0]
    item.selected = true
    setScreenItem(item)
  }

  useEffect(() => {
    if (screenItem.type == 'video') {
      resetVideo()
      changeVideoSource(screenItem.url)
    }
  }, [screenItem])

  useEffect(() => {
    if (page == 'Home') {
      setTimeout(() => {
        setIsScreenOn(true)
        setScreenOnDelay(2000)
      }, screenOnDelay)
    } else {
      setIsScreenOn(false)
    }
  }, [page])

  useFrame((state) => {
    if (isScreenOn && screenItem.type == 'default')
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
              setSelectedItem={(id) => setSelectedItem(id)}
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
        {screenItem.type == 'default' && isScreenOn && (
          <screenMaterial attach="material" />
        )}
        {screenItem.type == 'video' && isScreenOn && (
          <meshBasicMaterial attach="material" color={'#AAAAAA'}>
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
        )}
        {!isScreenOn && (
          // <meshBasicMaterial attach="material" color={'#18191A'} />
          <meshBasicMaterial attach="material" map={bootTexture} />
        )}
      </mesh>
    </>
  )
}

Screen.displayName = 'Screen'

Screen.propTypes = {
  page: PropTypes.string,
}

export default Screen
