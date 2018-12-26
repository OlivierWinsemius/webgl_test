import ViewMatrix from '../matrices/viewMatrix';
import ProjectionMatrix from '../matrices/projectionMatrix';

export default class Camera {
    constructor() {
        this.listeners = [];
        this.View = new ViewMatrix();
        this.Projection = new ProjectionMatrix();

        this.position = this.View.eyePosition.duplicate();
        this.targetPosition = this.View.eyePosition.duplicate();

        this.update();
    }

    update() {
        const velocity = this.position.diff(this.targetPosition).magnitude;
        if (velocity > 0) {
            if (velocity < 0.01) {
                this.position = this.targetPosition;
            } else {
                this.position.lerp(this.targetPosition, 0.1);
            }
            this.View.moveTo(this.position);
            this.updateView();
        }
        requestAnimationFrame(this.update.bind(this));
    }

    updateView() {
        this.listeners.forEach(l => l.setUniform('modelView'));
    }

    updateProjection() {
        this.listeners.forEach(l => l.setUniform('projection'));
    }

    listen(shape) {
        this.listeners.push(shape);
    }

    removeListener(shape) {
        this.listeners = this.listeners.filter(l => l.id !== shape.id);
    }

    moveBy(v) {
        this.targetPosition.add(v);
        return this;
    }

    moveTo(position) {
        this.targetPosition = position;
        return this;
    }

    setFoV(value) {
        this.Projection.setFoV(value);
    }
}
