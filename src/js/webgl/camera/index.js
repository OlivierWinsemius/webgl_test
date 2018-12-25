import ViewMatrix from '../matrices/viewMatrix';
import ProjectionMatrix from '../matrices/projectionMatrix';

export default class Camera {
    constructor() {
        this.listeners = [];

        this.acceleration = 0.001;
        this.velocity = new Vector();

        this.View = new ViewMatrix();
        this.Projection = new ProjectionMatrix();
    }

    onResize() {
        const width = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width !== width || gl.canvas.height !== height) {
            const aspect = width / height;
            gl.canvas.width = width;
            gl.canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            this.Projection.setAspect(aspect);
        }
    }

    update() {
        this.onResize();

        if (App.keys[65]) { this.velocity.sub(new Vector(this.acceleration, 0, 0)); }
        if (App.keys[68]) { this.velocity.add(new Vector(this.acceleration, 0, 0)); }
        if (App.keys[87]) { this.velocity.sub(new Vector(0, 0, this.acceleration)); }
        if (App.keys[83]) { this.velocity.add(new Vector(0, 0, this.acceleration)); }
        if (App.keys[16]) { this.velocity.sub(new Vector(0, this.acceleration, 0)); }
        if (App.keys[32]) { this.velocity.add(new Vector(0, this.acceleration, 0)); }

        // console.log(this.velocity);
        if (this.velocity.magnitude >= this.acceleration * 0.1) {
            this.View.move(this.velocity);
            this.velocity.scale(0.9);
            this.updateView();
        } else if (this.velocity.magnitude > 0) {
            this.velocity.scale(0);
        }
    }

    updateView() {
        this.listeners.forEach(l => l.setUniform('modelView'));
    }

    updateProjection() {
        this.updateProjectionType();
        this.listeners.forEach(l => l.setUniform('projection'));
    }

    listen(shape) {
        this.listeners.push(shape);
    }

    removeListener(shape) {
        this.listeners = this.listeners.filter(l => l.id !== shape.id);
    }

    move(x, y, z) {
        this.velocity = new Vector(
            x || this.velocity.x,
            y || this.velocity.y,
            z || this.velocity.z,
        );
        return this;
    }

    stop(dir) {
        const { x, y, z } = this.velocityTarget;
        this.velocityTarget = new Vector(
            dir === 'x' ? 0 : x,
            dir === 'y' ? 0 : y,
            dir === 'z' ? 0 : z,
        );
    }

    moveTo(x, y, z) {
        this.View.eyeTarget = new Vector(x, y, z);
        return this;
    }

    setFoV(value) {
        this.FoV = value;
        this.updateProjection();
        return this;
    }
}
