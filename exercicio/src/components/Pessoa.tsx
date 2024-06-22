import React from 'react'

type Props = {
    nome: string 
    idade?: number
}

const Pessoa = (props: Props) => {
  return (
    <div>
        <div>nome: {props.nome}</div>
        <div>nome: {props.idade ?? 'não informado'}</div>
    </div>
  )
}

export default Pessoa