const vertex = require('../../../../shaders/solid/vertex.glsl');
const fragment = require('../../../../shaders/solid/fragment.glsl');

export default class SolidShader {
    constructor(createProgram, createShader) {
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);
        this.program = createProgram(gl, vertexShader, fragmentShader);
        this.attributes = {
            position: gl.getAttribLocation(this.program, 'aVertexPosition'),
        };
        this.uniforms = {
            modelView: gl.getUniformLocation(this.program, 'uModelViewMatrix'),
            color: gl.getUniformLocation(this.program, 'uColor'),
        };
    }
}
