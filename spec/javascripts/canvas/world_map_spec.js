import 'pixi.js';
import WorldMap from '../../../app/brunch/javascripts/canvas/world_map';

describe('WorldMap', () => {
  let worldMap;

  beforeEach(() => {
    worldMap = new WorldMap();
  });

  describe('#update', () => {
    it('sets the map offset', () => {
      worldMap.update(1000, 800);
      expect(worldMap.offset.x).toEqual(500);
      expect(worldMap.offset.y).toEqual(400);
    });
  });

  describe('#updateWorldPosition', () => {
    beforeEach(() => {
      worldMap.offset = { x: 10, y: 10 };
    });

    it('moves when there is no collision', () => {
      worldMap.updateWorldPosition({ x: 1, y: -1 });
      expect(worldMap.x).toEqual(9);
      expect(worldMap.y).toEqual(11);
    });
  });
});
