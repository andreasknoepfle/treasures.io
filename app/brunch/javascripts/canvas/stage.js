import { Container } from 'pixi.js';
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

class Stage extends Container {
  constructor(worldState) {
    super();
    this.worldState = worldState;
    this.worldMap = worldState.worldMap;
    this.boat = new Boat();
    this.x = 0;
    this.y = 0;
  }

  setup() {
    this.addChild(this.worldMap);
    this.addChild(this.boat);
    this.setupKeyboard();
  }

  update(width, height) {
    this.boat.update(width, height);
    this.worldMap.update(width, height);

    const worldOffset = this.boat.move();
    this.worldState.updateWorld(worldOffset, width, height);
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
