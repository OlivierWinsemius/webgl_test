export default class App {
    static onResize() {
        const width = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width !== width || gl.canvas.height !== height) {
            gl.canvas.width = width;
            gl.canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            Camera.onResize();
        }
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth;
        this.mouseY = event.clientY / gl.canvas.clientHeight;
    }

    onKeyDown(event) {
        switch (event.key) {
        case 's':
        case 'S':
            Camera.moveBy(new Vector(0, 0, 1));
            break;
        case 'w':
        case 'W':
            Camera.moveBy(new Vector(0, 0, -1));
            break;
        case 'a':
        case 'A':
            Camera.moveBy(new Vector(-1, 0, 0));
            break;
        case 'd':
        case 'D':
            Camera.moveBy(new Vector(1, 0, 0));
            break;
        case 'Shift':
            Camera.moveBy(new Vector(0, 1, 0));
            break;
        case ' ':
            Camera.moveBy(new Vector(0, -1, 0));
            break;
        default:
            break;
        }
    }

    constructor() {
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        this.mouseX = 0;
        this.mouseY = 0;

        this.ellipse = new shapes.Ellipse()
            .translate(0, 0, -10)
            .setOrigin(0.5, 0.5)
            .scale(10)
            .setColor(1, 0, 0);
        this.cube = new shapes.Cube()
            .rotate(Math.PI / 4)
            .setOrigin(0.5, 0.5, 0.5)
            .setShader(shaders.Texture)
            .setTexture(textures.noise);

        this.update();
    }

    update() {
        App.onResize();
        this.draw();
        requestAnimationFrame(this.update.bind(this));
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.cube
            .rotate(0.01, 0.01)
            .draw();
        this.ellipse.draw();
    }
}
