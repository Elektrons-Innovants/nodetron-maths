import Point, { IPoint } from './Point2D'

export interface ICircle {
  center: IPoint,
  radius: number,
}

export default class Circle implements ICircle {
    public center: Point;

    constructor(x: number, y: number, public radius: number) {
      this.center = new Point(x, y)
    }
}
