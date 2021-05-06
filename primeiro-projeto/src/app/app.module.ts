/**
 * Esse é o Módulo Raíz da nossa aplicação
 */

import { NgModule } from '@angular/core';

// Esse módulo prepara a aplicação para ser executada no Browser
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

// Importação dos componentes criados manualmente
import { MeuPrimeiroComponente } from './meu-primeiro-componente/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

// Importação dos nossos módulos personalizados
import { CursosModule } from './cursos/cursos.module';


@NgModule({

  // Aqui é onde você registra os componentes para eles ficarem visíveis por toda a aplicação.
  // Os pipes também são listados dentro desse Array.
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuPrimeiro2Component
  ],

  // Utilizado para importar módulos do Angular e personalizados.
  // Torna o módulo visível para toda aplicação e principalmente para os compontentes
  // que estão em declarations
  imports: [
    BrowserModule,
    CursosModule
  ],

  // Listar os serviços que vão ficar disponíveis para os módulos listados em declarations,
  // como nesse caso estamos no módulo raíz, ficara visível para toda a aplicação.
  // Por exemplo, serviços de verficação de login, autenticação...
  providers: [],

  // Existe apenas no módulo Raíz da aplicação, no caso esse módulo. Equivalente ao <App /> do React.
  bootstrap: [AppComponent]
})
export class AppModule { }
