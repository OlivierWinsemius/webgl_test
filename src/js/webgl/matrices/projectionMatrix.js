export default class ProjectionMatrix {
    constructor() {
        this.near = 0.01;
        this.far = 1000;
        this.FoV = Math.PI / 4;
        this.aspect = 16 / 9;
        this.setupMatrix();
    }

    setupMatrix() {
        const {
            FoV,
            far,
            near,
            aspect,
        } = this;

        const nf = 1.0 / (far - near);

        // Perspective Matrix
        this.matrix = new Matrix([
            FoV / aspect, 0, 0, 0,
            0, FoV, 0, 0,
            0, 0, -(far + near) * nf, -1,
            0, 0, -2 * far * near * nf, 0,
        ]);
    }

    setFoV(FoV) {
        this.Fov = FoV;
        this.setupMatrix();
        return this;
    }

    setNear(near) {
        this.near = near;
        this.setupMatrix();
        return this;
    }

    setFar(far) {
        this.far = far;
        this.setupMatrix();
        return this;
    }

    setAspect(aspect) {
        this.aspect = aspect;
        this.setupMatrix();
        return this;
    }
}
