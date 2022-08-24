import { useFrame } from '@react-three/fiber'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import * as THREE from 'three'
import Plane from './Plane'

const Startup = ({ position, scale }) => {
  const plane = useRef()

  useFrame(
    () =>
      (plane.current.material.opacity = THREE.MathUtils.lerp(
        plane.current.material.opacity,
        0,
        0.1,
      )),
  )

  return <Plane ref={plane} position={position} scale={scale} />
}

Startup.displayName = 'Startup'

Startup.propTypes = {
  position: PropTypes.any,
  scale: PropTypes.any,
}

export default Startup
