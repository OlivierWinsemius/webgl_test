export default class RenderObject {
    constructor() {
        const defaultShader = programInfo.shaders.uniform;
        this.positionData   = gl.createBuffer();
        this.colorData      = gl.createBuffer();

        gl.enableVertexAttribArray(defaultShader.attributes.position);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData);
        gl.vertexAttribPointer(defaultShader.attributes.position, 2, gl.FLOAT, false, 0, 0);
            
        gl.enableVertexAttribArray(defaultShader.attributes.color);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorData);
        gl.vertexAttribPointer(defaultShader.attributes.color, 4, gl.FLOAT, false, 0, 0);
    };

    get buffers() {
        return {
            color:    this.colorData,
            position: this.positionData
        }
    };
}