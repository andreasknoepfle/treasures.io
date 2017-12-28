import 'pixi.js';
import Boat from '../../../app/javascript/src/canvas/boat';
import SpriteHelper from '../support/sprite_helper';

const boatSprites = [
  'ship.1.png',
  'ship.2.png',
  'ship.3.png',
  'ship.4.png',
  'ship.5.png',
  'ship.6.png',
  'ship.7.png',
  'ship.8.png',
  'shadow.1.png',
  'shadow.2.png',
  'shadow.3.png',
  'shadow.4.png',
  'shadow.5.png',
  'shadow.6.png',
  'shadow.7.png',
  'shadow.8.png'
];

describe('Boat', () => {
  let boat;

  beforeEach(() => {
    SpriteHelper.mockSprites(boatSprites);
    boat = new Boat();
  });

  it('is a boat with loaded sprites', () => {
    expect(boat.shipSides.length).toEqual(8);
    expect(boat.shipShadows.length).toEqual(8);
  });

  it('the ship is setup to head to the right', () => {
    expect(boat.currentSpriteIndex).toEqual(6);
  });

  it('the ship does not move', () => {
    expect(boat.vx).toEqual(0);
    expect(boat.vy).toEqual(0);
  });

  describe('.speed', () => {
    it('returns direction with factor 5', () => {
      expect(Boat.speed(1)).toEqual(5);
      expect(Boat.speed(-1)).toEqual(-5);
    });
  });

  describe('#move', () => {
    it('returns the offset the boat is moving', () => {
      boat.vx = 1;
      boat.vy = -1;
      const offset = boat.move();
      expect(offset.x).toEqual(5);
      expect(offset.y).toEqual(-5);
    });
  });

  describe('#update', () => {
    it('updates the sprite', () => {
      spyOn(boat, 'updateSprite');
      boat.width = 128;
      boat.height = 128;
      boat.update(1000, 800);
      expect(boat.updateSprite).toHaveBeenCalled();
      expect(boat.x).toEqual(436);
      expect(boat.y).toEqual(336);
    });
  });

  describe('#updateSprite', () => {
    it('can head to the left', () => {
      boat.vx = -1;
      boat.updateSprite();
      expect(boat.currentSpriteIndex).toEqual(2);
    });

    it('can head to the top-left', () => {
      boat.vx = -1;
      boat.vy = -1;
      boat.updateSprite();
      expect(boat.currentSpriteIndex).toEqual(1);
    });

    it('keeps the last position if movement stops', () => {
      boat.vx = -1;
      boat.updateSprite();
      boat.vx = 0;
      boat.updateSprite();
      expect(boat.currentSpriteIndex).toEqual(2);
    });
  });

  describe('#setSide', () => {
    it('removes previous sprites and adds ship and shadow', () => {
      spyOn(boat, 'removeChildren');
      spyOn(boat, 'addChild');
      boat.setSide(1);
      expect(boat.removeChildren).toHaveBeenCalled();
      expect(boat.addChild)
        .toHaveBeenCalledWith(boat.shipSides[1], boat.shipShadows[1]);
    });
  });

  describe('#spriteNumber', () => {
    it('returns a sprite number according to the direction', () => {
      boat.vx = 1;
      boat.vy = 1;
      expect(boat.spriteNumber()).toEqual(5);
      boat.vx = -1;
      expect(boat.spriteNumber()).toEqual(3);
      boat.vy = -1;
      expect(boat.spriteNumber()).toEqual(1);
    });
  });
});
