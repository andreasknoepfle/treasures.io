import {Island} from './island'

export class WorldMap extends PIXI.Container {
  constructor() {
    super()
    this.backgroundColor = 0x2980b9
    this.addChild(new Island())
    this.vx = 0
    this.vy = 0
  }

  update() {
    this.x += this.vx
    this.y += this.vy
  }
}
