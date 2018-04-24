export default class Camera {
    constructor() {
        this.listeners = [];
        this.velocity = new Vector();
        this.targetVelocity = this.velocity.duplicate();
        this.eye = new Vector(0, 0, 2);
        this.eyeTarget = this.eye.duplicate();
        this.up = new Vector(0, 1, 0);
        this.target = new Vector(0, 0, 0);
        this.ViewMatrix = new Matrix().lookAt(this.eye, this.target, this.up);
        this.FoV = Math.PI / 4;
        this.aspect = this.width / this.height;
        this.updateProjectionType = this.updatePersp;
        this.updateProjection();
    }

    onResize() {
        const width = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width !== width || gl.canvas.height !== height) {
            this.aspect = width / height;
            gl.canvas.width = width;
            gl.canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            this.updateProjection();
        }
    }

    update() {
        this.onResize();
        const movement = new Vector();
        if (App.keys[65]) { movement.add(new Vector(-0.1, 0, 0)); }
        if (App.keys[68]) { movement.add(new Vector(0.1, 0, 0)); }
        if (App.keys[87]) { movement.add(new Vector(0, 0, -0.1)); }
        if (App.keys[83]) { movement.add(new Vector(0, 0, 0.1)); }
        if (App.keys[16]) { movement.add(new Vector(0, -0.1, 0)); }
        if (App.keys[32]) { movement.add(new Vector(0, 0.1, 0)); }
        this.move(movement);
        this.velocity.lerp(this.targetVelocity, 0.1);
        this.targetVelocity.scale(0.5);
        this.eyeTarget.add(this.velocity);
        if (this.eye.dist(this.eyeTarget) > 0.1) {
            this.eye.lerp(this.eyeTarget, 0.1);
            this.ViewMatrix = new Matrix().lookAt(this.eye, this.target, this.up);
            this.updateView();
        }
    }

    updateView() {
        this.listeners.forEach(l => l.setUniform('modelView'));
    }

    updateProjection() {
        this.updateProjectionType();
        this.listeners.forEach(l => l.setUniform('projection'));
    }

    updateOrtho() {
        const { aspect } = this;
        this.ProjectionMatrix = new Matrix().ortho(-aspect, aspect, -1, 1, 0.01, 1000);
    }

    updatePersp() {
        const { FoV, aspect } = this;
        this.ProjectionMatrix = new Matrix().persp(FoV, aspect, 0.01, 100);
    }

    listen(shape) {
        this.listeners.push(shape);
    }

    removeListener(shape) {
        this.listeners = this.listeners.filter(l => l.id !== shape.id);
    }

    move(v) {
        this.targetVelocity = v;
        return this;
    }

    moveTo(v) {
        this.eyeTarget = v.duplicate();
        return this;
    }

    setFoV(value) {
        this.FoV = value;
        this.updateProjection();
        return this;
    }
}
