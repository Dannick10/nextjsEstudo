import React from 'react'

type Props = {
    numero: number
    key: number
}

const Numero = (props: Props) => {
  return (
    <div key={props.key}>{props.numero}</div>
  )
}

export default Numero