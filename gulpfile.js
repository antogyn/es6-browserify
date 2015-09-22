var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var _ = require('lodash');

gulp.task('default', function() {
  return browserify('./src/entry.js', _.extend({ debug: true }))
    .transform(babelify)
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err.message); })
    .pipe(source('entry.js'))
    .pipe(gulp.dest('./static/'));;
});
