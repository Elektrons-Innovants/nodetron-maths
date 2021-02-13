export interface AbstractAngle {
  /**
  * value of the angle (in radian).
  */
  value: number,
}

export class Angle implements AbstractAngle {
  /**
   * Angle Constructor
   *
   * @param value value of the angle (in radian).
   */
  constructor(public value: number) { }

  /**
   * Angle's value in degree
   *
   * @returns Angle's value in degree.
   */
  public deg(): number {
    return Angle.rad2deg(this.value)
  }

  /**
   * Convert radian in degree.
   *
   * @returns angle's value in degree.
   */
  public static rad2deg(value: number): number {
    return value * (180 / Math.PI)
  }

  /**
   * Convert degree in radian.
   *
   * @returns angle's value in radian.
   */
  public static deg2rad(value: number): number {
    return value * (Math.PI / 180)
  }
}
