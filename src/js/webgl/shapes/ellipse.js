import Shape from './basicShape';

export default class Ellipse extends Shape {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.numVertices = 40;

        this.setPositionAttributeData();
        return this;
    }

    getTextureCoordinates() {
        const textureCoordinates = new Array(this.numVertices);
        for (let i = 0; i < this.numVertices; i += 1) {
            const j = (i / this.numVertices) * (Math.PI * 2);
            textureCoordinates[(i * 2) + 0] = 0.5 + (Math.cos(j) / 2);
            textureCoordinates[(i * 2) + 1] = 0.5 - (Math.sin(j) / 2);
        }
        return textureCoordinates;
    }

    getVertexCoordinates() {
        const coordinates = new Array(this.numVertices);
        for (let i = 0; i < this.numVertices; i += 1) {
            const j = (i / this.numVertices) * (Math.PI * 2);
            const w = (Math.cos(j) * (this.width / 2));
            const h = (Math.sin(j) * (this.height / 2));
            coordinates[(i * 2) + 0] = w + this.position.x;
            coordinates[(i * 2) + 1] = h - this.position.y;
        }
        return coordinates;
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
