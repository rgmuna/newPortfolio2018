var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .on('error', handleError);
});

//Watch task
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss',['styles']);

});

// gulp.task('webserver', function() {
//   gulp.src('public/index.html')
//     .pipe(webserver({
//       livereload: true,
//       directoryListing: true,
//       open: true,
//       fallback: 'index.html'
//     }));
// });

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
