import {useGLTF, useKTX2, useTexture} from '@react-three/drei';
import {useMemo} from 'react';
import {Mesh, MeshBasicMaterial, SRGBColorSpace} from 'three';
import type {Object3D, Texture} from 'three';
import type {BakedMaterial} from '../constants/scene_objects';
import {applyColorGrade} from '../materials/color_grade';
import {useIsCompact} from './use_is_compact';

const MODEL_PATH = '/models/model.glb';
const BAKED_PATHS = {
  bakedRoom: '/textures/baked_room.jpg',
  bakedObjects: '/textures/baked_objects.jpg',
};
// A 4096² JPG takes ~85 MB of GPU memory with mipmaps (iOS Safari may reload
// the page); these 2048² KTX2 files stay compressed on the GPU, ~3 MB each
const COMPACT_BAKED_PATHS = {
  bakedRoom: '/textures/2048/baked_room.ktx2',
  bakedObjects: '/textures/2048/baked_objects.ktx2',
};
const BOOT_PATH = '/textures/boot.jpg';
const GLASS_COLOR = '#B9ECEE';
const GLASS_OPACITY = 0.005;

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

// Shared textures (useTexture caches by path): configure once, before drei uploads them; another needsUpdate would re-upload
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

function useBakedTextures() {
  return useTexture(BAKED_PATHS);
}

function useCompactBakedTextures() {
  return useKTX2(COMPACT_BAKED_PATHS);
}

function createBakedMaterial(
  map: Texture,
  isGraded: boolean,
): MeshBasicMaterial {
  const material = new MeshBasicMaterial({map});
  if (isGraded) {
    applyColorGrade(material);
  }
  return material;
}

export function useSceneAssets() {
  const isCompact = useIsCompact();
  const gltf = useGLTF(MODEL_PATH);
  const nodes = useMemo(() => getMeshes(gltf.nodes), [gltf.nodes]);
  // Switching modes swaps the whole canvas (home.tsx), so a mounted scene
  // always calls the same one of these
  const baked = (isCompact ? useCompactBakedTextures : useBakedTextures)();
  const boot = useTexture(BOOT_PATH);
  const textures = {...baked, boot};

  configureTexture(textures.bakedRoom, false);
  configureTexture(textures.bakedObjects, false);
  configureTexture(textures.boot, true);
  textures.boot.offset.set(-0.03, -0.015);

  const materials: Record<BakedMaterial, MeshBasicMaterial> = useMemo(
    () => ({
      room: createBakedMaterial(textures.bakedRoom, isCompact),
      objects: createBakedMaterial(textures.bakedObjects, isCompact),
    }),
    [textures.bakedRoom, textures.bakedObjects, isCompact],
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
    materials,
    glassMaterial,
  };
}
