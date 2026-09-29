import type {Material} from 'three';

export const COLOR_GRADE = {brightness: 0.1, contrast: 0.15};

// postprocessing's BrightnessContrast grades sRGB input, so this runs after the material's linear -> sRGB conversion
export function applyColorGrade(material: Material): void {
  const {brightness, contrast} = COLOR_GRADE;
  const grade = [
    '#include <colorspace_fragment>',
    `gl_FragColor.rgb = (gl_FragColor.rgb + vec3(${glslFloat(brightness - 0.5)}))`,
    `  / vec3(${glslFloat(1 - contrast)}) + vec3(0.5);`,
  ].join('\n');
  material.onBeforeCompile = shader => {
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <colorspace_fragment>',
      grade,
    );
  };
  // Keep graded and ungraded programs apart in three's program cache
  material.customProgramCacheKey = () => 'color-grade';
}

function glslFloat(value: number): string {
  return value.toFixed(4);
}
