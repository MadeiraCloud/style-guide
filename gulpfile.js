var gulp = require('gulp'),
    connect = require('gulp-connect'),
    coffee = require('gulp-coffee'),
    exec = require('child_process').exec,
    path = require('path');

var compile = function() {
    gulp.src('js/*.coffee')
        .pipe(coffee({bare: true}).on('error', function(err) {console.log(err);}))
        .pipe(gulp.dest('js/'));
    exec('compass compile', {cwd: './'}, function() {
        // console.log('compile scss finished.');
    });
};

gulp.task('compile', function() {
    compile();
});

gulp.task('connect', function() {
    connect.server({
        port: '7000',
        root: path.resolve('./'),
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['**/*.html', '**/*.scss', '**/*.coffee', '**/*.css'], function(data) {
        console.info(data.type + ': ' + data.path);
        compile();
        connect.reload();
    });
});

gulp.task('default', ['compile', 'connect', 'watch']);