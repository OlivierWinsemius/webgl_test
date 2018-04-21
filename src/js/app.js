export default class App {
    onMouseMove(event) {
        this.mousePos = {
            x: event.clientX / gl.canvas.clientWidth,
            y: event.clientY / gl.canvas.clientHeight,
        };
    }

    onKeyDown(event) {
        this.keys[event.keyCode] = true;
    }

    onKeyUp(event) {
        this.keys[event.keyCode] = false;
    }

    constructor() {
        this.keys = [];
        this.mousePos = { x: 0, y: 0 };
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));

        this.ellipse = new shapes.Ellipse()
            .translate(0, 0, -10)
            .setOrigin(0.5, 0.5)
            .scale(10)
            .setColor(1, 0, 0);
        this.cube = new shapes.Cube()
            .rotate(Math.PI / 4)
            .setOrigin(0.5, 0.5, 0.5)
            .setShader(shaders.Texture)
            .setTexture(textures.noise, 'sampler');

        setTimeout(() => Camera.moveTo(new Vector(3, 2, 0)), 1000);
        requestAnimationFrame(this.update.bind(this));
    }

    update() {
        Camera.update();
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
