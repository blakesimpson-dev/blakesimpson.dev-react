import { motion, useAnimationControls } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Music from '../pages/Music'
import Projects from '../pages/Projects'
import '../styles/overlay.scss'
import { useMotion } from '../useMotion'

const Overlay = ({ page, setPage }) => {
  const controls = useAnimationControls()
  const { overlayMotion } = useMotion()

  useEffect(() => {
    switch (page) {
      case 'Projects':
        controls.start('visibleRight')
        break

      case 'Music':
        controls.start('visibleLeft')
        break

      case 'About':
        controls.start('visibleRight')
        break

      case 'Contact':
        controls.start('visibleRight')
        break

      case 'Home':
        controls.start('hidden')
        break
    }
  }, [page])

  return (
    <motion.div
      className="overlay"
      variants={overlayMotion}
      initial={overlayMotion.hidden}
      animate={controls}
    >
      {page == 'Music' && <Music setPage={setPage} />}
      {page == 'Projects' && <Projects setPage={setPage} />}
      {page == 'About' && <About setPage={setPage} />}
      {page == 'Contact' && <Contact setPage={setPage} />}
    </motion.div>
  )
}

Overlay.displayName = 'Overlay'

Overlay.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
}

export default Overlay
