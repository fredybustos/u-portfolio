const gulp = require('gulp')
const concat = require('gulp-concat')
const minifycss =require('gulp-minify-css')


gulp.task('minify-css', function () {
  gulp.src('./static/css/*.css')
  .pipe(concat('app.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('./static/css'))
});
