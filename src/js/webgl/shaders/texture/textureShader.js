const vertex = require('../../../../shaders/texture/vertex.glsl');
const fragment = require('../../../../shaders/texture/fragment.glsl');

export default class TextureShader {
    constructor(createProgram, createShader) {
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);
        this.program = createProgram(gl, vertexShader, fragmentShader);
        this.attributes = {
            position: gl.getAttribLocation(this.program, 'aVertexPosition'),
            textureCoord: gl.getAttribLocation(this.program, 'aTextureCoord'),
        };
        this.uniforms = {
            sampler: gl.getUniformLocation(this.program, 'uSampler'),
            modelView: gl.getUniformLocation(this.program, 'uModelViewMatrix'),
            projection: gl.getUniformLocation(this.program, 'uProjectionMatrix'),
        };
    }
}
