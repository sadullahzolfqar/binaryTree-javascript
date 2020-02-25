var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    minify  = require("gulp-babel-minify");
   //require("gulp-babel-minify");



gulp.task('scripts', function () {
    return gulp.src([
        'src/js/node.js',
        'src/js/binar-search-tree.js',
    ])
    .pipe(minify({
        mangle: {
          keepClassName: true
        }
      }))
    .pipe(concat('binar-search-tree.min.js'))
    .pipe(gulp.dest('dist/bns'));
});

