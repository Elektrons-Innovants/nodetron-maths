import { Angle } from './angle'

export interface AbstractVector {
  /**
   * x-coordinate in 2D plan.
   */
  x: number,
  /**
   * y-coordinate in 2D plan.
   */
  y: number,
}

export class Vector implements AbstractVector {
  /**
   * Vector 2D constructor.
   *
   * @param x - The x of the vector.
   * @param y - The y of the vector.
   */
  constructor(public x: number, public y: number) { }

  /**
   * Get the norm of the vector.
   *
   * @return the norm of the vector.
   */
  public norm(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  /**
   * Normalized the vector.
   *
   * @remarks
   *
   * This method modify parameters on the object.
   */
  public normalized(): void {
    const norm = this.norm()
    if (norm !== 0) {
      this.x /= norm
      this.y /= norm
    }
  }

  public angle(): Angle {
    return Vector.vector2angle(this)
  }

  public static vector2angle(direction: Vector): Angle {
    if (direction.norm() === 0.0) return new Angle(0.0)

    direction.normalized()
    let res = Math.acos(direction.x)
    if (direction.y < 0) res = -res
    return new Angle(res)
  }
}
