import Shape from './basicShape';

export default class Ellipse extends Shape {
    constructor(x = 0, y = 0, width = 0.1, height = 0.1) {
        super();

        this.numVertices = 40;
        this.x = (x * 2) - 1;
        this.y = (y * 2) - 1;
        this.width = width * 2;
        this.height = height * 2;

        this.textureCoordinates = new Array(this.numVertices);
        for (let i = 0; i < this.numVertices; i += 1) {
            const j = (i / this.numVertices) * (Math.PI * 2);
            this.textureCoordinates[(i * 2) + 0] = 0.5 + (Math.cos(j) / 2);
            this.textureCoordinates[(i * 2) + 1] = 0.5 - (Math.sin(j) / 2);
        }

        this.setVertexPositionData();
        return this;
    }

    setVertexPositionData() {
        if (this.bindAttrib('position')) {
            const positions = new Array(this.numVertices);
            for (let i = 0; i < this.numVertices; i += 1) {
                const j = (i / this.numVertices) * (Math.PI * 2);
                const width = (Math.cos(j) * (this.width / 2));
                const height = (Math.sin(j) * (this.height / 2));
                positions[(i * 2) + 0] = width + this.x;
                positions[(i * 2) + 1] = height - this.y;
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        }
    }

    setResolution(numVertices) {
        this.numVertices = numVertices;
        this.setVertexPositionData();
        return this;
    }

    draw() {
        this.bindBuffers();
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.numVertices);
    }
}
