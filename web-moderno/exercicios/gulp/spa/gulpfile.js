/**
 * É possível que o servidor execute antes dos arquivos estarem prontos, por estarem em paralelos;
 * o sequence() é utilizado para ordenar a execução de forma sequencial;
 * 
 * Foi criado uma flag production (ver arquivo package.json), então um if(util.env.production) foi criado
 * para execuar somente se tiver uma flag production
 * $ gulp --production
 * 
 * sequence() -> criando uma sequencia de execução, solucionar o problema de execução do server antes de renderizar os arquivos
 */

 const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
  if(util.env.production) {                             
    sequence('deps', 'app')
    // gulp.start('deps', 'app')
  } else {
    sequence('deps', 'app', 'servidor')
    // gulp.start('deps', 'app', 'servidor')
  }

})