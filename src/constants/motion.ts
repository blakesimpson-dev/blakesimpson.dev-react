import type {Transition, Variants} from 'framer-motion';
import {
  MENU_DELAY_INTRO,
  MENU_DELAY_RETURN,
  MENU_DELAY_RETURN_COMPACT,
  OVERLAY_DELAY,
  OVERLAY_DELAY_COMPACT,
} from './timing';

const SPRING_DEFAULT: Transition = {
  type: 'spring',
  damping: 10,
  mass: 0.375,
  stiffness: 100,
};

/**
 * SPRING_DEFAULT made ~1.7x faster for compact mode: stiffness x3 with the
 * damping scaled to keep the same damping ratio, so the bounce looks the same.
 */
const SPRING_FAST: Transition = {
  type: 'spring',
  damping: 17,
  mass: 0.375,
  stiffness: 300,
};

export const MAIN_MOTION: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const MENU_MOTION: Variants = {
  hidden: {
    y: '-100vh',
    transition: SPRING_DEFAULT,
  },
  visibleInitial: {
    y: 0,
    transition: {...SPRING_DEFAULT, delay: MENU_DELAY_INTRO},
  },
  visible: {
    y: 0,
    transition: {...SPRING_DEFAULT, delay: MENU_DELAY_RETURN},
  },
  hiddenCompact: {
    y: '-100vh',
    transition: SPRING_FAST,
  },
  visibleCompact: {
    y: 0,
    transition: {...SPRING_FAST, delay: MENU_DELAY_RETURN_COMPACT},
  },
};

export const OVERLAY_MOTION: Variants = {
  hidden: {
    y: '-100vh',
    x: '25vw',
  },
  visibleLeft: {
    y: 0,
    x: 0,
    transition: {...SPRING_DEFAULT, delay: OVERLAY_DELAY},
  },
  visibleRight: {
    y: 0,
    // Right edge 3rem from the screen edge: 100vw - both 3rem margins - the
    // panel's width (overlay.scss)
    x: 'calc(100vw - 6rem - min(50vw, 60rem))',
    transition: {...SPRING_DEFAULT, delay: OVERLAY_DELAY},
  },
  // Compact: full width, dropping straight down
  hiddenCompact: {
    y: '-100vh',
    x: 0,
    transition: SPRING_FAST,
  },
  visibleCompact: {
    y: 0,
    x: 0,
    transition: {...SPRING_FAST, delay: OVERLAY_DELAY_COMPACT},
  },
};
