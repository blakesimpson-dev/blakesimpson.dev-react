import {useGLTF, useTexture} from '@react-three/drei';
import {useMemo} from 'react';
import {Mesh, MeshBasicMaterial, SRGBColorSpace} from 'three';
import type {Object3D, Texture} from 'three';

const MODEL_PATH = '/models/model.glb';
const TEXTURE_PATHS = {
  bakedRoom: '/textures/baked_room.jpg',
  bakedObjects: '/textures/baked_objects.jpg',
  boot: '/textures/boot.jpg',
};
const GLASS_COLOR = '#B9ECEE';
const GLASS_OPACITY = 0.005;

/** Mesh node names in public/models/model.glb. */
const MESH_NAMES = [
  'CoffeeCupMesh',
  'EnvelopeMesh',
  'FanMesh',
  'GameboyMesh',
  'KeyboardMesh',
  'MergedRoomMesh',
  'MonitorMesh',
  'MouseMesh',
  'PCGlassMesh',
  'PCMesh',
  'PlantMesh',
  'ScreenMesh',
] as const;

export type MeshName = (typeof MESH_NAMES)[number];

/** Picks the model's meshes out of the loaded nodes, failing on a mismatch. */
function getMeshes(nodes: Record<string, Object3D>): Record<MeshName, Mesh> {
  const entries = MESH_NAMES.map(name => {
    const node = nodes[name];
    if (!(node instanceof Mesh)) {
      throw new Error(`Mesh ${name} is missing from ${MODEL_PATH}`);
    }
    return [name, node] as const;
  });
  // Every MeshName was checked above
  return Object.fromEntries(entries) as Record<MeshName, Mesh>;
}

// Textures are shared by every caller (useTexture caches by path). Configure
// each one once, during the first render and before drei uploads it to the
// GPU; setting needsUpdate again later would upload it again.
const configuredTextures = new WeakSet<Texture>();

function configureTexture(texture: Texture, flipY: boolean): void {
  if (configuredTextures.has(texture)) {
    return;
  }
  configuredTextures.add(texture);
  texture.flipY = flipY;
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
}

/**
 * Loads the baked room model and its textures. useGLTF/useTexture cache by
 * path, so every component calling this shares one load of each asset.
 */
export function useSceneAssets() {
  const gltf = useGLTF(MODEL_PATH);
  const nodes = useMemo(() => getMeshes(gltf.nodes), [gltf.nodes]);
  const textures = useTexture(TEXTURE_PATHS);

  configureTexture(textures.bakedRoom, false);
  configureTexture(textures.bakedObjects, false);
  configureTexture(textures.boot, true);
  textures.boot.offset.set(-0.03, -0.015);

  const bakedRoomMaterial = useMemo(
    () => new MeshBasicMaterial({map: textures.bakedRoom}),
    [textures.bakedRoom],
  );
  const bakedObjectsMaterial = useMemo(
    () => new MeshBasicMaterial({map: textures.bakedObjects}),
    [textures.bakedObjects],
  );
  const glassMaterial = useMemo(
    () =>
      new MeshBasicMaterial({
        color: GLASS_COLOR,
        transparent: true,
        opacity: GLASS_OPACITY,
      }),
    [],
  );

  return {
    nodes,
    animations: gltf.animations,
    bootTexture: textures.boot,
    bakedRoomMaterial,
    bakedObjectsMaterial,
    glassMaterial,
  };
}
