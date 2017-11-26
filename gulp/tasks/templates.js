'use strict';

module.exports = function () {
  $.gulp.task('templates', function () {
    return $.combiner.obj([
      $.gulp.src('sources/templates/*.pug'),
      $.gp.if($.isWatch, $.emittyPug.stream($.pugChangedFile)),
      $.gp.pug({
        locals: {
          $: {
            package: $.package,
            config: $.config,
            isDevelopment: $.isDevelopment
          }
        }
      }),
      $.gp.prettify({indent_inner_html: true, indent_size: 2, unformatted: ['pre', 'code']}),
      $.gp.typograf({locale: ['ru', 'en-US'], htmlEntity: {type: 'UTF-8'}}),
      $.gp.debug({title: 'Debug task "templates"'}),
      $.gulp.dest('build'),
      $.browserSync.stream()
    ]).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'Error task "templates"',
        message: err.message
      }
    }));
  });
};
