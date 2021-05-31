import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// é possível também retornar elementos como um array
/*
export default props => [
  <h1>Bom dia {props.nome}!</h1>,
  <h2>Até breve!</h2>
]
*/

// Esse componente fragmento serve para não precisar da DIV e não criar nada no html, somente os elementos
// É possível também importar o fragment
// import { Fragment } from 'react'
// E assim utilizar a tag como somente <Fragment> </Fragment>

// export default props => (
//   <React.Fragment>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Até breve!</h2>
//   </React.Fragment>  
// )

// export default props => (
//   <div>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Até breve!</h2>
//   </div>  
// )