'use strict';

module.exports = function () {
  $.gulp.task('images', $.gulp.series(
    function () {
      return $.combiner.obj([
        $.gulp.src(['sources/images/**/*.*']),
        $.gp.newer('build/static/images'),
        $.gp.imagemin([
          $.gp.imagemin.gifsicle({interlaced: true}),
          require('imagemin-jpeg-recompress')({progressive: true}),
          $.gp.imagemin.optipng({optimizationLevel: 5}),
          $.gp.imagemin.svgo({plugins: [{removeViewBox: false}]})
        ], {
          verbose: true
        }),
        $.gp.debug({title: 'Debug task "images"'}),
        $.gulp.dest('build/static/images'),
        $.browserSync.stream()
      ]).on('error', $.gp.notify.onError(function (err) {
        return {
          title: 'Error task "images"',
          message: err.message
        }
      }));
    },
    function () {
      return $.combiner.obj([
        $.gulp.src(['build/static/images/svg-icons/**/*.svg']),
        $.gp.svgSymbols(
          {
            id: 'icon-svg-%f',
            className: '.icon-svg-%f',
            svgClassname: 'svg-symbols',
            fontSize: 16,
            templates: ['default-svg', 'app_components/svg-symbols/_svg-symbols.scss']
          }
        ),
        $.gp.debug({title: 'Debug task "images.svg-symbols"'}),
        $.gulp.dest(function (file) {
          return file.extname === '.svg' ? 'build/static/images' : 'sources/styles/parts'
        }),
        $.browserSync.stream()
      ]).on('error', $.gp.notify.onError(function (err) {
        return {
          title: 'Error task "images.svg-symbols"',
          message: err.message
        }
      }));
    }
  ));
};
