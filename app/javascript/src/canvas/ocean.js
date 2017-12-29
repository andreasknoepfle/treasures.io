import { Container } from 'pixi.js';
import Island from './island';

class Ocean extends Container {
  constructor(data) {
    super();
    this.islands = [];
    this.x = data.x * 1000;
    this.y = data.y * 1000;
    this.width = 1000;
    this.height = 1000;
    data.islands.forEach((i) => {
      const island = new Island(i.outline_points);
      this.islands.push(island);
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
