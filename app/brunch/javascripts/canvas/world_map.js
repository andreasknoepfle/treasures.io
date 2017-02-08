import { Container } from 'pixi.js';
import Ocean from './ocean';
import Island from './island';
import constants from './constants';

class WorldMap extends Container {
  constructor() {
    super();
    this.backgroundColor = 0x2980b9;

    this.ocean = new Ocean([new Island(constants.DEMO_ISLAND)]);
    this.addChild(this.ocean);
    this.x = constants.SPRITE_SIZE / 2;
    this.y = constants.SPRITE_SIZE / 2;
    this.worldPosition = { x: 0, y: 0 };
  }

  move(offset) {
    const newPosition = {
      x: this.worldPosition.x + offset.x,
      y: this.worldPosition.y + offset.y
    };
    if ((offset.x || offset.y) && !this.ocean.collides(newPosition)) {
      this.worldPosition = newPosition;
      this.update(offset);
    }
  }

  update(offset) {
    this.x -= offset.x;
    this.y -= offset.y;
  }
}

export default WorldMap;
