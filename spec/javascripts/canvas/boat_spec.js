import 'pixi.js';
import Boat from '../../../app/brunch/javascripts/canvas/boat';
import SpriteHelper from '../../helpers/sprite_helper';

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

  describe('#offset', () => {
    it('sets the boat to be in the middle and returns the new offset', () => {
      boat.width = 128;
      boat.height = 128;
      boat.x = 10;
      boat.y = 10;
      const offset = boat.offset(256, 255);
      expect(boat.x).toEqual(64);
      expect(boat.y).toEqual(63);
      expect(offset.x).toEqual(54);
      expect(offset.y).toEqual(53);
    });
  });

  describe('#update', () => {
    it('updates the sprite', () => {
      spyOn(boat, 'updateSprite');
      spyOn(boat, 'offset');
      boat.vx = -1;
      boat.update(10, 10);
      expect(boat.updateSprite).toHaveBeenCalled();
      expect(boat.offset).toHaveBeenCalledWith(10, 10);
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
