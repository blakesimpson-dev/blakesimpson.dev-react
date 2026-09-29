import {useAnimations} from '@react-three/drei';
import {useThree} from '@react-three/fiber';
import {useEffect} from 'react';
import * as THREE from 'three';

// Binds the model's CameraActionNLA* clips to the r3f camera. Call once (in
// Scene): each call creates its own AnimationMixer on the camera.
export const useCameraActions = animations => {
  const camera = useThree(state => state.camera);
  const {actions} = useAnimations(animations, camera);

  useEffect(() => {
    Object.values(actions).forEach(action => {
      action.zeroSlopeAtEnd = false;
      action.zeroSlopeAtStart = false;
      action.clampWhenFinished = true;
      action.setLoop(THREE.LoopOnce);
    });
  }, [actions]);

  return actions;
};

export default useCameraActions;
