import Shape from './basicShape';

export default class Rect extends Shape {
    constructor(x = 0, y = 0, width = 0.1, height = 0.1) {
        super();
        this.x = (x * 2) - 1;
        this.y = (y * 2) - 1;
        this.width = width * 2;
        this.height = height * 2;
        this.setVertexPositionData();
        return this;
    }

    setVertexPositionData() {
        this.bindBufferAttribs();
        const positions = [
            this.x + this.width, -this.y - this.height,
            this.x, -this.y - this.height,
            this.x + this.width, -this.y,
            this.x, -this.y,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    }

    setVertexColorData() {
        gl.uniform4fv(this.shader.uniforms.color, this.colorData);
    }

    setColor(r, g, b, a = 1) {
        this.colorData = [r, g, b, a];
        this.setVertexColorData();
        return this;
    }

    setPosition(x, y) {
        this.x = (x * 2) - 1;
        this.y = (y * 2) - 1;
        this.setVertexPositionData();
        return this;
    }

    setSize(width, height) {
        this.width = width * 2;
        this.height = height * 2;
        this.setVertexPositionData();
        return this;
    }

    draw() {
        this.bindBufferAttribs();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
