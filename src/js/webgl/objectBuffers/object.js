export default class RenderObject {
    constructor() {
        this.positionData = gl.createBuffer();
        this.colorData    = gl.createBuffer();
    }

    get buffers() {
        return {
            color:    this.colorData,
            position: this.positionData
        }
    }
}