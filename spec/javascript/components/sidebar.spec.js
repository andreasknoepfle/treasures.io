import Vue from 'vue';
import sidebar from '../../../app/javascript/src/components/sidebar.jsx';

describe('sidebar component', () => {
  beforeEach(() => {
    Vue.config.productionTip = false;
  });

  it('renders', () => {
    expect(new Vue(sidebar).$mount()).toBeDefined();
  });
});
