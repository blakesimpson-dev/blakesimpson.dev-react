import {Html} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {useEffect, useRef, useState} from 'react';
import {Color, LinearSRGBColorSpace} from 'three';
import type {PageName} from '../constants/pages';
import {
  SCREEN_DELAY_INTRO,
  SCREEN_DELAY_RETURN,
  toMs,
} from '../constants/timing';
import {SCREEN_ITEMS} from '../content';
import {useSceneAssets} from '../hooks/use_scene_assets';
import {useVideo} from '../hooks/use_video';
import type {ScreenMaterial} from '../materials/screen_material';
import '../materials/screen_material';
import '../styles/screen.scss';
import {Dropdown} from './dropdown';
import {Markdown} from './markdown';

// Unconverted, as r141 applied '#AAAAAA'
const VIDEO_TINT = new Color().setHex(0xaaaaaa, LinearSRGBColorSpace);

interface ScreenProps {
  page: PageName;
  isBackdrop?: boolean;
}

export function Screen({page, isBackdrop = false}: ScreenProps) {
  const shaderMaterial = useRef<ScreenMaterial>(null);
  const hasBooted = useRef(false);
  const {nodes, bootTexture} = useSceneAssets();
  const {video, resetVideo, changeVideoSource} = useVideo();
  const [isScreenOn, setIsScreenOn] = useState(false);
  const [selectedId, setSelectedId] = useState(SCREEN_ITEMS[0].id);
  const screenItem =
    SCREEN_ITEMS.find(item => item.id === selectedId) ?? SCREEN_ITEMS[0];

  useEffect(() => {
    if (screenItem.url !== undefined) {
      resetVideo();
      changeVideoSource(screenItem.url);
    }
  }, [screenItem, resetVideo, changeVideoSource]);

  useEffect(() => {
    if (page !== 'Home') {
      return;
    }
    const delay = hasBooted.current ? SCREEN_DELAY_RETURN : SCREEN_DELAY_INTRO;
    const timer = setTimeout(() => {
      hasBooted.current = true;
      setIsScreenOn(true);
    }, toMs(delay));
    return () => {
      clearTimeout(timer);
      setIsScreenOn(false);
    };
  }, [page]);

  // Only mounted while the shader item is showing
  useFrame(state => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <>
      {!isBackdrop && (
        <Html
          position={[-0.044494, 1.02884, -0.091586]}
          scale={[0.0201, 0.02, 1]}
          rotation={[0, 0, 0]}
          transform
        >
          {isScreenOn && (
            <div className="screen">
              <div className="screen__title--one">
                Now Playing:&nbsp;
                <span style={{color: '#1f2523'}}>{screenItem.name}</span>
              </div>
              <Dropdown
                headerContent="File"
                items={SCREEN_ITEMS}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
              <div className="screen__spacer--one" />
              <div className="screen__title--two">Details</div>
              <div className="screen__details">
                <Markdown text={screenItem.details} />
              </div>
              <div className="screen__spacer--two" />
              <div className="screen__taskbar">
                <div>Now Playing</div>
                <div>Details</div>
              </div>
            </div>
          )}
        </Html>
      )}
      <mesh
        geometry={nodes.ScreenMesh.geometry}
        scale={[-1, 1, 1]}
        position={[-0.089, 0, 0]}
      >
        {isScreenOn && screenItem.url === undefined && (
          <screenMaterial ref={shaderMaterial} attach="material" />
        )}
        {isScreenOn && screenItem.url !== undefined && (
          <meshBasicMaterial attach="material" color={VIDEO_TINT}>
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
        )}
        {!isScreenOn && (
          <meshBasicMaterial attach="material" map={bootTexture} />
        )}
      </mesh>
    </>
  );
}
