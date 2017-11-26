'use strict';

module.exports = {
  tasks: [
    './gulp/tasks/clean.js',
    './gulp/tasks/templates.js',
    './gulp/tasks/styles.js',
    './gulp/tasks/scripts.js',
    './gulp/tasks/images.js',
    './gulp/tasks/fonts.js',
    './gulp/tasks/assets.js',
    './gulp/tasks/watch.js',
    './gulp/tasks/serve.js'
  ],
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10'],
    add: true,
    remove: true,
    cascade: false
  },
  cleanCss: {
    dev: {
      format: 'beautify',
      level: {
        1: {
          all: false,
          cleanupCharsets: true
        }
      },
      debug: true
    },
    prod: {
      level: 2,
      debug: true
    }
  }
};