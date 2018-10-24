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

gulp.task('watch', function() {
    gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['html', 'watch']);
