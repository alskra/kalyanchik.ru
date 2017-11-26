'use strict';

module.exports = function () {
  $.gulp.task('assets', function () {
    return $.combiner.obj([
      $.gulp.src('sources/assets/**/*.*'),
      $.gp.newer('build/assets'),
      $.gp.imagemin([
        $.gp.imagemin.gifsicle({interlaced: true}),
        require('imagemin-jpeg-recompress')({progressive: true}),
        $.gp.imagemin.optipng({optimizationLevel: 5}),
        $.gp.imagemin.svgo({plugins: [{removeViewBox: false}]})
      ], {
        verbose: true
      }),
      $.gp.debug({title: 'Debug task "assets"'}),
      $.gulp.dest('build/assets'),
      $.browserSync.stream()
    ]).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'Error task "assets"',
        message: err.message
      }
    }));
  });
};
