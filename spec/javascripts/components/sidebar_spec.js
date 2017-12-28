import Vue from 'vue';
import sidebar from '../../../app/javascript/src/components/sidebar.jsx';

describe('sidebar component', () => {
  it('renders', () => {
    expect(new Vue(sidebar).$mount()).toBeDefined();
  });
});
