const gulp = require('gulp');
const { series } = require('gulp');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const webp = require('gulp-webp');

gulp.task('concat-minify-js', function() {
    return gulp.src(['assets/js/*.js'])
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('public'))
});

gulp.task('compile-minify-sass', function () {
    return gulp.src('assets/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('sass:watch', function () {
    gulp.watch('assets/scss', ['sass']);
});

gulp.task('minify-img', function() {
    return gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest('public/img'))
});

gulp.task('minify-html', () => {
    return gulp.src('html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });
});

exports.build = series('concat-minify-js', 'compile-minify-sass', 'minify-html', 'minify-img');
exports.serve = series('browser-sync');
