const gulp = require('gulp')
const sass = require('gulp-sass')

// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
})

gulp.task('default', ['sass'])
