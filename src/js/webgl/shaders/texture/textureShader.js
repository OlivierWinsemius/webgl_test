const vertex = require('../../../../shaders/texture/vertex.glsl');
const fragment = require('../../../../shaders/texture/fragment.glsl');

export default (createProgram, createShader) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);
    const program = createProgram(gl, vertexShader, fragmentShader);
    const attributes = {
        position: gl.getAttribLocation(program, 'aVertexPosition'),
        textureCoord: gl.getAttribLocation(program, 'aTextureCoord'),
    };
    const uniforms = {
        sampler: gl.getUniformLocation(program, 'uSampler'),
    };
    return { program, uniforms, attributes };
};
