import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';
import type {Mesh} from 'three';
import {useSceneAssets} from '../hooks/use_scene_assets';

interface FanProps {
  /** Rotation speed in radians per second. */
  speed?: number;
}

/** The PC case fan, spinning continuously. */
export function Fan({speed = 5}: FanProps) {
  const fan = useRef<Mesh>(null);
  const {nodes, bakedObjectsMaterial} = useSceneAssets();

  useFrame((state, delta) => {
    if (fan.current) {
      fan.current.rotation.z -= speed * delta;
    }
  });

  return (
    <mesh
      ref={fan}
      geometry={nodes.FanMesh.geometry}
      material={bakedObjectsMaterial}
      position={[0.63934, 1.0817, -0.2041]}
    />
  );
}
