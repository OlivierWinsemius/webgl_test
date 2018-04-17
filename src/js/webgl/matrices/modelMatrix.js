export default class ModelMatrix {
    constructor(
        x = 0,
        y = 0,
        z = 0,
        scaleX = 1,
        scaleY = 1,
        scaleZ = 1,
        rotationX = 0,
        rotationY = 0,
        rotationZ = 0,
    ) {
        const translationVector = new Vector(x, y, z);
        const rotationVector = new Vector(rotationX, rotationY, rotationZ);
        const scaleVector = new Vector(scaleX, scaleY, scaleZ);

        this.translationMatrix = new Matrix()
            .translateBy(translationVector);
        this.rotationMatrix = new Matrix()
            .rotateBy(rotationVector);
        this.scaleMatrix = new Matrix()
            .scaleBy(scaleVector);
    }

    translateX(value) {
        this.translate(value);
        return this;
    }

    translateY(value) {
        this.translate(0, value);
        return this;
    }

    translateZ(value) {
        this.translate(0, 0, value);
        return this;
    }

    translate(x, y = 0, z = 0) {
        this.translationMatrix.translateBy(new Vector(x, y, z));
        this.setUniform('modelView');
        return this;
    }

    rotateX(angle) {
        this.rotate(angle);
        return this;
    }

    rotateY(angle) {
        this.rotate(0, angle);
        return this;
    }

    rotateZ(angle) {
        this.rotate(0, 0, angle);
        return this;
    }

    rotate(x, y = 0, z = 0) {
        this.rotationMatrix.rotateBy(new Vector(x, y, z));
        this.setUniform('modelView');
        return this;
    }

    scaleX(value) {
        this.scale(value, 1, 1);
        return this;
    }

    scaleY(value) {
        this.scale(1, value, 1);
        return this;
    }

    scaleZ(value) {
        this.scale(1, 1, value);
        return this;
    }

    scale(x, y, z) {
        const sx = x;
        const sy = y === undefined ? x : y;
        const sz = z === undefined ? x : z;
        this.scaleMatrix.scaleBy(new Vector(sx, sy, sz));
        this.setUniform('modelView');
        return this;
    }
}
