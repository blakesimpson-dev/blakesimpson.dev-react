import { useGLTF, useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'

const MODEL_PATH = '/models/model.glb'

// Loads the baked room model and its textures. useGLTF/useTexture cache by
// path, so every component calling this shares one load of each asset.
export const useSceneAssets = () => {
  const { nodes, animations } = useGLTF(MODEL_PATH)
  const [bakedRoomTexture, bakedObjectsTexture, bootTexture] = useTexture([
    '/textures/bakedRoom.jpg',
    '/textures/bakedObjects.jpg',
    '/textures/boot.jpg',
  ])

  // Configure the shared textures once, before their first upload
  useMemo(() => {
    bakedRoomTexture.flipY = false
    bakedRoomTexture.colorSpace = THREE.SRGBColorSpace
    bakedRoomTexture.needsUpdate = true

    bakedObjectsTexture.flipY = false
    bakedObjectsTexture.colorSpace = THREE.SRGBColorSpace
    bakedObjectsTexture.needsUpdate = true

    bootTexture.flipY = true
    bootTexture.colorSpace = THREE.SRGBColorSpace
    bootTexture.offset.set(-0.03, -0.015)
    bootTexture.needsUpdate = true
  }, [bakedRoomTexture, bakedObjectsTexture, bootTexture])

  const bakedRoomMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ map: bakedRoomTexture }),
    [bakedRoomTexture],
  )

  const bakedObjectsMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ map: bakedObjectsTexture }),
    [bakedObjectsTexture],
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

  return {
    nodes,
    animations,
    bootTexture,
    bakedRoomMaterial,
    bakedObjectsMaterial,
    glassMaterial,
  }
}

export default useSceneAssets
