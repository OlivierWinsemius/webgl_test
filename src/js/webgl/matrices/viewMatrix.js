export default class ViewMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.eye = new Vector(0, 0, 2);
        this.eyeTarget = this.eye.duplicate();
        this.up = new Vector(0, 1, 0);
        this.target = new Vector(0, 0, 0);
        this.matrix = new Matrix().lookAt(this.eye, this.target, this.up);
        this.update();
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    update() {
        if (this.eye.diff(this.eyeTarget).magnitude > 0.1) {
            this.lerpTo(this.eyeTarget, 0.1);
        }
        requestAnimationFrame(this.update.bind(this));
    }

    lerpTo(v, s) {
        this.eye.lerp(v, s);
        this.matrix = new Matrix().lookAt(this.eye, this.target, this.up);
        this.listeners.forEach(l => l());
        return this;
    }
}
