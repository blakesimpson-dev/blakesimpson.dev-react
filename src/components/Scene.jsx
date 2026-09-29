import { meshBounds } from '@react-three/drei'
import {
  BrightnessContrast,
  EffectComposer,
  Outline,
  Select,
  Selection,
} from '@react-three/postprocessing'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useCameraActions } from '../hooks/useCameraActions'
import { RENDER_QUALITY } from '../constants/renderQuality'
import { useSceneAssets } from '../hooks/useSceneAssets'
import Fan from './Fan'
import GameboyScreen from './GameboyScreen'
import Screen from './Screen'

const INTRO_ACTION = 'CameraActionNLA1'

// Camera clip that zooms from the Home view to each page
const PAGE_ACTIONS = {
  Projects: 'CameraActionNLA2',
  Music: 'CameraActionNLA3',
  About: 'CameraActionNLA4',
  Contact: 'CameraActionNLA5',
}

const Scene = ({ page, setPage, onReady }) => {
  const {
    nodes,
    animations,
    bakedRoomMaterial,
    bakedObjectsMaterial,
    glassMaterial,
  } = useSceneAssets()
  const actions = useCameraActions(animations)

  const [isSelectionEnabled, setSelectionEnabled] = useState(false)
  const [hovered, setHovered] = useState(null)
  const previousPage = useRef(page)

  const staticObjects = useMemo(
    () => [
      { name: 'Monitor', geometry: nodes.MonitorMesh.geometry },
      { name: 'Mouse', geometry: nodes.MouseMesh.geometry },
      { name: 'Plant', geometry: nodes.PlantMesh.geometry },
      { name: 'PC', geometry: nodes.PCMesh.geometry },
    ],
    [nodes],
  )

  const selectableObjects = useMemo(
    () => [
      {
        name: 'Gameboy',
        page: 'Music',
        geometry: nodes.GameboyMesh.geometry,
        material: bakedObjectsMaterial,
      },
      {
        name: 'Keyboard',
        page: 'Projects',
        geometry: nodes.KeyboardMesh.geometry,
        material: bakedObjectsMaterial,
      },
      {
        name: 'Envelope',
        page: 'Contact',
        geometry: nodes.EnvelopeMesh.geometry,
        material: bakedRoomMaterial,
      },
      {
        name: 'Coffee',
        page: 'About',
        geometry: nodes.CoffeeCupMesh.geometry,
        material: bakedObjectsMaterial,
      },
    ],
    [nodes, bakedObjectsMaterial, bakedRoomMaterial],
  )

  // Assets have loaded once Scene mounts (it suspends until then)
  useEffect(() => {
    onReady(true)
  }, [onReady])

  // Intro camera move on first load
  useEffect(() => {
    const intro = actions[INTRO_ACTION]
    intro.timeScale = 2
    intro.play().startAt(2.5)
    const timer = setTimeout(() => setSelectionEnabled(true), 4200)
    return () => clearTimeout(timer)
  }, [actions])

  // Zoom between the Home view and a page when the page changes
  useEffect(() => {
    const from = previousPage.current
    previousPage.current = page
    const intro = actions[INTRO_ACTION]
    let timer

    if (from === 'Home' && page !== 'Home') {
      const action = actions[PAGE_ACTIONS[page]]
      action.reset()
      action.timeScale = 2
      intro.time = intro.getClip().duration
      intro.crossFadeTo(action, 2, false)
      action.play()
      setSelectionEnabled(false)
      setHovered(null)
    } else if (from !== 'Home' && page === 'Home') {
      const action = actions[PAGE_ACTIONS[from]]
      intro.reset()
      action.time = action.getClip().duration
      action.paused = false
      action.timeScale = -2
      action.play()
      action.crossFadeTo(intro, 2, false)
      timer = setTimeout(() => setSelectionEnabled(true), 2000)
    }

    return () => clearTimeout(timer)
  }, [page, actions])

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <Selection>
      <group>
        <Screen page={page} />
        <Fan speed={8} />
      </group>
      <group>
        <mesh
          geometry={nodes.MergedRoomMesh.geometry}
          material={bakedRoomMaterial}
        />
        <mesh geometry={nodes.PCGlassMesh.geometry} material={glassMaterial} />
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
        {staticObjects.map((object) => (
          <mesh
            key={object.name}
            geometry={object.geometry}
            material={bakedObjectsMaterial}
          />
        ))}
        {selectableObjects.map((object) => (
          <Select key={object.name} enabled={hovered === object.name}>
            <mesh
              name={object.name}
              page={object.page}
              geometry={object.geometry}
              material={object.material}
            />
          </Select>
        ))}
        <GameboyScreen page={page} />
      </group>
      <EffectComposer multisampling={RENDER_QUALITY.msaa}>
        <Outline
          blur
          edgeStrength={5}
          pulseSpeed={0.5}
          hiddenEdgeColor="#FFFFFF"
        />
        <BrightnessContrast brightness={0.1} contrast={0.15} />
      </EffectComposer>
    </Selection>
  )
}

Scene.displayName = 'Scene'

export default Scene
