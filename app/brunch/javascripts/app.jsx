import Vue from 'vue';
import 'pixi.js';
import pixicanvas from './components/pixicanvas.jsx';
import sidebar from './components/sidebar.jsx';

// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  el: '#app',
  components: {
    pixicanvas,
    sidebar
  },
  data: {
    coordinates: { x: 0, y: 0 },
    oceans: {}
  },
  methods: {
    loadOceans(requiredOceans) {
      for (const requiredOcean of requiredOceans) {
        const oceanID = `${requiredOcean.x}:${requiredOcean.y}`;
        if (!this.oceans[oceanID]) {
          this.oceans[oceanID] = { fetched: false };
          fetch('api/oceans.json?limit=1').then((response) => {
            response.json().then((json) => {
              const ocean = json[0];
              ocean.x = requiredOcean.x;
              ocean.y = requiredOcean.y;
              ocean.fetched = true;
              this.oceans[oceanID] = ocean;
            });
          });
        }
      }
    }
  },
  render(h) {
    return (
      <div>
        <pixicanvas oceans={this.oceans}
                    onLoadOceans={this.loadOceans.bind(this)}>
        </pixicanvas>
        <sidebar coordinates={this.coordinates}></sidebar>
      </div>
    );
  }
});
