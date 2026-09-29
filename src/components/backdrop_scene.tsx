import {useThree} from '@react-three/fiber';
import {useEffect} from 'react';
import {PerspectiveCamera} from 'three';
import {CAMERA_FOV} from '../constants/camera';
import {SELECTABLE_OBJECTS, STATIC_OBJECTS} from '../constants/scene_objects';
import {playIntro, useCameraActions} from '../hooks/use_camera_actions';
import {useSceneAssets} from '../hooks/use_scene_assets';
import {Fan} from './fan';
import {Screen} from './screen';

// View bounds as tangents from the camera's centre line at the Home pose, measured by eye
const FRAMING = {
  left: -0.25,
  right: 0.225,
  centerY: -0.01,
  // The open top of the room starts ~0.30; the compact menu covers the rest
  maxTop: 0.34,
  minBottom: -0.5,
};

const DESK_OBJECTS = [...STATIC_OBJECTS, ...SELECTABLE_OBJECTS];

interface BackdropSceneProps {
  onReady: (isReady: boolean) => void;
}

export function BackdropScene({onReady}: BackdropSceneProps) {
  const {nodes, animations, materials} = useSceneAssets();
  const actions = useCameraActions(animations);
  useBackdropFraming();

  // Assets have loaded once this mounts (it suspends until then)
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

// Frames the desk with a view offset, so the camera clips (translation/rotation only) are untouched
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

    // Symmetric frustum containing the window; the view offset renders just the window
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
  const minHeight = 2 * Math.tan(toRadians(CAMERA_FOV / 2));
  const height = Math.max((right - left) / aspect, minHeight);
  const top = Math.min(centerY + height / 2, maxTop);
  // Too tall for the bounds: crop the sides instead
  const bottom = Math.max(top - height, minBottom);
  return {top, bottom, centerX: (left + right) / 2};
}

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}
