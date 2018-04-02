attribute vec4 aVertexPosition;
uniform mat4   uModelViewMatrix;
uniform vec4   uColor;

varying lowp vec4 vColor;

void main() {
    gl_Position = uModelViewMatrix * aVertexPosition;
    vColor      = uColor;
}
