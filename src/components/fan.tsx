import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';
import type {Mesh} from 'three';
import {useSceneAssets} from '../hooks/use_scene_assets';

interface FanProps {
  speed?: number;
}

export function Fan({speed = 8}: FanProps) {
  const fan = useRef<Mesh>(null);
  const {nodes, materials} = useSceneAssets();

  useFrame((state, delta) => {
    if (fan.current) {
      fan.current.rotation.z -= speed * delta;
    }
  });

  return (
    <mesh
      ref={fan}
      geometry={nodes.FanMesh.geometry}
      material={materials.objects}
      position={[0.63934, 1.0817, -0.2041]}
    />
  );
}
