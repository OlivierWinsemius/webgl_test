import Shape from './basicShape';

export default class Sphere extends Shape {
    constructor(...rest) {
        super(...rest);
        this.numVertices = 40;
        this.setPositionAttributeData();
        return this;
    }

    getTextureCoordinates() {
        const textureCoordinates = new Array(this.numVertices);
        for (let i = 0; i < this.numVertices; i += 1) {
            const j = (i / this.numVertices) * (Math.PI * 2);
            textureCoordinates[(i * 3) + 0] = 0.5 + (Math.cos(j) / 2);
            textureCoordinates[(i * 3) + 1] = 0.5 - (Math.sin(j) / 2);
            textureCoordinates[(i * 3) + 2] = 0;
        }
        return textureCoordinates;
    }

    getVertexCoordinates() {
        const coordinates = new Array(this.numVertices);
        for (let i = 0; i < this.numVertices; i += 1) {
            const j = (i / this.numVertices) * (Math.PI * 2);
            const w = (Math.cos(j) * (this.width / 2)) + (this.width * 0.5);
            const h = (Math.sin(j) * (this.height / 2)) - (this.height * 0.5);
            coordinates[(i * 3) + 0] = w + this.origin.x;
            coordinates[(i * 3) + 1] = h - this.origin.y;
            coordinates[(i * 3) + 2] = 0;
        }
        return coordinates;
    }

    setResolution(numVertices) {
        this.numVertices = numVertices;
        this.setPositionAttributeData();
        return this;
    }

    draw() {
        this.setAttributes();
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.numVertices);
    }
}
