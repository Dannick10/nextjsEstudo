import React from 'react'

type Props = {
    numero: number
    key: number
}

const Numero = (props: Props) => {
  return (
    <div key={props.key} style={{padding: '1em', borderRadius: '50%', background: 'rgb(30,30,30)', color: 'white'}}>{props.numero}</div>
  )
}

export default Numero