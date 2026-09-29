import type {MeshName} from '../hooks/use_scene_assets';
import type {OverlayPageName} from './pages';

export type BakedMaterial = 'room' | 'objects';

export interface SceneObject {
  name: string;
  node: MeshName;
  material: BakedMaterial;
}

export interface SelectableObject extends SceneObject {
  page: OverlayPageName;
}

export const STATIC_OBJECTS: SceneObject[] = [
  {name: 'Monitor', node: 'MonitorMesh', material: 'objects'},
  {name: 'Mouse', node: 'MouseMesh', material: 'objects'},
  {name: 'Plant', node: 'PlantMesh', material: 'objects'},
  {name: 'PC', node: 'PCMesh', material: 'objects'},
];

export const SELECTABLE_OBJECTS: SelectableObject[] = [
  {name: 'Gameboy', node: 'GameboyMesh', material: 'objects', page: 'Music'},
  {
    name: 'Keyboard',
    node: 'KeyboardMesh',
    material: 'objects',
    page: 'Projects',
  },
  {name: 'Envelope', node: 'EnvelopeMesh', material: 'room', page: 'Contact'},
  {name: 'Coffee', node: 'CoffeeCupMesh', material: 'objects', page: 'About'},
];
