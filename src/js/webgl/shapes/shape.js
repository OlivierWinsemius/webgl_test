export default class Shape {
    constructor() {
        this.shader = shaders.solid;
        this.positionData = gl.createBuffer();
        this.colorData = Shape.defaultColor;
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
