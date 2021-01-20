export interface IPoint {
  x: number,
  y: number,
}

export class Point implements IPoint {
  constructor(public x: number, public y: number) {}

  public distance(p: Point) : number {
    return Math.sqrt(((p.x - this.x) ** 2) + ((p.y - this.y) ** 2))
  }
}
