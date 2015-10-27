var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('copycss', function(){
    gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('dist/css'));
});

//gulp.task('copyfonts', function(){
//    gulp.src('src/fonts/**/*.*')
//        .pipe(gulp.dest('dist/fonts'));
//});
//
//gulp.task('copyimages', function(){
//    gulp.src('src/images/**/*.*')
//        .pipe(gulp.dest('dist/css'));
//});

//gulp.task('default',['browserify', 'copy', 'copycss', 'copyfonts', 'copyimages']);

gulp.task('default',['browserify', 'copy', 'copycss']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
