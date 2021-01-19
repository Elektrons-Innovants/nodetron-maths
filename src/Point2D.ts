export default class Point {
    public x = 0;

    public y = 0;

    public distance(p: Point) : number {
      return Math.sqrt(((p.x - this.x) ** 2) + ((p.y - this.y) ** 2))
    }
}
