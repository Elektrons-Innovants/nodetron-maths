export interface AbstractPoint {
  /**
   * x-coordinate in 2D-plan Point.
   */
  x: number,
  /**
   * y-coordinate in 2D-plan Point.
   */
  y: number,
}

export class Point implements AbstractPoint {
  /**
   * Constructor of 2D-plan Point.
   *
   * @param x x-coordinate Point.
   * @param y y-coordinate Point.
   */
  constructor(public x: number, public y: number) {}

  /**
   * Get the distance between this instance and another 2D-point.
   *
   * @param p 2d-point.
   * @returns distance between this instance and another 2D-point.
   */
  public distance(p: Point) : number {
    return Math.sqrt(((p.x - this.x) ** 2) + ((p.y - this.y) ** 2))
  }
}
