export default class ViewMatrix {
    constructor() {
        this.right = [1, 0, 0];
        this.up = [0, 1, 0];
        this.forward = [0, 0, 1];
        this.position = [0, 0, 40];
        this.listeners = [];
        this.foucsPoint = [10, 0, 0];

        this.matrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];

        this.lookAt(...this.foucsPoint);
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    moveTo(x, y, z) {
        this.position = [x, y, z];
        this.lookAt(...this.foucsPoint);
        return this;
    }

    moveBy(x, y, z) {
        this.position = [
            this.position.x + x,
            this.position.y + y,
            this.position.z + z,
        ];
        this.lookAt(...this.foucsPoint);
        return this;
    }

    lookAt(x, y, z) {
        this.focusPoint = [x, y, z];
        this.forward = vec.normal([
            -this.position[0] + x,
            -this.position[1] + y,
            -this.position[2] + z,
        ]);
        this.right = vec.normal(vec.cross(this.up, this.forward));
        this.up = vec.normal(vec.cross(this.forward, this.right));
        this.position = vec.normal([
            vec.dot(this.right, this.position),
            vec.dot(this.up, this.position),
            vec.dot(this.forward, this.position),
        ]);

        this.updateMatrix();
        return this;
    }

    updateMatrix() {
        const r = this.right;
        const u = this.up;
        const f = this.forward;
        const p = this.position;

        this.matrix = [
            r[0], u[0], f[0], p[0],
            r[1], u[1], f[1], p[1],
            r[2], u[2], f[2], p[2],
            0, 0, 0, 1,
        ];
        this.listeners.forEach((func) => { func(); });
    }
}
