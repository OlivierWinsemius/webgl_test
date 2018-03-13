import RenderObject from './object'

export default class Rect extends RenderObject {
    constructor(x = 0, y = 0, width = 0.1, height = 0.1) {
        super()

        this.x      = x * 2 - 1
        this.y      = y * 2 - 1
        this.width  = width * 2
        this.height = height * 2

        this.setVertexPositionData()
        this.setVertexPositionData()
    }
    
    setVertexPositionData() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData)
        const positions = [
                this.x + this.width, -this.y - this.height,
                this.x,              -this.y - this.height,
                this.x + this.width, -this.y,
                this.x,              -this.y
            ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
    }

    setVertexColorData(r, g, b, a) {
        gl.useProgram(this.shader.program)
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

    draw() {
        gl.useProgram(this.shader.program)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
}