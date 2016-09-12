'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss').pipe(sourcemaps.init()).pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })).pipe(sass().on('error', sass.logError)).pipe(sourcemaps.write({
            includeContent: false
        })).pipe(gulp.dest('./css'))
        //min css
        .pipe(sourcemaps.init()).pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })).pipe(sass({
            outputStyle: 'compressed'
        })).on('error', sass.logError).pipe(rename({
            suffix: '.min'
        })).pipe(sourcemaps.write({
            includeContent: false
        })).pipe(gulp.dest('./css'));
});
gulp.task('watch', function() {
    gulp.watch('**/sass/*.scss', ['sass'])
});
gulp.task('default', ['sass', 'watch']);
