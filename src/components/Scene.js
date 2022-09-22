import { meshBounds } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  BrightnessContrast,
  EffectComposer,
  Outline,
  Select,
  Selection,
  SSAO,
} from '@react-three/postprocessing'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useScene } from '../hooks/useScene'
import Screen from './Screen'
import Fan from './Fan'
import GameboyScreen from './GameboyScreen'

const Scene = ({ page, setPage }) => {
  const {
    actions,
    mergedRoomGeometry,
    glassGeometry,
    bakedRoomMaterial,
    glassMaterial,
    staticObjects,
    selectableObjects,
  } = useScene('/models/model.glb')

  const [isSelectionEnabled, setSelectionEnabled] = useState(false)
  const [hovered, setHovered] = useState()
  const [currentPage, setCurrentPage] = useState()

  const zoomIn = (action) => {
    actions[action].reset()
    actions[action].timeScale = 2
    actions['CameraActionNLA1'].time = actions['CameraActionNLA1'].duration
    actions['CameraActionNLA1'].crossFadeTo(actions[action], 2, false)
    actions[action].play()
    setSelectionEnabled(false)
    setHovered(null)
  }

  const zoomOut = (action) => {
    actions['CameraActionNLA1'].reset()
    actions[action].time = actions[action].getClip().duration
    actions[action].paused = false
    actions[action].timeScale = -2
    actions[action].play()
    actions[action].crossFadeTo(actions['CameraActionNLA1'], 2, false)
    setTimeout(() => setSelectionEnabled(true), 2000)
  }

  useEffect(() => handlePageChange(), [page])

  const handlePageChange = () => {
    if (!currentPage) {
      actions['CameraActionNLA1'].timeScale = 2
      actions['CameraActionNLA1'].play().startAt(2.5)
      setCurrentPage(page)
      setTimeout(() => setSelectionEnabled(true), 4200)
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

  useFrame(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  })

  return (
    <>
      <Selection>
        <group>
          <Screen page={page} />
          <Fan speed={8} />
        </group>
        <group>
          <mesh geometry={mergedRoomGeometry} material={bakedRoomMaterial} />
          <mesh geometry={glassGeometry} material={glassMaterial} />
        </group>
        <group
          raycast={meshBounds}
          onPointerOver={(e) => {
            e.stopPropagation()
            if (isSelectionEnabled) setHovered(e.object.name)
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            if (isSelectionEnabled) setHovered(null)
          }}
          onClick={(e) => {
            if (isSelectionEnabled && e.object.page) {
              setPage(e.object.page)
            }
          }}
        >
          {staticObjects.map((object, index) => {
            return (
              <mesh
                key={index}
                geometry={object.geometry}
                material={object.material}
              />
            )
          })}
          {selectableObjects.map((object, index) => {
            return (
              <Select key={index} enabled={hovered == object.name}>
                <mesh
                  name={object.name}
                  page={object.page}
                  geometry={object.geometry}
                  material={object.material}
                />
              </Select>
            )
          })}
          <GameboyScreen page={page} />
        </group>
        <EffectComposer>
          <Outline
            blur
            edgeStrength={5}
            pulseSpeed={0.5}
            hiddenEdgeColor={'#FFFFFF'}
          />
          <BrightnessContrast brightness={0.1} contrast={0.15} />
          <SSAO />
        </EffectComposer>
      </Selection>
    </>
  )
}

Scene.displayName = 'Scene'

Scene.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
}

export default Scene
