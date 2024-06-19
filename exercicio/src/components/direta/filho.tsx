import React from 'react'

interface Props {
    familia: string
    nome: string
}

const Filho = ({familia,nome}: Props) => {
  return (
    <>
    <h3>{nome}</h3>
    <h1>{familia}</h1>
    </>
  )
}

export default Filho