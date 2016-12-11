import { WorldMap } from './world_map'
import { Boat } from './boat'
import {keyboard} from './keyboard'

let left = keyboard(37)
let up = keyboard(38)
let right = keyboard(39)
let down = keyboard(40)

export class Stage extends PIXI.Container {
  constructor() {
    super()
    this.worldMap = new WorldMap()
    this.boat = new Boat()
    this.addChild(this.worldMap)
    this.addChild(this.boat)
    this.setupKeyboard()
  }

  update(width, height) {
    this.worldMap.update()
    this.boat.update(width, height)
  }

  setupKeyboard() {
    left.press = () => {
      this.worldMap.vx = 5
      this.boat.vx = -1
    }
    left.release = () => {
      this.worldMap.vx = 0
      this.boat.vx = 0
    }

    up.press = () => {
      this.worldMap.vy = 5
      this.boat.vy = -1
    }
    up.release = () => {
      this.worldMap.vy = 0
      this.boat.vy = 0
    }

    right.press = () => {
      this.worldMap.vx = -5
      this.boat.vx = 1
    }
    right.release = () => {
      this.worldMap.vx = 0
      this.boat.vx = 0
    }

    down.press = () => {
      this.worldMap.vy = -5
      this.boat.vy = 1
    }
    down.release = () => {
      this.worldMap.vy = 0
      this.boat.vy = 0
    }
  }
}
