import { Html } from '@react-three/drei'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import '../styles/gameboy.scss'

const GameboyScreen = ({ page }) => {
  const [isScreenOn, setIsScreenOn] = useState(false)

  useEffect(() => {
    if (page == 'Music') {
      setTimeout(() => setIsScreenOn(true), 2000)
    } else {
      setIsScreenOn(false)
    }
  }, [page])

  return (
    <>
      {isScreenOn && (
        <>
          <Html
            position={[-0.387, 0.789, 0.0213]}
            rotation={[-Math.PI / 2, 0, 0.26]}
            scale={(0.01, 0.01, 0.01)}
            transform
          >
            <div className="gameboy-screen">
              <div className="gameboy-screen__title">Kataplexia</div>
            </div>
          </Html>
          <Html
            position={[-0.421, 0.789, 0.022]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={(0.01, 0.01, 0.01)}
            transform
          >
            <div className="battery-light" />
          </Html>
        </>
      )}
    </>
  )
}

GameboyScreen.displayName = 'GameboyScreen'

GameboyScreen.propTypes = {
  page: PropTypes.string,
}

export default GameboyScreen
