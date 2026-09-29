import {useThree} from '@react-three/fiber';
import {useEffect} from 'react';
import {PerspectiveCamera} from 'three';
import {CAMERA_FOV} from '../constants/camera';
import {SELECTABLE_OBJECTS, STATIC_OBJECTS} from '../constants/scene_objects';
import {playIntro, useCameraActions} from '../hooks/use_camera_actions';
import {useSceneAssets} from '../hooks/use_scene_assets';
import {Fan} from './fan';
import {Screen} from './screen';

/**
 * Where to point the backdrop view, in view-space tangents from the camera's
 * centre line at the Home pose (x right, y up; tan of the angle). Measured
 * from a portrait screenshot; adjust by eye.
 */
const FRAMING = {
  /** Monitor's left edge and the PC's right edge: kept in view if possible. */
  left: -0.25,
  right: 0.225,
  /** Middle of the desk: the vertical centre when there's room to spare. */
  centerY: -0.01,
  /**
   * Highest point shown. The open top of the room (no ceiling) starts at
   * ~0.30 in the back corner; the few percent above that sit behind the
   * compact menu, over the dark clear colour.
   */
  maxTop: 0.34,
  /** Lowest point shown: lower shows more empty floor. */
  minBottom: -0.5,
};

/** Every desk object; in the backdrop none of them are interactive. */
const DESK_OBJECTS = [...STATIC_OBJECTS, ...SELECTABLE_OBJECTS];

interface BackdropSceneProps {
  /** Called once the scene's assets have loaded and it has mounted. */
  onReady: (isReady: boolean) => void;
}

/**
 * Compact mode: the desk as a non-interactive backdrop. Plays the intro
 * camera move and stays on the Home view; no outline, glass or DOM screens.
 */
export function BackdropScene({onReady}: BackdropSceneProps) {
  const {nodes, animations, materials} = useSceneAssets();
  const actions = useCameraActions(animations);
  useBackdropFraming();

  // Assets have loaded once the scene mounts (it suspends until then)
  useEffect(() => {
    onReady(true);
  }, [onReady]);

  useEffect(() => {
    playIntro(actions.intro);
  }, [actions]);

  return (
    <>
      <mesh
        geometry={nodes.MergedRoomMesh.geometry}
        material={materials.room}
      />
      {DESK_OBJECTS.map(object => (
        <mesh
          key={object.name}
          geometry={nodes[object.node].geometry}
          material={materials[object.material]}
        />
      ))}
      <Fan />
      <Screen page="Home" isBackdrop />
    </>
  );
}

interface ViewWindow {
  top: number;
  bottom: number;
  centerX: number;
}

/**
 * Fills the screen with the desk on any aspect ratio: a view window sized to
 * the monitor-to-PC span, kept below the top of the walls and above the edge
 * of the floor, cropping the sides when it can't fit. Applied with a camera
 * view offset, so the camera clips (translation/rotation only) are untouched.
 */
function useBackdropFraming() {
  const camera = useThree(state => state.camera);
  const aspect = useThree(state => state.size.width / state.size.height);
  const invalidate = useThree(state => state.invalidate);

  useEffect(() => {
    if (!(camera instanceof PerspectiveCamera)) {
      return;
    }
    const {top, bottom, centerX} = frameDesk(aspect);
    const height = top - bottom;
    const width = height * aspect;

    // A frustum symmetric about the centre line, large enough to contain the
    // window; the view offset then renders just the window
    const halfHeight = Math.max(Math.abs(top), Math.abs(bottom));
    const halfWidth = halfHeight * aspect;
    camera.fov = toDegrees(2 * Math.atan(halfHeight));
    camera.setViewOffset(
      2 * halfWidth,
      2 * halfHeight,
      centerX - width / 2 + halfWidth,
      halfHeight - top,
      width,
      height,
    );
    invalidate();

    return () => {
      camera.clearViewOffset();
    };
  }, [camera, aspect, invalidate]);
}

function frameDesk(aspect: number): ViewWindow {
  const {left, right, centerY, maxTop, minBottom} = FRAMING;
  // Never zoom in further than the desktop view
  const minHeight = 2 * Math.tan(toRadians(CAMERA_FOV / 2));
  const height = Math.max((right - left) / aspect, minHeight);
  const top = Math.min(centerY + height / 2, maxTop);
  // Too tall to fit between maxTop and minBottom: crop the sides instead
  const bottom = Math.max(top - height, minBottom);
  return {top, bottom, centerX: (left + right) / 2};
}

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}
