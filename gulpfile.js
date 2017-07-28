/* eslint-env node */
const gulp = require('gulp'),
    connect = require('gulp-connect'),
    proxy = require('http-proxy-middleware')

gulp.task('plant', () => {
    connect.server({
        port: 8001,
        root: 'plant',
        livereload: true,
        
    });
});


gulp.task('html', () => gulp.src(['plant/**/*.html', 'plant/**/*.html']).pipe(connect.reload()));
gulp.task('css', () => gulp.src(['plant/**/*.css', 'plant/**/*.css']).pipe(connect.reload()));
gulp.task('js', () => gulp.src(['plant/**/*.js', 'plant/**/*.js']).pipe(connect.reload()));

gulp.task('watch', () => {
    gulp.watch(['plant/**/*.html', 'plant-manage/**/*.html'], ['html']);
    gulp.watch(['plant/**/*.css', 'plant-manage/**/*.css'], ['css']);
    gulp.watch(['plant/**/*.js', 'plant-manage/**/*.js'], ['js', 'html']);
});

gulp.task('default', ['plant', 'watch']);
//test pull request