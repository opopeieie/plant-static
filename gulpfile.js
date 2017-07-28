const gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean');


gulp.task('minifyCss', function(){
    return gulp.src('plant/src/styles/*.css')
        .pipe(minify())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
});


gulp.task('clean',function(){
    return gulp.src('./dist/css/*.css')
        .pipe(clean())
});


gulp.task('default', ['plant', 'watch']);
//test pull request

