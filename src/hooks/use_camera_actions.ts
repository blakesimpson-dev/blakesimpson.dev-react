import {useAnimations} from '@react-three/drei';
import {useThree} from '@react-three/fiber';
import {useEffect, useMemo} from 'react';
import {LoopOnce} from 'three';
import type {AnimationAction, AnimationClip} from 'three';
import type {OverlayPageName} from '../constants/pages';
import {CAMERA_TIME_SCALE, INTRO_START} from '../constants/timing';

const INTRO_CLIP = 'CameraActionNLA1';

const PAGE_CLIPS: Record<OverlayPageName, string> = {
  Projects: 'CameraActionNLA2',
  Music: 'CameraActionNLA3',
  About: 'CameraActionNLA4',
  Contact: 'CameraActionNLA5',
};

export interface CameraActions {
  intro: AnimationAction;
  pages: Record<OverlayPageName, AnimationAction>;
}

function requireAction(
  actions: Partial<Record<string, AnimationAction | null>>,
  clip: string,
): AnimationAction {
  const action = actions[clip];
  if (!action) {
    throw new Error(`Camera clip ${clip} is missing from the model`);
  }
  return action;
}

// Call once: each call adds its own AnimationMixer to the camera
export function useCameraActions(animations: AnimationClip[]): CameraActions {
  const camera = useThree(state => state.camera);
  const {actions} = useAnimations(animations, camera);

  const cameraActions = useMemo(
    () => ({
      intro: requireAction(actions, INTRO_CLIP),
      pages: {
        Projects: requireAction(actions, PAGE_CLIPS.Projects),
        Music: requireAction(actions, PAGE_CLIPS.Music),
        About: requireAction(actions, PAGE_CLIPS.About),
        Contact: requireAction(actions, PAGE_CLIPS.Contact),
      },
    }),
    [actions],
  );

  useEffect(() => {
    const {intro, pages} = cameraActions;
    for (const action of [intro, ...Object.values(pages)]) {
      action.zeroSlopeAtEnd = false;
      action.zeroSlopeAtStart = false;
      action.clampWhenFinished = true;
      action.setLoop(LoopOnce, 1);
    }
  }, [cameraActions]);

  return cameraActions;
}

export function playIntro(intro: AnimationAction): void {
  intro.timeScale = CAMERA_TIME_SCALE;
  intro.play().startAt(INTRO_START);
}
