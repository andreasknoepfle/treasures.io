
import {Island} from './island'
import {keyboard} from './keyboard'

let left = keyboard(37)
let up = keyboard(38)
let right = keyboard(39)
let down = keyboard(40)

export class WorldMap extends PIXI.Container {
  constructor() {
    super()
    this.backgroundColor = 0x2980b9
    this.addChild(new Island())
    this.setupKeyboard()
    this.vx = 0
    this.vy = 0
  }

  update() {
    this.x += this.vx
    this.y += this.vy
  }

  setupKeyboard() {

    left.press = () => {
      this.vx = 5
    }
    left.release = () => {
      this.vx = 0
    }

    up.press = () => {
      this.vy = 5
    }
    up.release = () => {
      this.vy = 0
    }

    right.press = () => {
      this.vx = -5
    }
    right.release = () => {
      this.vx = 0
    }

    down.press = () => {
      this.vy = -5
    }
    down.release = () => {
      this.vy = 0
    }
  }
}
