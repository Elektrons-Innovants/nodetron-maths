import { Point, AbstractPoint } from './Point2D'

export interface AbstractCircle {
  center: AbstractPoint,
  radius: number,
}

export class Circle implements AbstractCircle {
  public center: Point;

  constructor(x: number, y: number, public radius: number) {
    this.center = new Point(x, y)
  }
}
