import { Graphics } from 'pixi.js';

class Island extends Graphics {
  constructor(points) {
    super();
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 1000;

    this.beginFill(0xf1c40f);
    this.points = points.map(point => new PIXI.Point(parseInt(point[0], 10),
                                                     parseInt(point[1], 10)));


    this.polygon = new PIXI.Polygon(this.points);

    this.drawPolygon(this.polygon);
    this.endFill();
    // this.lineStyle(1, '#000000');
    // this.drawPolygon([0, 0, 0, 1000, 1000, 1000, 1000, 0]);
  }

  collides(point) {
    return this.polygon.contains(point.x, point.y);
  }
}

export default Island;
