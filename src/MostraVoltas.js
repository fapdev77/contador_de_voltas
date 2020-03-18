import React from 'react'

const MostraVoltas = (props) => {
    return (
      <p className='voltas'>
      <h1> Contador de Voltas: </h1>
      <span >{props.voltas} </span><br/>
        {props.voltas < 2 ? 'Volta completa.' : 'Voltas completas.'}
      </p>
    )
}

export default MostraVoltas