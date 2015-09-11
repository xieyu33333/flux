var gulp = require('gulp');
var riot = require('gulp-riot');
var concat = require('gulp-concat');

gulp.task('riot', function () {
    return gulp.src(['tags/*.tag', 'tags/*/*.tag', 'tags/*/*/*.tag'])
    .pipe(riot())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js'));
});
