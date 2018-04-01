import RenderObject from './basicShape';

export default class Rect extends RenderObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);

        this.textureCoordinates = [
            1.0, 1.0,
            1.0, 0.0,
            0.0, 1.0,
            0.0, 0.0,
        ];

        this.setPositionAttributeData();
        return this;
    }

    setVertexCoordinates() {
        this.vertexCoordinates = [
            this.position.x + this.width, -this.position.y - this.height,
            this.position.x, -this.position.y - this.height,
            this.position.x + this.width, -this.position.y,
            this.position.x, -this.position.y,
        ];
    }

    setPositionAttributeData() {
        if (this.bindAttrib('position')) {
            this.setVertexCoordinates();
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(this.vertexCoordinates),
                gl.STATIC_DRAW,
            );
        }
    }

    draw() {
        this.bindBuffers();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
