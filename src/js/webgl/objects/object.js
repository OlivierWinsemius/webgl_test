export default class RenderObject {
    constructor() {
        this.shader         = shaders.solid
        this.positionData   = gl.createBuffer()
        this.colorData      = [0, 0, 0, 1]
        
        gl.enableVertexAttribArray(this.shader.attributes.position)
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData)
        gl.vertexAttribPointer(this.shader.attributes.position, 2, gl.FLOAT, false, 0, 0)
        
        gl.useProgram(this.shader.program)
        gl.uniform4fv(this.shader.uniforms.color, this.colorData)
    }

    get buffers() {
        return {
            color:    this.colorData,
            position: this.positionData
        }
    }
}