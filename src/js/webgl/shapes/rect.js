import Shape from './basicShape';

export default class Rect extends Shape {
    constructor(x = 0, y = 0, width = 0.1, height = 0.1) {
        super();
        this.x = (x * 2) - 1;
        this.y = (y * 2) - 1;
        this.width = width * 2;
        this.height = height * 2;

        this.textureCoordinates = [
            1.0, 1.0,
            1.0, 0.0,
            0.0, 1.0,
            0.0, 0.0,
        ];

        this.setVertexPositionData();
        return this;
    }

    setVertexPositionData() {
        if (this.bindAttrib('position')) {
            const positions = [
                this.x + this.width, -this.y - this.height,
                this.x, -this.y - this.height,
                this.x + this.width, -this.y,
                this.x, -this.y,
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        }
    }

    draw() {
        this.bindBuffers();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
