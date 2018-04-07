export default class App {
    static onResize() {
        const width = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width !== width || gl.canvas.height !== height) {
            gl.canvas.width = width;
            gl.canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        }
    }

    constructor() {
        this.update = this.update.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', this.onMouseMove);

        this.mouseX = 0;
        this.mouseY = 0;

        this.cube = new shapes.Cube()
            .setShader(shaders.Texture())
            .setTexture(textures.noise, 'sampler')
            .setOrigin(0.5, 0.5, 0.5)
            .translate(0, 0, 0.5)
            .scale(0.4);

        this.update();
    }

    update() {
        App.onResize();
        this.draw();
        requestAnimationFrame(this.update);
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.cube
            .rotate(0.01, 0.01)
            .draw();
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth;
        this.mouseY = event.clientY / gl.canvas.clientHeight;
    }
}
