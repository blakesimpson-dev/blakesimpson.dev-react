import {motion, useAnimationControls} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {MENU_MOTION} from '../constants/motion';
import {OVERLAY_PAGES, PAGES} from '../constants/pages';
import type {PageName, SetPage} from '../constants/pages';
import {SITE} from '../content';
import {useIsShortViewport} from '../hooks/use_is_compact';
import '../styles/menu.scss';

interface MenuProps {
  page: PageName;
  setPage: SetPage;
  /** Compact: a hamburger menu that stays visible on every page. */
  isCompact: boolean;
  /** Blocks navigation while the page panel is sliding. */
  isNavDisabled: boolean;
}

/**
 * Site title and page navigation. On desktop it shows page buttons and hides
 * while a page is open (the desk objects are the other way in). Compact mode
 * uses a hamburger menu and stays visible, except on short (landscape)
 * screens, where it hides like desktop to give the page the room; the page's
 * close button brings it back.
 */
export function Menu({page, setPage, isCompact, isNavDisabled}: MenuProps) {
  const controls = useAnimationControls();
  // First reveal waits for the intro camera move; later ones are quicker
  const isFirstReveal = useRef(true);
  const isShort = useIsShortViewport();
  const hidesOnPages = !isCompact || isShort;

  useEffect(() => {
    if (page !== 'Home' && hidesOnPages) {
      void controls.start(isCompact ? 'hiddenCompact' : 'hidden');
    } else if (isFirstReveal.current) {
      void controls.start('visibleInitial').then(() => {
        isFirstReveal.current = false;
      });
    } else {
      void controls.start(isCompact ? 'visibleCompact' : 'visible');
    }
  }, [page, isCompact, hidesOnPages, controls]);

  return (
    <motion.div
      className="menu"
      variants={MENU_MOTION}
      initial="hidden"
      animate={controls}
    >
      <div className="menu__title">
        <div>{SITE.menu.title}</div>
        {!isCompact && <div>{SITE.menu.subtitle}</div>}
      </div>
      {isCompact ? (
        <HamburgerNav
          page={page}
          setPage={setPage}
          isDisabled={isNavDisabled}
        />
      ) : (
        <div className="menu__buttons">
          {OVERLAY_PAGES.map(overlayPage => (
            <button
              key={overlayPage}
              disabled={isNavDisabled}
              onClick={() => {
                setPage(overlayPage);
              }}
            >
              {overlayPage}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

interface HamburgerNavProps {
  page: PageName;
  setPage: SetPage;
  isDisabled: boolean;
}

/** Compact navigation: a bars button opening a list of every page. */
function HamburgerNav({page, setPage, isDisabled}: HamburgerNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRef<HTMLDivElement>(null);
  const isListShown = isOpen && !isDisabled;

  // Close when tapping anywhere outside the menu
  useEffect(() => {
    if (!isListShown) {
      return;
    }
    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !nav.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isListShown]);

  return (
    <div className="menu__nav" ref={nav}>
      <button
        type="button"
        className="menu__nav-toggle"
        aria-label="Menu"
        aria-expanded={isListShown}
        disabled={isDisabled}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isListShown ? <FaTimes /> : <FaBars />}
      </button>
      {isListShown && (
        <ul className="menu__nav-list">
          {PAGES.map(name => (
            <li key={name}>
              <button
                type="button"
                aria-current={name === page ? 'page' : undefined}
                onClick={() => {
                  setIsOpen(false);
                  setPage(name);
                }}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
