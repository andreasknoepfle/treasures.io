import Ocean from '../../../app/brunch/javascripts/canvas/ocean';

describe('Ocean', () => {
  let ocean;
  let island1;
  let island2;
  let islands;
  const point = { x: 300, y: 300 };
  beforeEach(() => {
    island1 = { outline_points: [] };
    island2 = { outline_points: [] };
    islands = [island1, island2];
    ocean = new Ocean({ islands });
  });

  describe('#collides', () => {
    beforeEach(() => {
      spyOn(ocean.islands[0], 'collides');
      spyOn(ocean.islands[1], 'collides');
    });

    it('returns true when an island collides', () => {
      ocean.islands[0].collides.and.returnValue(true);
      ocean.islands[1].collides.and.returnValue(false);
      expect(ocean.collides(point)).toBe(true);
    });

    it('returns false when no island collides', () => {
      ocean.islands[0].collides.and.returnValue(false);
      ocean.islands[1].collides.and.returnValue(false);
      expect(ocean.collides(point)).toBe(false);
    });
  });
});
