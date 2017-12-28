import Renderer from '../canvas/renderer';
import WorldState from '../world_state';

export default {
  props: ['oceans'],
  name: 'pixicanvas',
  beforeMount() {
    this.worldState = new WorldState(this.oceans, this.$emit.bind(this));
  },
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
    const renderer = new Renderer(pixicanvas, [nav, footer], this.worldState);
    renderer.init();
  }
};
