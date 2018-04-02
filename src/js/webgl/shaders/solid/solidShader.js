const vertex = require('../../../../shaders/solid/vertex.glsl');
const fragment = require('../../../../shaders/solid/fragment.glsl');

export default (createProgram, createShader) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);
    const program = createProgram(gl, vertexShader, fragmentShader);
    const attributes = {
        position: gl.getAttribLocation(program, 'aVertexPosition'),
    };
    const uniforms = {
        modelView: gl.getUniformLocation(program, 'uModelViewMatrix'),
        color: gl.getUniformLocation(program, 'uColor'),
    };
    return { program, uniforms, attributes };
};
