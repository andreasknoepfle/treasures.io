import './canvas_helper';

beforeEach(() => {
  PIXI.loader.resources['spritesheet.json'] = null;
  // eslint-disable-next-line no-underscore-dangle
  PIXI.utils._saidHello = true;
});
