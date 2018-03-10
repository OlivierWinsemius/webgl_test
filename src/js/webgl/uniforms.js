module.exports = (gl, program) => ({
        projectionMatrix: gl.getUniformLocation(program, 'uProjectionMatrix'),
        modelViewMatrix:  gl.getUniformLocation(program, 'uModelViewMatrix')
    });