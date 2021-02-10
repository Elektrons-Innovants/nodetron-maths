import { Angle } from '../angle'
import { Circle } from '../circle'
import { Point } from '../point2D'

describe('Angle class', () => {
  test('Angle - Constructor', () => {
    const angl = new Angle(Math.PI / 2)
    expect(angl.value).toBe(Math.PI / 2)
  })

  test('Angle - rad2deg', () => {
    const angles = [
      { value: Math.PI / 2, result: 90 },
      { value: Math.PI / 6, result: 30 },
      { value: -3 * (Math.PI / 2), result: -270 },
    ]

    angles.forEach((angle) => {
      const result = Math.abs(angle.result - Angle.rad2deg(angle.value))
      expect(
        result <= 10e-9 && result >= -10e-9,
      ).toBe(true)
    })
  })

  test('Angle - deg2rad', () => {
    const angles = [
      { value: 90, result: Math.PI / 2 },
      { value: 30, result: Math.PI / 6 },
      { value: -270, result: -3 * (Math.PI / 2) },
    ]

    angles.forEach((angle) => {
      const result = Math.abs(angle.result - Angle.deg2rad(angle.value))
      expect(
        result <= 10e-9 && result >= -10e-9,
      ).toBe(true)
    })
  })
})
