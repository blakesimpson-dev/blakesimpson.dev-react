import { useAnimations, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import * as THREE from 'three'

export const useScene = (path) => {
  const { camera } = useThree()
  const { nodes, animations } = useGLTF(path)
  const { actions } = useAnimations(animations, camera)

  Object.keys(actions).forEach((key) => {
    actions[key].zeroSlopeAtEnd = false
    actions[key].zeroSlopeAtStart = false
    actions[key].clampWhenFinished = true
    actions[key].setLoop(THREE.LoopOnce)
  })

  const textureLoader = new THREE.TextureLoader()

  const bakedRoomTexture = textureLoader.load('textures/bakedRoom.jpg')
  bakedRoomTexture.flipY = false
  bakedRoomTexture.encoding = THREE.sRGBEncoding

  const bakedObjectsTexture = textureLoader.load('textures/bakedObjects.jpg')
  bakedObjectsTexture.flipY = false
  bakedObjectsTexture.encoding = THREE.sRGBEncoding

  const bootTexture = textureLoader.load('textures/boot.jpg')
  bootTexture.flipY = true
  bootTexture.encoding = THREE.sRGBEncoding
  bootTexture.offset = new THREE.Vector2(-0.03, -0.015)

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

  const staticObjects = [
    {
      geometry: monitorGeometry,
      material: bakedObjectsMaterial,
    },
    {
      geometry: mouseGeometry,
      material: bakedObjectsMaterial,
    },
    {
      name: 'Plant',
      geometry: plantGeometry,
      material: bakedObjectsMaterial,
    },
    {
      geometry: pcGeometry,
      material: bakedObjectsMaterial,
    },
  ]

  const selectableObjects = [
    {
      name: 'Gameboy',
      page: 'Music',
      geometry: gameboyGeometry,
      material: bakedObjectsMaterial,
    },
    {
      name: 'Keyboard',
      page: 'Projects',
      geometry: keyboardGeometry,
      material: bakedObjectsMaterial,
    },
    {
      name: 'Envelope',
      page: 'Contact',
      geometry: envelopeGeometry,
      material: bakedRoomMaterial,
    },
    {
      name: 'Coffee',
      page: 'About',
      geometry: coffeeCupGeometry,
      material: bakedObjectsMaterial,
    },
  ]

  return {
    camera,
    nodes,
    animations,
    actions,
    fanMeshGeometry,
    mergedRoomGeometry,
    glassGeometry,
    gameboyGeometry,
    keyboardGeometry,
    monitorGeometry,
    mouseGeometry,
    plantGeometry,
    envelopeGeometry,
    coffeeCupGeometry,
    pcGeometry,
    bootTexture,
    bakedRoomMaterial,
    bakedObjectsMaterial,
    glassMaterial,
    staticObjects,
    selectableObjects,
  }
}

export default useScene
