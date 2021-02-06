/* eslint-disable class-methods-use-this */
export interface AbstractVector {
  x: number,
  y: number,
}

export class Vector implements AbstractVector {
  constructor(public x: number, public y: number) { }

  public norm(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  public normalized(): void {
    const norm = this.norm()
    if (norm !== 0) {
      this.x /= norm
      this.y /= norm
    }
  }
}
