import {motion, useAnimationControls} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {OVERLAY_MOTION} from '../constants/motion';
import type {PageName, SetPage} from '../constants/pages';
import {About} from '../pages/about';
import {Contact} from '../pages/contact';
import {Music} from '../pages/music';
import {Projects} from '../pages/projects';
import '../styles/overlay.scss';

/** Desktop OVERLAY_MOTION variant per page: Music sits left of the Gameboy. */
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
  /** Compact: full width, no left/right placement around the desk. */
  isCompact: boolean;
  /** Called with true while the panel is sliding, false once it settles. */
  onTransitionChange: (isTransitioning: boolean) => void;
}

/**
 * The panel that slides in over the desk with the current page. Changing
 * page slides the old one out before the new one's content is swapped in,
 * so the content never changes while the panel is visible.
 */
export function Overlay({
  page,
  setPage,
  isCompact,
  onTransitionChange,
}: OverlayProps) {
  const controls = useAnimationControls();
  // The page whose content is showing; lags `page` while the panel hides
  const [shownPage, setShownPage] = useState(page);
  const shownPageRef = useRef(page);

  useEffect(() => {
    let isCancelled = false;

    async function transition() {
      onTransitionChange(true);
      const current = shownPageRef.current;
      if (current !== 'Home' && current !== page) {
        await controls.start(getVariant('Home', isCompact));
        if (isCancelled) {
          return;
        }
      }
      shownPageRef.current = page;
      setShownPage(page);
      if (page !== 'Home') {
        await controls.start(getVariant(page, isCompact));
      }
      if (!isCancelled) {
        onTransitionChange(false);
      }
    }

    void transition();
    return () => {
      isCancelled = true;
    };
  }, [page, isCompact, controls, onTransitionChange]);

  return (
    <motion.div
      // Music sits at the bottom of the screen on desktop. Keyed off the
      // shown page, so the class only changes while the panel is hidden.
      className={
        !isCompact && shownPage === 'Music'
          ? 'overlay overlay--bottom'
          : 'overlay'
      }
      variants={OVERLAY_MOTION}
      initial={getVariant('Home', isCompact)}
      animate={controls}
    >
      {shownPage === 'Music' && <Music setPage={setPage} />}
      {shownPage === 'Projects' && <Projects setPage={setPage} />}
      {shownPage === 'About' && <About setPage={setPage} />}
      {shownPage === 'Contact' && <Contact setPage={setPage} />}
    </motion.div>
  );
}

function getVariant(page: PageName, isCompact: boolean): string {
  if (isCompact) {
    return page === 'Home' ? 'hiddenCompact' : 'visibleCompact';
  }
  return OVERLAY_VARIANTS[page];
}
