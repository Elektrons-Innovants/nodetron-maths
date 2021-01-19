export interface IVector {
  x: number,
  y: number,
}

export default class Vector implements IVector {
  constructor(public x: number, public y: number) {}
}
