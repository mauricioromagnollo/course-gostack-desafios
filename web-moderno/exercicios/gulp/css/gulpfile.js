const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'], () => {
  gulp.src('src/sass/index.scss')               // referencia o arquivo principal
    .pipe(sass().on('error', sass.logError))    // retorno de erro
    .pipe(uglifycss({ "uglyComments": true }))  // minifica os arquivos css
    .pipe(concat('estilo.min.css'))             // faz um merge de todos os arquivos em um
    .pipe(gulp.dest('build/css'))               // envia o arquivo para o diretorio
})

gulp.task('copiarHtml', () => {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
})