import React from 'react'
import Filho1 from './filho1'

type Props = {}

const Pai1 = (props: Props) => {

    const falarcomigo = (...param) => {
        console.log(param)
    }


  return (
    <div>
        <Filho1 funcao={falarcomigo}/>
    </div>
  )
}

export default Pai1