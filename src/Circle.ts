import { Point, AbstractPoint } from './Point2D'

export interface AbstractCircle {
  /**
   * Circle center
   */
  center: AbstractPoint,
  /**
   * Radius of the circle.
   */
  radius: number,
}

export class Circle implements AbstractCircle {
  /**
  * Circle center.
  */
  public center: Point;

  /**
   * Constructor of Circle.
   *
   * @param x x-coordinate of circle center.
   * @param y y-coordinate of circle center.
   * @param radius radius of circle.
   */
  constructor(x: number, y: number, public radius: number) {
    this.center = new Point(x, y)
  }

  /**
   * See if a point is inside in the circle.
   *
   * @param p The point to know if he is inside the circle.
   * @return Result if it's inside in the circle.
   */
  public isInside(p : Point) : boolean {
    return this.center.distance(p) <= this.radius
  }
}
