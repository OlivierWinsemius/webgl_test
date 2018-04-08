export default class ViewMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.u = [0, 1, 0];
        this.p = [0, 0, 10];
        this.focus = [0, 0, 0];

        this.lookAt(...this.focus);
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    moveTo(x, y, z) {
        this.p = [x, y, z];
        this.lookAt(...this.focus);
        return this;
    }

    moveBy(x, y, z) {
        this.p = [
            this.p[0] - x,
            this.p[1] + y,
            this.p[2] - z,
        ];
        this.lookAt(...this.focus);
        return this;
    }

    lookAt(x, y, z) {
        this.focusPoint = [x, y, z];
        const f = vec.normal([
            this.p[0] - x,
            this.p[1] - y,
            this.p[2] - z,
        ]);
        const r = vec.normal(vec.cross(f, this.u));
        const u = vec.normal(vec.cross(f, r));
        const p = vec.normal([
            -vec.dot(r, this.p),
            -vec.dot(u, this.p),
            -vec.dot(f, this.p),
        ]);

        this.updateMatrix(f, r, u, p);
        return this;
    }

    updateMatrix(f, r, u, p) {
        this.matrix = [
            r[0], u[0], f[0], p[0],
            r[1], u[1], f[1], p[1],
            r[2], u[2], f[2], p[2],
            0, 0, 0, 1,
        ];
        this.listeners.forEach(l => l());
    }
}
