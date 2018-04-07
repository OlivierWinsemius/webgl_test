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

        const rows = 25;
        const cols = 25;
        this.cubes = new Array(rows * cols);
        // for (let row = 0; row < rows + 1; row += 1) {
        //     for (let col = 0; col < cols + 1; col += 1) {
        //         this.cubes[col + (row * rows)] = new shapes.Cube(
        //             (row / rows) - 0.5,
        //             (col / cols) - 0.5,
        //             0.5,
        //             0.2,
        //             0.2,
        //             0.2,
        //         )
        //             .setShader(shaders.Texture())
        //             .setTexture(textures.noise, 'sampler')
        //             .scale(0.1)
        //             .setOrigin(0.5, 0.5, 0.5);
        //     }
        // }

        this.ellipse = new shapes.Ellipse()
            .setColor(1, 0, 0)
            .setOrigin(0.5, 0.5)
            .setResolution(1000)
            .translateZ(-10);

        this.update();
    }

    update() {
        App.onResize();
        this.draw();
        requestAnimationFrame(this.update);
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // this.cubes.forEach((cube) => {
        //     cube.rotate(0.01, 0.02, 0.01).draw();
        // });
        this.ellipse.draw();
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth;
        this.mouseY = event.clientY / gl.canvas.clientHeight;
    }
}
