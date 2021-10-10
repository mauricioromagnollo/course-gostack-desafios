/**
 * Reduzindo arquivo para o browser
 */

const gulp = require('gulp')
const concat = require('gulp-concat')
//const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      minified: true, // serve para minificar também, igual o uglify()
      comments: false,
      presets: ["env"]  // pega o último preset do EcmaScript, para não ficar precisando definir se é o ES6, 7 ...
    }))
    // .pipe(uglify()) // tornando o código compacto para otimizar
    .on('error', function (err) { console.log(err) })
    .pipe(concat('codigo.min.js'))  // código minimizado/otimizado
    .pipe(gulp.dest('build'))
})
