export default function(createProgram, createShader) {
    const vertexShader   = createShader(gl, gl.VERTEX_SHADER, require('shaders/solid/vertex.glsl'))
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, require('shaders/solid/fragment.glsl'))
    const program  = createProgram(gl, vertexShader, fragmentShader)
    const attributes = {
            position: gl.getAttribLocation(program, 'aVertexPosition')
        }
    const uniforms = {
            color:            gl.getUniformLocation(program, 'uColor'),
            projectionMatrix: gl.getUniformLocation(program, 'uProjectionMatrix'),
            modelViewMatrix:  gl.getUniformLocation(program, 'uModelViewMatrix')
        }
    return { program, uniforms, attributes }
}