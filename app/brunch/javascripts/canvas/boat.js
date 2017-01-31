import LoadedSprite from './loaded_sprite';

const spriteMatrix = [[1, 0, 7], [2, -1, 6], [3, 4, 5]];

class Boat extends PIXI.Container {
  constructor() {
    super();
    this.width = 128;
    this.height = 128;
    this.vx = 0;
    this.vy = 0;
    this.loadSprites();
    this.setSide(6);
  }

  update(width, height) {
    this.updateSprite();
    const previousX = this.x;
    const previousY = this.y;
    this.x = parseInt((width - this.width) / 2, 10);
    this.y = parseInt((height - this.height) / 2, 10);
    const offset = {
      x: (this.x - previousX) - Boat.speed(this.vx),
      y: (this.y - previousY) - Boat.speed(this.vy)
    };
    return offset;
  }

  updateSprite() {
    if (this.sideNeedsChange(this.spriteNumber())) {
      this.setSide(this.spriteNumber());
    }
  }

  static speed(direction) {
    return 5 * direction;
  }

  setSide(spriteIndex) {
    this.removeChildren();
    const newShipSide = this.shipSides[spriteIndex];
    const newShadowSide = this.shipShadows[spriteIndex];
    this.addChild(newShadowSide, newShipSide);
    this.currentSpriteIndex = spriteIndex;
  }

  spriteNumber() {
    return spriteMatrix[1 + this.vy][1 + this.vx];
  }

  sideNeedsChange(spriteIndex) {
    return spriteIndex !== -1 &&
      spriteIndex !== this.currentSpriteIndex;
  }

  loadSprites() {
    this.shipSides = [];
    this.shipShadows = [];
    for (let i = 1; i <= 8; i += 1) {
      const ship = new LoadedSprite(`ship.${i}.png`);
      const shadow = new LoadedSprite(`shadow.${i}.png`);
      this.shipSides.push(ship);
      this.shipShadows.push(shadow);
    }
  }
}

export default Boat;
