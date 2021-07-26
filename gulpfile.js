'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', gulp.series('buildStyles'));
});