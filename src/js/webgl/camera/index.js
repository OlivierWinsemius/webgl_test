import ViewMatrix from '../matrices/viewMatrix';
import ProjectionMatrix from '../matrices/projectionMatrix';

export default class Camera {
    constructor() {
        this.listeners = [];
        this.View = new ViewMatrix(this.updateView.bind(this));
        this.Projection = new ProjectionMatrix(this.updateProjection.bind(this));
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

    moveBy(x, y = 0, z = 0) {

    }

    moveTo(x, y, z) {

    }

    rotateBy(x, y = 0, z = 0) {

    }

    rotateTo(x, y, z) {

    }

    setFOV(value) {

    }
}
