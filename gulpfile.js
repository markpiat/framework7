var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');


gulp.task('serve', function() {

    //2. serve at custom port
    var server = gls.static('dist', 8888);
    server.start();

});


gulp.task('default', ['sass', 'sass-watch', 'serve']);


gulp.task('sass-watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});


gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css'))
});