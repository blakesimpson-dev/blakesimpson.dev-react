import {useFrame} from '@react-three/fiber';
import React, {useRef} from 'react';
import {useSceneAssets} from '../hooks/use_scene_assets';

const Fan = ({speed = 5}) => {
  const fanMesh = useRef();
  const {nodes, bakedObjectsMaterial} = useSceneAssets();

  useFrame((state, delta) => {
    fanMesh.current.rotation.z -= speed * delta;
  });

  return (
    <mesh
      ref={fanMesh}
      geometry={nodes.FanMesh.geometry}
      material={bakedObjectsMaterial}
      position={[0.63934, 1.0817, -0.2041]}
    />
  );
};

Fan.displayName = 'Fan';

export default Fan;
