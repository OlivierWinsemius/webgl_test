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
        const { x, y, z } = this.origin;
        const { width: w, height: h, depth: d } = this;

        return [
            x + 0, -y - h, z + 0,
            x + w, -y - h, z + 0,
            x + 0, -y + 0, z + 0,
            x + w, -y + 0, z + 0,
            x + w, -y + 0, z + d,
            x + w, -y - h, z + 0,
            x + w, -y - h, z + d,
            x + 0, -y - h, z + 0,
            x + 0, -y - h, z + d,
            x + 0, -y + 0, z + 0,
            x + 0, -y + 0, z + d,
            x + w, -y + 0, z + d,
            x + 0, -y - h, z + d,
            x + w, -y - h, z + d,
        ];
    }

    draw() {
        this.setAttributes();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 14);
    }
}
