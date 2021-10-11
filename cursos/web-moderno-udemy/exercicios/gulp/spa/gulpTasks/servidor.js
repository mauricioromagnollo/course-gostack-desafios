/**
 * Parte do build específica para o servidor
 * Adicionando Web Server
 */

const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
  watch('src/**/*.html', () => gulp.setMaxListeners('app.html'))
  watch('src/**/*.scss', () => gulp.setMaxListeners('app.css'))
  watch('src/**/*.js', () => gulp.setMaxListeners('app.js'))
  watch('src/assets/imgs/**/*.*', () => gulp.setMaxListeners('app.imgs')) 
})

gulp.task('servidor', ['monitorarMudancas'], () => {
  return gulp.src('build').pipe(webserver({
    livereload: true,
    port: 8080,
    open: true
  }))
})

/**
 * Construir sem Iniciar o Servidor:
 * $  npm run build  
 * Construir e Iniciar o Servidor:
 * $  npm start
 */