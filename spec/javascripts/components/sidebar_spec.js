import Vue from 'vue';
import sidebar from '../../../app/brunch/javascripts/components/sidebar.jsx';

describe('sidebar', () => {
  it('renders', () => {
    new Vue(sidebar).$mount();
  });
});
