import WorldMap from './world_map';
import Boat from './boat';
import keyboard from './keyboard';

const left = {
  keyCode: 37, axis: 'vx', direction: -1
};
const up = {
  keyCode: 38, axis: 'vy', direction: -1
};
const right = {
  keyCode: 39, axis: 'vx', direction: 1
};
const down = {
  keyCode: 40, axis: 'vy', direction: 1
};
const controls = [left, up, down, right];

class Stage extends PIXI.Container {
  constructor() {
    super();
    this.worldMap = new WorldMap();
    this.boat = new Boat();
    this.addChild(this.worldMap);
    this.addChild(this.boat);
    this.setupKeyboard();
  }

  update(width, height) {
    this.worldMap.update();
    this.boat.update(width, height);
  }

  stopBoat(axis) {
    this.worldMap[axis] = 0;
    this.boat[axis] = 0;
  }

  moveBoat(axis, direction) {
    this.worldMap[axis] = (-1 * direction) * 5;
    this.boat[axis] = direction;
  }

  setupKeyboard() {
    controls.forEach(({ keyCode, axis, direction }) => {
      const key = keyboard(keyCode);
      key.press = () => {
        this.moveBoat(axis, direction);
      };
      key.release = () => {
        this.stopBoat(axis);
      };
    });
  }
}

export default Stage;
