use 'esversion: 6'
export class LoadedSprite extends PIXI.Sprite {
  constructor(image) {
    let sprite = PIXI.loader.resources["spritesheet.json"].textures[image]
    super(sprite)
  }
}
