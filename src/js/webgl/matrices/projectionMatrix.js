export default class ProjectionMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.r = 0.5;
        this.l = -0.5;
        this.b = 0.5;
        this.t = -0.5;
        this.n = 0.1;
        this.f = 10;
        this.FOV = 90;

        this.updateMatrix = this.updateOrthographicMatrix;
        window.addEventListener('resize', this.fitMatrixToWindow.bind(this));
        this.fitMatrixToWindow();
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    fitMatrixToWindow() {
        const w = gl.canvas.clientWidth;
        const h = gl.canvas.clientHeight;
        const viewportRatio = w / h;
        const targetRatio = 16 / 9;
        const offsetRatio = viewportRatio - targetRatio;
        const offsetWidth = 1 + (offsetRatio / 2);
        const {
            n,
            f,
            t,
            b,
        } = this;
        const l = this.l * offsetWidth;
        const r = this.r * offsetWidth;
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
