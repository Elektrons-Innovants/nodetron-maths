export interface AbstractAngle {
  /**
  * value of the angle (in radian).
  */
  value: number,
}

export class Angle implements AbstractAngle {
  constructor(public value: number) { }

  public deg(): number {
    return Angle.rad2deg(this.value)
  }

  public static rad2deg(value: number): number {
    return value * (180 / Math.PI)
  }

  public static deg2rad(value: number): number {
    return value * (Math.PI / 180)
  }
}
