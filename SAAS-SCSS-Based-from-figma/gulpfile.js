const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');

// Function to compile, prefix, and minify SCSS
function compilescss() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/css'));
}

// Function to optimize and move images
function optimizeimg() {
  return src('src/img/*.{jpg,png}')
    .pipe(imagemin([imagemin.mozjpeg({ quality: 80, progressive: true }), imagemin.optipng({ optimizationLevel: 2 })]))
    .pipe(dest('dist/img'));
}

// Function to create WebP versions of images
function webpImage() {
  return src('dist/img/*.{jpg,png}')
    .pipe(imagewebp())
    .pipe(dest('dist/img'));
}

// Function to minify JavaScript
function jsmin() {
  return src('src/js/*.js')
    .pipe(terser())
    .pipe(dest('dist/js'));
}

// Function to copy fonts
function copyFonts() {
  return src('src/fonts/**/*')
    .pipe(dest('dist/fonts'));
}

// Function to watch for changes
function watchTask() {
  watch('src/scss/**/*.scss', compilescss);
  watch('src/js/*.js', jsmin);
  watch('src/img/*', optimizeimg);
  watch('dist/img/*.{jpg,png}', webpImage);
  watch('src/fonts/**/*', copyFonts);
}

// Default Gulp task
exports.default = series(
  compilescss,
  jsmin,
  optimizeimg,
  webpImage,
  copyFonts,
  watchTask
);
