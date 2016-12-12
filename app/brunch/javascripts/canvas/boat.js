import { LoadedSprite } from './loaded_sprite'

export class Boat extends PIXI.Container {
  constructor() {
    super()
    this.width = 128
    this.height = 128
    this.vx = 0
    this.vy = 0
    this.loadSprites()
    this.setSide(6)
  }

  update(width, height) {
    this.x = (width - this.width) / 2
    this.y = (height - this.height) / 2
    let spriteIndex = this.spriteNumber()

    if(this.sideNeedsChange(spriteIndex)) {
      this.setSide(spriteIndex)
    }
  }

  setSide(spriteIndex) {
    this.removeChildren()
    let newShipSide = this.shipSides[spriteIndex]
    let newShadowSide = this.shipShadows[spriteIndex]
    this.addChild(newShadowSide, newShipSide)
    this.currentSpriteIndex = spriteIndex
  }

  spriteNumber() {
    switch(this.vy) {
      case -1:
        switch(this.vx) {
          case -1:
            return 1
          case 0:
            return 0
          case 1:
            return 7
        }
      case 0:
        switch(this.vx) {
          case -1:
            return 2
          case 0:
            return -1
          case 1:
            return 6
        }
      case 1:
        switch(this.vx) {
          case -1:
            return 3
          case 0:
            return 4
          case 1:
            return 5
        }
    }
  }

  sideNeedsChange(spriteIndex) {
    return spriteIndex != -1 &&
      spriteIndex != this.currentSpriteIndex
  }

  loadSprites() {
    this.shipSides = []
    this.shipShadows = []
    for (var i = 1; i <= 8; i++) {
      let ship = new LoadedSprite(`ship.${i}.png`)
      let shadow = new LoadedSprite(`shadow.${i}.png`)
      this.shipSides.push(ship)
      this.shipShadows.push(shadow)
    }
  }
}
