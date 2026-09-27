import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useScene } from '../hooks/useScene'

const Fan = ({ speed = 5 }) => {
  const fanMesh = useRef()
  const { fanMeshGeometry, bakedObjectsMaterial } =
    useScene('/models/model.glb')

  useFrame((state, delta) => {
    fanMesh.current.rotation.z -= speed * delta
  })

  return (
    <mesh
      ref={fanMesh}
      geometry={fanMeshGeometry}
      material={bakedObjectsMaterial}
      position={[0.63934, 1.0817, -0.2041]}
    />
  )
}

Fan.displayName = 'Fan'

export default Fan
