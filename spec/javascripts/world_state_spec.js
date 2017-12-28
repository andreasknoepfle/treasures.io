import WorldState from '../../app/javascript/src/world_state';

describe('WorldState', () => {
  let worldState;
  let emitCallback;
  const oceans = {
    '0:0': {}
  };
  beforeEach(() => {
    emitCallback = jasmine.createSpy();
    worldState = new WorldState(oceans, emitCallback);
  });

  describe('updateWorld', () => {
    const requiredOceans = [{ x: -3, y: -2 }, { x: -3, y: -1 }, { x: -3, y: 0 },
                            { x: -3, y: 1 }, { x: -2, y: -2 }, { x: -2, y: -1 },
                            { x: -2, y: 0 }, { x: -2, y: 1 }, { x: -1, y: -2 },
                            { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 },
                            { x: 0, y: -2 }, { x: 0, y: -1 }, { x: 0, y: 0 },
                            { x: 0, y: 1 }, { x: 1, y: -2 }, { x: 1, y: -1 },
                            { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: -2 },
                            { x: 2, y: -1 }, { x: 2, y: 0 }, { x: 2, y: 1 }];
    it('emits the required oceans', () => {
      worldState.updateWorld({ x: 0, y: 0 }, 1000, 800);
      expect(emitCallback).toHaveBeenCalledWith('loadOceans', requiredOceans);
    });

    it('loads fetched oceans', () => {
      worldState.oceans = { '0:0': { islands: [], fetched: true } };
      spyOn(worldState.worldMap, 'addChild');
      worldState.updateWorld({ x: 0, y: 0 }, 1000, 800);
      expect(worldState.worldMap.addChild).toHaveBeenCalled();
      expect(worldState.oceans['0:0'].ui).toBeDefined();
    });

    it('moves the world when an offset is given', () => {
      worldState.oceans = { '-1:-1': { islands: [], fetched: true } };
      worldState.loadNewOceans();
      spyOn(worldState.oceans['-1:-1'].ui, 'collides');
      worldState.worldPosition = { x: -2, y: -2 };
      worldState.updateWorld({ x: -5, y: -4 }, 1000, 800);
      expect(worldState.worldPosition.x).toEqual(-7);
      expect(worldState.worldPosition.y).toEqual(-6);
      expect(worldState.oceans['-1:-1'].ui.collides).toHaveBeenCalledWith({ x: 993, y: 994 });
    });
  });
});
