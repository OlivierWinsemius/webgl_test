export default class ViewMatrix {
    constructor(camera) {
        this.listeners = [camera];
        this.eye = new Vector(0, 0, 2);
        this.up = new Vector(0, 1, 0);
        this.target = new Vector(0, 0, 0);
        this.matrix = new Matrix().lookAt(this.eye, this.target, this.up);
    }

    listen(callback) {
        this.listeners.push(callback);
    }

    move(v) {
        this.eye.add(v);
        this.matrix = new Matrix().lookAt(this.eye, this.target, this.up);
        this.listeners.forEach(l => l());
        return this;
    }

    moveTo(v, s) {
        this.eye.lerp(v, s);
        this.matrix = new Matrix().lookAt(this.eye, this.target, this.up);
        this.listeners.forEach(l => l());
        return this;
    }
}
