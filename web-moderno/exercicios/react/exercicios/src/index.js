import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'

// destructuring
import { BoaTarde, BoaNoite } from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    {/* <Saudacao tipo="Bom Dia" nome="João" /> */}
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="João" />
      <Filho nome="Carlos" />
      <Filho nome="Jones" />
    </Pai>
  </div>

, document.getElementById('root'))


// import Multi from './componentes/Multiplos' 

  // ReactDOM.render(
  //   <div>
  //     <Multi.BoaTarde nome="xonado" />
  //     <Multi.BoaNoite nome="xonado" />
  //   </div>
  
  //   , document.getElementById('root'))
  