export default class ProjectionMatrix {
    constructor() {
        this.FoV = Math.PI / 4;
        this.aspect = gl.canvas.width / gl.canvas.height;
        this.matrix = new Matrix();

        // this.update = this.setOrthographicMatrix;
        this.reconfigureMatrix = this.setPerspectiveMatrix;
        this.reconfigureMatrix();
    }

    fitMatrixToWindow() {
        this.aspect = (gl.canvas.width / gl.canvas.height);
        console.log(this.aspect);
        this.reconfigureMatrix();
        return this;
    }

    setAspect(aspect) {
        this.aspect = aspect;
        this.reconfigureMatrix();
        return this;
    }

    setFoV(FoV) {
        this.FoV = FoV;
        this.reconfigureMatrix();
        return this;
    }

    setOrthographicMatrix() {
        const { aspect } = this;
        this.matrix.reset().ortho(-aspect, aspect, -1, 1, 0.01, 1000);
    }

    setPerspectiveMatrix() {
        const { FoV, aspect } = this;
        this.matrix.reset().persp(FoV, aspect, 0.01, 100);
    }
}
