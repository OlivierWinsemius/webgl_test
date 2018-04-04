import RenderObject from './basicShape';

export default class Cube extends RenderObject {
    constructor(...rest) {
        super(...rest);
        this.setPositionAttributeData();
    }

    getTextureCoordinates() {
        return [
            0.0, 1.0, 0.0,
            1.0, 1.0, 0.0,
            0.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 1.0,
            1.0, 1.0, 0.0,
            1.0, 1.0, 1.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 1.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 1.0,
            1.0, 0.0, 1.0,
            0.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
        ];
    }

    getVertexCoordinates() {
        return [
            this.origin.x, -this.origin.y - this.height, this.origin.z,
            this.origin.x + this.width, -this.origin.y - this.height, this.origin.z,
            this.origin.x, -this.origin.y, this.origin.z,
            this.origin.x + this.width, -this.origin.y, this.origin.z,
            this.origin.x + this.width, -this.origin.y, this.origin.z + this.depth,
            this.origin.x + this.width, -this.origin.y - this.height, this.origin.z,
            this.origin.x + this.width, -this.origin.y - this.height, this.origin.z + this.depth,
            this.origin.x, -this.origin.y - this.height, this.origin.z,
            this.origin.x, -this.origin.y - this.height, this.origin.z + this.depth,
            this.origin.x, -this.origin.y, this.origin.z,
            this.origin.x, -this.origin.y, this.origin.z + this.depth,
            this.origin.x + this.width, -this.origin.y, this.origin.z + this.depth,
            this.origin.x, -this.origin.y - this.height, this.origin.z + this.depth,
            this.origin.x + this.width, -this.origin.y - this.height, this.origin.z + this.depth,
        ];
    }

    draw() {
        this.setAttributes();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 14);
    }
}
