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
        this.onMouseClick = this.onMouseClick.bind(this);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('click', this.onMouseClick);

        this.mouseX = 0;
        this.mouseY = 0;

        this.rect = new shapes.Rect(0, 0, 1, 0.5)
            .setShader(shaders.texture)
            .setTexture(textures.noise);

        this.ellipse = new shapes.Ellipse(0.8, 0.7, 0.6, 0.4)
            .setShader(shaders.texture)
            .setTexture(textures.noise);

        this.update();
    }

    update() {
        App.onResize();
        this.draw();
        requestAnimationFrame(this.update);
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.rect.draw();
        this.ellipse.draw();
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth;
        this.mouseY = event.clientY / gl.canvas.clientHeight;
        this.rect.setSize(this.mouseX, this.mouseY);
    }

    onMouseClick() {
        this.rect.setShader(shaders.solid).setColor(1, 0, 0);
    }
}
