var gulp = require('gulp');

var addsrc = require('gulp-add-src');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var del = require('del');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var uglify = require('gulp-uglify');

gulp.task('clean', function(cb) {
  del(['static', 'production'], cb);
});

gulp.task('images', function() {
    return gulp.src([
                'images/**/*'
            ])
        .pipe(gulp.dest('static/images'))
        .pipe(gulp.dest('production/images'))
});

gulp.task('sass', ['scss-lint'], function() {
    return gulp.src(['css/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(addsrc([
                'node_modules/normalize.css/normalize.css'
            ]))
        .pipe(gulp.dest('static/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('production/css'))
});

gulp.task('scss-lint', function() {
  return gulp.src('css/*.scss')
    .pipe(scsslint());
});

gulp.task('js', function() {
    return gulp.src([
                        'js/*.js'
                    ])
        .pipe(gulp.dest('static/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('production/js'))
});

gulp.task('html', function() {
    var opts = {
        conditionals: true,
        spare:true,
        quotes: true
    };

    return gulp.src(['html/*.html'])
        .pipe(gulp.dest('static'))
        .pipe(replace('.css', '.min.css'))
        .pipe(replace('.js', '.min.js'))
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('production'))
});

gulp.task('browser-sync', function() {
    browserSync.init(['**/css/*', '**/js/*', '**/html/*', '**/images/*'], {
        server: {
            host: "local.dev",
            baseDir: "./static/"
        },
        open: true,
        ghostMode: false
    });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('html/*.html', ['html']);
  gulp.watch('images/**', ['images']);
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('build', ['html', 'images', 'sass', 'js'])
gulp.task('default', ['watch', 'build', 'browser-sync']);






