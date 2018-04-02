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

        this.rect = new shapes.Rect(0.3, 0.3, 0.4, 0.4)
            .setShader(shaders.texture)
            .setTexture(textures.noise, 'sampler');

        this.ellipse = new shapes.Ellipse(0.8, 0.5)
            .setShader(shaders.texture)
            .setTextures({
                texture: textures.noise,
                key: 'sampler',
            });

        this.update();
    }

    update() {
        App.onResize();
        this.draw();
        requestAnimationFrame(this.update);
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.rect
            .rotate(0, 0.01, 0.01)
            .draw();

        this.ellipse
            .rotate(0, 0, 0.01)
            .draw();
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth;
        this.mouseY = event.clientY / gl.canvas.clientHeight;
    }
}
