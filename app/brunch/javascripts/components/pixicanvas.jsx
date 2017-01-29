import Renderer from '../canvas/renderer';

export default {
  name: 'pixicanvas',
  render(h) {
    return (
      <div class="pixicanvas-container">
        <div class="pixicanvas" id="pixicanvas">
        </div>
      </div>
    );
  },
  mounted() {
    const nav = document.getElementById('nav');
    const footer = document.getElementById('footer');
    const pixicanvas = document.getElementById('pixicanvas');

    const renderer = new Renderer(pixicanvas, [nav, footer]);
    renderer.init();
  }
};
