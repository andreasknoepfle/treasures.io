import { Container } from 'pixi.js';

class Ocean extends Container {
  constructor(islands) {
    super();
    this.islands = islands;

    // as a debug tool
    // this.lineStyle(1, '#000000');
    // this.drawPolygon([0, 0, 0, 1000, 1000, 1000, 1000, 0]);

    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 1000;
    this.islands.forEach((island) => {
      this.addChild(island);
    });
  }

  collides(point) {
    let collides = false;
    this.islands.forEach((island) => {
      collides = collides || island.collides(point);
    });
    return collides;
  }
}

export default Ocean;
