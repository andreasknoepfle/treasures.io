import PIXI from 'pixi.js';

class LoadedSprite extends PIXI.Sprite {
  constructor(image) {
    const sprite = PIXI.loader.resources['spritesheet.json'].textures[image];
    super(sprite);
  }
}

export default LoadedSprite;
