'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),

  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  combiner: require('stream-combiner2'),
  emittyPug: require('emitty').setup('sources', 'pug'),
  emittySCSS: require('emitty').setup('sources', 'scss'),
  sassInlineSVG: require('sass-inline-svg-utf8'),

  isDevelopment: process.env.NODE_ENV !== 'production',
  isWatch: false
};

$.config.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'images',
  $.gulp.parallel(
    'templates',
    'styles',
    'scripts',
    'fonts',
    'assets'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

$.gulp.task('prod', $.gulp.series(
  function (done) {
    $.isDevelopment = false;
    done();
  },
  'default'
));