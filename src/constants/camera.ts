import type {CameraProps} from '@react-three/fiber';

export const CAMERA_FOV = 19;

export const CAMERA: CameraProps = {
  // Matches the glTF camera node the CameraActionNLA* tracks target
  name: 'Camera',
  near: 0.1,
  far: 4,
  fov: CAMERA_FOV,
  position: [-0.0445, 1.022, 0.938],
  rotation: [0, 0, 0],
};
