import constants from '../constants';

function oceanCoordinates({ x, y }) {
  const ox = parseInt(x / constants.OCEAN_SIZE, 10);
  const oy = parseInt(y / constants.OCEAN_SIZE, 10);
  return {
    x: (x < 0 ? ox - 1 : ox),
    y: (y < 0 ? oy - 1 : oy)
  };
}

function oceanID({ x, y }) {
  return `${x}:${y}`;
}

export { oceanCoordinates, oceanID };
