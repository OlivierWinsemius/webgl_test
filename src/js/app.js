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

    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;

        this.ellipse = new shapes.Ellipse()
            .translate(0, 0, -10)
            .setOrigin(0.5, 0.5)
            .scale(10)
            .setColor(1, 0, 0);

        this.rect = new shapes.Rect()
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
        // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        this.ellipse.draw();

        this.rect
            .rotate(-0.01, 0.01)
            .draw();
    }
}
