'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.isWatch = true;

    $.gulp.watch('sources/**/*.pug', $.gulp.series('templates'))
      .on('all', (event, filepath) => {
        event !== 'unlink' ? $.pugChangedFile = filepath : undefined;
      });
    $.gulp.watch('sources/**/*.{css,scss}', $.gulp.series('styles'))
      .on('all', (event, filepath) => {
        event !== 'unlink' ? $.scssChangedFile = filepath : undefined;
      });
    $.gulp.watch('sources/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('sources/images/**/*.*', $.gulp.series('images'));
    $.gulp.watch('sources/fonts/**/*.*', $.gulp.series('fonts'));
    $.gulp.watch('sources/assets/**/*.*', $.gulp.series('assets'));
  });
};
