export default class ViewMatrix {
    constructor() {
        this.eyePosition = new Vector(0, 0, 2);
        this.upDirection = new Vector(0, 1, 0);
        this.lookAt = new Vector(0, 0, 0);

        this.matrix = new Matrix().lookAt(
            this.eyePosition,
            this.lookAt,
            this.upDirection,
        );
    }

    setUpDirection(direction) {
        this.upDirection = direction;
        this.matrix.lookAt(
            this.eyePosition,
            this.lookAt,
            this.upDirection,
        );
        return this;
    }

    move(velocity) {
        this.eyePosition.add(velocity);

        this.matrix = new Matrix().lookAt(this.eyePosition, this.lookAt, this.upDirection);
        return this;
    }

    setLookAt(position) {
        this.eyePositionTarget.lerpTo(position, 1);
        this.matrix.lookAt(
            this.eyePosition,
            this.lookAt,
            this.upDirection,
        );
        return this;
    }
}
