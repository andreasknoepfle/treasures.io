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
  }
});
