import Vue from 'vue';
import Renderer from '../../../app/brunch/javascripts/canvas/renderer';
import pixicanvas from '../../../app/brunch/javascripts/components/pixicanvas.jsx';

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
