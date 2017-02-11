// See http://brunch.io for documentation.
module.exports = {
  paths: {
    watched: ['app/brunch'],
    public: 'vendor/assets'
  },

  modules: {
    autoRequire: {
      'javascripts/brunch/app.js': ['brunch/javascripts/app.jsx']
    }
  },

  npm: {
    enabled: true,
    aliases: {
      vue: 'vue/dist/vue.common.js'
    }
  },

  files: {
    javascripts: { joinTo: 'javascripts/brunch/app.js' },
    stylesheets: { joinTo: 'stylesheets/brunch/app.css' }
  },

  plugins: {
    babel: {
      presets: ['es2015'],
      plugins: ['transform-vue-jsx'],
      pattern: /\.(js|jsx)$/
    }
  }
};
