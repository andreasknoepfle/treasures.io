import { Container } from 'pixi.js';

class WorldMap extends Container {
  constructor() {
    super();
    this.backgroundColor = 0x2980b9;

    this.x = 0;
    this.y = 0;
    this.offset = { x: 0, y: 0 };
  }

  update(width, height) {
    this.offset = { x: parseInt(width / 2, 10), y: parseInt(height / 2, 10) };
  }

  updateWorldPosition({ x, y }) {
    this.x = -x + this.offset.x;
    this.y = -y + this.offset.y;
  }
}

export default WorldMap;
