import { motion, useAnimationControls } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { menuMotion } from '../constants/motion'
import '../styles/menu.scss'

const Menu = ({ page, setPage }) => {
  const controls = useAnimationControls()
  // First reveal waits for the intro camera move; later ones are quicker
  const isFirstReveal = useRef(true)

  useEffect(() => {
    if (page !== 'Home') {
      controls.start('hidden')
    } else if (isFirstReveal.current) {
      controls
        .start('visibleInitial')
        .then(() => (isFirstReveal.current = false))
    } else {
      controls.start('visible')
    }
  }, [page, controls])

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

export default Menu
