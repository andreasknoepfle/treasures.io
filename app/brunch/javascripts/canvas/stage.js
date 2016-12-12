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

  stopBoat(axis) {
    this.worldMap[axis] = 0
    this.boat[axis] = 0
  }

  moveBoat(axis, direction) {
    this.worldMap[axis] = (-1 * direction) * 5
    this.boat[axis] = direction
  }

  setupKeyboard() {
    left.press = () => {
      this.moveBoat('vx', -1)
    }
    left.release = () => {
      this.stopBoat('vx')
    }

    up.press = () => {
      this.moveBoat('vy', -1)
    }
    up.release = () => {
      this.stopBoat('vy')
    }

    right.press = () => {
      this.moveBoat('vx', 1)
    }
    right.release = () => {
      this.stopBoat('vx')
    }

    down.press = () => {
      this.moveBoat('vy', 1)
    }
    down.release = () => {
      this.stopBoat('vy')
    }
  }
}
