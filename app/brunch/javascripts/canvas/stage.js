
import { WorldMap } from './world_map'
import { Boat } from './boat'

export class Stage extends PIXI.Container {
  constructor() {
    super()
    this.worldMap = new WorldMap()
    this.boat = new Boat()
    this.addChild(this.worldMap)
    this.addChild(this.boat)
  }

  update(width, height) {
    this.worldMap.update()
    this.boat.update(width, height)
  }
}
