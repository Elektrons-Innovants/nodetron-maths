import { Circle } from '../Circle'
import { Point } from '../Point2D'

describe('Circle class', () => {
  test('Circle constructor', () => {
    const circ = new Circle(1, 2, 5)

    expect(circ.center.x).toBe(1)
    expect(circ.center.y).toBe(2)

    expect(circ.radius).toBe(5)
  })

  test('Circle - point is inside', () => {
    const circ = new Circle(0, 0, 1)

    const points = [
      new Point(0, 0),

      new Point(0, 1),
      new Point(0, -1),
      new Point(1, 0),
      new Point(-1, 0),

      new Point(-Math.sqrt(2) / 2, -Math.sqrt(2) / 2),
      new Point(1 / 2, Math.sqrt(3) / 2),
    ]

    points.forEach((point) => {
      expect(circ.contains(point)).toBe(true)
    })
  })

  test('Circle - point is not inside', () => {
    const circ = new Circle(0, 0, 1)

    const points = [
      new Point(1, 1),

      new Point(0, 1.1),
      new Point(0, -1.1),
      new Point(1.1, 0),
      new Point(-1.1, 0),
    ]

    points.forEach((point) => {
      expect(circ.contains(point)).toBe(false)
    })
  })
})
