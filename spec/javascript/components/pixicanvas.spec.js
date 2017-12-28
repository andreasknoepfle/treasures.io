import Vue from 'vue';
import Renderer from '../../../app/javascript/src/canvas/renderer';
import pixicanvas from '../../../app/javascript/src/components/pixicanvas.jsx';

describe('pixicanvas component', () => {
  beforeEach(() => {
    spyOn(Renderer.prototype, 'init');
  });

  it('renders', () => {
    expect(new Vue(pixicanvas).$mount()).toBeDefined();
  });

  it('invokes the renderer', () => {
    new Vue(pixicanvas).$mount();
    expect(Renderer.prototype.init).toHaveBeenCalled();
  });
});
