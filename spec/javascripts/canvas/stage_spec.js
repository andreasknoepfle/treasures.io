import 'pixi.js';
import Stage from '../../../app/brunch/javascripts/canvas/stage';
import Keyboard from '../../../app/brunch/javascripts/canvas/keyboard';
import SpriteHelper from '../../helpers/sprite_helper';

describe('Stage', () => {
  let stage;
  beforeEach(() => {
    SpriteHelper.mockSprites([]);
    stage = new Stage();
  });

  describe('#setup', () => {
    it('sets up the keyboard shortcuts', () => {
      spyOn(Keyboard, 'key').and.returnValue({});
      stage.setup();
      [37, 38, 39, 40].forEach((keyCode) => {
        expect(Keyboard.key).toHaveBeenCalledWith(keyCode);
      });
    });

    it('adds a boat and a world map', () => {
      spyOn(stage, 'addChild');
      stage.setup();
      expect(stage.boat).toBeDefined();
      expect(stage.worldMap).toBeDefined();
      expect(stage.addChild).toHaveBeenCalledWith(stage.worldMap);
      expect(stage.addChild).toHaveBeenCalledWith(stage.boat);
    });
  });

  describe('#update', () => {
    it('updates the boat and updates the worldmap with the boats offset', () => {
      const offset = { x: 2, y: 2 };
      spyOn(stage.boat, 'update').and.returnValue(offset);
      spyOn(stage.worldMap, 'update');
      stage.update(100, 200);
      expect(stage.boat.update).toHaveBeenCalledWith(100, 200);
      expect(stage.worldMap.update).toHaveBeenCalledWith(offset);
    });
  });

  describe('driving the boat', () => {
    function keyEvent(key, eventType) {
      const event = document.createEvent('Event');
      event.keyCode = key;
      event.initEvent(eventType, true, false);
      window.dispatchEvent(event);
    }

    it('controls the boat via key handlers', () => {
      stage.setupKeyboard();
      keyEvent(37, 'keydown');
      expect(stage.boat.vx).toEqual(-1);
      keyEvent(37, 'keyup');
      expect(stage.boat.vx).toEqual(0);
      keyEvent(40, 'keydown');
      expect(stage.boat.vy).toEqual(1);
      keyEvent(40, 'keyup');
      expect(stage.boat.vy).toEqual(0);
    });
  });
});
