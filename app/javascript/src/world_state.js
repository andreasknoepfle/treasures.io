import Ocean from './canvas/ocean';
import WorldMap from './canvas/world_map';
import { oceanCoordinates, oceanID } from './utils/ocean_helper';
import constants from './constants';

class WorldState {
  constructor(oceans, emitCallback) {
    this.worldPosition = { x: 0, y: 0 };
    this.worldMap = new WorldMap();
    this.oceans = oceans;
    this.emitCallback = emitCallback;
  }

  updateWorld(offset, width, height) {
    this.loadNewOceans();
    this.moveWorld(offset);
    const requiredOceans = this.requiredOceans(width, height);
    this.emitCallback('loadOceans', requiredOceans);

    this.worldMap.updateWorldPosition(this.worldPosition);
    return this.worldPosition;
  }

  // private methods

  loadNewOceans() {
    Object.keys(this.oceans).forEach((id) => {
      const ocean = this.oceans[id];
      if (ocean.fetched && !ocean.ui) {
        ocean.ui = new Ocean(ocean);
        this.worldMap.addChild(ocean.ui);
      }
    });
  }

  moveWorld(offset) {
    const newPosition = {
      x: this.worldPosition.x + offset.x,
      y: this.worldPosition.y + offset.y
    };
    if ((offset.x || offset.y) && this.canMove(newPosition)) {
      this.worldPosition = newPosition;
    }
    return this.worldPosition;
  }

  canMove(newPosition) {
    return !this.currentOcean().ui.collides({
      x: (1000 + (newPosition.x % 1000)) % 1000,
      y: (1000 + (newPosition.y % 1000)) % 1000
    });
  }

  requiredOceans(width, height) {
    const horizontalOceans = parseInt(width / constants.OCEAN_SIZE, 10) + 2;
    const verticalOceans = parseInt(height / constants.OCEAN_SIZE, 10) + 2;
    const { x, y } = this.currentOceanCoordinates();
    const oceansCoordinates = [];
    for (let i = x - horizontalOceans; i < x + horizontalOceans; i += 1) {
      for (let j = y - verticalOceans; j < y + verticalOceans; j += 1) {
        oceansCoordinates.push({ x: i, y: j });
      }
    }
    return oceansCoordinates;
  }

  currentOceanCoordinates() {
    return oceanCoordinates(this.worldPosition);
  }

  currentOcean() {
    const currentOceanID = oceanID(this.currentOceanCoordinates());
    return this.oceans[currentOceanID];
  }
}

export default WorldState;
