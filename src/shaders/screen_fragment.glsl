
#include <fog_pars_fragment>

uniform float uTime;
uniform vec3 uMixColor;

varying vec2 vUv;

void main()
{
  float aspect = 0.5625;
  float value;

  float rot = radians(45.0);
  mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
  vec2 uv = vec2(vUv.x - 0.5, (vUv.y * aspect));
  vec2 p = m * uv;
  
  vec2 pos = 10.0 * p;
  vec2 rep = fract(pos);
  float dist = 2.0 * min(min(rep.x, 1.0 - rep.x), min(rep.y, 1.0 - rep.y));
  float squareDist = length((floor(pos) + vec2(0.5)) - vec2(5.0));
  
  float edge = sin(uTime - squareDist * 0.5) * 0.5 + 0.5;
  
  edge = (uTime - squareDist * 0.5) * 0.5;
  edge = 2.0 * fract(edge * 0.5);
  
  value = fract (dist * 2.0);
  value = mix(value, 1.0 - value, step(1.0, edge));
  edge = pow(abs(1.0 - edge), 2.0);
  
  value = smoothstep(edge - 0.05, edge, 0.95 * value);
  
  value += squareDist * 0.1;

  gl_FragColor = mix(vec4(1.0, 1.0, 1.0, 1.0), vec4(uMixColor, 1.0), value);
  #include <fog_fragment>
}