import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent // Esse componente ficará "privado" e visível somente para o Cursos Component, pois não exportamos ele em exports
  ],
  imports: [
    CommonModule
  ],

  // Dizer para o Angular quais são os Componentes ou Pipes que queremos expor para os outros módulos
  exports: [
    CursosComponent
  ],

  // Quais são os serviços que serão fornecidos
  providers: [
    CursosService
  ]
})
export class CursosModule { }
