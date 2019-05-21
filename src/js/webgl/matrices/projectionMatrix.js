export default class ProjectionMatrix {
    constructor() {
        this.near = 0.01;
        this.far = 1000;
        this.FoV = Math.PI / 4;
        this.aspect = 16 / 9;
        this.setupMatrix('ortho');
    }

    setupMatrix(type = 'persp') {
        this.matrix = type === 'persp'
            ? new Matrix().persp(this.FoV, this.aspect, this.near, this.far)
            : new Matrix().ortho(-0.5, 0.5, -0.5, 0.5, 0.001, 10000);
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
