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

    move(v) {
        this.View.move(v);
        return this;
    }

    moveTo(v) {
        this.View.moveTo(v);
        return this;
    }

    setFoV(value) {
        this.Projection.setFoV(value);
    }
}
