const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel'); 

gulp.task('default', ['js', 'css']);

gulp.task('js', function(){
    gulp.src("src/**/*.js")
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('css', function(){
    gulp.src("src/**/*.scss")
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build'));
})

gulp.task('watch', ['js', 'css'], function(){
    gulp.watch('src/**/*.js',  ['js']);
    gulp.watch('src/**/*.scss', ['css']);
})