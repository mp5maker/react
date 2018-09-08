const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('default', ['css']);

gulp.task('css', function(){
    gulp.src('src/**/*.scss')
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build'));
})

gulp.task('watch', ['css'], function(){
    gulp.watch('src/**/*.scss', ['css']);
})