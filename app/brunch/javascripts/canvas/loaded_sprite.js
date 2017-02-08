import { Sprite } from 'pixi.js';

class LoadedSprite extends Sprite {
  constructor(image) {
    const sprite = PIXI.loader.resources['spritesheet.json'].textures[image];
    super(sprite);
  }
}

export default LoadedSprite;
