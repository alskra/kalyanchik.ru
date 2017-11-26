'use strict';

module.exports = function () {
  $.gulp.task('scripts', $.gulp.series(
    function () {
      return $.combiner.obj([
        $.gulp.src('sources/scripts/*.js'),
        $.gp.sourcemaps.init(),
        $.gp.include(),
        $.gp.jsbeautifier({js: {
          indent_size: 2
        }}),
        $.gp.sourcemaps.write('.'),
        $.gp.debug({title: 'Debug task "scripts"'}),
        $.gulp.dest('build/static/js'),
        $.browserSync.stream()
      ]).on('error', $.gp.notify.onError(function (err) {
        return {
          title: 'Error task "scripts"',
          message: err.message
        }
      }));
    },
    function (done) {
      if (!$.isDevelopment) {
        return $.combiner.obj([
          $.gulp.src(['build/static/js/*.js', '!**/*.min.*']),
          $.gp.rename({suffix: '.min'}),
          $.gp.uglify(),
          $.gp.debug({title: 'Debug task "scripts.min"'}),
          $.gulp.dest('build/static/js'),
          $.browserSync.stream()
        ]).on('error', $.gp.notify.onError(function (err) {
          return {
            title: 'Error task "scripts.min"',
            message: err.message
          }
        }));
      } else {
        done();
      }
    }
  ));
};