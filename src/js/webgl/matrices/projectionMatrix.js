export default class ProjectionMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.r = 1;
        this.l = -1;
        this.b = 1;
        this.t = -1;
        this.n = 0.1;
        this.f = 1000;
        this.FOV = Math.PI / 4;
        this.aspectRatio = gl.canvas.height / gl.canvas.width;

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
        const aspectRatio = (gl.canvas.width / gl.canvas.height / 2);
        const l = this.l * aspectRatio;
        const r = this.r * aspectRatio;
        this.updateMatrix(l, r, t, b, n, f, aspectRatio);
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

    updatePerspectiveMatrix(l, r, t, b, n, f, aspectRatio) {
        // this.matrix = [
        //     (2 * n) / (r - l), 0, (r + l) / (r - l), 0,
        //     0, (2 * n) / (t - b), (t + b) / (t - b), 0,
        //     0, 0, -(f + n) / (f - n), (-2 * f * n) / (f - n),
        //     0, 0, -1, 0,
        // ];

        const fov = Math.tan(this.FOV - (0.5 * this.FOV));
        const rangeInv = 1.0 / (n - f);

        this.matrix = [
            fov / aspectRatio, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (n + f) * rangeInv, -1,
            0, 0, n * f * rangeInv * 2, 0,
        ];

        this.listeners.forEach(listener => listener());
    }
}
