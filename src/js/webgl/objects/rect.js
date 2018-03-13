import RenderObject from './object'

export default class Rect extends RenderObject {
    constructor(x = 0, y = 0, width = 0.1, height = 0.1) {
        super()

        this.x      = x * 2 - 1
        this.y      = y * 2 - 1
        this.width  = width * 2
        this.height = height * 2

        this._setVertexPositionData()
        this._setVertexColorData()
    }
    
    _setVertexPositionData() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData)
        const positions = [
                this.x + this.width, -this.y - this.height,
                this.x,              -this.y - this.height,
                this.x + this.width, -this.y,
                this.x,              -this.y
            ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
    }

    _setVertexColorData(r, g, b, a) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorData)
        const c = this.color
        const vertexColors = [...c, ...c, ...c, ...c]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexColors), gl.STATIC_DRAW)
    }

    setColor(r, g, b, a = 1) { 
        this.color = [r, g, b, a]
        this._setVertexColorData()
    }

    setPosition(x, y) {
        this.x = x * 2 - 1
        this.y = y * 2 - 1
        this._setVertexData()
    }

    setSize(width, height) {
        this.width  = width * 2
        this.height = height * 2
        this._setVertexData()
    }

    draw() {
        gl.useProgram(this.shaderProgram)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
}