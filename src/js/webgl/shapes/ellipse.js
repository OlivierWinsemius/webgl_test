import Shape from './basicShape';

export default class Ellipse extends Shape {
    constructor(x = 0, y = 0, width = 0.1, height = 0.1) {
        super();
        this.numVertices = 40;
        this.x = (x * 2) - 1;
        this.y = (y * 2) - 1;
        this.width = width;
        this.height = height;
        this.setVertexPositionData();
        return this;
    }

    setTexture(texture) {
        gl.activeTexture(gl.TEXTURE);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        this.samplerUniformData = 0;

        if (this.setUniform('sampler')) {
            const textureCoordinates = new Array(this.numVertices);
            for (let i = 0; i < this.numVertices; i += 1) {
                const j = (i / this.numVertices) * (Math.PI * 2);
                textureCoordinates[(i * 2) + 0] = 0.5 + (Math.sin(j) / 2);
                textureCoordinates[(i * 2) + 1] = 0.5 - (Math.cos(j) / 2);
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);
        }
        return this;
    }

    setVertexPositionData() {
        if (this.bindAttrib('position')) {
            const positions = new Array(this.numVertices);
            for (let i = 0; i < this.numVertices; i += 1) {
                const j = (i / this.numVertices) * (Math.PI * 2);
                positions[(i * 2) + 0] = (Math.sin(j) * this.height) + this.x;
                positions[(i * 2) + 1] = (Math.cos(j) * this.width) - this.y;
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        }
    }

    setColor(r, g, b, a = 1) {
        this.colorUniformData = [r, g, b, a];
        return this;
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
