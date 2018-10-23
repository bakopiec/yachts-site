var gulp = require('gulp');

var paths = {
    html: [
        'app/**/*.html'
    ]
}

gulp.task('html', function() {
    gulp.src(paths.html)
            .pipe(gulp.dest('dist'));
});

gulp.task('default', ['html']);
