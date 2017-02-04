import WorldMap from './world_map';
import Boat from './boat';
import Keyboard from './keyboard';

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
const controls = [left, up, right, down];

class Stage extends PIXI.Container {
  constructor() {
    super();
    this.worldMap = new WorldMap();
    this.boat = new Boat();
  }

  setup() {
    this.addChild(this.worldMap);
    this.addChild(this.boat);
    this.setupKeyboard();
  }

  update(width, height) {
    const offset = this.boat.update(width, height);
    this.worldMap.update(offset);
  }

  stopBoat(axis) {
    this.boat[axis] = 0;
  }

  moveBoat(axis, direction) {
    this.boat[axis] = direction;
  }

  setupKeyboard() {
    controls.forEach(({ keyCode, axis, direction }) => {
      const key = Keyboard.key(keyCode);
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
