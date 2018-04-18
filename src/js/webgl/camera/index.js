import ViewMatrix from '../matrices/viewMatrix';
import ProjectionMatrix from '../matrices/projectionMatrix';

export default class Camera {
    constructor() {
        this.listeners = [];
        this.View = new ViewMatrix(this.updateView.bind(this));
        this.Projection = new ProjectionMatrix(this.updateProjection.bind(this));
        this.velocity = new Vector();
        this.velocityTarget = new Vector();
        this.update();
    }

    update() {
        this.velocity.lerp(this.velocityTarget, 0.1);
        this.View.eyeTarget.add(this.velocity);
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

    move(x, y, z) {
        this.velocityTarget = new Vector(
            x || this.velocity.x,
            y || this.velocity.y,
            z || this.velocity.z,
        );
        return this;
    }

    stop(v) {
        const { x, y, z } = this.velocityTarget;
        this.velocityTarget = new Vector(
            v === 'x' ? 0 : x,
            v === 'y' ? 0 : y,
            v === 'z' ? 0 : z,
        );
        console.log(v, this.velocityTarget);
    }

    moveTo(x, y, z) {
        console.log(x, y, z);
        this.View.eyeTarget = new Vector(x, y, z);
        return this;
    }

    setFoV(value) {
        this.Projection.setFoV(value);
    }
}
