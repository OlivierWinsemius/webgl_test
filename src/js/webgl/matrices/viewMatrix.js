export default class ViewMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.eye = new Vector(0, 0, 2);
        this.targetEye = this.eye.duplicate();
        this.up = new Vector(0, 1, 0);
        this.target = new Vector(0, 0, 0);
        this.matrix = new Matrix().lookAt(this.eye, this.target, this.up);
        this.update();
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    move(v) {
        this.targetEye.add(v);
    }

    moveTo(v) {
        this.targetEye = v.duplicate();
    }

    update() {
        if (this.eye.diff(this.targetEye).magnitude > 0.1) {
            this._lerpTo(this.targetEye, 0.1);
        }
        requestAnimationFrame(this.update.bind(this));
    }

    _lerpTo(v, s) {
        this.eye.lerp(v, s);
        this.matrix = new Matrix().lookAt(this.eye, this.target, this.up);
        this.listeners.forEach(l => l());
        return this;
    }
}
