export default class Matrix {
    constructor(m) {
        if (m && m.length === (4 * 4)) {
            this.value = m;
        } else {
            this.value = [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1,
            ];
        }
    }

    toArray() {
        return [...this.value];
    }

    multiply(m) {
        const multiplyMatrix = m.toArray();
        const oldMatrix = this.toArray();
        for (let col = 0; col < 4; col += 1) {
            for (let row = 0; row < 4; row += 1) {
                let value = 0;
                for (let i = 0; i < 4; i += 1) {
                    value += oldMatrix[(i * 4) + col] * multiplyMatrix[(row * 4) + i];
                }
                this.value[col + (row * 4)] = value;
            }
        }
        return this;
    }

    persp(FoV, aspect, zNear, zFar) {
        const f = 1.0 / Math.tan(FoV);
        const nf = 1.0 / (zFar - zNear);
        return this.multiply(new Matrix([
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, -(zFar + zNear) * nf, -1,
            0, 0, -2 * zFar * zNear * nf, 0,
        ]));
    }

    ortho(l, r, b, t, n, f) {
        return this.multiply(new Matrix([
            2 / (r - l), 0, 0, 0,
            0, 2 / (t - b), 0, 0,
            0, 0, -2 / (f - n), 0,
            -(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1,
        ]));
    }

    lookAt(eye, target, up) {
        const z = eye.sub(target).normal;
        const x = up.cross(z).normal;
        const y = z.cross(x).normal;

        return this.multiply(new Matrix([
            x.x, y.x, z.x, 0,
            x.y, y.y, z.y, 0,
            x.z, y.z, z.z, 0,
            -x.dot(eye), -y.dot(eye), -z.dot(eye), 1,
        ]));
    }

    translateBy(v) {
        const { x, y, z } = v.duplicate();
        const translationMatrix = new Matrix([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1,
        ]);
        return this.multiply(translationMatrix);
    }

    rotateBy(v) {
        const { x, y, z } = v;
        const cx = Math.cos(x);
        const cy = Math.cos(y);
        const cz = Math.cos(z);

        const sx = Math.sin(x);
        const sy = Math.sin(y);
        const sz = Math.sin(z);

        const zMatrix = new Matrix([
            cz, -sz, 0, 0,
            sz, cz, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);

        const yMatrix = new Matrix([
            cy, 0, sy, 0,
            0, 1, 0, 0,
            -sy, 0, cy, 0,
            0, 0, 0, 1,
        ]);

        const xMatrix = new Matrix([
            1, 0, 0, 0,
            0, cx, -sx, 0,
            0, sx, cx, 0,
            0, 0, 0, 1,
        ]);

        return this.multiply(zMatrix).multiply(yMatrix).multiply(xMatrix);
    }

    scaleBy(v) {
        const { x, y, z } = v;
        const scaleMatrix = new Matrix([
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1,
        ]);
        return this.multiply(scaleMatrix);
    }

    reset() {
        this.value = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
        return this;
    }

    duplicate() {
        return new Matrix().copy(this);
    }

    copy(m) {
        this.value = m.toArray();
        return this;
    }
}
