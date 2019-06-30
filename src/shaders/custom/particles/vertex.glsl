
precision highp float;
attribute vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
void main () {
    vUv = vec2(aVertexPosition.x, aVertexPosition.y) * 0.5 + 0.5;
    vL = vUv - vec2(0.001, 0.0);
    vR = vUv + vec2(0.001, 0.0);
    vT = vUv + vec2(0.0, 0.001);
    vB = vUv - vec2(0.0, 0.001);
    gl_Position = aVertexPosition;
}
