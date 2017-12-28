import Renderer from '../../../app/javascript/src/canvas/renderer';
import Stage from '../../../app/javascript/src/canvas/stage';
import SpriteHelper from '../../helpers/sprite_helper';

describe('Renderer', () => {
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 600;
  let renderer;
  let canvas;
  let verticalSiblings;
  let nav;
  let footer;
  let worldState;

  beforeEach(() => {
    nav = jasmine.createSpyObj('nav', ['offsetHeight']);
    footer = jasmine.createSpyObj('nav', ['offsetHeight']);
    verticalSiblings = [nav, footer];
    canvas = jasmine.createSpyObj('canvas', ['offsetWidth', 'appendChild']);
    SpriteHelper.mockSprites([]);
    worldState = jasmine.createSpyObj('worldState', ['worldMap']);
    spyOn(Stage.prototype, 'setup');
    renderer = new Renderer(canvas, verticalSiblings, worldState);
  });

  function mockCanvasSize() {
    canvas.offsetWidth = CANVAS_WIDTH;
    spyOn(renderer, 'mapfillHeight');
    renderer.mapfillHeight.and.returnValue(CANVAS_HEIGHT);
  }

  function expectToRequestAnimationFrame(callback) {
    window.requestAnimationFrame = jasmine.createSpy('requestAnimationFrame');
    callback();
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  }

  describe('#init', () => {
    it('loads pixi resources', () => {
      const loaderObject = jasmine.createSpyObj('loader', ['load']);
      spyOn(PIXI.loader, 'add').and.returnValue(loaderObject);
      renderer.init();
      expect(PIXI.loader.add).toHaveBeenCalledWith('spritesheet.json');
      expect(loaderObject.load).toHaveBeenCalledWith(jasmine.any(Function));
    });
  });

  describe('#setupPixi', () => {
    it('requests an animation frame', () => {
      expectToRequestAnimationFrame(() => { renderer.setupPixi(); });
    });

    it('sets up a stage', () => {
      renderer.setupPixi();
      expect(renderer.stage.setup).toHaveBeenCalled();
    });

    it('adds the renderer view to the canvas', () => {
      renderer.setupPixi();
      expect(canvas.appendChild).toHaveBeenCalledWith(jasmine.anything());
    });

    it('adds resize listeners', () => {
      spyOn(window, 'addEventListener');
      renderer.setupPixi();
      expect(renderer.application.renderer.autoResize).toBe(true);
      expect(window.addEventListener.calls.mostRecent().args)
        .toEqual(['resize', jasmine.any(Function)]);
    });
  });

  describe('#resize', () => {
    beforeEach(() => {
      renderer.setupPixi();
      spyOn(renderer.application.renderer, 'resize');
      mockCanvasSize();
    });

    it('resizes the renderer with the canvas size', () => {
      renderer.resize();
      expect(renderer.application.renderer.resize)
        .toHaveBeenCalledWith(CANVAS_WIDTH, CANVAS_HEIGHT);
    });
  });

  describe('#mapfillHeight', () => {
    it('defaults to window height for empty verticalSiblings', () => {
      renderer = new Renderer(canvas, []);
      window.innerHeight = 100;
      expect(renderer.mapfillHeight()).toEqual(100);
    });
  });

  describe('#update', () => {
    beforeEach(() => {
      renderer.setupPixi();
      spyOn(renderer.stage, 'update');
      spyOn(renderer.application, 'render');
      mockCanvasSize();
    });

    it('updates the stage', () => {
      renderer.update();
      expect(renderer.stage.update).toHaveBeenCalledWith(CANVAS_WIDTH, CANVAS_HEIGHT);
    });

    it('requests a new animation frame', () => {
      expectToRequestAnimationFrame(() => { renderer.update(); });
    });

    it('renders the stage', () => {
      renderer.update();
      expect(renderer.application.render).toHaveBeenCalledWith(renderer.stage);
    });
  });
});
