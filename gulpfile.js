const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();

const paths = {
    scripts: {
        src: './src/',
        dest: './dist/'
    }
};

async function browserSyncRunner() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
}

async function html() {
    gulp.src([
        'src/index.html',
        // '*.html', // * means all files
        // '!footer.html' // Add exclamation to exclude files
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
}

async function js() {
    gulp.src('./src/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
};

async function build() {
    html();
    js();
}

async function watch() {
    gulp.watch('src', gulp.series([html, js]));
};

exports.serve = gulp.series(html, js, watch, browserSyncRunner);
exports.watch = watch;
exports.default = build;