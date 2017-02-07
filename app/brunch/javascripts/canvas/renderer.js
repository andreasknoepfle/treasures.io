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
    // Create the renderer
    this.renderer = PIXI.autoDetectRenderer(this.element.offsetWidth, this.mapfillHeight());

    // Add the canvas to the HTML document
    this.element.appendChild(this.renderer.view);
    this.renderer.backgroundColor = 0x2980b9;

    // Add the world map
    this.stage = new Stage();
    this.stage.setup();

    this.renderer.autoResize = true;

    window.addEventListener('resize', this.resize.bind(this));
    window.requestAnimationFrame(this.update.bind(this));
  }

  resize() {
    this.renderer.resize(this.element.offsetWidth, this.mapfillHeight());
  }

  update() {
    this.stage.update(this.element.offsetWidth, this.mapfillHeight());
    this.renderer.render(this.stage);

    window.requestAnimationFrame(this.update.bind(this));
  }

  mapfillHeight() {
    const siblingHeight = this.verticalSiblings.reduce(
      (height, element) => (height + element.offsetHeight), 0);
    return window.innerHeight - (siblingHeight || 0);
  }
}

export default Renderer;
