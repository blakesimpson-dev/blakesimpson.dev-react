import { useFrame } from '@react-three/fiber'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { useScene } from '../useScene'

const Fan = ({ speed }) => {
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

Fan.propTypes = {
  speed: PropTypes.number,
}

Fan.defaultProps = {
  speed: 5,
}

export default Fan
