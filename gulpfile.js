const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

function html() {
  return gulp.src('src/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
}

function reload(done) {
  browserSync.reload();
  done();
}

function serve() {
  browserSync.init({
    server: { baseDir: './' }
  });
  gulp.watch('src/**/*.html', gulp.series(html, reload));
  gulp.watch('css/*.css', reload);
}

exports.html = html;
exports.default = gulp.series(html, serve);
