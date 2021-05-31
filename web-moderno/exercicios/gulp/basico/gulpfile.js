const gulp = require('gulp')

// a task default é padrão, é a porta de entrada do gulp

gulp.task('default', () => {
  console.log('ok')
  gulp.start('copiar', 'fim')
})

// antes de executar copiar, a task antes1 e antes2 precisam ser executadas
gulp.task('copiar', ['antes1','antes2'],() => {
  console.log('Copiar!!!')
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])  // selecionando os arquivos
    // .pipe(transformacao1())                              // fazendo as transformações
    // .pipe(transformacao2())
    .pipe(gulp.dest('pastaB'))                              // enviando para o novo local
})


// é possível fazer também:
//   gulp.src('pastaA/*.txt')
//    gulp.src('pastaA/**/*.txt') // para copiar as subpastas também

// gulp.task('fim', ['fim1','fim2'])  // essa é uma task de única chamada

gulp.task('antes1', () => {
  console.log('Antes1')
})

gulp.task('antes2', () => {
  console.log('Antes2')
})

gulp.task('fim', () => {
  console.log('fim')
})

