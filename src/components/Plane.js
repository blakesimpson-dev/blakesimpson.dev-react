import PropTypes from 'prop-types'
import React, { forwardRef, useRef } from 'react'

const Plane = forwardRef(({ color, args, map, ...props }, ref) => {
  const material = useRef()
  return (
    <mesh ref={ref} {...props}>
      <planeBufferGeometry attach="geometry" args={args} />
      <meshBasicMaterial
        ref={material}
        attach="material"
        color={color}
        map={map}
        transparent
      />
    </mesh>
  )
})

Plane.displayName = 'Plane'

Plane.propTypes = {
  color: PropTypes.string,
  args: PropTypes.array,
  map: PropTypes.object,
}

Plane.defaultProps = {
  color: '#FFFFFF',
}

export default Plane
