module.exports = (gl, program) => ({
        vertexColor:    gl.getAttribLocation(program, 'aVertexColor'),
        vertexPosition: gl.getAttribLocation(program, 'aVertexPosition')
})