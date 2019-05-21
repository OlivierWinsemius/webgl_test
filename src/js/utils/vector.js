export default class Vector {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get magnitude() {
        const { x, y, z } = this.duplicate();
        return Math.sqrt(((x * x) + (y * y) + (z * z)));
    }

    dot(v) {
        const v2 = v.duplicate();
        const { x, y, z } = this.duplicate();
        return (
            (x * v2.x)
            + (y * v2.y)
            + (z * v2.z)
        );
    }

    diff(v) {
        const { x, y, z } = this.duplicate();
        return new Vector(
            x - v.x,
            y - v.y,
            z - v.z,
        );
    }

    dist(v) {
        return this.diff(v).magnitude;
    }

    get normal() {
        const scale = 1 / this.magnitude;
        const { x, y, z } = this.duplicate();
        return new Vector(
            x * scale,
            y * scale,
            z * scale,
        );
    }

    cross(v) {
        const { x, y, z } = this.duplicate();
        return new Vector(
            (y * v.z) - (z * v.y),
            (z * v.x) - (x * v.z),
            (x * v.y) - (y * v.x),
        );
    }

    normalize() {
        const scale = 1 / this.magnitude;
        const { x, y, z } = this;
        this.x = x * scale;
        this.y = y * scale;
        this.z = z * scale;
        return this;
    }

    inverse() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this;
    }

    add(v) {
        const { x, y, z } = v;
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    }

    mod(v) {
        const { x, y, z } = this;
        this.x = x % v;
        this.y = y % v;
        this.z = z % v;
    }

    sub(v) {
        const { x, y, z } = this;
        this.x = x - v.x;
        this.y = y - v.y;
        this.z = z - v.z;
        return this;
    }

    scale(x, y, z) {
        const xs = x;
        const ys = y === undefined ? x : y;
        const zs = z === undefined ? x : z;
        this.x *= xs;
        this.y *= ys;
        this.z *= zs;
        return this;
    }

    lerpTo(v, t) {
        return this.add(v.diff(this).scale(t));
    }

    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    duplicate() {
        return new Vector().copy(this);
    }

    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
}
