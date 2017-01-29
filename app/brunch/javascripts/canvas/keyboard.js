// Taken from https://github.com/kittykatattack/learningPixi#keyboard

function keyboard(keyCode) {
  const key = {};

  key.code = keyCode;
  key.press = undefined;
  key.release = undefined;

  key.handler = function handler(event, callback) {
    if (event.keyCode === key.code) {
      event.preventDefault();
      return callback();
    }

    return true;
  };

  key.downHandler = function downHandler(event) {
    key.handler(event, key.press);
  };

  key.upHandler = function upHandler(event) {
    key.handler(event, key.release);
  };

  // Attach event listeners

  window.addEventListener('keydown', key.downHandler.bind(key), false);
  window.addEventListener('keyup', key.upHandler.bind(key), false);

  return key;
}

export default keyboard;
