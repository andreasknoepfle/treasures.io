import Vue from 'vue';
import 'pixi.js';
import pixicanvas from './components/pixicanvas.jsx';
import sidebar from './components/sidebar.jsx';
import { oceanID } from './utils/ocean_helper';

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
    loadOceans(oceans) {
      const requiredOceans = oceans.filter(ocean => !this.oceans[oceanID(ocean)]);
      requiredOceans.forEach((ocean) => { this.oceans[oceanID(ocean)] = { fetched: false }; });
      if (requiredOceans.length < 1) return;
      fetch(`api/oceans.json?limit=${requiredOceans.length}`).then((response) => {
        response.json().then((newOceans) => {
          requiredOceans.forEach((ocean, index) => {
            this.oceans[oceanID(ocean)] = {
              ...ocean,
              ...newOceans[index],
              fetched: true
            };
          });
        });
      });
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

export default vm;
