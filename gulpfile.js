const gulp = reqiure('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

// Copy all HTML files
gulp.task('copyHTML', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task('compileSASS', () => {
    gulp.src('src/sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'not ie <= 8'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/styles.css'));
});

// Minify CSS
gulp.task('minifyCSS', () => {
    gulp.src('dist/css/styles.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['copyHTML', 'compileSASS', 'minifyCSS']);

gulp.task('watch', () => {
    gulp.watch('src/*.html', ['copyHTML']);
    gulp.watch('src/sass/*.scss', ['compileSASS', 'minifyCSS']);
});