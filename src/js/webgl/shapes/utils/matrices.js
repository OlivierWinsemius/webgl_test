export default class shapeMatrices {
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
        const m = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];

        this.translationMatrix = m;
        this.rotationMatrix = m;
        this.scaleMatrix = m;

        this.translation = {
            x,
            y,
            z,
        };
        this.rotation = {
            x: rotationX,
            y: rotationY,
            z: rotationZ,
        };
        this.scaling = {
            x: scaleX,
            y: scaleY,
            z: scaleZ,
        };
    }

    translateX(value) {
        this.translation.x += value;
        this.updateTranslationMatrix();
        return this;
    }

    translateY(value) {
        this.translation.y += value;
        this.updateTranslationMatrix();
        return this;
    }

    translateZ(value) {
        this.translation.z += value;
        this.updateTranslationMatrix();
        return this;
    }

    translate(x, y = 0, z = 0) {
        this.translation = {
            x: this.translation.x + x,
            y: this.translation.y + y,
            z: this.translation.z + z,
        };
        this.updateTranslationMatrix();
        return this;
    }

    rotateX(angle) {
        this.rotation.x += (this.rotation.x + angle) % (Math.PI * 2);
        this.updateRotationMatrix();
        return this;
    }

    rotateY(angle) {
        this.rotation.y += (this.rotation.y + angle) % (Math.PI * 2);
        this.updateRotationMatrix();
        return this;
    }

    rotateZ(angle) {
        this.rotation.z += (this.rotation.z + angle) % (Math.PI * 2);
        this.updateRotationMatrix();
        return this;
    }

    rotate(x, y = 0, z = 0) {
        this.rotation = {
            x: (this.rotation.x + x) % (Math.PI * 2),
            y: (this.rotation.y + y) % (Math.PI * 2),
            z: (this.rotation.z + z) % (Math.PI * 2),
        };
        this.updateRotationMatrix();
        return this;
    }

    scaleX(value) {
        this.scaling.x += value;
        this.updateScaleMatrix();
        return this;
    }

    scaleY(value) {
        this.scaling.y += value;
        this.updateScaleMatrix();
        return this;
    }

    scaleZ(value) {
        this.scaling.z += value;
        this.updateScaleMatrix();
        return this;
    }

    scale(x, y = 1, z = 1) {
        this.scaling = {
            x: this.scaling.x * x,
            y: this.scaling.y * y,
            z: this.scaling.z * z,
        };
        this.updateScaleMatrix();
        return this;
    }

    updateTranslationMatrix() {
        const { x, y, z } = this.translation;
        this.translationMatrix = this.combineMatrices(
            this.translationMatrix,
            [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                x, -y, z, 1,
            ],
        );

        this.setUniform('modelView');
    }

    updateRotationMatrix() {
        const { x, y, z } = this.rotation;
        const cx = Math.cos(x);
        const cy = Math.cos(y);
        const cz = Math.cos(z);

        const sx = Math.sin(x);
        const sy = Math.sin(y);
        const sz = Math.sin(z);

        this.rotationMatrix = [
            cy * cz, cy * sz, -sy, 0,
            (sx * sy * cz) - (cx * sz), (sx * sy * sz) + (cx * cz), sx * cy, 0,
            (cx * sy * cz) + (sx * sz), (cx * sy * sz) - (sx * cy), cx * cy, 0,
            0, 0, 0, 1,
        ];

        this.setUniform('modelView');
    }

    updateScaleMatrix() {
        const { x, y, z } = this.scaling;
        this.scaleMatrix = this.combineMatrices(
            this.scaleMatrix,
            [
                x, 0, 0, 0,
                0, y, 0, 0,
                0, 0, z, 0,
                0, 0, 0, 1,
            ],
        );

        this.setUniform('modelView');
    }

    combineMatrices(oldMatrix, ...rest) {
        const newMatrix = rest.shift();
        const matrix = new Array(16);
        for (let row = 0; row < 4; row += 1) {
            for (let col = 0; col < 4; col += 1) {
                matrix[(row * 4) + col] = 0;
                for (let i = 0; i < 4; i += 1) {
                    matrix[(row * 4) + col] += (
                        oldMatrix[(i * 4) + col] *
                        newMatrix[(row * 4) + i]
                    );
                }
            }
        }

        if (rest.length) {
            return this.combineMatrices(matrix, ...rest);
        }
        return matrix;
    }
}
