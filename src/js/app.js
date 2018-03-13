export default class App {
    constructor() {
        this.update      = this.update.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
        document.addEventListener('mousemove', this.onMouseMove)
        this.rect = new Rect(0, 0, 0.5, 0.5)
        this.rect.setColor(0.5, 0.1, 0.2)
        this.update();
    }

    update() {
        this.onResize()
        this.draw()
        this.rect.setSize(this.mouseX, this.mouseY)
        requestAnimationFrame(this.update)
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        this.rect.draw()
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth
        this.mouseY = event.clientY / gl.canvas.clientHeight
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