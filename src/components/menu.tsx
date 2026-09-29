import {motion, useAnimationControls} from 'framer-motion';
import {useEffect, useRef} from 'react';
import {MENU_MOTION} from '../constants/motion';
import {OVERLAY_PAGES} from '../constants/pages';
import type {PageName, SetPage} from '../constants/pages';
import {SITE} from '../content';
import '../styles/menu.scss';

interface MenuProps {
  page: PageName;
  setPage: SetPage;
}

/** Site title and page buttons, shown only on Home. */
export function Menu({page, setPage}: MenuProps) {
  const controls = useAnimationControls();
  // First reveal waits for the intro camera move; later ones are quicker
  const isFirstReveal = useRef(true);

  useEffect(() => {
    if (page !== 'Home') {
      void controls.start('hidden');
    } else if (isFirstReveal.current) {
      void controls.start('visibleInitial').then(() => {
        isFirstReveal.current = false;
      });
    } else {
      void controls.start('visible');
    }
  }, [page, controls]);

  return (
    <motion.div
      className="menu"
      variants={MENU_MOTION}
      initial="hidden"
      animate={controls}
    >
      <div className="menu__title">
        <div>{SITE.menu.title}</div>
        <div>{SITE.menu.subtitle}</div>
      </div>
      <div className="menu__buttons">
        {OVERLAY_PAGES.map(overlayPage => (
          <button
            key={overlayPage}
            onClick={() => {
              setPage(overlayPage);
            }}
          >
            {overlayPage}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
