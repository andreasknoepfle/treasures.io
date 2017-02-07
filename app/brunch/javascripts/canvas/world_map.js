import Island from './island';

class WorldMap extends PIXI.Container {
  constructor() {
    super();
    this.backgroundColor = 0x2980b9;
    this.addChild(new Island());
    this.x = -300;
    this.y = -300;
  }

  update(offset) {
    this.x += offset.x;
    this.y += offset.y;
  }
}

export default WorldMap;
