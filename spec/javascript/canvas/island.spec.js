import Island from '../../../app/javascript/src/canvas/island';

describe('Island', () => {
  let island;
  const points = [[500, 500], [510, 500], [510, 510], [500, 510]];
  beforeEach(() => {
    island = new Island(points);
  });

  it('is placed at 0/0', () => {
    expect(island.x).toEqual(0);
    expect(island.y).toEqual(0);
  });

  describe('#collides', () => {
    it('does collision detection with a point', () => {
      expect(island.collides({ x: 300, y: 300 })).toBe(false);
      expect(island.collides({ x: 500, y: 500 })).toBe(true);
      expect(island.collides({ x: 509, y: 509 })).toBe(true);
      expect(island.collides({ x: 499, y: 499 })).toBe(false);
    });
  });
});
