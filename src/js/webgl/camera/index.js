import ViewMatrix from '../matrices/viewMatrix';
import ProjectionMatrix from '../matrices/projectionMatrix';

export default class Camera {
    constructor() {
        this.View = new ViewMatrix();
        this.Projection = new ProjectionMatrix();
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
