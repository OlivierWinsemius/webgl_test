import RenderObject from './basicShape';

export default class Plane extends RenderObject {
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
        const { x, y } = this.origin;
        const { width: w, height: h} = this;
        return [
            x + w, -y - h, 0.0,
            x, -y - h, 0.0,
            x + w, -y, 0.0,
            x, -y, 0.0,
        ];
    }

    draw() {
        this.setAttributes();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
