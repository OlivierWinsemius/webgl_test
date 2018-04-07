export default class ViewMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.r = [1, 0, 0];
        this.u = [0, 1, 0];
        this.f = [0, 0, 1];
        this.p = [0, 0, 40];
        this.focus = [0, 0, 0];

        this.lookAt(...this.focus);
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    moveTo(x, y, z) {
        this.position = [x, y, z];
        this.lookAt(...this.focus);
        return this;
    }

    moveBy(x, y, z) {
        this.position = [
            this.position.x + x,
            this.position.y + y,
            this.position.z + z,
        ];
        this.lookAt(...this.focus);
        return this;
    }

    lookAt(x, y, z) {
        this.focusPoint = [x, y, z];
        this.forward = vec.normal([
            this.p[0] - x,
            this.p[1] - y,
            this.p[2] - z,
        ]);
        this.r = vec.normal(vec.cross(this.u, this.f));
        this.u = vec.normal(vec.cross(this.f, this.r));
        this.p = vec.normal([
            vec.dot(this.r, this.p),
            vec.dot(this.u, this.p),
            vec.dot(this.f, this.p),
        ]);

        this.updateMatrix();
        return this;
    }

    updateMatrix() {
        const {
            r,
            u,
            f,
            p,
        } = this;

        this.matrix = [
            r[0], u[0], f[0], p[0],
            r[1], u[1], f[1], p[1],
            r[2], u[2], f[2], p[2],
            0, 0, 0, 1,
        ];
        this.listeners.forEach(l => l());
    }
}
