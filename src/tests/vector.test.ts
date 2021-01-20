import { Vector } from '../Vector2D'

describe('Vector class', () => {
  test('Vector constructor', () => {
    const p = new Vector(1, 2)

    expect(p.x).toBe(1)
    expect(p.y).toBe(2)
  })
})
