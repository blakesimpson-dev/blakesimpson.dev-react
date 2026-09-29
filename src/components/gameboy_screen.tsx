import {Html} from '@react-three/drei';
import {useEffect, useState} from 'react';
import type {PageName} from '../constants/pages';
import {GAMEBOY_DELAY, toMs} from '../constants/timing';
import {SITE} from '../content';
import '../styles/gameboy.scss';

interface GameboyScreenProps {
  page: PageName;
}

/** The Gameboy's screen and battery light, lit while Music is open. */
export function GameboyScreen({page}: GameboyScreenProps) {
  const [isScreenOn, setIsScreenOn] = useState(false);

  // Turn the Gameboy screen on once the camera has zoomed in on Music
  useEffect(() => {
    if (page !== 'Music') {
      return;
    }
    const timer = setTimeout(() => {
      setIsScreenOn(true);
    }, toMs(GAMEBOY_DELAY));
    return () => {
      clearTimeout(timer);
      setIsScreenOn(false);
    };
  }, [page]);

  if (!isScreenOn) {
    return null;
  }

  return (
    <>
      <Html
        position={[-0.387, 0.789, 0.0213]}
        rotation={[-Math.PI / 2, 0, 0.26]}
        scale={0.01}
        transform
      >
        <div className="gameboy-screen">
          <div className="gameboy-screen__title">{SITE.gameboy.title}</div>
        </div>
      </Html>
      <Html
        position={[-0.421, 0.789, 0.022]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
        transform
      >
        <div className="battery-light" />
      </Html>
    </>
  );
}
