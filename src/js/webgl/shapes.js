import Shape from './shapes/shape';
import Rect from './shapes/rect';
import Ellipse from './shapes/ellipse';

Shape.defaultColor = [1, 1, 1, 1];

export default {
    setColor: (r, g, b, a = 1) => { Shape.defaultColor = [r, g, b, a]; },
    Rect,
    Ellipse,
};
