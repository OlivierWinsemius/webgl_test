import RenderObject from './basicShape';

export default class Rect extends RenderObject {
    constructor(...rest) {
        super(...rest);
        this.setPositionAttributeData();
    }

    getTextureCoordinates() {
        return [
            1.0, 1.0, 0.0,
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 0.0,
        ];
    }

    getVertexCoordinates() {
        return [
            this.origin.x + this.width, -this.origin.y - this.height, 0.0,
            this.origin.x, -this.origin.y - this.height, 0.0,
            this.origin.x + this.width, -this.origin.y, 0.0,
            this.origin.x, -this.origin.y, 0.0,
        ];
    }

    draw() {
        this.setAttributes();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
