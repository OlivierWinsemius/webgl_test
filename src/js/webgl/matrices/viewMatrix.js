export default class ViewMatrix {
    constructor() {
        this.eyePosition = new Vector(0, 0, 2);
        this.viewTarget = new Vector(0, 0, 0);
        this.upDirection = new Vector(0, 1, 0);
        this.matrix = new Matrix();
        this.update();
    }

    moveTo(position) {
        this.eyePosition = position;
        this.update();
        return this;
    }

    moveBy(velocity) {
        this.eyePosition.add(velocity);
        this.update();
        return this;
    }

    lookAt(position) {
        this.lookAt = position;
        this.update();
        return this;
    }

    update() {
        this.matrix.lookAt(
            this.eyePosition,
            this.viewTarget,
            this.upDirection,
        );
    }
}
