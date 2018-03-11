module.exports = class App {
    constructor() {
        gl.clearColor(1, 1, 1, 1)
        this.quad = new Quad(0.1, 0.01, 0.85, 0.9);
        this.quad.setColor(1, 0, 0);
        this.update();
    };

    update() {
        this.onResize();
        this.draw();
        window.requestAnimationFrame(this.update.bind(this));
    };

    draw() {
        const offset      = 0;
        const vertexCount = 3;
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.quad.draw();
    };
    
    onResize() {
        const width  = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width != width || gl.canvas.height != height) {
            gl.canvas.width = width;
            gl.canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        }
    };
};