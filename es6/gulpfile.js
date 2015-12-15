var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');


watch(['app/*.js'], function() {
  gulp.start('default');
});

gulp.task('default', function () {

  return gulp.src('app/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
