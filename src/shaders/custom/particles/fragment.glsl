precision mediump float;
precision mediump sampler2D;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uSampler;
uniform float intensity;

void main () {
    vec4 sum = vec4(0.0);
    sum += texture2D(uSampler, vL);
    sum += texture2D(uSampler, vR);
    sum += texture2D(uSampler, vT);
    sum += texture2D(uSampler, vB);
    sum *= 0.25;
    gl_FragColor = sum;
}
