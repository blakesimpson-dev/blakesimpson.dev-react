import { motion, useAnimationControls } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import '../styles/menu.scss'
import { useMotion } from '../hooks/useMotion'

let useInitialMotion = true

const Menu = ({ page, setPage }) => {
  const controls = useAnimationControls()
  const { menuMotion } = useMotion()

  useEffect(() => {
    const initialSequence = async () => {
      await controls.start('visibleInitial')
      useInitialMotion = false
    }

    switch (page) {
      case 'Home':
        useInitialMotion ? initialSequence() : controls.start('visible')
        break

      default:
        controls.start('hidden')
        break
    }
  }, [page])

  return (
    <motion.div
      className="menu"
      variants={menuMotion}
      initial="hidden"
      animate={controls}
    >
      <div className="menu__title">
        <div>&lt;blakesimpson.dev /&gt;</div>
        <div>KATAPLEXIA // キャタプレクシア // 3D Portfolio</div>
      </div>
      <div className="menu__buttons">
        <button onClick={() => setPage('Music')}>Music</button>
        <button onClick={() => setPage('Projects')}>Projects</button>
        <button onClick={() => setPage('About')}>About</button>
        <button onClick={() => setPage('Contact')}>Contact</button>
      </div>
    </motion.div>
  )
}

Menu.displayName = 'Menu'

Menu.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
}

export default Menu
