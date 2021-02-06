import { Vector } from '../Vector2D'

describe('Vector - constructor', () => {
  test('1, 2', () => {
    const v = new Vector(1, 2)

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
  })
})

describe('Vector - norm', () => {
  test('0.0, 0.0', () => {
    const v = new Vector(0.0, 0.0)
    expect(v.norm()).toBe(0.0)
  })

  test('1.0, 0.0', () => {
    const v = new Vector(1.0, 0.0)
    expect(v.norm()).toBe(1.0)
  })

  test('0.0, 1.0', () => {
    const v = new Vector(0.0, 1.0)
    expect(v.norm()).toBe(1.0)
  })

  test('4.0, 3.0', () => {
    const v = new Vector(4.0, 3.0)
    expect(v.norm()).toBe(5.0)
  })

  test('3.0, 4.0', () => {
    const v = new Vector(3.0, 4.0)
    expect(v.norm()).toBe(5.0)
  })
})

describe('Vector - normalize', () => {
  test('1.0, 0.0', () => {
    const v = new Vector(1.0, 0.0)
    v.normalized()
    expect(v.x).toBe(1.0)
    expect(v.y).toBe(0.0)
  })

  test('2.0, 0.0', () => {
    const v = new Vector(2.0, 0.0)
    v.normalized()
    expect(v.x).toBe(1.0)
    expect(v.y).toBe(0.0)
  })

  test('0.0, 1.0', () => {
    const v = new Vector(0.0, 1.0)
    v.normalized()
    expect(v.x).toBe(0.0)
    expect(v.y).toBe(1.0)
  })

  test('0.0, 2.0', () => {
    const v = new Vector(0.0, 2.0)
    v.normalized()
    expect(v.x).toBe(0.0)
    expect(v.y).toBe(1.0)
  })

  test('3.0, 4.0', () => {
    const v = new Vector(3.0, 4.0)
    v.normalized()
    expect(v.x).toBe(3.0 / 5.0)
    expect(v.y).toBe(4.0 / 5.0)
  })
})
