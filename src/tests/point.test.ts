import Point from '../Point2D'

test('Point constructor', () => {
  const p = new Point(1, 1)
  expect(p.x).toBe(1)
  expect(p.y).toBe(1)
})

test('Distance between two points', () => {
  const p1 = new Point(8, -3)
  const p2 = new Point(4, -7)

  expect(p1.distance(p2)).toBe(Math.sqrt(32))
})
