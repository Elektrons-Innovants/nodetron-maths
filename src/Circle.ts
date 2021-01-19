import Point from './Point2D'

export default class Circle {
    public center: Point;

    constructor(x: number, y: number, public radius: number) {
      this.center = new Point(x, y)
    }
}
