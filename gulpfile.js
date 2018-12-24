
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('sass', ()=>{
  gulp.src('./scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers:['last 3 versions']
    }))
    .pipe(gulp.dest('./css/'))
});

gulp.task('serve',['sass'], ()=>{
  browserSync.init({
    server:
  })
})

gulp.task('default', ()=>{
  gulp.watch('./scss/styles.scss', ['sass'])
})
