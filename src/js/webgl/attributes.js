module.exports = (gl, program) => ({
        color:    gl.getAttribLocation(program, 'aVertexColor'),
        position: gl.getAttribLocation(program, 'aVertexPosition')
})