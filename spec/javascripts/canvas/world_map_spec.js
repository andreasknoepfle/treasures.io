import 'pixi.js';
import WorldMap from '../../../app/brunch/javascripts/canvas/world_map';

describe('WorldMap', () => {
  let worldMap;

  beforeEach(() => {
    worldMap = new WorldMap();
  });

  describe('#update', () => {
    it('moves the world by the specified offset', () => {
      worldMap.x = 10;
      worldMap.y = 20;
      worldMap.update({ x: -5, y: 20 });
      expect(worldMap.x).toEqual(5);
      expect(worldMap.y).toEqual(40);
    });
  });
});
