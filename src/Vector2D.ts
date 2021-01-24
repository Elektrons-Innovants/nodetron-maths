export interface AbstractVector {
  x: number,
  y: number,
}

export class Vector implements AbstractVector {
  constructor(public x: number, public y: number) {}
}
