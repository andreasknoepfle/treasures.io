use 'esversion: 6'

export class Island extends PIXI.Graphics {
  constructor() {
    super()
    this.beginFill(0xf1c40f)

    //Use `drawPolygon` to define the triangle as
    //a path array of x/y positions

    let points = []
    for (var i = 0; i < 100; i++) {
      points.push(Math.random()*300)
    }
    this.drawPolygon(points)

    this.x = 50
    this.y = 60
    this.width = 300
    this.height = 300
  }
}
