import RenderObject from './basicShape';

export default class Rect extends RenderObject {
    constructor(...rest) {
        super(...rest);
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
            this.origin.x + this.width, -this.origin.y - this.height,
            this.origin.x, -this.origin.y - this.height,
            this.origin.x + this.width, -this.origin.y,
            this.origin.x, -this.origin.y,
        ];
    }

    draw() {
        this.bindBuffers();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
