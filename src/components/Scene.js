import { meshBounds, useAnimations, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
  SSAO,
  BrightnessContrast,
} from '@react-three/postprocessing'
import PropTypes from 'prop-types'
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import '../materials/Screen'

const Scene = ({ page, setPage }) => {
  const { camera } = useThree()
  const objectsGroup = useRef()
  const screenMesh = useRef()
  const fanMesh = useRef()
  const { nodes, animations } = useGLTF('/model.glb')
  const { actions } = useAnimations(animations, camera)
  const [hovered, setHovered] = useState()
  const [currentPage, setCurrentPage] = useState()

  const textureLoader = new THREE.TextureLoader()
  const bakedRoomTexture = textureLoader.load('bakedRoom.jpg')
  bakedRoomTexture.flipY = false
  bakedRoomTexture.encoding = THREE.sRGBEncoding
  const bakedObjectsTexture = textureLoader.load('bakedObjects.jpg')
  bakedObjectsTexture.flipY = false
  bakedObjectsTexture.encoding = THREE.sRGBEncoding

  const fanMeshGeometry = useMemo(() => nodes.FanMesh.geometry, [])
  const mergedRoomGeometry = useMemo(() => nodes.MergedRoomMesh.geometry, [])
  const glassGeometry = useMemo(() => nodes.PCGlassMesh.geometry, [])
  const gameboyGeometry = useMemo(() => nodes.GameboyMesh.geometry, [])
  const keyboardGeometry = useMemo(() => nodes.KeyboardMesh.geometry, [])
  const monitorGeometry = useMemo(() => nodes.MonitorMesh.geometry, [])
  const mouseGeometry = useMemo(() => nodes.MouseMesh.geometry, [])
  const plantGeometry = useMemo(() => nodes.PlantMesh.geometry, [])
  const envelopeGeometry = useMemo(() => nodes.EnvelopeMesh.geometry, [])
  const coffeeCupGeometry = useMemo(() => nodes.CoffeeCupMesh.geometry, [])
  const pcGeometry = useMemo(() => nodes.PCMesh.geometry, [])

  const bakedRoomMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: bakedRoomTexture,
      }),
    [],
  )

  const bakedObjectsMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: bakedObjectsTexture,
      }),
    [],
  )

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#B9ECEE',
        transparent: true,
        opacity: 0.005,
      }),
    [],
  )

  Object.keys(actions).forEach((key) => {
    actions[key].zeroSlopeAtEnd = false
    actions[key].zeroSlopeAtStart = false
    actions[key].clampWhenFinished = true
    actions[key].setLoop(THREE.LoopOnce)
  })

  const zoomIn = (action) => {
    actions[action].reset()
    actions[action].timeScale = 1
    actions['CameraActionNLA1'].time = actions['CameraActionNLA1'].duration
    actions['CameraActionNLA1'].crossFadeTo(actions[action], 2, false)
    actions[action].play()
  }

  const zoomOut = (action) => {
    actions['CameraActionNLA1'].reset()
    actions[action].time = actions[action].getClip().duration
    actions[action].paused = false
    actions[action].timeScale = -1
    actions[action].play()
    actions[action].crossFadeTo(actions['CameraActionNLA1'], 2, false)
  }

  useEffect(() => handlePageChange(), [page])

  const handlePageChange = () => {
    if (!currentPage) {
      actions['CameraActionNLA1'].play().startAt(2.5)
      setCurrentPage(page)
    }

    if (currentPage == 'Home' && page != 'Home') {
      switch (page) {
        case 'Projects':
          zoomIn('CameraActionNLA2')
          break

        case 'Music':
          zoomIn('CameraActionNLA3')
          break

        case 'About':
          zoomIn('CameraActionNLA4')
          break

        case 'Contact':
          zoomIn('CameraActionNLA5')
          break
      }
    } else if (currentPage != 'Home' && page == 'Home') {
      switch (currentPage) {
        case 'Projects':
          zoomOut('CameraActionNLA2')
          break

        case 'Music':
          zoomOut('CameraActionNLA3')
          break

        case 'About':
          zoomOut('CameraActionNLA4')
          break

        case 'Contact':
          zoomOut('CameraActionNLA5')
          break
      }
    }
    setCurrentPage(page)
  }

  useFrame((state, delta) => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    screenMesh.current.material.uniforms.uTime.value = state.clock.elapsedTime
    fanMesh.current.rotation.z -= 5 * delta
  })

  return (
    <Suspense fallback={<div className="loading" />}>
      <Selection>
        <group
          raycast={meshBounds}
          onPointerOver={(e) => (
            e.stopPropagation(), setHovered(e.object.name)
          )}
          onPointerOut={(e) => (e.stopPropagation(), setHovered(null))}
          onClick={(e) => console.log(`clicked on ${e.object.name}`)}
        >
          <Select enabled={hovered == 'Screen'}>
            <mesh
              ref={screenMesh}
              name="Screen"
              geometry={nodes.ScreenMesh.geometry}
            >
              <screen attach="material" />
            </mesh>
          </Select>
          {/* <Startup position={[-0.0445, 1.022, 0]} scale={[0.551, 0.4, 1]} /> */}
          <mesh
            ref={fanMesh}
            geometry={fanMeshGeometry}
            material={bakedObjectsMaterial}
            position={[0.63934, 1.0817, -0.2041]}
          />
        </group>
        <group>
          <mesh geometry={mergedRoomGeometry} material={bakedRoomMaterial} />
          <mesh geometry={glassGeometry} material={glassMaterial} />
        </group>
        <group
          ref={objectsGroup}
          raycast={meshBounds}
          onPointerOver={(e) => (
            e.stopPropagation(), setHovered(e.object.name)
          )}
          onPointerOut={(e) => (e.stopPropagation(), setHovered(null))}
          onClick={(e) => setPage(e.object.page)}
        >
          <Select enabled={hovered == 'Gameboy'}>
            <mesh
              name="Gameboy"
              page="Music"
              geometry={gameboyGeometry}
              material={bakedObjectsMaterial}
            />
          </Select>
          <Select enabled={hovered == 'Keyboard'}>
            <mesh
              name="Keyboard"
              page="Projects"
              geometry={keyboardGeometry}
              material={bakedObjectsMaterial}
            />
          </Select>
          <mesh geometry={monitorGeometry} material={bakedObjectsMaterial} />
          <Select enabled={hovered == 'Mouse'}>
            <mesh
              name="Mouse"
              page="Projects"
              geometry={mouseGeometry}
              material={bakedObjectsMaterial}
            />
          </Select>
          <Select enabled={hovered == 'Plant'}>
            <mesh
              name="Plant"
              page="Contact"
              geometry={plantGeometry}
              material={bakedObjectsMaterial}
            />
          </Select>
          <Select enabled={hovered == 'Envelope'}>
            <mesh
              name="Envelope"
              page="Contact"
              geometry={envelopeGeometry}
              material={bakedRoomMaterial}
            />
          </Select>
          <Select enabled={hovered == 'Coffee'}>
            <mesh
              name="Coffee"
              page="About"
              geometry={coffeeCupGeometry}
              material={bakedObjectsMaterial}
            />
          </Select>
          <Select enabled={hovered == 'PC'}>
            <mesh
              name="PC"
              page="About"
              geometry={pcGeometry}
              material={bakedObjectsMaterial}
            />
          </Select>
        </group>
        <EffectComposer>
          <Outline
            blur
            edgeStrength={5}
            pulseSpeed={0.5}
            hiddenEdgeColor={'#FFFFFF'}
          />
          <BrightnessContrast brightness={0.05} contrast={0.1} />
          <SSAO />
        </EffectComposer>
      </Selection>
    </Suspense>
  )
}

Scene.displayName = 'Scene'

Scene.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
}

export default Scene
