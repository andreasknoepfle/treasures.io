import Ocean from '../../../app/brunch/javascripts/canvas/ocean';
import Island from '../../../app/brunch/javascripts/canvas/island';

describe('Ocean', () => {
  let ocean;
  let island1;
  let island2;
  let islands;
  const point = { x: 300, y: 300 };
  beforeEach(() => {
    island1 = new Island([]);
    island2 = new Island([]);
    islands = [island1, island2];
    ocean = new Ocean(islands);
  });

  describe('#collides', () => {
    beforeEach(() => {
      spyOn(island1, 'collides');
      spyOn(island2, 'collides');
    });

    it('returns true when an island collides', () => {
      island1.collides.and.returnValue(true);
      island2.collides.and.returnValue(false);
      expect(ocean.collides(point)).toBe(true);
    });

    it('returns false when no island collides', () => {
      island1.collides.and.returnValue(false);
      island2.collides.and.returnValue(false);
      expect(ocean.collides(point)).toBe(false);
    });
  });
});
