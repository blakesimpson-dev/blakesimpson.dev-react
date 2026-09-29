import type {ThreeEvent} from '@react-three/fiber';
import {
  BrightnessContrast,
  EffectComposer,
  Outline,
  Select,
  Selection,
} from '@react-three/postprocessing';
import {useEffect, useRef, useState} from 'react';
import type {PageName, SetPage} from '../constants/pages';
import {RENDER_QUALITY} from '../constants/render_quality';
import {SELECTABLE_OBJECTS, STATIC_OBJECTS} from '../constants/scene_objects';
import {
  CAMERA_CROSSFADE,
  CAMERA_TIME_SCALE,
  SELECTION_DELAY_INTRO,
  SELECTION_DELAY_RETURN,
  toMs,
} from '../constants/timing';
import {playIntro, useCameraActions} from '../hooks/use_camera_actions';
import {useSceneAssets} from '../hooks/use_scene_assets';
import {COLOR_GRADE} from '../materials/color_grade';
import {Fan} from './fan';
import {GameboyScreen} from './gameboy_screen';
import {Screen} from './screen';

interface SceneProps {
  page: PageName;
  setPage: SetPage;
  onReady: (isReady: boolean) => void;
}

export function Scene({page, setPage, onReady}: SceneProps) {
  const {nodes, animations, materials, glassMaterial} = useSceneAssets();
  const actions = useCameraActions(animations);

  const [isSelectionEnabled, setIsSelectionEnabled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const previousPage = useRef(page);

  // Assets have loaded once this mounts (it suspends until then)
  useEffect(() => {
    onReady(true);
  }, [onReady]);

  useEffect(() => {
    playIntro(actions.intro);
    const timer = setTimeout(() => {
      setIsSelectionEnabled(true);
    }, toMs(SELECTION_DELAY_INTRO));
    return () => {
      clearTimeout(timer);
    };
  }, [actions]);

  useEffect(() => {
    const from = previousPage.current;
    previousPage.current = page;
    const {intro} = actions;
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (from === 'Home' && page !== 'Home') {
      const action = actions.pages[page];
      action.reset();
      action.timeScale = CAMERA_TIME_SCALE;
      intro.time = intro.getClip().duration;
      intro.crossFadeTo(action, CAMERA_CROSSFADE, false);
      action.play();
      setIsSelectionEnabled(false);
      setHovered(null);
    } else if (from !== 'Home' && page === 'Home') {
      const action = actions.pages[from];
      intro.reset();
      action.time = action.getClip().duration;
      action.paused = false;
      action.timeScale = -CAMERA_TIME_SCALE;
      action.play();
      action.crossFadeTo(intro, CAMERA_CROSSFADE, false);
      timer = setTimeout(() => {
        setIsSelectionEnabled(true);
      }, toMs(SELECTION_DELAY_RETURN));
    }

    return () => {
      clearTimeout(timer);
    };
  }, [page, actions]);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  function handlePointerOver(event: ThreeEvent<PointerEvent>) {
    event.stopPropagation();
    if (isSelectionEnabled) {
      setHovered(event.object.name);
    }
  }

  function handlePointerOut(event: ThreeEvent<PointerEvent>) {
    event.stopPropagation();
    if (isSelectionEnabled) {
      setHovered(null);
    }
  }

  function handleClick(event: ThreeEvent<MouseEvent>) {
    const object = SELECTABLE_OBJECTS.find(
      selectable => selectable.name === event.object.name,
    );
    if (isSelectionEnabled && object) {
      setPage(object.page);
    }
  }

  return (
    <Selection>
      <group>
        <Screen page={page} />
        <Fan />
      </group>
      <group>
        <mesh
          geometry={nodes.MergedRoomMesh.geometry}
          material={materials.room}
        />
        <mesh geometry={nodes.PCGlassMesh.geometry} material={glassMaterial} />
      </group>
      <group
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        {STATIC_OBJECTS.map(object => (
          <mesh
            key={object.name}
            geometry={nodes[object.node].geometry}
            material={materials[object.material]}
          />
        ))}
        {SELECTABLE_OBJECTS.map(object => (
          <Select key={object.name} enabled={hovered === object.name}>
            <mesh
              name={object.name}
              geometry={nodes[object.node].geometry}
              material={materials[object.material]}
            />
          </Select>
        ))}
        <GameboyScreen page={page} />
      </group>
      <EffectComposer multisampling={RENDER_QUALITY.msaa}>
        <Outline
          blur
          edgeStrength={5}
          pulseSpeed={0.5}
          hiddenEdgeColor="#FFFFFF"
        />
        <BrightnessContrast
          brightness={COLOR_GRADE.brightness}
          contrast={COLOR_GRADE.contrast}
        />
      </EffectComposer>
    </Selection>
  );
}
