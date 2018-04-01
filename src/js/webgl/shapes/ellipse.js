import Shape from './basicShape';

export default class Ellipse extends Shape {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.numVertices = 40;

        this.textureCoordinates = new Array(this.numVertices);
        for (let i = 0; i < this.numVertices; i += 1) {
            const j = (i / this.numVertices) * (Math.PI * 2);
            this.textureCoordinates[(i * 2) + 0] = 0.5 + (Math.cos(j) / 2);
            this.textureCoordinates[(i * 2) + 1] = 0.5 - (Math.sin(j) / 2);
        }

        this.vertexCoordinates = new Array(this.numVertices);
        this.setPositionAttributeData();
        return this;
    }

    setVertexCoordinates() {
        for (let i = 0; i < this.numVertices; i += 1) {
            const j = (i / this.numVertices) * (Math.PI * 2);
            const w = (Math.cos(j) * (this.width / 2));
            const h = (Math.sin(j) * (this.height / 2));
            this.vertexCoordinates[(i * 2) + 0] = w + this.position.x;
            this.vertexCoordinates[(i * 2) + 1] = h - this.position.y;
        }
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
