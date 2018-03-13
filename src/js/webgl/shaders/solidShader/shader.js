export default function(createProgram, createShader) {
    const vertexShader   = createShader(gl, gl.VERTEX_SHADER, require('shaders/solid/vertex.glsl'))
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, require('shaders/solid/fragment.glsl'))
    const program  = createProgram(gl, vertexShader, fragmentShader)
    const uniforms = {
            projectionMatrix: gl.getUniformLocation(program, 'uProjectionMatrix'),
            modelViewMatrix:  gl.getUniformLocation(program, 'uModelViewMatrix')
        }
    const attributes = {
            color:    gl.getAttribLocation(program, 'aVertexColor'),
            position: gl.getAttribLocation(program, 'aVertexPosition')
        }
    return { program, uniforms, attributes }
}