// Taken from https://github.com/kittykatattack/learningPixi#keyboard
class Keyboard {
  static key(keyCode) {
    const keyHandler = {};

    keyHandler.code = keyCode;
    keyHandler.press = undefined;
    keyHandler.release = undefined;

    keyHandler.handler = function handler(event, callback) {
      if (event.keyCode === keyHandler.code) {
        event.preventDefault();
        return callback();
      }

      return true;
    };

    keyHandler.downHandler = function downHandler(event) {
      keyHandler.handler(event, keyHandler.press);
    };

    keyHandler.upHandler = function upHandler(event) {
      keyHandler.handler(event, keyHandler.release);
    };

    // Attach event listeners

    window.addEventListener('keydown', keyHandler.downHandler.bind(keyHandler), false);
    window.addEventListener('keyup', keyHandler.upHandler.bind(keyHandler), false);

    return keyHandler;
  }
}

export default Keyboard;
