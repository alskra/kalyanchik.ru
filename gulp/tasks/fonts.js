'use strict';

module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.combiner.obj([
      $.gulp.src('sources/fonts/**/*.*'),
      $.gp.newer('build/static/fonts'),
      $.gp.debug({title: 'Debug task "fonts"'}),
      $.gulp.dest('build/static/fonts'),
      $.browserSync.stream()
    ]).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'Error task "fonts"',
        message: err.message
      }
    }));
  });
};
