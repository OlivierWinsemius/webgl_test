export default class RenderObject {
    constructor() {
        this.shader = shaders.solid;
        this.positionData = gl.createBuffer();
        this.colorData = [0, 0, 0, 1];
        gl.useProgram(this.shader.program);
    }

    bindBufferAttribs() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData);
        gl.enableVertexAttribArray(this.shader.attributes.position);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData);
        gl.uniform4fv(this.shader.uniforms.color, this.colorData);
        gl.vertexAttribPointer(this.shader.attributes.position, 2, gl.FLOAT, false, 0, 0);
    }

    get buffers() {
        return {
            color: this.colorData,
            position: this.positionData,
        };
    }
}
