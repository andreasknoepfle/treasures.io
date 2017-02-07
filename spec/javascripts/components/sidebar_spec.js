import Vue from 'vue';
import sidebar from '../../../app/brunch/javascripts/components/sidebar.jsx';

describe('sidebar component', () => {
  it('renders', () => {
    expect(new Vue(sidebar).$mount()).toBeDefined();
  });
});
