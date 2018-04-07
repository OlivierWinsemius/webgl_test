export default class ProjectionMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.r = 1;
        this.l = -1;
        this.b = 1;
        this.t = -1;
        this.n = 0.1;
        this.f = 100;
        this.FOV = 90;

        this.updateMatrix = this.updateOrthographicMatrix;
        this.fitMatrixToWindow();
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    fitMatrixToWindow() {
        const {
            n,
            f,
            t,
            b,
        } = this;
        const offsetRatio = (gl.canvas.width / gl.canvas.height / 2);
        const l = this.l * offsetRatio;
        const r = this.r * offsetRatio;
        this.updateMatrix(l, r, t, b, n, f);
    }

    updateOrthographicMatrix(l, r, t, b, n, f) {
        this.matrix = [
            2 / (r - l), 0, 0, -((r + l) / (r - l)),
            0, 2 / (t - n), 0, -((t + b) / (t - b)),
            0, 0, -2 / (f - n), -((f + n) / (f - n)),
            0, 0, 0, 1,
        ];
        this.listeners.forEach(listener => listener());
    }
}
