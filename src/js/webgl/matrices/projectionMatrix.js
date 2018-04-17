export default class ProjectionMatrix {
    constructor(camera) {
        this.FoV = Math.PI / 4;
        this.aspect = gl.canvas.width / gl.canvas.height;

        this.listeners = [camera];
        // this.update = this.updateOrtho;
        this.update = this.updatePersp;

        this.update();
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    fitMatrixToWindow() {
        this.aspect = (gl.canvas.width / gl.canvas.height);
        this.update();
        this.listeners.forEach(l => l());
    }

    setFoV(value) {
        this.FoV = value;
        this.update();
        this.listeners.forEach(l => l());
    }

    updateOrtho() {
        const { aspect } = this;
        this.matrix = new Matrix().ortho(-aspect, aspect, -1, 1, 0.01, 1000);
    }

    updatePersp() {
        const { FoV, aspect } = this;
        this.matrix = new Matrix().persp(FoV, aspect, 0.01, 100);
    }
}
