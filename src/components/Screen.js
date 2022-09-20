import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import '../materials/ScreenMaterial'
import '../styles/screen.scss'
import { useScene } from '../useScene'
import { useVideo } from '../useVideo'
import Dropdown from './Dropdown'

const defaultItem = {
  selected: true,
  type: 'default',
}

const videoItem = {
  selected: false,
  type: 'video',
}

const Screen = () => {
  const screenMesh = useRef()
  const { nodes } = useScene('/models/model.glb')

  const {
    kataplexiaVideo,
    bushbashVideo,
    blitzVideo,
    arcadianVideo,
    catnipsVideo,
    gundashVideo,
    interstateVideo,
    lmpoVideo,
    resetVideos,
  } = useVideo()

  const [items] = useState([
    {
      ...defaultItem,
      id: 0,
      name: 'Screensaver',
    },
    {
      ...videoItem,
      id: 1,
      name: 'Kataplexia Live',
      video: kataplexiaVideo,
    },
    {
      ...videoItem,
      id: 2,
      name: 'Bush Bash',
      video: bushbashVideo,
    },
    {
      ...videoItem,
      id: 3,
      name: 'Arcadian Dreams',
      video: arcadianVideo,
    },
    {
      ...videoItem,
      id: 4,
      name: 'Making Catnips',
      video: catnipsVideo,
    },
    {
      ...videoItem,
      id: 5,
      name: 'Gundash',
      video: gundashVideo,
    },
    {
      ...videoItem,
      id: 6,
      name: 'Interstate Arcade',
      video: interstateVideo,
    },
    {
      ...videoItem,
      id: 7,
      name: 'L.M.P.O.',
      video: lmpoVideo,
    },
    {
      ...videoItem,
      id: 8,
      name: 'Blitz Bandits',
      video: blitzVideo,
    },
  ])

  const [screenItem, setScreenItem] = useState(items[0])
  const [screenVideo, setScreenVideo] = useState(null)

  const setSelectedItem = (id) => {
    items.forEach((item) => (item.selected = false))
    const item = items.filter((item) => {
      return item.id == id
    })[0]
    item.selected = true
    setScreenItem(item)
    resetVideos()
  }

  useEffect(() => {
    if (screenItem.type == 'video') {
      setScreenVideo(screenItem.video)
    }
  }, [screenItem])

  useEffect(() => {
    if (screenVideo) screenVideo.play()
  }, [screenVideo])

  useFrame((state) => {
    if (screenItem.type == 'default')
      screenMesh.current.material.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <>
      <Html
        position={[-0.044494, 1.02884, -0.091586]}
        scale={[0.04, 0.04, 0.04]}
        rotation={[0, 0, 0]}
        transform
      >
        <div className="screen">
          <Dropdown
            items={items}
            setSelectedItem={(id) => setSelectedItem(id)}
          />
        </div>
      </Html>
      <mesh
        ref={screenMesh}
        geometry={nodes.ScreenMesh.geometry}
        scale={[-1, 1, 1]}
        position={[-0.089, 0, 0]}
      >
        {screenItem.type == 'default' && <screenMaterial attach="material" />}
        {screenItem.type == 'video' && screenVideo && (
          <meshBasicMaterial attach="material" color={'#AAAAAA'}>
            <videoTexture attach="map" args={[screenVideo]} />
          </meshBasicMaterial>
        )}
      </mesh>
    </>
  )
}

export default Screen
