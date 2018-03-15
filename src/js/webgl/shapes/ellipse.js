import Shape from './shape'

export default class Ellipse extends Shape {
    constructor(x = 0, y = 0, width = 0.1, height = 0.1) {
        super()

        this.numVertices = 40
        this.x      = x * 2 - 1
        this.y      = y * 2 - 1
        this.width  = width
        this.height = height

        this.setVertexPositionData()
        this.setVertexColorData()
    }
    
    setVertexPositionData() {
        this.bindBufferAttribs()
        let positions = new Array(this.numVertices)
        for(let i=0; i<this.numVertices; i++) {
            const j = i / this.numVertices * (Math.PI * 2)
            positions[i * 2 + 0] = Math.sin(j) * this.height
            positions[i * 2 + 1] = Math.cos(j) * this.width
        }
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
    }

    setVertexColorData(r, g, b, a) {
        gl.uniform4fv(this.shader.uniforms.color, this.colorData)
    }

    setColor(r, g, b, a = 1) { 
        this.colorData = [r, g, b, a]
        this.setVertexColorData()
    }

    setPosition(x, y) {
        this.x = x * 2 - 1
        this.y = y * 2 - 1
        this.setVertexPositionData()
    }

    setSize(width, height) {
        this.width  = width * 2
        this.height = height * 2
        this.setVertexPositionData()
    }

    setResolution(numVertices) {
        this.numVertices = numVertices
        this.setVertexPositionData()
    }

    draw() {
        this.bindBufferAttribs()
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.numVertices)
    }
}