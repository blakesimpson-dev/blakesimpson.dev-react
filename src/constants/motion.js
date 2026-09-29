const SPRING_DEFAULT = {
  type: 'spring',
  damping: 10,
  mass: 0.375,
  stiffness: 100,
}

export const MAIN_MOTION = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}

export const MENU_MOTION = {
  hidden: {
    y: '-100vh',
    transition: {
      ...SPRING_DEFAULT,
    },
  },
  visibleInitial: {
    y: 0,
    transition: {
      ...SPRING_DEFAULT,
      delay: 4.5,
    },
  },
  visible: {
    y: 0,
    transition: {
      ...SPRING_DEFAULT,
      delay: 1.8,
    },
  },
}

export const OVERLAY_MOTION = {
  hidden: {
    y: '-100vh',
    x: '25vw',
  },
  visibleLeft: {
    y: 0,
    x: 0,
    transition: {
      ...SPRING_DEFAULT,
      delay: 2,
    },
  },
  visibleRight: {
    y: 0,
    x: 'calc(50vw - 6rem)',
    transition: {
      ...SPRING_DEFAULT,
      delay: 2,
    },
  },
}
