import 'pixi.js';
import Stage from './stage';

class Renderer {
  constructor(element, verticalSiblings) {
    this.element = element;
    this.verticalSiblings = verticalSiblings;
  }

  init() {
    PIXI.loader
      .add('spritesheet.json')
      .load(this.setupPixi.bind(this));
  }

  setupPixi() {
    // Create the application
    this.application = new PIXI.Application(this.element.offsetWidth,
                                         this.mapfillHeight(),
                                         { backgroundColor: 0x2980b9 });

    // Add the canvas to the HTML document
    this.element.appendChild(this.application.view);

    // Add the world map
    this.stage = new Stage();
    this.stage.setup();
    this.application.stage = this.stage;

    this.application.renderer.autoResize = true;

    window.addEventListener('resize', this.resize.bind(this));
    window.requestAnimationFrame(this.update.bind(this));
  }

  resize() {
    this.application.renderer.resize(this.element.offsetWidth, this.mapfillHeight());
  }

  update() {
    this.stage.update(this.element.offsetWidth, this.mapfillHeight());
    this.application.render(this.stage);

    window.requestAnimationFrame(this.update.bind(this));
  }

  mapfillHeight() {
    const siblingHeight = this.verticalSiblings.reduce(
      (height, element) => (height + element.offsetHeight), 0);
    return window.innerHeight - (siblingHeight || 0);
  }
}

export default Renderer;
