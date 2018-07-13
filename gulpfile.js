const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

const RES_PATH = 'src/resources';
const SAVE_PATH = 'src/public';

gulp.task('clean', () => {
  del.sync([`${SAVE_PATH}/**`]);
});

gulp.task('js', () => {
  gulp.src([
    `${RES_PATH}/js/jquery-3.3.1.min.js`,
    `${RES_PATH}/js/popper.min.js`,
    `${RES_PATH}/js/bootstrap.js`,
    `${RES_PATH}/js/mdb.js`,
  ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${SAVE_PATH}/js`));
});

gulp.task('sass', () => {
  gulp.src(`${RES_PATH}/scss/app.scss`)
    .pipe(sass({ style: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest(`${SAVE_PATH}/css`));
});

gulp.task('img', () => {
  gulp.src(`${RES_PATH}/img/**/**`)
    .pipe(gulp.dest(`${SAVE_PATH}/img`))
});

gulp.task('font', () => {
  gulp.src(`${RES_PATH}/font/**/**`)
    .pipe(gulp.dest(`${SAVE_PATH}/font`))
});

gulp.task('build', ['sass', 'js', 'img', 'font']);
gulp.task('default', ['clean', 'build']);
