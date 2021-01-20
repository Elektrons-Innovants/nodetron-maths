export interface IVector {
  x: number,
  y: number,
}

export class Vector implements IVector {
  constructor(public x: number, public y: number) {}
}
