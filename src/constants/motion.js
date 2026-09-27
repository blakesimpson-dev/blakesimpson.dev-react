const springDefault = {
  type: 'spring',
  damping: 10,
  mass: 0.375,
  stiffness: 100,
}

export const mainMotion = {
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

export const menuMotion = {
  hidden: {
    y: '-100vh',
    transition: {
      ...springDefault,
    },
  },
  visibleInitial: {
    y: 0,
    transition: {
      ...springDefault,
      delay: 4.5,
    },
  },
  visible: {
    y: 0,
    transition: {
      ...springDefault,
      delay: 1.8,
    },
  },
}

export const overlayMotion = {
  hidden: {
    y: '-100vh',
    x: '25vw',
  },
  visibleLeft: {
    y: 0,
    x: 0,
    transition: {
      ...springDefault,
      delay: 2,
    },
  },
  visibleRight: {
    y: 0,
    x: 'calc(50vw - 6rem)',
    transition: {
      ...springDefault,
      delay: 2,
    },
  },
}
