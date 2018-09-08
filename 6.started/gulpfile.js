const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('default', ['css', 'js']);

gulp.task('js', function(){
    gulp.src("build/**/*.js")
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets'));
});

gulp.task('css', function(){
    gulp.src('build/**/*.scss')
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'));
})

gulp.task('watch', ['css', 'js'], function(){
    gulp.watch('build/**/*.js', ['js']);
    gulp.watch('build/**/*.scss', ['css']);
})