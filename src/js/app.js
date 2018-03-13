export default class App {
    constructor() {
        this.rect = new Rect(0.1, 0.01, 0.85, 0.9)
        this.rect.setColor(0.5, 1, 0.2)
        this.update = this.update.bind(this);
        this.update();
    }

    update() {
        this.onResize()
        this.draw()
        requestAnimationFrame(this.update)
    }

    draw() {
        const offset      = 0
        const vertexCount = 3
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        this.rect.draw()
    }
    
    onResize() {
        const width  = gl.canvas.clientWidth
        const height = gl.canvas.clientHeight
        if (gl.canvas.width != width || gl.canvas.height != height) {
            gl.canvas.width = width
            gl.canvas.height = height
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
        }
    }
}