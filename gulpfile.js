// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const watch = require('gulp-watch');

// gulp.task('sass-compile', function (){
//     return gulp.src('./MoneyChange/scss/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error, sass.logError'))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./MoneyChange/css/'))
// })

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (done) {
    gulp.src('./MoneyChange/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./MoneyChange/css'));

    done();
});

gulp.task('sass:watch', function () {
    gulp.watch('./MoneyChange/scss/**/*.scss', ['sass']);
});
