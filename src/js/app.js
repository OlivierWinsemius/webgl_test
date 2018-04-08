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
        if (event.key === 'w' || event.key === 'W') {
            Camera.moveBy(0, 0, 0.1);
        }
        if (event.key === 's' || event.key === 'S') {
            Camera.moveBy(0, 0, -0.1);
        }
        if (event.key === 'a' || event.key === 'A') {
            Camera.moveBy(-0.1, 0, 0);
        }
        if (event.key === 'd' || event.key === 'D') {
            Camera.moveBy(0.1, 0, 0);
        }
        if (event.key === 'Shift') {
            Camera.moveBy(0, -0.1, 0);
        }
        if (event.key === ' ') {
            Camera.moveBy(0, 0.1, 0);
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

        const rows = 5;
        const cols = 5;
        this.cubes = new Array(rows * cols);
        for (let row = 0; row < rows; row += 1) {
            for (let col = 0; col < cols; col += 1) {
                this.cubes[col + (row * rows)] = new shapes.Cube(
                    (row / rows) - 0.5,
                    (col / cols),
                    0,
                    0.2,
                    0.2,
                    0.2,
                )
                    .setShader(shaders.Texture)
                    .setTexture(textures.noise, 'sampler')
                    .scale(0.1)
                    .setOrigin(0.5, 0.5, 0.5);
            }
        }

        this.ellipse = new shapes.Ellipse()
            .setColor(1, 0, 0)
            .setOrigin(0.5, 0.5)
            .setResolution(1000)
            .translateZ(-10);

        this.cube = new shapes.Cube()
            .setOrigin(0.5, 0.5, 0.5)
            .setShader(shaders.Texture)
            .setTexture(textures.noise, 'sampler')
            .scale(0.5);

        this.update();
    }

    update() {
        App.onResize();
        this.draw();
        requestAnimationFrame(this.update);
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.cubes.forEach((cube) => {
            cube
                // .rotate(0.01, 0.02, 0.01)
                .draw();
        });
        // this.cube.rotateX(0.01).draw();
        this.ellipse.translateZ(0, 0, 0.01).draw();
    }
}
