import Shape from './basicShape';
import Rect from './rect';
import Ellipse from './ellipse';

Shape.defaultColor = [1, 1, 1, 1];

export default {
    setColor: (r, g, b, a = 1) => { Shape.defaultColor = [r, g, b, a]; },
    Rect,
    Ellipse,
};
