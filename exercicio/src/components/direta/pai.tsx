import React from 'react'
import Filho from './filho'

type Props = {
    familia: string
    nome: string
}

const Pai = (props: Props) => {
  return (
    <div>
        <Filho nome="pedro" familia={props.familia}/>
        <Filho nome="pedro" familia={props.familia}/>
        <Filho {...props}/>
    </div>
  )
}

export default Pai