import type {Material} from 'three';

/** The desktop BrightnessContrast effect settings (see scene.tsx). */
export const COLOR_GRADE = {brightness: 0.1, contrast: 0.15};

/**
 * Bakes the desktop brightness/contrast grade into a material, for compact
 * mode where there's no EffectComposer. postprocessing's effect works on sRGB
 * input (it sets inputColorSpace = SRGBColorSpace), so the same maths runs
 * after the material's own linear -> sRGB conversion.
 */
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

/** Formats a number as a GLSL float literal (always with a decimal point). */
function glslFloat(value: number): string {
  return value.toFixed(4);
}
