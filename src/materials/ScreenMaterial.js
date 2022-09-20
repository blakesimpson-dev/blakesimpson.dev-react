import { extend } from '@react-three/fiber'
import * as THREE from 'three'
import { Color, ShaderMaterial } from 'three'
import screenFragmentShader from '../shaders/screen-fragment.glsl'
import screenVertexShader from '../shaders/screen-vertex.glsl'

class ScreenMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: screenVertexShader,
      fragmentShader: screenFragmentShader,
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib['fog'],
        {
          uTime: { value: 0 },
          uMixColor: { value: new Color('#85c7e6') },
        },
      ]),
      fog: true,
    })
  }

  set uTime(value) {
    this.uniforms.utime.value = value
  }

  get uTime() {
    return this.uniforms.uTime.value
  }

  set uMixColor(value) {
    this.uniforms.uMixColor.value = value
  }

  get uMixColor() {
    return this.uniforms.uMixColor.value
  }
}

extend({ ScreenMaterial })
