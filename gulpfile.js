var gulp = require('gulp');
var sass = require('gulp-sass');
//var gls = require('gulp-live-server');
var server = require('gulp-server-livereload');




gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            defaultFile: 'home.html',
            open: true
        }));
})


gulp.task('default', ['sass', 'sass-watch', 'webserver']);


gulp.task('sass-watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});


gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css'))
});