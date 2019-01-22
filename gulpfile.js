var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpSass = require('gulp-sass');

var paths = {
    html: [
        'app/**/*.html'
    ],
    sass: [
        'app/styles/styles.scss'
    ],
    sassWatch: [
        'app/styles/**/*.scss'
    ],
    js: [
        'bower_components/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'app/**/*.js'
    ],
    jsWatch: [
        'app/**/*.js'
    ],
    images: [
        'app/images/**/*.*'
    ],
    resources: [
        'app/scripts/maps.js'
    ]
}

gulp.task('html', function() {
    gulp.src(paths.html)
            .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
            .pipe(gulpSass())
            .pipe(gulpConcat('styles.css'))
            .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    gulp.src(paths.js)
            .pipe(gulpConcat('scripts.js'))
            .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    gulp.src(paths.images)
            .pipe(gulp.dest('dist/images'));
})

gulp.task('resources', function() {
    gulp.src(paths.resources)
            .pipe(gulp.dest('dist'));
})

gulp.task('watch', function() {
    gulp.watch(paths.html, ['html'])
            .on('change', browserSync.reload);
    gulp.watch(paths.sassWatch, ['sass'])
            .on('change', browserSync.stream);
    gulp.watch(paths.jsWatch, ['js'])
            .on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'dist'
    });
});

gulp.task('default', ['html', 'sass', 'js', 'images', 'resources', 'watch', 'serve']);
