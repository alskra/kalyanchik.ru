'use strict';

module.exports = function () {
  $.gulp.task('styles', $.gulp.series(
    function () {
      return $.combiner.obj([
        $.gulp.src('sources/styles/*.scss'),
        $.gp.if($.isWatch, $.emittySCSS.stream($.scssChangedFile)),
        $.gp.sourcemaps.init(),
        $.gp.sassGlob(),
        $.gp.sass({
          includePaths: [],
          outputStyle: 'expanded',
          functions: $.sassInlineSVG()
        }),
        $.gp.autoprefixer($.config.autoprefixer),
        $.gp.cleanCss($.config.cleanCss.dev),
        $.gp.sourcemaps.write('.'),
        $.gp.debug({title: 'Debug task "styles"'}),
        $.gulp.dest('build/static/css'),
        $.browserSync.stream()
      ]).on('error', $.gp.notify.onError(function (err) {
        return {
          title: 'Error task "styles"',
          message: err.message
        }
      }));
    },
    function (done) {
      if (!$.isDevelopment) {
        return $.combiner.obj([
          $.gulp.src(['build/static/css/*.css', '!**/*.min.*']),
          $.gp.rename({suffix: '.min'}),
          $.gp.cleanCss($.config.cleanCss.prod),
          $.gp.debug({title: 'Debug task "styles.min"'}),
          $.gulp.dest('build/static/css'),
          $.browserSync.stream()
        ]).on('error', $.gp.notify.onError(function (err) {
          return {
            title: 'Error task "styles.min"',
            message: err.message
          }
        }));
      } else {
        done();
      }
    }
  ));
};