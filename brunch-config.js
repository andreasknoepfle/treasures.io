// See http://brunch.io for documentation.
module.exports = {
  paths: {
    watched: ['app/brunch'],
    public: 'vendor/assets'
  },

  modules: {
    autoRequire: {
      'javascripts/brunch/app.js': ['brunch/javascripts/app.js']
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
    },
    sass: {
      options: {
        mode: 'native',
        includePaths: [
          'node_modules/bourbon/core',
          'node_modules/bourbon-neat/app/assets/stylesheets',
          'node_modules/normalize.css'
        ],
        precision: 8,
        sourceMapEmbed: true
      }
    }
  }
};
