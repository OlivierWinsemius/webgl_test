import RenderObject from './basicShape';

export default class Rect extends RenderObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.setPositionAttributeData();
        return this;
    }

    getTextureCoordinates() {
        return [
            1.0, 1.0,
            1.0, 0.0,
            0.0, 1.0,
            0.0, 0.0,
        ];
    }

    getVertexCoordinates() {
        return [
            this.position.x + this.width, -this.position.y - this.height,
            this.position.x, -this.position.y - this.height,
            this.position.x + this.width, -this.position.y,
            this.position.x, -this.position.y,
        ];
    }

    draw() {
        this.bindBuffers();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
