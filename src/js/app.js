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
        this.canvas = new shapes.Plane()
            .setOrigin(0.5, 0.5)
            // .scale(2);
        requestAnimationFrame(this.update.bind(this));
    }

    update() {
        Camera.update();
        this.draw();
        requestAnimationFrame(this.update.bind(this));
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.canvas.draw();
    }
}
