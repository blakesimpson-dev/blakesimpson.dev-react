import {motion, useAnimationControls} from 'framer-motion';
import {useEffect} from 'react';
import {OVERLAY_MOTION} from '../constants/motion';
import type {PageName, SetPage} from '../constants/pages';
import About from '../pages/about';
import Contact from '../pages/contact';
import Music from '../pages/music';
import Projects from '../pages/projects';
import '../styles/overlay.scss';

/** OVERLAY_MOTION variant for each page: Music sits left of the Gameboy. */
const OVERLAY_VARIANTS: Record<PageName, string> = {
  Home: 'hidden',
  Music: 'visibleLeft',
  Projects: 'visibleRight',
  About: 'visibleRight',
  Contact: 'visibleRight',
};

interface OverlayProps {
  page: PageName;
  setPage: SetPage;
}

/** The panel that slides in over the desk with the current page. */
export function Overlay({page, setPage}: OverlayProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    void controls.start(OVERLAY_VARIANTS[page]);
  }, [page, controls]);

  return (
    <motion.div
      className="overlay"
      variants={OVERLAY_MOTION}
      initial="hidden"
      animate={controls}
    >
      {page === 'Music' && <Music setPage={setPage} />}
      {page === 'Projects' && <Projects setPage={setPage} />}
      {page === 'About' && <About setPage={setPage} />}
      {page === 'Contact' && <Contact setPage={setPage} />}
    </motion.div>
  );
}
