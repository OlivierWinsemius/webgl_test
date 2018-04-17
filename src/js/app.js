export default class App {
    static onResize() {
        const width = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width !== width || gl.canvas.height !== height) {
            gl.canvas.width = width;
            gl.canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            Camera.Projection.fitMatrixToWindow();
        }
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth;
        this.mouseY = event.clientY / gl.canvas.clientHeight;
    }

    onKeyDown(event) {
        if (event.key === 's' || event.key === 'S') {
            Camera.move(new Vector(0, 0, 0.1));
        }
        if (event.key === 'w' || event.key === 'W') {
            Camera.move(new Vector(0, 0, -0.1));
        }
        if (event.key === 'a' || event.key === 'A') {
            Camera.move(new Vector(-0.1, 0, 0));
        }
        if (event.key === 'd' || event.key === 'D') {
            Camera.move(new Vector(0.1, 0, 0));
        }
        if (event.key === 'Shift') {
            Camera.move(new Vector(0, -0.1, 0));
        }
        if (event.key === ' ') {
            Camera.move(new Vector(0, 0.1, 0));
        }
    }

    constructor() {
        this.update = this.update.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('keydown', this.onKeyDown);
        this.mouseX = 0;
        this.mouseY = 0;
        this.cube = new shapes.Cube()
            .rotate(Math.PI / 4)
            .setOrigin(0.5, 0.5, 0.5)
            .setShader(shaders.Texture)
            .setTexture(textures.noise, 'sampler');
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
}
