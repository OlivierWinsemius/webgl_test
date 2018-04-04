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

        // this.ellipse = new shapes.Ellipse()
        //     .scale(0.2, 1)
        //     .setOrigin(0.5, 0.5)
        //     .setResolution(100)
        //     .setShader(shaders.Texture())
        //     .setTexture(textures.noise, 'sampler')

        this.rect = new shapes.Rect()
            .setOrigin(0.5, 0.5);
        // .scale(0.4, 0.4)
        // .translate(-0.5, -0.5)
        // .translate(1, 0.5)
        // .scale(2, 2)
        // .scaleY(0.1)
        // .rotate(1, 0.4, 0.4)
        // .rotateY(0.4)
        // .rotateZ(Math.PI)
        // .setShader(shaders.Texture())
        // .setTexture(textures.noise, 'sampler')
        // .scaleY(5);

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
        // this.ellipse.draw();
    }

    onMouseMove(event) {
        this.mouseX = event.clientX / gl.canvas.clientWidth;
        this.mouseY = event.clientY / gl.canvas.clientHeight;
    }
}
