import type {Transition, Variants} from 'framer-motion';
import {MENU_DELAY_INTRO, MENU_DELAY_RETURN, OVERLAY_DELAY} from './timing';

const SPRING_DEFAULT: Transition = {
  type: 'spring',
  damping: 10,
  mass: 0.375,
  stiffness: 100,
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
    x: 'calc(50vw - 6rem)',
    transition: {...SPRING_DEFAULT, delay: OVERLAY_DELAY},
  },
};
