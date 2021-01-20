import Circle from '../Circle'

describe('Circle class', () => {
  test('Circle constructor', () => {
    const p = new Circle(1, 2, 5)

    expect(p.center.x).toBe(1)
    expect(p.center.y).toBe(2)

    expect(p.radius).toBe(5)
  })
})
