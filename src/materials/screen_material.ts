import {extend} from '@react-three/fiber';
import type {ThreeElement} from '@react-three/fiber';
import {
  Color,
  LinearSRGBColorSpace,
  ShaderMaterial,
  UniformsLib,
  UniformsUtils,
} from 'three';
import type {IUniform} from 'three';
import screenFragmentShader from '../shaders/screen_fragment.glsl?raw';
import screenVertexShader from '../shaders/screen_vertex.glsl?raw';

// Raw (unconverted) value, matching how r141 passed it to the shader
const SCREEN_MIX_COLOR = new Color().setHex(0x85c7e6, LinearSRGBColorSpace);

interface ScreenUniforms {
  uTime: IUniform<number>;
  uMixColor: IUniform<Color>;
}

/** The monitor's animated GLSL screen, used in JSX as <screenMaterial>. */
export class ScreenMaterial extends ShaderMaterial {
  private readonly screenUniforms: ScreenUniforms;

  constructor() {
    const screenUniforms: ScreenUniforms = {
      uTime: {value: 0},
      uMixColor: {value: SCREEN_MIX_COLOR.clone()},
    };
    super({
      vertexShader: screenVertexShader,
      fragmentShader: screenFragmentShader,
      uniforms: {...UniformsUtils.clone(UniformsLib.fog), ...screenUniforms},
      fog: true,
    });
    this.screenUniforms = screenUniforms;
  }

  /** Elapsed time in seconds, driving the shader animation. */
  get uTime(): number {
    return this.screenUniforms.uTime.value;
  }

  set uTime(value: number) {
    this.screenUniforms.uTime.value = value;
  }
}

extend({ScreenMaterial});

declare module '@react-three/fiber' {
  interface ThreeElements {
    screenMaterial: ThreeElement<typeof ScreenMaterial>;
  }
}
