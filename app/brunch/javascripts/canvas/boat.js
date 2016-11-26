import { LoadedSprite } from './loaded_sprite'

export class Boat extends LoadedSprite {
  constructor() {
    super("boat.png")
    this.scale.x = 0.5
    this.scale.y = 0.5
  }

  update(width, height) {
    this.x = (width - this.width) / 2
    this.y = (height - this.height) / 2
  }
}
