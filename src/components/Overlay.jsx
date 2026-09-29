import {motion, useAnimationControls} from 'framer-motion';
import React, {useEffect} from 'react';
import {OVERLAY_MOTION} from '../constants/motion';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Music from '../pages/Music';
import Projects from '../pages/Projects';
import '../styles/overlay.scss';

const Overlay = ({page, setPage}) => {
  const controls = useAnimationControls();

  useEffect(() => {
    switch (page) {
      case 'Projects':
        controls.start('visibleRight');
        break;

      case 'Music':
        controls.start('visibleLeft');
        break;

      case 'About':
        controls.start('visibleRight');
        break;

      case 'Contact':
        controls.start('visibleRight');
        break;

      case 'Home':
        controls.start('hidden');
        break;
    }
  }, [page, controls]);

  return (
    <motion.div
      className="overlay"
      variants={OVERLAY_MOTION}
      initial={OVERLAY_MOTION.hidden}
      animate={controls}
    >
      {page === 'Music' && <Music setPage={setPage} />}
      {page === 'Projects' && <Projects setPage={setPage} />}
      {page === 'About' && <About setPage={setPage} />}
      {page === 'Contact' && <Contact setPage={setPage} />}
    </motion.div>
  );
};

Overlay.displayName = 'Overlay';

export default Overlay;
