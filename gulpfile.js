const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const server = require('gulp-develop-server');
const minify = require('gulp-minify');

const pathStyles = './dev/styles/*.sass';
const destStyles = './statics/css/';
const destJs = './statics/js';

gulp.task('styles', () => gulp.src(pathStyles)
.pipe(plumber())
.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
.pipe(plumber.stop())
.pipe(rename('styles.css'))
.pipe(gulp.dest(destStyles)));


gulp.task('js', () => gulp.src([
  './dev/js/index.js',
  ]).pipe(minify({
    ext: {
      src: '-debug.js',
      min: '.js',
    },
    exclude: ['tasks'],
  }))
  .pipe(gulp.dest(destJs)));

// Run server
gulp.task('server:start', server.listen({
  path: './app.js'
}));

gulp.task('watch', () => {
  gulp.watch('./dev/styles/**/*.sass', ['styles']);
  gulp.watch('./dev/js/*.js', ['js']);
  gulp.watch('./app.js', server.restart);
});

// If server scripts change, restart the server and then livereload.
gulp.task('default', ['watch', 'styles', 'js'], () => console.info
  ('\x1b[33m%s\x1b[0m', '[00:00:00] Gulp is watching for changes now'));
