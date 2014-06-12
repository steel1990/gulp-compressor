gulp-compressor
===============

A gulp plugin for compress html,css and js.

html minify is use [htmlcompressor](https://code.google.com/p/htmlcompressor/),all configs are valid.

css and js minify is use [yuicompressor](http://yui.github.io/yuicompressor/),all configs are valid too.

## How To Use

    var gulp = require('gulp');
    var compressor = require('gulp-compressor');

    // html compressor
    gulp.task('html', function () {
        gulp.src('path/to/*.html')
            .pipe(compressor({
                'remove-intertag-spaces': true,
                'simple-bool-attr': true,
                'compress-js': true,
                'compress-css': true
            }))
            .pipe(gulp.dest('path/to/output/'));
    });

    // js compressor
    gulp.task('js', function () {
        gulp.src('path/to/*.js')
            .pipe(compressor())
            .pipe(gulp.dest('path/to/output/'));
    });

    // css compressor
    gulp.task('css', function () {
        gulp.src('path/to/*.css')
            .pipe(compressor())
            .pipe(gulp.dest('path/to/output/'));
    });