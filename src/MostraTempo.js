import React from 'react'

const MostraTempo = (props) => {
    const mostraTempoTexto=props.text
    const tempo = props.tempo
    const minutos = Math.floor(tempo / 60)
    const segundos = parseFloat(tempo % 60).toFixed(0)
    const minutosStr = minutos < 10 ? '0' + minutos : minutos
    const segundosStr = segundos < 10 ? '0' + segundos : segundos
    return (
      <p className={props.className}>
      <span>{`${minutosStr}:${segundosStr}`}</span> <br/>
        {mostraTempoTexto}
      </p>
    )
}

export default MostraTempo