import {extend} from '@react-three/fiber';
import * as THREE from 'three';
import {Color, ShaderMaterial} from 'three';
import screenFragmentShader from '../shaders/screen-fragment.glsl?raw';
import screenVertexShader from '../shaders/screen-vertex.glsl?raw';

class ScreenMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: screenVertexShader,
      fragmentShader: screenFragmentShader,
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib['fog'],
        {
          uTime: {value: 0},
          // Raw (unconverted) value, matching how r141 passed it to the shader
          uMixColor: {
            value: new Color().setHex(0x85c7e6, THREE.LinearSRGBColorSpace),
          },
        },
      ]),
      fog: true,
    });
  }

  set uTime(value) {
    this.uniforms.uTime.value = value;
  }

  get uTime() {
    return this.uniforms.uTime.value;
  }

  set uMixColor(value) {
    this.uniforms.uMixColor.value = value;
  }

  get uMixColor() {
    return this.uniforms.uMixColor.value;
  }
}

extend({ScreenMaterial});
