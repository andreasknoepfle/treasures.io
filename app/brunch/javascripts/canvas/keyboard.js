// Taken from https://github.com/kittykatattack/learningPixi#keyboard
let keyboard = function(keyCode) {
  var key = {}
  key.code = keyCode
  key.press = undefined
  key.release = undefined

  key.handler = function(event, callback) {
    if (event.keyCode === key.code) {
      event.preventDefault()
      return callback()
    }
  }

  //The `downHandler`
  key.downHandler = function(event) {
    key.handler(event, key.press)
  }

  //The `upHandler`
  key.upHandler = function(event) {
    key.handler(event, key.release)
  }

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  )
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  )
  return key
}

export { keyboard }
