import 'pixi.js';
import WorldMap from '../../../app/brunch/javascripts/canvas/world_map';

describe('WorldMap', () => {
  let worldMap;

  beforeEach(() => {
    worldMap = new WorldMap();
  });

  describe('#update', () => {
    it('moves the world by the specified offset in the opposite direction', () => {
      worldMap.x = 10;
      worldMap.y = 20;
      worldMap.update({ x: -5, y: 20 });
      expect(worldMap.x).toEqual(15);
      expect(worldMap.y).toEqual(0);
    });
  });

  describe('#move', () => {
    beforeEach(() => {
      worldMap.x = 10;
      worldMap.y = 10;
      worldMap.ocean = jasmine.createSpyObj('ocean', ['collides']);
    });

    it('moves when there is no collision', () => {
      worldMap.ocean.collides.and.returnValue(false);
      worldMap.move({ x: 1, y: -1 });
      expect(worldMap.x).toEqual(9);
      expect(worldMap.y).toEqual(11);
    });

    it('moves when there is no collision', () => {
      worldMap.ocean.collides.and.returnValue(true);
      worldMap.move({ x: 1, y: -1 });
      expect(worldMap.x).toEqual(10);
      expect(worldMap.y).toEqual(10);
    });
  });
});
