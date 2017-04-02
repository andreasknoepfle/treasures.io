import './canvas_helper';

beforeEach(() => {
  PIXI.loader.resources['spritesheet.json'] = null;
  PIXI.utils.skipHello();
});
