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
  beforeEach(() => {
    SpriteHelper.mockSprites(boatSprites);
  });

  it('is a boat with loaded sprites', () => {
    const boat = new Boat();
    expect(boat.shipSides.length).toEqual(8);
    expect(boat.shipShadows.length).toEqual(8);
  });

  it('the ship is setup to head to the right', () => {
    const boat = new Boat();
    expect(boat.currentSpriteIndex).toEqual(6);
  });

  it('the ship does not move', () => {
    const boat = new Boat();
    expect(boat.vx).toEqual(0);
    expect(boat.vy).toEqual(0);
  });

  describe('updateSprite', () => {
    it('can head to the left', () => {
      const boat = new Boat();
      boat.vx = -1;
      boat.updateSprite();
      expect(boat.currentSpriteIndex).toEqual(2);
    });

    it('can head to the top', () => {
      const boat = new Boat();
      boat.vy = -1;
      boat.updateSprite();
      expect(boat.currentSpriteIndex).toEqual(0);
    });

    it('can head to the top-left', () => {
      const boat = new Boat();
      boat.vx = -1;
      boat.vy = -1;
      boat.updateSprite();
      expect(boat.currentSpriteIndex).toEqual(1);
    });

    it('keeps the last position if movement stops', () => {
      const boat = new Boat();
      boat.vx = -1;
      boat.updateSprite();
      boat.vx = 0;
      boat.updateSprite();
      expect(boat.currentSpriteIndex).toEqual(2);
    });
  });

  describe('.speed', () => {
    it('returns direction with factor 5', () => {
      expect(Boat.speed(1)).toEqual(5);
      expect(Boat.speed(-1)).toEqual(-5);
    });
  });
});
